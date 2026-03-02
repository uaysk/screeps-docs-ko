# Structure

모든 구조물의 기본 프로토타입 오브젝트입니다.

{% page inherited/RoomObject.ko.md %}

{% api_property hits 'number' %}

구조물의 현재 hit points입니다.

{% api_property hitsMax 'number' %}

구조물의 총 hit points입니다.

{% api_property id 'string' %}

고유한 오브젝트 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 오브젝트 인스턴스를 가져올 수 있습니다.

{% api_property structureType 'string' %}

<code>STRUCTURE_*</code> 상수 중 하나입니다.

{% api_method destroy '' A %}

이 구조물을 즉시 파괴합니다.

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아니며, 여러분의 룸에도 있지 않습니다.
ERR_BUSY | 룸에 적대 크립이 있습니다.
{% endapi_return_codes %}

{% api_method isActive '' 2 %}

이 구조물을 사용할 수 있는지 확인합니다. 룸 컨트롤러 레벨이 부족하면 false를 반환하며, 게임에서는 해당 구조물이 빨간색으로 하이라이트됩니다.

### 반환 값

불리언 값입니다.

{% api_method notifyWhenAttacked 'enabled' A %}

구조물이 공격받을 때 자동 알림을 켜거나 끕니다. 알림은 계정 이메일로 전송됩니다. 기본값은 켜짐입니다.

{% api_method_params %}
enabled : boolean
알림을 켤지 끌지 여부.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_INVALID_ARGS | <code>enable</code> 인자가 boolean 값이 아닙니다.
{% endapi_return_codes %}

