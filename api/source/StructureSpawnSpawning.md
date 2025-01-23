# StructureSpawn 생성
 구체적으로 현재 생성된 크립의 세부사항은 `[`StructureSpawn.spawning`](#StructureSpawn.spawning)` 프로퍼티를 통해 알 수 있다.

{% api_property directions '배열<number>' %}

생성 방향에 대한 배열, `[`StructureSpawn.spawning.setDirections`](#StructureSpawn.spawning.setDirections)를 참조하라.
{% api_property name 'string' %}

새로운 크립의 이름.
{% api_property needTime 'number' %}

전체적으로 생성에 필요한 시간.
{% api_property remainingTime 'number' %}

남은 시간.
{% api_property spawn '<a href="#StructureSpawn">StructureSpawn</a>' %}

생성 링크.

코드를 번역하지 마십시오. JavaScript와 같은 코드를 번역하지 마십시오. 대문자로만 된 단어는 번역하지 마십시오. Translate this article into Korean : {% api_method cancel '' A %}

```javascript
Game.spawns['Spawn1'].spawning.cancel();
```

즉시 생성을 취소합니다. 생성에 사용된 에너지는 반환되지 않습니다.

### Return value

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 당신은 이 스폰의 소유자가 아닙니다.
{% endapi_return_codes %}

{% api_method setDirections 'directions' A %}

```javascript
Game.spawns['Spawn1'].spawning.setDirections([RIGHT, TOP_RIGHT]);
```

원하는 방향을 설정합니다. 생성될 때 크립이 움직일 예정입니다.

{% api_method_params %}
directions : array&lt;number>
An array with the direction constants:
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

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 사용자가 해당 스폰의 소유자가 아닙니다.
ERR_INVALID_ARGS | 방향 배열이 올바르지 않습니다.