title: 전역 오브젝트
---

## `Game` 오브젝트

여러분은 전역 [`Game`](/api/#Game) 오브젝트를 통해 게임을 조작합니다. 이 오브젝트는 [API Reference](/api/) 섹션에 자세히 설명되어 있습니다. 이 오브젝트를 사용하면 여러분의 크립 전체 목록에 접근하고, 룸을 “살펴보고”, 명령을 내리는 등의 작업을 할 수 있습니다.

```javascript
var target = Game.spawns.Spawn1;
for(var i in Game.creeps) {
    Game.creeps[i].moveTo(target);
}  
```

`Game` 오브젝트의 변경 사항은 틱 간에 전달되지 않습니다. 여러분이 수동으로 어떤 속성을 바꾸더라도 게임 상태에는 영향을 주지 않습니다. 속성 변경과 명령은 오직 게임 오브젝트의 특수 메서드를 통해서만 가능합니다.

`Game` 오브젝트는 매 틱마다 새로 생성되어 데이터로 채워집니다. 게임 틱 사이에 정보를 기억하려면 Memory 오브젝트를 사용할 수 있습니다. 이에 대해서는 다음 문서에서 더 자세히 다룹니다.

## `Memory` 오브젝트

각 플레이어는 전역 오브젝트 `Memory`에 접근할 수 있으며, 그 안에 JSON 형식의 어떤 정보든 저장할 수 있습니다. 여기에 기록된 모든 변경 사항은 `JSON.stringify`로 자동 저장되어 틱 간에 전달되므로, 설정, 의사결정, 임시 데이터 등을 기억할 수 있습니다.

    Memory.someData = {...};

플레이어가 사용할 수 있는 메모리 용량은 **2 MB**로 제한됩니다.

편의를 위해 일부 게임 오브젝트는 전역 `Memory` 오브젝트에 연결되어 있으며, 자신만의 키를 그 안에 저장합니다. 예를 들어 크립의 `memory` 속성을 통해 개별 크립의 메모리에 접근할 수 있습니다:

    Game.creeps.John.memory = {...};

실제로 이 속성은 전역 `Memory` 오브젝트의 해당 키에 대한 별칭(alias)입니다:

    Game.creeps.John.memory.role = 'harvester';
    console.log(Memory.creeps.John.role); // -> 'harvester'

정보는 `Memory` 오브젝트를 통해 저장/기록되지만, 게임 오브젝트는 해당 키들에 대한 빠른 접근만 제공할 뿐입니다. 여러분에게 더 편한 방식으로 메모리를 접근하면 됩니다.

### 메모리에 게임 오브젝트 저장하기

`Memory`에 함수나 전체 게임 오브젝트를 그대로 저장하지 마세요. `Memory`는 JSON 데이터를 저장하기 위한 것이며, 살아있는 오브젝트 레퍼런스를 담을 수 없습니다. 또한 데이터가 유효하지 않을 것이고, 제한된 메모리를 낭비하게 됩니다.

    // 잘못된 예시!
    var source = creep.pos.findClosestByRange(FIND_SOURCES);
    creep.memory.source = source;
    // ... 
    creep.moveTo(creep.memory.source); // ERR_INVALID_TARGET

라이브 오브젝트 대신, 모든 게임 오브젝트가 가진 `id` 속성을 저장한 뒤 [`Game.getObjectById`](/api/#Game.getObjectById)로 오브젝트를 다시 가져오는 것이 좋습니다:

    // 올바른 예시
    var source = creep.pos.findClosestByRange(FIND_SOURCES);
    creep.memory.sourceId = source.id;
    // ...
    var source = Game.getObjectById(creep.memory.sourceId);
    creep.moveTo(source); // OK

### 직렬화(Serialization)

Memory 오브젝트는 문자열로 저장되며, 여러분의 스크립트가 해당 틱에서 처음으로 Memory에 접근할 때 `JSON.parse`로 파싱됩니다. 이 메서드 실행의 CPU 비용은 여러분 스크립트의 사용량에 포함됩니다. 원한다면 전역 변수 [`RawMemory`](/api/#RawMemory)를 사용해 직접 문자열화/역문자열화(stringify/destringify) 알고리즘을 구현할 수 있습니다. `RawMemory`는 원본 메모리 표현을 문자열로 저장합니다. 실제로 기본 메모리 동작은 대략 다음 코드와 같습니다:

    Memory = JSON.parse(RawMemory.get()); // Memory에 첫 접근 시
    // ...your script
    RawMemory.set(JSON.stringify(Memory));

[`RawMemory`](/api/#RawMemory)의 getter/setter를 사용해 여러분만의 알고리즘을 구현할 수 있습니다.

