# Room

내 유닛과 구조물이 존재하는 “방(Room)”을 나타내는 객체입니다.
주변을 살펴보고, 경로를 찾는 등 다양한 작업에 사용할 수 있습니다. 방 안의 모든 `RoomObject`는 `room` 속성으로
연결된 `Room` 인스턴스를 포함합니다.

{% api_property controller '<a href="#StructureController">StructureController</a>' %}



이 방의 컨트롤러 구조물입니다. 존재하지 않으면 undefined입니다.



{% api_property energyAvailable 'number' %}



이 방의 모든 스폰과 익스텐션에 현재 사용 가능한 에너지 총량입니다.



{% api_property energyCapacityAvailable 'number' %}



이 방의 모든 스폰과 익스텐션의 <code>energyCapacity</code> 총합입니다.


{% api_property memory 'any' %}

```javascript
room.memory.stage = 2;
```

<code>Memory.rooms[room.name]</code>의 단축 접근자입니다. 방별 메모리 데이터 객체에 빠르게 접근할 때 사용할 수 있습니다. <a href="/global-objects.html#Memory-object">메모리에 대해 더 알아보기</a>



{% api_property name 'string' %}



방 이름입니다.



{% api_property storage '<a href="#StructureStorage">StructureStorage</a>' %}



이 방의 스토리지 구조물입니다. 존재하지 않으면 undefined입니다.



{% api_property terminal '<a href="#StructureTerminal">StructureTerminal</a>' %}



이 방의 터미널 구조물입니다. 존재하지 않으면 undefined입니다.



{% api_property visual '<a href="#RoomVisual">RoomVisual</a>' %}



이 방에 대한 <a href="#RoomVisual">RoomVisual</a> 객체입니다. 이 객체를 사용해 방 안에 간단한 도형(선, 원, 텍스트 라벨)을 그릴 수 있습니다.



{% api_method Room.serializePath 'path' 1 %}

```javascript
const path = spawn.pos.findPathTo(source);
Memory.path = Room.serializePath(path);
creep.moveByPath(Memory.path);
```

경로 배열을 메모리에 저장하기 적합한 짧은 문자열 표현으로 직렬화합니다.

{% api_method_params %}
path : array
<code><a href="#Room.findPath">Room.findPath</a></code>에서 가져온 경로 배열입니다.
{% endapi_method_params %}


### 반환 값

주어진 경로의 직렬화된 문자열 형태입니다.

{% api_method Room.deserializePath 'path' 1 %}

```javascript
const path = Room.deserializePath(Memory.path);
creep.moveByPath(path);
```

짧은 문자열 경로 표현을 배열 형태로 역직렬화합니다.

{% api_method_params %}
path : string
직렬화된 경로 문자열입니다.
{% endapi_method_params %}


### 반환 값

경로 배열입니다.

{% api_method createConstructionSite 'x, y, structureType, [name]|pos, structureType, [name]' A %}

```javascript
Game.rooms.sim.createConstructionSite(10, 15, STRUCTURE_ROAD);
```

```javascript
Game.rooms.sim.createConstructionSite(10, 15, STRUCTURE_SPAWN, 
    'MySpawn2');
```

지정한 위치에 새 <a href="#ConstructionSite">ConstructionSite</a>를 생성합니다.

{% api_method_params %}
x : number
X 좌표입니다.
===
y : number
Y 좌표입니다.
===
pos : object
<a href="#RoomPosition">RoomPosition</a> 객체 또는 <a href="#RoomPosition">RoomPosition</a>을 포함하는 어떤 객체든 가능합니다.
===
structureType : string
<code>STRUCTURE_*</code> 상수 중 하나입니다.
===
name (optional) : string
이름을 지원하는 구조물의 이름입니다(현재는 스폰만 해당). 이름 길이 제한은 100자입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_INVALID_TARGET | 지정한 위치에 구조물을 배치할 수 없습니다.
ERR_FULL | 건설 현장이 너무 많습니다. 플레이어당 최대 건설 현장 수는 100개입니다.
ERR_INVALID_ARGS | 위치가 올바르지 않습니다.
ERR_NOT_OWNER | 이 방이 적 플레이어에게 점유(claim) 또는 예약(reserve)되어 있습니다.
ERR_RCL_NOT_ENOUGH | 방 컨트롤러 레벨이 부족합니다. <a href="/control.html">자세히 보기</a>
{% endapi_return_codes %}



