Screeps에는 게임 스크립트를 작성하기 위한 편리한 내장 코드 편집기가 있습니다. 그러나 JavaScript 이외의 언어를 사용하거나 IDE와 통합하려는 경우 외부 도구를 사용하여 게임 스크립트를 Screeps 계정에 커밋해야 할 수 있습니다.
{% note info %}
외부 동기화를 사용하려면 [account settings](https://screeps. com/a/#! /account/auth-tokens)에서 auth token을 만들어야 합니다.
{% endnote %}

## Grunt task 사용하기

Grunt를 사용해본 적이 없는 경우 [Getting Started](http://gruntjs. com/getting-started) 가이드를 읽어보시기 바랍니다. Grunt 플러그인을 설치하고 사용하는 방법과 Gruntfile 생성 방법에 대해 자세히 설명되어 있습니다.

일단 해당 프로세스에 익숙해지면, 다음의 명령을 사용하여 이 플러그인을 설치할 수 있습니다:

    npm install grunt-screeps

Gruntfile.js를 구성합니다:

    module.exports = function(grunt) {

        grunt.loadNpmTasks('grunt-screeps');
        
        grunt.initConfig({
            screeps: {
                options: {
                    email: '<사용자 이메일>',
                    token: '<인증 토큰>',
                    branch: 'default',
                    //server: 'season'
                },
                dist: {
                    src: ['dist/*.

The `grunt screeps` command above will work fine, however if you wish to use the Screeps API directly, follow these instructions:

The Screeps Web API has an endpoint https://screeps.com/api/user/code for working with scripts. The two supported methods are POST and GET for writing and retrieving respectively. Both methods accept Basic access authentication. Endpoints get and return a JSON structure containing modules object with module names as keys and their content as values.

Here is an example of committing code using Node.js:

1. First, create your script in the `dist` folder.
2. Run the following command to commit your code to Screeps:

    curl -u [username]:[password] https://screeps.com/api/user/code

3. Now you can run this command to push changes to your script:

    curl -u [username]:[password] https://screeps.com/api/user/code

This will replace the old version of your script with the new one. 

Note: Replace [username] and [password] with your actual Screeps username and password. If you don't have a password, leave it blank.

Authorization: <your email>:<your password>

var https = require('https');

var email = '<your e-mail>',
    password = '<your password>',
    data = {
        branch: 'default',
        modules: {
            main: 'require("hello");',
            hello: 'console. log("Hello World! ");'
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

Translation in progress...

{
    "branch": "default",
    "modules": {
        "main": "\""hello\" require(\"");",
        "hello": "\""Hello World!\". console.log(\"\")"
}
}

Authorization: Basic PHlvdXIgZS1tYWlsPjo8eW91ciBwYXNzd29yZD4=
Connection: close
Transfer-Encoding: chunked
"branch":"default","modules":{"main":"require(\"hello\");","hello":"console. log(\"Hello World!