# Ruin[편집]
<img src="img/ruin.png" alt="" align="right" />
파괴된 구조물입니다. 이것은 걸을 수 있는 객체입니다.
<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>썩음</strong></td>
        <td>500 틱, 일부 특별한 경우는 제외</td>
    </tr>
    </tbody>
</table>
{% page inherited/RoomObject.md %}
{% api_property destroyTime 'number' %}
파괴된 객체의 시간입니다.
{% api_property id string %}
객체를 고유하게 구분합니다. <a href="#Game. getObjectById"><code>Game. getObjectById</code></a> 메서드를 사용하여 이 <code>id</code>로 객체 인스턴스를 검색할 수 있습니다.

파괴된 구조물의 기본 데이터를 포함하는 객체입니다.

{% api_property ticksToDecay 'number' %}

이 폐허가 붕괴되기까지의 게임 턴 수입니다.