{% api_method createFlag 'x, y, [name], [color], [secondaryColor]|pos, [name], [color], [secondaryColor]' A %}

```javascript
Game.rooms.sim.createFlag(5, 12, 'Flag1');
```

지정한 위치에 새 <a href="#Flag">Flag</a>를 생성합니다.

{% api_method_params %}
x : number
X 좌표입니다.
===
y : number
Y 좌표입니다.
===
pos : object
<a href="#RoomPosition">RoomPosition</a> 객체 또는 <a href="#RoomPosition">RoomPosition</a>을 포함하는 어떤 객체든 가능합니다.
===
name (optional) : string
새 플래그의 이름입니다. 유일해야 하며, 즉 <code>Game.flags</code> 객체에 같은 이름(해시 키)의 다른 플래그가 없어야 합니다. 지정하지 않으면 무작위 이름이 생성됩니다. 최대 길이는 100자입니다.
===
color (optional) : number
새 플래그의 색상입니다. <code>COLOR_*</code> 상수 중 하나여야 합니다. 기본값은 <code>COLOR_WHITE</code>입니다.
===
secondaryColor (optional) : string
새 플래그의 보조 색상입니다. <code>COLOR_*</code> 상수 중 하나여야 합니다. 기본값은 <code>color</code>와 같습니다.
{% endapi_method_params %}


### 반환 값

새 플래그의 이름 또는 다음 오류 코드 중 하나를 반환합니다:
{% api_return_codes %}
ERR_NAME_EXISTS | 같은 이름의 플래그가 이미 존재합니다.
ERR_INVALID_ARGS | 위치 또는 이름 또는 색상 상수가 올바르지 않습니다.
ERR_FULL | 플래그가 너무 많습니다. 플레이어당 최대 플래그 수는 10000개입니다.
{% endapi_return_codes %}



{% api_method find 'type, [opts]' 2 %}

```javascript
const targets = creep.room.find(FIND_DROPPED_RESOURCES);
if(targets.length) {
    creep.moveTo(targets[0]);
    creep.pickup(targets[0]);
}
```

```javascript
const extensions = Game.spawns['Spawn1'].room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_EXTENSION }
});
console.log('Spawn has '+extensions.length+' extensions available');
```

```javascript
const targets = creep.room.find(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.getActiveBodyparts(ATTACK) == 0;
    }
});
```

방에서 지정한 타입의 모든 객체를 찾습니다. 사용자 정의 필터를 적용하기 전에, 해당 방과 타입에 대해 결과가 자동으로 캐시됩니다. 이 자동 캐시는 틱이 끝날 때까지 유지됩니다.

{% api_method_params %}
type : number
<code>FIND_*</code> 상수 중 하나입니다.
===
opts (optional) : object
추가 옵션을 포함하는 객체입니다:
						<ul>
							<li>
								<div class="api-arg-title">filter</div>
								<div class="api-arg-type">object, function, string</div>
								<div class="api-arg-desc">결과 목록은 <a href="https://lodash.com/docs#filter">Lodash.filter</a> 메서드로 필터링됩니다.</div>
							</li>
						</ul>

{% endapi_method_params %}


### 반환 값

찾은 객체의 배열입니다.

