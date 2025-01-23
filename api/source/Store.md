# 상자
객체는 cargo에 자원을 포함할 수 있습니다.

게임의 스토어는 두가지 유형이 있습니다: 범용 저장소와 제한된 저장소입니다.

* 일반적인 목적의 저장소는 그것의 수용력안에 (예를들면, creeps, 컨테이너, 저장소, 터미널) 자원을 포함할 수 있습니다.
* 특정한 목적의 저장소는 그것이 필요로 하는 몇가지 유형의 자원만 (예를들면, 스폰, 확장, 연구실, 뉘커) 포함할 수 있습니다.

`Store`프로토타입은 두가지 유형의 저장소모두에서 동일하며, 그러나 그것들의 메서드의 `자원`인자에 따라서 다른 행위를 갖습니다.

특정한 자원을 저장소로부터 얻으려면 객체 속성으로서 주소를 지정하십시오:

```javascript-content
console. log(creep.store. resources); // { ... }
console. log(spawn.store. resources); // { spawn: [{...}], extensions: [{...}] }
```

하지만 자바스크립트 코드나 대문자로만 된 단어는 번역하지 마세요. 이 글을 한국어로 번역하기 바랍니다. : store[RESOURCE_ENERGY]);
```javascript
if(creep.store[RESOURCE_ENERGY]<creep.store. getCapacity()){
    goHarvest(creep);
}
```

지정된 자원에 대한 저장소의 용량을 리턴합니다. 일반적인 목적의 저장소인 경우 `resource`가 undefined이면 전체 용량을 리턴합니다.

{% api_method getCapacity '[resource]' 0 %}

```javascript
if(creep.store[RESOURCE_ENERGY] < creep.store. getCapacity()) {
    goHarvest(creep);
}
```

{% api_method_params %}
resource (optional) : string
자원의 종류입니다.
{% endapi_method_params %}


### 반환값

유효하지 않은 `resource`일 경우 `null`, 저장소에 남아있는 용량 수를 리턴합니다.

{% api_method getFreeCapacity '[resource]' 0 %}

```javascript
if(structure.store. getFreeCapacity(RESOURCE_ENERGY) > 0){
    creep.
    }
```

00:25에 도착한 버스는 기다리고 있던 승객을 태우고 출발하였습니다.
At 00:25, the bus arrived and picked up waiting passengers before departing.

일반적인 목적의 저장소에서는 `resource`가 정의되지 않은 경우 전체 사용된 용량을 반환합니다.

{% api_method_params %}
resource (optional) : string
이 저장소 유형의 리소스 유형입니다.
{% endapi_method_params %}

### 반환값

올바르지 않은 `resource`일 경우에는 `null`을 반환합니다.