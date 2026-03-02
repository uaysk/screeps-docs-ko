# Game.map

월드 맵을 나타내는 전역 객체입니다. 방 사이를 이동/탐색할 때 사용합니다.


{% api_method Game.map.describeExits 'roomName' 1 %}

```javascript
const exits = Game.map.describeExits('W8N3');
```

지정한 이름의 방에서 이용 가능한 모든 출구를 나열합니다.

{% api_method_params %}
roomName : string
방 이름입니다.
{% endapi_method_params %}


### 반환 값

아래 형식의 출구 정보이며, 방을 찾을 수 없으면 null을 반환합니다.

```javascript-content
{
    "1": "W8N4",    // TOP
    "3": "W7N3",    // RIGHT
	"5": "W8N2",    // BOTTOM
	"7": "W9N3"     // LEFT
}
```


{% api_method Game.map.findExit 'fromRoom, toRoom, [opts]' 3 %}

```javascript
if(creep.room != anotherRoomName) {
    const exitDir = Game.map.findExit(creep.room, anotherRoomName);
    const exit = creep.pos.findClosestByRange(exitDir);
    creep.moveTo(exit);
}
else {
    // go to some place in another room
}
```

```javascript
creep.moveTo(new RoomPosition(25, 25, anotherRoomName));
```

지정한 방에서 다른 방으로 가는 경로 상에서, 나가야 할 출구 방향을 찾습니다.

{% api_method_params %}
fromRoom : string, <a href="#Room">Room</a>
시작 방 이름 또는 Room 객체입니다.
===
toRoom : string, <a href="#Room">Room</a>
도착 방 이름 또는 Room 객체입니다.
===
opts (optional) : object
경로 탐색 옵션 객체입니다. <code><a href="#Game.map.findRoute">findRoute</a></code>를 참고하세요.
{% endapi_method_params %}


### 반환 값

아래 중 하나의 방 방향 상수를 반환합니다:

* `FIND_EXIT_TOP`
* `FIND_EXIT_RIGHT`
* `FIND_EXIT_BOTTOM`
* `FIND_EXIT_LEFT`
				
또는 아래 오류 코드 중 하나를 반환합니다:
{% api_return_codes %}
ERR_NO_PATH | 경로를 찾을 수 없습니다.
ERR_INVALID_ARGS | 위치 정보가 올바르지 않습니다.
{% endapi_return_codes %}



{% api_method Game.map.findRoute 'fromRoom, toRoom, [opts]' 3 %}

```javascript
const route = Game.map.findRoute(creep.room, anotherRoomName);
if(route.length > 0) {
    console.log('Now heading to room '+route[0].room);
    const exit = creep.pos.findClosestByRange(route[0].exit);
    creep.moveTo(exit);
}
```

```javascript
const route = Game.map.findRoute(creep.room, anotherRoomName, {
	routeCallback(roomName, fromRoomName) {
		if(roomName == 'W10S10') {	// avoid this room
			return Infinity;
		}
		return 1;
	}});
```

```javascript
let from = new RoomPosition(25, 25, 'E1N1');
let to = new RoomPosition(25, 25, 'E4N1');

// Use `findRoute` to calculate a high-level plan for this path,
// prioritizing highways and owned rooms
let allowedRooms = { [ from.roomName ]: true };
Game.map.findRoute(from.roomName, to.roomName, {
	routeCallback(roomName) {
		let parsed = /^[WE]([0-9]+)[NS]([0-9]+)$/.exec(roomName);
		let isHighway = (parsed[1] % 10 === 0) || 
		                (parsed[2] % 10 === 0);
		let isMyRoom = Game.rooms[roomName] &&
			Game.rooms[roomName].controller &&
			Game.rooms[roomName].controller.my;
		if (isHighway || isMyRoom) {
			return 1;
		} else {
			return 2.5;
		}
	}
}).forEach(function(info) {
	allowedRooms[info.room] = true;
});

// Invoke PathFinder, allowing access only to rooms from `findRoute`
let ret = PathFinder.search(from, to, {
	roomCallback(roomName) {
		if (allowedRooms[roomName] === undefined) {
			return false;
		}
	}
});

console.log(ret.path);
```

지정한 방에서 다른 방까지의 라우트를 찾습니다.

{% api_method_params %} 
fromRoom : string, <a href="#Room">Room</a>
시작 방 이름 또는 Room 객체입니다.
===
toRoom : string, <a href="#Room">Room</a>
도착 방 이름 또는 Room 객체입니다.
===
opts (optional) : object
다음 옵션을 가질 수 있는 객체입니다:
						<ul>
							<li>
								<div class="api-arg-title">routeCallback</div>
								<div class="api-arg-type">function</div>
								<div class="api-arg-desc">이 콜백은 <code>function(roomName, fromRoomName)</code> 형태로 두 인자를 받습니다. 해당 방으로 “진입”하는 비용을 계산하는 데 사용할 수 있습니다. 예를 들어 내 방을 우선시하거나 특정 방을 회피할 수 있습니다. 부동소수점 비용을 반환하거나, <code>Infinity</code>를 반환해 해당 방을 차단할 수 있습니다.</div>
							</li>
						</ul>
					