constant|type|description
---|---|---
`FIND_EXIT_TOP` | RoomPosition | 방의 위쪽에 있는 출구 위치만.
`FIND_EXIT_RIGHT` | RoomPosition | 방의 오른쪽에 있는 출구 위치만.
`FIND_EXIT_BOTTOM` | RoomPosition | 방의 아래쪽에 있는 출구 위치만.
`FIND_EXIT_LEFT` | RoomPosition | 방의 왼쪽에 있는 출구 위치만.
`FIND_EXIT` | RoomPosition | 모든 출구 위치.
`FIND_CREEPS` | Creep | 모든 크립.
`FIND_MY_CREEPS` | Creep | 내 소유의 크립만.
`FIND_HOSTILE_CREEPS` | Creep | 내 소유가 아닌 크립만.
`FIND_POWER_CREEPS` | PowerCreep | 모든 파워 크립.
`FIND_MY_POWER_CREEPS` | PowerCreep | 내 소유의 파워 크립만.
`FIND_HOSTILE_POWER_CREEPS` | PowerCreep | 내 소유가 아닌 파워 크립만.
`FIND_SOURCES_ACTIVE` | Source | 에너지가 남아있는 소스만.
`FIND_SOURCES` | Source | 모든 소스.
`FIND_DROPPED_RESOURCES` | Resource | 바닥에 떨어진 모든 자원.
`FIND_STRUCTURES` | Structure | 모든 구조물.
`FIND_MY_STRUCTURES` | Structure | 내 소유의 구조물만(중립 구조물은 포함하지 않음).
`FIND_HOSTILE_STRUCTURES` | Structure | 내 소유가 아닌 구조물만(중립 구조물은 포함하지 않음).
`FIND_FLAGS` | Flag | 모든 플래그
`FIND_MY_SPAWNS` | StructureSpawn | 내 소유의 스폰만.
`FIND_HOSTILE_SPAWNS` | StructureSpawn | 내 소유가 아닌 스폰.
`FIND_CONSTRUCTION_SITES` | ConstructionSite | 모든 건설 현장.
`FIND_MY_CONSTRUCTION_SITES` | ConstructionSite | 내 소유의 건설 현장만.
`FIND_HOSTILE_CONSTRUCTION_SITES` | ConstructionSite | 내 소유가 아닌 건설 현장만.
`FIND_MINERALS` | Mineral | 모든 미네랄 매장지.
`FIND_NUKES` | Nuke | 발사된 모든 핵.
`FIND_TOMBSTONES` | Tombstone | 모든 톰스톤.
`FIND_RUINS` | Ruin | 모든 유적(ruin)

{% api_method findExitTo 'room' 3 %}

```javascript
const exitDir = creep.room.findExitTo(anotherCreep.room);
const exit = creep.pos.findClosestByRange(exitDir);
creep.moveTo(exit);

// or simply:
creep.moveTo(anotherCreep);
creep.moveTo(new RoomPosition(25,25, anotherCreep.pos.roomName));
```

다른 방으로 가는 경로 상에서 출구 방향을 찾습니다. 다만 방 사이 이동을 위해 이 메서드가 반드시 필요한 것은 아닙니다. 다른 방에 있는 대상을 <a href="#Creep.moveTo"><code>Creep.moveTo</code></a>에 그대로 넘기면 됩니다.

{% api_method_params %}
room : string, <a href="#Room">Room</a>
다른 방의 이름 또는 Room 객체입니다.
{% endapi_method_params %}


### 반환 값

아래 방향 상수 중 하나를 반환합니다:

* `FIND_EXIT_TOP`
* `FIND_EXIT_RIGHT`
* `FIND_EXIT_BOTTOM`
* `FIND_EXIT_LEFT`

또는 아래 오류 코드 중 하나를 반환합니다:
{% api_return_codes %}
ERR_NO_PATH | 경로를 찾을 수 없습니다.
ERR_INVALID_ARGS | 위치 정보가 올바르지 않습니다.
{% endapi_return_codes %}



{% api_method findPath 'fromPos, toPos, [opts]' 3 %}

