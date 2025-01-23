# 게임. 지도

 전역 객체로써의 세계 지도를 나타냅니다. 방들 사이를 이동하는데 사용합니다.

{% api_method Game. map. describeExits '방명' 1 %}

```javascript
const exits = Game.map.describeExits('W8N3');
```

주어진 이름의 방에서 사용가능한 출구를 모두 나열합니다.
{% endapi_method_params %}

roomName : string
객실명을 나타내는 문자열입니다.
{% api_method_params %}

### 반환값

방의 이름을 지정한 경우, 아래와 같은 출구에 대한 정보를 가진 객체를 돌려줍니다. 그렇지 않으면 null입니다.
```javascript-content
{
    "1": "W8N4",    // TOP
    "3": "W7N3",    // RIGHT
	"5": "W8N2",    // BOTTOM
	"7": "W9N3"     // LEFT
}
```

{% api_method Game. map. findExit '출발 객실명, 목적지 객실명 [옵션]' 3 %}
```javascript-content
if(creep. room !== undefined && creep. room. name === 'W8N3' && 
    Game.map.findExit('W8N3', 'W7N3', {})) {
        // ...
    } else {
        console.log('Bad route!');
    }
```

= anotherRoomName) {
    const exitDir = Game.map.findExit(creep.room, anotherRoomName); // 찾기
    const exit = creep.pos.findClosestByRange(exitDir); // 찾기
    creep.moveTo(exit);
}
else {
    // go to some place in another room
}
```
```javascript
creep.moveTo(new RoomPosition(25, 25, anotherRoomName));
```
{% api_method_params %}
fromRoom : string, Room
Start room name or room object.
===
toRoom : string, Room
Finish room name or room object.
===
opts (optional) : object
An object with the pathfinding options. 찾기 <code><a href="#Game.map.findRoute">findRoute</a></code>.

게임.map.findRoute('fromRoom', 'toRoom', '[opts]')
{% api_method %}
{% api_params_list
    key = 'creep.room'
    desc = 'The starting room.'
    type = 'required, number'
    default_value = nil
    help_text = 'The starting position of the creep.'
    required = true
    repeat = false
%}
{% api_params_list
    key = 'anotherRoomName'
    desc = 'The destination room name.'
    type = 'required, string'
    default_value = nil
    help_text = 'The destination to move to.'
    required = true
    repeat = false
%}
{% api_params_list
    key = '[opts]'
    desc = 'Optional parameters.'
    type = 'optional, mixed'
    default_value = nil
    help_text = 'The optional parameters for the findRoute function.'
    required = false
    repeat = false
%}
{% api_return_codes %}
ERR_NO_PATH | Path can not be found.
ERR_INVALID_ARGS | The location is incorrect.
{% endapi_return_codes %}


### 반환값

routeRoomDirection 상수, 다음 중 하나:
* `FIND_EXIT_TOP`
* `FIND_EXIT_RIGHT`
* `FIND_EXIT_BOTTOM`
* `FIND_EXIT_LEFT`
   
또는 다음 오류코드 중 하나:
{% api_return_codes %}
ERR_NO_PATH | 경로를 찾을 수 없습니다.
ERR_INVALID_ARGS | 위치가 잘못되었습니다.
{% endapi_return_codes %}


{% api_method Game. map. findRoute 'fromRoom, toRoom, [opts]' 3 %}

```javascript
const route = Game. map. findRoute(creep. room, anotherRoomName);
if (route. length > 0) {
    console. log('Now heading to room ' + route[0]. room);
    const exit = creep. pos. findClosestByRange(route[0]. exit);
    creep.

test(RoomPosition(25, 25, 'E1N1')) // avoid this room
	return Infinity;
}, allowedRooms: { [from.roomName]: true}
});
```

"javascript"에서 "익스플로러"를, "for each"에서 "foreach"를, "roomCallback(roomName)"에서 "roomName"을 각각 번역하겠습니다.

```javascript
// Get the list of all rooms for the given map and player character
let parsed = Game. getMapAndRooms(mapId);

Object. keys(parsed). filter(roomName => {
	return exec(roomName);
}). every(function(roomName) {
	if (exec(roomName)) return true;
	return false;
})();

