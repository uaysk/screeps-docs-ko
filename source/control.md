## 전역 통제 수준

게임 세계에서 영토를 확장하기 위해, 당신은 주요 게임 지표인 **전역 통제 수준(GCL)**을 개발해야합니다. 이는 두 가지 중요한 요소에 영향을 미칩니다:
* **CPU 제한**. 공식 서버에서, 당신은 CPU가 잠겨진 "CPU 해제" 아이템으로 20 CPU 제한을 시작합니다. 이를 통해 소수의 크립만 컨트롤할 수 있습니다. 그러나 GCL 레벨마다 10 CPU씩 추가되며, CPU 제한은 300 CPU에 도달하면 증가를 멈춥니다.
* **통제할 수 있는 룸의 양**. 예를 들어 3개의 방을 컨트롤하기 위해서는 GCL이 3여야 합니다.

현재의 Global Control Level은 귀하의 [개요 페이지](https://screeps.com/a/#! /overview)에 표시됩니다. ! [gcl-cpu.jpg](attachment: gcl-cpu.jpg)

png)

The Room Controller Level is displayed above the controller object in the room UI.  It can also be viewed using the `/rcl` command in game chat, which will display the current RCL and the maximum possible RCL for the room.

However, players can attack the structures around the Controller to weaken its defenses and make it easier for their team to capture it. The stronger the Controller's defenses, the more structures they need to destroy before they can take control of it.

그러나 액션 `upgradeController` (/api/#Creep. upgradeController)의 영향을받지 않는 Controller는 RCL 1에서 20,000 게임 틱, RCL 2에서 5,000 게임 틱에서 RCL 8까지 5,000 게임 틱을 잃는 다운그레이드 타<|im_start|> timer를 실행합니다. 모든 타이머는 `StructureController` (/api/#StructureController) 프로토타입에 나열됩니다. Controller의 수준이 0에 도달하자마자, Controller는 중립적으로 변하고 다른 플레이어가 그것을 되찾을 수 있습니다. Controller를 정기적으로 업그레이드하여 레벨을 유지하도록 합시다! 다른 플레이어의 Controller 다운그레이드 타이머를 attackController (/api/#Creep. attackController)를 적용함으로써 공격할 수 있습니다. ! [controllerDowngrade.png](attachment: controllerDowngrade.png)

(그림 1)

## GCL 상승

GCL을 업그레이드하려면 컨트롤러에 에너지를 공급해야 합니다. GCL은 컨트롤러 레벨과 병행하여 성장합니다. 컨트롤러가 레벨 8으로 완전히 업그레이드된 경우에도 컨트롤러에 대한 기여는 GCL에 영향을 줍니다.

GCL을 한번 업그레이드하면 결코 잃지 않습니다. 게임에서 완전히 실패하고 모든 방을 잃은 경우에도 GCL은 계정에 영원히 저장됩니다. 이는 새로운 위치에서 부활할 수 있게 해주며, 이전의 영광을 빠르게 되찾을 수 있습니다.

미래에 더 높은 GCL이 필요한 방을 차지하려고 계획할 경우, 여전히 Controller의 [예약](/api/#Creep. reserveController)이 가능합니다. 또한 중립적인 방에서 Controller를 예약하면 에너지원을 최대 용량으로 복구할 수 있습니다.