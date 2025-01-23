# RoomPosition
JavaScript 코드를 번역하지 마시고, 대문자로만 쓰인 단어도 번역하지 마십시오.
객체가 룸에서 지정한 위치를 나타냅니다. 룸의 모든 `RoomObject`는 `RoomPosition`을 포함합니다. 객체의 `pos` 속성. 맞춤형 위치에 대한 위치 객체는 사용자가 `Room.getPositionAt()` 메서드를 호출하거나 생성자를 통해 취득할 수 있습니다.

```javascript
const pos = new RoomPosition(10, 25, 'sim');

```
새로운 `RoomPosition` 객체는 생성자를 사용하여 만들 수 있습니다.

x : number
방의 X 위치입니다.
===
y : number
방의 Y 위치입니다.
===
roomName : string
방 이름입니다.

이름을 가진 구조물 유형. 


{% api_property x 'number' %}


X 위치.


{% api_property y 'number' %}


Y 위치.


{% api_method createConstructionSite 'structureType, [name]' A %}

```javascript
Game. flags['Flag1']. pos. createConstructionSite(STRUCTURE_ROAD);
```
```javascript
Game. flags['Flag1']. pos. createConstructionSite(STRUCTURE_SPAWN, 'MySpawn2');
```

새로운 <a href="#ConstructionSite">ConstructionSite</a>를 지정된 위치에 만듭니다.

{% api_method_params %}
structureType : string
<code>STRUCTURE_*</code> 상수 중 하나.

">More information here</a>.

{% api_return_values %}
```javascript
{
  "success": true, // Whether or not the flag was successfully created.
  "message": null, // Any error message if the flag creation failed.
  "flag": { // The new <a href="#Flag">Flag</a> object.
    name: 'Flag1', // Its name.
    color: 'COLOR_WHITE' // Its color.
  }
}
```

findClosestByPath('type, [opts]|objects, [opts]', 3);
creep. moveTo(target);
```


--- ===
secondaryColor (선택사항) : string
새로운 플래그의 부색입니다.
<code>COLOR_*</code> 상수중 하나여야 합니다.
기본값은 <code>color</code> 와 같습니다.


### 반환값
새로운 플래그의 이름, 또는 아래 오류 코드들중 하나:
<br>
{% api_return_codes %}
ERR_NAME_EXISTS | 이미 같은 이름의 플래그가 있습니다.
ERR_INVALID_ARGS | 위치나 색상 상수가 잘못되었습니다.
{% endapi_return_codes %}


{% api_method findClosestByPath 'type, [opts]|objects, [opts]' 3 %}
```javascript
const target = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
creep.moveTo(target);
```
```javascript
const target = creep.pos.

위키백과에서 설명하는 방법을 사용합니다.>FIND_MY_SPAWNS</a> 경로를 사용하여 <strong><a href="#" target="_blank">closestByPath()</a></strong> 함수를 호출하면 주어진 위치에서 가장 짧은 경로를 따라 있는 개체를 찾을 수 있습니다.
<code>const target = creep. pos. findClosestByPath(FIND_MY_SPAWNS, {maxOps: 500});</code>

번역 코드는 JavaScript, 대문자로만 쓰인 단어는 번역하지 마세요. 이 기사를 한국어로 번역하십시오. : org/wiki/Jump_point_search" target="_blank">점프 포인트 검색 알고리즘</a>과 <a href="http://en. wikipedia. org/wiki/Dijkstra">데이크스트라 알고리즘</a>.
{% api_method_params %}
type : number
<a href="#Room. find">Room. find</a>를 참조하십시오. 
===
objects : array
객실의 물체나 <a href="#RoomPosition">RoomPosition</a> 객체들에 대해 검색이 수행되어야 합니다. 
===
opts (optional) : object
경로 찾기 옵션을 포함한 객체(경로 찾기 옵션 참조 <a href="#Room. findPath">Room.

findPath), 또는 다음 중 하나:
						<ul>
							<li>
								<div class="api-arg-title">filter</div>
								<div class="api-arg-type">object, function, string</div>
								<div class="api-arg-desc">Lodash. filter 메서드를 사용하여 필터링된 객체만 사용됩니다.</div>
							</li>
						</ul>

{% api_method_signature "getClosestObject" "%}

GET /closest_object

<hr/>

{% api_method_params "%}

1. 객체가 없는 경우, `null`을 반환합니다.
2. 객체가 있는 경우, 가장 가까운 객체를 반환합니다.

### Parameters

```
algorithm: {string} — 기본값이 자동으로 결정됩니다. astar 또는 dijkstra 중 하나를 선택할 수 있습니다.
```

{% api_response_format "json" "%}

```
{% json %}

{
	"closest_object": {
		"type": "ball",
		"id": "123456",
		"x": 10,
		"y": 20
	},
	"distance": 5
}
```

findClosestByRange(FIND_MY_SPAWNS);
```

```javascript
const targets = [
    Game.creeps.John,
    Game.creeps.Mike,
    room.getPositionAt(10,10)
];
const closest = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.getCriticalHitpoints() < 10;
    }
});
```

필터()</a> method법을 사용하여 필터링할 것입니다.</div>
					</li>
					<li>
							<div class="api-arg-title">sortBy</div>
							<div class="api-arg-type">object, function, string</div>
							<div class="api-arg-desc">객체나 함수를 사용하여 정렬할 것입니다.</div>
					</li>
					<li>
							<div class="api-arg-title">limit</div>
		0	<div class="api-arg-type">number, string</div>
0	<div class="api-arg-desc">찾을 객체의 수를 지정할 것입니다.</div>
				</li>
targets : array
An array of objects containing the properties for which you want to find a match. See <a href="#RoomPosition. properties">RoomPosition. properties</a>. ===
value (optional) : number
The value returned if no matching targets were found. 
===
maxDistance (optional) : number
The maximum distance the search will extend beyond the given position. 
===
distanceUnit (optional) : string
The unit of measurement for the distance. 
===
response : object
An object containing the following properties:
	 <ul>
	  <li>
	  	results : array
	    An array of matched objects. See <a href="#RoomPosition. properties">RoomPosition. properties</a>.
	  </li>
	  <li>
	   	distanceToEndOfResults : number
	    The distance between the given position and the end of the search range. </li>
	 </ul>
```

