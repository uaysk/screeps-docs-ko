# ConstructionSite

현재 건설 중인 구조물의 건설 사이트입니다. 건설 사이트는 게임 화면 왼쪽의 'Construct' 버튼 또는 [`Room.createConstructionSite`](#Room.createConstructionSite) 메서드로 만들 수 있습니다.

건설 사이트에 구조물을 짓기 위해서는, 워커 크립에게 에너지를 주고 [`Creep.build`](#Creep.build) 액션을 수행하세요.

적의 건설 사이트는 크립을 그 위로 이동시키면 제거할 수 있습니다.

{% page inherited/RoomObject.ko.md %} 

{% api_property id string %}

고유한 오브젝트 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 오브젝트 인스턴스를 가져올 수 있습니다.

{% api_property my boolean %}

이 건설 사이트가 여러분의 것인지 여부입니다.

{% api_property owner object %}

구조물 소유자 정보를 담은 오브젝트입니다. 다음 프로퍼티를 포함합니다:

{% api_method_params %}
username : string
소유자 유저 이름.
{% endapi_method_params %}

{% api_property progress number %}

현재 건설 진행도입니다.

{% api_property progressTotal number %}

구조물을 완성하기 위해 필요한 총 건설 진행도입니다.

{% api_property structureType string %}

<code>STRUCTURE_*</code> 상수 중 하나입니다.

{% api_method remove '' A %}

건설 사이트를 제거합니다.

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 건설 사이트의 소유자가 아니며, 여러분의 룸에도 있지 않습니다.
{% endapi_return_codes %}

