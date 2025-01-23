# StructurePowerSpawn

오른쪽에 있는 그림은 [powerSpawn. png]입니다.
계정에 전력을 공급하고, 특별한 독특한 힘(개발중)을 가진 파워크립을 생성합니다.
더 많은 전력에 대해서는 [이 글](/power.html)을 참조하세요.

"Controller level"에서 7까지의 컨트롤러 사용하기
8번 컨트롤러를 사용할 때 강력한 에너지 폭발이 일어남
1개당 10만 포인트 비용으로 구매 가능
5,000의 피해를 입힘
컨트롤러는 최대 5,000개의 에너지와 100개의 파워를 저장할 수 있음
처리 비용은 에너지 단위당 50포인트이며, 파워 단위당 1회차에 1포인트씩 처리함.

{% api_property energy 'number' '{"deprecated": true}' %}
alias: `.store[RESOURCE_ENERGY]`(#StructureExtension.store)

{% api_property energyCapacity 'number' '{"deprecated": true}' %}
alias: `.store.getCapacity(RESOURCE_ENERGY)`(#Store.getCapacity)

{% api_property power 'number' '{"deprecated": true}' %}
alias: `.store[RESOURCE_POWER]`(#StructureExtension.store)

```

이 예에서는 기존의 세 가지 Energy, energyCapacity 및 power API 속성을 제거하고, Energy 및 Power Resource를 사용하여 새로운 Energy, energyCapacity 및 Power API 속성을 설명하는 데 유용한 정보가 포함된 메타데이터 섹션을 추가했습니다.

코드를 번역하지 마십시오. JavaScript와 같은 코드를 번역하지 마십시오. 대문자로만 표기된 단어는 번역하지 마십시오. Translate this article into Korean : {% api_property powerCapacity 'number' '{"deprecated": true}' %}
                                                                                                              
{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure. store. getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep. transfer(structure, RESOURCE_ENERGY);
}
```


{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure. store. getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep. transfer(structure, RESOURCE_ENERGY);
}
```


[`Store`](#Store) 객체는 이 구조물의 화물을 포함하고 있습니다.

{% api_method processPower '' A %}


등록된 전력 자원 단위를 계정에 등록합니다. 등록된 전력으로 Power Creeps 기술을 개발할 수 있습니다.

{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 당신은 이 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 구조물에는 충분한 에너지나 전력 리소스 단위가 없습니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기 위해서는 Room Controller Level가 부족합니다.