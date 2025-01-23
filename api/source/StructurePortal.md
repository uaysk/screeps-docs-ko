# StructurePortal

<img src="img/portal.png" alt="" align="right" />

플레이어가 아닌 구조물. 다른 방으로 당신의 골칫거리들을 순간이동시킬 수 있는 포털이다. 마치 출구처럼 작용한다.
포털은 각 섹터의 중앙방에 무작위로 나타난다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>안정적인 시간</strong></td>
        <td>10일</td>
    </tr>
    <tr>
        <td><strong>붕괴 시간</strong></td>
        <td>30,000 틱</td>
    </tr>
    </tbody>
</table>

{% block inherited/Structure %}

{%- if settings.language == "ko" %}
{%- endif %}

{% api_property destination '<a href="#RoomPosition">객실 위치</a> | object' %}


만약 이것이 **방 간** 포털이라면, 이 속성은 목적지 방으로 연결하는 점을 향한 `RoomPosition` 객체를 포함합니다.

만약 이것이 **서버 간** 포털이라면, 이 속성은 `shard`와 `room` 문자열 속성을 갖는 객체를 포함합니다. 정확한 좌표가 불분명하며, 크립은 목적지 방에서 빈 공간이 있는 어디든 나타날 것입니다.

{% api_property ticksToDecay 'number' %}

포털이 사라질 게임 시간(ticks)을 의미합니다. 안정된 상태인 경우에는 값이 undefined입니다.