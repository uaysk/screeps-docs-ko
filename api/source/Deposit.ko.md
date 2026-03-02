# Deposit

<img src="img/deposit.png" alt="" align="right" />

상품(commodities) 생산에 필요한 희귀 자원 매장지입니다. `WORK` 바디 파트를 가진 크립이 채집할 수 있습니다.
각 채집은 쿨다운을 발생시키며, 시간이 지날수록 쿨다운이 점점 길어집니다.

Deposit에 대해서는 [이 문서](/resources.html)에서 더 알아보세요.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Cooldown</strong></td> 
        <td>`0.001 * totalHarvested ^ 1.2`<td>
    </tr>
    <tr>
        <td><strong>Decay</strong></td>
        <td>등장 또는 마지막 채집 이후 50,000틱</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.ko.md %}

{% api_property cooldown 'number' %}

다음 harvest 액션이 가능해질 때까지 남은 게임 틱 수입니다.

{% api_property depositType 'string' %}

Deposit 타입입니다. 아래 상수 중 하나입니다:

```javascript-content
RESOURCE_MIST
RESOURCE_BIOMASS
RESOURCE_METAL
RESOURCE_SILICON
```

{% api_property id 'string' %}

고유한 오브젝트 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 오브젝트 인스턴스를 가져올 수 있습니다.

{% api_property lastCooldown 'number' %}

이 Deposit에 대한 마지막 채집의 쿨다운입니다.

{% api_property ticksToDecay 'number' %}

이 Deposit이 사라질 때까지 남은 게임 틱 수입니다.

