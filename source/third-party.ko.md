---
title: 서드파티 도구
---

Screeps에는 활발한 서드파티 개발 커뮤니티가 있으며, 여러 도구/라이브러리/웹 애플리케이션을 만들어 왔습니다.
여기에 나열되지 않은 도구가 있다면, 이 문서를 자유롭게 편집해 추가해 주세요.

{% note warn Use Caution %}

*   절대 제3자에게 비밀번호를 제공하지 마세요.
*   많은 서드파티 프로그램은 비공식 API를 사용해 만들어지며, 언제든 작동을 멈출 수 있습니다.
*   모든 서드파티 프로그램 사용은 본인 책임이며, 게임 개발팀이 검토하지 않으므로 예상치 못한 문제가 발생할 수 있습니다.
{% endnote %}

## 언어 지원

외부 트랜스파일러를 설정해 다른 언어로 Screeps AI를 작성할 수 있습니다.

### TypeScript

*   [screeps-typescript-starter](https://github.com/screepers/screeps-typescript-starter)는 TypeScript로 프로그래밍하고 싶은 플레이어를 위한 시작점입니다.
*   [typed-screeps](https://github.com/screepers/typed-screeps)는 Screeps API를 커버하는 TypeScript 선언 모음입니다.

### Python

*   [screeps-starter-python](https://github.com/daboross/screeps-starter-python/)는 Python으로 Screeps를 플레이할 수 있도록 해주는 플랫폼입니다.

### Rust

*   [screeps-starter-rust](https://github.com/daboross/screeps-starter-rust)는 Rust로 Screeps를 플레이할 수 있는 알파 상태(alpha-status)의 플랫폼입니다.

### Kotlin

* [screeps-kotlin](https://github.com/exaV/screeps-kotlin)는 Kotlin으로 작성된 예제 게임 스크립트입니다.
* [screeps-kotlin-starter](https://github.com/exaV/screeps-kotlin-starter)는 Kotlin으로 프로그래밍하고 싶은 플레이어를 위한 시작점입니다.
* [screeps-kotlin-types](https://github.com/exaV/screeps-kotlin-types)는 Screeps API를 커버하는 Kotlin 선언 모음입니다.

## API 클라이언트

Screeps API는 공식이 아니며 언제든 변경될 수 있습니다. 아래 클라이언트들은 커뮤니티에서 유지보수되며, 이 페이지에 있는 여러 서비스/프로그램을 생성하는 데 사용됩니다.

*   [python](https://github.com/screepers/python-screeps)
*   [node](https://github.com/screepers/node-screeps-api)

## 앱

*   [Screeps Monitor](https://play.google.com/store/apps/details?id=com.danielscholte.screepsmonitor)는 Android 앱으로, 계정/게임 통계와 전체 메시징 클라이언트, 마켓 히스토리를 제공합니다. (더 이상 제공되지 않습니다.)

## 백업

*   [screeps-backup](https://github.com/screepers/screeps-backup)은 메모리와 세그먼트를 위한 간단한 백업/복원 유틸리티입니다.

## 콘솔

*   [screeps_console](https://github.com/screepers/screeps_console)는 python으로 만든 대화형 독립 콘솔입니다. 일반적인 콘솔 키보드 단축키를 지원하고, 내장 명령을 포함하며, 라이트/다크 테마를 제공합니다. 비대화형 버전도 포함되어 있습니다.

## 프로파일러

*   [gdborton의 profiler](https://github.com/gdborton/screeps-profiler)는 함수 래퍼 기반 프로파일러로, 성능 문제를 찾는 데 매우 유용합니다.

## 프로그래밍 도구

*   [closure-compiler-externs](https://github.com/screepers/screeps-closure-compiler-externs)는 closure가 해당 호출을 다시 쓰지 않도록 Screeps API를 정의합니다.
*   [ScreepsAutocomplete](https://github.com/Garethp/ScreepsAutocomplete)는 Screeps API를 위한 자동완성 데이터를 제공합니다.
*   [screeps-server-mockup](https://github.com/Hiryus/screeps-server-mockup)은 유닛 테스트를 위한 프라이빗 서버 패키지입니다.

## 알림

*   [Screeps Notify](https://github.com/screepers/screeps_notify)는 게임 내 인터페이스를 제공하여 플레이어가 게임 밖 서비스로 메시지를 보낼 수 있게 해줍니다. 내장 SMS 시스템이 있으며, 임의의 HTTP 엔드포인트로 보내는 것도 지원할 수 있습니다.

## 통계

Screeps는 항상 실행되며, 플레이어가 일어나는 모든 일을 지켜보는 것은 불가능합니다. 또한 장기 추세를 지켜볼 때만 드러나고, 플레이어가 게임을 보는 시간에는 잘 보이지 않는 문제도 있을 수 있습니다. 그래서 통계를 추적하는 애플리케이션이 가장 인기 있는 경우가 많습니다.

*   [ScreepsPlus Grafana](https://screepspl.us/services/grafana)는 [ags131]()이 제공하는 서비스로 Grafana와 함께 동작합니다. 비밀번호 공유를 피하기 위해 에이전트를 사용해 통계를 수집합니다.
*   [screeps-stats](https://github.com/screepers/screeps-stats)는 콘솔 데이터와 통계를 elasticsearch에 저장해 kibana에서 접근할 수 있게 합니다. 이 시스템은 게임 내에서 대량 데이터를 저장할 때의 부담을 줄이기 위해 세그먼트를 사용합니다. 자체 호스팅 서비스입니다.
*   [screeps-grafana](https://github.com/screepers/screeps-grafana)는 원조 통계 프로그램입니다. Grafana를 프론트로 사용합니다. screeps-stats와 마찬가지로 자체 호스팅 옵션입니다.
*   [screeps-ConsoleStats](https://github.com/screepers/screeps-ConsoleStats)는 외부 서비스 없이 통계를 제공합니다.

## 업로더

서버로 코드를 푸시하는 작업은 아래와 같은 플러그인으로 할 수 있습니다.

*   [grunt-screeps](https://github.com/screeps/grunt-screeps)는 Screeps 팀이 작성하고 유지보수합니다. 과거에는 [Grunt](https://gruntjs.com/)를 사용해 screeps 서버로 코드를 업로드하는 데 사용되었습니다.
*   [gulp-screeps](https://github.com/screepers/gulp-screeps)는 [Gulp](http://gulpjs.com/)로 screeps 서버에 코드를 업로드하는 데 사용됩니다.

## 웹 클라이언트 확장

[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) 같은 자바스크립트 플러그인 확장이나 [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)가 필요합니다.

*   [Alliance Overlay](https://raw.githubusercontent.com/LeagueOfAutomatedNations/loan-browser-ext/master/dist/alliance-overlay.user.js)는 게임 맵에 [League of Automated Nations](http://www.leagueofautomatednations.com/map)의 정보를 추가합니다.
*   [Room Claim Assistant](https://github.com/Esryok/screeps-browser-ext/raw/master/room-claim-assistant.user.js)는 룸 선택을 쉽게 하기 위해 "Owner Control Level" 표시를 확장해 색으로 표시합니다. 미네랄을 표시하고, 소스가 2개인 룸은 초록색, claim/reserve된 룸은 빨간색, 다른 플레이어가 “서명(sign)”한 룸은 주황색으로 표시합니다.
*   [Visible Room Tracker](https://github.com/Esryok/screeps-browser-ext/blob/master/visible-room-tracker.user.js)는 현재 보이는 룸을 메모리에 자동으로 기록하며, 필요할 때만 시각화 기능을 켜는 등의 작업을 가능하게 합니다.
*   [ScreepsSC](https://github.com/stybbe/Screeps-SC)는 Screeps 웹사이트에 새 기능을 추가하고 더 많은 정보를 제공하는 Chrome 확장입니다. 예를 들어 마켓 히스토리를 더 읽기 쉽게 하고, 전투 레이더를 추가하며, 다른 플레이어의 크립 이름을 볼 수 있게 하고, 리더보드 표시를 개선하는 기능 등이 있습니다.

