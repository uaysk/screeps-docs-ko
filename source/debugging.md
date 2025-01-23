한국어 번역: title: 디버깅
---

Javascript 세계의 다른 곳과 마찬가지로 표준 `console. log()` 메서드가 있습니다.

	for(var i in Game. creeps) {
        console. log(Game. creeps[i]);
    }

각 작업 명령은 실행이 성공적인 경우 `OK` 코드를 반환하고 오류가 있는 경우 `ERR_*` 코드 중 하나를 반환합니다.

	var result = creep. attack(target);
    if(result ! = OK) {
        console. log(creep + ' 에러가 발생했습니다. ' + target +
                        ' 을(를) 공격하는 데 코드: ' + result);
    }

참고로, 성공적으로 실행된 것처럼 보이는 명령어도 실제로는 실행되지 않을 수 있습니다(예: 스크립트를 시작할 때 생성하지 못한 장애물에 직면한 경우).

안전하게 세계의 병렬 사본에서 스크립트를 테스트하려면, 당사의 [Public Test Realm](/ptr. html) 서버를 사용할 수 있습니다.

## 웹 버전에서의 디버깅

게임의 웹 버전을 이용할 때, 모든 콘솔 출력은 브라우저 콘솔로 전달됩니다. 시뮬레이션 모드에서 스크립트가 브라우저에서 실행될 때, 객체를 확장하고, 속성을 보거나 탐색할 수 있습니다.

또한 Chrome 브라우저에서 `debugger` JavaScript 키워드를 사용해 시뮬레이션 모드에서 중단점을 설정하여 스크립트 실행을 디버깅할 수 있습니다.

```javascript
var result = creep.attack(target);
if(result !== OK) {
    debugger;
}
```

## 메모리 인스펙터

실시간으로 특정 값을 추적하려면 Memory에 해당 값을 기록한 다음, Memory 인스펙터 패널에서 해당 감시를 추가합니다. 매 틱마다 자동으로 업데이트됩니다.

[](img/chrome_2016-06-21_22-21-36.