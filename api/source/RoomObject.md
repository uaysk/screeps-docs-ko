# RoomObject
객체의 위치가 방 내에 있는 경우
게임 객체의 거의 모든 프로토타입은 `RoomObject`로부터 파생됩니다.
{% api_property effects array %}
적용된 효과, 다음 속성을 갖는 개체의 배열:

{% api_method_params %}
effect : number
적용된 효과의 효과 ID. 자연 효과 ID 또는 Power ID일 수 있습니다.
===
level (선택 사항) : number
전력 수준의 적용된 효과. 효과가 Power 효과가 아닌 경우에는 부재합니다.
===
ticksRemaining : number
얼마나 많은 틱이 남았는지입니다.
{% endapi_method_params %}

{% api_property pos '<a href="#RoomPosition">RoomPosition</a>' %}
객체의 위치를 방 내에서 나타내는 개체입니다.

<a id="Room" href="#Room"><strong>Room</strong></a> 객실로 연결되는 링크입니다. 깃발이나 공사 현장인 개체가 표시되지 않은 객실에 있을 경우 값이 undefined일 수 있습니다.