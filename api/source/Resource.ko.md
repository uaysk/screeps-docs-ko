# Resource 

드랍된 자원 조각입니다. 줍지 않으면 시간이 지나 붕괴(decay)합니다.
드랍된 자원 더미는 틱마다 `ceil(amount/1000)`만큼 붕괴합니다.

{% page inherited/RoomObject.ko.md %}

{% api_property amount 'number' %}

담고 있는 자원 유닛 수입니다.

{% api_property id 'string' %}

고유한 오브젝트 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 오브젝트 인스턴스를 가져올 수 있습니다.

{% api_property resourceType 'string' %}

<code>RESOURCE_*</code> 상수 중 하나입니다.

