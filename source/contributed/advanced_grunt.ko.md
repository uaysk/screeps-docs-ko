title: Grunt 고급 사용법
contributed: 
    name: tedivm
    link: https://github.com/tedivm
    date: 2017-05-01
---

grunt로 코드를 업로드하는 것은 시작일 뿐입니다. 이 가이드는 grunt를 최대한 활용하고 개발을 더 편하게 만들기 위해 스크립트에 추가할 수 있는 여러 개선 사항을 다룹니다.

## 가정(Assumptions)

이 글은 몇 가지를 가정합니다.

* 코드는 `src` 디렉터리에 저장되어 있습니다.
* [Getting Started](http://gruntjs.com/getting-started) 가이드를 읽었습니다.
* 특히 grunt.initConfig로 태스크 설정을 저장하는 방식을 이해하고 있습니다.

## 자격 증명(크리덴셜) 안전하게 관리하기

Gruntfile이 복잡해질수록 소스 컨트롤에 커밋하고 싶어지지만, 저장소에 자격 증명을 저장하는 것은 일반적으로 아주 나쁜 아이디어입니다. 자격 증명을 별도 파일로 분리하면, Gruntfile은 커밋하면서도 크리덴셜은 커밋하지 않을 수 있습니다.

먼저 크리덴셜을 저장할 `.screeps.json` 파일을 만듭니다.

    {
      "email": "<YOUR EMAIL HERE>",
      "password": "<YOUR PASSWORD HERE>",
      "branch": "default",
      "ptr": false
    }

이제 `Gruntfile.js`를 수정해 새 파일을 사용하도록 합니다.

    module.exports = function(grunt) {
        var config = require('./.screeps.json')
        grunt.loadNpmTasks('grunt-screeps');
        grunt.initConfig({
            screeps: {
                options: {
                    email: config.email,
                    password: config.password,
                    branch: config.branch,
                    ptr: config.ptr
                },
                dist: {
                    src: ['src/*.js']
                }
            }
        });
    }

마지막으로 `.gitignore`를 열고(없으면 생성) `.screeps.json`을 추가합니다.

```
/.screeps.json
```

## CLI 플래그로 옵션 덮어쓰기

Grunt가 사용하는 옵션을 바꾸기 위해 코드 변경이 필요할 필요는 없습니다. 커맨드라인 플래그로 처리할 수 있습니다.

위에서 만든 `.screeps.json`과 `grunt.option` 함수를 사용하도록 `Gruntfile.js`를 업데이트합니다.

    module.exports = function(grunt) {

        var config = require('./.screeps.json')
        var branch = grunt.option('branch') || config.branch;
        var email = grunt.option('email') || config.email;
        var password = grunt.option('password') || config.password;
        var ptr = grunt.option('ptr') ? true : config.ptr

        grunt.loadNpmTasks('grunt-screeps');

        grunt.initConfig({
            screeps: {
                options: {
                    email: email,
                    password: password,
                    branch: branch,
                    ptr: ptr
                },
                dist: {
                    src: ['src/*.js']
                }
            }
        });
    }

이제 실행 중에 옵션을 바로 덮어쓸 수 있습니다. 새로운 옵션은 `.screeps.json`에 추가하면 됩니다.

    grunt screeps --ptr=true --branch=development

## 폴더 사용하기

초보 플레이어가 자주 겪는 불편은, 기본 설정으로는 폴더 구조를 그대로 사용할 수 없다는 점입니다. 이는 Grunt로 해결할 수 있습니다.

시작을 위해 [grunt-contrib-copy](https://www.npmjs.com/package/grunt-contrib-copy)와 [grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean) 플러그인을 설치합니다.

    npm install grunt-contrib-clean --save-dev
    npm install grunt-contrib-copy --save-dev

여기서는 "copy" 플러그인을 사용해 `src` 디렉터리의 코드를 `dist`로 이동합니다. 플러그인에는 파일 이름을 바꾸는 옵션이 있으므로, 디렉터리 구분자(슬래시)를 언더스코어로 바꿔 폴더 구조를 평평하게(flat) 만드는 함수를 사용합니다. 실행 결과는 다음과 같이 됩니다.

| 이전(Before)               | 이후(After)                 | Require                         |
|----------------------------|:----------------------------|---------------------------------|
| src/main.js                | dist/main.js                | require('main');                |
| src/lib/creeptalk.js       | dist/lib_creeptalk.js       | require('lib_creeptalk');       |
| src/lib/creeptalk/emoji.js | dist/lib_creeptalk_emoji.js | require('lib_creeptalk_emoji'); |
| src/prototypes/creeps.js   | dist/prototypes_creeps.js   | require('prototypes_creeps');   |
| src/prototypes/spawns.js   | dist/prototypes_spawns.js   | require('prototypes_spawns');   |

copy 플러그인은 실행 전에 데이터를 지우지 않기 때문에, `clean` 플러그인을 사용해 `dist` 폴더를 비운 뒤 파일을 옮기도록 합니다.

마지막으로 `grunt.registerTask()`를 사용해 세 개의 개별 태스크를 하나로 묶고, 이를 기본(default) 태스크로 만듭니다.

    module.exports = function(grunt) {

        var config = require('./.screeps.json')
        var branch = grunt.option('branch') || config.branch;
        var email = grunt.option('email') || config.email;
        var password = grunt.option('password') || config.password;
        var ptr = grunt.option('ptr') ? true : config.ptr

        grunt.loadNpmTasks('grunt-screeps')
        grunt.loadNpmTasks('grunt-contrib-clean')
        grunt.loadNpmTasks('grunt-contrib-copy')

        grunt.initConfig({
            screeps: {
                options: {
                    email: email,
                    password: password,
                    branch: branch,
                    ptr: ptr
                },
                dist: {
                    src: ['dist/*.js']
                }
            },

            // Remove all files from the dist folder.
            clean: {
              'dist': ['dist']
            },

            // Copy all source files into the dist folder, flattening the folder structure by converting path delimiters to underscores
            copy: {
              // Pushes the game code to the dist folder so it can be modified before being send to the screeps server.
              screeps: {
                files: [{
                  expand: true,
                  cwd: 'src/',
                  src: '**',
                  dest: 'dist/',
                  filter: 'isFile',
                  rename: function (dest, src) {
                    // Change the path name utilize underscores for folders
                    return dest + src.replace(/\//g,'_');
                  }
                }],
              }
            },
        })

        grunt.registerTask('default',  ['clean', 'copy:screeps', 'screeps']);
    }

이제 한 번의 명령으로 `src` 디렉터리의 코드가 복사되어 평탄화된 뒤 Screeps 서버로 업로드됩니다.

    grunt

## 자동 버저닝(Automatic Versioning)

[file-append](https://www.npmjs.com/package/grunt-file-append) 플러그인을 설치합니다.

    npm install grunt-file-append --save-dev

소스 코드에 `version.js`라는 빈 파일을 만듭니다. Grunt는 이 파일에 전역 변수 `SCRIPT_VERSION`을 추가하고, 값을 타임스탬프로 설정합니다. 그런 다음 현재 날짜 변수를 채우고 새 `file_append` 태스크를 만듭니다.

    module.exports = function(grunt) {

        // parameters

        grunt.loadNpmTasks('grunt-screeps')
        grunt.loadNpmTasks('grunt-contrib-clean')
        grunt.loadNpmTasks('grunt-contrib-copy')
        grunt.loadNpmTasks('grunt-file-append')

        var currentdate = new Date();

        // Output the current date and branch.
        grunt.log.subhead('Task Start: ' + currentdate.toLocaleString())
        grunt.log.writeln('Branch: ' + branch)


        grunt.initConfig({

            // Truncated for space.
            screeps: {},
            clean: {},
            copy: {},

            // Add version variable using current timestamp.
            file_append: {
              versioning: {
                files: [
                  {
                    append: "\nglobal.SCRIPT_VERSION = "+ currentdate.getTime() + "\n",
                    input: 'dist/version.js',
                  }
                ]
              }
            },

        })

        grunt.registerTask('default',  ['clean', 'copy:screeps', 'file_append:versioning', 'screeps']);
    }

이제 `require('version')`를 추가하면 `SCRIPT_VERSION` 변수를 사용할 수 있습니다. 이를 메모리에 저장한 버전 문자열과 비교하면, 새 스크립트가 언제 업로드되었는지 감지할 수 있습니다.

    require('version')
    if(!Memory.SCRIPT_VERSION || Memory.SCRIPT_VERSION != SCRIPT_VERSION) {
        Memory.SCRIPT_VERSION = SCRIPT_VERSION
        console.log('New code uplodated')
    }

## 프라이빗 서버(Private Server)

Grunt로 프라이빗 서버 계정에 코드를 업로드하는 방법은 두 가지가 있습니다.

### Steam 클라이언트를 통한 방법

Steam 클라이언트는 로컬 폴더의 코드를 업로드합니다. 이 경우 Grunt를 사용해 `dist` 폴더의 파일을 Steam이 업로드에 사용하는 로컬 폴더로 복사할 수 있습니다.

하지만 `copy` 플러그인은 Steam 클라이언트와 충돌하는 문제가 있을 수 있으므로, 이 경우에는 [rsync](https://www.npmjs.com/package/grunt-rsync) 플러그인을 사용하는 것이 좋습니다.

    npm install grunt-rsync --save-dev

이제 설정 및 Gruntfile에 `private_directory` 파라미터를 추가하고 `rsync`를 구성합니다. 메인 서버와의 호환성을 유지하기 위해, `grunt.registerTask`로 별도의 `private` 태스크를 만듭니다.

    module.exports = function(grunt) {

        // parameters
        var private_directory = grunt.option('private_directory') || config.private_directory;

        grunt.loadNpmTasks('grunt-screeps')
        grunt.loadNpmTasks('grunt-contrib-clean')
        grunt.loadNpmTasks('grunt-contrib-copy')
        grunt.loadNpmTasks('grunt-rsync')

        var currentdate = new Date();

        grunt.initConfig({

            // Truncated for space.
            screeps: {},
            clean: {},
            copy: {},

            // Copy files to the folder the client uses to sink to the private server.
            // Use rsync so the client only uploads the changed files.
            rsync: {
                options: {
                    args: ["--verbose", "--checksum"],
                    exclude: [".git*"],
                    recursive: true
                },
                private: {
                    options: {
                        src: './dist/',
                        dest: private_directory,
                    }
                },
            },


        })

        grunt.registerTask('default',  ['clean', 'copy:screeps', 'file_append:versioning', 'screeps']);
        grunt.registerTask('private',  ['clean', 'copy:screeps', 'file_append:versioning', 'rsync:private']);
    }

이제 프라이빗 서버로 코드를 푸시할 수 있습니다.

    grunt private

### 서버 모드(Server Mod) 사용하기

이 방법이 동작하려면, 프라이빗 서버에 [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth) 같은 인증 모드를 설치해야 합니다.

```javascript
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                server: {
                    host: 'your.server.hostname.or.ip',
                    port: 21025,
                    http: true
                },
                email: 'YOUR_EMAIL',
                password: 'YOUR_PASSWORD',
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
}
```

## Beautify

코드를 보기 좋게 유지하는 것은 흔한 Grunt 사용 사례이며, [jsbeautifier](https://www.npmjs.com/package/grunt-jsbeautifier) 플러그인으로 처리할 수 있습니다.

    npm install grunt-jsbeautifier --save-dev

이제 Grunt에 두 개의 새 태스크를 추가합니다. 하나는 코드를 정리하는 태스크, 다른 하나는 테스트 스위트의 시작으로 코드 스타일을 검증하는 태스크입니다(나중에 확장 가능). 이 태스크는 [스타일 룰](https://github.com/beautify-web/js-beautify#options)을 위해 `.jsbeautifyrc`를 찾도록 구성됩니다.

    module.exports = function(grunt) {

        // parameters
        var private_directory = grunt.option('private_directory') || config.private_directory;

        grunt.loadNpmTasks('grunt-screeps')
        grunt.loadNpmTasks('grunt-contrib-clean')
        grunt.loadNpmTasks('grunt-contrib-copy')
        grunt.loadNpmTasks('grunt-rsync')

        var currentdate = new Date();

        grunt.initConfig({

            // Truncated for space.
            screeps: {},
            clean: {},
            copy: {},

            // Apply code styling
            jsbeautifier: {
              modify: {
                src: ["src/**/*.js"],
                options: {
                  config: '.jsbeautifyrc'
                }
              },
              verify: {
                src: ["src/**/*.js"],
                options: {
                  mode: 'VERIFY_ONLY',
                  config: '.jsbeautifyrc'
                }
              }
            }

        })

        grunt.registerTask('default',  ['clean', 'copy:screeps', 'file_append:versioning', 'screeps']);
        grunt.registerTask('private',  ['clean', 'copy:screeps', 'file_append:versioning', 'rsync:private']);

        grunt.registerTask('test',     ['jsbeautifier:verify']);
        grunt.registerTask('pretty',   ['jsbeautifier:modify']);
    }

이제 규칙에 맞게 코드를 직접 수정하려면 다음을 실행합니다:

    grunt pretty

또는 스타일 검증만 수행하려면:

    grunt test

## 통계 추가(Add Stats)

스크립트가 업로드되는 것을 지켜보는 일이 지루할 때가 있습니다. [time-grunt](https://www.npmjs.com/package/time-grunt) 플러그인은 각 태스크에 얼마나 시간이 걸렸는지 분석 결과를 제공합니다.

    npm install time-grunt --save-dev

grunt 함수의 가장 첫 줄에서 특별한 플러그인을 로드하고 grunt 오브젝트를 넘깁니다.

    module.exports = function(grunt) {
      require('time-grunt')(grunt);
      ...
    }

## 전체 예시(Full Example)

모두 합치면 Screeps 배포를 관리하기 위한 강력하면서도 사용하기 쉬운 도구가 됩니다.

    module.exports = function (grunt) {
      require('time-grunt')(grunt);

      // Pull defaults (including username and password) from .screeps.json
      var config = require('./.screeps.json')

      // Allow grunt options to override default configuration
      var branch = grunt.option('branch') || config.branch;
      var email = grunt.option('email') || config.email;
      var password = grunt.option('password') || config.password;
      var ptr = grunt.option('ptr') ? true : config.ptr
      var private_directory = grunt.option('private_directory') || config.private_directory;


      var currentdate = new Date();
      grunt.log.subhead('Task Start: ' + currentdate.toLocaleString())
      grunt.log.writeln('Branch: ' + branch)

      // Load needed tasks
      grunt.loadNpmTasks('grunt-screeps')
      grunt.loadNpmTasks('grunt-contrib-clean')
      grunt.loadNpmTasks('grunt-contrib-copy')
      grunt.loadNpmTasks('grunt-file-append')
      grunt.loadNpmTasks("grunt-jsbeautifier")
      grunt.loadNpmTasks("grunt-rsync")

      grunt.initConfig({

        // Push all files in the dist folder to screeps. What is in the dist folder
        // and gets sent will depend on the tasks used.
        screeps: {
          options: {
            email: email,
            password: password,
            branch: branch,
            ptr: ptr
          },
          dist: {
            src: ['dist/*.js']
          }
        },


        // Copy all source files into the dist folder, flattening the folder
        // structure by converting path delimiters to underscores
        copy: {
          // Pushes the game code to the dist folder so it can be modified before
          // being send to the screeps server.
          screeps: {
            files: [{
              expand: true,
              cwd: 'src/',
              src: '**',
              dest: 'dist/',
              filter: 'isFile',
              rename: function (dest, src) {
                // Change the path name utilize underscores for folders
                return dest + src.replace(/\//g,'_');
              }
            }],
          }
        },


        // Copy files to the folder the client uses to sink to the private server.
        // Use rsync so the client only uploads the changed files.
        rsync: {
            options: {
                args: ["--verbose", "--checksum"],
                exclude: [".git*"],
                recursive: true
            },
            private: {
                options: {
                    src: './dist/',
                    dest: private_directory,
                }
            },
        },


        // Add version variable using current timestamp.
        file_append: {
          versioning: {
            files: [
              {
                append: "\nglobal.SCRIPT_VERSION = "+ currentdate.getTime() + "\n",
                input: 'dist/version.js',
              }
            ]
          }
        },


        // Remove all files from the dist folder.
        clean: {
          'dist': ['dist']
        },


        // Apply code styling
        jsbeautifier: {
          modify: {
            src: ["src/**/*.js"],
            options: {
              config: '.jsbeautifyrc'
            }
          },
          verify: {
            src: ["src/**/*.js"],
            options: {
              mode: 'VERIFY_ONLY',
              config: '.jsbeautifyrc'
            }
          }
        }

      })

      // Combine the above into a default task
      grunt.registerTask('default',  ['clean', 'copy:screeps',  'file_append:versioning', 'screeps']);
      grunt.registerTask('private',  ['clean', 'copy:screeps',  'file_append:versioning', 'rsync:private']);
      grunt.registerTask('test',     ['jsbeautifier:verify']);
      grunt.registerTask('pretty',   ['jsbeautifier:modify']);
    }

