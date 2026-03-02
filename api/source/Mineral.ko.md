# Mineral

미네랄 매장지입니다. extractor 구조물을 사용해 `WORK` 바디 파트를 가진 크립이 채굴할 수 있습니다.
미네랄에 대해서는 [이 문서](/resources.html)에서 더 알아보세요.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Regeneration amount</strong></td>
        <td><code>DENSITY_LOW</code>: 15,000 <br /> <code>DENSITY_MODERATE</code>: 35,000<br /> <code>DENSITY_HIGH</code>: 70,000 <br /> <code>DENSITY_ULTRA</code>: 100,000</td>
    </tr>
    <tr>
        <td><strong>Regeneration time</strong></td>
        <td>50,000 ticks</td>
    </tr>
    <tr>
        <td><strong>Density change probability</strong></td>
        <td><code>DENSITY_LOW</code>: 100% chance <br /> <code>DENSITY_MODERATE</code>: 5% chance<br /> <code>DENSITY_HIGH</code>: 5% chance <br /> <code>DENSITY_ULTRA</code>: 100% chance</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.ko.md %} 

{% api_property density 'number' %}

<code>ticksToRegeneration</code>이 0이 되었을 때 이 미네랄 매장지가 어느 density로 리필될지 나타냅니다. <code>DENSITY_*</code> 상수 중 하나입니다.

{% api_property mineralAmount 'number' %}

남아 있는 자원 양입니다.

{% api_property mineralType 'string' %}

자원 타입입니다. <code>RESOURCE_*</code> 상수 중 하나입니다.

{% api_property id 'string' %}

고유한 오브젝트 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 오브젝트 인스턴스를 가져올 수 있습니다.

{% api_property ticksToRegeneration 'number' %}

매장지가 다시 리필될 때까지 남은 시간입니다.

