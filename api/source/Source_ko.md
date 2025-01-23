에너지 공급원 개체. `WORK` 신체부를 가진 크립이 수확할 수 있습니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>에너지 양</strong></td>
        <td>중앙 방의 경우 4000, 소유하고 있거나 예약된 방의 경우 3000, 비예약 방의 경우 1500</td>
    </tr>
    <tr>
        <td><strong>에너지 회복</strong></td>
        <td>300번의 게임 틱마다</td>
    </tr>
    </tbody>
</table>
{% page inherited/RoomObject.md %}

{% api_property energy 'number' %}

남아있는 에너지 양.

{% api_property energyCapacity 'number' %}

공급원의 총 에너지 양.

{% api_property id 'string' %}



객체를 고유하게 식별합니다. <a href="#Game. getObjectById"><code>Game. getObjectById</code></a> 메서드를 사용하여 해당 <code>id</code>로 객체 인스턴스를 검색할 수 있습니다.



{% api_property ticksToRegeneration 'number' %}



재료가 채워질 때까지 남은 시간입니다.