코드를 번역하지 마세요. NPC Strongholds의 제어 센터이며 해당 구역의 모든 Invaders를 통제합니다. 또한 Stronhold의 NPC Defenders, Refill Towers, Structures를 생성하고 수리합니다. 이 구조물은 해당 섹터에 있는 모든 룸에서 Invaders를 스폰합니다. 또한 파괴할 경우 유용한 자원을 루팅할 수 있습니다. Invader Core는 2단계의 수명 주기를 갖습니다: Deploy 단계 및 Active 단계. 랜덤한 룸에 나타날 때 `ticksToDeploy` 속성을 가지며, 해당 구역의 방어벽이 있으며 아무런 행동도 수행하지 않습니다.

이 단계에서는 공격에 무적입니다(`EFFECT_INVULNERABILITY`가 활성화되어 있음). `ticksToDeploy`타<|im_start|> Timertimer가 끝나면 주변에 구조물을 생성하고 부화시키기 시작합니다. 취약해지고 `EFFECT_COLLAPSE_TIMER`를 수신하며, 이 타<|im_start|> Timertimer가 끝나면 요새가 제거됩니다.

활동중인 Invader Core는 섹터 내의 중립적인 이웃 룸에서 레벨-0 Invader Cores를 생성합니다. 이러한 더 작은 Invader Cores는 룸 컨트롤러 근처에서 부화하며 컨트롤러를 예약/공격하는 것 외에는 아무런 활동도 수행하지 않습니다. 한 개의 Invader Core는 평생 동안 최대 42개의 더 작은 Core를 부화시킬 수 있습니다.

"Hits" -- 10만
"Deploy time" -- 5,000 ticks
"Active time" -- 75,000 ticks with 10% random variation
"Lesser cores spawn interval" -- Stronghold level 1: 4000 ticks, Stronghold level 2: 3500 ticks, Stronghold level 3: 3000 ticks, Stronghold level 4: 2500 ticks, Stronghold level 5: 2000 ticks
}

코드를 번역하지 마십시오. JavaScript와 같은 언어로 된 코드를 번역하지 마십시오. 대문자로만 이루어진 단어도 번역하지 마십시오. Translate this article into Korean : md %}


{% api_property level 'number' %}
                                                                
요새의 수준입니다. 전리품의 양과 품질은 수준에 따라 다릅니다. 

{% api_property ticksToDeploy 'number' %}
                                                                                                                
아직 배치되지 않은 요새에 대한 타이머를 표시합니다. 그렇지 않으면 undefined가 표시됩니다.  

{% api_property spawning '<a href="#StructureSpawn-Spawning">StructureSpawn. Spawning</a>' %}

코어가 새로운 크립을 생성하는 과정에 있다면, 이 객체는 [`StructureSpawn. Spawning`](#StructureSpawn-Spawning) 객체를 포함하게 됩니다.