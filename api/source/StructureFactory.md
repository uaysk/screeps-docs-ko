# StructureFactory

<img src="img/factory. png" alt="" align="right" />

원자재와 기타 상품에서 무역 상품을 생산합니다. [이 문서](/resources. html#Commodities)를 통해 상품에 대해 자세히 알아보십시오.

컨트롤러 레벨1-6 —
7-8 1 공장
Cost100,000
Hits1000
Capacity50,000
Production cooldown자원에 따라 다름

md %}

{% api_property cooldown 'number' %}


Factory가 다음 생산을 위해 기다려야 하는 게임 틱의 양입니다.

{% api_property level number %}

```javascript
if(! factory.level) {
    Game.powerCreeps['MyOperator1'].usePower(PWR_OPERATE_FACTORY, factory);
}
```

Factory의 레벨입니다. 새로 지은 Factory에 `PWR_OPERATE_FACTORY` 파워를 사용하여 설정할 수 있습니다. 한번 설정되면 더는 변경이 불가능합니다.

{% api_property store '<a href="#Store">Store</a>' %}

`Store`객체로 해당 구조물의 화물을 포함하고 있습니다.

{% api_property storeCapacity 'number' '{"deprecated": true}' %}

<p>코드를 번역하지 마십시오.</p>
<p>단어만 대문자로 된 것을 번역하지 마십시오.</p>
<p>이 기사를 한국어로 번역하십시오. :</p>
{% api_property storeCapacity 'number' '{"deprecated": true}' %}

<p>사용되지 않는 속성입니다.</p>
{% api_method produce 'resourceType' A %}
```javascript
factory.produce(RESOURCE_UTRIUM_BAR);
```
```javascript
factory.produce(RESOURCE_UTRIUM_BAR);
```
이 메서드는 지정된 상품을 생산합니다. 모든 재료가 공장에 있어야 합니다.
{% api_method_params %}
resourceType : string
<p>RESOURCE_*</p>
<p>상수 중 하나입니다.</p>
{% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.

ERR_NOT_OWNER | 당신은 이 건물의 소유주가 아닙니다.
ERR_RCL_NOT_ENOUGH | 당신의 방 컨트롤러 레벨이 공장을 사용하기에 부적합합니다.
ERR_NOT_ENOUGH_RESOURCES | 건물은 필요한 자원의 양을 갖고 있지 않습니다.
ERR_INVALID_ARGS | 제공된 인수가 올바르지 않습니다.
ERR_INVALID_TARGET | 이 레벨의 상품은 해당 공장에서 생산할 수 없습니다.
ERR_TIRED | 공장은 여전히 냉각 중입니다.
ERR_BUSY | 해당 공장은 `PWR_OPERATE_FACTORY` 파워에 의해서만 운영할 수 있습니다.
ERR_FULL | 생산물을 더 이상 보관할 수 없습니다.