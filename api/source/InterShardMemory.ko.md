# InterShardMemory

`InterShardMemory` 오브젝트는 샤드 간 통신을 위한 인터페이스를 제공합니다. 스크립트는 각 샤드에서 서로 분리되어 실행되며,
각 샤드의 [`Memory`](#Memory) 오브젝트도 서로 격리되어 있습니다. 샤드 사이에 메시지/데이터를 전달하려면 `InterShardMemory`를 사용해야 합니다.

각 샤드는 문자열 형식의 데이터를 최대 100KB까지 가질 수 있으며, 다른 모든 샤드에서 접근할 수 있습니다.
다만 샤드는 자기 자신의 데이터에만 쓸 수 있고, 다른 샤드의 데이터는 읽기 전용입니다.

이 데이터는 `Memory` 내용과 무관하며, 별도의 데이터 컨테이너입니다.

{% api_method InterShardMemory.getLocal '' 0 %}

현재 샤드 데이터의 문자열 내용을 반환합니다.

{% api_method InterShardMemory.setLocal 'value' 0 %}

```javascript
var data = JSON.parse(InterShardMemory.getLocal() || "{}");
data.message = "hello from another shard!";
InterShardMemory.setLocal(JSON.stringify(data));
```

현재 샤드 데이터를 새 값으로 교체합니다.

{% api_method_params %}
value : string
문자열 형식의 새 데이터 값.
{% endapi_method_params %}


{% api_method InterShardMemory.getRemote 'shard' 0 %}

```javascript
var data = JSON.parse(InterShardMemory.getRemote('shard0') || "{}");
console.log(data.message);
```

다른 샤드 데이터의 문자열 내용을 반환합니다.

{% api_method_params %}
shard : string
샤드 이름.
{% endapi_method_params %}