```javascript
const path = creep.room.findPath(creep.pos, targetPos);
creep.move(path[0].direction);
```

```javascript
PathFinder.use(true);
const path = creep.room.findPath(creep.pos, targetPos, {
    costCallback: function(roomName, costMatrix) {
	    if(roomName == 'W1N5') {
		    // set anotherCreep's location as walkable
			costMatrix.set(anotherCreep.pos.x, anotherCreep.pos.y, 0);
			// set flag location as an obstacle
			costMatrix.set(flag.pos.x, flag.pos.y, 255);
			// increase cost for (25,20) location to 50
			costMatrix.set(25, 20, 50);
		}
	}
});

```

```javascript
let path = creep.room.findPath(creep.pos, targetPos, {maxOps: 200});
if( !path.length || !targetPos.isEqualTo(path[path.length - 1]) ) {
    path = creep.room.findPath(creep.pos, targetPos, {
		maxOps: 1000, ignoreDestructibleStructures: true
	});
}
if( path.length ) {
    creep.move(path[0].direction);
}
```

<a href="http://en.wikipedia.org/wiki/Jump_point_search" target="_blank">Jump Point Search 알고리즘</a>을 사용해 방 안에서 fromPos부터 toPos까지의 최적 경로를 찾습니다.

{% api_method_params %}
fromPos : <a href="#RoomPosition">RoomPosition</a>
시작 위치입니다.
===
toPos : <a href="#RoomPosition">RoomPosition</a>
끝 위치입니다.
===
opts (optional) : object
추가 경로 탐색 플래그를 담고 있는 객체입니다:
<ul>
    <li>
        <div class="api-arg-title">ignoreCreeps</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">크립이 있는 칸을 이동 가능한 것으로 취급합니다. 이동 중인 크립이 너무 많을 때 등 일부 상황에서 유용할 수 있습니다. 기본값은 false입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">ignoreDestructibleStructures</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">파괴 가능한 구조물(건설된 벽, 램파트, 스폰, 익스텐션)이 있는 칸을 이동 가능한 것으로 취급합니다. 기본값은 false입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">ignoreRoads</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">도로(road) 구조물을 무시합니다. 이 옵션을 켜면 탐색 속도가 빨라질 수 있습니다. 기본값은 false입니다. 이 옵션은 새 <a href="#PathFinder"><code>PathFinder</code></a>가 활성화되어 있을 때만 사용됩니다.</div>
    </li>
    <li>
        <div class="api-arg-title">costCallback</div>
        <div class="api-arg-type">function(string, CostMatrix)</div>
        <div class="api-arg-desc">탐색 중 어떤 방에 대해서든 <a href="#PathFinder-CostMatrix"><code>CostMatrix</code></a>를 수정할 수 있는 콜백입니다. 콜백은 <code>roomName</code>과 <code>costMatrix</code> 두 인자를 받습니다. <code>costMatrix</code> 인스턴스를 사용해 위치 비용을 변경할 수 있습니다. 이 콜백에서 새 매트릭스를 반환하면, 내장된 캐시 매트릭스 대신 그 매트릭스가 사용됩니다. 이 옵션은 새 <a href="#PathFinder"><code>PathFinder</code></a>가 활성화되어 있을 때만 사용됩니다.</div>
    </li>
    <li>
        <div class="api-arg-title">ignore</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">탐색 중 이동 가능한 타일로 취급할 방의 객체 또는 <a href="#RoomPosition">RoomPosition</a> 객체 배열입니다. 새 <a href="#PathFinder"><code>PathFinder</code></a>가 활성화되어 있을 때는 이 옵션을 사용할 수 없습니다(대신 <code>costCallback</code>을 사용하세요).</div>
    </li>
    <li>
        <div class="api-arg-title">avoid</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">탐색 중 장애물로 취급할 방의 객체 또는 <a href="#RoomPosition">RoomPosition</a> 객체 배열입니다. 새 <a href="#PathFinder"><code>PathFinder</code></a>가 활성화되어 있을 때는 이 옵션을 사용할 수 없습니다(대신 <code>costCallback</code>을 사용하세요).</div>
    </li>
    <li>
        <div class="api-arg-title">maxOps</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">가능한 경로 탐색 연산의 최대 한도입니다. 1 op ~ 0.001 CPU 비율을 기준으로 탐색에 사용할 CPU를 제한할 수 있습니다. 기본값은 2000입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">heuristicWeight</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">A* 공식 <code>F = G + weight * H</code>에서 휴리스틱에 적용할 가중치입니다. A* 알고리즘의 동작을 이해하고 있을 때만 사용하세요. 기본값은 1.2입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">serialize</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">true이면 결과 경로를 <code><a href="#Room.serializePath">Room.serializePath</a></code>로 직렬화합니다. 기본값은 false입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">maxRooms</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">탐색이 허용되는 최대 방 수입니다. 기본값(및 최대값)은 16입니다. 이 옵션은 새 <a href="#PathFinder"><code>PathFinder</code></a>가 활성화되어 있을 때만 사용됩니다.</div>
    </li>
    <li>
        <div class="api-arg-title">range</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">대상으로부터 지정한 직선 거리(range) 안의 위치까지 경로를 찾습니다. 기본값은 0입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">plainCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">평지(plain)에서 이동 비용입니다. 기본값은 1입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">swampCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">늪지(swamp)에서 이동 비용입니다. 기본값은 5입니다.</div>
    </li>
