# 게임

모든 게임 정보를 포함하는 주요 글로벌 게임 객체입니다.

{% api_property Game. constructionSites 'object<string, <a href="#ConstructionSite">ConstructionSite</a>>' %}

해시에서 모든 건설 현장의 ID를 해시 키로 포함하고 있습니다.
{% api_property Game. cpu 'object' %}

게임을 위한 CPU 사용량에 대한 정보가 포함된 객체입니다. 다음과 같은 속성이 있습니다.
{% api_method_params %}
limit : number
현재 샤드의 Game.cpu.limit CPU 제한값입니다.
===
tickLimit : number
사용할 수 있는 CPU 시간의 양을 나타내며, 게임 틱마다 업데이트됩니다. 일반적으로 Game.cpu.limit보다 높습니다. <a href="/cpu-limit.

<h2><a href="#bucket"></a></h2>
<p>The number of unused CPU that has accumulated in the bucket.</p>

<h2><a name="Bucket"></a>Bucket</h2>
<p>A bucket is a container where unused CPU accumulates. This information is stored so that you can revisit your previous inactivity periods to compare them with the present.</p>

<h2><a name="shardLimits"></a>shardLimits</h2>
<p>This is an object containing limits for each shard. The shard names are used as keys. You can use the <code>setShardLimits</code> method to reassign them.</p>

<h2><a name="unlocked"></a>unlocked</h2>
<p>Whether full CPU is currently unlocked for your account.</p>

<h2><a name="unlockedTime"></a>unlockedTime</h2>
<p>The time in milliseconds since the UNIX epoch time until full CPU is unlocked for your account.</p>

› game-state">GameState</a> instance has properties <a href="/api/game#creeps">Game.creeps</a>, <a href="/api/game#flags">Game.flags</a> and <a href="/api/game#gcl">Game.gcl</a>.

gpl 'object' %}

{% api_method_params %}
level : number
현재 레벨입니다.
===
progress : number
다음 단계로 진행하는데 필요한 점수입니다.
===
progressTotal : number
다음 단계로 진행하기 위해 필요한 총 점수입니다.
{% endapi_method_params %}

{% api_property Game.gpl 'object' %}

{% api_method_params %}
level : number
현재 레벨입니다.
===
progress : number
다음 단계로 진행하는데 필요한 점수입니다.
===
progressTotal : number
다음 단계로 진행하기 위해 필요한 총 점수입니다.
{% endapi_method_params %}

전역 객체를 나타내는 JavaScript로 코드를 번역하지 마십시오. 대문자로만 된 단어도 번역하지 마십시오. 아래의 설명서를 참조하여 한국어로 기사를 번역하십시오.

```javascript
Game.map object %}



세계 지도를 나타내는 전역 객체. [문서](#Game-map) 아래를 참조하십시오. 



{% api_property Game.market object %}



게임 중 마켓을 나타내는 전역 객체. [문서](#Game-market) 아래를 참조하십시오. 


{% api_property Game.powerCreeps 'object<a href="#PowerCreep">PowerCreep</a>' %}

```javascript
Game.powerCreeps['PC1'].moveTo(flag);
```

게임을 진행하는 동안 이름이 해시 키인 모든 파워 크립의 해시가 포함된 객체입니다. 스폰되지 않은 파워 크립도 여기에서 액세스할 수 있습니다. 

{% api_property Game.resources 'object' %}



계정과 바인딩된 글로벌 리소스의 객체입니다. 예: 픽셀이나 CPU 잠금 해제.

General properties of a game. 
{% api_property_list %}
max_concurrent : integer
The maximum number of simultaneous players allowed in the game. 

{% api_property %}
num_players : integer
The current number of players in the game. 

{% api_method %}
api/ <string> : json
List all resources available for the specified server. 

<parameters>
server : string
The name or ID of the server to query. 
</parameters>

<return>
object 'Game'
Containing information about the game and the server.

CPU. getHeapStatistics();
```

Return a dump of the current heap statistics in console.log.


<a href="/game-loop. html">Learn more</a>

