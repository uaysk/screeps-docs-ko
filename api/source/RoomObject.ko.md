# RoomObject

룸 안에서 좌표(position)를 가지는 모든 오브젝트입니다. 거의 모든 게임 오브젝트 프로토타입은 `RoomObject`에서 파생됩니다.

{% api_property effects array %}
적용 중인 효과 목록. 다음 프로퍼티를 가진 오브젝트의 배열입니다:

{% api_method_params %}
effect : number
적용된 효과의 Effect ID. 자연 효과 ID 또는 Power ID일 수 있습니다.
===
level (optional) : number 
적용된 파워의 레벨. 파워 효과가 아닌 경우에는 존재하지 않습니다.
===
ticksRemaining : number
효과가 앞으로 몇 틱 동안 지속되는지.
{% endapi_method_params %}

{% api_property pos '<a href="#RoomPosition">RoomPosition</a>' %}

이 오브젝트의 룸 내 위치를 나타내는 오브젝트입니다.

{% api_property room '<a href="#Room">Room</a>' %}

Room 오브젝트에 대한 링크입니다. 오브젝트가 깃발(flag) 또는 건설 사이트(construction site)이고, 해당 오브젝트가 여러분에게 보이지 않는 룸에 배치되어 있는 경우에는 undefined일 수 있습니다.