</ul>

{% endapi_method_params %}


### 반환 값

아래 형식의 경로 스텝 배열을 반환합니다:

```javascript-content
[
    { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
    { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
    { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
    ...
]
```

{% api_method getEventLog '[raw]' 1 %}

```javascript
// track events performed by a particular creep
_.filter(creep.room.getEventLog(), {objectId: creep.id});
```

```javascript
// Find all hostile actions against your creeps and structures
_.forEach(Game.rooms, room => {
    let eventLog = room.getEventLog();
    let attackEvents = _.filter(eventLog, {event: EVENT_ATTACK});
    attackEvents.forEach(event => {
        let target = Game.getObjectById(event.data.targetId);
        if(target && target.my) {
            console.log(event);
        }
    });
});
```

이 방에서 “이전 틱”에 발생한 이벤트 배열을 반환합니다.

{% api_method_params %}
raw (optional) : boolean
이 파라미터가 false 또는 undefined이면, 이 메서드는 `JSON.parse`로 파싱된 객체를 반환하며(첫 접근 시 CPU 비용이 듭니다. 이후 호출에서는 반환 값이 캐시됩니다). `raw`가 truthy이면 문자열 형식의 원본 JSON을 반환합니다.
{% endapi_method_params %}


### 반환 값

이벤트 배열입니다. 각 이벤트는 아래 형식의 어떤 게임 액션을 나타냅니다:
 
```javascript-content
{
    event: EVENT_ATTACK,
    objectId: '54bff72ab32a10f73a57d017',
    data: { /* ... */ }
}
```

