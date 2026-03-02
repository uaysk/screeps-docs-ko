# StructurePortal

<img src="img/portal.png" alt="" align="right" />

비플레이어 구조물입니다. 룸 출구 타일처럼 동작하며, 크립을 먼 룸으로 즉시 텔레포트합니다.
포털은 각 섹터의 중앙 룸에 무작위로 생성됩니다.</p>

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Stable time</strong></td>
        <td>10 days</td>
    </tr>
    <tr>
        <td><strong>Decay time</strong></td>
        <td>30,000 ticks</td>
    </tr>
    </tbody>
</table>

{% page inherited/Structure.ko.md %}


{% api_property destination '<a href="#RoomPosition">RoomPosition</a> | object' %}

**룸 간(inter-room)** 포털인 경우, 이 프로퍼티는 목적지 룸의 지점을 가리키는 `RoomPosition` 오브젝트를 담습니다.

**샤드 간(inter-shard)** 포털인 경우, 이 프로퍼티는 `shard` 및 `room` 문자열 프로퍼티를 가진 오브젝트를 담습니다.
정확한 좌표는 결정되지 않으며, 크립은 목적지 룸의 어떤 빈 칸에든 나타납니다.

{% api_property ticksToDecay 'number' %}

포털이 사라지기까지 남은 게임 틱 수입니다. 포털이 안정 상태(stable)인 경우에는 undefined입니다.

