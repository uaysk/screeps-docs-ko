# StructureInvaderCore

<img src="img/invaderCore.png" alt="" align="right" />

이 NPC 구조물은 NPC Strongholds의 컨트롤 센터이며, 섹터 내 모든 침략자(invaders)를 지휘합니다. Stronghold의 NPC 방어자를 스폰하고, 타워를 리필하고, 구조물을 수리합니다.
이 구조물이 살아 있는 동안, 같은 섹터의 모든 룸에서 침략자를 스폰합니다. 또한 내부에 가치 있는 자원이 들어 있으며, 구조물을 파괴하면 남는 ruin에서 루팅할 수 있습니다.

Invader Core의 수명은 두 단계로 나뉩니다: deploy 단계와 active 단계. 섹터의 임의의 룸에 나타날 때, `ticksToDeploy` 프로퍼티를 가지며
주변에는 public ramparts가 있고, 아무 행동도 하지 않습니다. 이 단계에서는 공격에 무적이며(`EFFECT_INVULNERABILITY`가 활성화되어 있음) 피해를 받지 않습니다. `ticksToDeploy` 타이머가 끝나면,
주변에 구조물을 스폰하고 크립 스폰을 시작하며, 취약해지고, `EFFECT_COLLAPSE_TIMER`를 받습니다. 이 타이머가 끝나면 stronghold는 제거됩니다.

활성 상태의 Invader Core는 섹터 내의 인접한 중립 룸들에 레벨 0 Invader Core를 스폰합니다. 이런 하위 코어(lesser Invader Cores)는
룸 컨트롤러 근처에 생성되며, 컨트롤러를 reserve/attack 하는 것 외에는 활동하지 않습니다. Invader Core 하나는 수명 동안 최대 42개의 하위 코어를 스폰할 수 있습니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Hits</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>Deploy time</strong></td>
        <td>5,000 ticks</td>
    </tr>
    <tr>
        <td><strong>Active time</strong></td>
        <td>75,000 ticks with 10% random variation</td>
    </tr>
    <tr>
        <td><strong>Lesser cores spawn interval</strong></td>
        <td>
            <b>Stronghold level 1</b>: 4000 ticks<br>
            <b>Stronghold level 2</b>: 3500 ticks<br>
            <b>Stronghold level 3</b>: 3000 ticks<br>
            <b>Stronghold level 4</b>: 2500 ticks<br>
            <b>Stronghold level 5</b>: 2000 ticks<br>
        </td>
    </tr>
    
    
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}


{% api_property level 'number' %}
                                                                
Stronghold 레벨입니다. 전리품의 양과 품질은 레벨에 따라 달라집니다.

{% api_property ticksToDeploy 'number' %}
                                                                                                                
아직 deploy되지 않은 stronghold의 타이머를 나타냅니다. 그 외에는 undefined입니다.

{% api_property spawning '<a href="#StructureSpawn-Spawning">StructureSpawn.Spawning</a>' %}

코어가 새 크립을 스폰하는 중이라면, 이 오브젝트는 [`StructureSpawn.Spawning`](#StructureSpawn-Spawning) 오브젝트를 담습니다. 그렇지 않으면 null입니다.

