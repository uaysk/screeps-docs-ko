# StructurePowerBank

<img src="img/powerBank.png" alt="" align="right" />

비플레이어 구조물입니다. 구조물을 파괴하면 획득할 수 있는 power 자원을 담고 있습니다.
공격할 때마다 공격한 크립에게 피해를 반사합니다. power에 대한 자세한 내용은 [이 문서](/power.html)를 참고하세요.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Hits</strong></td>
        <td>2,000,000</td>
    </tr>
    <tr>
        <td><strong>Return damage</strong></td>
        <td>50%</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>500 — 10,000</td>
    </tr>
    <tr>
        <td><strong>Decay</strong></td>
        <td>5,000 ticks</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}


{% api_property power 'number' %}

담고 있는 power 양입니다.

{% api_property ticksToDecay 'number' %}

이 구조물이 사라질 때까지 남은 게임 틱 수입니다.

