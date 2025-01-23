`InterShardMemory` 개체는 샤드 간의 통신을 위한 인터페이스를 제공합니다. 각 샤드에서 실행되는 스크립트는 격리되어 있습니다. 따라서 `Memory` 개체가 서로 분리되어 있는 경우 이를 대신하여 `InterShardMemory`를 사용해야 합니다. 각 샤드에는 100 KB의 데이터를 문자열 형태로 저장할 수 있으며, 다른 모든 샤드가 액세스할 수 있습니다. 특정 샤드는 자체 데이터만 기록할 수 있고, 나머지 샤드의 데이터는 읽기 전용입니다. 이 데이터는 `Memory` 내용과 관련이 없으며 별도의 데이터 컨테이너에 저장됩니다.

{% api_method InterShardMemory. getLocal '' 0 %}

현재 샤드의 데이터를 새로운 값으로 바꾼다.

{% api_method_params %}
value: string
새로운 데이터 값(string 포맷).
{% endapi_method_params %}

{% api_method InterShardMemory. getRemote 'shard' 0 %}
```javascript
var data = JSON. parse(InterShardMemory. getRemote('shard0') || "{}");
console. log(data. message);
```
다른 샤드의 데이터를 문자열로 반환한다.
{% api_method_params %}
shard: string
샤드 이름.