자원 중 하나가 떨어졌습니다. 이것은 줍지 않으면 얼마 지나지 않아 소멸될 것입니다. 버려진 자원을 쌓아 놓으면 시간이 흐를수록 `ceil(amount/1000)` 단위로 붕괴합니다.
{% page inherited/RoomObject.md %}

{% api_property amount 'number' %}

자원 개체가 포함하고 있는 자원의 양입니다.

{% api_property id 'string' %}

객체를 고유하게 식별할 수 있는 ID입니다. <a href="#Game. getObjectById"><code>Game. getObjectById</code></a> 메서드를 사용해 이 ID로 개체 인스턴스를 검색할 수 있습니다.

{% api_property resourceType 'string' %}

<code>RESOURCE_*</code> 상수 중 하나입니다.