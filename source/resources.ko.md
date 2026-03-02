title: 자원(Resources)
---

게임에는 4가지 종류의 자원이 있습니다: **에너지(energy)**, **미네랄(minerals)**, **파워(power)**, **상품(commodities)**.
자원은 채집/가공/마켓 거래/크립 운반/구조물 저장이 가능합니다.
각 자원 종류는 서로 다른 목적을 가지며, 게임을 시작할 때 접근할 수 있는 가장 기본 자원은 에너지뿐입니다.

## 에너지(Energy)

{% note info %}
**어디서 얻나요:** 거의 모든 룸의 [`Source`](/api/#Source). <br>
**어떻게 얻나요:** `WORK` 파트를 가진 크립을 보내 [`harvest`](/api/#Creep.harvest) 하세요. <br>
**어디에 쓰나요:** 크립 생성, 구조물 건설.
{% endnote %}

에너지는 Screeps 세계의 핵심 건설 재료입니다. 기지는 에너지로 돌아가기 때문에, 충분한 에너지 채집은 어떤 콜로니에도 필수입니다.
에너지는 홈 룸에서만이 아니라, 수입을 늘리기 위해 다른 룸에서 원격으로 채집할 수도 있습니다.

## 미네랄(Minerals)

{% note info %}
**어디서 얻나요:** 거의 모든 룸의 [`Mineral`](/api/#Mineral). <br>
**어떻게 얻나요:** [`StructureExtractor`](/api/#StructureExtractor)를 건설하고 `WORK` 파트를 가진 크립을 보내 [`harvest`](/api/#Creep.harvest) 하세요. <br>
**어디에 쓰나요:** 크립 능력 부스트, 그리고 거래용 상품 생산.
{% endnote %}

미네랄을 채굴하고 가공하면 경제를 크게 가속할 수 있고, 크립의 효율도 강화할 수 있습니다.

미네랄을 다루는 과정은 3단계로 구성됩니다:

### 채굴(Harvesting)

아래 그림에는 7가지 기본 미네랄 타입이 표시되어 있습니다.

![](img/minerals-01.png)

각 룸에는 오직 한 종류의 미네랄만 존재하므로, 효율적으로 처리하려면 여러 적절한 룸에 접근할 수 있거나 다른 플레이어와의 거래 관계가 필요합니다.

<img src="img/mining_minerals.png" align="right">미네랄 매장지는 룸 안에서 특수한 심볼로 표시된 위치에 있습니다. 채굴을 시작하려면 그 위에 특수 구조물 [**Extractor**](/api/#StructureExtractor)(RCL 6에서 사용 가능)를 건설해야 합니다. 건설 후에는 에너지를 채굴하듯이 매장지에 [`harvest`](/api/#Creep.harvest) 메서드를 적용해 해당 미네랄을 채굴할 수 있습니다.

### 미네랄 화합물(Mineral compounds)

기본 미네랄은 그 자체로는 쓸모가 없습니다. 유용한 능력을 부여하려면 [**Lab**](/api/#StructureLab) 구조물에서 특수 조합식에 따라 결합해야 합니다.

![](img/minerals-02.png)

반응(reaction) 하나에는 3개의 랩이 필요합니다: 2개는 시약(reagent) 소스, 1개는 생성물(produce) 수집기입니다. 랩들은 서로 2칸 이내 거리여야 합니다. 한 랩에는 동시에 2종 이상의 미네랄을 담을 수 없습니다.

<img src="img/2016-03-09_10-32-33.gif" align="right">

    var labs = room.find(FIND_MY_STRUCTURES, 
        {filter: {structureType: STRUCTURE_LAB}});

    labs[0].runReaction(labs[1], labs[2]);

    // on the next tick...

    console.log(labs[0].mineralType) // -> OH
    console.log(labs[1].mineralType) // -> O
    console.log(labs[2].mineralType) // -> H

### 크립 부스트(Creep boosts)

랩은 미네랄로 화학 반응을 수행하는 것 외에도, 생성된 화합물을 사용해 크립의 특정 속성을 영구적으로 업그레이드(부스트)할 수 있습니다.

각 화합물은 아래 표에 따라 [`StructureLab.boostCreep`](/api/#StructureLab.boostCreep) 메서드로 특정 타입의 바디 파트 1개에 적용되며, 해당 크립의 액션 중 하나의 효율을 강화합니다. 부스트된 파트는 대응하는 파트 2개, 3개, 심지어 4개처럼 동작합니다. 크립 전체를 부스트하려면 해당 타입의 모든 파트를 부스트해야 합니다.

바디 파트 1개를 부스트하려면 미네랄 화합물 30과 에너지 20이 필요합니다. 바디 파트 1개는 오직 한 종류의 화합물로만 부스트할 수 있습니다.

<style>
.minerals,
.commodities {
    margin-top: 0 !important;
    border: 0 !important;
    width: 100%;
}
.minerals td,
.commodities td {
    border-top: 1px solid #333;
    color: #bbb;
    background-color: #22242b;
    font-size: 13px;
}
@media (min-width: 1280px) {
    .minerals td:first-child {
        white-space: nowrap;
    }
}
.minerals td:nth-child(2) {
    white-space: nowrap;
}
.minerals td:nth-child(3) {
    text-align: center;
}
.minerals td:nth-child(4) {
    min-width: 87px;
}
.minerals code {
    background-color: #333;
    color: #eee;
    word-break: break-all;
}
.minerals img,
.commodities img {
    margin-right: 5px;
    vertical-align: middle;
} 
.minerals__divider th {
    background-color: #333;
    color: #ffe099;
    text-align: center;
    font-size: 13px;
}
.minerals__head th,
.commodities__head th{
    background-color: #22242b;
    color: #ccc;
    font-weight: normal !important;
    font-size: 11px;
}

.commodities em {
    font-style: normal;
    color: #eaeaea;
}
.commodities td {
    padding: 10px 15px !important;
}
</style>

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>미네랄 화합물</span>
<em>(클릭하여 펼치기)</em>
</div>

<div class="collapsible-table__content">

<table class="minerals">
<colgroup>
<col></col>
<col></col>
<col></col>
<col></col>
</colgroup>
<tbody>
<tr class=minerals__head>
<th>이름</th>
<th>조합식</th>
<th>시간</th>
<th>바디 파트</th>
<th>효과</th>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">기본 화합물</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/OH.png)hydroxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/H.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>20</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZK.png)zynthium keanite</td>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) + ![](//static.screeps.com/upload/mineral-icons/K.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UL.png)utrium lemergite</td>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) + ![](//static.screeps.com/upload/mineral-icons/L.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/G.png)ghodium</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZK.png) + ![](//static.screeps.com/upload/mineral-icons/UL.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">티어 1 화합물</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UH.png)utrium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`ATTACK`</td>
<td>`attack` 효율 +100%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UO.png)utrium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/U.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>`harvest` 효율 +200%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KH.png)keanium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/K.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`CARRY`</td>
<td>용량 +50</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KO.png)keanium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/K.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`RANGED_ATTACK`</td>
<td>`rangedAttack` 및 `rangedMassAttack` 효율 +100%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LH.png)lemergium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/L.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>15</td>
<td>`WORK`</td>
<td>에너지 비용 증가 없이 `repair` 및 `build` 효율 +50%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LO.png)lemergium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/L.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`HEAL`</td>
<td>`heal` 및 `rangedHeal` 효율 +100%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZH.png)zynthium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>20</td>
<td>`WORK`</td>
<td>`dismantle` 효율 +100%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZO.png)zynthium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/Z.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`MOVE`</td>
<td>피로 감소 속도 +100%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GH.png)ghodium hydride</td>
<td>![](//static.screeps.com/upload/mineral-icons/G.png) + ![](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>에너지 비용 증가 없이 `upgradeController` 효율 +50%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GO.png)ghodium oxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/G.png) + ![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>10</td>
<td>`TOUGH`</td>
<td>받는 피해 -30%</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">티어 2 화합물</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UH2O.png)utrium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/UH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`ATTACK`</td>
<td>`attack` 효율 +200%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/UHO2.png)utrium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/UO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`WORK`</td>
<td>`harvest` 효율 +400%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KH2O.png)keanium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/KH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`CARRY`</td>
<td>용량 +100</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/KHO2.png)keanium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/KO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`RANGED_ATTACK`</td>
<td>`rangedAttack` 및 `rangedMassAttack` 효율 +200%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LH2O.png)lemergium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/LH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>에너지 비용 증가 없이 `repair` 및 `build` 효율 +80%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/LHO2.png)lemergium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/LO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`HEAL`</td>
<td>`heal` 및 `rangedHeal` 효율 +200%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZH2O.png)zynthium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>40</td>
<td>`WORK`</td>
<td>`dismantle` 효율 +200%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/ZHO2.png)zynthium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`MOVE`</td>
<td>피로 감소 속도 +200%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GH2O.png)ghodium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/GH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>15</td>
<td>`WORK`</td>
<td>에너지 비용 증가 없이 `upgradeController` 효율 +80%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/GHO2.png)ghodium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/GO.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>30</td>
<td>`TOUGH`</td>
<td>받는 피해 -50%</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">티어 3 화합물</th>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XUH2O.png)catalyzed utrium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/UH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`ATTACK`</td>
<td>`attack` 효율 +300%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XUHO2.png)catalyzed utrium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/UHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`WORK`</td>
<td>`harvest` 효율 +600%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XKH2O.png)catalyzed keanium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/KH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`CARRY`</td>
<td>용량 +150</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XKHO2.png)catalyzed keanium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/KHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`RANGED_ATTACK`</td>
<td>`rangedAttack` 및 `rangedMassAttack` 효율 +300%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XLH2O.png)catalyzed lemergium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/LH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>65</td>
<td>`WORK`</td>
<td>에너지 비용 증가 없이 `repair` 및 `build` 효율 +100%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XLHO2.png)catalyzed lemergium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/LHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`HEAL`</td>
<td>`heal` 및 `rangedHeal` 효율 +300%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XZH2O.png)catalyzed zynthium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>160</td>
<td>`WORK`</td>
<td>`dismantle` 효율 +300%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XZHO2.png)catalyzed zynthium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/ZHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`MOVE`</td>
<td>피로 감소 속도 +300%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XGH2O.png)catalyzed ghodium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/GH2O.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>80</td>
<td>`WORK`</td>
<td>에너지 비용 증가 없이 `upgradeController` 효율 +100%</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XGHO2.png)catalyzed ghodium alkalide</td>
<td>![](//static.screeps.com/upload/mineral-icons/GHO2.png) + ![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>150</td>
<td>`TOUGH`</td>
<td>받는 피해 -70%</td>
</tr>
</tbody>
</table>
</div>
</div>


## 상품(Commodities)

{% note info %}
**어디서 얻나요:** "highway" 룸의 [`Deposit`](/api/#Deposit). <br>
**어떻게 얻나요:** `WORK` 파트를 가진 크립을 보내 [`harvest`](/api/#Creep.harvest) 하세요. <br>
**어디에 쓰나요:** 거래용 상품 생산 및 크레딧 획득.
{% endnote %}

거래용 상품은 NPC 마켓 트레이더가 가장 관심을 가지는 자원입니다. 이 자원들은 판매하여 크레딧을 생성하는 것 외에는 다른 용도가 없습니다.
고레벨 상품을 생산하는 것이 게임에서 가장 수익성 높은 사업입니다.

### 채굴(Harvesting)

원자재 상품(raw commodities)은 지도에서 거주 섹터를 나누는 "highway" 룸의 [`Deposit`](/api/#Deposit)에서 채집합니다.
원자재 타입은 4가지입니다: Metal, Silicon, Biomass, Mist.
이들은 월드 맵에 고르게 분포하지 않으며, 지도 사분면(NW, NE, SW, SE)마다 한 종류씩 분포합니다.

![](img/commodities.png)

미네랄과 달리, 이 매장지는 채집할수록 고갈됩니다. 더 많이 채집할수록 쿨다운이 더 길어집니다.
한동안 채집을 멈추면 사라졌다가, 근처의 다른 위치에 다시 나타납니다.
또한 섹터 내의 다른 모든 매장지가 일정 수준 이하로 고갈되면, 섹터에 새 매장지가 나타납니다.

### 기본 상품(Basic commodities)

원자재를 그대로 판매하는 것은 수익성이 낮을 수 있습니다.
따라서 [**Factory**](/api/#StructureFactory)(RCL 7에서 사용 가능)를 건설해 [`produce`](/api/#StructureFactory.produce)로 더 복잡한 상품을 생산하는 편이 좋습니다.

새로 건설된 팩토리는 레벨이 없기 때문에, 존재하는 모든 자원 중에서도 일부 기본 상품만 생산할 수 있습니다(아래 표의 "any level" 티어).
또한 자원을 "압축" 형태로 저장하는 용도로도 사용할 수 있습니다.

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>상품 압축(Compressing commodities)</span>
<em>(클릭하여 펼치기)</em>
![](img/commodities1.png)
</div>

<div class="collapsible-table__content"> 
<table class="commodities">
<tbody>
<tr class=commodities__head>
<th>제품</th><th>팩토리</th><th>재료</th><th>쿨다운</th>
</tr> 
<tr><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/U.png)Utrium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>{% resource "Lemergium bar" %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/L.png)Lemergium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/Z.png)Zynthium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/K.png)Keanium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/G.png)Ghodium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/O.png)Oxygen&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/H.png)Hydrogen&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/X.png)Catalyst&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>{% resource 'Battery' %}&nbsp;&times;&nbsp;<em>50</em></td><td>모든 레벨</td><td>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>600</em></td><td>10&nbsp;틱</td></tr>
</tbody>
</table>

