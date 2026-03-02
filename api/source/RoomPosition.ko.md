# RoomPosition

방 안의 특정 위치를 나타내는 객체입니다. 방 안의 모든 `RoomObject`는 `pos` 속성으로 `RoomPosition`을 포함합니다.
사용자 정의 위치의 `RoomPosition` 객체는 [`Room.getPositionAt`](#Room.getPositionAt) 메서드 또는 생성자(constructor)를 통해 얻을 수 있습니다.

{% api_method constructor 'x, y, roomName' 0 %}

```javascript
const pos = new RoomPosition(10, 25, 'sim');

```

생성자를 사용해 새 <code>RoomPosition</code> 객체를 만들 수 있습니다.

{% api_method_params %}
x : number
방 내부의 X 좌표입니다.
===
y : number
방 내부의 Y 좌표입니다.
===
roomName : string
방 이름입니다.
{% endapi_method_params %}



{% api_property roomName 'string' %}



방 이름입니다.



{% api_property x 'number' %}



방 내부의 X 좌표입니다.



{% api_property y 'number' %}



방 내부의 Y 좌표입니다.


{% api_method createConstructionSite 'structureType, [name]' A %}

```javascript
Game.flags['Flag1'].pos.createConstructionSite(STRUCTURE_ROAD);
```
```javascript
Game.flags['Flag1'].pos.createConstructionSite(STRUCTURE_SPAWN, 'MySpawn2');
```

지정한 위치에 새 <a href="#ConstructionSite">ConstructionSite</a>를 생성합니다.

{% api_method_params %}
structureType : string
<code>STRUCTURE_*</code> 상수 중 하나입니다.
===
name (optional) : string
이름을 지원하는 구조물의 이름입니다(현재는 스폰만 해당).
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_INVALID_TARGET | 지정한 위치에 구조물을 배치할 수 없습니다.
ERR_FULL | 건설 현장이 너무 많습니다. 플레이어당 최대 건설 현장 수는 100개입니다.
ERR_INVALID_ARGS | 위치가 올바르지 않습니다.
ERR_RCL_NOT_ENOUGH | 방 컨트롤러 레벨이 부족합니다. <a href="/control.html">자세히 보기</a>
{% endapi_return_codes %}



{% api_method createFlag '[name], [color], [secondaryColor]' A %}

```javascript
creep.pos.createFlag('Flag1');
```

지정한 위치에 새 <a href="#Flag">Flag</a>를 생성합니다.

{% api_method_params %}
name (optional) : string
새 플래그의 이름입니다. 유일해야 하며, 즉 <code>Game.flags</code> 객체에 같은 이름(해시 키)의 다른 플래그가 없어야 합니다. 지정하지 않으면 무작위 이름이 생성됩니다.
===
color (optional) : string
새 플래그의 색상입니다. <code>COLOR_*</code> 상수 중 하나여야 합니다. 기본값은 <code>COLOR_WHITE</code>입니다.
===
secondaryColor (optional) : string
새 플래그의 보조 색상입니다. <code>COLOR_*</code> 상수 중 하나여야 합니다. 기본값은 <code>color</code>와 같습니다.
{% endapi_method_params %}


### 반환 값

새 플래그의 이름 또는 아래 오류 코드 중 하나를 반환합니다:
<br>

{% api_return_codes %}
ERR_NAME_EXISTS | 같은 이름의 플래그가 이미 존재합니다.
ERR_INVALID_ARGS | 위치 또는 색상 상수가 올바르지 않습니다.
{% endapi_return_codes %}



{% api_method findClosestByPath 'type, [opts]|objects, [opts]' 3 %}

```javascript
const target = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
creep.moveTo(target);
```

```javascript
const target = creep.pos.findClosestByPath(FIND_MY_SPAWNS, {maxOps: 500});
creep.moveTo(target);
```

```javascript
const target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.getActiveBodyparts(ATTACK) == 0;
    }
});
```

```javascript
const target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
    filter: { owner: { username: 'Invader' } }
});
```

```javascript
const targets = [
    Game.creeps.John,
    Game.creeps.Mike,
    room.getPositionAt(10,10)
];
const closest = creep.pos.findClosestByPath(targets);
```

주어진 위치에서 “경로 길이”가 가장 짧은 객체를 찾습니다. <a href="http://en.wikipedia.org/wiki/Jump_point_search" target="_blank">Jump Point Search 알고리즘</a>과 <a href="http://en.wikipedia.org/wiki/Dijkstra">Dijkstra 알고리즘</a>을 사용합니다.

{% api_method_params %}
type : number
<a href="#Room.find">Room.find</a>를 참고하세요.
===
objects : array
검색 대상이 될 방의 객체 또는 <a href="#RoomPosition">RoomPosition</a> 객체 배열입니다.
===
opts (optional) : object
경로 탐색 옵션 객체(<a href="#Room.findPath">Room.findPath</a> 참고) 또는 아래 옵션들 중 하나를 포함하는 객체입니다:
						<ul>
							<li>
								<div class="api-arg-title">filter</div>
								<div class="api-arg-type">object, function, string</div>
								<div class="api-arg-desc"><a href="https://lodash.com/docs#filter">Lodash.filter</a> 메서드를 통해 필터를 통과한 객체만 사용됩니다.</div>
							</li>
							<li>
								<div class="api-arg-title">algorithm</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">아래 상수 중 하나입니다:
									<ul>
										<li><code>astar</code>는 가능한 대상이 비교적 적을 때 더 빠릅니다;</li>
										<li><code>dijkstra</code>는 가능한 대상이 많거나 가장 가까운 대상이 근처에 있을 때 더 빠릅니다.</li>
									</ul>
									기본값은 휴리스틱으로 자동 결정됩니다.</div>
							</li>
						</ul>

{% endapi_method_params %}


### 반환 값

가장 가까운 객체를 찾으면 그 객체를, 찾지 못하면 null을 반환합니다.

{% api_method findClosestByRange 'type, [opts]|objects, [opts]' 2 %}

```javascript
const target = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
creep.moveTo(target);
```

```javascript
const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
    filter: function(object) {
        return object.getActiveBodyparts(ATTACK) == 0;
    }
});
```

```javascript
const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
    filter: { owner: { username: 'Invader' } }
});
```

```javascript
const targets = [
    Game.creeps.John,
    Game.creeps.Mike,
    room.getPositionAt(10,10)
];
const closest = creep.pos.findClosestByRange(targets);
```

주어진 위치에서 “직선 거리”가 가장 짧은 객체를 찾습니다.

{% api_method_params %}
type : number
<a href="#Room.find">Room.find</a>를 참고하세요.
===
objects : array
검색 대상이 될 방의 객체 또는 <a href="#RoomPosition">RoomPosition</a> 객체 배열입니다.
===
opts (optional) : object
아래 옵션 중 하나를 포함하는 객체입니다:
						<ul>
							<li>
								<div class="api-arg-title">filter</div>
								<div class="api-arg-type">object, function, string</div>
								<div class="api-arg-desc"><a href="https://lodash.com/docs#filter">Lodash.filter</a> 메서드를 통해 필터를 통과한 객체만 사용됩니다.</div>
							</li>
						</ul>

{% endapi_method_params %}


### 반환 값

가장 가까운 객체를 찾으면 그 객체를, 찾지 못하면 null을 반환합니다.

{% api_method findInRange 'type, range, [opts]|objects, range, [opts]' 2 %}

```javascript
const targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
if(targets.length > 0) {
    creep.rangedAttack(targets[0]);
}
```

```javascript
const targets = [
    Game.creeps.John,
    Game.creeps.Mike,
    room.getPositionAt(10,10)
];
const inRangeTargets = creep.pos.findInRange(targets, 3);
```

지정한 직선 거리(range) 안의 모든 객체를 찾습니다.

{% api_method_params %}
type : number
<a href="#Room.find">Room.find</a>를 참고하세요.
===
objects : array
검색 대상이 될 방의 객체 또는 <a href="#RoomPosition">RoomPosition</a> 객체 배열입니다.
===
range : number
거리(range) 값입니다.
===
opts (optional) : object
<a href="#Room.find">Room.find</a>를 참고하세요.
{% endapi_method_params %}


### 반환 값

찾은 객체의 배열입니다.

{% api_method findPathTo 'x, y, [opts]|target, [opts]' 3 %}


```javascript
const path = creep.pos.findPathTo(target);
creep.move(path[0].direction);
```

```javascript
let path = creep.pos.findPathTo(target, {maxOps: 200});
if( !path.length || !target.equalsTo(path[path.length - 1]) ) {
    path = creep.pos.findPathTo(target,
        {maxOps: 1000, ignoreDestructibleStructures: true});
}
if( path.length ) {
    creep.move(path[0].direction);
}
```

<a href="http://en.wikipedia.org/wiki/Jump_point_search" target="_blank">Jump Point Search 알고리즘</a>을 사용해 지정한 위치까지의 최적 경로를 찾습니다. 이 메서드는 <a href="#Room.findPath">Room.findPath</a>의 단축형입니다. 대상이 다른 방에 있다면, 해당 방으로 향하는 적절한 출구가 목표로 사용됩니다.

{% api_method_params %}
x : number
방 내부의 X 좌표입니다.
===
y : number
방 내부의 Y 좌표입니다.
===
target : object
<a href="#RoomPosition">RoomPosition</a> 객체 또는 <a href="#RoomPosition">RoomPosition</a>을 포함하는 어떤 객체든 가능합니다.
===
opts (optional) : object
경로 탐색 옵션 플래그를 담은 객체입니다(자세한 내용은 <a href="#Room.findPath">Room.findPath</a> 참고).
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


{% api_method getDirectionTo 'x,y|target' 1 %}

```javascript
const direction = creep.pos.getDirectionTo(target);
creep.move(direction);
```

지정한 위치까지의 직선 방향을 구합니다.

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

방향 상수 중 하나를 나타내는 숫자입니다.

{% api_method getRangeTo 'x,y|target' 1 %}

```javascript
const range = creep.pos.getRangeTo(target);
if(range <= 3) {
    creep.rangedAttack(target);
}
```

지정한 위치까지의 직선 거리(range)를 구합니다.

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

지정한 위치까지의 칸 수(거리)입니다.

{% api_method inRangeTo 'x, y, range|target, range' 1 %}

```javascript
if(creep.pos.inRangeTo(target, 3)) {
    creep.rangedAttack(target);
}
```

이 위치가 다른 위치로부터 지정한 거리(range) 안에 있는지 확인합니다.

{% api_method_params %}
x : number
같은 방에서의 X 좌표입니다.
===
y : number
같은 방에서의 Y 좌표입니다.
===
target : <a href="#RoomPosition">RoomPosition</a>
대상 위치입니다.
===
range : number
거리(range) 값입니다.
{% endapi_method_params %}


### 반환 값

불리언 값을 반환합니다.

{% api_method isEqualTo 'x,y|target' 1 %}

```javascript
if(creep.pos.isEqualTo(10,25)) {
    creep.move(RIGHT);
}
```

```javascript
if(creep.pos.isEqualTo(Game.flags.Flag1)) {
    creep.move(RIGHT);
}
```

이 위치가 지정한 위치와 동일한지 확인합니다.

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

불리언 값을 반환합니다.

{% api_method isNearTo 'x,y|target' 1 %}

```javascript
if(creep.pos.isNearTo(target)) {
    creep.transfer(target, RESOURCE_ENERGY);
}
```

이 위치가 지정한 위치의 인접 칸에 있는지 확인합니다. <code>inRangeTo(target, 1)</code>과 동일합니다.

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

불리언 값을 반환합니다.

{% api_method look '' 2 %}

```javascript
const look = Game.flags.Flag1.pos.look();
look.forEach(function(lookObject) {
    if(lookObject.type == LOOK_CREEPS &&
       lookObject[LOOK_CREEPS].getActiveBodyparts(ATTACK) == 0) {
        creep.moveTo(lookObject.creep);
    }
});
```

지정한 방 위치에 있는 객체 목록을 가져옵니다.



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


{% api_method lookFor 'type' 1 %}

```javascript
const found = Game.flags.Flag1.pos.lookFor(LOOK_CREEPS);
if(found.length && found[0].getActiveBodyparts(ATTACK) == 0) {
    creep.moveTo(found[0]);
}
```

지정한 방 위치에서, 주어진 타입의 객체를 가져옵니다.

{% api_method_params %}
type : string
<code>LOOK_*</code> 상수 중 하나입니다.
{% endapi_method_params %}


### 반환 값

찾았다면 지정한 타입의 객체 배열을 반환합니다.

