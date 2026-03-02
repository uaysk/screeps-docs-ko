# StructureSpawn

<img src="img/spawn.png" alt="" align="right" /> 

스폰은 콜로니의 중심입니다. 이 구조물은 크립을 생성(spawn)하고, 수명 연장(renew)하며, 재활용(recycle)할 수 있습니다.
모든 스폰은 [`Game.spawns`](#Game.spawns) 해시 목록을 통해 접근할 수 있습니다.
또한 스폰은 매 틱 소량의 에너지를 자동으로 재생성하므로, 모든 크립이 죽었더라도 비교적 쉽게 회복할 수 있습니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>컨트롤러 레벨</strong></td>
    </tr>
    <tr>
        <td>1-6</td>
        <td>스폰 1개</td>
    </tr>
    <tr>
        <td>7</td>
        <td>스폰 2개</td>
    </tr>
    <tr>
        <td>8</td>
        <td>스폰 3개</td>
    </tr>
    <tr>
        <td><strong>비용</strong></td>
        <td>15,000</td>
    </tr>
    <tr>
        <td><strong>체력(Hits)</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>용량(Capacity)</strong></td>
        <td>300</td>
    </tr>
    <tr>
        <td><strong>스폰 시간</strong></td>
        <td>바디 파트 1개당 3틱</td>
    </tr>
    <tr>
        <td><strong>에너지 자동 재생</strong></td>
        <td>방 안에서 사용 가능한 에너지(모든 스폰과 익스텐션 합계)가 300 미만인 동안, 매 틱 에너지 1을 재생성</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}


{% api_property energy 'number' '{"deprecated": true}' %}
                                                                
[`.store[RESOURCE_ENERGY]`](#StructureExtension.store)의 별칭입니다.



{% api_property energyCapacity 'number' '{"deprecated": true}' %}
                                                                                                                
[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity)의 별칭입니다.



{% api_property memory 'any' %}

```javascript
spawn.memory.queue = [];
```

<code>Memory.spawns[spawn.name]</code>의 단축 접근자입니다. 스폰별 메모리 데이터 객체에 빠르게 접근할 때 사용할 수 있습니다. <a href="/global-objects.html#Memory-object">메모리에 대해 더 알아보기</a>



{% api_property name 'string' %}



스폰의 이름입니다. 새 스폰을 만들 때 이름을 정하며, 이후에는 변경할 수 없습니다. 이 이름은 <a href="#Game.spawns">Game.spawns</a> 객체에서 스폰에 접근하기 위한 해시 키입니다.



{% api_property spawning '<a href="#StructureSpawn-Spawning">StructureSpawn.Spawning</a>' %}



스폰이 새 크립을 생성 중이라면 이 속성은 [`StructureSpawn.Spawning`](#StructureSpawn-Spawning) 객체를 가지며, 그렇지 않으면 null입니다.


{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```


이 구조물의 화물(저장량)을 담고 있는 [`Store`](#Store) 객체입니다.

{% api_method canCreateCreep 'body, [name]' 1 '{"deprecated": "Please use [`StructureSpawn.spawnCreep`](#StructureSpawn.spawnCreep) with `dryRun` flag instead."}' %}

```javascript
if(spawn.canCreateCreep(body, name) == OK) {
    spawn.createCreep(body, name);
}
```

크립을 생성할 수 있는지 확인합니다.

{% api_method_params %}
body : array&lt;string&gt;
새 크립의 바디를 설명하는 배열입니다. 1~50개의 요소를 가지며, 아래 상수 중 하나여야 합니다:
						
* `WORK`
* `MOVE`
* `CARRY`
* `ATTACK`
* `RANGED_ATTACK`
* `HEAL`
* `TOUGH`
* `CLAIM`
										
===
name (optional) : string
새 크립의 이름입니다. 이름 길이 제한은 100자입니다. 유일한 크립 이름이어야 하며, 즉 <code>Game.creeps</code> 객체에 같은 이름(해시 키)의 다른 크립이 없어야 합니다. 지정하지 않으면 무작위 이름이 생성됩니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 지정한 바디와 이름으로 크립을 생성할 수 있습니다.
ERR_NOT_OWNER | 이 스폰의 소유자가 아닙니다.
ERR_NAME_EXISTS | 같은 이름의 크립이 이미 존재합니다.
ERR_BUSY | 스폰이 이미 다른 크립을 생성 중입니다.
ERR_NOT_ENOUGH_ENERGY | 지정한 바디로 크립을 만들 만큼 스폰 및 익스텐션에 에너지가 충분하지 않습니다.
ERR_INVALID_ARGS | 바디가 올바르게 작성되지 않았습니다.
ERR_RCL_NOT_ENOUGH | 이 스폰을 사용하기에 방 컨트롤러 레벨이 부족합니다.
{% endapi_return_codes %}



{% api_method createCreep 'body, [name], [memory]' A '{"deprecated": "Please use [`StructureSpawn.spawnCreep`](#StructureSpawn.spawnCreep) instead."}' %}

```javascript
Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'Worker1');
```

```javascript
Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], null, 
    {role: 'harvester'});