이 메서드는 [계정 런타임 설정](https://screeps.com/a/#!/account/runtime)에서 **Isolated**로 설정된 Virtual machine일 때만 사용할 수 있습니다.

이 메서드를 사용하여 virtual machine의 힙 통계를 가져올 수 있습니다. 반환값은 Node.js 함수 [v8. getHeapStatistics()](https://nodejs.org/dist/latest-v8.x/docs/api/v8.html#v8_v8_getHeapStatistics)과 거의 동일합니다.

이 기능은 `externally_allocated_size`라는 추가 속성을 반환합니다. `externally_allocated_size`는 v8 힙에 포함되지 않고 현재 할당된 메모리의 총량이며, isolate의 메모리 제한에 영향을 줍니다. 특정 크기를 초과하는 `ArrayBuffer` 인스턴스는 외부적으로 할당되며 여기서 계산됩니다.

getUsed();
  
  // ... more code ...

  const endCpu = Game. cpu. getUsed();

  if(endCpu - startCpu > Game. cpu. tickLimit / 2) {
      console. log(`${name} used half of CPU already!`);
  }
```

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

```javascript
if(Game. cpu. getUsed() > Game. cpu. tickLimit / 2) {
    console. log("Used half of CPU already! ");
}
```

```javascript
for(const name in Game. creeps) {
    const startCpu = Game. cpu. getUsed();
    
    // ... more code ...

    const endCpu = Game. cpu. getUsed();
    
    if(endCpu - startCpu > Game. cpu. tickLimit / 2) {
        console. log(`${name} used half of CPU already!`);
    }
```

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

CPU. getUsed() - startCpu;,
}

```javascript
const elapsed = Game.cpu.getUsed() - startCpu;
console.log('Creep ' + name + ' has used ' + elapsed + ' CPU time');
}
```

CPU 제한을 각 샤드에 할당합니다. `Game.cpu.shardLimits`와 같은 총 CPU 양을 유지해야 합니다. 이 방법은 12시간마다 한 번만 사용할 수 있습니다.

{% api_method_params %}
limits : object&lt;string, number&gt;
각 샤드에 대한 CPU 값이 `Game.cpu.shardLimits`와 같은 형식의 객체입니다.
{% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 성공적으로 예약되었습니다.
ERR_BUSY | 12시간 쿨다운 기간이 아직 끝나지 않았습니다.

ERR_INVALID_ARGS | 인수가 유효하지 않은 shard 제한 객체입니다.

```javascript
if(Game. cpu. unlockedTime && ((Game. cpu. unlockedTime - Date. now()) < 1000*60*60*24)) {
    Game. cpu. unlock();
}
```

계정에 대한 전체 CPU를 추가로 24시간 동안 잠금 해제합니다. 이 메서드는 계정에 바인딩된 CPU 잠금을 1회 잠금 해제합니다(자세한 내용은 `Game. resources` 를 참조하십시오). 현재 전체 CPU가 계정에 잠금 해제되지 않은 경우, 잠금 해제가 계정에 적용되기까지 약간의 시간(최대 5분)이 소요될 수 있습니다.

### 반환값
다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.

ERR_FULL | Your CPU is unlocked with a subscription.
ERR_NOT_ENOUGH_RESOURCES | Your account does not have enough `cpuUnlock` resource.
{% endapi_return_codes %}

{% api_method Game.cpu.generatePixel ''3%}
```javascript
if(Game.cpu.bucket == 10000) {
    Game.cpu.generatePixel();
}
```

10,000 CPU 단위의 자원을 생성합니다.

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 예약되었습니다.
ERR_NOT_ENOUGH_RESOURCES | 버킷에 CPU가 충분하지 않습니다.
{% endapi_return_codes %}

{% api_method Game.getObjectById 'id' 1 %}
```javascript
creep.memory.sourceId = creep.pos;
```
```javascript
if(creep.memory.sourceId === creep.pos) {
    // ...
}
```

translate(code) {Don't translate codes like JavaScript, don't translate words that are only in uppercase letters, Translate this article into Korean : findClosestByRange(FIND_SOURCES). id; const source = Game. getObjectById(creep. memory. sourceId);```
객체를 지정된 고유 ID로 가져옵니다. 이것은 게임 객체의 모든 형태일 수 있습니다. 당신이 볼 수 있는 방에서만 오브젝트를 접근할 수 있습니다. {% api_method_params %}
id : string
고유한 식별자입니다. {% endapi_method_params %}
### 반환값
찾을 수 없는 경우 오브젝트 인스턴스나 null이 반환됩니다. {% api_method Game. notify 'message, [groupInterval]' A %}
```javascript
if(creep. hits < creep. memory. lastHits) {
    Game. notify('Creep '+creep+' has been attacked at '+creep. pos+'! ');
}
creep. memory. lastHits = creep. hits;
```
```javascript
if(Game.

코드를 번역하지 말고 JavaScript, 대문자로만 된 단어도 번역하지 마십시오. Translate this article into Korean : spawns['Spawn1']. energy == 0) {
    Game. notify(
        'Spawn1은 에너지가 없습니다',
        180  // 3 시간 동안 이러한 알림을 그룹화합니다
    );
}

```

프로필 이메일로 사용자 정의 메시지를 보내십시오. 이렇게하면 게임 중 언제든지 알림을 설정할 수 있습니다. 한 게임 틱당 최대 20개의 알림을 예약 할 수 있습니다. 시뮬레이션 룸에서는 사용할 수 없습니다.
{% api_method_params %}
message : string
사용자 정의 텍스트를 보내는 메시지입니다. 최대 길이는 1000자입니다. ======
groupInterval : number
0(기본값)으로 설정하면 알림이 즉시 예약됩니다.

그렇지 않으면 알림이 다른 알림과 함께 그룹화되고 지정된 분 단위의 시간에 따라 나중에 전송됩니다.