// Allowed rooms that can be accessed from the given room
allowedRooms = {};
Object. keys(parsed). filter(roomName => {
	return exec(roomName);
}). every(function(roomName) {
	if (exec(roomName)) {
		let isHighway = (parsed[1] % 10 === 0) || 
		                (parsed[2] % 10 === 0);
		let isMyRoom = Game. rooms[roomName] &&
			Game. rooms[roomName]. controller &&
			(Game. rooms[roomName]. controller. my || '') ;
		if (isHighway || isMyRoom) {
			allowedRooms[roomName] = true;
		} else {
			allowedRooms[roomName] = 2. 5;
		}
	}
});

// Find route from given room to another room
let path = PathFinder. search(from, to, {
	roomCallback: function(roomName) {
		if (allowedRooms[roomName] === undefined) {
			return false;
		}
	}
});

console. log(path. path);
```

{% api_method_params %}
fromRoom : string, <a href="#Room">Room</a>
<pre><code>fromRoom : string, Room</code></pre>
fromRoom 이름을 입력하거나 객실 개체를 제공합니다.
===
toRoom : string, <a href="#Room">Room</a>
<pre><code>toRoom : string, Room</code></pre>
방의 이름이나 객실 개체를 마칩니다.
===
opts (optional) : object
객체에 다음 옵션을 지정할 수 있습니다.
					<ul>
						<li>
							<div class="api-arg-title">routeCallback</div>
							<div class="api-arg-type">function</div>
							<div class="api-arg-desc">이 콜백에는 두 개의 인수가 전달됩니다. <code>function(roomName, fromRoomName)</code>. 객실로 들어갈 때 비용을 계산하기 위해 사용할 수 있습니다. 이를 통해 자신의 방을 우선시하거나 일부 방을 피할 수 있습니다.</div>
</li>
					</ul>
{% /api_method_params %}

객체 방법 Game.map.getRoomLinearDistance()는 지정된 두 개의 룸 또는 하나의 룸(연속적인 경우)에서 다른 룸까지의 직선 거리를 반환합니다.
{% api_method_params %}
{% api_param name="room1" type=String default='' required=true help='The first room' description='The name of the first room.' maxLength=50 minLength=1 %}
{% api_param name="room2" type=String default='' required=true help='The second room' description='The name of the second room.' maxLength=50 minLength=1 %}
{% api_param name="continuous" type=Boolean default=false required=false help='Continuous path' description='If true, the path should be continuous. If false, no-path will be returned if it is not possible to find a continuous path.' %}
{% api_return_type %}
Number
{% endapi_method_params %}

### 반환값

다음과 같은 형식의 경로 배열:
```javascript-content
[
    { exit: FIND_EXIT_RIGHT, room: 'arena21' },
    { exit: FIND_EXIT_BOTTOM, room: 'arena22' },
    ... 
]
```
또는 다음과 같은 오류 코드 중 하나:
{% api_return_codes %}
ERR_NO_PATH | 경로를 찾을 수 없습니다.
{% endapi_return_codes %}


{% api_method Game.map.getRoomLinearDistance 'roomName1, roomName2, [continuous]' 0 %}

```javascript
Game.map.getRoomLinearDistance('W1N1', 'W4N2'); // 3
Game.map.getRoomLinearDistance('E65S55','W65S55', false) // 131
Game.

`getRoomLinearDistance`을 사용하여 두 방 사이의 직선 거리(룸 단위)를 얻으십시오. 자원을 터미널이나 옵서버, 핵을 통해 보내는 데 드는 에너지 비용을 계산하기 위해 이 함수를 사용할 수 있습니다.

{% api_method_params %}
roomName1 : 문자열
첫 번째 방의 이름입니다. ===
roomName2 : 문자열
두 번째 방의 이름입니다. ===
continuous (선택적) : 부울
월드맵을 경계에서 연속으로 취할지 여부를 결정합니다. 교역이나 터미널 보내는 비용을 계산하기 위해 true로 설정하십시오. 기본값은 false입니다. {% endapi_method_params %}

### 반환값

두 방 사이의 룸 수를 나타내는 숫자입니다.

