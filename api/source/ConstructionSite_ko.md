# 건설 현장

현재 건축 중인 구조물의 위치입니다. 게임 화면의 좌측에 있는 '건설' 버튼을 눌러서 혹은 [`Room. createConstructionSite`](#Room. createConstructionSite) 메소드를 이용해 건설 현장을 만들 수 있습니다.

이미 지어진 구조물에 노동자 생물체에게 일정량의 에너지를 공급하고 [`Creep. build`](#Creep. build) 액션을 수행해야만 건설 현장에서 구조물을 짓는데 성공할 수 있습니다.

적의 건설 현장은 노동자 생물체를 이용하여 제거할 수 있습니다.

{% page inherited/RoomObject. md %}

{% api_property id string %}

고유한 객체 식별자입니다. 적합한 생물체를 이용해 건설 현장을 제거할 수 있습니다.

getObjectById 메서드는 id로 개체 인스턴스를 검색합니다.

{% api_property my boolean %}
이것이 자신의 건설 현장인지 여부입니다.
{% api_property owner object %}
구조물의 소유주 정보가 포함된 개체를 가리키는 프로퍼티:
{% api_method_params %}
username : string
소유자 사용자 이름.
{% endapi_method_params %}

{% api_property progress number %}
현재 건설 진행률입니다.
{% api_property progressTotal number %}
구조물을 지을 때 필요한 총 건설 진행률입니다.
{% api_property structureType string %}
<code>STRUCTURE_*</code> 상수들 중 하나를 가리킵니다.

{% api_method remove '' A %}



### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 귀하는 해당 건설 현장의 소유자가 아니며, 해당 객실에도 없습니다.