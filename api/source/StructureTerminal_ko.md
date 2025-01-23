다른 방에있는 Terminal에 자원을 보냅니다. 대상 Terminal은 모든 플레이어의 것일 수 있습니다.  각 transacton은 [Game. market. calcTransactionCost](#Game. market. calcTransactionCost) 메서드를 사용하여 계산할 수있는 추가 에너지를 필요로합니다.   예를 들어 W0N0에서 W10N5로 미네랄 단위 1,000개를 전송하면 742 에너지 단위가 소모됩니다.  게임. market 객체를 사용하여 들어오고 나가는 트랜잭션을 추적 할 수 있습니다. Terminal은 [Room. terminal](#Room. terminal) 속성으로 주소를 지정할 수 있습니다. 방당 하나의 Terminal만 허용됩니다.

시장 체제에서 사용됩니다.

컨트롤러 수준

구문 분석되지 않은 JavaScript 코드를 번역하지 마십시오. 대문자로만 이루어진 단어도 번역하지 마세요. 이 기사를 한국어로 번역하십시오 . md %}
{% api_property cooldown 'number' %}
{% api_property store '<a href="#Store">Store</a>' %}
A '[Store](#Store)' 객체는 이 구조물의화물을 포함합니다. {% api_property storeCapacity 'number' '{"deprecated": true}' %}

{% api_method send 'resourceType, amount, destination, [description]' A %}
```javascript
Game. rooms['W1N1']. terminal.

{% api_method_params %}
resourceType : string
<code>RESOURCE_*</code> constants among which one. 
===
amount : number
The amount of resources to be sent. 
===
destination : string
The name of the target room. 수신자가 확인할 수 있도록 트랜잭션의 설명입니다. 최대 100개 문자까지 가능합니다.
{% endapi_method_params %}

### 반환값
OK | 작업을 성공적으로 예약했습니다.

ERR_NOT_OWNER: "구조체의 소유자가 아닙니다."
ERR_NOT_ENOUGH_RESOURCES: "구조체에 필요한 만큼의 자원이 없습니다."
ERR_INVALID_ARGS: "제공된 인수가 올바르지 않습니다."
ERR_TIRED: "터미널이 아직 냉각 중입니다."