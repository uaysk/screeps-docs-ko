# Room

객체는 유닛과 구조물이있는 방을 나타냅니다. 주변을 둘러보고 경로를 찾는 등의 작업에 사용할 수 있습니다. 각 `RoomObject`는 `room` 속성에서 연결된 `Room` 인스턴스를 포함합니다.

{% api_property controller '<a href="#StructureController">StructureController</a>' %}

방의 Controller 구조입니다(존재하는 경우). 그렇지 않으면 undefined가 됩니다.

{% api_property energyAvailable 'number' %}

방의 모든 생성물과 확장에서 사용할 수있는 전체 에너지 양입니다.

{% api_property energyCapacityAvailable 'number' %}

방의 모든 <code>energyCapacity</code>의 총 용량(capacity)입니다.

객실의 기억 단계를 2로 설정합니다.```javascript
room.memory.stage = 2;```

객실의 특정 기억 데이터 객체에 빠르게 액세스할 수 있는 편리한 방법입니다. <a href="/global-objects.html#Memory-object">메모리에 대해 자세히 알아보기</a>

{% api_property name 'string' %}

객실의 이름을 나타냅니다.

{% api_property storage '<a href="#StructureStorage">StructureStorage</a>' %}

현재 객실의 스토리지 구조를 가져옵니다(있는 경우). 존재하지 않으면 undefined로 설정됩니다.

{% api_property terminal '<a href="#StructureTerminal">StructureTerminal</a>' %}

현재 객실의 터미널 구조를 가져옵니다(있는 경우). 존재하지 않으면 undefined로 설정됩니다.

{% api_property visual '<a href="#RoomVisual">RoomVisual</a>' %}

이 방의 <a href="#RoomVisual">RoomVisual</a> 개체입니다. 이 객체를 사용하여 간단한 도형(선, 원, 텍스트 라벨)을 그릴 수 있습니다.
{% api_method Room. serializePath 'path' 1 %}
```javascript
const path = spawn.pos.findPathTo(source);
Memory.path = Room.serializePath(path);
creep.moveByPath(Memory.path);
```
이 경로 배열을 메모리에 저장하기 위해 적합한 짧은 문자열 표현으로 경로를 직렬화합니다.
{% api_method_params %}
path : array
<code><a href="#Room.findPath">Room.findPath</a></code>에서 검색된 <code>path</code> 배열입니다.

createConstructionSite('x', 'y', STRUCTURE_BRIDGE, '[name]|pos', STRUCTURE_BRIDGE, '[name]');
```

{% api_method_params %}
x : number
Y: number
structureType : number
[name] | pos : optional string
structureType : number
[name] | pos : optional string
{% endapi_method_params %}

### Return value

None.

새로운 <a href="#ConstructionSite">ConstructionSite</a>를 지정된 위치에 만듭니다.
{% api_method_params %}
x : number
X 위치입니다.
===
y : number
Y 위치입니다.
===
pos : object
<a href="#RoomPosition">RoomPosition</a> 객체나 <a href="#RoomPosition">RoomPosition</a>을 포함하는 객체일 수 있습니다.
===
structureType : string
<code>STRUCTURE_*</code> 상수 중 하나입니다.
===
name (선택사항) : string
구조물의 이름, 지원되는 경우(현재 스폰만 해당). 최대 100자까지 가능합니다.

‎{% api_method_params %}
{{#if result.code == "OK"}}
<div class="success">
  <p>작업이 성공적으로 예약되었습니다.</p>
</div>
{{/if}}
{{#if result.code == "ERR_INVALID_TARGET"}}
<div class="error">
  <p>지정된 장소에서는 구조물을 배치할 수 없습니다.</p>
</div>
{{/if}}
{{#if result.code == "ERR_FULL"}}
<div class="error">
  <p>건설 현장이 너무 많습니다. 한 플레이어당 최대 100개의 건설 현장을 가질 수 있습니다.</p>
</div>
{{/if}}
{{#if result.code == "ERR_INVALID_ARGS"}}
<div class="error">
  <p>지정한 위치가 올바르지 않습니다.</p>
</div>
{{/if}}
{{#if result.code == "ERR_NOT_OWNER"}}
<div class="error">
  <p>방이 적대적인 플레이어에게 점령되었거나 예약되어 있습니다.</p>
</div>
{{/if}}
{{#if result.code == "ERR_RCL_NOT_ENOUGH"}}
<div class="error">
  <p>룸 컨트롤러 레벨이 부족합니다.</p>
</div>
{{/if}}

### Return value

다음 코드 중 하나:
{% api_return_codes %}

{% api_method_return_types %}

Flag created.

옵션이 아닌 경우, 랜덤 이름이 생성됩니다. 최대 길이는 100자입니다.
===
color (선택 사항) : 숫자
새 깃발의 색상. <code>COLOR_*</code> 상수 중 하나여야 합니다. 기본값은 <code>COLOR_WHITE</code>입니다.
===
secondaryColor (선택 사항) : 문자열
새 깃발의 보조색. <code>COLOR_*</code> 상수 중 하나여야 합니다. 기본값은 <code>color</code>와 동일합니다.
{% endapi_method_params %}

### 반환 값
새 깃발의 이름 또는 다음 오류 코드 중 하나:
{% api_return_codes %}
ERR_NAME_EXISTS | 동일한 이름의 깃발이 이미 있습니다.
ERR_INVALID_ARGS | 위치, 이름, 색상 상수가 잘못되었습니다.

ERR_FLAG_OVERFLOW = 10000; // Too many flags

{% api_method find 'type, [opts]' 2 %}
```javascript

