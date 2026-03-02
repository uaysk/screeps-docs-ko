# PowerCreep


파워 크립(Power Creeps)은 계정에 귀속된 불멸의 “영웅” 유닛이며, 죽은 뒤에도 어떤 `PowerSpawn`에서든 다시 리스폰할 수 있습니다.
능력(“powers”)은 계정의 글로벌 파워 레벨까지 업그레이드할 수 있습니다([`Game.gpl`](#Game.gpl) 참고).

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>수명(Time to live)</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>체력(Hits)</strong></td>
        <td>레벨당 1,000</td>
    </tr>
    <tr>
        <td><strong>용량(Capacity)</strong></td>
        <td>레벨당 100</td>
    </tr>    
    </tbody>
</table>

[사용 가능한 파워 전체 목록](/power.html#Powers)

{% api_method PowerCreep.create 'name, className' 1 %}

```javascript
PowerCreep.create('PowerCreep1', POWER_CLASS.OPERATOR);
```

계정에 새 파워 크립 인스턴스를 생성하는 정적(static) 메서드입니다. 생성된 파워 크립은 스폰되지 않은 상태로 추가되며,
월드에 배치하려면 [`spawn`](#PowerCreep.spawn) 메서드를 사용하세요.

이 작업을 수행하려면 계정에 사용 가능한 Power Level이 1개 있어야 합니다.

{% api_method_params %}
name : string
새 파워 크립의 이름입니다. 이름 길이 제한은 100자입니다.
===
className : string
새 파워 크립의 클래스이며, `POWER_CLASS` 상수 중 하나입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_ENOUGH_RESOURCES | 계정에 사용 가능한 Power Level이 없습니다.
ERR_INVALID_ARGS | 제공된 파워 크립 이름이 제한을 초과했거나, 파워 크립 클래스가 올바르지 않습니다.
ERR_NAME_EXISTS | 지정한 이름의 파워 크립이 이미 존재합니다.
{% endapi_return_codes %} 

{% page inherited/RoomObject.ko.md %}


{% api_property carry object '{"deprecated": true}' %}

[`PowerCreep.store`](#PowerCreep.store)의 별칭입니다.


{% api_property carryCapacity number '{"deprecated": true}' %}

[`PowerCreep.store.getCapacity()`](#Store.getCapacity)의 별칭입니다.

{% api_property className string %}
파워 크립의 클래스이며, `POWER_CLASS` 상수 중 하나입니다.

{% api_property deleteTime number %}
이 크립이 계정에서 영구 삭제 대상으로 표시된 시각(타임스탬프)입니다. 그렇지 않으면 undefined입니다.

{% api_property hits number %}
크립의 현재 체력입니다.

{% api_property hitsMax number %}
크립의 최대 체력입니다.

{% api_property id string %}
고유 객체 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 객체 인스턴스를 가져올 수 있습니다.

{% api_property level number %}
파워 크립의 레벨입니다.

{% api_property memory any %}

```javascript
creep.memory.task = 'building';
```

<code>Memory.powerCreeps[creep.name]</code>의 단축 접근자입니다. 크립별 메모리 데이터 객체에 빠르게 접근할 때 사용할 수 있습니다. <a href="/global-objects.html#Memory-object">메모리에 대해 더 알아보기</a>



{% api_property my boolean %}
내 크립인지, 적(상대) 크립인지 여부입니다.



{% api_property name string %}
파워 크립의 이름입니다. 새 파워 크립을 생성할 때 이름을 정하며, 이후에는 변경할 수 없습니다. 이 이름은 <a href="#Game.powerCreeps">Game.powerCreeps</a> 객체에서 크립에 접근하기 위한 해시 키입니다.



{% api_property owner object %}
크립 소유자 정보가 들어있는 객체이며, 다음 속성을 포함합니다:


{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    goHarvest(creep);
}
```

이 크립의 화물(저장량)을 담고 있는 [`Store`](#Store) 객체입니다.

{% api_property powers object %}
사용 가능한 파워 목록입니다. 파워 ID를 키로 하는 객체이며, 각 항목은 다음 속성을 가집니다:

{% api_method_params %}
level : number
파워의 현재 레벨입니다.
===
cooldown : number
남은 쿨다운 틱 수이며, 파워 크립이 월드에 스폰되어 있지 않으면 undefined입니다.
{% endapi_method_params %}


{% api_property saying string %}
마지막 틱에 크립이 말한 텍스트입니다.

{% api_property shard string %}
파워 크립이 스폰된 샤드의 이름이며, 스폰되어 있지 않으면 undefined입니다.

{% api_property spawnCooldownTime number %}
```javascript
if(!(Game.powerCreeps['PowerCreep1'].spawnCooldownTime > Date.now())) {
    Game.powerCreeps['PowerCreep1'].spawn(powerSpawn);
}
```
이 크립을 스폰하거나 삭제할 수 있게 되는 시각(타임스탬프)입니다.
파워 크립이 월드에 스폰되어 있으면 undefined입니다.

{% api_property ticksToLive number %}
크립이 죽고 스폰되지 않은 상태가 되기까지 남은 게임 틱 수입니다. 크립이 월드에 스폰되어 있지 않으면 undefined입니다.



{% api_method cancelOrder 'methodName' 0 %}

```javascript
creep.move(LEFT);
creep.cancelOrder('move');
//The creep will not move in this game tick
```

현재 게임 틱에서 내린 명령(order)을 취소합니다.

{% api_method_params %}
methodName : string
취소할 크립 메서드의 이름입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 취소되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_NOT_FOUND | 지정한 이름의 명령(order)을 찾을 수 없습니다.
{% endapi_return_codes %}


{% api_method delete '[cancel]' A %}

```javascript
Game.powerCreeps['PowerCreep1'].delete();
```

계정에서 파워 크립을 영구적으로 삭제합니다. 크립은 월드에 스폰되어 있으면 안 됩니다. 삭제는 즉시 이루어지지 않고,
대신 24시간 삭제 타이머가 시작됩니다([`deleteTime`](#PowerCreep.deleteTime) 참고). `delete(true)`를 호출하면 삭제를 취소할 수 있습니다.

{% api_method_params %}
cancel : boolean
true로 설정하면 이전에 예약된 삭제를 취소합니다.
{% endapi_method_params %} 

### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있습니다.
{% endapi_return_codes %}


{% api_method drop 'resourceType, [amount]' A %}

```javascript
creep.drop(RESOURCE_ENERGY);
```

```javascript
// drop all resources
for(const resourceType in creep.carry) {
	creep.drop(resourceType);
}
```

이 자원을 바닥에 떨어뜨립니다.

{% api_method_params %}
resourceType : string
<code>RESOURCE_*</code> 상수 중 하나입니다.
===
amount (optional) : number
떨어뜨릴 자원 수량입니다. 생략하면 들고 있는 모든 수량을 사용합니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_INVALID_ARGS | resourceType이 올바른 <code>RESOURCE_*</code> 상수가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 크립에 지정한 양의 에너지가 없습니다.
{% endapi_return_codes %}



```javascript
Game.powerCreeps['PowerCreep1'].usePower(PWR_GENERATE_OPS);
```


{% api_method enableRoom 'controller' A %}

```javascript
powerCreep.enableRoom(powerCreep.room.controller);
```

이 방에서 파워 사용을 활성화합니다. 방 컨트롤러는 인접 타일에 있어야 합니다.

{% api_method_params %}
controller : <a href="#StructureController">StructureController</a>
방 컨트롤러입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_INVALID_TARGET | 대상이 컨트롤러 구조물이 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
{% endapi_return_codes %}


{% api_method move 'direction' A %}

```javascript
creep.move(RIGHT);
```

```javascript
const path = creep.pos.findPathTo(Game.flags.Flag1);
if(path.length > 0) {
	creep.move(path[0].direction);
}
```

```javascript
creep1.move(TOP);
creep1.pull(creep2);
creep2.move(creep1);
```

지정한 방향으로 크립을 1칸 이동시킵니다.  

{% api_method_params %}
direction : <a href="#Creep">Creep</a>|number
근처의 크립이거나, 아래 상수 중 하나입니다:
						<ul>
							<li><code>TOP</code></li>
							<li><code>TOP_RIGHT</code></li>
							<li><code>RIGHT</code></li>
							<li><code>BOTTOM_RIGHT</code></li>
							<li><code>BOTTOM</code></li>
							<li><code>BOTTOM_LEFT</code></li>
							<li><code>LEFT</code></li>
							<li><code>TOP_LEFT</code></li>
						</ul>

{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_TIRED | 크립의 피로도(fatigue) 값이 0이 아닙니다.
ERR_INVALID_ARGS | 제공된 방향이 올바르지 않습니다.
ERR_NOT_IN_RANGE | 대상 크립이 너무 멀리 있습니다
{% endapi_return_codes %}



{% api_method moveByPath 'path' A %}

```javascript
const path = spawn.room.findPath(spawn, source);
creep.moveByPath(path);
```

```javascript
if(!creep.memory.path) {
    creep.memory.path = creep.pos.findPathTo(target);
}
creep.moveByPath(creep.memory.path);
```

지정한 미리 계산된 경로를 사용해 크립을 이동시킵니다.

{% api_method_params %}
path : array|string
<a href="#Room.findPath"><code>Room.findPath</code></a>, <a href="#RoomPosition.findPathTo"><code>RoomPosition.findPathTo</code></a>, <a href="#PathFinder.PathFinder-search"><code>PathFinder.search</code></a> 메서드가 반환한 경로 값입니다. 배열 형태와 직렬화된 문자열 형태를 모두 지원합니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_NOT_FOUND | 지정한 경로가 크립의 현재 위치와 맞지 않습니다.
ERR_INVALID_ARGS | <code>path</code>가 올바른 경로 배열이 아닙니다.
ERR_TIRED | 크립의 피로도(fatigue) 값이 0이 아닙니다.
{% endapi_return_codes %}



{% api_method moveTo 'x, y, [opts]|target, [opts]' 3 %}

```javascript
creep.moveTo(10, 20);
```

```javascript
creep.moveTo(Game.flags.Flag1);
```

```javascript
creep.moveTo(new RoomPosition(25, 20, 'W10N5'));
```

```javascript
creep.moveTo(pos, {reusePath: 50});
```

```javascript
// Execute moves by cached paths at first
for(const name in Game.creeps) {
    Game.creeps[name].moveTo(target, {noPathFinding: true});
}

// Perform pathfinding only if we have enough CPU
if(Game.cpu.tickLimit - Game.cpu.getUsed() > 20) {
    for(const name in Game.creeps) {
        Game.creeps[name].moveTo(target);
    }
}
```

같은 방 안에서 대상까지의 최적 경로를 찾아 이동합니다. <a href="#RoomPosition.findPathTo">pos.findPathTo()</a>와 <a href="#Creep.move">move()</a>를 연속으로 호출하는 단축형입니다. 대상이 다른 방에 있다면, 해당 방으로 향하는 적절한 출구가 목표로 사용됩니다.

{% api_method_params %}
x : number
같은 방 내에서의 목표 X 좌표입니다.
===
y : number
같은 방 내에서의 목표 Y 좌표입니다.
===
target : object
<a href="#RoomPosition">RoomPosition</a> 객체 또는 <a href="#RoomPosition">RoomPosition</a>을 포함하는 어떤 객체든 가능합니다. 위치는 크립과 같은 방에 있을 필요가 없습니다.
===
opts (optional) : object
다음 추가 옵션을 포함하는 객체입니다:
						<ul>
							<li>
								<div class="api-arg-title">reusePath</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">여러 게임 틱에 걸쳐 찾은 경로를 재사용하도록 합니다. CPU 시간을 절약할 수 있지만, 크립의 반응이 약간 느려질 수 있습니다. 경로는 크립 메모리의 <code>_move</code> 속성에 저장됩니다. <code>reusePath</code> 값은 경로를 재사용할 틱 수를 정의합니다. 기본값은 5입니다. 값을 늘리면 CPU를 더 절약할 수 있고, 줄이면 이동이 더 일관되게 됩니다. 0으로 설정하면 경로 재사용을 비활성화합니다.</div>
							</li>
							<li>
								<div class="api-arg-title">serializeMemory</div>
								<div class="api-arg-type">boolean</div>
								<div class="api-arg-desc"><code>reusePath</code>가 활성화되어 있고 이 옵션이 true이면, 경로를 <a href="#Room.serializePath"><code>Room.serializePath</code></a>를 사용한 짧은 직렬화 형태로 메모리에 저장합니다. 기본값은 true입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">noPathFinding</div>
								<div class="api-arg-type">boolean</div>
								<div class="api-arg-desc">true로 설정하면, 재사용할 메모리 경로가 없을 때 <code>moveTo</code>는 <code>ERR_NOT_FOUND</code>를 반환합니다. 경우에 따라 CPU 시간을 크게 절약할 수 있습니다. 기본값은 false입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">visualizePathStyle</div>
								<div class="api-arg-type">object</div>
								<div class="api-arg-desc"><a href="#RoomVisual.poly"><code>RoomVisual.poly</code></a>로 크립의 경로를 따라 선을 그립니다. 빈 객체 또는 사용자 지정 스타일 파라미터를 제공할 수 있습니다. 기본 스타일은 아래와 동일합니다:
									<pre class="language-javascript"><code>{
    fill: 'transparent',
    stroke: '#fff',
    lineStyle: 'dashed',
    strokeWidth: .15,
    opacity: .1
}</code></pre>
								</div>
							</li>
							<li><a href="#Room.findPath"><code>Room.findPath</code></a> 메서드가 지원하는 모든 옵션.</li>
						</ul>

{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_TIRED | 크립의 피로도(fatigue) 값이 0이 아닙니다.
ERR_INVALID_TARGET | 제공된 대상이 올바르지 않습니다.
ERR_NO_PATH | 대상까지의 경로를 찾을 수 없습니다.
ERR_NOT_FOUND | 재사용할 메모리 경로가 없습니다.
{% endapi_return_codes %}



{% api_method notifyWhenAttacked 'enabled' A %}

```javascript
Game.powerCreeps['PC1'].notifyWhenAttacked(true);
```

크립이 공격받을 때 자동 알림을 보낼지 설정합니다. 알림은 계정 이메일로 전송됩니다. 기본값은 켜짐입니다.

{% api_method_params %}
enabled : boolean
알림을 켤지/끌지 여부입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_INVALID_ARGS | <code>enable</code> 인자가 불리언 값이 아닙니다.
{% endapi_return_codes %}


{% api_method pickup 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
if(target) {
    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

아이템(바닥에 떨어진 에너지 조각)을 줍습니다. 대상은 크립과 같은 칸 또는 인접한 칸에 있어야 합니다.

{% api_method_params %}
target : <a href="#Resource">Resource</a>
줍는 대상 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_INVALID_TARGET | 대상이 줍기 가능한 올바른 객체가 아닙니다.
ERR_FULL | 크립이 더 이상 자원을 받을 수 없습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
{% endapi_return_codes %}




{% api_method rename 'name' 0 %}

```javascript
Game.powerCreeps['PC1'].rename('PC1X');
```

파워 크립의 이름을 변경합니다. 크립은 월드에 스폰되어 있으면 안 됩니다.

{% api_method_params %}
name : string
파워 크립의 새 이름입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있습니다.
ERR_NAME_EXISTS | 지정한 이름의 파워 크립이 이미 존재합니다.
{% endapi_return_codes %}



{% api_method renew 'target' A %}

```javascript
let powerBank = Game.getObjectById('XXX');
Game.powerCreeps['PowerCreep1'].renew(powerBank);

```

근처의 파워 스폰 또는 파워 뱅크를 사용해 수명(Time to live)을 즉시 최대치로 복구합니다. 대상은 인접 타일에 있어야 합니다.

{% api_method_params %}
target : <a href="#StructurePowerBank">StructurePowerBank</a> | <a href="#StructurePowerSpawn">StructurePowerSpawn</a>
대상 구조물입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_INVALID_TARGET | 대상이 올바른 파워 뱅크/파워 스폰 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
{% endapi_return_codes %}



{% api_method say 'message, [public]' 0 %}

```javascript
const hostiles = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 10);
if(hostiles.length > 0) {
    creep.say('OMG!😨');
    creep.moveTo(Game.spawns['Spawn1']);
}
else {
    doWork(creep);
}
```

지정한 메시지를 크립 위에 말풍선으로 표시합니다. 메시지는 1틱 동안만 유지됩니다. 마지막 메시지는 <code>saying</code> 속성으로 읽을 수 있습니다. <a href="http://unicode.org/emoji/charts/emoji-style.txt" target="_blank">이모지</a>를 포함해, 유효한 모든 유니코드 문자를 사용할 수 있습니다.

{% api_method_params %}
message : string
표시할 메시지입니다. 최대 길이는 10자입니다.
===
public (optional) : boolean
true로 설정하면 다른 플레이어도 이 메시지를 볼 수 있습니다. 기본값은 false입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
{% endapi_return_codes %}



{% api_method spawn 'powerSpawn' A %}

```javascript
Game.powerCreeps['PowerCreep1'].spawn(Game.getObjectById('XXX'));
```

지정한 파워 스폰(Power Spawn)에 이 파워 크립을 스폰합니다.

{% api_method_params %}
powerSpawn : <a href="#StructurePowerSpawn">StructurePowerSpawn</a>
내 Power Spawn 구조물입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 크립 또는 스폰의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 이미 월드에 스폰되어 있습니다.
ERR_RCL_NOT_ENOUGH | 스폰을 사용하기에 방 컨트롤러 레벨이 부족합니다.
ERR_INVALID_TARGET | 지정한 객체가 Power Spawn이 아닙니다.
ERR_TIRED | 쿨다운 때문에 파워 크립을 스폰할 수 없습니다.
{% endapi_return_codes %}



{% api_method suicide '' A %}



파워 크립을 즉시 자살시킵니다. 영구적으로 파괴되지는 않으며, 스폰되지 않은 상태가 되어
다시 [`spawn`](#PowerCreep.spawn)할 수 있습니다.



### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
{% endapi_return_codes %}



{% api_method transfer 'target, resourceType, [amount]' A %}

```javascript
if(creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	creep.moveTo(storage);
}
```

```javascript
// transfer all resources
for(const resourceType in creep.carry) {
	creep.transfer(storage, resourceType);
}
```

크립에서 다른 객체로 자원을 옮깁니다. 대상은 크립과 인접한 칸에 있어야 합니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a>
대상 객체입니다.
===
resourceType : string
<code>RESOURCE_*</code> 상수 중 하나입니다.
===
amount (optional) : number
옮길 자원 수량입니다. 생략하면 들고 있는 모든 수량을 사용합니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_NOT_ENOUGH_RESOURCES | 크립에 지정한 양의 자원이 없습니다.
ERR_INVALID_TARGET | 대상이 해당 자원을 담을 수 있는 올바른 객체가 아닙니다.
ERR_FULL | 대상이 더 이상 자원을 받을 수 없습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_INVALID_ARGS | resourceType이 <code>RESOURCE_*</code> 상수 중 하나가 아니거나 amount가 올바르지 않습니다.
{% endapi_return_codes %}



{% api_method upgrade 'power' A %}

```javascript
Game.powerCreeps['PowerCreep1'].upgrade(PWR_GENERATE_OPS);
```

크립을 업그레이드하여 새 파워 능력을 추가하거나 기존 파워의 레벨을 올립니다.
이 작업을 수행하려면 계정에 사용 가능한 Power Level이 1개 있어야 합니다.

{% api_method_params %}
power : number
업그레이드할 파워 능력이며, `PWR_*` 상수 중 하나입니다.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 계정의 Power Level이 충분하지 않습니다.
ERR_FULL | 이 크립 레벨에서는 지정한 파워를 업그레이드할 수 없거나, 크립이 최대 레벨에 도달했습니다.
ERR_INVALID_ARGS | 지정한 파워 ID가 올바르지 않습니다.
{% endapi_return_codes %}


{% api_method usePower 'power, [target]' A %}

```javascript
Game.powerCreeps['PowerCreep1'].usePower(PWR_GENERATE_OPS);
```

```javascript
Game.powerCreeps['PowerCreep1'].usePower(PWR_OPERATE_SPAWN, Game.spawns['Spawn1']);
```

지정한 대상에 크립의 파워 중 하나를 적용합니다.
파워는 컨트롤러가 없거나, 컨트롤러가 [파워 활성화](#PowerCreep.enableRoom)된 방에서만 사용할 수 있습니다.
같은 틱에는 한 번에 하나의 파워만 사용할 수 있으며, `usePower`를 여러 번 호출하면 마지막 호출이 이전 호출을 덮어씁니다.
대상에 더 낮거나 같은 레벨의 동일 효과가 있으면 덮어쓰며, 기존 효과 레벨이 더 높으면 오류를 반환합니다.

[사용 가능한 파워 전체 목록](/power.html#Powers)   


{% api_method_params %}
power : number
사용할 파워 능력이며, `PWR_*` 상수 중 하나입니다.
===
target (optional) : <a href="#RoomObject">RoomObject</a>
방 안의 대상 객체입니다.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 월드에 스폰되어 있지 않습니다.
ERR_NO_BODYPART | 크립이 지정한 파워 능력을 가지고 있지 않습니다.
ERR_TIRED | 파워가 아직 쿨다운 중입니다.
ERR_NOT_ENOUGH_RESOURCES | 파워를 사용하기 위한 자원이 부족합니다.
ERR_INVALID_TARGET | 지정한 대상이 올바르지 않습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_INVALID_ARGS | 방 컨트롤러에서 파워 사용이 활성화되어 있지 않습니다.
ERR_FULL | 대상에 더 높은 레벨의 동일 효과가 이미 활성화되어 있습니다.  
{% endapi_return_codes %}

{% api_method withdraw 'target, resourceType, [amount]' A %}

```javascript
if(creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	creep.moveTo(storage);
}
```

구조물 또는 톰스톤에서 자원을 꺼냅니다. 대상은 크립과 인접한 칸에 있어야 합니다. 같은 틱에 여러 크립이 같은 객체에서 withdraw할 수 있습니다. 또한 대상 위에 적 램파트가 없는 경우, 내 크립은 적 구조물/톰스톤에서도 자원을 꺼낼 수 있습니다.

이 메서드는 크립 사이의 자원 이동에 사용하면 안 됩니다. 크립 간 이동은 원래 크립에서 [`transfer`](#Creep.transfer) 메서드를 사용하세요.

{% api_method_params %}
target : <a href="#Structure">Structure</a>, <a href="#Tombstone">Tombstone</a>, <a href="#Ruin">Ruin</a>
대상 객체입니다.
===
resourceType : string
<code>RESOURCE_*</code> 상수 중 하나입니다.
===
amount (optional) : number
옮길 자원 수량입니다. 생략하면 가능한 모든 수량을 사용합니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아니거나, 대상 위에 적 램파트가 있습니다.
ERR_BUSY | 파워 크립이 월드에 스폰되어 있지 않습니다.
ERR_NOT_ENOUGH_RESOURCES | 대상에 지정한 양의 자원이 없습니다.
ERR_INVALID_TARGET | 대상이 해당 자원을 담을 수 있는 올바른 객체가 아닙니다.
ERR_FULL | 크립의 적재량이 가득 찼습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_INVALID_ARGS | resourceType이 <code>RESOURCE_*</code> 상수 중 하나가 아니거나 amount가 올바르지 않습니다.
{% endapi_return_codes %}



