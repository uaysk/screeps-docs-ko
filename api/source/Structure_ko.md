# 구조

모든 구조의 기본 프로토타입 객체이다.

{% page inherited/RoomObject. md %}

{% api_property hits 'number' %}

구조물의 현재 힐 포인트 수이다.


{% api_property hitsMax 'number' %}

구조물의 총 힐 포인트 수이다.


{% api_property id 'string' %}

고유한 객체 식별자이다. <a href="#Game. getObjectById"><code>Game. getObjectById</code></a> 메서드를 사용해서 해당 <code>id</code>로 객체 인스턴스를 검색할 수 있다.


{% api_property structureType 'string' %}

<code>STRUCTURE_*</code> 상수 중 하나이다.


{% api_method destroy '' A %}

즉시 이 구조물을 파괴한다.

반환 값
One of the following codes:
{% api_return_codes %}
OK | The operation has been scheduled successfully. 
ERR_NOT_OWNER | You are not the owner of this structure, and it's not in your room. 
ERR_BUSY | Hostile creeps are in the room. 
{% endapi_return_codes %}



{% api_method isActive '' 2 %}
Check whether this structure can be used. If room controller level is insufficient, then this method will return false, and the structure will be highlighted with red in the game.



### Return value
A boolean value.

{% api_method notifyWhenAttacked 'enabled' A %}
Toggle auto notification when the structure is under attack.

알림이 계정 전자 메일로 발송됩니다. 기본값으로 켜져 있습니다.
{% api_method_params %}
enabled : boolean
알림을 사용하도록 설정할지 여부를 선택합니다.
{% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조의 소유자가 아닙니다.
ERR_INVALID_ARGS | <code>enable</code> 인수는 부울 값이 아닙니다.