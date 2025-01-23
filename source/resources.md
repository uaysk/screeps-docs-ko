## 자원

게임에는 4가지 종류의 자원이 있습니다: **에너지**, **미네랄**, **파워** 그리고 **상품**.  
자원은 채집, 제련, 시장에서의 거래, 크립트를 통한 운반 및 구조물에서의 저장이 가능합니다.  
모든 종류의 자원은 각기 다른 목적을 가지고 있으며, 플레이어는 가장 기본적인 것인 **에너지**만을 가지고 게임을 시작합니다.

## 에너지

{% note info %}
**어디서 구할 수 있는가:** 거의 모든 룸에 있는 [`소스`](/api/#Source)  <br>
**어떻게 얻을 수 있는가:** 일부 `WORK` 부분과 [`harvest`](/api/#Creep. harvest)를 가진 크립트를 보내면 됩니다. <br>
**필요한 용도:** 크립트 생성, 구조물 건설.
{% endnote %} 

에너지는 Screeps 세계의 주요 건축자재입니다. 플레이어의 기지는 에너지로 작동하므로, 많은 양을 채집해야만 식민지를 유지할 수 있습니다.

한국어로 번역해줘: You can not only 수확하는 에너지가 자신의 집에서뿐만 아니라, 다른 방들에서도 원격으로 에너지 소득을 증가시키기 위해 할 수 있습니다.
## 광물
{% note info %}
**어디서 구하나요:** 거의 모든 방에서 [`Mineral`](/api/#Mineral)을(를) 얻을 수 있습니다. <br>
**어떻게 얻나요:** `StructureExtractor`를 만들고, 작업 부품이 달린 크립을 보내고, 그것을(를) [`채집`](/api/#Creep. harvest)하기. <br>
**필요한 용도:** 크립의 기능을 향상시키는 데 사용하며, 무역 원자재를 생산하는 데에도 사용합니다.
{% endnote %}

광물을 채취하고 가공함으로써, 당신은 경제를 빠르게 성장시키고 크립의 효과를 증대할 수 있습니다.
작업하는 것은 3단계로 이루어집니다:

### 채취
아래 그림에 표시된 7가지 기본 광물들이 있습니다.
! [](img/minerals-01.

However, by combining them with other types of minerals, you can create new and powerful mineral compounds that have unique properties and uses. 

For example, Iron and Coal can be combined to create Steel, which is much stronger than either material individually.  Copper and Tin can be mixed to create Bronze, which has excellent electrical conductivity.  Silver and Gold can be combined to create Electrum, which is a rare and valuable alloy that's used in high-end jewelry and electronics.

To create a mineral compound, you need to have access to both the base minerals and a recipe for the compound. Recipes are usually obtained through trading with other players or by completing quests and challenges in the game.  Once you have the necessary ingredients and recipe, you can use the `combine` method (available at Room Controller Level 10) to create the new mineral compound.

Here's an example recipe for creating Electrum:

```
Creep.create()
    .mineral([50, 60], "Silver")
    .mineral([30, 40], "Gold")
    .recipe("Electrum Recipe")
    .combine()
```

This code creates two mineral deposits (one for Silver and one for Gold) in the specified locations, adds a recipe for Electrum to the room controller's database, and then combines the two minerals using the `combine` method to create a new deposit of Electrum.

유용한 기능을 부여하려면 [**랩**](/api/#StructureLab)이라는 구조에서 특수 공식에 따라 결합해야 합니다.

![minerals-02.png](img/minerals-02.png)

한 반응을 하려면 세 개의 랩이 필요합니다. 두 개는 원료 공급원으로, 그리고 나머지 하나는 생산물 수집기로 사용됩니다. 랩은 서로 2칸 이내에 있어야 합니다. 한 랩에는 동시에 두 가지 이상의 광물 종류를 포함할 수 없습니다.

<img src="img/2016-03-09_10-32-33.gif" align="right">

var labs = room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_LAB}});
labs[0].runReaction(labs[1], labs[2]);

다음 틱에서:

console.log(labs[0].mineralType) // -> OH
console.log(labs[1].mineralType) // -> O
console.log(labs[2].mineralType) // -> H

mineralType) // -> H

### 크리프의 강화 효과

실험실에서는 광물을 사용하여 화학 반응을 일으키는 것 외에도, 결과로 나온 화합물을 사용하여 크리프의 특정 속성을 강화할 수 있습니다.

각 화합물은 아래 표에 따라 [`.StructureLab. boostCreep`](/api/#StructureLab. boostCreep) 메서드를 사용하여 특정 유형의 크리프의 한 신체 부위에 적용할 수 있습니다. 이는 크리프가 하는 행동 중 하나를 강화합니다. 강화된 부분은 해당하는 두 개, 세 개, 네 개의 부품과 같이 작용합니다. 전체 크리프를 강화시키려면 지정된 유형의 모든 부품을 강화해야 합니다.

한 신체 부위를 강화하는 데에는 30개의 광물 화합물 단위와 20개의 에너지 단위가 필요합니다. 한 신체 부위는 하나의 화합물 유형으로만 강화할 수 있습니다.
</style>

important;
border: 0 !important;
width: 100%;
}
.minerals td,
.commodities td {
border-top: 1px solid #333!important;
color: #bbb;
background-color: #22242b!important;
font-size: 13px;
}
@media (min-width: 1280px) {
. minerals td:first-child {
white-space: nowrap;
}
}
. minerals td:nth-child(2) {
white-space: nowrap;
}
.minerals td:nth-child(3) {
text-align: center !important;
}
.minerals td:nth-child(4) {
min-width: 87px !important;
}
.minerals code {
background-color: #333!important;
color: #eee!important;
word-break: break-all!important;
}
.minerals img,
.commodities img {
margin-right: 5px;
vertical-align: middle;
} 
.minerals__divider th {
background-color: #333!important;
color: #ffe099!important;
text-align: center;
font-size: 13px !important;
}
.minerals__head th,
.commodities__head th {
background-color: #fff !important;
border-bottom: 2px solid #333!important;
font-weight: bold!important;
}
.minerals td,
.commodities td {
border-top: 1px solid #333!important;
color: #bbb;
background-color: #22242b!important;
font-size: 13px !important;
}

<a href="#" class="commodities__head th" style="background-color: #22242b; color: #ccc; font-weight: normal !important; font-size: 11px;">Commodities</a>
<em class="commodities em">!</em>
<td style="padding: 10px 15px !important;">
</td>
</tr>

</tbody>
</table>
</div>
</div>

</div>
<style>. collapsible-table {
    font-family: sans-serif;
}
. commodities__head th{
    background-color: #22242b;
    color: #ccc;
    font-weight: normal !important;
    font-size: 11px;
}
. commodities em {
    font-style: normal;
    color: #eaeaea;
}
. commodities td {
    padding: 10px 15px !important;
}
</style>

<td>[](//static.screeps.com/upload/mineral-icons/H.png)+![](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>20</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/ZK.png)zynthium keanite</td>
<td>! [](//static.screeps.com/upload/mineral-icons/Z.png)+![](//static.screeps.com/upload/mineral-icons/K.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UL.png)utrium lemergite</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png)+![](//static.screeps.com/upload/mineral-icons/L.png)</td>
<td>5</td>
<td>—</td>
<td>—</td>
</tr>
</table><br/>
'''미네랄 아이콘(Mineral Icons)''': 18개의 미네랄 아이콘은 각각 특정한 마법을 보유하고 있습니다. 이 아이콘들은 대부분의 상점에서 구입할 수 있으며 모든 플레이어가 사용할 수 있습니다.
<table>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/Na.png)sodium chlorate</td>
<td>![//static.screeps.com/upload/mineral-icons/Cl.png] + ![//static.screeps.com/upload/mineral-icons/Na.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/K.png)potassium nitrate</td>
<td>![//static.screeps.com/upload/mineral-icons/K.png] + ![//static.screeps.com/upload/mineral-icons/N.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/Fe.png)iron sulfate</td>
<td>![//static.screeps.com/upload/mineral-icons/Fe.png] + ![//static.screeps.com/upload/mineral-icons/S.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/Mg.png)magnesium oxide</td>
<td>![//static.screeps.com/upload/mineral-icons/Mg.png] + ![//static.screeps.com/upload/mineral-icons/O.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/Ca.png)calcium chloride</td>
<td>![//static.screeps.com/upload/mineral-icons/Ca.png] + ![//static.screeps.com/upload/mineral-icons/Cl.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/Cu.png)copper sulfate</td>
<td>![//static.screeps.com/upload/mineral-icons/Cu.png] + ![//static.screeps.com/upload/mineral-icons/S.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/Zn.png)zinc chloride</td>
<td>![//static.screeps.com/upload/mineral-icons/Zn.png] + ![//static.screeps.com/upload/mineral-icons/Cl.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/Na.png)sodium sulfate</td>
<td>![//static.screeps.com/upload/mineral-icons/Na.png] + ![//static.screeps.com/upload/mineral-icons/S.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/CaF2.png)calcium fluoride</td>
<td>![//static.screeps.com/upload/mineral-icons/Ca.png] + ![//static.screeps.com/upload/mineral-icons/F.png] + ![//static.screeps.com/upload/mineral-icons/O.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/Pb.png)lead acetate</td>
<td>![//static.screeps.com/upload/mineral-icons/Pb.png] + ![//static.screeps.com/upload/mineral-icons/O.png] + ![//static.screeps.com/upload/mineral-icons/S.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/Br.png)bromine</td>
<td>![//static.screeps.com/upload/mineral-icons/Br.png]</td>
<td>10</td>
<td>—</td>
<td>—</td>
</tr>
<tr>

2. O2.png)</td>
<td>3</td>
<td>`ATTACK`</td>
<td>+50% `attack` effectiveness and +25% damage per attack</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UF.png)utrium fluoride</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png) + ! [](//static.screeps.com/upload/mineral-icons/F.png)</td>
<td>4</td>
<td>`ATTACK`</td>
<td>+75% `attack` effectiveness and +50% damage per attack</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UH.png)utrium hydride</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png) + ! [](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`ATTACK`</td>
<td>+100% `attack` effectiveness</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UO.png)utrium oxide</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png) + ! [](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>3</td>
<td>`ATTACK`</td>
<td>+50% `attack` effectiveness and +25% damage per attack</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UF.png)utrium fluoride</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png) + ! [](//static.screeps.com/upload/mineral-icons/F.png)</td>
<td>4</td>
<td>`ATTACK`</td>
<td>+75% `attack` effectiveness and +50% damage per attack</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 1 compounds</th>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UH.png)utrium hydride</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png) + ! [](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`ATTACK`</td>
<td>+100% `attack` effectiveness</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UO.png)utrium oxide</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png) + ! [](//static.screeps.com/upload/mineral-icons/O.png)</td>
<td>3</td>
<td>`ATTACK`</td>
<td>+50% `attack` effectiveness and +25% damage per attack</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UF.png)utrium fluoride</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png) + ! [](//static.screeps.com/upload/mineral-icons/F.png)</td>
<td>4</td>
<td>`ATTACK`</td>
<td>+75% `attack` effectiveness and +50% damage per attack</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 1 compounds</th>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UH.png)utrium hydride</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png) + ! [](//static.screeps.com/upload/mineral-icons/H.png)</td>
<td>10</td>
<td>`ATTACK`</td>
<td>+100% `attack` effectiveness</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/UO.png)utrium oxide</td>
<td>! [](//static.screeps.com/upload/mineral-icons/U.png) + ! [](//static.

com/upload/mineral-icons/L. png) + ! [](//static. screeps. com/upload/mineral-icons/H. png)</td>
<td>10</td>
<td>`CARRY`</td>
<td>+50 capacity</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/LO. png)lemergium oxide</td>
<td>! [](//static. screeps. com/upload/mineral-icons/L. png) + ! [](//static. screeps. com/upload/mineral-icons/O. png)</td>
<td>10</td>
<td>`RANGED_ATTACK`</td>
<td>+100% `rangedAttack` and `rangedMassAttack` effectiveness</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/OH. png)olithium hydride</td>
<td>! [](//static. screeps. com/upload/mineral-icons/O. png) + ! [](//static. screeps. com/upload/mineral-icons/H. png)</td>
<td>10</td>
<td>`CARRY`</td>
<td>+50 capacity</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/O2. png)olithium oxide</td>
<td>! [](//static. screeps. com/upload/mineral-icons/O. png) + ! [](//static. screeps. com/upload/mineral-icons/O. png)</td>
<td>10</td>
<td>`CARRY`</td>
<td>+50 capacity</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/KH. png)keanium hydride</td>
<td>! [](//static. screeps. com/upload/mineral-icons/K. png) + ! [](//static. screeps. com/upload/mineral-icons/H. png)</td>
<td>10</td>
<td>`CARRY`</td>
<td>+50 capacity</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/KO. png)keanium oxide</td>
<td>! [](//static. screeps. com/upload/mineral-icons/K. png) + ! [](//static. screeps. com/upload/mineral-icons/O. png)</td>
<td>10</td>
<td>`RANGED_ATTACK`</td>
<td>+100% `rangedAttack` and `rangedMassAttack` effectiveness</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/LH. png)lemergium hydride</td>
<td>! [](//static. screeps. com/upload/mineral-icons/L. png) + ! [](//static. screeps. com/upload/mineral-icons/H. png)</td>
<td>10</td>
<td>`CARRY`</td>
<td>+50 capacity</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/LO. png)lemergium oxide</td>
<td>! [](//static. screeps. com/upload/mineral-icons/L. png) + ! [](//static. screeps. com/upload/mineral-icons/O. png)</td>
<td>10</td>
<td>`RANGED_ATTACK`</td>
<td>+100% `rangedAttack` and `rangedMassAttack` effectiveness</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/OH. png)olithium hydride</td>
<td>! [](//static. screeps. com/upload/mineral-icons/O. png) + ! [](//static. screeps. com/upload/mineral-icons/H. png)</td>
<td>10</td>
<td>`CARRY`</td>
<td>+50 capacity</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/O2. png)olithium oxide

png)</td>
<td>15</td>
<td>`WORK`</td>
<td>+50% `repair` and `build` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/LO. png)lemergium oxide</td>
<td>! [](//static. screeps. com/upload/mineral-icons/L. png) + ! [](//static. screeps. com/upload/mineral-icons/O. png)</td>
<td>10</td>
<td>`HEAL`</td>
<td>+100% `heal` and `rangedHeal` effectiveness</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/ZH. png)zynthium hydride</td>
<td>! [](//static. screeps. com/upload/mineral-icons/Z. png) + ! [](//static. screeps. com/upload/mineral-icons/H. png)</td>
<td>15</td>
<td>`WORK`</td>
<td>+75% `repair` and `build` effectiveness with energy cost increased by 25%</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/Mg. png)magnesium hydride</td>
<td>! [](//static. screeps. com/upload/mineral-icons/Mg. png)</td>
<td>15</td>
<td>`WORK`</td>
<td>+75% `repair` and `build` effectiveness with energy cost increased by 25%</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/K. png)potassium oxide</td>
<td>! [](//static. screeps. com/upload/mineral-icons/K. png)</td>
<td>10</td>
<td>`HEAL`</td>
<td>+75% `heal` and `rangedHeal` effectiveness with energy cost increased by 25%</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/ZH. png)zynthium hydride</td>
<td>! [](//static. screeps. com/upload/mineral-icons/Z. png)</td>
<td>15</td>
<td>`WORK`</td>
<td>+75% `repair` and `build` effectiveness with energy cost increased by 25%</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/L. png)lithium hydroxide</td>
<td>! [](//static. screeps. com/upload/mineral-icons/L. png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+75% `repair` and `build` effectiveness with energy cost increased by 25%</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/Be. png)beryllium hydride</td>
<td>! [](//static. screeps. com/upload/mineral-icons/Be. png)</td>
<td>15</td>
<td>`WORK`</td>
<td>+75% `repair` and `build` effectiveness with energy cost increased by 25%</td>
</tr>
</table><!--
<div style="float:right;width:300px">
<script type="text/javascript" src="//www.googleadservices.com/pagead/propelleradsbygoogle.js"></script>
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-7164897897145084"/>
</div> -->
<br><center><iframe width="700" height="620" src="https://www.youtube.com/embed/xVeTUzRjNXQ" frameborder="0"></iframe></center>

screeps. com/upload/mineral-icons/G. png)</td>
<td>10</td>
<td>`MOVE`</td>
<td>+100% fatigue decrease speed</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/IU. png)iodium hydride</td>
<td>! [](//static. screeps. com/upload/mineral-icons/I. png) + ! [](//static. screeps. com/upload/mineral-icons/U. png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+50% `upgradeController` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/IO. png)iodium oxide</td>
<td>! [](//static.

png)</td>
<td>3</td>
<td>`SPEED`</td>
<td>+100% `speed`</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 2 compounds</th>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/O2-. png) + ! [](//static. screeps. com/upload/mineral-icons/O-. png)</td>
<td align="center">! [](//static. screeps. com/upload/mineral-icons/O-. png)</td>
<td>2</td>
<td>`TOUGH`</td>
<td>-10% damage taken</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 3 compounds</th>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/H2O2. png) + ! [](//static. screeps. com/upload/mineral-icons/HO-. png)</td>
<td align="center">! [](//static. screeps. com/upload/mineral-icons/O-. png)</td>
<td>1</td>
<td>`SPEED`</td>
<td>+50% `speed`</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/O3-. png) + ! [](//static. screeps. com/upload/mineral-icons/O-. png)</td>
<td align="center">! [](//static. screeps. com/upload/mineral-icons/O-. png)</td>
<td>2</td>
<td>`ATTACK`</td>
<td>+100% `attack` effectiveness</td>
</tr>
</tbody>
</table><br><br>
<h2>minerals.json 파일</h2>
<pre><code class="highlight" lang=text/plain idiopath-846b541f3a>
{
  "items": [
    {
      "name": "utrium acid",
      "mineral_icon": "//static.screeps.com/upload/mineral-icons/UH2O.png",
      "description": "",
      "type": "compound",
      "tier": 2,
      "costs": {
        "utrium ore": 10
      },
      "effects": [
        {
          "name": "utrium acid",
          "mineral_icon": null,
          "description": "",
          "type": "item",
          "tier": null,
          "costs": {},
          "requires": [],
          "can_equip": ["all"],
          "effects": [
            {
              "name": "utrium acid",
              "mineral_icon": null,
              "description": "Deals -30% damage taken.",
              "type": "item",
              "tier": null,
              "costs": {},
              "requires": [],
              "can_equip": ["all"],
              "effects": []
            ]
          ]
        }
      ],
      "recipe": {
        "name": null,
        "mineral_icon": null,
        "description": "",
        "type": "null",
        "tier": null,
        "ingredients": [
          {
            "mineral_icon": "//static.screeps.com/upload/mineral-icons/UH2O.png",
            "name": "utrium ore",
            "costs": 10
          }
        ]
      }
    },
    {
      "name": "utrium alkalide",
      "mineral_icon": "//static.screeps.com/upload/mineral-icons/UHO2.png",
      "description": "",
      "type": "compound",
      "tier": 2,
      "costs": {
        "utrium ore": 3
      },
      "effects": [
        {
          "name": "utrium alkalide",
          "mineral_icon": null,
          "description": "",
          "type": "item",
          "tier": null,
          "costs": {},
          "requires": [],
          "can_equip": ["all"],
          "effects": [
            {
              "name": "utrium alkalide",
              "mineral_icon": null,
              "description": "Gives +200% `attack` effectiveness.",
              "type": "item",
              "tier": null,
              "costs": {},
              "requires": [],
              "can_equip": ["all"],
              "effects": []
            }
          ]
        }
      ],
      "recipe": {
        "name": null,
        "mineral_icon": null,
        "description": "",
        "type": "null",
        "tier": null,
        "ingredients": [
          {
            "mineral_icon": "//static.screeps.com/upload/mineral-icons/UO.png",
            "name": "utrium ore",
            "costs": 3
          }
        ]
      }
    },
    {
      "name": null,
      "mineral_icon": "//static.screeps.com/upload/mineral-icons/O2-.png",
      "description": null,
      "type": "compound",
      "tier": 3,
      "costs": {
        "oxygen isotope": 2
      },
      "effects": [
        {
          "name": null,
          "mineral_icon": null,
          "description": null,
          "type": "item",
          "tier": null,
          "costs": {},
          "requires": [],
          "can_equip": ["all"],
          "effects":

com/upload/mineral-icons/LH. png)</td>
<td>5</td>
<td>`WORK`</td>
<td>+400% `harvest` effectiveness</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/KH2O.png)keanium acid</td>
<td>! [](//static.screeps.com/upload/mineral-icons/KH.png)+![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`CARRY`</td>
<td>+100 capacity</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/KHO2.png)keanium alkalide</td>
<td>! [](//static.screeps.com/upload/mineral-icons/KO.png)+![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`RANGED_ATTACK`</td>
<td>+200% `rangedAttack` and `rangedMassAttack` effectiveness</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/LH2O.png)lemergium acid</td>
<td>! [](//static.screeps.com/upload/mineral-icons/LH.png)</td>
<td>5</td>
<td>`WORK`</td>
<td>+400% `harvest` effectiveness</td>
</tr>
</table><br/><br/>
이 문서는 영어로 작성되었습니다. 번역을 보시려면 아래의 링크를 클릭하십시오: 중국어 (번체)공식 스크립트가 없기 때문에, 이 텍스트는 컴퓨터가 선택한 언어로 제공됩니다. 만약 여러분이 원하는 언어를 지정할 수 있는 기능을 사용하고 계신다면, 이 텍스트는 아마도 해당 언어로 제공될 것입니다. 번역을 보려면 클릭하세요: 중국어 (간체)

<td>10</td>
<td>`WORK`</td>
<td>+80% `repair` and `build` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/LHO2.png)lemergium alkalide</td>
<td>! [](//static.screeps.com/upload/mineral-icons/LO.png) + ! [](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>5</td>
<td>`HEAL`</td>
<td>+200% `heal` and `rangedHeal` effectiveness</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/ZH2O.png)zynthium acid</td>
<td>! [](//static.screeps.com/upload/mineral-icons/ZH.png) + ! [](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+25% `repair` and `build` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/LH.png)lemergium hydroxide</td>
<td>! [](//static.screeps.com/upload/mineral-icons/LO.png)</td>
<td>10</td>
<td>`BUILD`</td>
<td>+50% `build` effectiveness, but only when building a structure or upgrading a building</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td colspan="2" rowspan="2" class="mw-headline" id="Toc469738156">
<a name="toc-1"></a><h3 class="skinline">Ions</h3>
</td>
</tr>
<!-- Pagination -->
<tr>
<td colspan="2" style="text-align:center; background-color:#f2f2f2; border:1px solid #ccc; padding:10px; color:#333; font-size:90%;">
<a href="#toc-1" class="mw-redirectskin mw-headline" title="Ions">{{</a><span style="font-weight:bold;">Ions</span>></a>
</td>
<!-- Pagination -->
</tr>
</tbody>
</table>

[](//static.screeps.com/upload/mineral-icons/GH.png) + ![](//static.screeps.com/upload/mineral-icons/OH.png)</td>
<td>10</td>
<td>`WORK`</td>
<td>+40% fatigue decrease speed</td>
</tr>
</table><br/>
40) `Zynthium Alkalide` + `GHodium Acid` -> `Zynthium GHodide` (생성)
- 이 반응은 15의 에너지가 필요합니다.
+ 이 반응은 10의 에너지가 필요합니다.
- `Zynthium GHodide`는 `MOVE`를 통해 이동할 수 있고, `WORK`를 통해 업그레이드가 가능하며, `dismantle`로 효과성이 200% 증가합니다.
+ - `Zynthium GHodide`는 `MOVE`를 통해 이동할 수 있고, `WORK`를 통해 업그레이드가 가능하며, 피로도 감소 속도가 40% 증가합니다.

텍스트를 입력하세요.: <table class="minerals__data-grid minerals__data-grid--compounds">
<tr class="minerals__header">
<th>Icon</th>
<th>Name</th>
<th>Component</th>
<th>Effectiveness</th>
<th>Description</th>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 1 compounds</th>
</tr>
<tr>
<td><! [[](//static.screeps.com/upload/mineral-icons/h2o.png)]></td>
<td>water</td>
<td>100</td>
<td>`ALL`</td>
<td>Water makes everything weaker, but it can also help cool things down when they're too hot.</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 2 compounds</th>
</tr>
<tr>
<td><! [[](//static.screeps.com/upload/mineral-icons/oh.png)]></td>
<td>o2</td>
<td>50</td>
<td>`TOUGH`</td>
<td>Oxygen makes things TOUGHER, by reducing the amount of damage they take by 50%.</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 3 compounds</th>
</tr>
<tr>
<td><! [[](//static.screeps.com/upload/mineral-icons/xuh2o.png)]></td>
<td>utrium acid (catalyzed by xuho2)</td>
<td><! [[](//static.screeps.com/upload/mineral-icons/uho2.png)]></td>
<td><! [[](//static.screeps.com/upload/mineral-icons/x.png)]></td>
<td>90</td>
<td>`ATTACK`</td>
<td>utrium acid makes things more effective at attacking, by increasing attack effectiveness by 300%.</td>
</tr>
<tr>
<td><! [[](//static.screeps.com/upload/mineral-icons/xuho2.png)]></td>
<td>utrium alkalide (catalyzed by xuhoh2)</td>
<td><! [[](//static.screeps.com/upload/mineral-icons/uho2.png)]></td>
<td><! [[](//static.screeps.com/upload/mineral-icons/x.png)]></td>
<td>120</td>
<td>`ATTACK`</td>
<td>utrium alkalide makes things more effective at attacking, by increasing attack effectiveness by 600%.</td>
</tr>
</table>
텍스트를 입력하세요.: [](//static. screeps. com/upload/mineral-icons/GO. png) + ! [](//static. screeps. com/upload/mineral-icons/OH. png)</td>
<td>30</td>
<td>`TOUGH`</td>
<td>-50% damage taken</td>
</tr>
<tr class=minerals__divider>
<th colspan="5" align="center">Tier 3 compounds</th>
</tr>
<tr>
<td><! [[](//static. screeps. com/upload/mineral-icons/XUH2O. png)]></td>
<td>! [](//static. screeps. com/upload/mineral-icons/UH2O. png) + ! [](//static. screeps. com/upload/mineral-icons/X. png)</td>
<td>60</td>
<td>`ATTACK`</td>
<td>+300% `attack` effectiveness</td>
</tr>

png)catalyzed keanium hydroxide</td>
<td>! [](//static.screeps.com/upload/mineral-icons/KLH2O.png)+![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`CARRY`</td>
<td>+150 capacity</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XKHO2.png)catalyzed keanium acid</td>
<td>![](//static.screeps.com/upload/mineral-icons/KHO2.png)+![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`RANGED_ATTACK`</td>
<td>+300% `rangedAttack` and `rangedMassAttack` effectiveness</td>
</tr>
<tr>
<td>![](//static.screeps.com/upload/mineral-icons/XLH2O.png)catalyzed keanium hydroxide</td>
<td>![](//static.screeps.com/upload/mineral-icons/KLH2O.png)+![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`CARRY`</td>
<td>+150 capacity</td>
</tr>
</table><br><br>
{
"success": "success",
"response": {
"translations": [
{
"key": "name",
"value": "\uAC7\uC8\uD4\uBC\uAB\uC8\uB0\uD5\uC1\uCD\uC8\uAC \uD6\uBC\uC0\uA8\uAD\uB0\uF1\uCC\uD4",
"translations": [
{
"key": "name",
"value": "케아니움 수산화물",
"translations": [
{
"key": "name",
"value": "\uC5\uBD\uAC\uA3\uCD\uC7\uD0\uB8\uC1\uAB\uC8\uD4 \uCC\uF1\uBC\uD5\uC1\uCD\uC8\uAC \uC6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value": "케아니움 수소화물",
"translations": [
{
"key": "name",
"value": "\uC6\uB5\uD8\uBC\uAC\uAB\uC1\uBD \uCC\uF1\uBC\uD5\uC1\uCD\uC8\uAC \uC6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value": "\uCC\uF2\uAB\uBC\uD5\uC1\uBB\uAC \uD6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value": "\uCC\uF2\uAB\uBC\uD5\uC1\uBB\uAC \uC6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value": "\uCC\uF2\uAB\uBC\uD5\uC1\uBB\uAC \uC6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value": "\uCC\uF2\uAB\uBC\uD5\uC1\uBB\uAC \uC6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value": "\uCC\uF2\uAB\uBC\uD5\uC1\uBB\uAC \uC6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value": "\uCC\uF2\uAB\uBC\uD5\uC1\uBB\uAC \uC6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value": "\uCC\uF2\uAB\uBC\uD5\uC1\uBB\uAC \uC6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value": "\uCC\uF2\uAB\uBC\uD5\uC1\uBB\uAC \uC6\uBD\uC7\uC8\uB0\uAD",
"translations": [
{
"key": "name",
"value

com/upload/mineral-icons/X. png)</td>
<td>65</td>
<td>`WORK`</td>
<td>+100% `repair` and `build` effectiveness without increasing the energy cost</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/XLHO2. png)catalyzed lemergium alkalide</td>
<td>! [](//static. screeps. com/upload/mineral-icons/LHO2. png) + ! [](//static. screeps. com/upload/mineral-icons/X. png)</td>
<td>60</td>
<td>`HEAL`</td>
<td>+300% `heal` and `rangedHeal` effectiveness</td>
</tr>
<tr>
<td>! [](//static. screeps. com/upload/mineral-icons/XZH2O. png)catalyzed zynthium acid</td>
<td>! [](//static. screeps. com/upload/mineral-icons/ZH2O. png) + ! [](//static. screeps. com/upload/mineral-icons/X. png)</td>
<td>65</td>
<td>`WORK`</td>
<td>+100% `repair` and `build` effectiveness without increasing the energy cost</td>
</tr>
<!-- Specify the data types of columns -->
<tr>
<th>! [&lt;mineral-icon&gt;](//static.screeps.com/upload/mineral-icons/LH2O.png)</th>
<th>type</th>
<th>repair</th>
<th>heal</th>
<th>effectiveness</th>
</tr>

com/upload/mineral-icons/ZHO2. png)catalyzed zynthium alkalide</td>
<td>! [](//static.screeps.com/upload/mineral-icons/ZHO2.png)+![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>60</td>
<td>`MOVE`</td>
<td>+300% 피로 감소 속도</td>
</tr>
<tr>
<td>! [](//static.screeps.com/upload/mineral-icons/XGH2O.png)catalyzed ghodium acid</td>
<td>! [](//static.screeps.com/upload/mineral-icons/GH2O.png)+![](//static.screeps.com/upload/mineral-icons/X.png)</td>
<td>80</td>
<td>`WORK`</td>
<td>+100% `upgradeController` 효과성을 높이지만, 에너지 소모는 증가하지 않음</td>
</tr>

The list of commodities is as follows:

- `XGHO2` (`GHodium Alkalide`, damage -70%)
- `GHO2` (`Tough` and takes -50% damage)
- `GHOD2` (`Super Tough`, takes no damage)
- `NADP+` (can be used in the `Bioluminescent Slime` recipe for credits)
- `NADPH` (can be used in the `Phantom` recipe for credits)
- `ATP` (can be used in the `Ghost` recipe for credits)
- `Acetyl-CoA` (can be used in the `Vampire` recipe for credits)
- `NADH` (can be used in the `Zombie` recipe for credits)
- `FADH2` (can be used in the `Ogre` recipe for credits)
- `Coenzyme A` (can be used in the `Wraith` recipe for credits)

Note: The names of commodities are stored as strings, so you can sell any resource with a matching string to earn credits.

고품질의 원자재를 생산하는 것이 게임에서 가장 수익성이 높은 사업입니다.

### 수확

거주 구역을 나누는 "고속도로" 방에서 [`보관소`](/api/#Deposit)의 원자재를 채취합니다.
금속, 실리콘, 바이오매스, 미스트라는 4가지 유형의 원료가 있습니다.
세계 지도에서 고르게 분포되어 있으며, 맵 쿼드런트(사분면)(NW, NE, SW, SE)마다 한 종류의 자원이 존재합니다.
! [파일:commodities. png](https://i.imgur.com/ZT7gF69.png)

광물과는 달리, 채취할 때마다 보관소가 고갈되므로 채취를 많이 할수록 시간당 재충전 횟수가 늘어납니다.
채취를 한 후에는 일정 시간이 지나면 원래대로 복구되며, 근처의 새로운 보관소가 생성됩니다.
또한 모든 다른 보관소가 고갈된 후에는 해당 섹터에서 새로운 보관소가 나타납니다.

### Basic Commodities

원자재를 판매하는 것은 수익성이 높지 않을 수 있습니다. 그러므로 더 복잡한 상품들을 `생산`할 수 있도록 [**Factory**](/api/#StructureFactory) (RCL 7에서 사용 가능)를 구축하는 것이 더 나은 아이디어입니다.

새로 지어진 공장은 레벨이 없기 때문에, 모든 종류의 현재 자원들 중에서 "어떤 수준"의 상품도 생산할 수 있습니다. (아래 표의 각주).

그것들은 또한 자원을 "압축된" 형태로 저장하는데 사용될 수 있습니다.

<div class="collapsible-table">

<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>상품을 압축하기</span>
<em>(클릭하면 확장)</em>
! [](img/commodities1.

<table class="commodities">
<tbody>
<tr class=commodities__head>
<th>제품</th><th>공장</th><th>구성요소</th><th>재사용 대기시간</th>
</tr> 
<tr>
<td>{% resource '우트륨 바' %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/U.png)우트륨&nbsp;&times;&nbsp;<em>500</em><br>{% resource '에너지' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱스</td></tr>
<tr>
<td>{% resource "레머기움 바" %}&nbsp;&times;&nbsp;<em>100</em></td><td>모든 레벨</td><td>![](//static.screeps.com/upload/mineral-icons/L.png)레머기움&nbsp;&times;&nbsp;<em>500</em><br>{% resource '에너지' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;틱스</td></tr>
</tbody>
</table>

<tr><td>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>! [](//static.screeps.com/upload/mineral-icons/Z.png)Zynthium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>! [](//static.screeps.com/upload/mineral-icons/Z.png)Zynthium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>! [](//static.screeps.com/upload/mineral-icons/K.png)Keanium&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>

<tr><td>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>! [](//static. screeps. com/upload/mineral-icons/O. png)Oxygen&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>100</em></td><td>Any level</td><td>! [](//static. screeps. com/upload/mineral-icons/H. png)Hydrogen&nbsp;&times;&nbsp;<em>500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
</table>

이러한 자원을 필요로 하는 경우 압축을 해제할 수 있습니다.

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Decompressing Commodities</span><em>(click to expand)</em>
! [](img/commodities2.png)
</div>
<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>Product</th><th>Factory</th><th>Components</th><th>Cooldown</th></tr>
<tr><td>! [](//static.screeps.com/upload/mineral-icons/U.png)Utrium&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>! [](//static.screeps.com/upload/mineral-icons/L.png)Lithium&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Lithium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %>&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>! [](//static.screeps.com/upload/mineral-icons/P.png)Phosphor&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Phosphorus bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %>&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>! [](//static.screeps.com/upload/mineral-icons/K.png)Potassium&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Potassium bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %>&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
<tr><td>! [](//static.screeps.com/upload/mineral-icons/S.png)Sulfur&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Sulfur bar' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %>&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
</table>
</div>
</div>

[//static.screeps.com/upload/mineral-icons/L.png]Lemergium&times;&times;500</td><td>Any level</td><td>{% resource 'Lemergium bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/Z.png]Zynthium&times;&times;500</td><td>Any level</td><td>{% resource 'Zynthium bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/K.png]Keanium&times;&times;500</td><td>Any level</td><td>{% resource 'Keanium bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/M.png]Megalops&times;&times;500</td><td>Any level</td><td>{% resource 'Megalops bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/H.png]Helixium&times;&times;500</td><td>Any level</td><td>{% resource 'Helixium bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/P.png]Phlogus&times;&times;500</td><td>Any level</td><td>{% resource 'Phlogus bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/G.png]Geode&times;&times;500</td><td>Any level</td><td>{% resource 'Geode bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/O.png]Orinium&times;&times;500</td><td>Any level</td><td>{% resource 'Orinium bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/K.png]Keanite&times;&times;500</td><td>Any level</td><td>{% resource 'Keanite bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/K.png]Kelthium&times;&times;500</td><td>Any level</td><td>{% resource 'Kelthium bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/C.png]Calcite&times;&times;500</td><td>Any level</td><td>{% resource 'Calcite bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/K.png]Kelthorium&times;&times;500</td><td>Any level</td><td>{% resource 'Kelthorium bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/R.png]Rhodonite&times;&times;500</td><td>Any level</td><td>{% resource 'Rhodonite bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/K.png]Keldorium&times;&times;500</td><td>Any level</td><td>{% resource 'Keldorium bar' %}&times;&times;100</td><td>20 ticks</td></tr>
 <tr><td>! [//static.screeps.com/upload/mineral-icons/P.png]Phlogopite&times;&times;500

<td style="background-color:#FFC107;">[](//static.screeps.com/upload/mineral-icons/G.png)Ghodium&times;&times;<em>500</em></td><td style="background-color:#FFC107;">Any level</td><td style="background-color:#FFC107;"><a href="#" class="diff er-row-data" title="Ghodium melt">{% resource 'Ghodium melt' %}</a>&times;&times;<em>100</em></td><td style="background-color:#FFC107;">20 ticks</td></tr>
 <tr><td style="background-color:#FFC107;">[](//static.screeps.com/upload/mineral-icons/O.png)Oxygen&times;&times;<em>500</em></td><td style="background-color:#FFC107;">Any level</td><td style="background-color:#FFC107;"><a href="#" class="diff er-row-data" title="Oxidant">{% resource 'Oxidant' %}</a>&times;&times;<em>100</em></td><td style="background-color:#FFC107;">20 ticks</td></tr>
 <tr><td style="background-color:#FFC107;">! [](//static.screeps.com/upload/mineral-icons/H.png)Hydrogen&times;&times;<em>500</em></td><td style="background-color:#FFC107;">Any level</td><td style="background-color:#FFC107;"><a href="#" class="diff er-row-data" title="Hydrogen gas">{% resource 'Hydrogen gas' %}</a>&times;&times;<em>100</em></td><td style="background-color:#FFC107;">20 ticks</td></tr>
 <tr><td style="background-color:#FFC107;">! [](//static.screeps.com/upload/mineral-icons/N.png)Nitrogen&times;&times;<em>500</em></td><td style="background-color:#FFC107;">Any level</td><td style="background-color:#FFC107;"><a href="#" class="diff er-row-data" title="Nitrogen gas">{% resource 'Nitrogen gas' %}</a>&times;&times;<em>100</em></td><td style="background-color:#FFC107;">20 ticks</td></tr>
 <tr><td style="background-color:#FFC107;">! [](//static.screeps.com/upload/mineral-icons/F.png)Fluorine&times;&times;<em>500</em></td><td style="background-color:#FFC107;">Any level</td><td style="background-color:#FFC107;"><a href="#" class="diff er-row-data" title="Fluorine gas">{% resource 'Fluorine gas' %}</a>&times;&times;<em>100</em></td><td style="background-color:#FFC107;">20 ticks</td></tr>
 <tr><td style="background-color:#FFC107;">! [](//static.screeps.com/upload/mineral-icons/C.png)Carbon&times;&times;<em>500</em></td><td style="background-color:#FFC107;">Any level</td><td style="background-color:#FFC107;"><a href="#" class="diff er-row-data" title="Carbon monoxide">{% resource 'Carbon monoxide' %}</a>&times;&times;<em>100</em></td><td style="background-color:#FFC107;">20 ticks</td></tr>
 <tr><td style="background-color:#FFC107;">! [](//static.screeps.com/upload/mineral-icons/S.png)Sulfur&times;&times;<em>500</em></td><td style="background-color:#FFC107;">Any level</td><td style="background-color:#FFC107;"><a href="#" class="diff er-row-data" title="Sulfur dioxide">{% resource 'Sulfur dioxide' %}</a>&times;&times;<em>100</em></td><td style="background-color:#FFC107;">20 ticks</td></tr>
 <tr><td style="background-color:#FFC107;">! [](//static.screeps.com/upload/mineral-icons/Cl.png)Chlorine&times;&times;<em>500</em></td><td style="background-color:#FFC107;">Any level</td><td style="background-color:#FFC107;"><a href="#" class="diff er-row-data" title="Hypochlorous acid">{% resource 'Hypochlorous acid' %}</a>&times;&times;<em>100</em></td><td style="background-color:#FFC107;">20 ticks</td></tr>
 <tr><td style="background-color

png)Hydrogen ⨯ 500</td><td>Any level</td><td> {% resource 'Reductant' %} ⨯ 100<br> {% resource 'Energy' %} ⨯ 200</td><td>20 ticks</td></tr>

<tr><td>! [](//static.screeps.com/upload/mineral-icons/X.

png)Catalyst&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>200</em></td><td>20&nbsp;ticks</td></tr>
 <tr><td>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>500</em></td><td>Any level</td><td>{% resource 'Battery' %}&nbsp;&times;&nbsp;<em>50</em></td><td>10&nbsp;ticks</td></tr>
 </table> 
 </div>
 </div>
 
 <div class="collapsible-table">

 <div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Basic regional commodities</span>
<em>(click to expand)</em>
! [](img/commodities3.

(png)

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>제품</th><th>공장</th><th>구성 요소</th><th>재사용 대기시간</th></tr>
<tr><td>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>20</em></td><td>모든 레벨</td><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource '실리콘' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource '에너지' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;틱</td></tr>
<tr><td>{% resource 'Cell' %}&nbsp;&times;&nbsp;<em>20</em></td><td>모든 레벨</td><td>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource '바이오매스' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource '에너지' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;틱</td></tr>
<tr><td>{% resource 'Alloy' %}&nbsp;&times;&nbsp;<em>20</em></td><td>모든 레벨</td><td>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource '금속' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource '에너지' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;틱</td></tr>
<tr><td>{% resource 'Condensate' %}&nbsp;&times;&nbsp;<em>20</em></td><td>모든 레벨</td><td>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource '미스트' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource '에너지' %}&nbsp;&times;&nbsp;<em>40</em></td><td>8&nbsp;틱</td></tr>
</table>
</div>
</div>
모든 상품은 모든 레벨의 공장에서 생산할 수 있습니다.

## 자원 생산 향상

`OPERATE_FACTORY` 능력이 있는 [작업자](power.html#Power-Creeps)만 가능합니다. 해당 작업자는 레벨이 없는 공장에 `OPERATE_FACTORY` 능력을 사용할 수 있으며, 그럼으로써 공장의 레벨은 영구적으로 해당 능력의 레벨로 설정되고 동일한 효과가 공장에 적용됩니다.

이것을 통해 해당 공장은 해당하는 수준의 자원을 생산할 수 있게 됩니다. 이 공장은 정확히 동일한 레벨의 자원만, 또는 "모든 레벨"의 자원을 생산할 수 있습니다.

설정된 후에는 더 이상 공장의 레벨을 변경할 수 없습니다.

효과 지속 시간이 끝나면, 해당 공장은 단순히 비활성화되지만 그 레벨은 동일하게 유지됩니다("모든 레벨"의 자원을 여전히 사용할 수 있음).

다시 활성화하려면 해당 능력 레벨과 같은 작업자가 필요합니다.

한 단계는 적용할 수 없으며, 공장 레벨을 변경하려면 재건해야합니다. 각 고급 상품은 생산 체인을 형성하는 저급 상품이 필요합니다. 새로운 자원 유형마다 네 가지 생산 체인이 있습니다. **기계** (금속 소비), **전자** (실리콘 소비), **생물학적** (바이오매스 소비) 및 **신비** (안개 소비)뿐만 아니라 일반 구성 요소. 이러한 상품은 시장에서 가장 수익성이 좋습니다.
<div class="collapsible-table__content">
<ul>
  <li>기계: 제강, 석유 정제, 전자 부품</li>
  <li>전자: 반도체, 휴대폰, TV</li>
  <li>생물학적: 의약품, 화장품, 식량</li>
  <li>신비: 마법의 책, 주문서, 보석</li>
</ul>

<div class="collapsible-table__content">
<div class="collapsible-table__panel">
<table class="commodities">
<tr class="commodities__head"><th>Product</th><th>Factory</th><th>Components</th><th>Cooldown</th></tr>
<tr><td>{% resource 'Composite' %}&nbsp;&times;&nbsp;<em>20</em></td><td>Lvl 1</td><td>{% resource 'Utrium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>20</em></td><td>50&nbsp;ticks</td></tr>
<tr><td>{% resource 'Crystal' %}&nbsp;&times;&nbsp;<em>6</em></td><td>Lvl 2</td><td>{% resource 'Lemergium bar' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>45</em></td><td>21&nbsp;ticks</td></tr>
<tr><td>{% resource 'Liquid' %}&nbsp;&times;&nbsp;<em>12</em></td><td>Lvl 3</td><td>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>12</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>90</em></td><td>60&nbsp;ticks</td></tr>
</table>
</div>
</div>
</div>

<div class="collapsible-table">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Mechanical gear</span>
<em>(click to expand)</em>
! 
</div>
<!-- ... -->

{:en}[]({:en}img/commodities5.{:})

<div class="collapsible-table__content">
<div class="collapsible-table__row" id="BiologicalChainRowId">
<div class="collapsible-table__column">
<i class="fa fa-square"></i>
<span>Product</span>
</div>
<div class="collapsible-table__column">
<i class="fa fa-square"></i>
<span>Factory</span>
</div>
<div class="collapsible-table__column">
<i class="fa fa-square"></i>
<span>Components</span>
</div>
<div class="collapsible-table__column">
<i class="fa fa-square"></i>
<span>Cooldown</span>
</div>
</div>
</div>

<!-- 생략 -->

<div class="collapsible-table__row" id="BiologicalChainRowId">
<div class="collapsible-table__column">
<i class="fa fa-square"></i>
<span>{% resource 'Tube' %}&nbsp;&times;&nbsp;<em>2</em></span>
</div>
<div class="collapsible-table__column">
<i class="fa fa-square"></i>
<span>Lvl 1</span>
</div>
<div class="collapsible-table__column">
<i class="fa fa-square"></i>
<span>{% resource 'Alloy' %}&nbsp;&times;&nbsp;<em>40</em><br>{% resource 'Zynthium bar' %}&nbsp;&times;&nbsp;<em>16</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>8</em></span>
</div>
<div class="collapsible-table__column">
<i class="fa fa-square"></i>
<span>45&nbsp;ticks</span>
</div>
</div>
</div>

<!-- 생략 -->

"[]" -- 원문 그대로 번역한 것입니다. 위에 있는 이미지의 제품명을 말하는 것으로 보입니다.

<div class="collapsible-table__content">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Electronical chain</span>
<em>(click to expand)</em>
</div>
</div>

<div class="collapsible-table__content">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Products</span>
<em>(click to expand)</em>
! [PNG image](https://user-images.githubusercontent.com/6510409/12138151/a7c9d6e5bcb89cbf9c81f9fc5ef2dbdfaadb500e.png)
</div>
</div>

<div class="collapsible-table__content">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Machines</span>
<em>(click to expand)</em>
! [PNG image](https://user-images.githubusercontent.com/6510409/12138151/d4cdae7bcf9b1f4a6fdcb1f72f25dcba45a4d4d8.png)
</div>
</div>

<div class="collapsible-table__content">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Parts</span>
<em>(click to expand)</em>
! [PNG image](https://user-images.githubusercontent.com/6510409/12138151/b7e8fddb5aadc3c71b9fbbd9ffb0435db40bfa5c.png)
</div>
</div>

<div class="collapsible-table__content">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Labs</span>
<em>(click to expand)</em>
! [PNG image](https://user-images.githubusercontent.com/6510409/12138151/e7b5a6983c8fddd27fd3d76c00a8e26fbe47dffe.png)
</div>
</div>

As per your request, the translation in Korean:
[](img/commodities7.

<div class="collapsible-table__content">
<div class="collapsible-table__header">
<i class="fa fa-plus-square"></i>
<span>Mystical chain</span>
<em>(click to expand)</em>
<table class="commodities">
<tr class="commodities__head"><th>Product</th><th>Factory</th><th>Components</th><th>Cooldown</th></tr>
<tr><td>{% resource 'Mystical chain' %}&nbsp;&times;&nbsp;<em>3</em></td><td>Lvl 1</td><td>{% resource 'Chain link' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>50</em><br>{% resource 'Mystical dust' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>20</em></td><td>70&nbsp;ticks</td></tr>
<tr><td>{% resource 'Mystical chain' %}</td><td>Lvl 2</td><td>{% resource 'Mystical chain' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Chain link' %}&nbsp;&times;&nbsp;<em>50</em><br>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Mystical dust' %}&nbsp;&times;&nbsp;<em>450</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>59&nbsp;ticks</td></tr>
<tr><td>{% resource 'Pendant' %}</td><td>Lvl 3</td><td>{% resource 'Mystical chain' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Chain link' %}&nbsp;&times;&nbsp;<em>100</em><br>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>350</em><br>{% resource 'Mystical dust' %}&nbsp;&times;&nbsp;<em>750</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>250&nbsp;ticks</td></tr>
<tr><td>{% resource 'Amulet' %}</td><td>Lvl 4</td><td>{% resource 'Pendant' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Mystical chain' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Chain link' %}&nbsp;&times;&nbsp;<em>200</em><br>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>700</em><br>{% resource 'Mystical dust' %}&nbsp;&times;&nbsp;<em>1500</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>96</em></td><td>800&nbsp;ticks</td></tr>
<tr><td>{% resource 'Necklace' %}</td><td>Lvl 5</td><td>{% resource 'Amulet' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Pendant' %}&nbsp;&times;&nbsp;<em>4</em><br>{% resource 'Mystical chain' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Chain link' %}&nbsp;&times;&nbsp;<em>400</em><br>{% resource 'Wire' %}&nbsp;&times;&nbsp;<em>1400</em><br>{% resource 'Mystical dust' %}&nbsp;&times;&nbsp;<em>3750</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>192</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>
</div>

[[](img/commodities8.

<div class="collapsible-table__content">
<table class="commodities">
<tr class="commodities__head"><th>Product</th><th>Factory</th><th>Components</th><th>Cooldown</th></tr>
<tr><td>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>3</em></td><td>Lvl 1</td><td>{% resource 'Condensate' %}&nbsp;&times;&nbsp;<em>30</em><br>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>15</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>54</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>12</em></td><td>41&nbsp;ticks</td></tr>
<tr><td>{% resource 'Extract' %}&nbsp;&times;&nbsp;<em>2</em></td><td>Lvl 2</td><td>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>10</em><br>{% resource 'Condensate' %}&nbsp;&times;&nbsp;<em>30</em><br>{% resource 'Oxidant' %}&nbsp;&times;&nbsp;<em>60</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>128&nbsp;ticks</td></tr>
<tr><td>{% resource 'Spirit' %}</td><td>Lvl 3</td><td>{% resource 'Extract' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>6</em><br>{% resource 'Reductant' %}&nbsp;&times;&nbsp;<em>90</em><br>{% resource 'Purifier' %}&nbsp;&times;&nbsp;<em>20</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>16</em></td><td>200&nbsp;ticks</td></tr>
<tr><td>{% resource 'Emanation' %}</td><td>Lvl 4</td><td>{% resource 'Spirit' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Extract' %}&nbsp;&times;&nbsp;<em>2</em><br>{% resource 'Concentrate' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Keanium bar' %}&nbsp;&times;&nbsp;<em>112</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>32</em></td><td>800&nbsp;ticks</td></tr>
<tr><td>{% resource 'Essence' %}</td><td>Lvl 5</td><td>{% resource 'Emanation' %}&nbsp;&times;&nbsp;<em>1</em><br>{% resource 'Spirit' %}&nbsp;&times;&nbsp;<em>3</em><br>{% resource 'Crystal' %}&nbsp;&times;&nbsp;<em>110</em><br>{% resource 'Ghodium melt' %}&nbsp;&times;&nbsp;<em>150</em><br>{% resource 'Energy' %}&nbsp;&times;&nbsp;<em>64</em></td><td>600&nbsp;ticks</td></tr>
</table>
</div>


## Power

{% note info %}
**Where to get:** a [`StructurePowerBank`](/api/#StructurePowerBank) in "highway" rooms.

**어떻게 얻을까요:** 구조물을 파괴하고 떨어진 자원을 약탈합니다. <br>
**무엇이 필요한가요:** Power Creeps를 만들기 위해서입니다. 
{% endnote %}
See this article for more info: [Power](power.html).