---
title: 커뮤니티 서버
---

Screeps는 공식적으로 유지되는 오픈 월드를 가진 MMO 게임일 뿐 아니라, 오픈 소스 프로젝트이기도 합니다. 우리는 오픈 라이선스로 [게임 서버 소프트웨어](https://github.com/screeps/screeps)를 공개했기 때문에, 누구나 자신만의 Screeps 월드를 만들고 유연한 모드(mod) 시스템을 통해 코어까지 수정할 수 있습니다. 여기에는 고유한 게임 메커니즘과 규칙, 커스텀 그래픽과 행동을 가진 게임 오브젝트까지 포함됩니다.

우리는 이런 커뮤니티 활동을 좋아하며, 그래서 공개적으로 품질이 검증된 서버를 게임 로그인 화면의 Community Servers 목록에 표시합니다.

![](img/community-servers.png)

여러분의 서버를 이 목록에 포함시키고 싶다면 [contact@screeps.com](mailto:contact@screeps.com)으로 이메일을 보내 주세요. 서버는 다음 규칙을 준수해야 합니다:

* 서버 버전은 4.0.0 이상이어야 합니다.

* 최근 7일 동안 안정적으로 온라인 상태를 유지해야 합니다. 장시간 접속 불가 상태가 되면 목록에서 제거됩니다.

* [`config.backend.welcomeText`](https://github.com/screeps/launcher/blob/master/init_dist/example-mods/welcome-text.js)를 사용해 서버의 특징(직접 적용한 커스터마이징, 설치한 모드 등)을 플레이어에게 안내해야 합니다.
