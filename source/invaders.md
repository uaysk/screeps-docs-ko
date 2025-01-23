title: NPC Invaders

Every 방에서 에너지가 채굴되면 약 **100,000 단위의 에너지**(일부 임의의 변수 포함)를 내부 카운터로 보유하고 있습니다. 이 카운터가 만료되면 방 출구 중 한 곳에 NPC 크립이 하나 생성됩니다. 목표는 플레이어의 크립을 사냥하는 것입니다. 대부분의 경우 건물은 건드리지 않지만, 건물이 그 길에 있으면 파괴하려고 합니다. 이 크립은 [`attack`](/api/#Creep. attack), [`rangedAttack`](/api/#Creep. rangedAttack) 및 [`dismantle`](/api/#Creep. dismantle)를 사용할 수 있습니다. 그것은 방들 사이에서 움직일 수 없습니다.

! [파일:invader.png](https://user-images.githubusercontent.com/6580841/93724518-1b5f9a6e-cddd-4f1e-a4d8-ef7bbe859a6a.png)

이 NPC 크립의 중요한 특징은 그들이 **중립적인 방**으로의 출구에만 나타날 수 있다는 것입니다.

목표 방이 귀하(나 다른 사람)의 통제하에 있거나 예약된 방일 경우, 침입자 크립은 그 출구에서 결코 나타나지 않습니다. 방의 모든 출구가 이러한 종류라면 침입자는 전혀 나타나지 않습니다. 현재 NPC 침입자 공격은 하루에도 여러 번 적극적으로 수확되는 경우가 많기 때문에 전자 메일 알림을 생성하지 않습니다. ## 습격

단독 침입자를 얻는 데 10%의 확률이 있으며, 2명에서 5명까지의 회사가 동반될 수 있습니다. 각 침입자는 역할이 다릅니다: 근접 공격자, 원거리 공격자, 또는 치료자. 원거리 공격자들은 크립과의 거리를 유지하려고 시도합니다. 치료사의 역할은 명백히 다른 습격원을 치유하는 것입니다.

또한, ! [](//static.screeps.com/upload/mineral-icons/UH.png), ! [](//static.screeps.com/upload/mineral-icons/KO.png), ! [](//static.screeps.com/upload/mineral-icons/LO.png), ! [](//static.screeps.com/upload/mineral-icons/ZH.png) 또는 ! [](//static.screeps.com/upload/mineral-icons/GO.png)와 같은 일부 크립이 강화될 수 있습니다.

## Invader 크립 유형

두 가지 크기의 침략자 크립이 있습니다.

*  중립, 예약된, 그리고 레벨 3 까지의 소유된 방에 나타나는 가벼운 크립들. *  소유된 방 레벨 4 이상에 나타나는 무거운 크립들. </style>
<style>
.caption {
    font-weight: bold;
}

.invader-types-list {
    margin: 1em 0;
}

.invader-type-header {
    font-weight: bold;
    padding: 0.5em;
    border-bottom: 1px solid #ccc;
}

.invader-type-item {
    margin: 0;
    padding: 0.5em;
}
</style>
<div class="caption">크립 유형</div>
<ul class="invader-types-list">
    <li class="invader-type-header">크립 종류</li>
    <li class="invader-type-item">가벼운 크립</li>
    <li class="invader-type-item">무거운 크립</li>
</ul>

.png)</td>
</tr>
</tbody>
</table>

! [chrome_2016-11-24_14-57-38.png](attachment:chrome_2016-11-24_14-57-38.png)

요새에는 여러 유형이 있습니다. 각 유형마다 구조와 레이아웃이 다르고 수비군의 AI가 달라집니다. 요새의 난이도를 예상하려면 구조 침입자 핵의 `level` 속성을 확인해야합니다.

강력한 아바타게임 ! [](img/stronghold1.png) ! [](img/stronghold5.png)
NPC 요새를 정복하는 것이 더 있습니다. 자원을 보유하고 있습니다. 모든 요새에는 컨테이너가 몇 개 있으며 핵심 구조물인 ruin도 파괴 한 후 자원을 포함합니다. 다음은 레벨 5 요새 전리품의 예입니다:

! [](img/stronghold_loot5.png) ! [](img/stronghold_loot1.png) ! [](img/stronghold_loot2.png) ! [].(img/stronghold_loot3.png)! [](img/stronghold_loot4.png)

.png)

활성 NPC Stronghold는 섹터에 침입자 크립을 생성할 뿐만 아니라 몇천 티크마다 중립(심지어 예약된) 섹터의 방에도 소수 핵을 생성합니다.
이러한 핵은 구조물이나 크립이 없지만 컨트롤러를 예약하므로 먼저 핵을 파괴하지 않고는 에너지를 수확할 수 없습니다.
![invader-core-expand.png](attachment: invader-core-expand.png)