{% endapi_method_params %}


### 반환 값

아래 형식의 라우트 배열을 반환합니다:

```javascript-content
[
    { exit: FIND_EXIT_RIGHT, room: 'arena21' },
    { exit: FIND_EXIT_BOTTOM, room: 'arena22' },
    ...
]
```

또는 아래 오류 코드 중 하나를 반환합니다:
{% api_return_codes %}
ERR_NO_PATH | 경로를 찾을 수 없습니다.
{% endapi_return_codes %}



{% api_method Game.map.getRoomLinearDistance 'roomName1, roomName2, [continuous]' 0 %}

```javascript
Game.map.getRoomLinearDistance('W1N1', 'W4N2'); // 3
Game.map.getRoomLinearDistance('E65S55','W65S55', false) // 131
Game.map.getRoomLinearDistance('E65S55','W65S55', true) // 11
```

두 방 사이의 직선 거리(방 단위)를 구합니다. 이 함수로 터미널을 통한 자원 전송 비용을 대략 추정하거나, 옵저버/핵 사용 거리를 가늠할 수 있습니다.

{% api_method_params %}
roomName1 : string
첫 번째 방의 이름입니다.
===
roomName2 : string
두 번째 방의 이름입니다.
===
continuous (optional) : boolean
월드 맵의 경계를 이어진(continuous) 것으로 취급할지 여부입니다. 거래나 터미널 전송 비용을 계산하고 싶다면 true로 설정하세요. 기본값은 false입니다.
{% endapi_method_params %}


### 반환 값

두 방 사이의 방 개수(거리)를 숫자로 반환합니다.


{% api_method Game.map.getRoomTerrain 'roomName' 0 %}

```javascript
const terrain = Game.map.getRoomTerrain("E2S7");
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

{% api_method_params %}
roomName : string
방 이름입니다.
{% endapi_method_params %}


### 반환 값

새 <a href="#Room-Terrain">`Room.Terrain`</a> 객체를 반환합니다.


{% api_method Game.map.getTerrainAt 'x, y, roomName|pos' 1 '{"deprecated": "Please use a faster method [`Game.map.getRoomTerrain`](#Game.map.getRoomTerrain) instead."}'%}

```javascript
console.log(Game.map.getTerrainAt(25,20,'W10N10'));
```

```javascript
console.log(Game.map.getTerrainAt(new RoomPosition(25,20,'W10N10'));
```

지정한 방 좌표에서의 지형 타입을 가져옵니다. 이 메서드는 내가 접근할 수 없는 방을 포함해, 월드의 어떤 방에도 동작합니다.

{% api_method_params %}
x : number
방 내부의 X 좌표입니다.
===
y : number
방 내부의 Y 좌표입니다.
===
roomName : string
방 이름입니다.
===
pos : <a href="#RoomPosition">RoomPosition</a>
위치 객체입니다.
{% endapi_method_params %}


### 반환 값

아래 문자열 값 중 하나를 반환합니다:
<ul>
					<li><code>plain</code></li>
					<li><code>swamp</code></li>
					<li><code>wall</code></li>
				</ul>


{% api_method Game.map.getWorldSize 0 %}

월드 모서리 사이의 방 개수로 월드 크기를 반환합니다. 예를 들어 W50N50부터
E50S50까지의 방이 있는 월드에서는 이 메서드가 102를 반환합니다.

{% api_method Game.map.isRoomAvailable 'roomName' 2 '{"deprecated": "Please use [`Game.map.getRoomStatus`](#Game.map.getRoomStatus) instead."}'%}

```javascript
if(Game.map.isRoomAvailable(room.name)) {
    creep.moveTo(room.getPositionAt(25,25));
}
```

해당 방으로 이동이 가능한지 확인합니다.

{% api_method_params %}
roomName : string
방 이름입니다.
{% endapi_method_params %}


### 반환 값

불리언 값을 반환합니다.

{% api_method Game.map.getRoomStatus 'roomName' 2 %}

```javascript
if(Game.map.getRoomStatus(room.name).status == 'normal') {
    nuker.launchNuke(room.getPositionAt(25,25));
}
```

지정한 이름의 방에 대한 “가용 상태”를 가져옵니다. 시작 구역에 대해 더 알아보려면 [이 문서](/start-areas.html)를 참고하세요.

{% api_method_params %}
roomName : string
방 이름입니다.
{% endapi_method_params %}


### 반환 값

다음 속성을 포함하는 객체를 반환합니다:

property | type | description
---|---
`status` | string | 아래 문자열 값 중 하나입니다: <ul><li><code>normal</code> &ndash; 제한이 없는 방</li><li><code>closed</code> &ndash; 이용할 수 없는 방</li><li><code>novice</code> &ndash; 초보 구역(novice area)의 일부인 방</li><li><code>respawn</code> &ndash; 리스폰 구역(respawn area)의 일부인 방</li></ul>
`timestamp` | number | 상태 만료 시각으로, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime#Syntax">UNIX epoch 이후 밀리초</a>로 표현됩니다. 상태가 영구적이라면 이 속성은 null입니다.  