`data` 속성은 아래 표에 따라 이벤트 타입별로 다릅니다:
<table>
    <tr>
        <th>event</th><th>description</th>
    </tr>
    <tr>
        <td>`EVENT_ATTACK`</td>
        <td>
            크립 또는 구조물이 다른 객체를 공격했습니다.
            <ul>
                <li>`targetId` - 대상 객체 ID</li>
                <li>`damage` - 입힌 피해량(감소한 hits)</li>
                <li>`attackType` - 아래 상수 중 하나:
                    <ul>
                        <li>`EVENT_ATTACK_TYPE_MELEE` - 크립이 [attack](#Creep.attack)으로 공격</li>
                        <li>`EVENT_ATTACK_TYPE_RANGED` - 크립이 [rangedAttack](#Creep.rangedAttack)으로 공격, 또는 타워가 [attack](#StructureTower.attack)으로 공격</li> 
                        <li>`EVENT_ATTACK_TYPE_RANGED_MASS` - 크립이 [rangedMassAttack](#Creep.rangedMassAttack)으로 공격</li>
                        <li>`EVENT_ATTACK_TYPE_DISMANTLE` - 크립이 [dismantle](#Creep.dismantle)로 공격</li>
                        <li>`EVENT_ATTACK_TYPE_HIT_BACK` - 크립이 다른 크립의 [attack](#Creep.attack)에 반격(hit back)</li>
                        <li>`EVENT_ATTACK_TYPE_NUKE` - 핵이 착탄</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_OBJECT_DESTROYED`</td>
        <td>
            게임 오브젝트가 파괴되거나 사망했습니다.
            <ul><li>`type` - 파괴된 객체의 타입</li></ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_ATTACK_CONTROLLER`</td>
        <td>크립이 이 방에서 [`attackController`](#Creep.attackController)를 수행했습니다.</td>
    </tr>
    <tr>
        <td>`EVENT_BUILD`</td>
        <td>
            크립이 이 방에서 [`build`](#Creep.build)를 수행했습니다.
            <ul>
                <li>`targetId` - 대상 객체 ID</li>
                <li>`amount` - 증가한 건설 진행도</li>
                <li>`structureType` - STRUCTURE_* 상수 중 하나</li>
                <li>`x` - 대상 건설 현장의 X 좌표</li>
                <li>`y` - 대상 건설 현장의 Y 좌표</li>
                <li>`incomplete` - 건설 진행 상태</li>
	        </ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_HARVEST`</td>
        <td>
            크립이 이 방에서 [`harvest`](#Creep.harvest)를 수행했습니다.
            <ul>
                <li>`targetId` - 대상 객체 ID</li>
                <li>`amount` - 채집한 자원량</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_HEAL`</td>
        <td>
            크립 또는 타워가 크립을 치유했습니다.
            <ul>
                <li>`targetId` - 대상 객체 ID</li>
                <li>`amount` - 치유한 hits 양</li>
                <li>`healType` - 아래 상수 중 하나:
                    <ul>
                        <li>`EVENT_HEAL_TYPE_MELEE` - 크립이 [heal](#Creep.heal)로 치유</li>
                        <li>`EVENT_HEAL_TYPE_RANGED` - 크립이 [rangedHeal](#Creep.rangedHeal)로 치유, 또는 타워가 [heal](#StructureTower.heal)로 치유</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_REPAIR`</td>
        <td>
            크립 또는 타워가 구조물을 수리했습니다.
            <ul>
                <li>`targetId` - 대상 객체 ID</li>
                <li>`amount` - 수리한 hits 양</li> 
                <li>`energySpent` - 작업에 소비된 에너지 양</li>
            </ul>
        </td>
    </tr>        
    <tr>
        <td>`EVENT_RESERVE_CONTROLLER`</td>
        <td>
            크립이 이 방에서 [`reserveController`](#Creep.reserveController)를 수행했습니다.
            <ul>
                <li>`amount` - 증가한 예약 시간</li>
            </ul>
        </td>
    </tr> 
    <tr>
        <td>`EVENT_UPGRADE_CONTROLLER`</td>
        <td>
            크립이 이 방에서 [`upgradeController`](#Creep.upgradeController)를 수행했습니다.
            <ul>
                <li>`amount` - 증가한 컨트롤 포인트</li> 
                <li>`energySpent` - 작업에 소비된 에너지 양</li>
            </ul>
        </td>
    </tr>    
    <tr>
        <td>`EVENT_EXIT`</td>
        <td>
            크립이 다른 방으로 이동했습니다.
            <ul>
                <li>`room` - 목표 방 이름</li> 
                <li>`x`, `y` - 다른 방에서 크립이 등장한 좌표</li>
            </ul>
        </td>
    </tr>           
    <tr>
        <td>`EVENT_TRANSFER`</td>
        <td>
            링크가 [`transferEnergy`](https://docs.screeps.com/api/#StructureLink.transferEnergy)를 수행했거나, 크립이 [`transfer`](#Creep.transfer) 또는 [`withdraw`](#Creep.withdraw)를 수행했습니다.
            <ul>
                <li>`targetId` - 대상 객체 ID</li>
                <li>`resourceType` - 전송된 자원 타입</li>
                <li>`amount` - 전송된 자원량</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_POWER`</td>
        <td>
            크립의 파워 중 하나를 지정한 대상에 적용했습니다.
            <ul>
                <li>`targetId` - 대상 객체 ID</li>
                <li>`power` - 사용할 파워 능력(PWR_* 상수 중 하나)</li>
            </ul>
        </td>
    </tr>
</table>

{% api_method getPositionAt 'x, y' 1 %}

```javascript
const pos = Game.rooms.sim.getPositionAt(5,12);
const source = pos.findClosestByRange(FIND_SOURCES_ACTIVE);
```

지정한 위치에 <a href="#RoomPosition">RoomPosition</a> 객체를 생성합니다.

{% api_method_params %}
x : number
X 좌표입니다.
===
y : number
Y 좌표입니다.
{% endapi_method_params %}


### 반환 값

<a href="#RoomPosition">RoomPosition</a> 객체를 반환하며, 얻을 수 없으면 null을 반환합니다.

{% api_method getTerrain '' 0 %}

```javascript
const terrain = Game.rooms['W1N1'].getTerrain();
switch(terrain.get(10,15)) {
    case TERRAIN_MASK_WALL:
        break;
    case TERRAIN_MASK_SWAMP:
        break;
    case 0:
        break;
}
```

정적 지형 데이터에 빠르게 접근할 수 있는 <a href="#Room-Terrain">`Room.Terrain`</a> 객체를 가져옵니다. 이 메서드는 내가 접근할 수 없는 방을 포함해, 월드의 어떤 방에도 동작합니다.

### 반환 값

새 <a href="#Room-Terrain">`Room.Terrain`</a> 객체를 반환합니다.

{% api_method lookAt 'x, y|target' 2 %}

```javascript
const look = creep.room.lookAt(target);
look.forEach(function(lookObject) {
    if(lookObject.type == LOOK_CREEPS &&
       lookObject[LOOK_CREEPS].getActiveBodyparts(ATTACK) == 0) {
        creep.moveTo(lookObject.creep);
    }
});
```

지정한 방 위치에 있는 객체 목록을 가져옵니다.

{% api_method_params %}
x : number
방 내부의 X 좌표입니다.
===
y : number
방 내부의 Y 좌표입니다.
===
target : object
<a href="#RoomPosition">RoomPosition</a> 객체 또는 <a href="#RoomPosition">RoomPosition</a>을 포함하는 어떤 객체든 가능합니다.
{% endapi_method_params %}


### 반환 값

아래 형식의, 해당 위치에 있는 객체 배열을 반환합니다:

```javascript-content
[
    { type: 'creep', creep: {...} },
    { type: 'structure', structure: {...} },
    ...
    { type: 'terrain', terrain: 'swamp' }
]
```


{% api_method lookAtArea 'top, left, bottom, right, [asArray]' 2 %}

```javascript
const look = creep.room.lookAtArea(10,5,11,7);
```

지정한 방 영역(area)에 있는 객체 목록을 가져옵니다.

{% api_method_params %}
top : number
영역의 위쪽 Y 경계입니다.
===
left : number
영역의 왼쪽 X 경계입니다.
===
bottom : number
영역의 아래쪽 Y 경계입니다.
===
right : number
영역의 오른쪽 X 경계입니다.
===
asArray (optional) : boolean
true로 설정하면 결과를 평범한 배열 형태로 받습니다.
{% endapi_method_params %}


### 반환 값

`asArray`가 false 또는 undefined이면, 이 메서드는 아래 형식의 객체를 반환합니다(지정한 영역의 모든 객체 포함):

```javascript-content
// 10,5,11,7

{
    10: {
        5: [{ type: 'creep', creep: {...} },
            { type: 'terrain', terrain: 'swamp' }],
        6: [{ type: 'terrain', terrain: 'swamp' }],
        7: [{ type: 'terrain', terrain: 'swamp' }]
    },
    11: {
        5: [{ type: 'terrain', terrain: 'plain' }],
        6: [{ type: 'structure', structure: {...} },
            { type: 'terrain', terrain: 'swamp' }],
        7: [{ type: 'terrain', terrain: 'wall' }]
    }
}
```

`asArray`가 true이면, 아래 형식의 배열을 반환합니다:

```javascript-content
[
    {x: 5, y: 10, type: 'creep', creep: {...}},
    {x: 5, y: 10, type: 'terrain', terrain: 'swamp'},
    {x: 6, y: 10, type: 'terrain', terrain: 'swamp'},
    {x: 7, y: 10, type: 'terrain', terrain: 'swamp'},
    {x: 5, y: 11, type: 'terrain', terrain: 'plain'},
    {x: 6, y: 11, type: 'structure', structure: {...}},
    {x: 6, y: 11, type: 'terrain', terrain: 'swamp'},
    {x: 7, y: 11, type: 'terrain', terrain: 'wall'}
]
```


{% api_method lookForAt 'type, x, y|type, target' 1 %}

```javascript
const found = creep.room.lookForAt(LOOK_CREEPS, target);
if(found.length && found[0].getActiveBodyparts(ATTACK) == 0) {
    creep.moveTo(found[0]);
}
```

지정한 방 위치에서, 주어진 타입의 객체를 가져옵니다.

{% api_method_params %}
type : string
<code>LOOK_*</code> 상수 중 하나입니다.
===
x : number
방 내부의 X 좌표입니다.
===
y : number
방 내부의 Y 좌표입니다.
===
target : object
<a href="#RoomPosition">RoomPosition</a> 객체 또는 <a href="#RoomPosition">RoomPosition</a>을 포함하는 어떤 객체든 가능합니다.
{% endapi_method_params %}


### 반환 값

찾았다면 지정한 타입의 객체 배열을 반환합니다.

{% api_method lookForAtArea 'type, top, left, bottom, right, [asArray]' 1 %}

```javascript
const look = creep.room.lookForAtArea(LOOK_STRUCTURES,10,5,11,7);
```

지정한 방 영역(area)에서, 주어진 타입의 객체 목록을 가져옵니다.

{% api_method_params %}
type : string
<code>LOOK_*</code> 상수 중 하나입니다.
===
top : number
영역의 위쪽 Y 경계입니다.
===
left : number
영역의 왼쪽 X 경계입니다.
===
bottom : number
영역의 아래쪽 Y 경계입니다.
===
right : number
영역의 오른쪽 X 경계입니다.
===
asArray (optional) : boolean
true로 설정하면 결과를 평범한 배열 형태로 받습니다.
{% endapi_method_params %}


### 반환 값

`asArray`가 false 또는 undefined이면, 이 메서드는 아래 형식의 객체를 반환합니다(지정한 영역의 주어진 타입 객체 포함):

```javascript-content
// 10,5,11,7

{
    10: {
        5: [{...}],
        6: undefined,
        7: undefined
    },
    11: {
        5: undefined,
        6: [{...}, {...}],
        7: undefined
    }
}
```

`asArray`가 true이면, 아래 형식의 배열을 반환합니다:

```javascript-content
[
	{x: 5, y: 10, structure: {...}},
	{x: 6, y: 11, structure: {...}},
	{x: 6, y: 11, structure: {...}}
]
```

