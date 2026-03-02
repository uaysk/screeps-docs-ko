# Game

게임플레이에 관한 모든 정보를 담고 있는 주요 전역 게임 객체입니다.


{% api_property Game.constructionSites 'object&lt;string, <a href="#ConstructionSite">ConstructionSite</a>&gt;' %}



ID를 해시 키로 하여, 내 모든 건설 현장을 담고 있는 해시입니다.



{% api_property Game.cpu 'object' %}



CPU 사용량 정보가 들어있는 객체이며, 다음 속성을 포함합니다:

{% api_method_params %}
limit : number
현재 샤드에 할당된 CPU 한도입니다.
===
tickLimit : number
현재 게임 틱에서 사용할 수 있는 CPU 시간의 양입니다.<br>보통 <code>Game.cpu.limit</code>보다 큽니다. <a href="/cpu-limit.html">자세히 보기</a>
===
bucket : number
<a href="/cpu-limit.html#Bucket">버킷</a>에 누적된 미사용 CPU의 양입니다.
===
shardLimits : object<br>&lt;string,number&gt;
샤드 이름을 키로 하여 각 샤드의 한도를 담고 있는 객체입니다. [`setShardLimits`](#Game.setShardLimits)
메서드를 사용해 다시 할당할 수 있습니다.
===
unlocked : boolean
현재 계정에서 전체 CPU가 잠금 해제되어 있는지 여부입니다.
===
unlockedTime : number
계정의 전체 CPU 잠금 해제가 유지되는 시각으로, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime#Syntax">UNIX epoch 이후 밀리초</a>로 표현됩니다. 계정에서 전체 CPU가 잠금 해제되어 있지 않거나, 구독으로 잠금 해제된 경우 이 속성은 정의되지 않습니다.

{% endapi_method_params %}


{% api_property Game.creeps 'object&lt;string, <a href="#Creep">Creep</a>&gt;' %}

```javascript
for(const i in Game.creeps) {
    Game.creeps[i].moveTo(flag);
}
```

크립 이름을 해시 키로 하여, 내 모든 크립을 담고 있는 해시입니다.



{% api_property Game.flags 'object&lt;string, <a href="#Flag">Flag</a>&gt;' %}

```javascript
creep.moveTo(Game.flags.Flag1);
```

플래그 이름을 해시 키로 하여, 내 모든 플래그를 담고 있는 해시입니다.



{% api_property Game.gcl 'object' %}



내 <a href="/control.html#Global-Control-Level">글로벌 컨트롤 레벨</a>이며, 다음 속성을 가진 객체입니다:

{% api_method_params %}
level : number
현재 레벨입니다.
===
progress : number
다음 레벨까지의 현재 진행도입니다.
===
progressTotal : number
다음 레벨에 도달하는 데 필요한 진행도입니다.
{% endapi_method_params %}

{% api_property Game.gpl 'object' %}

내 글로벌 파워 레벨이며, 다음 속성을 가진 객체입니다:

{% api_method_params %}
level : number
현재 레벨입니다.
===
progress : number
다음 레벨까지의 현재 진행도입니다.
===
progressTotal : number
다음 레벨에 도달하는 데 필요한 진행도입니다.
{% endapi_method_params %}



{% api_property Game.map object %}



월드 맵을 나타내는 전역 객체입니다. 아래의 [문서](#Game-map)를 참고하세요.



{% api_property Game.market object %}



게임 내 마켓을 나타내는 전역 객체입니다. 아래의 [문서](#Game-market)를 참고하세요.


{% api_property Game.powerCreeps 'object&lt;string, <a href="#PowerCreep">PowerCreep</a>&gt;' %}

```javascript
Game.powerCreeps['PC1'].moveTo(flag);
```

이름을 해시 키로 하여 내 모든 파워 크립을 담고 있는 해시입니다. 월드에 아직 스폰되지 않은 파워 크립도
여기에서 접근할 수 있습니다.



{% api_property Game.resources 'object' %}



픽셀이나 CPU 언락 같은, 계정에 귀속된 전역 리소스를 담는 객체입니다. 각 키는 리소스 상수이며, 값은 해당 리소스의 보유량입니다.



{% api_property Game.rooms 'object&lt;string, <a href="#Room">Room</a>&gt;' %}



방 이름을 해시 키로 하여, 내가 접근 가능한 모든 방을 담고 있는 해시입니다. 해당 방에 내 크립이 있거나 내가 소유한 구조물이 있으면 방은 “보이는” 상태가 됩니다.

{% api_property Game.shard 'object' %}

현재 스크립트가 실행 중인 월드 샤드 정보를 설명하는 객체입니다.

{% api_method_params %}
name : string
샤드 이름입니다.
===
type : string
현재는 항상 `normal`입니다.
===
ptr : boolean
이 샤드가 [PTR](/ptr.html)에 속하는지 여부입니다.
{% endapi_method_params %}

{% api_property Game.spawns 'object&lt;string, <a href="#StructureSpawn">StructureSpawn</a>&gt;' %}

```javascript
for(const i in Game.spawns) {
    Game.spawns[i].createCreep(body);
}
```

스폰 이름을 해시 키로 하여, 내 모든 스폰을 담고 있는 해시입니다.



{% api_property Game.structures 'object&lt;string, <a href="#Structure">Structure</a>&gt;' %}



구조물 ID를 해시 키로 하여, 내 모든 구조물을 담고 있는 해시입니다.



{% api_property Game.time 'number' %}

```javascript
console.log(Game.time);
```

시스템 게임 틱 카운터입니다. 매 틱마다 자동으로 1씩 증가합니다. <a href="/game-loop.html">자세히 보기</a>


{% api_method Game.cpu.getHeapStatistics '' 1 %}

```javascript
let heap = Game.cpu.getHeapStatistics();
console.log(`Used ${heap.total_heap_size} / ${heap.heap_size_limit}`);
```

*이 메서드는 [계정 런타임 설정](https://screeps.com/a/#!/account/runtime)에서 **Virtual machine**이 **Isolated**로 설정된 경우에만 사용할 수 있습니다.*

이 메서드를 사용하면 가상 머신의 힙 통계를 얻을 수 있습니다. 반환 값은 Node.js 함수 [`v8.getHeapStatistics()`](https://nodejs.org/dist/latest-v8.x/docs/api/v8.html#v8_v8_getheapstatistics)와 거의 동일합니다. 다만 이 함수는 추가 속성 하나를 더 반환합니다: `externally_allocated_size`는 v8 힙에는 포함되지 않지만 이 isolate의 메모리 한도에 포함되는, 현재 할당된 메모리의 총량입니다. 일정 크기 이상의 `ArrayBuffer` 인스턴스는 외부 할당(externally allocated)되며, 이 값에 포함됩니다.



### 반환 값

아래 형식의 힙 통계 객체를 반환합니다:

```javascript-content
{
  "total_heap_size": 29085696,
  "total_heap_size_executable": 3670016,
  "total_physical_size": 26447928,
  "total_available_size": 319649520,
  "used_heap_size": 17493824,
  "heap_size_limit": 343932928,
  "malloced_memory": 8192,
  "peak_malloced_memory": 1060096,
  "does_zap_garbage": 0,
  "externally_allocated_size": 38430000
}
```


{% api_method Game.cpu.getUsed '' 1 %}

```javascript
if(Game.cpu.getUsed() > Game.cpu.tickLimit / 2) {
    console.log("Used half of CPU already!");
}
```

```javascript
for(const name in Game.creeps) {
    const startCpu = Game.cpu.getUsed();

    // creep logic goes here

    const elapsed = Game.cpu.getUsed() - startCpu;
    console.log('Creep '+name+' has used '+elapsed+' CPU time');
}

```

현재 게임 틱의 시작부터 지금까지 사용한 CPU 시간의 양을 가져옵니다. 시뮬레이션 모드에서는 항상 0을 반환합니다.



### 반환 값

현재까지 사용한 CPU 시간을 부동소수점 수로 반환합니다.


{% api_method Game.cpu.halt '' 1 %}

```javascript
Game.cpu.halt();
```

*이 메서드는 [계정 런타임 설정](https://screeps.com/a/#!/account/runtime)에서 **Virtual machine**이 **Isolated**로 설정된 경우에만 사용할 수 있습니다.*

런타임 환경을 리셋하고 힙 메모리의 모든 데이터를 삭제합니다.

{% api_method Game.cpu.setShardLimits 'limits' 1 %}

```javascript
Game.cpu.setShardLimits({shard0: 20, shard1: 10});
```

샤드별 CPU 한도를 할당합니다. CPU 총량은
[`Game.cpu.shardLimits`](#Game.cpu)와 동일하게 유지되어야 합니다. 이 메서드는 12시간에 한 번만 사용할 수 있습니다.

{% api_method_params %}
limits : object&lt;string, number&gt;
`Game.cpu.shardLimits`와 같은 형식으로, 각 샤드의 CPU 값을 담은 객체입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_BUSY | 12시간 쿨다운이 아직 끝나지 않았습니다.
ERR_INVALID_ARGS | 인자가 올바른 샤드 한도 객체가 아닙니다.
{% endapi_return_codes %}


{% api_method Game.cpu.unlock '' 1 %}

```javascript
if(Game.cpu.unlockedTime && ((Game.cpu.unlockedTime - Date.now()) < 1000*60*60*24)) {
    Game.cpu.unlock();
}
```

계정의 전체 CPU를 추가로 24시간 동안 잠금 해제합니다. 이 메서드는 계정에 귀속된 CPU 언락 리소스 1개를 소비합니다(참고: [`Game.resources`](#Game.resources)).
현재 계정에서 전체 CPU가 잠금 해제되어 있지 않다면, 실제로 잠금 해제가 적용되기까지 시간이 조금 걸릴 수 있습니다(최대 5분).

### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_FULL | 구독으로 CPU가 잠금 해제되어 있습니다.
ERR_NOT_ENOUGH_RESOURCES | 계정에 `cpuUnlock` 리소스가 충분하지 않습니다.
{% endapi_return_codes %}

{% api_method Game.cpu.generatePixel '' 3 %}

```javascript
if(Game.cpu.bucket == 10000) {
    Game.cpu.generatePixel();
}
```

버킷에서 CPU 10000을 사용해 픽셀 리소스 1개를 생성합니다.

### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_ENOUGH_RESOURCES | 버킷에 CPU가 충분하지 않습니다.
{% endapi_return_codes %}


{% api_method Game.getObjectById 'id' 1 %}

```javascript
creep.memory.sourceId = creep.pos.findClosestByRange(FIND_SOURCES).id;
const source = Game.getObjectById(creep.memory.sourceId);
```

지정한 고유 ID를 가진 객체를 가져옵니다. 어떤 타입의 게임 객체든 될 수 있습니다. 내가 볼 수 있는 방에 있는 객체만 접근할 수 있습니다.

{% api_method_params %}
id : string
고유 식별자입니다.
{% endapi_method_params %}


### 반환 값

객체 인스턴스를 반환하며, 찾을 수 없으면 null을 반환합니다.

{% api_method Game.notify 'message, [groupInterval]' A %}

```javascript
if(creep.hits < creep.memory.lastHits) {
    Game.notify('Creep '+creep+' has been attacked at '+creep.pos+'!');
}
creep.memory.lastHits = creep.hits;
```

```javascript
if(Game.spawns['Spawn1'].energy == 0) {
    Game.notify(
        'Spawn1 is out of energy',
        180  // group these notifications for 3 hours
    );
}

```

프로필에 등록된 이메일로 사용자 정의 메시지를 보냅니다. 이를 이용해 게임 내 어떤 상황에서도 스스로에게 알림을 설정할 수 있습니다. 한 게임 틱 동안 최대 20개의 알림을 예약할 수 있습니다. 시뮬레이션 룸에서는 사용할 수 없습니다.

{% api_method_params %}
message : string
메시지로 보낼 사용자 정의 텍스트입니다. 최대 길이는 1000자입니다.
===
groupInterval : number
0(기본값)으로 설정하면 알림이 즉시 예약됩니다. 0이 아니면, 다른 알림들과 함께 그룹화되어 나중에 발송되며, 이 값은 분 단위 시간입니다.
{% endapi_method_params %}
