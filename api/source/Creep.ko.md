# Creep


크립(Creep)은 당신의 유닛입니다. 크립은 이동, 에너지 채집, 구조물 건설, 다른 크립 공격 등 다양한 행동을 수행할 수 있습니다. 각 크립은 최대 50개의 바디 파트로 구성되며, 가능한 타입은 다음과 같습니다:
![](img/bodyparts.png)   

<table class="table gameplay-info">
    <tbody>
    <tr>
        <th style="width: 20%;">바디 파트</th>
        <th style="width: 8%;">제작 비용</th>
        <th>바디 파트 1개당 효과</th>
    </tr>
    <tr>
        <td><code style="background: #333; color: #a9b7c6;">MOVE</code></td>
        <td>50</td>
        <td>피로도(fatigue)를 매 틱 2만큼 감소시킵니다.</td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #ffe56d;">WORK</code></td>
        <td>100</td>
        <td>
            <p>소스(source)에서 매 틱 에너지 2를 채집합니다.</p>
            <p>미네랄 또는 디포짓에서 매 틱 자원 1을 채집합니다.</p>
            <p>매 틱 에너지 5를 사용해 구조물을 건설합니다.</p>
            <p>매 틱 에너지 1을 소비해 구조물을 100 hits만큼 수리합니다.</p>
            <p>매 틱 구조물을 50 hits만큼 해체(dismantle)하고, 매 틱 에너지 0.25를 반환합니다.</p>
            <p>매 틱 에너지 1을 사용해 컨트롤러를 업그레이드합니다.</p>
        </td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #777;">CARRY</code></td>
        <td>50</td>
        <td>최대 50 유닛의 자원을 담을 수 있습니다.</td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #f93842;">ATTACK</code></td>
        <td>80</td>
        <td>근접 공격으로 다른 크립/구조물을 매 틱 30 hits만큼 공격합니다.</td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #5d80b2;">RANGED_ATTACK</code></td>
        <td>150</td>
        <td>
            <p>최대 3칸 거리의 원거리 공격으로 단일 크립/구조물을 매 틱 10 hits만큼 공격합니다.</p>
            <p>반경 3칸 내의 모든 적 크립/구조물을 거리(범위)에 따라 1-4-10 hits만큼 공격합니다.</p>
        </td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #65fd62;">HEAL</code></td>
        <td>250</td>
        <td>자기 자신 또는 다른 크립을 치유합니다. 근접에서는 매 틱 12 hits, 거리에서는 매 틱 4 hits를 회복합니다.</td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #b99cfb;">CLAIM</code></td>
        <td>600</td>
        <td>
            <p>중립 방의 컨트롤러를 점유(claim)합니다.</p>
            <p>중립 방의 컨트롤러를 바디 파트당 1틱씩 예약(reserve)합니다.</p>
            <p>적 방의 컨트롤러를 공격하여 바디 파트당 300틱씩 다운그레이드 타이머를 감소시킵니다.</p>
            <p>중립 방의 컨트롤러 예약 타이머를 바디 파트당 1틱씩 공격하여 감소시킵니다.</p>
            <p>이 바디 파트를 가진 크립은 수명이 600틱으로 줄어들며 갱신(renew)할 수 없습니다.</p>
        </td>
    </tr>
    <tr>
        <td><code style="background: #333; color: #fff;">TOUGH</code></td>
        <td>10</td>
        <td>효과는 없고, 크립 바디에 추가 체력만 제공합니다. 부스트로 피해 저항을 올릴 수 있습니다.</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.ko.md %}


{% api_property body array %}



크립의 바디를 설명하는 배열입니다. 각 요소는 다음 속성을 포함합니다:

{% api_method_params %}
boost : string | undefined
바디 파트가 부스트되어 있다면, 이 속성은 부스트에 사용된 미네랄 타입을 지정합니다. <code>RESOURCE_*</code> 상수 중 하나입니다. <a href="/resources.html">자세히 보기</a>
===
type : string
바디 파트 타입 상수 중 하나입니다.
===
hits : number
이 바디 파트의 남은 체력(hits)입니다.
{% endapi_method_params %}


{% api_property carry object '{"deprecated": true}' %}

