# Ruin

<img src="img/ruin.png" alt="" align="right" />

파괴된 구조물입니다. 이동 가능한(walkable) 오브젝트입니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Decay</strong></td>
        <td>일부 특수 케이스를 제외하면 500틱</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.ko.md %}


{% api_property destroyTime 'number' %}

구조물이 파괴된 시각입니다.

{% api_property id string %}

고유한 오브젝트 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 오브젝트 인스턴스를 가져올 수 있습니다.

{% api_property store '<a href="#Store">Store</a>' %}

이 구조물의 자원을 담고 있는 [`Store`](#Store) 오브젝트입니다.

{% api_property structure '<a href="#Structure">Structure</a> | <a href="#OwnedStructure">OwnedStructure</a>' %}

파괴된 구조물의 기본 데이터를 담는 오브젝트입니다.

{% api_property ticksToDecay 'number' %}

이 폐허가 붕괴(decay)되기까지 남은 게임 틱 수입니다.

