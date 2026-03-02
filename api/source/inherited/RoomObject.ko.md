{% api_property RoomObject:effects array %}
적용된 효과 목록입니다. 다음 속성을 가진 객체들의 배열입니다:

{% api_method_params %}
effect : number
적용된 효과의 Effect ID입니다. 자연 효과 ID 또는 Power ID일 수 있습니다.
===
level (optional) : number 
적용된 효과의 파워 레벨입니다. 파워 효과가 아니면 이 속성은 없습니다.
===
ticksRemaining : number
효과가 지속될 남은 틱 수입니다.
{% endapi_method_params %}


{% api_property RoomObject:pos '<a href="#RoomPosition">RoomPosition</a>' %}



이 객체가 방 안에서 차지하는 위치를 나타내는 객체입니다.



{% api_property RoomObject:room '<a href="#Room">Room</a>' %}



Room 객체에 대한 참조입니다. 객체가 플래그 또는 건설 현장이면서, 내가 볼 수 없는 방에 배치되어 있는 경우에는 undefined일 수 있습니다.

