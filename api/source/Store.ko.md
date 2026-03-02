# Store

적재물(cargo)로 자원을 담을 수 있는 오브젝트입니다.

게임에는 두 종류의 store가 있습니다: 범용 store와 제한 store.

* 범용 store는 용량 내에서 어떤 자원이든 담을 수 있습니다(예: creeps, containers, storages, terminals).
* 제한 store는 해당 오브젝트에 필요한 일부 자원만 담을 수 있습니다(예: spawns, extensions, labs, nukers).

`Store` 프로토타입은 두 종류 모두 동일하지만, 메서드에서 `resource` 인자에 따라 동작이 달라집니다.

store에서 특정 자원을 얻으려면 오브젝트 프로퍼티로 접근하면 됩니다:

```javascript-content
console.log(creep.store[RESOURCE_ENERGY]);
```   

{% api_method getCapacity '[resource]' 0 %}

```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    goHarvest(creep);
}
```

지정한 자원에 대한 store의 용량을 반환합니다. 범용 store에서는 `resource`가 undefined이면 총 용량을 반환합니다.

{% api_method_params %}
resource (optional) : string
자원 타입.
{% endapi_method_params %}

### 반환 값

용량 숫자를 반환하거나, 이 store 타입에 대해 `resource`가 유효하지 않으면 `null`을 반환합니다.

{% api_method getFreeCapacity '[resource]' 0 %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```
store의 남은 용량을 반환합니다. 제한 store에서는 `resource`가 정의되어 있고 이 store에 유효한 경우, 해당 자원에 대해 사용 가능한 용량을 반환합니다.

{% api_method_params %}
resource (optional) : string
자원 타입.
{% endapi_method_params %}

### 반환 값

사용 가능한 용량 숫자를 반환하거나, 이 store 타입에 대해 `resource`가 유효하지 않으면 `null`을 반환합니다.

{% api_method getUsedCapacity '[resource]' 0 %}

```javascript
if(Game.rooms['W1N1'].terminal.store.getUsedCapacity() == 0) {
    // terminal is empty
}
```

지정한 자원이 사용 중인 용량을 반환합니다. 범용 store에서는 `resource`가 undefined이면 총 사용 용량을 반환합니다.

{% api_method_params %}
resource (optional) : string
자원 타입.
{% endapi_method_params %}

### 반환 값

사용 중인 용량 숫자를 반환하거나, 이 store 타입에 대해 `resource`가 유효하지 않으면 `null`을 반환합니다.

