# PathFinder
 
게임 월드에서 경로 탐색(pathfinding)을 위한 강력한 메서드들을 제공합니다. 이 모듈은 빠른 네이티브 C++ 코드로 작성되었으며, 커스텀 이동 비용과 여러 룸에 걸친 경로를 지원합니다.

{% api_method PathFinder.search 'origin, goal, [opts]' 3 %}

```javascript
  let creep = Game.creeps.John;

  let goals = _.map(creep.room.find(FIND_SOURCES), function(source) {
    // We can't actually walk on sources-- set `range` to 1 
    // so we path next to it.
    return { pos: source.pos, range: 1 };
  });

  let ret = PathFinder.search(
    creep.pos, goals,
    {
      // We need to set the defaults costs higher so that we
      // can set the road cost lower in `roomCallback`
      plainCost: 2,
      swampCost: 10,

      roomCallback: function(roomName) {

        let room = Game.rooms[roomName];
        // In this example `room` will always exist, but since 
        // PathFinder supports searches which span multiple rooms 
        // you should be careful!
        if (!room) return;
        let costs = new PathFinder.CostMatrix;

        room.find(FIND_STRUCTURES).forEach(function(struct) {
          if (struct.structureType === STRUCTURE_ROAD) {
            // Favor roads over plain tiles
            costs.set(struct.pos.x, struct.pos.y, 1);
          } else if (struct.structureType !== STRUCTURE_CONTAINER &&
                     (struct.structureType !== STRUCTURE_RAMPART ||
                      !struct.my)) {
            // Can't walk through non-walkable buildings
            costs.set(struct.pos.x, struct.pos.y, 0xff);
          }
        });

        // Avoid creeps in the room
        room.find(FIND_CREEPS).forEach(function(creep) {
          costs.set(creep.pos.x, creep.pos.y, 0xff);
        });

        return costs;
      },
    }
  );

  let pos = ret.path[0];
  creep.move(creep.pos.getDirectionTo(pos));
```

<code>origin</code>과 <code>goal</code> 사이의 최적 경로를 찾습니다.

{% api_method_params %}
origin : <a href="#RoomPosition">RoomPosition</a>
시작 위치.
===
goal : object

goal 하나 또는 goal 배열입니다. goal이 여러 개라면, 그 중에서 가장 저렴한(비용이 낮은) 경로가 반환됩니다. goal은 RoomPosition이거나 아래에 정의된 오브젝트입니다.

<em><strong>중요:</strong></em> 목표가 걸을 수 없는 대상(예: source)이라면, <code>range</code>를 최소 1로 설정해야 합니다. 그렇지 않으면 걸어갈 수 없는 타깃을 찾느라 많은 CPU를 낭비할 수 있습니다.
					<ul>
						<li>
							<div class="api-arg-title">pos</div>
							<div class="api-arg-type"><a href="#RoomPosition"><code>RoomPosition</code></a></div>
							<div class="api-arg-desc">대상.</div>
						</li>
						<li>
							<div class="api-arg-title">range</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">goal로 간주되기 전까지 <code>pos</code>에 도달해야 하는 거리. 기본값은 0입니다.</div>
						</li>
					</ul>
				
===
opts (optional) : object
추가 경로 탐색 플래그를 담은 오브젝트입니다.
<ul>
    <li>
        <div class="api-arg-title">roomCallback</div>
        <div class="api-arg-type">function</div>
        <div class="api-arg-desc">경로 탐색기가 특정 룸에 대한 <a href="#PathFinder-CostMatrix"><code>CostMatrix</code></a> 생성을 요청할 때 호출됩니다. 콜백은 <code>roomName</code> 인자 하나를 받습니다. 이 콜백은 검색(search)당 룸별로 한 번만 호출됩니다. 같은 룸에서 같은 틱에 여러 경로 탐색을 실행한다면, CostMatrix를 캐싱해 속도를 높이는 것을 고려할 수 있습니다. CostMatrix에 대한 더 자세한 내용은 아래 문서를 참고하세요. 콜백에서 <code>false</code>를 반환하면 해당 룸은 탐색되지 않으며, <code>maxRooms</code>에도 포함되지 않습니다.</div>
    </li>
    <li>
        <div class="api-arg-title">plainCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">평지(plain) 이동 비용. 기본값은 1입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">swampCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">늪지(swamp) 이동 비용. 기본값은 5입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">flee</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">goal로 <em>향하는</em> 경로 대신, goal로부터 <em>멀어지는</em> 경로를 찾습니다. 모든 goal의 <code>range</code> 밖에 있는 가장 저렴한 경로가 반환됩니다. 기본값은 false입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">maxOps</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">허용되는 최대 경로 탐색 연산 수. 대략 1 op ~ 0.001 CPU 비율로 검색에 사용되는 CPU 시간을 제한할 수 있습니다. 기본값은 2000입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">maxRooms</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">탐색할 최대 룸 수. 기본값은 16이며, 최대값은 64입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">maxCost</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">반환될 경로의 최대 비용. 어느 시점에서든 경로 탐색기가 `maxCost` 이하 비용으로 경로를 찾을 수 없다고 판단하면 즉시 탐색을 중단합니다. 기본값은 Infinity입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">heuristicWeight</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">A\* 공식 <code>F = G + weight \* H</code>에서 휴리스틱에 적용할 가중치입니다. A\* 알고리즘 메커니즘을 이해하는 경우에만 사용하세요! 기본값은 1.2입니다.</div>
    </li>
</ul>
				
{% endapi_method_params %}

### 반환 값

다음 프로퍼티를 가진 오브젝트:

property | description
---|---
`path` | RoomPosition 오브젝트 배열.
`ops` | 이 경로를 계산하기 전까지 수행된 총 연산 수.
`cost` | `plainCost`, `swampCost`, 그리고 제공된 CostMatrix 인스턴스들로부터 계산된 총 비용.
`incomplete` | 경로 탐색기가 완전한 경로를 찾지 못하면 true입니다. 이 경우에도 `path`에는 부분 경로가 들어 있으며, 검색 파라미터를 기준으로 찾을 수 있었던 “가장 가까운” 경로를 나타냅니다.

{% api_method PathFinder.use 'isEnabled' 0 '{"deprecated": true}' %} 

```javascript
PathFinder.use(true);
Game.creeps.John.moveTo(Game.spawns['Spawn1']);
```

게임 오브젝트 메서드에서 이 새 실험적 pathfinder를 사용할지 여부를 지정합니다. 이 메서드는 매 틱 호출되어야 합니다. 다음 메서드의 동작에 영향을 줍니다: <a href="#Room.findPath"><code>Room.findPath</code></a>, <a href="#RoomPosition.findPathTo"><code>RoomPosition.findPathTo</code></a>, <a href="#RoomPosition.findClosestByPath"><code>RoomPosition.findClosestByPath</code></a>, <a href="#Creep.moveTo"><code>Creep.moveTo</code></a>.

{% api_method_params %}
isEnabled : boolean
새 pathfinder를 활성화할지 비활성화할지. 기본값은 `true`입니다.
{% endapi_method_params %}

