{% page inherited/RoomObject.ko.md %}

{% api_property Structure:hits 'number' %}



구조물의 현재 체력(hits)입니다.



{% api_property Structure:hitsMax 'number' %}



구조물의 총 체력(hits)입니다.



{% api_property Structure:id 'string' %}



고유 객체 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 객체 인스턴스를 가져올 수 있습니다.



{% api_property Structure:structureType 'string' %}



<code>STRUCTURE_*</code> 상수 중 하나입니다.



{% api_method Structure:destroy '' A %}



이 구조물을 즉시 파괴합니다.



### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_BUSY | 방 안에 적 크립이 있습니다.
{% endapi_return_codes %}



{% api_method Structure:isActive '' 2 %}



이 구조물을 사용할 수 있는지 확인합니다. 방 컨트롤러 레벨이 부족하면 이 메서드는 false를 반환하며, 게임 내에서 구조물이 빨간색으로 하이라이트됩니다.



### 반환 값

불리언 값을 반환합니다.

{% api_method Structure:notifyWhenAttacked 'enabled' A %}



구조물이 공격받을 때 자동 알림을 보낼지 설정합니다. 알림은 계정 이메일로 전송됩니다. 기본값은 켜짐입니다.

{% api_method_params %}
enabled : boolean
알림을 켤지/끌지 여부입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_INVALID_ARGS | <code>enable</code> 인자가 불리언 값이 아닙니다.
{% endapi_return_codes %}