</div>
</div>

원할 때 원자재를 회수하기 위해 압축 해제할 수 있습니다.

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>상품 압축 해제(Decompressing commodities)</span>
<em>(클릭하여 펼치기)</em>
![](img/commodities2.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>제품</th><th>팩토리</th><th>재료</th><th>쿨다운</th></tr> 
<tr><td>![](//static.screeps.com/upload/mineral-icons/U.png)Utrium&nbsp;&times;&nbsp;<em>500</em></td><td>모든 레벨</td><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>![](//static.screeps.com/upload/mineral-icons/L.png)Lemergium&nbsp;&times;&nbsp;<em>500</em></td><td>모든 레벨</td><td>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>![](//static.screeps.com/upload/mineral-icons/Z.png)Zynthium&nbsp;&times;&nbsp;<em>500</em></td><td>모든 레벨</td><td>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>![](//static.screeps.com/upload/mineral-icons/K.png)Keanium&nbsp;&times;&nbsp;<em>500</em></td><td>모든 레벨</td><td>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>![](//static.screeps.com/upload/mineral-icons/G.png)Ghodium&nbsp;&times;&nbsp;<em>500</em></td><td>모든 레벨</td><td>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>![](//static.screeps.com/upload/mineral-icons/O.png)Oxygen&nbsp;&times;&nbsp;<em>500</em></td><td>모든 레벨</td><td>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>![](//static.screeps.com/upload/mineral-icons/H.png)Hydrogen&nbsp;&times;&nbsp;<em>500</em></td><td>모든 레벨</td><td>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>![](//static.screeps.com/upload/mineral-icons/X.png)Catalyst&nbsp;&times;&nbsp;<em>500</em></td><td>모든 레벨</td><td>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱</td></tr>
<tr><td>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>500</em></td><td>모든 레벨</td><td>{% resource 'Battery' %}&nbsp;&times;&nbsp;<em>50</em></td><td>10&nbsp;틱</td></tr>
</table> 

</div>
</div>

지역 매장지 자원(regional deposit resources)에 접근할 수 있게 되면, 그것들로부터 추가적인 기본 상품을 생산할 수 있습니다.

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>기본 지역 상품(Basic regional commodities)</span>
<em>(클릭하여 펼치기)</em>
![](img/commodities3.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>제품</th><th>팩토리</th><th>재료</th><th>쿨다운</th></tr> 
<tr><td>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>20</em></td><td>모든 레벨</td><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Silicon' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;틱</td></tr>
<tr><td>{% resource 'Cell' %}&nbsp;&times;&nbsp;<em>20</em></td><td>모든 레벨</td><td>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Biomass' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;틱</td>
<tr><td>{% resource 'Alloy' %}&nbsp;&times;&nbsp;<em>20</em></td><td>모든 레벨</td><td>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Metal' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;틱</td></tr>
<tr><td>{% resource 'Condensate' %}&nbsp;&times;&nbsp;<em>20</em></td><td>모든 레벨</td><td>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Mist' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;틱</td></tr>
</table>
</div>
</div>

위의 모든 상품은 어떤 레벨의 팩토리에서도 생산할 수 있습니다.

### 고급 상품(Higher commodities)

팩토리를 온전히 활용하려면 [Operator](power.html#Power-Creeps)와 그 `OPERATE_FACTORY` 파워가 필요합니다.
Operator가 레벨이 없는 팩토리에 이 파워를 사용하면, 팩토리 레벨이 파워 레벨로 영구적으로 설정되고 동일한 효과가 팩토리에 적용됩니다.
이로써 해당 레벨의 상품을 생산할 수 있게 됩니다.
팩토리는 정확히 같은 레벨의 상품 또는 "any level" 상품만 생산할 수 있습니다.
한 번 설정된 팩토리 레벨은 변경할 수 없습니다.
효과 지속 시간이 끝나면 팩토리는 단순히 비활성화되지만, 레벨은 그대로 유지됩니다(다만 "any level" 상품은 여전히 가능).
다시 활성화하려면 같은 파워 레벨의 Operator가 필요합니다.
다른 레벨의 효과는 적용할 수 없으며, 팩토리 레벨을 바꾸는 유일한 방법은 다시 건설하는 것입니다.

각 고레벨 상품은 더 낮은 레벨의 상품을 요구하므로 생산 체인(production chains)이 형성됩니다. 새 자원 타입 4가지 각각에 대해 하나씩 총 4개의 생산 체인이 있으며,
**Mechanical**(Metal 소비), **Electronical**(Silicon 소비), **Biological**(Biomass 소비), **Mystical**(Mist 소비) 체인과 공용 컴포넌트가 있습니다.
이 상품들은 마켓에서 가장 수익성 높은 가격대를 형성합니다.

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>공용 고급 상품(Common higher commodities)</span>
<em>(클릭하여 펼치기)</em>
![](img/commodities4.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>제품</th><th>팩토리</th><th>재료</th><th>쿨다운</th></tr> 
<tr><td>{% resource 'Composite' %}&nbsp;&times;&nbsp;<em>20</em></td><td>레벨 1</td><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>20</em></td><td>50&nbsp;틱</td></tr>
<tr><td>{% resource 'Crystal' %}&nbsp;&times;&nbsp;<em>6</em></td><td>레벨 2</td><td>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>45</em></td><td>21&nbsp;틱</td></tr>
<tr><td>{% resource 'Liquid' %}&nbsp;&times;&nbsp;<em>12</em></td><td>레벨 3</td><td>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>90</em></td><td>60&nbsp;틱</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>기계 체인(Mechanical chain)</span>
<em>(클릭하여 펼치기)</em>
![](img/commodities5.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>제품</th><th>팩토리</th><th>재료</th><th>쿨다운</th></tr>
<tr><td>{% resource 'Tube' %}&nbsp;&times;&nbsp;<em>2</em></td><td>레벨 1</td><td>{% resource 'Alloy' %}&nbsp;&times;&nbsp;<em>40</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>16</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>8</em></td><td>45&nbsp;틱</td></tr>
<tr><td>{% resource 'Fixtures' %}</td><td>레벨 2</td><td>{% resource 'Composite' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Alloy' %}&nbsp;&times;&nbsp;<em>41</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>161</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>8</em></td><td>115&nbsp;틱</td></tr>
<tr><td>{% resource 'Frame' %}</td><td>레벨 3</td><td>{% resource 'Fixtures' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Tube' %}&nbsp;&times;&nbsp;<em>4</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>330</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>31</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>125&nbsp;틱</td></tr>
<tr><td>{% resource 'Hydraulics' %}</td><td>레벨 4</td><td>{% resource 'Liquid' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Fixtures' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Tube' %}&nbsp;&times;&nbsp;<em>15</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>208</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;틱</td></tr>
<tr><td>{% resource 'Machine' %}</td><td>레벨 5</td><td>{% resource 'Hydraulics' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Frame' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Fixtures' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Tube' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;틱</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>생물 체인(Biological chain)</span>
<em>(클릭하여 펼치기)</em>
![](img/commodities6.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>제품</th><th>팩토리</th><th>재료</th><th>쿨다운</th></tr>
<tr><td>{% resource 'Phlegm' %}&nbsp;&times;&nbsp;<em>2</em></td><td>레벨 1</td><td>{% resource 'Cell' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>36</em><br>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>16</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>8</em></td><td>35&nbsp;틱</td></tr>
<tr><td>{% resource 'Tissue' %}&nbsp;&times;&nbsp;<em>2</em></td><td>레벨 2</td><td>{% resource 'Phlegm' %}&nbsp;&times;&nbsp;<em>10</em><br>{% resource 'Cell' %}&nbsp;&times;&nbsp;<em>10</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>110</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>164&nbsp;틱</td></tr>
<tr><td>{% resource 'Muscle' %}</td><td>레벨 3</td><td>{% resource 'Tissue' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Phlegm' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>50</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>50</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>250&nbsp;틱</td></tr>
<tr><td>{% resource 'Organoid' %}</td><td>레벨 4</td><td>{% resource 'Muscle' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Tissue' %}&nbsp;&times;&nbsp;<em>5</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>208</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>256</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;틱</td></tr>
<tr><td>{% resource 'Organism' %}</td><td>레벨 5</td><td>{% resource 'Organoid' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Liquid' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Tissue' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Cell' %}&nbsp;&times;&nbsp;<em>310</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;틱</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>전자 체인(Electronical chain)</span>
<em>(클릭하여 펼치기)</em>
![](img/commodities7.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>제품</th><th>팩토리</th><th>재료</th><th>쿨다운</th></tr>
<tr><td>{% resource 'Switch' %}&nbsp;&times;&nbsp;<em>5</em></td><td>레벨 1</td><td>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>40</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>95</em><br>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>35</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>20</em></td><td>70&nbsp;틱</td></tr>
<tr><td>{% resource 'Transistor' %}</td><td>레벨 2</td><td>{% resource 'Switch' %}&nbsp;&times;&nbsp;<em>4</em><br>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>15</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>85</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>8</em></td><td>59&nbsp;틱</td></tr>
<tr><td>{% resource 'Microchip' %}</td><td>레벨 3</td><td>{% resource 'Transistor' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Composite' %}&nbsp;&times;&nbsp;<em>50</em><br>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>117</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>25</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>250&nbsp;틱</td></tr>
<tr><td>{% resource 'Circuit' %}</td><td>레벨 4</td><td>{% resource 'Microchip' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Transistor' %}&nbsp;&times;&nbsp;<em>5</em><br>{% resource 'Switch' %}&nbsp;&times;&nbsp;<em>4</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>115</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;틱</td></tr>
<tr><td>{% resource 'Device' %}</td><td>레벨 5</td><td>{% resource 'Circuit' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Microchip' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Crystal' %}&nbsp;&times;&nbsp;<em>110</em><br>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;틱</td></tr>
</table>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>신비 체인(Mystical chain)</span>
<em>(클릭하여 펼치기)</em>
![](img/commodities8.png)
</div>

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>제품</th><th>팩토리</th><th>재료</th><th>쿨다운</th></tr>
<tr><td>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>3</em></td><td>레벨 1</td><td>{% resource 'Condensate' %}&nbsp;&times;&nbsp;<em>30</em><br>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>15</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>54</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>12</em></td><td>41&nbsp;틱</td></tr>
<tr><td>{% resource 'Extract' %}&nbsp;&times;&nbsp;<em>2</em></td><td>레벨 2</td><td>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>10</em><br>{% resource 'Condensate' %}&nbsp;&times;&nbsp;<em>30</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>60</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>128&nbsp;틱</td></tr>
<tr><td>{% resource 'Spirit' %}</td><td>레벨 3</td><td>{% resource 'Extract' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>90</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>200&nbsp;틱</td></tr>
<tr><td>{% resource 'Emanation' %}</td><td>레벨 4</td><td>{% resource 'Spirit' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Extract' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>112</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;틱</td></tr>
<tr><td>{% resource 'Essence' %}</td><td>레벨 5</td><td>{% resource 'Emanation' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Spirit' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Crystal' %}&nbsp;&times;&nbsp;<em>110</em><br>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;틱</td></tr>
</table>
</div>
</div>


## 파워(Power)

{% note info %}
**어디서 얻나요:** "highway" 룸의 [`StructurePowerBank`](/api/#StructurePowerBank). <br>
**어떻게 얻나요:** 구조물을 파괴하고 드랍된 자원을 루팅하세요. <br>
**어디에 쓰나요:** Power Creeps 생성.
{% endnote %}