const targets = creep. room. find(FIND_DROPPED_RESOURCES);
if (targets. length) {
    creep. moveTo(targets[0]);
    creep. pickup(targets[0]);
}
```javascript

const extensions = Game. spawns['Spawn1']. room. find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_EXTENSION }
});
console. log('Spawn has '+extensions. length+' extensions available');
```javascript

const targets = creep. room. find(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.

방을 지정한 유형의 객체를 모두 찾습니다. 결과는 지정된 룸과 유형에 대해 사용자 정의 필터를 적용하기 전에 자동으로 캐시됩니다. 이러한 자동 캐시는 틱이 끝날 때까지 유지됩니다.
type : number
SPECIAL_FIND_* 상수 중 하나입니다.
opts (optional) : object
추가 옵션이 포함된 객체:
    <ul>
    <li>
    filter
    </li>
    </ul>
    filter : string, function
결과 목록을 Lodash.filter 메서드를 사용하여 필터링합니다.

코드나 JavaScript와 같이 번역할 필요가 없는 부분, 대문자로만 된 단어를 한국어로 번역하지 마세요.

<div>...</div>
<li>...</li>
<ul>...</ul>

{% endapi_method_params %}

`FIND_HOSTILE_CREEPS` | Creep | 오직 당신의 소유가 아닌 크립들만을 찾습니다.
`FIND_POWER_CREEPS` | PowerCreep | 모든 파워 크립들을 찾습니다.
`FIND_MY_POWER_CREEPS` | PowerCreep | 오직 당신의 소유인 파워 크립들만을 찾습니다.
`FIND_HOSTILE_POWER_CREEPS` | PowerCreep | 오직 당신의 소유가 아닌 파워 크립들만을 찾습니다.
`FIND_SOURCES_ACTIVE` | Source | 에너지를 갖고 있는 원천들만 검색합니다.
`FIND_SOURCES` | Source | 모든 원천들을 찾습니다.
`FIND_DROPPED_RESOURCES` | Resource | 떨어진 자원들 모두를 찾습니다.
`FIND_STRUCTURES` | Structure | 모든 구조물을 검색합니다.
`FIND_MY_STRUCTURES` | Structure | 오직 당신의 소유인 구조물들만을 찾습니다. 중립적인 구조물은 포함되지 않습니다.
`FIND_HOSTILE_STRUCTURES` | Structure | 오직 당신의 소유가 아닌 구조물들만을 찾습니다. 중립적인 구조물은 포함되지 않습니다.

"findExitTo" 1,
"room" 3,
"exitDir" "creep. room." -- 번역되지 않은 문자열
{% api_method roomInfo %}

```javascript
const roomId = 3;
const response = creep. roomInfo(roomId);
```javascript
const roomId = 3;
const response = creep. getRoom(roomId);
```javascript
const roomDir = 3;
const response = creep. getRoomDirectory();
```javascript
{% api_method buildConstructionSite 'constructionSite' constructionId %}

```javascript
const constructionId = 5;
const response = creep. buildConstructionSite(constructionId);
```javascript
{% api_method findConstructionSites 'constructionSite' %}

```javascript
function findConstructionSites() {
  const response = creep. findConstructionSites();
  return response;
}
```javascript
{% api_method buildStructureSpawn 'structureSpawn' structureId %}

```javascript
const structureId = 2;
const response = creep. buildStructureSpawn(structureId);
```javascript
{% api_method destroyStructureSpawn 'structureSpawn' structureId %}

```javascript
const structureId = 2;
const response = creep. destroyStructureSpawn(structureId);
```javascript
{% api_method setFindFlags 'structureSpawn' findFlags %}

```javascript
const structureSpawnId = 2;
const flags = "FIND_MY_SPAWNS, FIND_HOSTILE_SPAWNS";
const response = creep. setFindFlags(structureSpawnId, flags);
```javascript
{% api_method getFindFlags 'structureSpawn' structureSpawnId %}

```javascript
const structureSpawnId = 2;
const response = creep. getFindFlags(structureSpawnId);
```javascript
{% api_method setMyConstructionSite 'constructionSite' constructionId %}

```javascript
const constructionId = 5;
const response = creep. setMyConstructionSite(constructionId);
```javascript
{% api_method getOwnerOfConstructionSite 'constructionSite' constructionId %}

```javascript
const constructionId = 5;
const response = creep. getOwnerOfConstructionSite(constructionId);
```javascript
{% api_method setFindMyConstructionSites 'constructionSite' constructionId %}

```javascript
const constructionId = 5;
const response = creep. setFindMyConstructionSites(constructionId);
```javascript
{% api_method getFindMyConstructionSites 'constructionSite' constructionId %}

```javascript
const constructionId = 5;
const response = creep. getFindMyConstructionSites();
```javascript
{% api_method setFindHostileConstructionSites 'constructionSite' constructionId %}

```javascript
const constructionId = 5;
const response = creep. setFindHostileConstructionSites(constructionId);
```javascript
{% api_method getFindHostileConstructionSites 'constructionSite' constructionId %}

```javascript
const constructionId = 5;
const response = creep. getFindHostileConstructionSites();
```javascript
{% api_method setMinerals 'mineral' mineralId %}

```javascript
const mineralId = 1;
const response = creep. setMinerals(mineralId);
```javascript
{% api_method getMinerals 'mineral' mineralId %}

```javascript
const mineralId = 1;
const response = creep. getMinerals();
```javascript
{% api_method setNukes 'nuke' nukeId %}

```javascript
const nukeId = 2;
const response = creep. setNukes(nukeId);
```javascript
{%

닫기
다른 방으로 이동할 때 반드시 통과해야 하는 방의 출구 방향을 찾습니다. 참고로 이 메서드는 방 사이를 이동하는 데 필요한 것은 아닙니다. 대신 <a href="#Creep. moveTo"><code>Creep.moveTo</code></a> 메서드에 목표로 하는 다른 방의 이름이나 <a href="#Room">Room</a> 객체를 전달할 수 있습니다.

{% api_method_params %}
room : string, Room
다른 방 이름 또는 객체

포함되지 않음, 번역하지 마세요. JavaScript를 번역하지 마십시오. 대문자로만 된 단어는 번역하지 마세요.

### 반환값

방향 상수의 룸, 다음 중 하나:

* `FIND_EXIT_TOP`
* `FIND_EXIT_RIGHT`
* `FIND_EXIT_BOTTOM`
* `FIND_EXIT_LEFT`

또는 다음과 같은 오류 코드 중 하나:
{% api_return_codes %}
ERR_NO_PATH | Path can not be found. 
ERR_INVALID_ARGS | The location is incorrect. 
{% endapi_return_codes %}


{% api_method findPath 'fromPos, toPos, [opts]' 3 %}

```javascript
const path = creep. room. findPath(creep. pos, targetPos);
creep. move(path[0]. direction);
```

```javascript
PathFinder. use(true);
const path = creep. room. findPath(creep. position, targetPosition);
creep. move(path[0]. direction);
```

길을 찾지 못했거나 목표 위치와 일치하지 않는 경우, 병정의 방에서 다시 길을 찾습니다. 최대 연산 횟수를 200으로 설정했습니다.

```javascript
let path = creep.room.findPath(creep.pos, targetPos, {maxOps: 200});
if(!path.length || !targetPos.EqualTo(path[path.length-1]) ) {
    path = creep.room.findPath(creep.pos, targetPos, {
		maxOps: 1000, ignoreDestructibleStructures: true
	});
}
if(!path) {
    console.log("Failed to find path");
    return;
}
```

경로를 탐색할 때 방의 모서리나 가장자리에서 직선으로 연결된 최단 경로를 찾는데 사용됩니다. </div>
    </li>
    <li>
        <div class="api-arg-title">maxPathing"</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">최대 가능한 이동 경로의 수. 0으로 설정하면 무제한으로 합니다.</div>
    </li>
    <li>
        <div class="api-arg-title">maxPathY"</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">최대 가능한 이동 경로의 Y축 방향 수. 0으로 설정하면 무제한으로 합니다.</div>
    </li>
    <li>
        <div class="api-arg-title">noCreep</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">크립이 있는 칸은 건너뛰게 하는지 여부.</div>
    </li>
    <li>
        <div class="api-arg-title">pathInArray</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">경로를 배열에 담을지 여부.</div>
    </li>
    <li>
        <div class="api-arg-title">searchD"</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">찾을 검색 유형. 'diagonal'로 설정하면 대각선 이동을 포함합니다.</div>
    </li>
</ul>{%/api_method_params%}

주변에 움직이는 크립이 너무 많은 경우나 다른 상황에서 유용합니다. 기본값은 false입니다. </div>
<li>
    <div class="api-arg-title">ignoreDestructibleStructures</div>
    <div class="api-arg-type">boolean</div>
    <div class="api-arg-desc">파괴 가능한 구조물 (건설된 벽, 요새, 생성물, 확장)이 있는 광장을 걸을 수 있도록 처리합니다. 기본값은 false입니다.</div>
</li>
<li>
    <div class="api-arg-title">ignoreRoads</div>
    <div class="api-arg-type">boolean</div>
    <div class="api-arg-desc">도로 구조물을 무시합니다. 이 옵션을 활성화하면 검색 속도가 빨라질 수 있습니다. 기본값은 false입니다.</div>
</li>

new PathFinder로 enabled되면만 사용됩니다. </div>
<li>
    <div class="api-arg-title">costCallback</div>
    <div class="api-arg-type">function(string, CostMatrix)</div>
    <div class="api-arg-desc">검색 중에 특정 객실의 CostMatrix를 수정하려면이 콜백을 사용할 수 있습니다. CostMatrix에는 roomName과 costMatrix라는 두 개의 인수가 전달됩니다. costMatrix 인스턴스를 사용하여 위치 비용을 변경하십시오. 이 콜백에서 새 행렬을 반환하면 내장 캐시 대신 해당 행렬이 사용됩니다. </div>
</li>

이 옵션은 새 <a href="#PathFinder"><code>PathFinder</code></a>가 활성화되었을 때만 사용됩니다. </div>
    </li>
    <li>
        <div class="api-arg-title">ignore</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">검색 중에 걸을 수 있는 타일로 취급해야 하는 객체의 배열입니다. 이 옵션은 새 <a href="#PathFinder"><code>PathFinder</code></a>가 활성화되었을 때(대신 <code>costCallback</code> 옵션을 사용) 사용할 수 없습니다.

코드를 번역하지 마십시오. JavaScript, 대문자로만 된 단어를 번역하지 마십시오. 이 기사를 한국어로 번역하십시오. : </div>
    <li>
        <div class="api-arg-title">avoid</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">방을 검색할 때 장애물로 취급해야 하는 객체나 <a href="#RoomPosition">RoomPosition</a> 객체의 배열입니다. 이 옵션은 새로운 <a href="#PathFinder">PathFinder</a>가 활성화되면(대신 <code>costCallback</code> 옵션을 사용) 사용할 수 없습니다.</div>
    </li>
    <li>
        <div class="api-arg-title">maxOps</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">가능한 최대 경로 탐색 작업입니다. </div>
    </li>
</ol>

serialize" target="_blank">Room.serialize</a></code> method when converting to a string (e.g., for logging or storage in files). The default value is false.</div>
    </li>
    <li>
        <div class="api-arg-title">verbose</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">If true, the search algorithm will print more messages about each action it takes.  This can be helpful for debugging but slows down the search process significantly.  The default value is false.</div>
    </li>
</ol>
</body>
<h2>Methods and Properties Related to Searching</h2>
Searching algorithms are used when you want to find a path from one node in a graph to another.  This section lists the methods and properties that can be used for searching.

<h3>Properties</h3>

<ol>
    <li>
        <div class="api-prop-name">maxExpansion</div>
        <div class="api-prop-type">number</div>
        <div class="api-prop-desc">The maximum number of nodes that will be expanded at any one time.  The default value is -1, which means the algorithm will decide on its own how many nodes to expand. </div>
    </li>
    <li>
        <div class="api-prop-name">maxSimultaneousExploration</div>
        <div class="api-prop-type">number</div>
        <div class="api-prop-desc">The maximum number of nodes that will be explored simultaneously.  The default value is -1, which means the algorithm will decide on its own how many nodes to explore. </div>
    </li>
    <li>
        <div class="api-prop-name">maxPathLength</div>
        <div class="api-prop-type">number</div>
        <div class="api-prop-desc">The maximum length of the path that will be explored.  The default value is -1, which means the algorithm will explore as far as it can. </div>
    </li>
    <li>
        <div class="api-prop-name">maxTime</div>
        <div class="api-prop-type">number</div>
        <div class="api-prop-desc">The maximum amount of time that will be spent exploring the graph.  The default value is -1, which means the algorithm will explore until it has found a solution or it has run out of memory. </div>
    </li>
    <li>
        <div class="api-prop-name">maxTimePerNode</div>
        <div class="api-prop-type">number</div>
        <div class="api-prop-desc">The maximum amount of time that will be spent on exploring a single node.  The default value is -1, which means the algorithm will spend as much time as needed to explore each node. </div>
    </li>
</ol>
<h3>Methods</h3>

<ol>
    <li>
        <div class="api-method-name">A*</div>
        <div class="api-method-type">function</div>
        <div class="api-method-args">search: Object, heuristic: Function, options?: Object</div>
        <div class="api-method-desc">Perform an A* search.  The search algorithm uses a heuristic provided by the heuristic function to guide the search towards the goal node.  The default heuristic is a straight-line distance to the goal node.  The A* algorithm will expand nodes in order of their estimated total cost (g+h), where g is the distance from the starting node, and h is the cost of passing through the current node.  Note that this method does not return any path! To get the result path, you can use the serialize option. See the API docs for more details.</div>
    </li>
    <li>
        <div class="api-method-name">Breadth-First Search</div>
        <div class="api-method-type">function</div>
        <div class="api-method-args">search: Object, options?: Object</div>
        <div class="api-method-desc">Perform a Breadth-First search.  The search algorithm will explore as many nodes as possible at the same time before moving on to the next level. See the API docs for more details.</div>
    </li>
    <li>
        <div class="api-method-name">Depth-First Search</div>
        <div class="api-method-type">function</div>
        <div class="api-method-args">search: Object, options?: Object</div>
        <div class="api-method-desc">Perform a Depth-First search.  The search algorithm will recursively explore as many nodes as possible before backtracking if it hits a dead end. See the API docs for more details.</div>
    </li>
</ol>
<h3>Methods and Properties Related to Searching</h3>
The methods listed in this section are related to searching, but they're not actually search methods (i.e., A*, BFS, DFS).  Instead, they provide additional functionality

16개의 방을 최대로 검색할 수 있습니다. 이는 기본값(및 최대값)입니다. 새 <a href="#PathFinder"><code>PathFinder</code></a>가 활성화된 경우에만 사용됩니다. </div>
    </li>
</ul>

<h2><a name="PathFinder"></a>PathFinder API</h2>

<p>
The <a href="#Room"><code>Room</code></a> class has a method to find the path from the player's current room to any valid target room. Here is an overview of how to use it:

1. Enable the <code>PathFinder</code>:

```
Room.PathFinder = true; // or false, if you want to disable it
```

2. Use the <a href="#findPath"><code>findPath</code></a> method of Room to find a path:

```
let target = new Room(10);
let path = room.findPath(playerRoom, target);
```

The method takes two arguments: the player's current <a href="#Room"><code>Room</code></a> and the target <a href="#Room"><code>Room</code></a>. The return value is an array of strings representing the path from one room to another. </p>
<p>
The following options can be passed to the method as additional arguments:

<ol>
    <li>
        <div class="api-arg-title">startRoom</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">The starting room to search from.  Default is the player's current room.</div>
    </li>
    <li>
        <div class="api-arg-title">endRoom</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">The target room to search for.  Default is a randomly generated valid room.</div>
    </li>
    <li>
        <div class="api-arg-title">avoidRooms</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">An array of room IDs to avoid.  Default is an empty array.</div>
    </li>
    <li>
        <div class="api-arg-title">preferRooms</div>
        <div class="api-arg-type">array</div>
        <div class="api-arg-desc">An array of room IDs to prefer.  Default is an empty array.</div>
    </li>
    <li>
        <div class="api-arg-title">serializePath"></div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">Serialize the path as string.  Default is false.</div>
    </li>
    <li>
        <div class="api-arg-title">maxRooms</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">The maximum allowed rooms to search.  The default (and maximum) is 16.  This is only used when the new PathFinder is enabled.</div>
    </li>
    <li>
        <div class="api-arg-title">range</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Find a path to a position in specified linear range of target.  The default is 0.</div>
    </li>
</ol>
</p>

</div>
    </li>
    <li>
        <div class="api-arg-title">mountainCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Cost for walking on mountain positions.  The default is 7.</div>
    </li>
    <li>
        <div class="api-arg-title">forestCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Cost for walking on forest positions.  The default is 3.</div>
    </li>
    <li>
        <div class="api-arg-title">waterCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Cost for walking on water positions.  The default is 9.</div>
    </li>
</ul>

10:43:06.754 <span class="highlight">Don&#039;</span>t translate codes like JavaScript, don&#039;t translate words that are only in uppercase letters, Translate this article into Korean : </div>    </li>
</ul>

{% endapi_method_params %}

<h2><a name="1"></a>Return value</h2>
<p>A path step array with the following format:</p>

```
[
    { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
    { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
    { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
    ... 
]
```
<h2><a name="2"></a>API method getEventLog</h2>
<p>{% api_method getEventLog '[raw]' 1 %}</p>

<code class="highlight">
// track events performed by a particular creep
_. filter(creep. room. getEventLog(), {objectId: creep. id});
</code>

<code class="highlight">
// Find all hostile actions against your creeps and structures
_. forEach(Game. rooms, room => {
    let eventLog = room. getEventLog();
    let attackEvents = _. forEach(eventLog, e => ({
        type: e.type,
        data: e.data,
        target: e.target
    }));
    console.log(attackEvents);
});
</code>
</div><script></script>

filter(eventLog, {event: EVENT_ATTACK});
    attackEvents. forEach(event => {
        let target = Game. getObjectById(event. data. targetId);
        if(target && target. my) {
            console. log(event);
        }
    });
});
```

Returns an array of events happened on the previous tick in this room. 

{% api_method_params %}
raw (optional) : boolean
If this parameter is false or undefined, the method returns an object parsed using `JSON. parse` which incurs some CPU cost on the first access (the return value is cached on subsequent calls).  If `raw` is truthy, then raw JSON in string format is returned. 
{% endapi_method_params %}


### Return value

An array of events.

이벤트마다 서로 다른 `data` 속성을 갖고 있습니다. 각 이벤트에 대한 설명은 아래 표를 참조하세요:

<table>
<tr>
    <th>event</th><th>description</th>
</tr>
<tr>
    <td>`EVENT_ATTACK`</td>
    <td>
        한 크립이나 구조물이 다른 객체에게 공격을 가함.
    </td>
</tr>

<ul>
                <li>`targetId` - 대상 객체 ID</li>
                <li>`damage` - 공격으로 인한 피해량</li>
                <li>`attackType` - 다음과 같은 상수 중 하나:
                    <ul>
                        <li>`EVENT_ATTACK_TYPE_MELEE` - 공격하는 크립</li>
                        <li>`EVENT_ATTACK_TYPE_RANGED` - 사정거리 공격으로 공격하는 크립, 또는 [attack](#StructureTower. attack)로 공격하는 타워</li>
                        <li>`EVENT_ATTACK_TYPE_RANGED_MASS` - [rangedMassAttack](#Creep. rangedMassAttack)으로 공격하는 크립</li> 
                        </ul></li>

예시:

```
// Example usage of event objects
function handleDestroyed(event) {
  if (event.type === EVENT_OBJECT_DESTROYED) {
    // Destroy the object and update the game state accordingly
  }
}

