# StructureSpawn

<img src="img/spawn. png" alt="" align="right" />

Spawn은 식민지의 중심입니다. 이 구조는 크립을 생성, 갱신 및 재활용 할 수 있습니다. 모든 스폰은 [Game. spawns](#Game.spawns) 해시 목록을 통해 액세스 할 수 있습니다. 스폰은 매 틱마다 약간의 에너지를 자동으로 재생성하므로 모든 크립이 사망했을 때도 쉽게 복구 할 수 있습니다.

"컨트롤러 레벨" 열에서 2개의 세포가 합쳐진 셀

번역하지 마세요 : JavaScript 코드를 번역하지 마십시오. JavaScript, 단어를 대문자로만 번역하지 마십시오., 이 기사를 한국어로 번역하십시오. : md %}

{% api_property energy 'number' '{"deprecated": true}' %}

spawn === structure. spawn) {
    // ...
  }
```

```javascript
console. log(structure. store. Spawning. id); // logs the ID of the spawning creep
```

1. `getFreeCapacity(RESOURCE_ENERGY) > 0`
구조체에서 에너지의 남은 용량이 있는 경우에만 생성합니다.

컨테이인 1개부터 50개까지 다음과 같은 상수중 하나를 포함해야 합니다:
* `WORK`
* `MOVE`
* `CARRY`
* `ATTACK`
* `RANGED_ATTACK`
* `HEAL`
* `TOUGH`
* `CLAIM`
										
이름 (선택 사항) : string
새로운 크립의 이름. 길이가 100자를 넘지 않아야 합니다. 고유한 크립 이름, 즉 <code>Game.creeps</code> 객체에 동일한 이름을 갖는 또 다른 크립이 없어야 합니다(해시 키). 값을 지정하지 않으면, 임의의 이름이 생성됩니다.
{% endapi_method_params %}

### 반환 값

다음과 같은 코드중 하나:
{% api_return_codes %}
OK | 지정된 바디와 이름의 크립을 만들 수 있습니다.
ERR_NOT_OWNER | 귀하가 스폰의 소유자가 아닙니다

Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'Worker1');
```

"deprecated": "Please use [`StructureSpawn. spawnCreep`](#StructureSpawn. spawnCreep) instead."

새 크리프트의 신체를 설명하는 배열입니다.

* 1~50개의 요소를 다음 상수 중 하나와 함께 포함해야 합니다.
* `WORK`
* `MOVE`
* `CARRY`
* `ATTACK`
* `RANGED_ATTACK`
* `HEAL`
* `TOUGH`
* `CLAIM`

===
name (선택사항) : string
새로운 크립의 이름입니다. 100자까지 가능합니다. 고유한 크립명을 사용해야 하며, <code>Game.creeps</code> 개체에는 같은 이름의 크립이 없어야 합니다(hash키). 정의되지 않으면 임의의 이름이 생성됩니다.
===
memory (선택사항) : any
새로운 크립의 메모리입니다. 제공된 경우, <code>Memory.creeps[name]</code>에 즉시 저장됩니다.

creepName: 'Creeper1',
  creepBody: {
    type: 'mech',
    bodyParts: [{
      type: 'shield',
      energyCost: 250
    },{
      type: 'weapon',
      energyCost: 75,
      damage: 15
    }]
  },
  opts: {
    energy: 400
  }
}
```

게임에서 사용할 수 있는 에너지가 부족하면 크립을 소환할 수 없습니다.

{% api_method_headers %}
{% api_method_params %}
body : array&lt;string&gt;

새로운 크립의 몸을 설명하는 배열입니다. 1에서 50개 사이의 요소가 있어야 하며, 다음과 같은 상수 중 하나를 포함해야 합니다.

* `WORK`
* `MOVE`
* `CARRY`
* `ATTACK`
* `RANGED_ATTACK`
* `HEAL`
* `TOUGH`
* `CLAIM`
				
===
name : string
새로운 크립의 이름입니다. 길이는 100자를 넘지 않아야 합니다. 고유한 크립 이름이어야 하므로 <code>Game.creeps</code> 객체에 동일한 이름의 크립이 없어야 합니다(해시 키).
===
opts (optional) : object
새끼를 생성할 때 사용하는 추가 옵션을 포함하는 객체입니다.

<ul>
    <li>
        <div class="api-arg-title">memory</div>
        <div class="api-arg-type">any</div>
        <div class="api-arg-desc">새로운 크립의 메모리입니다. 제공된 경우, 즉시 <code>memory. creeps[name]</code>에 저장됩니다.</div>
    </li>
    <li>
        <div class="api-arg-title">energyStructures</div>
        <div class="api-arg-type">배열</div>
        <div class="api-arg-desc">생성 프로세스에 필요한 에너지를 제공하기 위해 사용되는 생성물/확장의 배열. 이 배열의 순서대로 구조물을 사용합니다.</div>
    </li>
</ul>

</div>
    </li>
    <li>
        <div class="api-arg-title">dryRun</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">If `dryRun` is true, the operation will only check if it is possible to create a creep. </div>
    </li>
    <li>
            <div class="api-arg-title">directions</div>
            <div class="api-arg-type">array<number></div>
            <div class="api-arg-desc">Set desired directions where the creep should move when spawned. </div>
    </li>
</ol>
```
JavaScript를 번역하지 마십시오. JavaScript와 같은 코드를 번역하지 마십시오. 대문자로만 이루어진 단어도 번역하지 마십시오. Translate the following article into Korean: </div>
<li>
    <div class="api-arg-title">dryRun</div>
    <div class="api-arg-type">boolean</div>
    <div class="api-arg-desc">If `dryRun` is true, the operation will only check if it is possible to create a creep. </div>