[`Creep.store`](#Creep.store)의 별칭입니다.


{% api_property carryCapacity number '{"deprecated": true}' %}

[`Creep.store.getCapacity()`](#Store.getCapacity)의 별칭입니다.


{% api_property fatigue number %}



이동 피로도(fatigue) 지표입니다. 0보다 크면 크립은 이동할 수 없습니다.



{% api_property hits number %}



크립의 현재 체력입니다.



{% api_property hitsMax number %}



크립의 최대 체력입니다.



{% api_property id string %}



고유 객체 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 객체 인스턴스를 가져올 수 있습니다.



{% api_property memory any %}

```javascript
creep.memory.task = 'building';
```

<code>Memory.creeps[creep.name]</code>의 단축 접근자입니다. 크립별 메모리 데이터 객체에 빠르게 접근할 때 사용할 수 있습니다. <a href="/global-objects.html#Memory-object">메모리에 대해 더 알아보기</a>



{% api_property my boolean %}



내 크립인지, 적(상대) 크립인지 여부입니다.



{% api_property name string %}



크립의 이름입니다. 새 크립을 생성할 때 이름을 정하며, 이후에는 변경할 수 없습니다. 이 이름은 <a href="#Game.creeps">Game.creeps</a> 객체에서 크립에 접근하기 위한 해시 키입니다.



{% api_property owner object %}



크립 소유자 정보가 들어있는 객체이며, 다음 속성을 포함합니다:

{% api_method_params %}
username : string
소유자 유저 이름입니다.
{% endapi_method_params %}


{% api_property saying string %}



마지막 틱에 크립이 말한 텍스트입니다.



{% api_property spawning boolean %}



이 크립이 아직 생성(spawning) 중인지 여부입니다.

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    goHarvest(creep);
}
```

이 크립의 화물(저장량)을 담고 있는 [`Store`](#Store) 객체입니다.


{% api_property ticksToLive number %}



이 크립이 죽기까지 남은 게임 틱 수입니다.



{% api_method attack 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
if(target) {
    if(creep.attack(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

근접 공격으로 다른 크립/파워 크립/구조물을 공격합니다. <code>ATTACK</code> 바디 파트가 필요합니다. 대상이 램파트 안에 있으면, 대신 램파트가 공격됩니다. 대상은 크립과 인접한 칸에 있어야 합니다. 대상이 <code>ATTACK</code> 바디 파트를 가진 크립이며 램파트 안에 있지 않다면, 공격을 받으면 자동으로 반격합니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a>
공격할 대상 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 공격 가능한 올바른 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>ATTACK</code> 바디 파트가 없습니다.
{% endapi_return_codes %}



{% api_method attackController 'target' A %}

```javascript
if(creep.room.controller && !creep.room.controller.my) {
    if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

컨트롤러의 다운그레이드 타이머를 <code>CLAIM</code> 바디 파트당 300틱 감소시키거나, 예약(reservation) 타이머를 <code>CLAIM</code> 바디 파트당 1틱 감소시킵니다. 공격 대상 컨트롤러가 이미 소유(owned) 상태라면, 이후 1,000틱 동안 업그레이드하거나 다시 공격할 수 없습니다. 대상은 크립과 인접한 칸에 있어야 합니다.

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
대상 컨트롤러 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 올바른 점유/예약 컨트롤러 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>CLAIM</code> 바디 파트가 충분하지 않습니다.
ERR_TIRED | 다음 공격이 가능해질 때까지 기다려야 합니다.
{% endapi_return_codes %}



{% api_method build 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
if(target) {
    if(creep.build(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

운반 중인 에너지를 사용해 대상 건설 현장(construction site)에서 구조물을 건설합니다. <code>WORK</code> 및 <code>CARRY</code> 바디 파트가 필요합니다. 대상은 크립으로부터 3칸 이내에 있어야 합니다.

{% api_method_params %}
target : <a href="#ConstructionSite">ConstructionSite</a>
건설할 대상 건설 현장입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_NOT_ENOUGH_RESOURCES | 크립이 운반 중인 에너지가 없습니다.
ERR_INVALID_TARGET | 대상이 올바른 건설 현장 객체가 아니거나, 여기에 구조물을 지을 수 없습니다(아마 같은 칸에 크립이 있기 때문일 수 있습니다).
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>WORK</code> 바디 파트가 없습니다.
{% endapi_return_codes %}



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
ERR_NOT_FOUND | 지정한 이름의 명령(order)을 찾을 수 없습니다.
{% endapi_return_codes %}



{% api_method claimController 'target' A %}

```javascript
if(creep.room.controller) {
    if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

중립 컨트롤러를 점유(claim)하여 내 통제하에 둡니다. <code>CLAIM</code> 바디 파트가 필요합니다. 대상은 크립과 인접한 칸에 있어야 합니다. 새 방을 점유하려면 해당하는 글로벌 컨트롤 레벨(GCL)이 필요합니다. GCL이 부족하다면, 대신 이 방을 <a href="#reserveController">예약(reserve)</a>하는 것을 고려하세요. <a href="/control.html#Global-Control-Level">자세히 보기</a>

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
대상 컨트롤러 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 올바른 중립 컨트롤러 객체가 아닙니다.
ERR_FULL | 초보 구역(Novice Area)에서는 3개를 초과하여 방을 점유할 수 없습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>CLAIM</code> 바디 파트가 없습니다.
ERR_GCL_NOT_ENOUGH | 글로벌 컨트롤 레벨(GCL)이 충분하지 않습니다.
{% endapi_return_codes %}



{% api_method dismantle 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_STRUCTURES,
	{filter: {structureType: STRUCTURE_WALL}});
if(target) {
    if(creep.dismantle(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

건설 가능한 어떤 구조물(적 구조물 포함)이든 해체(dismantle)하며, 수리에 사용된 에너지의 50%를 돌려줍니다. <code>WORK</code> 바디 파트가 필요합니다. 크립에 비어 있는 <code>CARRY</code> 바디 파트가 있으면 에너지가 그 안에 들어가고, 그렇지 않으면 바닥에 드롭됩니다. 대상은 크립과 인접한 칸에 있어야 합니다.

{% api_method_params %}
target : <a href="#Structure">Structure</a>
대상 구조물입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 올바른 구조물 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>WORK</code> 바디 파트가 없습니다.
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
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_ARGS | resourceType이 올바른 <code>RESOURCE_*</code> 상수가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 크립에 지정한 양의 자원이 없습니다.
{% endapi_return_codes %}



{% api_method generateSafeMode 'target' A %}

```javascript
if(creep.generateSafeMode(creep.room.controller) == ERR_NOT_IN_RANGE) {
    creep.moveTo(creep.room.controller);
}

```

방 컨트롤러에 “사용 가능한 세이프 모드 발동 횟수”를 1회 추가합니다. 크립은 대상 컨트롤러와 인접한 칸에 있어야 하며, ghodium 자원 1000을 보유하고 있어야 합니다.

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
대상 방 컨트롤러입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_NOT_ENOUGH_RESOURCES | 크립에 ghodium이 충분하지 않습니다.
ERR_INVALID_TARGET | 대상이 올바른 컨트롤러 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
{% endapi_return_codes %}



{% api_method getActiveBodyparts 'type' 0 %}

```javascript
const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.getActiveBodyparts(ATTACK) == 0;
    }
});
if(target) {
    creep.moveTo(target);
}
```

지정한 타입의 “살아있는(live)” 바디 파트 수를 가져옵니다. 완전히 파괴된 파트는 포함되지 않습니다.

{% api_method_params %}
type : string
바디 파트 타입이며, 아래 상수 중 하나입니다:
						<ul>
							<li><code>MOVE</code></li>
							<li><code>WORK</code></li>
							<li><code>CARRY</code></li>
							<li><code>ATTACK</code></li>
							<li><code>RANGED_ATTACK</code></li>
							<li><code>HEAL</code></li>
							<li><code>TOUGH</code></li>
						</ul>

{% endapi_method_params %}


### 반환 값

바디 파트 개수를 나타내는 숫자입니다.

{% api_method harvest 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
if(target) {
    if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

소스에서 에너지를 채집하거나, 미네랄/디포짓에서 자원을 채집합니다. <code>WORK</code> 바디 파트가 필요합니다. 크립에 비어 있는 <code>CARRY</code> 바디 파트가 있으면 채집한 자원이 그 안에 들어가고, 그렇지 않으면 바닥에 드롭됩니다. 대상은 크립과 인접한 칸에 있어야 합니다.

{% api_method_params %}
target : <a href="#Source">Source</a>, <a href="#Mineral">Mineral</a>, <a href="#Deposit">Deposit</a>
채집 대상 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아니거나, 방 컨트롤러가 다른 플레이어에게 점유/예약되어 있습니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_NOT_FOUND | 익스트랙터(Extractor)를 찾을 수 없습니다. 미네랄을 채집하려면 익스트랙터 구조물을 건설해야 합니다. <a href="/resources.html">자세히 보기</a>
ERR_NOT_ENOUGH_RESOURCES | 대상에 채집 가능한 에너지 또는 미네랄이 없습니다.
ERR_INVALID_TARGET | 대상이 올바른 소스/미네랄 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_TIRED | 익스트랙터 또는 디포짓이 아직 쿨다운 중입니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>WORK</code> 바디 파트가 없습니다.
{% endapi_return_codes %}



{% api_method heal 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
    filter: function(object) {
        return object.hits < object.hitsMax;
    }
});
if(target) {
    if(creep.heal(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

자기 자신 또는 다른 크립을 치유합니다. 대상 크립의 손상된 바디 파트 기능을 복구하고 hits 카운터를 증가시킵니다. <code>HEAL</code> 바디 파트가 필요합니다. 대상은 크립과 인접한 칸에 있어야 합니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>
대상 크립 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 올바른 크립 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>HEAL</code> 바디 파트가 없습니다.
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

지정한 방향으로 크립을 1칸 이동시킵니다. <code>MOVE</code> 바디 파트가 필요하며, 또는 근처의 다른 크립이 이 크립을 <a href="#Creep.pull">끌어당기며(pull)</a> 이동시켜야 합니다. 근처 크립을 대상으로 <code>move</code>를 호출하는 경우에는 <code>ERR_TIRED</code> 및 <code>ERR_NO_BODYPART</code> 검사가 생략되고, 그렇지 않으면 <code>ERR_NOT_IN_RANGE</code> 검사가 생략됩니다.

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
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_TIRED | 크립의 피로도(fatigue) 값이 0이 아닙니다.
ERR_NO_BODYPART | 이 크립의 바디에 MOVE 바디 파트가 없습니다.
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

지정한 미리 계산된 경로를 사용해 크립을 이동시킵니다. <code>MOVE</code> 바디 파트가 필요합니다.

{% api_method_params %}
path : array|string
<a href="#Room.findPath"><code>Room.findPath</code></a>, <a href="#RoomPosition.findPathTo"><code>RoomPosition.findPathTo</code></a>, <a href="#PathFinder.search"><code>PathFinder.search</code></a> 메서드가 반환한 경로 값입니다. 배열 형태와 직렬화된 문자열 형태를 모두 지원합니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_NOT_FOUND | 지정한 경로가 크립의 현재 위치와 맞지 않습니다.
ERR_INVALID_ARGS | <code>path</code>가 올바른 경로 배열이 아닙니다.
ERR_TIRED | 크립의 피로도(fatigue) 값이 0이 아닙니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>MOVE</code> 바디 파트가 없습니다.
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

같은 방 안에서 대상까지의 최적 경로를 찾아 이동합니다. <a href="#RoomPosition.findPathTo">pos.findPathTo()</a>와 <a href="#Creep.move">move()</a>를 연속으로 호출하는 단축형입니다. 대상이 다른 방에 있다면, 해당 방으로 향하는 적절한 출구가 목표로 사용됩니다. <code>MOVE</code> 바디 파트가 필요합니다.

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
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_TIRED | 크립의 피로도(fatigue) 값이 0이 아닙니다.
ERR_NO_BODYPART | 이 크립의 바디에 MOVE 바디 파트가 없습니다.
ERR_INVALID_TARGET | 제공된 대상이 올바르지 않습니다.
ERR_NO_PATH | 대상까지의 경로를 찾을 수 없습니다.
ERR_NOT_FOUND | 크립에 재사용할 메모리 경로가 없습니다.
{% endapi_return_codes %}



{% api_method notifyWhenAttacked 'enabled' A %}

```javascript
if(creep.memory.role == 'scout') {
	creep.notifyWhenAttacked(false);
}
else {
	creep.notifyWhenAttacked(true);
}
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
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
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

아이템(바닥에 떨어진 에너지 조각)을 줍습니다. <code>CARRY</code> 바디 파트가 필요합니다. 대상은 크립과 같은 칸 또는 인접한 칸에 있어야 합니다.

{% api_method_params %}
target : <a href="#Resource">Resource</a>
줍는 대상 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 줍기 가능한 올바른 객체가 아닙니다.
ERR_FULL | 크립이 더 이상 자원을 받을 수 없습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
{% endapi_return_codes %}



{% api_method pull 'target' 0 %}

```javascript
creep1.move(TOP);
creep1.pull(creep2);
creep2.move(creep1);
```

```javascript
const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
    filter: function(object) {
        return (object.getActiveBodyparts(MOVE) == 0) && 
            object.memory.destinationId &&
            !object.pos.isNearTo(Game.getObjectById(object.memory.destinationId));
    }
});
if(target) {
    if(creep.pull(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    } else {
        target.move(creep);
        if(creep.pos.isNearTo(Game.getObjectById(target.memory.destinationId))) {
            creep.move(creep.pos.getDirectionTo(target));
        } else {
            creep.moveTo(Game.getObjectById(target.memory.destinationId));
        }
    }
}
```

다른 크립이 이 크립을 따라오도록 도와줍니다. 대상 크립의 이동으로 생성되는 피로도는 대상이 아니라 이 크립에 추가됩니다. <code>MOVE</code> 바디 파트가 필요합니다. 대상은 크립과 인접한 칸에 있어야 합니다. 이 크립은 다른 곳으로 <a href="#Creep.move">이동</a>해야 하고, 대상은 이 크립을 향해 <a href="#Creep.move">이동</a>해야 합니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>
대상 크립입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 제공된 대상이 올바르지 않습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
{% endapi_return_codes %}



{% api_method rangedAttack 'target' A %}

```javascript
const targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
if(targets.length > 0) {
    creep.rangedAttack(targets[0]);
}

```

다른 크립 또는 구조물에 원거리 공격을 수행합니다. <code>RANGED_ATTACK</code> 바디 파트가 필요합니다. 대상이 램파트 안에 있으면, 대신 램파트가 공격됩니다. 대상은 크립으로부터 3칸 이내에 있어야 합니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a>
공격할 대상 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 공격 가능한 올바른 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>RANGED_ATTACK</code> 바디 파트가 없습니다.
{% endapi_return_codes %}



{% api_method rangedHeal 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
    filter: function(object) {
        return object.hits < object.hitsMax;
    }
});
if(target) {
    creep.moveTo(target);
    if(creep.pos.isNearTo(target)) {
        creep.heal(target);
    }
    else {
        creep.rangedHeal(target);
    }
}
```

거리에서 다른 크립을 치유합니다. 대상 크립의 손상된 바디 파트 기능을 복구하고 hits 카운터를 증가시킵니다. <code>HEAL</code> 바디 파트가 필요합니다. 대상은 크립으로부터 3칸 이내에 있어야 합니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>
대상 크립 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 올바른 크립 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>HEAL</code> 바디 파트가 없습니다.
{% endapi_return_codes %}



{% api_method rangedMassAttack '' A %}

```javascript
const targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
if(targets.length > 0) {
    creep.rangedMassAttack();
}
```

반경 3칸 내의 모든 적 크립 또는 구조물을 원거리 광역 공격합니다. <code>RANGED_ATTACK</code> 바디 파트가 필요합니다. 공격력은 각 대상까지의 거리에 따라 달라집니다. 아군 유닛은 영향을 받지 않습니다.



### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>RANGED_ATTACK</code> 바디 파트가 없습니다.
{% endapi_return_codes %}



{% api_method repair 'target' A %}

```javascript
const targets = creep.room.find(FIND_STRUCTURES, {
    filter: object => object.hits < object.hitsMax
});

targets.sort((a,b) => a.hits - b.hits);

if(targets.length > 0) {
    if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0]);
    }
}
```

운반 중인 에너지를 사용해 손상된 구조물을 수리합니다. <code>WORK</code> 및 <code>CARRY</code> 바디 파트가 필요합니다. 대상은 크립으로부터 3칸 이내에 있어야 합니다.

{% api_method_params %}
target : <a href="#Structure">Structure</a>
수리할 대상 구조물입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_NOT_ENOUGH_RESOURCES | 크립이 운반 중인 에너지가 없습니다.
ERR_INVALID_TARGET | 대상이 올바른 구조물 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>WORK</code> 바디 파트가 없습니다.
{% endapi_return_codes %}



{% api_method reserveController 'target' A %}

```javascript
if(creep.room.controller) {
    if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

다른 플레이어가 중립 컨트롤러를 점유(claim)하지 못하도록 일시적으로 차단하고, 에너지 소스를 최대 용량으로 복구합니다. 매 틱마다 이 명령은 컨트롤러가 사용 불가(점유 불가)한 기간 카운터를 <code>CLAIM</code> 바디 파트당 1틱씩 증가시킵니다. 유지할 수 있는 최대 예약 기간은 5,000틱입니다. 대상은 크립과 인접한 칸에 있어야 합니다.

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
예약할 대상 컨트롤러 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 올바른 중립 컨트롤러 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>CLAIM</code> 바디 파트가 없습니다.
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
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
{% endapi_return_codes %}



{% api_method signController 'target, text' A %}

```javascript
if(creep.room.controller) {
    if(creep.signController(creep.room.controller, "I'm going to claim this room in a few days. I warned ya!") == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

모든 플레이어에게 보이는 임의의 텍스트로 컨트롤러에 서명(sign)합니다. 이 텍스트는 방 UI와 월드 맵에 표시되며, API로도 접근할 수 있습니다. 소유되지 않은 컨트롤러와 적 컨트롤러에도 서명할 수 있습니다. 대상은 크립과 인접한 칸에 있어야 합니다. 빈 문자열을 전달하면 서명을 제거합니다.

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
서명할 대상 컨트롤러 객체입니다.
===
text : string
서명 텍스트입니다. 문자열은 100자 이후 잘립니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_INVALID_TARGET | 대상이 올바른 컨트롤러 객체가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
{% endapi_return_codes %}



{% api_method suicide '' A %}



크립을 즉시 자살시킵니다.



### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
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
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_NOT_ENOUGH_RESOURCES | 크립에 지정한 양의 자원이 없습니다.
ERR_INVALID_TARGET | 대상이 해당 자원을 담을 수 있는 올바른 객체가 아닙니다.
ERR_FULL | 대상이 더 이상 자원을 받을 수 없습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_INVALID_ARGS | resourceType이 <code>RESOURCE_*</code> 상수 중 하나가 아니거나 amount가 올바르지 않습니다.
{% endapi_return_codes %}



{% api_method upgradeController 'target' A %}

```javascript
if(creep.room.controller) {
    if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
    }
}