```

```javascript
const result = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE]);

if(_.isString(result)) {
    console.log('The name is: '+result);
}
else {
    console.log('Spawn error: '+result);
}
```

크립 생성 과정을 시작합니다. 필요한 에너지는 해당 방의 모든 스폰과 익스텐션에서 인출될 수 있습니다.

{% api_method_params %}
body : array&lt;string&gt;
새 크립의 바디를 설명하는 배열입니다. 1~50개의 요소를 가지며, 아래 상수 중 하나여야 합니다:

* `WORK`
* `MOVE`
* `CARRY`
* `ATTACK`
* `RANGED_ATTACK`
* `HEAL`
* `TOUGH`
* `CLAIM`
					
===
name (optional) : string
새 크립의 이름입니다. 이름 길이 제한은 100자입니다. 유일한 크립 이름이어야 하며, 즉 <code>Game.creeps</code> 객체에 같은 이름(해시 키)의 다른 크립이 없어야 합니다. 지정하지 않으면 무작위 이름이 생성됩니다.
===
memory (optional) : any
새 크립의 메모리입니다. 제공하면 즉시 <code>Memory.creeps[name]</code>에 저장됩니다.
{% endapi_method_params %}


### 반환 값

새 크립의 이름 또는 아래 오류 코드 중 하나를 반환합니다:
{% api_return_codes %}
ERR_NOT_OWNER | 이 스폰의 소유자가 아닙니다.
ERR_NAME_EXISTS | 같은 이름의 크립이 이미 존재합니다.
ERR_BUSY | 스폰이 이미 다른 크립을 생성 중입니다.
ERR_NOT_ENOUGH_ENERGY | 지정한 바디로 크립을 만들 만큼 스폰 및 익스텐션에 에너지가 충분하지 않습니다.
ERR_INVALID_ARGS | 바디가 올바르게 작성되지 않았습니다.
ERR_RCL_NOT_ENOUGH | 이 스폰을 사용하기에 방 컨트롤러 레벨이 부족합니다.
{% endapi_return_codes %}



{% api_method spawnCreep 'body, name, [opts]' A %}

```javascript
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Worker1');
```

```javascript
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Worker1', {
    memory: {role: 'harvester'}
});
```

```javascript
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'Worker1', { 
    energyStructures: [
        Game.spawns['Spawn1'], 
        Game.getObjectById('anExtensionId')
    ]
});
```

```javascript
var testIfCanSpawn = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 
    'Worker1', { dryRun: true });
