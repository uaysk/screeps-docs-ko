# StructureRoad

<img src="img/road_plain.png" alt="" align="right" />

이동 비용을 1로 줄입니다. 도로를 사용하면 `MOVE` 바디 파트가 더 적은 크립을 설계할 수 있습니다. 또한 원래는 지나갈 수 없는 자연 지형 벽 위에도 도로를 건설할 수 있습니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Controller level</strong></td>
        <td>Any (including neutral rooms)</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>
            <ul>
                <li>300 on plain land</li>
                <li>1,500 on swamp</li>
                <li>45,000 on walls</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>
            <ul>
                <li>5,000 on plain land</li>
                <li>25,000 on swamp</li>
                <li>750,000 on walls</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>Decay</strong></td>
        <td>
            <ul>
                <li>Loses 100 hits every 1,000 ticks on plain land</li>
                <li>Loses 500 hits every 1,000 ticks on swamp</li>
                <li>Loses 15,000 hits every 1,000 ticks on walls</li>
            </ul>
            Note: every creep step decreases the decay timer for 1 tick per each creep body part</td>
    </tr>
    </tbody>
</table> 

{% page inherited/Structure.ko.md %}


{% api_property ticksToDecay 'number' %}

이 도로가 일부 hit points를 잃기까지 남은 게임 틱 수입니다.

