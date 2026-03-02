# RawMemory

RawMemory 오브젝트는 `JSON.stringify` 기반의 내장 serializer 대신, 여러분만의 메모리 문자열화(stringifier)를 구현할 수 있게 해줍니다.
또한 비동기 메모리 세그먼트(asynchronous memory segments) 기능을 사용해 최대 10MB의 추가 메모리를 요청할 수 있게 해줍니다.

아래 메서드로 다른 플레이어의 메모리 세그먼트에도 접근할 수 있습니다.

{% api_property RawMemory.segments 'object' %}

```javascript
RawMemory.setActiveSegments([0,3]);
// on the next tick
console.log(RawMemory.segments[0]);
console.log(RawMemory.segments[3]);
RawMemory.segments[3] = '{"foo": "bar", "counter": 15}';
```

이 틱에 사용할 수 있는 비동기 메모리 세그먼트를 담은 오브젝트입니다. 각 키는 세그먼트 ID이고 값은 문자열 데이터입니다. 다음 틱에 세그먼트를 가져오려면 [`setActiveSegments`](#RawMemory.setActiveSegments)</code>를 사용하세요. 세그먼트 데이터는 틱 종료 시 자동으로 저장됩니다. 세그먼트당 최대 크기는 100KB입니다.

{% api_property RawMemory.foreignSegment 'object' %}

```javascript
RawMemory.setActiveForeignSegment('player');
// on the next tick
console.log(RawMemory.foreignSegment); 
// --> {"username": "player", "id": 40, "data": "Hello!"} 

```

이 틱에 사용할 수 있는 다른 플레이어의 메모리 세그먼트 오브젝트입니다. 다음 틱에 세그먼트를 가져오려면 [`setActiveForeignSegment`](#RawMemory.setActiveForeignSegment)를 사용하세요.
이 오브젝트는 다음 프로퍼티로 구성됩니다:

{% api_method_params %}
username : string
다른 플레이어 이름.
===
id : number
요청한 메모리 세그먼트 ID.
===
data : string
세그먼트 내용.
{% endapi_method_params %}

{% api_property RawMemory.interShardSegment 'string' '{"deprecated": "Please use [`InterShardMemory`](#InterShardMemory) instead."}'%}

```javascript
RawMemory.interShardSegment = JSON.stringify({
    creeps: {
        Bob: {role: 'claimer'}
    }
});

// on another shard
var interShardData = JSON.parse(RawMemory.interShardSegment);
if(interShardData.creeps[creep.name]) {
    creep.memory = interShardData[creep.name];
    delete interShardData.creeps[creep.name];
}
RawMemory.interShardSegment = JSON.stringify(interShardData);
```

모든 월드 샤드에서 사용 가능한 공유 메모리 세그먼트 문자열입니다. 최대 길이는 100KB입니다.

**경고:** 이 세그먼트는 동시성(concurrent) 사용에 안전하지 않습니다! 모든 샤드는 같은 데이터 인스턴스에 대해 공유 접근을 가집니다.
두 샤드가 동시에 내용을 변경하면, 세그먼트 문자열 값이 한 번에 원자적으로(atomic) 쓰이기 때문에 일부 데이터가 유실될 수 있습니다.
샤드가 언제 inter-shard 메모리를 덮어쓸 수 있는지 결정하는 자체 시스템을 구현해야 합니다(예: [상호 배제(mutual exclusions)](https://en.wikipedia.org/wiki/Mutual_exclusion) 기반).

{% api_method RawMemory.get '' 0 %}

```javascript
const myMemory = JSON.parse(RawMemory.get());
```

<code>Memory</code> 오브젝트의 원시 문자열 표현(raw string representation)을 가져옵니다.

### 반환 값

문자열 값을 반환합니다.

{% api_method RawMemory.set 'value' 0 %}

```javascript
RawMemory.set(JSON.stringify(myMemory));
```

새 <code>Memory</code> 값을 설정합니다.

{% api_method_params %}
value : string
문자열 형태의 새 메모리 값.
{% endapi_method_params %}

{% api_method RawMemory.setActiveSegments 'ids' 0 %}

```javascript
RawMemory.setActiveSegments([0,3]);
```

ID 목록으로 메모리 세그먼트를 요청합니다. 세그먼트는 다음 틱에 [`segments`](#RawMemory.segments)</code> 오브젝트에서 사용할 수 있게 됩니다.

{% api_method_params %}
ids : array
세그먼트 ID 배열입니다. 각 ID는 0~99의 숫자여야 합니다. 동시에 최대 10개 세그먼트만 활성화할 수 있습니다. <code>setActiveSegments</code>를 다시 호출하면 이전 설정을 덮어씁니다.
{% endapi_method_params %}

{% api_method RawMemory.setActiveForeignSegment 'username, [id]' 0 %}

```javascript
RawMemory.setActiveForeignSegment('player');
```
```javascript
RawMemory.setActiveForeignSegment('player', 10);
```
```javascript
RawMemory.setActiveForeignSegment(null);
```

다른 유저의 메모리 세그먼트를 요청합니다. 해당 세그먼트는 소유자가 [`setPublicSegments`](#RawMemory.setPublicSegments)로 public으로 표시해야 합니다.
세그먼트 데이터는 다음 틱에 [`foreignSegment`](#RawMemory.foreignSegment) 오브젝트에서 사용할 수 있습니다.
동시에 하나의 foreign segment만 접근할 수 있습니다.

{% api_method_params %}
username : string | null
다른 유저 이름. foreign segment를 지우려면 `null`을 전달하세요.
===
id (optional) : number
0~99 범위의 요청 세그먼트 ID. undefined이면, [`setDefaultPublicSegment`](#RawMemory.setDefaultPublicSegment)로 설정된 유저의 기본 public segment를 요청합니다.
{% endapi_method_params %}

{% api_method RawMemory.setDefaultPublicSegment 'id' 0 %}

```javascript
RawMemory.setPublicSegments([5,20,21]);
RawMemory.setDefaultPublicSegment(5);
```
```javascript
RawMemory.setDefaultPublicSegment(null);
```

지정한 세그먼트를 여러분의 기본 public segment로 설정합니다. 다른 유저가 [`setActiveForeignSegment`](#RawMemory.setActiveForeignSegment)에서 `id` 파라미터를 전달하지 않으면 이 세그먼트가 반환됩니다.

{% api_method_params %}
id : number | null
0~99 범위의 메모리 세그먼트 ID. 기본 public segment를 제거하려면 `null`을 전달하세요.
{% endapi_method_params %}

{% api_method RawMemory.setPublicSegments 'ids' 0 %}

```javascript
RawMemory.setPublicSegments([5,3]);
```
```javascript
RawMemory.setPublicSegments([]);
```

지정한 세그먼트를 public으로 설정합니다. 다른 유저가 [`setActiveForeignSegment`](#RawMemory.setActiveForeignSegment)로 접근을 요청할 수 있게 됩니다.

{% api_method_params %}
ids : array
세그먼트 ID 배열입니다. 각 ID는 0~99의 숫자여야 합니다. <code>setPublicSegments</code>를 다시 호출하면 이전 설정을 덮어씁니다.
{% endapi_method_params %}

