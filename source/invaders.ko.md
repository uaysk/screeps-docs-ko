title: NPC 침략자(NPC Invaders)
---

에너지를 채굴하는 모든 룸에는 내부 카운터가 있으며, 대략 **채굴된 에너지 100,000 단위**(그리고 약간의 랜덤 변수)가 누적되면 카운터가 만료됩니다. 카운터가 만료되면, 게임이 제어하는 새로운 크립이 룸 출구 중 하나에서 등장해 여러분의 크립을 사냥합니다. 대부분의 경우 구조물은 건드리지 않지만, 구조물이 이동 경로에 있으면 파괴하려고 할 것입니다. 이 크립은 [`attack`](/api/#Creep.attack), [`rangedAttack`](/api/#Creep.rangedAttack), [`dismantle`](/api/#Creep.dismantle)을 사용할 수 있습니다. 룸 간 이동은 할 수 없습니다.

![](img/invader.png)

이 크립의 중요한 특징은, **중립 룸으로 향하는 출구**에서만 등장할 수 있다는 점입니다. 대상 룸이 여러분(또는 다른 누군가)의 컨트롤 하에 있거나 reserve된 룸이라면, 해당 출구에서는 침략자 크립이 절대 등장하지 않습니다. 룸의 모든 출구가 이런 종류라면, 침략자는 아예 등장할 수 없습니다.

현재 NPC 침략자의 공격은 이메일 알림을 생성하지 않습니다. 일반적으로 активно 채굴되는 룸에서는 하루에도 여러 번 등장할 수 있기 때문입니다.

## 레이드(Raids)

10% 확률로, 침략자 1마리뿐 아니라 2~5마리의 무리(company)가 등장합니다. 각 침략자는 근접 공격자, 원거리 공격자, 힐러 같은 역할을 가집니다. 원거리 공격자는 근접과 행동이 달라, 여러분의 크립과 거리를 두려고 합니다. 힐러의 역할은 다른 레이드 구성원을 치료하는 것입니다. 또한 일부 크립은 ![](//static.screeps.com/upload/mineral-icons/UH.png), ![](//static.screeps.com/upload/mineral-icons/KO.png), ![](//static.screeps.com/upload/mineral-icons/LO.png), ![](//static.screeps.com/upload/mineral-icons/ZH.png), ![](//static.screeps.com/upload/mineral-icons/GO.png)로 부스트되어 있을 수도 있습니다.

## 침략자 크립 타입

침략자 크립은 두 가지 크기가 있습니다:

*   RCL 3 이하의 중립/예약(reserved)/점령(claimed) 룸에 등장하는 라이트(light) 크립.
*   RCL 4 이상 점령 룸에 등장하는 헤비(heavy) 크립.

<style>
.invaders td {
    border-top: 1px solid #333;
    background-color: #222;
    color: #ccc;
}
</style>

<table class=invaders>
<tbody>
<tr>
<td width="15%"> </td>
<td style="text-align: center;">RCL < 4</td>
<td style="text-align: center;">RCL ≥ 4</td>
</tr>
<tr>
<td style="text-align: left;">근접(Melee)</td>
<td style="text-align: center;">![](img/smallMelee.png)</td>
<td style="text-align: center;">![](img/bigMelee.png)</td>
</tr>
<tr>
<td style="text-align: left;">원거리(Ranged)</td>
<td style="text-align: center;">![](img/smallRanged.png)</td>
<td style="text-align: center;">![](img/bigRanged.png)</td>
</tr>
<tr>
<td style="text-align: left;">힐러(Healer)</td>
<td style="text-align: center;">![](img/smallHealer.png)</td>
<td style="text-align: center;">![](img/bigHealer.png)</td>
</tr>
</tbody>
</table>

## 테스트

룸 사이드 패널의 "Invasion" 컨트롤을 사용하면 NPC 침략자를 수동으로 생성해 방어를 테스트할 수 있습니다.

![](img/chrome_2016-11-24_14-55-59.png)

## 스트롱홀드(Strongholds)

침략자가 여러분의 룸을 레이드하기 시작했다면, 지도 섹터를 확인해 보세요 &mdash; 어딘가에 그들의 본거지가 있을 것입니다.
이 NPC Stronghold는 공격해 파괴할 수 있으며, 그러면 다음 Stronghold가 스폰될 때까지 여러분의 룸에서 침략자가 나타나지 않게 됩니다.

각 NPC Stronghold는 모든 구조물에 `EFFECT_COLLAPSE_TIMER`를 가지고 있습니다. 이전 Stronghold가 붕괴(collapse)되면, 새 Stronghold가 섹터 어딘가에 거의 즉시 다시 생성됩니다.
Stronghold를 파괴하면, 그 폐허(ruins)는 동일한 효과 타이머를 가진 채 남아 여러분에게 일정 시간의 “침략자 없는” 시간을 제공합니다.

Stronghold 타입은 여러 가지가 있으며, 각 타입은 구조물 배치와 방어자 AI가 다릅니다.
[`StructureInvaderCore`](/api/#StructureInvaderCore)의 `level` 속성을 확인하면 Stronghold의 난이도를 가늠할 수 있습니다.

![](img/stronghold1.png) ![](img/stronghold5.png)

NPC Stronghold를 정복해야 하는 또 하나의 이유가 있습니다 &mdash; 금고(treasury)에 자원이 들어 있기 때문입니다.
모든 Stronghold에는 몇 개의 컨테이너가 있으며, 코어 구조물을 파괴한 뒤에는 그 폐허에도 자원이 남아 있습니다.
다음은 레벨 5 Stronghold 전리품 예시입니다:

![](img/stronghold_loot5.png) ![](img/stronghold_loot1.png) ![](img/stronghold_loot2.png) ![](img/stronghold_loot3.png) ![](img/stronghold_loot4.png)

활성 상태의 NPC Stronghold는 섹터에 침략자 크립을 스폰할 뿐 아니라, 섹터의 중립(심지어 reserved) 룸에도 몇 천 틱마다 더 작은 코어(lesser cores)를 스폰합니다.
이 코어들은 구조물이나 크립을 가지지 않지만, 컨트롤러를 reserve하여, 먼저 코어를 파괴하지 않으면 해당 룸에서 에너지를 채굴할 수 없게 만듭니다.

![](img/invader-core-expand.gif)

