제목: 서버 측 아키텍처 개요
---
Screeps는 프로그래머들이 만든 게임이므로, 게임의 서버 측 구현에 대해 알고자 하는 분들도 있을 것입니다. 또한 이 프로젝트의 고급 아키텍처 솔루션에 관심이 있으실 수도 있습니다.
## 주요 사항
*  서버 측면에서 사용된 기술은 Node.js(https://nodejs.org/en/) 8.9.3, MongoDB(http://mongodb.org) 3, Redis(http://redis.io/) 3입니다.
*   20k 라인의 서버 측 JavaScript 코드가 실행됩니다.
*  런타임 계산은 40개의 쿼드 코어 전용 서버에서 병렬로 실행됩니다. OVH(http://ovh.com/us)는 160 x Intel Xeon CPU E3-1231 v3 프로세서 코어를 사용합니다(노드 인스턴스의 각 개수와 함께).
*  각 샤드에 대해 MongoDB는 24-core 머신의 128 GB RAM에서 실행되며, 초당 30k 업데이트 요청을 처리합니다.

* 플레이어 런타임 코드는 메모리에서 실행되도록 최적화되고 하드 드라이브나 데이터베이스 요청을 수행하지 않습니다.
## 아키텍처 개요

모든 게임 데이터는 MongoDB에 저장됩니다. 각 게임 객체는 별도의 데이터베이스 문서입니다. 특정 `id` 속성 객체를 지정하기 위해 데이터베이스에서 할당된 `id` 개념을 설명합니다.

각 게임 틱은 Redis 기반의 특수 동기화 코드에 의해 제어됩니다. 한 틱은 두 단계로 구성됩니다.

1. **플레이어 스크립트 계산**
2. **명령어 처리**.

각 단계에서 작업을 실행하는 작업 큐가 만들어집니다. 첫 번째 단계의 작업은 모든 활성 플레이어의 스크립트인 반면, 두 번째 단계는 게임 세계 룸을 처리합니다.

다음과 같이 두 단계를 수행하는 작업 흐름의 전체 그림을 보여줍니다:

![architecture_stage1.png](attachment: architecture_stage1.png)

! [architecture_stage2.png](attachment: architecture_stage2.png)

대기열은 Redis List로 저장되며, 각각의 작업은 별도의 컴퓨터에서 개별적으로 처리됩니다. 한 턴이 시작될 때 모든 활성 플레이어 목록을 만들고 게임 스크립트를 처리하기 위해 대기열에 넣습니다. 실행 중인 모든 서버가 작업을 받아 DB 데이터를 요청하고 각 객체의 게임 스크립트 계산을 시작하여 명령어를 수집합니다. 대기열이 채워진 후에는 두 번째 단계가 시작됩니다. 모든 활성 명령은 대기열에 넣고, 실행 중인 서버는 각 룸의 객체를 위한 명령을 처리하기 시작합니다. 각 게임 방과 계산 단계마다 별도로 처리되지만, 모든 동시 프로세스는 CPU 코어의 수와 정확히 일치합니다.

한 코어가 동기식으로 한 방과 한 플레이어를 처리하므로 다양한 경합 조건이 제거됩니다. 두 단계가 모두 끝나면 게임 객체의 변경에 대한 요청이 특정 수로 형성됩니다. 처리 단계가 끝난 후에 [대량으로](https://docs.mongodb.org/manual/core/bulk-write-operations/) 이러한 요청이 실행됩니다. MongoDB 3은 문서 수준의 동시성을 허용하는 새로운 스토리지 엔진 [WiredTiger](http://www.wiredtiger.com/)를 사용합니다. DB 서버에서 여러 개의 병렬 스레드를 활용할 수있는 장점을 활용합니다. DB 변경이 끝나면 전체 시스템은 다음 틱 처리로 전환됩니다. DB 개체를 업데이트하는 작업은 하드 디스크에 접근해야 하는 유일한 작업입니다

디스크 플러시는 DB 서버에서 1분에 한번만 수행되며, 디스크를 전혀 사용하지 않는 런타임 서버에는 영향을 미치지 않습니다(이것은 서버에 존재하지 않음). 런타임 서버는 게임 객체와 `메모리` 객체의 준비된 데이터를 받아서 태스크가 시작되기 전에 RAM에 로드합니다. 유용한 작업은 런타임 서버의 CPU 코어들에 의해 수행됩니다. 즉, 이것들은 틱의 계산 단계에서 플레이어가 "대여"합니다.

## 확장

시스템은 두 개의 레벨로 쉽게 확장할 수 있도록 설계되었습니다:

*   DB 부하가 증가함에 따라(즉, 플레이어들이 게임 세계의 샤드에서 더 활발해짐), 우리는 WiredTiger와 작업할 CPU 코어를 늘리거나 자체적인 별도의 데이터베이스를 가진 월드 샤드(각각)를 추가할 수 있습니다.

* 플레이어의 계산에서 발생하는 전체 CPU 부하가 증가함에 따라, 해당 계산을 수행하기 위해 런타임 서버를 더 추가할 수 있습니다. 몇 분 후 런타임 서버는 Redis 대기열에서 작업을 받고 처리할 수 있습니다.

## 스크립트 실행 환경

노드.js [`vm`](https://nodejs. org/api/vm. html) 라이브러리는 게임 스크립트의 컴퓨팅 단계에서 작업을 수행할 때 사용됩니다. 각 노드 인스턴스 프로세스마다 부모 프로세스에 액세스할 수 없는 별도의 포크가 시작됩니다. 이 포크는 계산에 필요한 데이터를 위해 데이터베이스에 대한 고급 요청을 즉시 수행합니다. 그런 다음 사용자 컨텍스트가 있는 문맥(`vm. runInContext`)(https://nodejs. org/api/vm. html#vm_vm_runincontext_code_contextifiedsandbox_options)을 실행합니다.

컨텍스트는 향후 사용을 위해 포크에 저장되므로 스크립트에서 `global` 개체와 `require` 캐시를 반복적으로 사용할 수 있습니다. 또한 스크립트의 컴파일은 [코드 캐싱 데이터](http://v8project.blogspot.com.by/2015/07/code-caching.html)를 생성하고, 저장하며, 향후 컴파일을 가속화하는 데 사용합니다.

![아키텍처_실행](https://imgnews-frontends-naver.etask.blitzperspective.com/thumb/dMtB8HpzFKv4wU7a6035285b19c52e40298ea089fccd3b47f5464bcd8dc82e8.png)

`runInContext`가 각 플레이어별로 실행 시간아웃을 지정하여 호출되더라도, 특정 작업 부하의 경우 스크립트 실행을 적절히 완료할 수 없는 경우가 있습니다. 이러한 상황이 발생하면, 시간이 초과되면 VM이 아닌 포크 전체를 종료합니다. 모든 플레이어 컨텍스트는 사라지고 처음부터 다시 만들어집니다.

미래를 위해, 우리는 여러분이 지역의 시뮬레이션을 실행하고 공부할 수 있도록 모든 시스템의 코드를 오픈소스로 제공할 계획입니다.