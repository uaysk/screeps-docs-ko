# StructureSpawn.Spawning

[`StructureSpawn.spawning`](#StructureSpawn.spawning) 프로퍼티로 접근할 수 있는, 현재 스폰 중인 크립의 상세 정보입니다.

{% api_property directions 'array<number>' %}

스폰 방향 배열입니다. [`StructureSpawn.Spawning.setDirections`](#StructureSpawn.Spawning.setDirections)를 참고하세요.

{% api_property name 'string' %}

새 크립의 이름입니다.

{% api_property needTime 'number' %}

스폰 완료에 필요한 총 시간입니다.

{% api_property remainingTime 'number ' %}

남은 시간입니다.

{% api_property spawn '<a href="#StructureSpawn">StructureSpawn</a>' %}

스폰 구조물에 대한 링크입니다.

{% api_method cancel '' A %}

```javascript
Game.spawns['Spawn1'].spawning.cancel();
```

스폰을 즉시 취소합니다. 스폰에 사용한 에너지는 반환되지 않습니다.

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 스폰의 소유자가 아닙니다.
{% endapi_return_codes %}

{% api_method setDirections 'directions' A %}

```javascript
Game.spawns['Spawn1'].spawning.setDirections([RIGHT, TOP_RIGHT]);
```

크립이 스폰된 후 이동해야 하는 방향을 설정합니다.

{% api_method_params %}
directions : array&lt;number>
방향 상수 배열:
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

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 스폰의 소유자가 아닙니다.
ERR_INVALID_ARGS | directions 배열이 유효하지 않습니다.
{% endapi_return_codes %}