// Register to listen for destroyed events on the "player" object
Creep.on(EVENT_OBJECT_DESTROYED, handleDestroyed);
```

</td>
    </tr>
    <tr>
        <td>`type` - the type of the destroyed object</td>
    </tr>
<ul><li>`EVENT_ATTACK_CONTROLLER`</li></ul>
        <td>A creep performed [`attackController`](#Creep. attackController) in the room. </td>
    </tr>
    <tr>
        <td>`EVENT_BUILD`</td>
        <td>
            A creep performed [`build`](#Creep. build) in the room.

<ul>
    <li>`targetId` - the target object ID</li>
    <li>`amount` - the amount of health restored</li>
</ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_BUILD_COMPLETE`</td>
        <td>
            A tower finished building a component or an upgrade. 
            <ul>
                <li>`targetId` - the target object ID</li>
                <li>`name` - the name of the built component or upgrade</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`EVENT_DEATH`</td>
        <td>
            A creep died.

<ul>
    <li>`targetId` - ID of 수리 대상 구조물</li>
    <li>`amount` - 복원된 구조의 양</li>
    <li>`repairType` - 다음 상수 중 하나</li>
        <ul>
            <li>`EVENT_REPAIR_TYPE_CREEP_MELEE` - [치유](#Creep. heal)로 치료된 크립</li>
            <li>`EVENT_REPAIR_TYPE_CREEP_RANGED` - [rangedHeal](#Creep. rangedHeal)로 치료된 크립 또는 [치유](#StructureTower. heal)로 치료된 타워</li>
        </ul>
    </li></ul>
</tr>
</tbody>

번역하지 마십시오. JavaScript, 대문자로만 된 단어를 번역하지 마십시오.
<ul>
<li>"targetId" - 타겟 객체 ID</li>
<li>"amount" - 수리된 히트의 양</li>
<li>"energySpent" - 작업에 소모된 에너지 양</li></ul>
</ul>
</td>
</tr>        
</table>
<table>
<tr>
    <td>"`EVENT_RESERVE_CONTROLLER`"></td>
    <td>
        [`reserveController`](#Creep {reserveController})를 사용하는 크립이 룸에 있습니다.
        <ul>
            <li>"amount" - 획득한 예약 시간의 양</li>
        </ul>
    </td>
</tr>
<tr>
    <td>"`EVENT_UPGRADE_CONTROLLER`</td>
    <td>
        [`upgradeController`](#Creep {upgradeController})를 사용하는 크립이 룸에 있습니다.
    </td>
</tr> 
</table>

객실에서 upgradeController)을(를) 업그레이드하십시오.

<ul>
    <li>`amount` - 제어점의 수</li>
    <li>`energySpent` - 작업에 소비된 에너지량</li></ul>
</ul>
</td>
</tr>
<tr>
<td>`EVENT_EXIT`</td>
<td>
크립이(가) 다른 방으로 이동했습니다.

<ul>
    <li>'room' - 대상 룸의 이름</li>
    <li>'x', 'y' - 기어가 나타난 다른 룸의 좌표</li></ul>
</ul>
        </td>
    </tr>           
    <tr>
        <td>`EVENT_TRANSFER`</td>
        <td>
            `transferEnergy`(`https://docs.screeps.com/api/#StructureLink.transferEnergy`)`를 수행한 링크나 `transfer`(`#Creep.transfer`) 또는 `withdraw`(`#Creep.withdraw`)를 수행한 기어가 있습니다.</td>
</tr>

`targetId` - 대상 개체 ID
`resourceType` - 전송된 리소스의 유형
`amount` - 전송된 리소스의 양
```javascript
const targetId = 'object_id';
const resourceType = 'RESOURCE_TYPE';
const amount = 10;
// Perform the transfer of resources
```
{% api_method getPositionAt 'x, y' 1 %}

```javascript
const pos = Game.rooms.sim.getPositionAt(5,12);
const source = pos.findClosestByRange(FIND_SOURCES_ACTIVE);
```
이 메서드는 <a href="#RoomPosition">RoomPosition</a> 객체를 지정된 위치에 만듭니다.
{% api_method_params %}
x : number
X 위치입니다.
===
y : number
Y 위치입니다.

`{% endapi_method_params %}`

### 반환 값

방의 룸 위치 객체 또는 해당 할 수 없는 경우 null입니다.

{% api_method getTerrain '' 0 %}

```javascript
const terrain = Game. rooms['W1N1']. getTerrain();
switch(terrain. get(10,15)) {
    case TERRAIN_MASK_WALL:
        break;
    case TERRAIN_MASK_SWAMP:
        break;
    case 0:
        break;
}
```

정적 지형 데이터에 대한 빠른 액세스를 제공하는 `Room. Terrain` 객체를 가져옵니다. 이 메서드는 사용자가 해당 방에 액세스할 수 없어도 게임의 모든 방에 대해 작동합니다.

### 반환 값

새로운 `Room. Terrain` 객체를 반환합니다.

번역하지 마세요: JavaScript 코드, 대문자로 된 단어를 번역하지 마세요. 이 글을 한국어로 번역하십시오. : {% api_method lookAt 'x, y|target' 2 %}

```javascript
const look = creep. room. lookAt(target);
look. forEach(function(lookObject) {
    if (lookObject.type == LOOK_CREEPS &&
       lookObject[LOOK_CREEPS].getActiveBodyparts(ATTACK) == 0) {
        creep. moveTo(lookObject.creep);
    }
});
```
{% api_method_params %}
x : number
방의 x 위치.
===
y : number
방의 y 위치. 
===
target : object
<a href="#RoomPosition">RoomPosition</a> 객체이거나 <a href="#RoomPosition">RoomPosition</a>을 포함하는 모든 개체일 수 있습니다.

{% endapi_method_params %}

### 반환값

해당 위치의 객체가 포함된 배열로 다음과 같은 형태입니다:

```javascript-content
[
    { type: 'creep', creep: {... } },
    { type: 'structure', structure: {... } },
    ... 
    { type: 'terrain', terrain: 'swamp' }
]
```

{% api_method_params %}

### Return value

An array with objects at the specified position in the following format:

```javascript-content
[
    { type: 'creep', creep: {... } },
    { type: 'structure', structure: {... } },
    ... 
    { type: 'terrain', terrain: 'swamp' }
]
```

{% api_method lookAtArea 'top, left, bottom, right, [asArray]' 2 %}

```javascript
const look = creep. room. lookAtArea(10,5,11,7);
```

해당 룸 영역의 객체 목록을 가져옵니다.

{% api_method_params %}
top : number
영역의 상단 Y 경계입니다.
===
left : number
영역의 좌측 X 경계입니다.
===
bottom : number
영역의 하단 Y 경계입니다.

}}, { type: 'normal', normal: {...}}],
        7: [{ type: 'spawn', spawn: {...}}]}
    9:{
        4: [{ type: 'move', move: {...}}]}
}
```

If `asArray` is set to true, the method returns an array of objects in the following format:

```javascript-content
// [ { x: 10, y: 5, type: "creep", creep: { type: 'creep', creep: {...} }, normal: { type: 'normal', normal: {...}} },{ x: 9, y: 4, type: "spawn", spawn: { type: 'spawn', spawn: {...} } } ]
```

### Example

```javascript-content
// Get the list of objects in the specified area.
let result = world.getObjectsInArea({ xMin: 10, yMin: 5, xMax: 11, yMax: 7 });
if(result.asArray){
    // If it returns an array, do something.
}else{
    // If it returns an object, do something else.
}
```

### Parameters

```javascript-content
world.getObjectsInArea({ xMin: 0, yMin: 0, xMax: 0, yMax: 0 })
```

* {{ param-name }} : Number. The X boundary of the area.

}},
    {x: 15, y: 20, type: 'terrain', terrain: 'swamp'}
]
```

