# PathFinder
 경로 탐색에 사용되는 강력한 방법들을 포함하고 있습니다. 이 모듈은 빠르고 네이티브 C++ 코드로 작성된 것으로, 커스텀 탐색 비용과 여러 방을 아우르는 경로를 지원합니다.

{% api_method PathFinder. search 'origin, goal, [opts]' 3 %}

```javascript
let creep = Game.creeps.John;

let goals = _.map(creep.room.find(FIND_SOURCES), function(source) {
  // 소스 위에는 걸어서 못가기 때문에 `range`를 1로 설정합니다.
  // 그러므로 옆으로 이동할 수 있도록 범위 설정
  return { pos: source.pos, range: 1 };
});

let ret = PathFinder.search(
  creep.pos,
  goals
);

pos, goals,
{
// 기본값을 더 높게 설정하여 roadCost를 `roomCallback`에서 더 낮추어야 합니다.
// 이를 통해 `pos`에 있는 코드와 같은 JavaScript를 번역하지 않아도 됩니다.
// 또한, 전체 단어를 대문자로만 표기한 경우에는 번역하지

변경되지 않은 부분: ... else if (struct.structureType !== STRUCTURE_CONTAINER && (struct.structureType !== STRUCTURE_RAMPART || ! struct.my)) { // 걸을 수 없는 건물이 있으면 이동할 수 없다. costs.set(struct.pos.x, struct.pos.y, 0xff); } ... });...
... return costs;
      },
    }
  );

  let pos = ret. path[0];
  creep.move(creep.pos.x, creep.pos.y, ... };

변경된 부분: 새로운 코드를 추가했습니다.
{...}의 내용이 "pos. x, struct. pos. y, 1)"에서 "struct.pos.x, struct.pos.y, 0xff"로 변경되었습니다.

<code>origin</code>과 <code>goal</code> 사이의 최적의 경로를 찾습니다.

<ul>
						<li>
							<div class="api-arg-title">pos</div>
							<div class="api-arg-type"><a href="#RoomPosition"><code>RoomPosition</code></a></div>
							<div class="api-arg-desc">목적지.</div>
						</li>
						<li>
							<div class="api-arg-title">range</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">목적지에 도달하기 전 <code>pos</code> 앞의 범위입니다. 기본값은 0입니다.</div>
						</li>
					</ul>
				
===
opts (선택 사항) : 객체
추가적인 경로 탐색 플래그가 포함된 객체입니다.

<li>
    <div class="api-arg-title">roomCallback</div>
    <div class="api-arg-type">function</div>
    <div class="api-arg-desc">경로 탐색기에서 <a href="#PathFinder-CostMatrix"><code>CostMatrix</code></a>를 만들도록 요청합니다. 특정 룸에 대한 콜백입니다. 인수 하나가 필요합니다. 이 <code>roomName</code>입니다. 해당 룸을 처음 검색할 때만 호출됩니다. 단일 검색에서 하나의 룸에 대한 여러 경로 탐색 작업을 실행하는 경우 코드를 최적화하기 위해 CostMatrix를 캐시할 수 있습니다. 아래의 CostMatrix 설명서를 읽어보십시오. 자세한 내용은 참조하십시오.</div>

콜백 함수에서 <code>false</code>를 반환하면 요청한 룸은 검색되지 않으며 <code>maxRooms</code>에 포함되지 않습니다. </div>
<li>
    <div class="api-arg-title">plainCost</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">평지에서 걷는 비용. 기본값은 1입니다.</div>
</li>
<li>
    <div class="api-arg-title">swampCost</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">늪에서 걷는 비용. 기본값은 5입니다.</div>
</li>

</li>
    <li>
        <div class="api-arg-title">maxTime</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">The maximum time allowed for the algorithm to run. The search will be stopped when the specified time is reached.  Default value is 50.0 seconds. </div>
    </li>
    <li>
        <div class="api-arg-title">minTime</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">The minimum time to wait for the search to start. The algorithm will not be started immediately, but after a certain delay specified in milliseconds.  Default value is 0. </div>
    </li>
    <li>
        <div class="api-arg-title">minTimeBetweenJumps</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">The minimum time between two consecutive jumps. The algorithm will not generate a path that involves many consecutive "jump to goal" actions.  Default value is 0.5. </div>
    </li>
    <li>
        <div class="api-arg-title">quiet</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">Disable printing progress messages to the console.  Default value is true. </div>
    </li>
    <li>
        <div class="api-arg-title">verbose</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">Print detailed progress messages to the console.  Default value is false. </div>
    </li>
</ul>

</div>
<div class="api-arg-title">maxRooms</div>
<div class="api-arg-type">number</div>
<div class="api-arg-desc">최대 허용되는 검색 가능한 방의 개수. 기본값은 16이며, 최대값은 64입니다.</div>
</li>
<li>
<div class="api-arg-title">maxCost</div>
<div class="api-arg-type">number</div>
<div class="api-arg-desc">경로가 반환되는 경로의 최대 허용 비용. `maxCost`보다 낮은 값 또는 같은 값을 가진 경로를 찾을 수 없는 경우 경로 탐색기는 즉시 검색을 중단합니다. 기본값은 무한대입니다.</div>
</li>
</ul>

</li>
<li>
    <div class="api-arg-title">heuristicWeight</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">Weight to apply to the heuristic in the A\* formula <code>F = G + weight \* H</code>.  Use this option only if you understand the underlying A\* algorithm mechanics! The default value is 1. 2.</div>
</li>
</ul>
<h2 id="id_30">Return value</h2>
<p>
An object containing the following properties:

property | description
---|---
`path` | An array of <a href="#RoomPosition">RoomPosition</a> objects.
`ops` | Total number of operations performed before this path was calculated.

cost | 경로의 총 비용을 `plainCost`, `swampCost`및 주어진 모든 `CostMatrix` 인스턴스에서 파생합니다.
incomplete | 경로 찾기가 실패하면 true입니다. 검색 매개 변수를 고려할 때 여전히 최선의 경로는 `path`에 부분적으로 채워져 있습니다.
```javascript
PathFinder. use(true);
Game.creeps.John.moveTo(Game.spawns['Spawn1']);
```
게임 개체 메서드에서 새로운 실험적인 경로 찾기를 사용할지 여부를 지정합니다. 이 메서드는 매 초마다 호출되어야 합니다. 다음 메서드의 동작에 영향을 줍니다:
```javascript
Room.getValidNeighbors() {
    // ...
    var neighbors = this._neighbors;

    // ...
    var cost = NeighborCostMatrix.create();
    for (var I = 0; I < neighbors.length; ++i) {
        var neighbor = neighbors[i];
        cost.add(neighbor, this._costGrid[neighbor.id]);
    }

    return cost;
}
```
```javascript
Room. getPathToRoom(roomId) {
    // ...

    var cost = new CostMatrix();
    for (var I = 0; I < room.creeps.length; ++i) {
        var creep = room.creeps[i];
        cost.add(creep, this._creepCostGrid[creep.id]);
    }

    // ...
}
```

Room.findPath": ", "RoomPosition.findPathTo":", "RoomPosition.findClosestByPath":", "Creep.moveTo":"; 

{% api_method_params %}
isEnabled : boolean, // 새로운 경로 파인더를 활성화할지 비활성화할지의 여부입니다. 기본값은 `true`입니다.