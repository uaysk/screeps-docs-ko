# PowerCreep  

Power Creeps는 계정과 연결된 불사의 "영웅"으로, 모든 `PowerSpawn`에서 부활시킬 수 있습니다.
사망한 후 계정의 Global Power Level(게임.gpl참조)을 통해 능력("파워")를 최대까지 업그레이드할 수 있습니다.
<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>생존시간</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>히트수</strong></td>
        <td>레벨 당 1,000개</td>
    </tr>
    <tr>
        <td><strong>용량</strong></td>
        <td>레벨 당 100개</td>
    </tr>    
    </tbody>
</table>
{% api_method PowerCreep.

PowerCreep. create('PowerCreep1', POWER_CLASS. OPERATOR);
```javascript

새로운 PowerCreep 인스턴스를 계정에 생성하는 정적 메서드입니다. 이 상태는 spawn되지 않은 채로 남아있으며, 실제로 세상에 등장시키기 위해서는 [spawn](#PowerCreep.spawn) 메서드를 사용해야 합니다.
이 작업을 수행하려면 계정에 1개의 유효한 Power Level이 있어야 합니다.
{% api_method_params %}
name : string
새로운 PowerCreep의 이름입니다. 이름은 길이가 100자를 넘을 수 없습니다.
===
className : string
새로운 PowerCreep의 클래스로, `POWER_CLASS` 상수 중 하나입니다.

capacity`](#PowerCreep. store.getCapacity). 

{% api_property carry object '{"deprecated": true}' %}

An alias for [`PowerCreep. remove`](#PowerCreep. remove). 

{% api_property carry object '{"deprecated": true}' %}

An alias for [`PowerCreep. update`](#PowerCreep. update). 

{% api_method_params params '{"power_creep_id": number, "room_id": string, "power_levels": number}' %}

{% api_property isInvisible boolean %}
Indicates whether the creep is currently invisible or not. 

{% api_property lastActionTimestamp number %}
A timestamp when the last action was performed on this object. 

{% api_property moveDirection number %}
The direction in which the creep will move next (0: left, 1: right). 

{% api_property moveSpeed number %}
The speed of the creep movement (in units per second). 

{% api_property moveTime number %}
A timer that measures the time since the last directional change. 

{% api_property moveType string %}
The type of movement used by the creature (e.g., "crawl" or "walk"). 

{% api_property name string %}
The name of the creature. 

{% api_property nextMove timestamp %}
A timestamp that represents the time when the next directional change is expected to occur. 

{% api_property power number %}
The current amount of hit points of the creep. 

{% api_property powerMax number %}
The maximum amount of hit points of the creature. 

{% api_property position xnumber ynumber %}
The position of the creature in the game world (in units). 

{% api_property queueSize number %}
The size of the queue holding actions that need to be performed on this object. 

{% api_property queueTime timestamp %}
A timestamp when the last action was added to the queue. 

{% api_property radius number %}
The maximum range over which the creature can see other objects (in units). 

{% api_property radiusMax number %}
The maximum possible range over which the creature can see other objects (in units). 

{% api_property storeId string %}
A unique identifier for the store that owns this object. 

{% api_property type string %}
The type of the object, e.g., "creep". 

{% api_property velocity number %}
The speed of the creature movement (in units per second). 

{% api_property viewRadius number %}
The range over which the creature can see other objects (in units).

{% api_property level number %}
파워 크립의 레벨입니다.
{% api_property memory any %}
이것은 <code>Memory.powerCreeps[creep.name]</code>에 대한 약식입니다. 빠른 액세스를 위해 크립의 특정 메모리 데이터 객체에 액세스하는 데 사용할 수 있습니다. 메모리에 대한 자세한 내용은 <a href="/global-objects.html#Memory-object">여기</a>를 참조하십시오.
{% api_property my boolean %}
아군인지 적군인지입니다.
{% api_property name string %}
파워 크립의 이름입니다. 새로운 파워 크립을 생성할 때 이름을 선택할 수 있으며 나중에는 변경할 수 없습니다. 이 이름은 <a href="#Game.powerCreeps">Game.powerCreeps</a> 객체를 통해 크립에 액세스하는 데 사용되는 해시 키입니다.

{% api_property owner object %}
객체는 크립트의 소유자 정보를 포함하고 있으며 다음과 같은 속성을 가지고 있습니다:

{% api_property store '<a href="#Store">저장</a>' %}
```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    goHarvest(creep);
}
```
크립트의 적재물을 담고있는 [`저장소`](#저장소) 객체입니다.
{% api_property powers object %}
사용 가능한 파워, 파워 ID를 키로 하는 객체와 다음과 같은 속성을 포함합니다:

{% api_method_params %}
level : number
파워의 현재 레벨.
===
cooldown : number
남아있는 쿨다운 틱수, 또는 파워 크립트가 월드에서 생성되지 않았을 때는 undefined입니다.

{% endapi_method_params %}

{% api_property saying string %}
마지막 텍스트 메시지를 말한 괴수의 말이다.

{% api_property shard string %}
생성된 강력한 괴물을 만들어내는 서버의 이름, 아니면 정의되지 않은 상태이다.

{% api_property spawnCooldownTime number %}
```javascript
if(! (Game. powerCreeps['PowerCreep1']. spawnCooldownTime > Date. now())) {
    Game. powerCreeps['PowerCreep1']. spawn(powerSpawn);
}
```
생성 또는 삭제할 때 사용되는 타임스탬프가 될 것이다.
강력한 괴물을 세상에 만들어내면 정의되지 않은 상태가 된다.
{% api_property ticksToLive number %}
게임 턴 수 이후에 죽으며 더는 부활하지 않을 괴물의 남아있는 시간이다.

{% api_method cancelOrder 'methodName' 0 %}
```javascript
creep. move(LEFT);
creep. cancelOrder('move');
//The creep will not move in this game tick
```

취소할 명령을 지정하고 현재 게임 틱에서 취소합니다.
{% api_method_params %}
methodName : string
골렘의 이름과 같은 메소드를 지정합니다.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 취소되었습니다.
ERR_NOT_OWNER | 당신은 골렘의 소유자가 아닙니다.
ERR_BUSY | 파워 골렘이 세계에 스폰되지 않았습니다.
ERR_NOT_FOUND | 명시된 이름의 명령을 찾을 수 없습니다.

{% endapi_return_codes %}

{% api_method_return %}

```javascript
{ "result": "Ok", "success": true, "successMessage": "PowerCreep removed from game" }
```

```json
{
  "result": "OK",
  "success": true,
  "successMessage": "PowerCreep removed from game"
}
```

{% endapi_method_return %}

{% api_error_codes %}

```javascript
{ "result": { "errno": 5008 }, "success": false, "successMessage": null }
```

```json
{
  "result": { "errno": 5008 },
  "success": false,
  "successMessage": null
}
```

{% endapi_error_codes %}

ERR_NOT_OWNER | 당신은 크리프트의 소유자가 아닙니다.
ERR_BUSY | 파워 크리프트가 세상에서 생성되고 있습니다.
{% endapi_return_codes %}

{% api_method drop 'resourceType, [amount]' A %}

```javascript
creep.drop(RESOURCE_ENERGY);
```

```javascript
// 모든 자원을 떨어트립니다.
for(const resourceType in creep.carry) {
	creep.drop(resourceType);
}
```

지상에 이 자원을 떨어뜨립니다.
{% api_method_params %}
resourceType : string
RESOURCE_* constants 중 하나입니다.
===
amount (optional) : number
떨어뜨릴 자원의 양(Resource units). 생략되면, 운반할 수 있는 전체 량이 사용됩니다.

### Return value

One of the following codes:
{% endapi_method_params %}
OK | The operation has been scheduled successfully.
ERR_NOT_OWNER | You are not the owner of this <code>creep</code>.
ERR_BUSY | The power creep is not spawned in the world.
ERR_INVALID_ARGS | The <code>resourceType</code> is not a valid <code>RESOURCE_*</code> constants.
ERR_NOT_ENOUGH_RESOURCES | The creep does not have the given amount of energy.
{% endapi_return_codes %}


```javascript
Game. powerCreeps['PowerCreep1']. usePower(PWR_GENERATE_OPS);
```


{% api_method enableRoom 'controller' A %}

```javascript
powerCreep. enableRoom(powerCreep. room. controller);
```

Enable powers usage in this room.

컨트롤러가 인접한 타일에 있어야 합니다 .

{% api_method_params %}
controller : <a href="#StructureController">StructureController</a>
컨트롤러. 
{% endapi_method_params %}

### 반환값

다음 코드들 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 당신은 해당 크립의 소유자가 아닙니다.
ERR_INVALID_TARGET | 타겟이 컨트롤러 구조물이 아닙니다.
ERR_NOT_IN_RANGE | 타겟이 너무 멀리 있습니다.
{% endapi_return_codes %}

{% api_method move 'direction' A %}

```javascript
creep. move(RIGHT);
```

```javascript
const path = creep. pos. findPathTo(Game. flags. Flag1);
if(path. length > 0) {
	creep. move(path[0].

1줄:

```
direction = ["top", "right", "down", "left"][Math.ceil(Math.random() * 4)];
```

2~3줄:

```
function move(direction) {
    switch (direction) {
        case "top":
            this.y--;
            break;
        case "right":
            this.x += 1;
            break;
        case "down":
            this.y += 1;
            break;
        case "left":
            this.x -= 1;
            break;
    }
}
```

4~5줄:

```
function pull(creep2) {
    if (this.x === creep2.x && this.y === creep2) {
        this.direction = creep2.direction;
        creep2.x = this.x + 1;
        creep2.y = this.y + 1;
    }
}
```

6~7줄:

```
creep1. move(TOP);
creep1. pull(creep2);
creep2. move(creep1);
```

인근에 있는 괴물이나, 다음과 같은 상수들 중 하나:
					<ul>
						<li><code>TOP</code></li>
						<li><code>TOP_RIGHT</code></li>
						<li><code>RIGHT</code></li>
						<li><code>BOTTOM_RIGHT</code></li>
						<li><code>BOTTOM</code></li>
						<li><code>BOTTOM_LEFT</code></li>
						<li><code>LEFT</code></li>
						<li><code>TOP_LEFT</code></li>
					</ul>

{% endapi_method_params %}


### 반환값

다음과 같은 코드들 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 당신은 그 괴물의 소유자가 아닙니다.
ERR_BUSY | 전력을 필요로 하는 괴물이 세계에 생성되지 않았습니다.

ERR_TIRED | 기어의 피로도가 0이 아닙니다.
ERR_INVALID_ARGS | 제공된 방향이 올바르지 않습니다.
ERR_NOT_IN_RANGE | 목표 기어가 너무 멀리 있습니다
{% endapi_return_codes %}

RoomPosition.findPathTo() or PathFinder.search() 메서드를 사용하여 경로 검색을 수행할 수 있습니다. 배열 형태와 문자열 형태 모두 허용됩니다.
{% endapi_method_params %}

tradução : {% endapi_return_codes %}


{% api_method moveTo 'x, y, [opts]|target, [opts]' 3 %}

```javascript
creep. moveTo(10, 20);
```

```javascript
creep. moveTo(Game. flags. Flag1);
```

```javascript
creep. moveTo(new RoomPosition(25, 20, 'W10N5'));
```

```javascript
creep. moveTo(pos, {reusePath: 50});
```

```javascript
// Execute moves by cached paths at first
for(const name in Game. creeps) {
    Game. creeps[name]. moveTo(target, {noPathFinding: true});
}

// Perform pathfinding only if we have enough CPU
if(Game. cpu. tickLimit - Game. cpu. getUsed() > 20) {
    for(const name in Game. creeps) {
        Game. creeps[name]. moveTo(target, {path: 'move'});
    }
}
```

```javascript
// Execute moves by cached paths at first
for(const name in Game. creeps) {
    Game. creeps[name]. moveTo(target, {noPathFinding: true});
}

// Perform pathfinding only if we have enough CPU
if(Game. cpu. tickLimit - Game. cpu. getUsed() > 20) {
    for(const name in Game. creeps) {
        Game. creeps[name]. moveTo(target, {path: 'move'});
    }
}
```

x : number
동일한 룸의 X 위치입니다.
===
y : number
동일한 룸의 Y 위치입니다.
===
target : object
<a href="#RoomPosition">RoomPosition</a> 객체 또는 <a href="#RoomPosition">RoomPosition</a>를 포함하는 객체가 될 수 있습니다. 대상의 위치는 크립과 동일한 룸에 있지 않아도 됩니다.

===
opts (선택 사항) : object
추가 옵션이 포함된 개체입니다.
						<ul>
							<li>
								<div class="api-arg-title">reusePath</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">이 옵션을 사용하면 여러 게임 틱마다 발견된 경로를 재사용할 수 있습니다. CPU 시간을 절약할 수 있지만 크롤링 반응 동작이 약간 느려질 수 있습니다. 경로는 크립의 _move 속성으로 메모리에 저장됩니다. reusePath 값은 경로를 재사용할 틱의 수를 정의합니다. 기본값은 5입니다. CPU를 더 절약하려면 양을 늘리고, 이동을 더 일관되게 만들려면 줄입니다.

코드를 번역하지 마십시오. JavaScript, 대문자로 된 단어만 번역하지 마십시오. <br><hr>
						"재구성 Path를 사용 안함으로 설정하려면 0으로 설정하십시오."</div>
					<li>
						<div class="api-arg-title">serializeMemory</div>
							<div class="api-arg-type">boolean</div>
							<div class="api-arg-desc">"reusePath"가 사용 설정되고이 옵션을 true로 설정하면 <a href="#Room. serializePath"><code>Room. serializePath</code></a>를 사용하여 메모리에서 경로를 짧은 형태로 직렬화합니다.<br>기본값은 true입니다.</div>
"재구성 Path를 사용 안함으로 설정하려면 0으로 설정하십시오."</div>
				</li>
				</ul>

</div>
						<li>
							<div class="api-arg-title">noPathFinding</div>
							<div class="api-arg-type">boolean</div>
							<div class="api-arg-desc">이 옵션을 true로 설정하면 <code>moveTo</code> 메서드가 재사용할 수 있는 경로가 없는 경우 <code>ERR_NOT_FOUND</code>를 반환합니다. 이러한 경우 CPU 시간을 상당히 절약할 수 있습니다. 기본값은 false입니다.</div>
						</li>
						<li>
							<div class="api-arg-title">visualizePathStyle</div>
							<div class="api-arg-type">object</div>
							<div class="api-arg-desc"> <a href="#RoomVisual.poly"><code>RoomVisual. poly</code></a>를 사용하여 크리퍼의 경로를 따라 선을 그립니다. </div>
						</li>
</ul>

JavaScript를 번역하지 마시고, 대문자로만 된 단어도 번역하지 마세요. , 번역하려는 기사를 한국어로 번역하십시오. : 빈 객체나 사용자 정의 스타일 매개변수를 제공할 수 있습니다. 기본 스타일은 다음과 같습니다:
									<pre class="language-javascript"><code>{
    fill: 'transparent',
    stroke: '#fff',
    lineStyle: 'dashed',
    strokeWidth: . 15,
    opacity: . 1
}</code></pre>
								</div>
						</li>
						<li> <a href="#Room.findPath">Room.findPath</a> 방법에서 지원하는 모든 옵션.</li>
					</ul>

{% endapi_method_params %}

### Return value

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다. 
ERR_NOT_OWNER | 당신은 이 creep의 소유자가 아닙니다. 
ERR_BUSY | 전원을 켜는 creep은 세계에서 생성되지 않았습니다.

ERR_TIRED | 크립의 피로 지표가 0이 아닙니다.
ERR_INVALID_TARGET | 제공된 대상이 올바르지 않습니다.
ERR_NO_PATH | 목적지까지의 경로를 찾을 수 없습니다.
ERR_NOT_FOUND | 크립에는 재사용할 경로가 없습니다.
{% endapi_return_codes %}



{% api_method notifyWhenAttacked 'enabled' A %}

```javascript
Game.powerCreeps['PC1'].notifyWhenAttacked(true);
```

공격을 받고 있는 크립에 대한 알림을 자동으로 설정합니다. 알림은 계정 이메일로 전송됩니다. 기본적으로 켜져 있습니다.

{% api_method_params %}
enabled : boolean
알림을 켜거나 끕니다.

### 반환값

다음 중 하나의 코드:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 사용자가 해당 크립트의 소유자가 아닙니다.
ERR_BUSY | 전력 크립트가 게임 세계에 스폰되지 않았습니다.
ERR_INVALID_ARGS | `enable` 인수는 불리언 값이 아닙니다.
{% endapi_return_codes %}


{% api_method pickup 'target' A %}

```javascript
const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
if(target) {
    if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}

```

항목(에너지 방출된 물질)을 픽업합니다.

게임.powerCreepPickup.api_method_params.target = Resource;
game.PowerCreepPickup.api_method_params.target = Resource;

게임.PowerCreepPickup.api_return_codes[0] = 'OK';
game.PowerCreepPickup.api_return_codes[0] = 'OK';

game.PowerCreepPickup.api_method_rename('name', 0);
Game.PowerCreepPickup.api_method_rename('name', 0);
```

rename('PC1X');

// Return values
// One of the following codes:
// OK | The operation has been scheduled successfully.
// ERR_NOT_OWNER | You are not the owner of the creep.
// ERR_BUSY | The power creep is spawned in the world.
// ERR_NAME_EXISTS | A power creep with the specified name already exists.
```

{% api_method_params %}
name : string
The new name of the power creep.
{% endapi_method_params %}


### Return value

One of the following codes:
{% api_return_codes %}
OK | The operation has been scheduled successfully.
ERR_NOT_OWNER | You are not the owner of the creep.
ERR_BUSY | The power creep is spawned in the world.
ERR_NAME_EXISTS | A power creep with the specified name already exists.
{% endapi_return_codes %}


```javascript
let powerBank = Game. getObjectById('XXX');
Game. powerCreeps['PowerCreep1']. rename('PC1X');
```

전력 은행을 사용하여 즉시 전원을 복구합니다. 전기가 통하는 인접한 타일에 근처에 있어야합니다.

{% api_method_params %}
target : <a href="#StructurePowerBank">StructurePowerBank</a> | <a href="#StructurePowerSpawn">StructurePowerSpawn</a>
목표 구조. 
{% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다. ERR_NOT_OWNER | 당신은 이 creep의 소유자가 아닙니다. ERR_BUSY | 전력 크립은 세상에서 생산되지 않았습니다. ERR_INVALID_TARGET | 목표는 유효한 전원 은행 객체가 아닙니다. ERR_NOT_IN_RANGE | 목표가 너무 멀리 있습니다.

이 메시지를 표시할 수 있는 보이스 풍선을 크립트 위에 나타냅니다. 이 메시지는 1초 동안만 남아 있습니다. 마지막으로 사용된 메시지를 <code>saying</code> 속성을 통해 알 수 있습니다. 유니코드에서 허용하는 모든 문자가 가능합니다(<a href="http://unicode.org/emoji/charts/emoji-style.txt" target="_blank">이모지 포함</a>).
{% api_method_params %}
message : string
표시할 메시지

최대 길이는 10자입니다.
public (선택사항) : boolean
다른 플레이어가 해당 메시지를 볼 수 있도록 설정합니다. 기본값은 false입니다. {% endapi_method_params %}

### 반환 값
다음과 같은 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다. ERR_NOT_OWNER | 당신은 그 파충류의 소유자가 아닙니다. ERR_BUSY | 강력한 생물을 세계에 발생시키지 않았습니다. {% endapi_return_codes %}

{% api_method spawn 'powerSpawn' A %}
```javascript
Game.powerCreeps['PowerCreep1'].spawn(Game.getCObjectById('XXX'));```
```javascript
게임. 강력한 생물['PowerCreep1']을 지정된 전원 소환에서 소환합니다.```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu sagittis est. Sed gravida, nisi id pharetra dapibus, justo eros dictum lacus, a fringilla libero ex ut velit. Duis sed lectus auctor. Integer eget leo a magna imperdiet bibendum vel eu elit. Donec semper felis non ex porttitor euismod. Fusce venenatis, lorem id molestie viverra, enim eros maximus sapien, id lacinia nunc odio euismod tellus. Integer rutrum pretium quam eu pulvinar. Nulla facilisi. Sed bibendum mauris ac sem fringilla, sit amet malesuada erat. Sed bibendum libero leo, a efficitur posuere nunc pharetra in. Aliquam velit tellus, elementum sed ex et eleifend egestas, tempus sodales ex. Mauris id dui porta, ultrices orci eu, viverra urna. Ut non lectus eros. Fusce vel ipsum ut pretium nisl aliquet ut in dapibus. Sed eget leo semper sapien tristique fringilla. Integer pharetra mauris ac justo imperdiet, sed lobortis quam porta. Ut ante metus, maximus a libero vel, placerat hendrerit purus. Nam ut malesuada ipsum, non dictum nulla. Nulla facilisi. Vestibulum id leo augue. Duis vitae turpis nec arcu bibendum, nec auctor dolor enim at nisl. Integer feugiat magna mi, pharetra quis eros fermentum a. In congue arcu eget odio rutrum faucibus. Aliquam velit urna, eleifend ac tristique lorem sit amet, tempor bibendum elit. Vivamus vel mi lectus. Fusce porttitor enim non erat consectetur, sed pulvinar ex viverra nec. Praesent in tincidunt ipsum.
```

강력한 스폰을 사용할 수 있는지 확인하십시오.

{% api_method_params %}
powerSpawn : <a href="#StructurePowerSpawn">구조체 PowerSpawn</a>
Your Power Spawn 구조물.
{% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 당신은 크리프 또는 스폰의 소유자가 아닙니다.
ERR_BUSY | 파워 크립은 이미 세계에서 생성되었습니다.
ERR_RCL_NOT_ENOUGH | 룸 컨트롤러 레벨이 스폰을 사용하는 데 불충분합니다.
ERR_INVALID_TARGET | 지정된 객체가 Power Spawn이 아닙니다.
ERR_TIRED | 코어드를 재생성할 수 없습니다. 쿨다운 중입니다.

console.log("The target or the energy amount is out of range");
} else if (creep. transfer(storage, RESOURCE_ENERGY, 10) == ERR_BUSY) {
	creep. waitUntilIdle();
	creep. transfer(storage, RESOURCE_ENERGY, 10);
} else {
	console.log("Power is transferred successfully");
}
```
{% endapi_method %}

이동(`storage`);
}
```javascript
// 자원을 이동합니다.
for(const resourceType in creep. carry) {
	creep. transfer(storage, resourceType);
}
```
자원을 짐승에서 다른 객체로 이동합니다. 목표는 짐승의 인접한 사각형에 있어야 합니다.
{% api_method_params %}
target : Creep, PowerCreep, Structure
짐승이나 파워 크리프트, 스트럭처 중 하나입니다.
resourceType : string
RESOURCE_* 상수 중 하나입니다.
amount (optional) : number
이동할 자원의 양. 지정하지 않으면 보유한 짐승 용량을 모두 사용합니다.

### API Method Parameters

{% api_method_params %}
POST /creeps/<id>/power-creep

Required parameters:

- id (int): The unique ID of the Creep to modify
- resourceType (string): The type of resource to add or remove. One of <code>RESOURCE_WOOD</code>, <code>RESOURCE_CRYSTAL</code>, <code>RESOURCE_GOLD</code>. 
- amount (int): The amount of the given resource to add or remove. 

Optional parameters:

- powerAmount (int): Amount of power to give to the Creep. Default is 10.

{% endapi_return_codes %}

{% api_method usePower 'power, [target]' A %}

```javascript
Game. powerCreeps['PowerCreep1']. usePower(PWR_GENERATE_OPS);
```

```javascript
Game. powerCreeps['PowerCreep1']. usePower(PWR_OPERATE_SPAWN, Game. spawns['Spawn1']);
```

이 방법을 사용하면 특정 몬스터의 파워를 적용할 수 있습니다. 방에서 컨트롤러없이 또는 [파워 활성화](#PowerCreep.enableRoom) 컨트롤러가있는 경우에만 파워를 사용할 수 있습니다.

사용할 수 있는 권한은 동일한 시간에 하나만 사용할 수 있습니다. 각 `usePower` 호출마다 이전 권한이 덮어씌워집니다. 목표가 같은 효과를 갖는 경우, 그 권한은 덮어쓰여집니다. 기존 효과 수준이 더 높은 경우, 오류가 반환됩니다.

[사용할 수 있는 모든 권한](/power.html#Powers)

{% api_method_params %}
power : number
사용할 권한의 지정, `PWR_*` 상수 중 하나.
===
target (선택 사항) : <a href="#RoomObject">RoomObject</a>
룸에 있는 객체를 대상으로 합니다.
{% endapi_method_params %}

### 반환값

다음과 같은 코드 중 하나:
{% api_return_codes %}
OK | 성공적으로 작업을 예약했습니다. ERR_NOT_OWNER | 곤충의 소유자가 아닙니다.

번역할 코드가 없습니다.
대문자로만 된 단어도 번역하지 마시고, 이 글을 한국어로 번역하십시오 : ERR_BUSY | The creep은(는) 세계에서 소환되지 않았습니다.
ERR_NO_BODYPART | The creep은(는) 지정된 능력을 갖추고 있지 않습니다.
ERR_TIRED | 지정된 능력이 아직 재사용 대기 중입니다.
ERR_NOT_ENOUGH_RESOURCES | The creep은(는) 해당 능력을 사용하는 데 필요한 자원이 충분하지

don't translate codes like JavaScript, don't translate words that are only in uppercase letters, 다음 코드를 한국어로 번역해 주세요 :
```
moveTo(storage);
}
```
```
구조물이나 묘비에서 자원을 채취합니다. 대상은 크립의 옆 칸에 있어야 합니다. 여러 개의 크립이 같은 틱에 동일한 객체로부터 자원을 채취할 수 있습니다. 적대적인 라만파드가 없는 상태에서 적대적인 구조물/묘비도 채취할 수 있습니다.
이 메소드는 크립들 사이에 자원을 전송하기 위해 사용되어서는 안됩니다. 크립 간에 자원을 전송하려면, 오리지널 크립의 […](#Creep.transfer) 메소드를 사용합니다.
{% api_method_params %}
target : <a href="#Structure">구조물</a>, <a href="#Tombstone">묘비</a>, <a href="#Ruin">폐허</a>
대상 객체

```
resourceType : string,
One of the <code>RESOURCE_*</code> constants.

ERR_FULL | 스릴러의 운반이 가득합니다.
ERR_NOT_IN_RANGE | 목표가 너무 멀리 있습니다.
ERR_INVALID_ARGS | <code>RESOURCE_*</code> 상수 중 하나가 아닌 resourceType이거나 금액이 올바르지 않습니다.