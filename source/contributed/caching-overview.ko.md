---
title: 캐싱 개요
contributed:
    name: tedivm
    link: https://github.com/tedivm
    date: 2017-06-14
---

Screeps는 성능이 중요한(performance-centric) 게임입니다. 성능이 좋을수록 매 틱에 더 많은 일을 할 수 있습니다. 캐싱은 성능 최적화의 매우 중요한 요소이며, Screeps는 캐싱과 관련해 독특한 기회와 도전 과제를 제공합니다.

캐싱은 본질적으로 단순한 개념입니다. 비싼(비용이 큰) 코드 호출의 결과를 저장해 두면 이후 호출 비용이 더 낮아집니다. 캐싱에는 또 하나의 부수적 이점이 있는데, “원래는 반환할 수 없어야 하는 상황”에서도 함수가 결과를 반환할 수 있게 해준다는 점입니다. 예를 들어 경로 탐색(pathfinding) 결과를 캐싱하면, 그 경로를 따라가는 도중에 룸 시야(visibility)를 잃더라도 크립이 최적 경로를 재사용할 수 있습니다. 이는 성능 향상과 함께 회복탄력성(resiliency)도 제공합니다.

## 데이터 저장소(Datastores)

### Memory

캐시 데이터를 저장하는 가장 흔한 위치는 [Memory](/global-objects.html#Memory-object)입니다. 이는 “진짜 지속성(persistence)”을 제공하는 유일한 옵션입니다. [Memory](/global-objects.html#Memory-object)에 저장된 것은 제거하기 전까지 계속 남아 있으므로, 값이 매우 비싸거나 반드시 저장되어야 한다면 여기에 두는 것이 좋습니다.

[Memory](/global-objects.html#Memory-object)에는 두 가지 큰 단점이 있습니다:

*   [Memory](/global-objects.html#Memory-object) 공간은 2048kb로 제한됩니다.
*   Memory에 접근한 틱마다 [Memory](/global-objects.html#Memory-object) 문자열에 대해 `JSON.parse`가 실행되며, 저장된 데이터가 많을수록 비용이 커집니다.

이런 이유로 [Memory](/global-objects.html#Memory-object)에 넣는 데이터는 제한하는 편이 좋습니다.

### Global

[게임 루프](/game-loop.html) 구조는 매 틱 실행되는 "loop" 함수를 정의할 수 있게 해줍니다. 또한 바깥 스코프(outer scope)에 “비싼 1회성 코드”를 정의할 수도 있습니다. 가장 흔한 사용 예는 모듈 `require` 입니다:

    // executed on new global
    var mod = require('mod');

    module.exports.loop = function() {
        // executed every tick
        mod.foo();
    }

다음 예시는 비싼 함수의 결과를 저장하는 데 이를 어떻게 활용할 수 있는지 보여줍니다. 함수가 처음 호출된 이후에는 변수가 채워져, 이후 호출에서 재사용됩니다:

    let runExpensiveCodeResults = false
    function runExpensiveCode() {
        if(!runExpensiveCodeResults) {
            runExpensiveCodeResults = someExpensiveCode();
        }
        return runExpensiveCodeResults;
    }

이 두 예시는 `require`로 코드가 “처음 로드될 때”만 실행/정의된다는 단점이 있습니다. Node에서 어디서나 접근 가능한 특수 오브젝트인 [`global`](https://nodejs.org/api/globals.html#globals_global) 오브젝트를 사용하면 코드를 조금 더 깔끔하게 만들 수 있습니다:

    function runExpensiveCode() {
        if(!global.runExpensiveCodeResults) {
            global.runExpensiveCodeResults = someExpensiveCode();
        }
        return global.runExpensiveCodeResults;
    }

다만 여기에 대해서는 심각한 제한이 있습니다.

*   `global` 오브젝트는 비교적 자주 리셋되므로, 데이터는 정기적으로 사라집니다. `global` 오브젝트를 영속 저장소로 간주할 수 없습니다.
*   `global` 캐시에 대량의 데이터를 넣으면 가비지 컬렉터가 더 자주 실행되어 CPU를 더 많이 소비할 수 있습니다.

이러한 제약 때문에 `global` 오브젝트는 특정 종류의 캐싱에 적합합니다. 예를 들어 함수 결과가 항상 동일하거나, “오래된(stale) 데이터”가 사용되어도 상관없는 경우입니다. 결과가 바뀔 수 있고 데이터가 무효화되는 경우에는, TTL이나 버전 식별자 같은 메타 데이터를 결과와 함께 저장해 무효화 처리를 해야 합니다.

## Require 캐시(Require Cache)

`require`를 호출할 때마다 결과는 캐시됩니다. 이는 여러 JavaScript 모듈이 매 틱 컴파일될 필요가 없도록 하여 서버와 스크립트의 부하를 줄입니다. require 캐시는 `global` 캐시와 연결되어 있어 같은 시점에 함께 클리어됩니다. 다만 어떤 상황에서는 `global` 캐시는 유지되는데 `require` 캐시만(전체 또는 일부) 클리어되는 경우도 있습니다.

성능 관점에서 `require`와 `global` 캐시가 동시에 초기화된다는 사실은, `global resets`가 특히 비용이 큰 이벤트라는 뜻이기도 합니다.

## 팁

*   Memory에 무엇을 캐시할지 매우 주의하세요. Memory 파싱 시간은 비쌀 수 있습니다.
*   오브젝트는 문자열보다 파싱 비용이 큽니다. [RoomPositions](/api/#RoomPosition) 같은 것을 평평한 문자열로 변환해 캐시한 뒤 필요할 때 다시 변환하는 것만으로도 큰 차이가 날 수 있습니다.
*   반복 데이터가 많은 매우 큰 오브젝트(예: [CostMatrixes](/api/#PathFinder-CostMatrix))는 압축하면 공간을 크게 절약할 수 있습니다. 이 방식을 쓰는 플레이어는 [lzstring](http://pieroxy.net/blog/pages/lz-string/index.html)을 살펴보고, 같은 costmatrix를 여러 번 풀지 않도록 `global` 캐시를 적극 활용해야 합니다.
*   전통적으로 대부분의 캐싱 시스템은 TTL을 `set` 함수에 넣지만, Screeps에서는 `get` 함수에 두는 편이 더 나을 수 있습니다. 이렇게 하면 필요에 따라 TTL을 조정할 수 있습니다. 예를 들어 캐시된 costmatrix의 TTL을, 시야가 없는 룸에서는 Infinity로 설정했다가, 시야가 생기면 다시 줄여서, 조금 오래된 데이터라도 항상 사용할 수 있게 할 수 있습니다.
*   오래된 캐시 엔트리를 지우는 로직을 잊지 마세요. 그렇지 않으면 시간이 지날수록 Memory가 점점 커질 수 있습니다.

