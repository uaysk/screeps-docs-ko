Screeps는 실시간 게임입니다. 게임 시간은 게임 "턴" (혹은 사이클)의 수로 표현되며, 게임 서버를 시작한 이후에 경과된 시간입니다. 현재 턴 번호는 `Game.time` 속성에 저장되어 있습니다. 이것은 게임의 전체 수명 동안 계속 증가하는 글로벌 카운터입니다.

일반적으로, 턴들은 `main` 모듈의 무한 루프에서 실행됩니다. 이 루프는 턴과 멀티플레이어를 기반으로 합니다: 모든 플레이어의 전체 `main` 모듈 실행이 끝난 후에만 다음 턴(다음 `Game.time` 값)이 시작됩니다.

우리는 다음 단계로 나누어진 조건부 방식으로 턴의 실행 메커니즘을 분석해볼 것입니다.

**초기에,** 게임의 특정 상황(다양한 게임 객체와 몇 가지 속성값이 존재)이 있습니다. 이러한 속성의 변경 사항, 새로운 객체의 등장, 그리고 오래된 객체의 해체는 다음 틱에서만 일어납니다.

**중간 부분에서,** `main` 모듈이 실행됩니다(요구되는 모듈과 함께). `main`은 초기의 틱에서 변하지 않는 게임 조건을 운영합니다. 예를 들어, `creep. move()`를 실행한 후 (동일한 틱에서) `creep. attack()`이 발생하면, 공격은 여전히 구식 좌표로부터 실행되는데, 그 이유는 속성 `creep. pos. x`, `creep. pos. y`가 다음 틱에서만 변하기 때문입니다.

현재 티크의 실제 CPU 사용량은 `Game.cpuLoad`](/api/#Game.cpuLoad)로 표시됩니다. *
*   The commands specified in the `main` accumulate in order to change the game situation by the beginning of the next tick instantaneously and independently from each other at the end of the tick. 이는 각 커맨드가 게임 상황을 변경하기 위해 다음 티크의 시작과 함께 즉각적으로 그리고 독립적으로 실행되도록 합니다. 만약 발생한 어떠한 충돌이든, 예를 들면 여러 크립이 동일한 좌표로 이동하기를 원할 경우에는, 혹은 모순되는 명령을 계획했을 경우 - 이와 같은 충돌들은 `[predefined priorities](/simultaneous-actions.html)`에 따라 해결됩니다. 또 하나의 예를 들자면, 공격은 서로간의 충돌을 일으키지 않으며, 크립이 동시에 사망할 수도 있습니다.
* * 추가 정보:
*   *  물리적인 관점에서 `main` 실행의 자원 집중도는 CPU의 용량에 따라 제한됩니다 ([`Game.cpuLimit`](/api/#Game.cpuLimit)를 참조).
*   * 현재 티크의 실제 CPU 사용량은 `Game.cpuLoad`](/api/#Game.cpuLoad)로 표시됩니다.
* * Additional information:
*   * The physical resource intensity of the `main` execution is limited by the available CPU (see [`Game. cpuLimit`](/api/#Game.cpuLimit)).
*   * The current CPU usage in the tick is shown as `Game.cpuLoad`](/api/#Game.cpuLoad).

getUsedCpu`](/api/#Game. getUsedCpu). 
*   The correlation between the game tick counter ([`Game. time`](/api/#Game. time)) and real time depends on overall capacity of servers affected. 
*   All runtime global scope with all the variables between ticks is erased.  See more in [this article](/global-objects. html). 
*   A console command is governed by the same rules: execution is made within one tick as though it is added to the end of `main`. 

## 참조

*   CPU 제한 작동 방식 (/cpu-limit.html)
* 서버측 아키텍처 개요 (/architecture.