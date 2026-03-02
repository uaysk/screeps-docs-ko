title: 외부 도구로 스크립트 커밋하기
---

Screeps에는 게임 스크립트를 작성하기 위한 편리한 내장 코드 에디터가 있습니다. 하지만 어떤 경우에는(예: JavaScript가 아닌 다른 언어를 사용하거나, IDE와 연동하고 싶을 때) 게임 밖에서 Screeps 계정으로 스크립트를 커밋해야 합니다.
 
{% note info %}
외부 동기화를 사용하려면 [계정 설정](https://screeps.com/a/#!/account/auth-tokens)에서 auth token을 생성해야 합니다.
{% endnote %}

## Grunt 태스크 사용하기

[Grunt](http://gruntjs.com)를 처음 사용한다면, [Getting Started](http://gruntjs.com/getting-started) 가이드를 먼저 확인하세요. 여기에는 [Gruntfile](http://gruntjs.com/sample-gruntfile) 생성 방법과 Grunt 플러그인 설치/사용 방법이 설명되어 있습니다. 흐름에 익숙해지면 다음 명령으로 플러그인을 설치할 수 있습니다:

    npm install grunt-screeps

Gruntfile.js를 다음과 같이 설정합니다:

    module.exports = function(grunt) {

        grunt.loadNpmTasks('grunt-screeps');
    
        grunt.initConfig({
            screeps: {
                options: {
                    email: '<your e-mail>',
                    token: '<your auth token>',
                    branch: 'default',
                    //server: 'season'
                },
                dist: {
                    src: ['dist/*.js']
                }
            }
        });
    }

이제 다음 명령으로 `dist` 폴더의 코드를 Screeps 계정에 커밋할 수 있습니다:

    grunt screeps

## 직접 API 접근 사용하기

Screeps Web API에는 스크립트를 다루기 위한 엔드포인트 `https://screeps.com/api/user/code`가 있습니다. 지원되는 메서드는 `POST`(쓰기)와 `GET`(읽기) 두 가지입니다. 두 메서드 모두 [Basic access authentication](http://en.wikipedia.org/wiki/Basic_access_authentication)을 받습니다. 엔드포인트는 모듈 이름을 키로, 내용을 값으로 하는 modules 오브젝트를 포함한 JSON 구조를 주고받습니다.

Node.js로 코드를 커밋하는 예시:

    var https = require('https');

    var email = '<your e-mail>',
        password = '<your password>',
        data = {
            branch: 'default',         
            modules: {
                main: 'require("hello");',
                hello: 'console.log("Hello World!");'
            }
        };

    var req = https.request({
        hostname: 'screeps.com',
        port: 443,
        path: '/api/user/code',
        method: 'POST',
        auth: email + ':' + password,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });

    req.write(JSON.stringify(data));
    req.end();

요청(Request):

    POST /api/user/code HTTP/1.1
    Content-Type: application/json; charset=utf-8
    Host: screeps.com:443
    Authorization: Basic PHlvdXIgZS1tYWlsPjo8eW91ciBwYXNzd29yZD4=
    Connection: close
    Transfer-Encoding: chunked

    {"branch":"default","modules":{"main":"require(\"hello\");","hello":"console.log(\"Hello World!\");"}}

응답(Response):

    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 8
    Date: Mon, 02 Feb 2015 18:46:11 GMT
    Connection: close

    {"ok":1}