"filter" 메서드가 사용됩니다. </div>
						</li>
					</ul>

{% endapi_method_params %}


### 반환값

찾을 수있는 경우 가장 가까운 개체, 그렇지 않은 경우 null.

{% api_method findInRange 'type, range, [opts]|objects, range, [opts]' 2 %}

```javascript
const targets = creep. pos. findInRange(FIND_HOSTILE_CREEPS, 3);
if(targets. length > 0) {
    creep. rangedAttack(targets[0]);
}
```

```javascript
const targets = [
    Game. creeps. John,
    Game. creeps. Mike,
    room. getPositionAt(10,10)
];
const inRangeTargets = creep. pos. findInRange(targets, 3);
```

찾은 범위 내의 모든 개체를 찾습니다.

{% api_method_params %}
type : number
See <a href="#Room. find">Room. find</a>.

objects : array
An array of room's objects or <a href="#RoomPosition">RoomPosition</a> objects that the search should be executed against.
===
range : number
The range distance.
===
opts (optional) : object
See <a href="#Room. find">Room. find</a>.
{% endapi_method_params %}

### 반환 값
An array with the objects found.
{% api_method findPathTo 'x, y, [opts]|target, [opts]' 3 %}

```javascript
const path = creep. pos. findPathTo(target);
creep. move(path[0]. direction);
```
```javascript
let path = creep. pos. findPathTo(target, {maxOps: 200});
if( ! path. length || ! target. equalsTo(path[path. length - 1]) ) {
    path = creep. pos. findPathTo(target, {maxOps: 200});
}
```

"target" -- JavaScript 코드를 번역할 필요가 없습니다.
"{maxOps: 1000, ignoreDestructibleStructures: true}" -- 코드 번역하지 않습니다.
"if( path. length ) {
    creep. move(path[0]. direction);
}" -- 번역하지 마세요.

. getDirectionTo('x,y|target').call(creep);
```

The `getDirectionTo` method will return the direction you need to go in order to move from your current position (given by `creep.pos`) to a given target position. 
{% api_method_params %}
target : object
Can be a <a href="#RoomPosition">RoomPosition</a> object or any object containing <a href="#RoomPosition">RoomPosition</a>. 
{% /api_method_params %}

### Return value

특정 위치까지의 직선 거리를 구합니다.
{% api_method_params %}
x : number
방 안의 X 좌표.
===
y : number
방 안의 Y 좌표.
===
target : object
객체는 <a href="#RoomPosition">RoomPosition</a> 또는 이를 포함하는 다른 객체일 수 있습니다.
{% endapi_method_params %}
### Return value
방향을 나타내는 숫자입니다.
{% api_method getRangeTo 'x,y|target' 1 %}
```javascript
const range = creep. pos. getRangeTo(target);
if (range <= 3) {
    creep. rangedAttack(target);
}
```

1. `inRangeTo`: 이 방법은 주어진 목표에 대한 범위를 체크하는 것을 도와줍니다.
2. `x`: number: 객체 내의 X 위치.
3. `y`: number: 객체 내의 Y 위치.
4. `target`: object: <a href="#RoomPosition">RoomPosition</a> 객체나 다른 RoomPosition 객체를 포함하는 객체일 수 있습니다.
5. `return value`: 주어진 위치에서 목표까지의 거리(칸)입니다.
6. `if (creep.pos.inRangeTo(target, 3))`: 이 코드는 크립트가 객체의 범위 내에 있는지 확인합니다.
7. `range`: 주어진 포지션 안의 다른 포지션의 범위입니다.

===
return : boolean
The return value indicates whether the target position is the same as the specified position.

{% api_method_params %}
x : number
X position of the target. 
===
y : number
Y position of the target. 

{% endapi_method_params %}

### Parameters

target : <a href="#RoomPosition">RoomPosition</a>
The specified position.

==

### 반환값

bool값입니다.

{% api_method_params %}
x : number
방의 x 위치입니다.
===
y : number
방의 y 위치입니다.

"대상" : "object",
"객체" : "object",
"roomPosition" : "<a href=\"#RoomPosition\">RoomPosition</a> 개체 또는 모든 <a href=\"#RoomPosition\">RoomPosition</a>를 포함하는 다른 개체일 수 있습니다."

### return value
An array containing objects with types specified by the LOOK_* constants at the specified room position in the following format:

```javascript-content
[
    { type: 'creep', creep: {... } },
    { type: 'structure', structure: {... } },
    ... 
    { type: 'terrain', terrain: 'swamp' }
]
```

{% api_method lookFor 'type' 1 %}

```javascript
const found = Game.flags.Flag1.pos.lookFor(LOOK_CREEPS);
if(found.length && found[0].getActiveBodyparts(ATTACK) == 0) {
    creep.moveTo(found[0]);
}
```

Get an object with the given type at the specified room position.
{% api_method_params %}
type : string
One of the LOOK_* constants.

{% api_method_meta 'find' %}

{% api_method_params 'find' %}

<hr>

{% api_method_return 'find' %}

An array of objects of the given type at the specified position if found.