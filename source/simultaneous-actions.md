크립 액션의 동시 실행
---

크립에게 제공되는 정확한 방법은 그것의 부품들에 의해 결정됩니다. 모든 존재하는 부품으로부터 올인원 크립을 만드는 옵션이 있지만, 당신은 동시에 모든 방법을 실행할 수 없습니다. 의존성은 다음과 같습니다:

![action-priorities.png](attachment://image/action-priorities.png)

한 틱에서 모든 종속 방법을 실행하려고 시도하면 **가장 오른쪽 하나만이 실행됩니다**. 각 시도는 올바른 실행으로 `OK` 결과를 반환합니다. 예를 들어:

        // 틱 1
        creep. build(constructionSite); // ERR_NOT_ENOUGH_ENERGY
        creep. harvest(source); // OK – 실행, 크립이 에너지를 얻음
        // 틱 2
        creep. build(constructionSite); // OK – 실행
        creep.move(destination); // ERR_NO_PATH – 실행 중인 액션의 종속성으로 인해 시도가 실패합니다.

번역: 하지만 서로 다른 파이프라인에서 여러 메소드를 결합해서 실행할 수도 있습니다(위의 종속성과는 상관없음). 예를 들어:

        creep. moveTo(target);
        creep. rangedMassAttack();
        creep. heal(target);
        creep. transfer(target, RESOURCE_ENERGY, amountTransfer);
        creep. drop(amountDrop, RESOURCE_ENERGY);
        creep. pickup(energy);
        creep. claimController(controller);

이 모든 메소드는 한 틱 안에서 성공적으로 실행될 수 있습니다.

The 'energyUsage' 속성은 에너지가 충분한 경우 두 가지 결과를 초래할 수 있습니다.
2. 모든 예정된 작업을 실행하기에 충분한 에너지가 있는 경우, 그 모든 것이 실행될 것입니다.
3. 달리 설명되지 않은 경우에는 갈등이 발생하고 가장 우선순위가 높은 작업만 실행됩니다. 

## Methods call priority

코드의 여러 메서드를 호출하는 순서는 관련이 없으며, 오로지 앞에서 언급한 우선순위만 고려됩니다. 하지만 동일한 메서드가 여러 번 호출되는 경우 마지막 호출이 우선권을 갖습니다. 예를 들어:

        creep. moveTo(target); // 무시됩니다.
        creep. move(RIGHT); // 무시됩니다.
        creep. move(LEFT); // 이 턴에서 왼쪽으로 이동합니다.

1. 건강한 크립을 치료하고 손상되지 않은 빌딩을 복구하는 것은 무의미할 수 있습니다. 그러나 이 작업은 `OK`를 반환하며 파이프라인에서 더 많은 왼쪽 메소드들을 차단합니다.
2. `transfer`는 `drop`과 함께 동작할지도 모르지만, 한 티크(tick)당 두 번 이상의 오브젝트로 에너지를 전송하는 `transfer`를 실행할 수 없습니다. 비슷한 모든 메소드도 마찬가지입니다.
3. `CARRY` 몸 부위를 사용하여 동시에 실행되는 메소드들은 서로 영향을 미치지 않습니다. 각 메소드는 티크(tick)의 시작 시점에 이용할 수 있는 에너지 양을 갖습니다. 자세한 내용은 [게임 루프, 시간과 틱](/game-loop.html)을 참조하십시오.