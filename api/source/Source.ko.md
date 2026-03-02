# Source
 
에너지 소스 오브젝트입니다. `WORK` 바디 파트를 가진 크립이 채집할 수 있습니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Energy amount</strong></td>
        <td>중앙 룸: 4000<br />소유/예약된 룸: 3000<br />예약되지 않은 룸: 1500</td>
    </tr>
    <tr>
        <td><strong>Energy regeneration</strong></td>
        <td>매 300 게임 틱</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.ko.md %}

{% api_property energy 'number' %}

남아 있는 에너지 양입니다.

{% api_property energyCapacity 'number' %}

소스의 총 에너지 양입니다.

{% api_property id 'string' %}

고유한 오브젝트 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 오브젝트 인스턴스를 가져올 수 있습니다.

{% api_property ticksToRegeneration 'number' %}

소스가 다시 채워질 때까지 남은 시간입니다.

