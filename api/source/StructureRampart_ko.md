# StructureRampart

"컨트롤러 레벨"에서는 총 8개의 아이템을 확인할 수 있다. 1단계 아이템은 최대 30만 히트를 가지고 있으며, 비용은 1이다. 2단계 아이템은 최대 히트 100만을 보유하고 있으며, 비용은 또한 1이다. 3단계의 경우 최대 히트는 1000만이며, 4단계는 3000만, 5단계는 1억, 6단계는 30억, 7단계는 100억의 히트를 가지고 있다. 8단계의 경우 최대 히트는 300억이며, 비용은 또한 1이다. 구조물을 만들 때 생기는 히트는 1이며, 낙차는 매 100 틱마다 300 히트를 잃어버린다.

JavaScript, Python, Go 등의 코드를 번역하지 말고 번역하지 마십시오. 대문자로만 된 단어도 번역하지 마십시오. , md %}

{% api_property isPublic 'boolean' %}



If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.



{% api_property ticksToDecay 'number' %}



The amount of game ticks when this rampart will lose some hit points.


{% api_method setPublic 'isPublic' A %}



Make this rampart public to allow other players' creeps to pass through.

{% api_method_params %}
isPublic : boolean
Whether this rampart should be public or non-public.
{% endapi_method_params %}

### Return value

The following codes among others:
{% api_return_codes %}
OK | The operation has been scheduled successfully.

코드나 전부 대문자로 된 단어는 번역하지 마세요.

ERR_NOT_OWNER | 이 구조의 소유자가 아닙니다.