This is a feature of the `getTileTiles()` method and is not affected by this change.

}},
{x: 5, y: 10, type: 'terrain', terrain: 'swamp'},
{x: 6, y: 10, type: 'terrain', terrain: 'swamp'},
{x: 7, y: 10, type: 'terrain', terrain: 'swamp'},
{x: 5, y: 11, type: 'terrain', terrain: 'plain'},
{x: 6, y: 11, type: 'structure', structure: {... }},
{x: 6, y: 11, type: 'terrain', terrain: 'swamp'},
{x: 7, y: 11, type: 'terrain', terrain: 'wall'}
]
```

이 객체를 보려면 유형, x, y | 유형, target 중 하나를 지정해야합니다.

{% api_method_params %}
type : string
One of the <code>LOOK_*</code> constants.
===
x : number
X position in the room.
===
y : number
Y position in the room.
===
target : object
Can be a <a href="#RoomPosition">RoomPosition</a> object or any object containing <a href="#RoomPosition">RoomPosition</a>.
{% endapi_method_params %}

### Return value

An array of objects of the given type at the specified position if found.

{% api_method lookForAtArea 'type, top, left, bottom, right, [asArray]' 1 %}

```javascript
const look = creep. room. lookForAtArea(LOOK_STRUCTURES,10,5,11,7);
```

Get the list of objects with the given type at the specified room area.

1], [3, 8]},
        7: [{...[12]}]
    },
    7: [{...[14]}]
}
```

If `asArray` is set to true or trueundefined, the method returns an array of arrays in the following format:

```javascript-content
// [[10,5], [11,7], [3,8], [12]]

[
    10, 5,
    11, 7,
    3, 8,
    12
]
```

}]
```
If `asArray` is false or not set (the default), the method returns an object in the following format:

```javascript-content
{
    x: 5,
    y: 10,
    structure: {... },
    x: 6,
    y: 11,
    structure: {... },
    x: 6,
    y: 11,
    structure: {... }
}
```