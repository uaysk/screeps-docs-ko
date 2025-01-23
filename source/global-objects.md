## `Game` 객체

게임은 글로벌 [`Game`](/api/#Game) 객체를 통해 작동합니다. 이 객체는 API 참조(/api/) 섹션에서 자세히 설명되어 있습니다. 이 객체를 사용하면 완전한 크립 목록, "리뷰" 방, 명령 실행 등에 액세스할 수 있습니다.

```javascript
var target = Game.spawns.Spawn1;
for(var i in Game.creeps) {
    Game.creeps[i].moveTo(target);
}  
```

매 턴마다 `Game` 객체의 변경 사항은 전달되지 않습니다. 심지어 객체의 속성을 수동으로 변경해도 게임 상태에는 영향을 미치지 않습니다. 속성 변경과 명령 전송은 게임 객체의 특수 메서드를 통해서만 가능합니다.

`Game` 객체는 매 턴마다 새롭게 생성되고 채워집니다.

Memory.creeps[Game.creeps[0].id].John = {...};

To read data from `Memory`, use `JSON. parse` method:

    const dataFromMemory = JSON.parse(Memory.someData);

In order to memorize information between game ticks, you can use the Memory object. 자세한 내용은 다음 기사를 참조하십시오. ## `Memory` object
각 플레이어는 글로벌 객체 `Memory`에 액세스할 수 있으며, 여기에 JSON 형식의 모든 정보를 저장할 수 있습니다. 그 안에 쓰여진 모든 변경사항은 `JSON.stringify`를 통해 자동으로 저장되며, 틱마다 전달되어 설정, 자신의 결정, 일시적인 데이터를 기억할 수 있게 합니다.
    Memory.someData = {...};
플레이어가 사용할 수 있는 메모리의 양은 **2 MB**로 제한됩니다.
게임객체와 연결된 일부 게임객체들은 자체 키를 저장하기 위해 전역 `Memory` 객체에 링크되어 있습니다. 예를 들어, 개별  Creep의 메모리는 다음과 같이 `memory` 속성을 통해 액세스할 수 있습니다:
    Game.creeps[0].memory. 자세한 내용은 아래에서 확인할 수 있습니다. 메모리에서 데이터를 읽으려면 `JSON.parse` 방법을 사용하십시오:
    const dataFromMemory = JSON.parse(Memory.someData);

Memory = {...};

사실,이 속성은 전역 `Memory`객체에서 해당 키의 별칭입니다.

```
Game.creeps.John.memory.role = 'harvester';
console.log(Memory.creeps.John.role); // -> 'harvester'
```

정보는 `Memory`객체를 통해 저장되고 기록됩니다. 하지만 게임 객체는 몇 가지 해당 키에 대한 신속한 액세스를 허용합니다. 편리한 `Memory` 주소 지정 방법을 사용할 수 있습니다.

### 메모리에 게임 객체 저장하기

함수 또는 전체 게임 객체를 `Memory`에 `as is`로 저장해서는 안됩니다. `Memory`객체는 JSON 데이터를 저장하는 데 사용되며 살아있는 객체 참조를 포함할 수 없습니다. 해당 데이터는 관련이 없으므로 `Memory` 객체에 데이터를 저장하기위한 것입니다. 또한 제한된 메모리가 낭비됩니다.

```
// 잘못된 예입니다!
var source = creep.pos;
```

`findClosestByRange(FIND_SOURCES);`를 사용하여 한국어로 번역해줘:

```
creep.memory.source = source;
// ...  
creep.moveTo(creep.memory.source); // ERR_INVALID_TARGET
```
대신 `id` 속성을 갖는 게임 객체를 저장하고 `Game.getItemById()` (/api/#Game.getItemById)를 사용해서 게임 객체의 `id`를 검색합니다:

```
// 이것이 올바른 방법입니다.
var source = creep.pos.findClosestByRange(FIND_SOURCES);
creep.memory.sourceId = source.id;
// ... 
var source = Game.getItemById(creep.memory.sourceId);
creep.moveTo(source); // OK
```
### 직렬화

메모리 객체는 문자열화된 형태로 저장되며, `tick`에서 스크립트에서 처음 접근할 때마다 `JSON.parse` 방법의 도움을 받아 분석됩니다.

CPU 비용이 많이 드는 이 방법 실행은 스크립트의 비용으로 계산됩니다. 원하신다면 `[`RawMemory`]`(/api/#RawMemory) 글로벌 변수를 사용해서 자체적인 문자열화/역문자열화를 구현할 수 있습니다. RawMemory는 원래의 메모리 표현을 문자열로 저장합니다. 실제로, 기본 memory의 work은 다음과 같은 코드와 일치합니다:

    Memory = JSON.parse(RawMemory.get()); //Memory 개체에 처음 접근할 때
    //... 스크립트 작성
    RawMemory.set(JSON.stringify(Memory));

당신은 `[`RawMemory`]`(/api/#RawMemory) getter/setter를 사용해서 자체적인 알고리즘을 구현할 수 있습니다.