```

크립 생성 과정을 시작합니다. 필요한 에너지는 해당 방의 모든 스폰과 익스텐션에서 인출될 수 있습니다.

{% api_method_params %}
body : array&lt;string&gt;
새 크립의 바디를 설명하는 배열입니다. 1~50개의 요소를 가지며, 아래 상수 중 하나여야 합니다:

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
새 크립의 이름입니다. 이름 길이 제한은 100자입니다. 유일한 크립 이름이어야 하며, 즉 <code>Game.creeps</code> 객체에 같은 이름(해시 키)의 다른 크립이 없어야 합니다.
===
opts (optional) : object
스폰 과정에 대한 추가 옵션 객체입니다.
<ul>
    <li>
        <div class="api-arg-title">memory</div>
        <div class="api-arg-type">any</div>
        <div class="api-arg-desc">새 크립의 메모리입니다. 제공하면 즉시 <code>Memory.creeps[name]</code>에 저장됩니다.</div>
    </li>
    <li>
        <div class="api-arg-title">energyStructures</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">스폰 과정에서 에너지를 가져올 스폰/익스텐션의 배열입니다. 구조물은 배열 순서대로 사용됩니다.</div>
    </li>
    <li>
        <div class="api-arg-title">dryRun</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">`dryRun`이 true이면, 실제로 생성하지 않고 크립 생성 가능 여부만 검사합니다.</div>
    </li>
    <li>
            <div class="api-arg-title">directions</div>
            <div class="api-arg-type">array<number></div>
            <div class="api-arg-desc">스폰 직후 크립이 이동해야 하는 선호 방향을 설정합니다. 아래 방향 상수들의 배열입니다:
                                          <ul>
                                              <li><code>TOP</code></li>
                                              <li><code>TOP_RIGHT</code></li>
                                              <li><code>RIGHT</code></li>
                                              <li><code>BOTTOM_RIGHT</code></li>
                                              <li><code>BOTTOM</code></li>
                                              <li><code>BOTTOM_LEFT</code></li>
                                              <li><code>LEFT</code></li>
                                              <li><code>TOP_LEFT</code></li>
                                          </ul></div>
        </li>
</ul>
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 스폰의 소유자가 아닙니다.
ERR_NAME_EXISTS | 같은 이름의 크립이 이미 존재합니다.
ERR_BUSY | 스폰이 이미 다른 크립을 생성 중입니다.
ERR_NOT_ENOUGH_ENERGY | 지정한 바디로 크립을 만들 만큼 스폰 및 익스텐션에 에너지가 충분하지 않습니다.
ERR_INVALID_ARGS | 바디가 올바르게 작성되지 않았거나 이름이 제공되지 않았습니다.
ERR_RCL_NOT_ENOUGH | 이 스폰을 사용하기에 방 컨트롤러 레벨이 부족합니다.
{% endapi_return_codes %}



{% api_method recycleCreep 'target' A %}



크립을 처치하고, 남은 수명에 따라 스폰 및 부스트에 사용된 자원을 최대 100%까지 반환(드롭)합니다. 대상은 인접한 칸에 있어야 합니다. 에너지 반환은 바디 파트 1개당 최대 125로 제한됩니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>
대상 크립 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 스폰 또는 대상 크립의 소유자가 아닙니다.
ERR_INVALID_TARGET | 지정한 대상 객체가 크립이 아닙니다.
ERR_NOT_IN_RANGE | 대상 크립이 너무 멀리 있습니다.
ERR_RCL_NOT_ENOUGH | 이 스폰을 사용하기에 방 컨트롤러 레벨이 부족합니다.
{% endapi_return_codes %}



{% api_method renewCreep 'target' A %}



대상 크립의 남은 수명(Time to live)을 증가시킵니다. 대상은 인접한 칸에 있어야 합니다.
대상은 CLAIM 바디 파트를 가지면 안 됩니다.
스폰은 생성 중 상태가 아니어야 합니다. 실행 1회마다 크립 타이머는 아래 공식에 따라
틱 수만큼 증가합니다:

```javascript-content
floor(600/body_size)
```

각 실행에 필요한 에너지는 아래 공식으로 결정됩니다:

```javascript-content
ceil(creep_cost/2.5/body_size)
```

크립을 갱신하면 해당 크립의 모든 부스트가 제거됩니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>
대상 크립 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 스폰 또는 크립의 소유자가 아닙니다.
ERR_BUSY | 스폰이 다른 크립을 생성 중입니다.
ERR_NOT_ENOUGH_ENERGY | 스폰에 에너지가 충분하지 않습니다.
ERR_INVALID_TARGET | 지정한 대상이 크립이 아니거나, 크립이 CLAIM 바디 파트를 가지고 있습니다.
ERR_FULL | 대상 크립의 수명 타이머가 이미 최대입니다.
ERR_NOT_IN_RANGE | 대상 크립이 너무 멀리 있습니다.
ERR_RCL_NOT_ENOUGH | 이 스폰을 사용하기에 방 컨트롤러 레벨이 부족합니다.
{% endapi_return_codes %}

