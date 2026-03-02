title: 크립 액션의 동시 실행
---

크립이 사용할 수 있는 정확한 메서드들은 바디 파트에 의해 결정됩니다. 모든 파트를 섞어 “올인원” 크립을 만들 수도 있지만, 모든 메서드를 동시에 실행할 수는 없습니다. 다음과 같은 의존 관계가 있습니다:

![](img/action-priorities.png)

한 틱 안에서 의존 관계에 있는 메서드들을 모두 실행하려고 하면, **오른쪽 끝에 있는 하나만 실행됩니다**. 각 시도는 `OK` 결과를 반환하는 “올바른 실행 요청”으로 간주됩니다. 예를 들면:

        // tick 1
        creep.build(constructionSite); // ERR_NOT_ENOUGH_ENERGY
        creep.harvest(source); // OK – executed, creep gained energy
        // tick 2
        creep.build(constructionSite); // OK – executed
        creep.harvest(source); // OK, but execution failed since it was blocked by build

하지만 위 의존 관계에 포함되지 않은 메서드(또는 서로 다른 파이프라인의 메서드)들을 조합하면 한 틱 안에서 여러 메서드를 실행할 수 있습니다. 예를 들면:

        creep.moveTo(target);
        creep.rangedMassAttack();
        creep.heal(target);
        creep.transfer(target, RESOURCE_ENERGY, amountTransfer);
        creep.drop(amountDrop, RESOURCE_ENERGY);
        creep.pickup(energy);
        creep.claimController(controller);

이 메서드들은 모두 한 틱 안에서 성공적으로 실행될 수 있습니다.

에너지 사용과 관련된 메서드를 함께 실행할 때는 두 가지 결과가 있을 수 있습니다:

*   예약된 모든 작업을 실행하기에 에너지가 충분하면, 모두 실행됩니다.
*   그렇지 않으면 충돌이 발생하며, 오른쪽 끝의 하나만 실행됩니다.

## 메서드 호출 우선순위

코드에서 서로 다른 메서드를 호출하는 순서는 중요하지 않으며, 위에서 언급한 우선순위만이 중요합니다. 다만 같은 메서드를 여러 번 지정하면 마지막 호출이 우선합니다. 예를 들면:

        creep.moveTo(target); // will be ignored
        creep.move(RIGHT); // will be ignored
        creep.move(LEFT); // will be executed

이 틱에서 크립은 왼쪽으로 이동합니다.

## 추가로

1.  체력이 꽉 찬 크립을 치료하거나 손상되지 않은 건물을 수리하는 것은 의미가 없을 수 있지만, 그래도 `OK`를 반환하며 해당 파이프라인에서 더 왼쪽의 메서드들을 막습니다.
2.  `transfer`는 `drop`과 함께 동작할 수 있지만, 한 틱에 `transfer`를 2번 이상 실행할 수는 없습니다(여러 오브젝트에 에너지를 나눠 전달하는 것 불가). 비슷한 메서드도 모두 동일합니다.
3.  `CARRY` 바디 파트를 사용하는 동시 실행 메서드들은 서로에게 영향을 주지 않습니다. 각 메서드는 틱 시작 시점의 에너지 양을 기준으로 합니다. 자세한 내용은 [게임 루프, 시간, 틱 이해하기](/game-loop.html)를 참고하세요.