getRoomTerrain 'roomName' {% /api_method %}

```javascript
const terrain = Game.map.getRoomTerrain("E2S7");

// get the terrain type at a specific x/y position
switch(terrain.get(10,15)) {
    case TERRAIN_MASK_WALL:
        break;
    case TERRAIN_MASK_SWAMP:
        break;
    case 0:
        break;
}
```

<a href="#Room-Terrain">`Room. Terrain`</a> object는 정적 지형 데이터에 빠르게 액세스할 수 있도록 해줍니다. 이 메서드는 액세스 권한이 없더라도 전세계의 모든 방에서 작동합니다.

{% api_method_params %}
roomName : string
방의 이름입니다. {% endapi_method_params %}

### 반환값
새로운 <a href="#Room-Terrain">`Room. Terrain`</a> object를 반환합니다. {% api_return_type %}

{% api_method Game. map.getRoomTerrain 'roomName' {% /api_method %}
```javascript
const terrain = Game.map.getRoomTerrain("E2S7");

// 특정 x/y 위치에서 지형 유형을 가져옵니다.
switch(terrain.get(10,15)) {
    case TERRAIN_MASK_WALL:
        break;
    case TERRAIN_MASK_SWAMP:
        break;
    case 0:
        break;
}
```

getTerrainAt 'x, y, roomName|pos' 1 '{"deprecated": "Please use a faster method [`Game.map.getRoomTerrain`](#Game.map.getRoomTerrain) instead. "}'%}

```javascript
console.log(Game.map.getTerrainAt(25,20,'W10N10'));
```

```javascript
console.log(Game.map.getTerrainAt(new RoomPosition(25,20,'W10N10')));
```

지정된 룸 위치에서의 지형 유형을 가져옵니다. 이 메서드는 접근 권한이 없더라도 게임 세계의 모든 방에서 작동합니다.

{% api_method_params %}
x : number
룸의 X 위치.
===
y : number
룸의 Y 위치.
===
roomName : string
룸 이름.
===
pos : RoomPosition
position 객체.

{% api_method_params %}
### 반환값

다음의 문자열 중 하나:
<ul>
				<li><code>plain</code></li>
				<li><code>swamp</code></li>
				<li><code>wall</code></li>
			</ul>

{% api_method Game.map.getWorldSize(0) %}

룸 모퉁이 사이의 넘버로서 월드 크기를 리턴합니다. 예를 들어, W50N50에서 E50S50 까지의 월드에 대해 이 메소드는 102를 리턴합니다.
{% api_method Game.map.isRoomAvailable('roomName', 2, '{ "deprecated": "please use [Game.map.getRoomStatus](#Game.map.getRoomStatus) instead."}' %}
```javascript
if(Game.map.isRoomAvailable(room.name)) {
    creep.moveTo(room.name);
} else {
    // handle unavailable room here
}

게임.map.getRoomStatus('룸이름') 2 {% endapi_method_params %}

```javascript
if(Game.map.getRoomStatus(r.name).status === 'normal'){
    nukeR.launchNuke(r.getPositionAt(25,25));
}
```

룸 이름으로 사용 가능한 상태를 가져옵니다. [이 문서](/start-areas.html)에서 시작 영역에 대해 자세히 알아보십시오.

{% api_method_params %}
roomName : string
룸 이름.

JavaScript 코드나 대문자로만 된 단어는 번역하지 마세요. 기사를 한국어로 번역하세요. : {% endapi_method_params %}

### 반환값

속성 | 유형 | 설명
---|---
`status` | 문자열 | 다음 중 하나의 문자열 값: <ul><li><code>normal</code> &ndash; 방에 제한 사항이 없습니다.</li><li><code>closed</code> &ndash; 방을 사용할 수 없습니다.</li><li><code>novice</code> &ndash; 방은 초보자 영역의 일부입니다.</li><li><code>respawn</code> &ndash; 방은 부활 영역의 일부입니다.</li></ul>
`timestamp` | 숫자 | 상태 만료 시간 <a href="https://developer. mozilla. org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime#Syntax">UNIX 에포크 시간부터 밀리초 단위로</a>.

이 상태가 영구적인 경우 해당 속성은 null입니다.