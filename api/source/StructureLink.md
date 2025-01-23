# Structuralink

<img src="img/link.png" alt="" align="right">

다른 방의 동일한 룸에 있는 또 다른 링크로 에너지를 원격으로 전송합니다.

"컨트롤러 레벨"에서 1-4까지의 단계가 있습니다. 5개의 링크로 2개는 좌쪽, 3개는 우측에 위치합니다. 6개의 링크로 3개는 좌측, 3개는 우측에 배치됩니다. 7개의 링크로 4개는 좌측, 3개는 우측에 배치되며, 8개의 링크로 6개는 좌측, 2개는 우측에 위치합니다. 비용은 5000입니다. 공격력은 1000이고, 최대 수용량은 800입니다. 사용 시마다 목표까지의 선형 거리에 해당하는 경과 시간만큼 쿨타임을 갖습니다. 에너지는 사용 시마다 3%씩 소모됩니다.

structure. store. energy > structure. store. energyCapacity) {
    console.log('Structure has too much energy')
  } else if (structure. store. energy < structure. store. energyCapacity) {
    console.log('Structure is low on energy')
  }
```

양자택일: `getFreeCapacity(RESOURCE_ENERGY) > 0` {
    `creep`. `transfer(structure, RESOURCE_ENERGY);`
}
{% api_method transferEnergy 'target, [amount]' A %}
```javascript
const linkFrom = Game.rooms['W1N1'].lookForAt('structure', 10, 25)[0];

const linkTo = linkFrom.pos.findInRange(FIND_MY_STRUCTURES, 2, {filter: {structureType: STRUCTURE_LINK}})[0];

linkFrom.transferEnergy(linkTo);```

다른 장소에서 같은 룸 내의 다른 링크로 에너지를 원격으로 전송할 수 있습니다. {% api_method_params %}
target: StructureLink
목표 객체입니다.

==== API 메서드 매개 변수====

```
amount (선택 사항) : number
전송할 에너지의 양입니다. 값이 생략되면 사용 가능한 모든 에너지가 사용됩니다. ```

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 해당 링크의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 구조에 지정된 양의 에너지가 없습니다.
ERR_INVALID_TARGET | 대상이 올바르지 않은 StructureLink 개체입니다.
ERR_FULL | 대상이 더 이상 에너지를 받을 수 없습니다.
ERR_INVALID_ARGS | 에너지 양이 잘못되었습니다.
ERR_TIRED | 링크가 아직 냉각 중입니다.

ERR_RCL_NOT_ENOUGH | 룸 컨트롤러 레벨이 부족하여 해당 링크를 사용할 수 없습니다.
ERR_NOT_IN_RANGE | 목표까지의 거리가 너무 멀어서 불가능합니다.