```

운반 중인 에너지를 사용해 내 컨트롤러를 다음 레벨로 업그레이드합니다. 컨트롤러 업그레이드는 동시에 글로벌 컨트롤 레벨(GCL)도 증가시킵니다. <code>WORK</code> 및 <code>CARRY</code> 바디 파트가 필요합니다. 대상은 크립으로부터 3칸 이내에 있어야 합니다.

완전히 업그레이드된 레벨 8 컨트롤러는, 크립 능력과 무관하게 틱당 15 에너지 유닛을 초과하여 업그레이드할 수 없습니다. 현재 틱에 <code>upgradeController</code>를 수행한 모든 크립의 누적 효과가 고려됩니다. 이 제한은 <a href="/resources.html">ghodium 미네랄 부스트</a>를 사용해 늘릴 수 있습니다.

컨트롤러를 업그레이드하면 `ticksToDowngrade` 타이머가 100 증가합니다. 컨트롤러가 레벨업하려면 이 타이머가 가득 차 있어야 합니다.

{% api_method_params %}
target : <a href="#StructureController">StructureController</a>
업그레이드할 대상 컨트롤러 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 크립 또는 대상 컨트롤러의 소유자가 아닙니다.
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_NOT_ENOUGH_RESOURCES | 크립이 운반 중인 에너지가 없습니다.
ERR_INVALID_TARGET | 대상이 올바른 컨트롤러 객체가 아니거나, 컨트롤러 업그레이드가 차단되어 있습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_NO_BODYPART | 이 크립의 바디에 <code>WORK</code> 바디 파트가 없습니다.
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
ERR_BUSY | 크립이 아직 생성(spawning) 중입니다.
ERR_NOT_ENOUGH_RESOURCES | 대상에 지정한 양의 자원이 없습니다.
ERR_INVALID_TARGET | 대상이 해당 자원을 담을 수 있는 올바른 객체가 아닙니다.
ERR_FULL | 크립의 적재량이 가득 찼습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다.
ERR_INVALID_ARGS | resourceType이 <code>RESOURCE_*</code> 상수 중 하나가 아니거나 amount가 올바르지 않습니다.
{% endapi_return_codes %}

