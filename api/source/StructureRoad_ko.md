구조도로(StructureRoad)

```
<img src="img/road_plain.png" alt="" align="right" />

이동 비용을 1로 감소시킵니다. 도로를 사용하면 이동 속도가 느린 `MOVE` 신체 부위를 가진 크립을 만들 수 있습니다. 또한 자연 지형 벽(natural terrain walls)을 통과하기 어려운 곳에도 도로를 건설할 수 있습니다.
```

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

{%/page inherited/Structure

{% api_property ticksToDecay 'number' %}

이 도로가 일부 타격점을 잃게되는 게임 틱의 수입니다.