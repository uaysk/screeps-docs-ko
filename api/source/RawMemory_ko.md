RawMemory 개체를 사용하면 내장된 `JSON.stringify` 기반의 기본 직렬화기 대신 사용자만의 메모리 문자열화기를 구현할 수 있습니다. 또한 비동기적인 메모리 세그먼트 기능을 사용하여 최대 10MB의 추가 메모리를 요청할 수도 있습니다.
RawMemory 개체에서 사용할 수 있는 다른 플레이어의 메모리 세그먼트에 액세스하려면 아래 방법을 사용하십시오.
{% api_property RawMemory.segments 'object' %}
```javascript
RawMemory.setActiveSegments([0,3]);
// 다음 틱에서
console.log(RawMemory.segments[0]);
console.log(RawMemory.segments[3]);
RawMemory.segments[3] = '{"foo": "bar", "counter": 15}';
```
비동기적인 메모리 세그먼트가 사용 중인 틱에서 사용할 수 있는 개체입니다.

RawMemory 객체의 `activeSegments` 속성은 해시 테이블로서 현재 액티브한 세그먼트의 ID와 문자열 값을 포함합니다. 각 객체 키는 세그먼트 ID이며, 데이터는 문자열 값입니다.

```javascript
console.log(RawMemory.activeSegments); // {id: 'player', data: "Hello!"}
```

{% api_property RawMemory. foreignSegment 'object' %}

```javascript
RawMemory.setActiveForeignSegment('player');
// 다음 틱에서
console.log(RawMemory.foreignSegment); // {"username": "player", "id": 40, "data": "Hello!"}
```

외부 세그먼트의 객체는 현재 틱에서 사용할 수 있습니다. `setActiveForeignSegment`을(를) 호출하여 다음 틱에서 세그먼트를 가져올 수 있습니다.

```javascript
console.log(RawMemory.foreignSegment); // {"username": "player", "id": 40, "data": "Hello!"}
```

객체는 다음과 같은 속성으로 구성됩니다.
{% api_method_params %}
username : string
다른 플레이어의 이름.
===
id : number
요청한 메모리 세그먼트 ID.
===
data : string
세그먼트 내용.
{% endapi_method_params %}




{% api_property RawMemory. interShardSegment 'string' '{"deprecated": "Please use [`InterShardMemory`](#InterShardMemory) instead. "}'%}
```javascript
RawMemory. interShardSegment = JSON. stringify({
    creeps: {
        Bob: {role: 'claimer'}
    }
});

// 다른 샤드에서
var interShardData = JSON. parse(RawMemory. interShardSegment);
if(interShardData. creeps[creep. name]) {
    creep. memory = interShardData[creep.

번역하지 마세요 : name];
    delete interShardData. creeps[creep. name];
}
RawMemory. interShardSegment = JSON. stringify(interShardData);```

모든 월드 샤드에서 사용 가능한 공유 메모리 세그먼트가있는 문자열입니다. 최대 문자열 길이는 100 KB입니다.
**경고:** 동시에 사용하면 안전하지 않습니다! 모든 샤드가 데이터의 동일한 인스턴스에 대한 공유 액세스를 갖습니다. 두 개의 샤드에서 세그먼트 내용을 동시에 변경하면 세그먼트 문자열 값이 모두 원자성으로 한 번에 쓰여지므로 일부 데이터를 잃게됩니다. 각 샤드가 상호 배제 (https://en.wikipedia.org/wiki/Mutual_exclusion)와 같은 시간을 재기 위해 인터 샤드 메모리를 다시 쓰는 것이 허용되는지 확인하십시오. 예제).```

A string with a shared memory segment available on every world shard. The maximum string length is 100 KB.

**Warning:** this segment is not safe for concurrent usage! All shards have shared access to the same instance of data. When the segment contents are changed by two shards simultaneously, you may lose some data since the segment string value is written all at once atomically. You must implement your own system to determine when each shard is allowed to rewrite the inter-shard memory, e. g. Based on mutual exclusions (https://en.wikipedia.org/wiki/Mutual_exclusion).```

{% api_method RawMemory. getActiveSegments %}

```javascript
RawMemory. getActiveSegments();
```

Return current memory segments as an array of objects with the following fields: id, segment, size, and timeline. 

{% api_method RawMemory. clearActiveSegments %}

Clear all currently active memory segments. 

{% api_method_params %}
{% endapi_method_params %}



### Properties

메모리 세그먼트는 다음 틱에서 `[segments]` 객체의 사용 가능한 부분이 됩니다.

{% api_method_params %}
ids : array
세그먼트 ID의 배열입니다. 각 ID는 0에서 99까지의 숫자여야 합니다. 동시에 최대 10개의 세그먼트만 활성화될 수 있습니다. 이전 호출보다 우선하는 <code>setActiveSegments</code>를 사용합니다.
{% endapi_method_params %}

{% api_method RawMemory. setActiveForeignSegment 'username, [id]' 0 %}

```javascript
RawMemory. setActiveForeignSegment('player');
```
```javascript
RawMemory. setActiveForeignSegment('player', 10);
```
```javascript
RawMemory. setActiveForeignSegment(null);
```

다른 사용자의 메모리 세그먼트를 요청합니다.

setPublicSegments %}

```javascript
// Set a segment as public
RawMemory.setPublicSegment(username, id)
```

{% api_method_params %}
username : string | null
The name of another user.  Pass `null` to clear the public segment. 
id (optional) : number
The ID of the requested segment from 0 to 99.  If undefined, the user's default public segment is requested as set by [`setDefaultPublicSegment`](#RawMemory. setDefaultPublicSegment). 
{% endapi_method_params %}
```javascript
// Get a foreign segment
RawMemory.getForeignSegment(username)
```

setDefaultPublicSegment(0);
```
```javascript
RawMemory. setPublicSegments([6]);
```

{% api_method_params %}
ids : [number]
한 개 이상의 메모리 세그먼트 ID를 입력하십시오(0에서 99 사이). `null`을 입력하여 기본 공개 세그먼트를 제거할 수 있습니다.
{% endapi_method_params %}

{% api_method RawMemory. setPublicSegments 'ids' [5,20,21] %}
```javascript
RawMemory. setPublicSegments([5,20,21]);
```
```javascript
RawMemory. setPublicSegments([3]);
```

{% api_method_params %}
ids : [number]
0 에서 99 사이의 메모리 세그먼트 ID 한 개 이상을 입력하십시오.
{% endapi_method_params %}

공개 세그먼트로 설정합니다. 다른 사용자는 `[setActiveForeignSegment](#RawMemory. setActiveForeignSegment)`을 통해 해당 세그먼트에 대한 액세스 요청을 할 수 있습니다.

{% api_method_params %}
ids : array
segment IDs의 배열입니다. 각 ID는 0부터 99까지의 숫자여야 합니다. setPublicSegments를 반복적으로 호출하면 이전 호출을 덮어씁니다.