# StructureTower
<img src="img/tower.png" alt="" align="right" />

원격으로 크립을 공격하거나 치유하고, 또는 구조물을 복구합니다. 방에 있는 모든 개체를 대상으로 할 수 있습니다. 그러나 효과는 거리에 선형으로 의존합니다. 각 작업마다 에너지가 소비됩니다.

Explanation:
StructureTower 는 JavaScript 코드를 번역하지 않습니다. 또한 대문자로만 표시된 단어도 번역하지 않습니다. 기사를 한국어로 번역합니다.

# StructureTower
오른쪽에있는 이미지 src = "img / tower.png"alt = "" align = "right">
원격으로 크립을 공격하거나 치유하고, 또는 구조물을 복구합니다. 방에 있는 모든 개체를 대상으로 할 수 있습니다. 그러나 효과는 거리에 선형으로 의존합니다. 각 작업마다 에너지가 소비됩니다.

설명:
StructureTower는 JavaScript 코드를 번역하지 않습니다. 또한 대문자로만 표시된 단어도 번역하지 않습니다. 기사를 한국어로 번역합니다.

컨트롤러 수준

build(structure. store. build(resource). resources). bar({
      resource: 'Crystal'
  });
} else {
  move(creep);
}
```


{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure. store. getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep. build(structure. store. build(resource). resources). bar({
      resource: 'Crystal'
    });
} else {
  move(creep);
}
```


{% api_property store '<a href="#Store">Store</a>' %}

구조물을 공격하는 원격 크립이나 파워 크립, 또는 다른 구조물에 대한 방어가 가능합니다.
{% api_method attack 'target' A %}




다음과 같은 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 해당 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_ENERGY | 탑에 충분한 에너지가 없습니다.

OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 해당 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_ENERGY | 탑에 충분한 에너지가 없습니다.

ERR_INVALID_TARGET | 타겟이 유효한 크립 객체가 아닙니다. 
ERR_RCL_NOT_ENOUGH | 룸 컨트롤러 레벨이 이 구조물을 사용하기에 불충분합니다.
{% endapi_return_codes %}


{% api_method repair 'target' A %}



방의 모든 구조물을 원격으로 수리할 수 있습니다.

{% api_method_params %}
target : <a href="#Structure">구조</a>
수리할 대상 구조.
{% endapi_method_params %}


### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다. 
ERR_NOT_OWNER | 사용자가 해당 구조물의 소유자가 아닙니다. 
ERR_NOT_ENOUGH_ENERGY | 타워에 충분한 에너지가 없습니다. 
ERR_INVALID_TARGET | 타겟이 수리 가능한 객체가 아닙니다.

ERR_RCL_NOT_ENOUGH | 룸 컨트롤러 레벨이 부족합니다.