</li>
<li>
    <div class="api-arg-title">directions</div>
    <div class="api-arg-type">array<number></div>
    <div class="api-arg-desc">Set desired directions where the creep should move when spawned. </div>
</li>
</ol>

상수 배열:
<ul>
    <li><code>TOP</code></li>
    <li><code>TOP_RIGHT</code></li>
    <li><code>RIGHT</code></li>
    <li><code>BOTTOM_RIGHT</code></li>
    <li><code>BOTOM</code></li>
    <li><code>BOTTOM_LEFT</code></li>
    <li><code>LEFT</code></li>
    <li><code>TOP_LEFT</code></li>
</ul>

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.

ERR_NOT_OWNER | 당신은이 산란의 소유자가 아닙니다.
ERR_NAME_EXISTS | 이미 동일한 이름의 크립이 있습니다.
ERR_BUSY | 현재 산란은 다른 크립을 산란하고 있습니다.
ERR_NOT_ENOUGH_ENERGY | 산란 및 확장에 충분한 에너지가없는 경우 주어진 신체를 만들기에 충분하지 않습니다.
ERR_INVALID_ARGS | 바디가 올바르게 설명되지 않았거나 이름이 제공되지 않았습니다.
ERR_RCL_NOT_ENOUGH | Room Controller 수준은이 산란을 사용하기에 부족합니다.
{% endapi_return_codes %}

에너지 회수는 신체 부위당 125 단위로 제한됩니다.
{% api_method_params %}
target : <a href="#Creep">Creep</a>
대상 크립 오브젝트입니다. {% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다. ERR_NOT_OWNER | 귀하는 이 생물체 또는 대상 크립의 소유자가 아닙니다. ERR_INVALID_TARGET | 지정한 대상 오브젝트가 크립이 아닙니다. ERR_NOT_IN_RANGE | 대상 크립과 거리가 너무 멀습니다. ERR_RCL_NOT_ENOUGH | 이 생물체의 룸 컨트롤러 레벨은 이 생물체를 사용하기에 불충분합니다. {% endapi_return_codes %}

{% api_method renewCreep 'target' A %}
대상 크립의 남아있는 수명 시간을 증가시킵니다.

목표는 인접한 사각형이어야 합니다. 타겟에 CLAIM 신체 부위가 없어야 합니다. 새끼가 생성하는 중일 때 실행해서는 안됩니다. 각 실행마다 다음 공식에 따라 틱의 수만큼 타<|im_start|> helpers.toplevel.translate_article_to_ko.1036238947560800{/literal}

```javascript
floor(600 / body_size)
```

에너지는 다음 공식을 사용하여 결정됩니다.

```javascript
ceil(creep_cost / 2.5 / body_size)
```

새끼를 갱신하면 모든 부스트가 제거됩니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>
타겟 크립 객체입니다.
{% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.

ERR_NOT_OWNER | 당신은 생물이나 포획물의 주인이 아닙니다.
ERR_BUSY | 새로운 포획물을 얻기 위해 현재 알을 부화시키고 있습니다.
ERR_NOT_ENOUGH_ENERGY | 생산소가 에너지를 보충하는데 필요한 만큼의 에너지가 없습니다.
ERR_INVALID_TARGET | 제공된 대상은 포획물이나 일반 유닛이 아닙니다.
ERR_FULL | 목표 포획물의 시간 지속 타이머가 채워져있습니다.
ERR_NOT_IN_RANGE | 제공된 대상이 너무 멀리 있습니다.
ERR_RCL_NOT_ENOUGH | 해당 스폰을 사용하기 위해선 룸 컨트롤러의 레벨이 부족합니다.