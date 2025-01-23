---
제목: 타사 도구
---
Screeps는 다양한 도구, 라이브러리 및 웹 애플리케이션을 구축하는 풍부한 타사 개발 커뮤니티를 보유하고 있습니다. 여기에 나와 있지 않은 도구가 있으면 이 문서를 편집해주세요.

{% note warn Caution Note %}
* Screeps는 타사 개발자로부터 암호를 절대 받아서는 안 됩니다.
* 많은 타사 프로그램은 공식 API가 아닌 것을 이용해 구축되어, 언제든지 작동을 멈출 수 있습니다.
* 모든 타사 프로그램은 자신의 위험 부담 하에 실행되며, 게임 개발자가 검토하지 않았으므로 예기치 못한 문제를 일으킬 수 있습니다.
{% endnote %}

## 언어 지원

외부 트랜스파일러를 설정해서 Screeps AI를 다른 언어로 작성할 수 있습니다.

### TypeScript

* [screeps-typescript-starter](https://github.com/NightshadeGame/screeps-typescript-starter)

{% endtranslate %}

com/screepers/screeps-typescript-starter)은 TypeScript로 프로그래밍하고자 하는 사용자들을 위한 시작점입니다. * [typed-screeps](https://github.com/screepers/typed-screeps)은 Screeps API를 커버하는 TypeScript 선언문의 모음입니다. ### Python * [screeps-starter-python](https://github.com/daboross/screeps-starter-python/)은 Screeps를 플레이할 수 있는 플랫폼으로 Python을 사용할 수 있습니다. ### Rust * [screeps-starter-rust](https://github.com/daboross/screeps-starter-rust)은 alpha 버전인 Screeps를 Rust로 플레이하기 위한 플랫폼입니다. ### Kotlin * [screeps-kotlin](https://github.com/exaV/screeps-kotlin)은 Kotlin으로 된 게임 스크립트의 예제입니다. * [screeps-kotlin-starter](https://github.com/exaV/screeps-kotlin-starter)는 Kotlin으로 프로그래밍하고자 하는 사용자들을 위한 시작점입니다.

* [screeps-kotlin-types](https://github.com/exaV/screeps-kotlin-types)는 Screeps API를 커버하기위한 Kotlin 선언의 집합입니다.

## API 클라이언트

Screeps API는 공식적인 것이 아니며 언제든지 변경될 수 있습니다. 이러한 클라이언트는 커뮤니티가 유지 관리하고 있으며 페이지의 많은 서비스와 프로그램을 생성하는 데 사용됩니다.
*   [파이썬](https://github.com/screepers/python-screeps)
*   [노드](https://github.com/screepers/node-screeps-api)

## 앱

*   [스크리프스 모니터](https://play.google.com/store/apps/details?id=com.danielscholte.screepsmonitor)는 플레이어에게 계정 및 게임 통계뿐만 아니라 완전한 메시징 클라이언트와 마켓 히스토리를 제공하는 안드로이드 앱입니다. (더 이상 사용할 수 없음).

## 백업

*   [screeps-backup](https://github.com/exav/screeps-backup) - 스크립트를 작성하여 게임을 자동으로 백업합니다.

Screepers/screeps-backup은 메모리와 세그먼트를 백업하고 복원할 수 있는 간단한 유틸리티입니다.

### 콘솔

* [screeps_console](https://github.com/screepers/screeps_console)은 파이썬으로 구현된 독립형 대화식 콘솔입니다. 일반적인 콘솔 키보드 단축키를 지원하며 여러 내장 명령어가 포함되어 있습니다. 또한 빛과 어두운 테마가 포함됩니다. 비대화식 버전도 포함되어 있습니다.

### 프로파일러

* [gdborton's profiler](https://github.com/gdborton/screeps-profiler)는 Screeps API를 정의하므로 클로저가 이러한 호출을 다시 쓰지 않도록 하는 기능 래퍼 기반 프로파일러입니다.

* ScreepsAutocomplete (https://github.com/Garethp/ScreepsAutocomplete): provides autocomplete data for the Screeps API.
* screeps-server-mockup (https://github.com/Hiryus/screeps-server-mockup): a private server package for unit tests.

## Notifications

* Screeps Notify (https://github.com/screepers/screeps_notify): provides an in-game interface that allows players to send messages to out-of-game services. It has a built-in SMS system and can also support sending messages to arbitrary HTTP endpoints.

## Statistics

Screeps runs constantly, but as a player, it is not possible to watch everything that occurs. There are also issues that may show up when watching long-term trends, but not during the times players are watching.

이러한 이유로 통계를 추적하는데 사용되는 애플리케이션들이 가장 인기있는 것은 놀라운 일이 아니다. 
*   [ScreepsPlus Grafana](https://screepspl.us/services/grafana)는 그라파나와 함께 작동하는 [ags131]()에서 제공하는 서비스이다. 암호를 공유하지 않도록 에이전트가 실행을 수행하고 통계를 수집한다.
*   [screeps-stats](https://github.com/screepers/screeps-stats)는 엘라스틴에 콘솔 데이터와 통계를 저장하여 kibana에서 액세스 가능하게 한다. 많은 데이터를 저장할 때 발생할 수 있는 인게임의 요구를 줄이기 위해 세그먼트를 활용한다. 자체 호스팅된 시스템이다.
*   [screeps-grafana](https://github.com/screepers/screeps-grafana)는 원래의 통계 프로그램이다. Grafana가 프론트엔드로서 사용된다. screeps-stats와 마찬가지로 자체 호스팅되는 옵션이다.

*   [screeps-ConsoleStats](https://github.com/screepers/screeps-ConsoleStats)는 외부 서비스를 필요로하지 않고 통계를 제공합니다.

## Uploaders

코드를 서버에 푸시하려면 일반적인 프로그램용 플러그인을 사용할 수 있습니다.
*   [grunt-screeps](https://github.com/screepers/grunt-screeps)는 Screeps 팀이 작성하고 유지 관리합니다. [Grunt](https://gruntjs.com/)를 사용하여 screeps 서버에 코드를 업로드합니다.
*   [gulp-screeps](https://github.com/screepers/gulp-screeps)는 [Gulp](http://gulpjs.com/)를 사용하여 screeps 서버에 코드를 업로드합니다.

## Web Client Extensions

[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) 및 [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)과 같은 JavaScript 플러그인 확장을 통해 screeps Console에서 직접 스크립트를 실행할 수 있습니다.

자바스크립트가 필요합니다(https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/). 이 플러그인을 실행하려면 GreaseMonkey 또는 TamperMonkey와 같은 확장 기능이 필요합니다.

* [동맹 오버레이](https://raw.githubusercontent.com/LeagueOfAutomatedNations/loan-browser-ext/master/dist/alliance-overlay.user.js)는 [자동화된 국가들의 동맹](http://www.leagueofautomatednations.com/map)에서 얻은 정보를 게임 지도에 추가합니다.
* [방 점유 조수](https://github.com/Esryok/screeps-browser-ext/raw/master/room-claim-assistant.user.js)는 "소유자 제어 수준"을 확장하여 룸 선택을 쉽게 합니다. 광물을 보여주고, 두 개의 원천 방을 녹색으로, 점유 또는 예약된 방을 붉은색으로, 그리고 다른 플레이어에 의해 오렌지색으로 "서명"된 방을 표시합니다.
* [보이는 방 추적기](https://github.com/Esryok/screeps-browser-ext/blob/master/visible-room-tracker.user.js)는 보이는 룸과 숨겨진 룸을 모두 표시합니다.

js는 사용자의 현재 표시된 방과 함께 메모리 위치를 자동으로 설정하므로 필요한 경우에만 시각화를 켤 수 있습니다.
* ScreepsSC(https://github.com/stybbe/Screeps-SC)는 Screeps 웹사이트에서 더 많은 정보를 제공하고 새로운 기능을 추가하는 Chrome 확장 프로그램입니다. 마켓 히스토리를 읽기 쉽게 만들고, 전투 레이더를 추가하며, 사용자가 다른 플레이어의 크립트 이름을 볼 수 있도록 하고, 순위표를 개선합니다.