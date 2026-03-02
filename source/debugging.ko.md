title: 디버깅
---

JavaScript에서와 마찬가지로 표준 `console.log()` 메서드를 사용할 수 있습니다.

	for(var i in Game.creeps) {
        console.log(Game.creeps[i]);
    }

각 액션 명령은 성공적으로 실행이 요청되면 `OK` 코드를 반환하고, 오류가 발생하면 `ERR_*` 코드 중 하나를 반환합니다.

	var result = creep.attack(target);
    if(result != OK) {
        console.log(creep + ' failed to attack the target ' + target +
                        ' with the code: ' + result);
    }

겉보기에는 성공한 명령이라도 항상 실행되는 것은 아니라는 점에 유의하세요(예: 스크립트가 시작될 때는 몰랐던 장애물이 앞에 있어 이동/공격 등이 실행되지 않는 경우).

월드의 병렬 복사본에서 안전하게 스크립트를 테스트하려면, [Public Test Realm](/ptr.html) 서버를 사용할 수 있습니다.

## 웹 버전에서의 디버깅

게임을 웹 버전으로 플레이하면, 모든 콘솔 출력이 브라우저 콘솔로 전달됩니다. 시뮬레이션 모드에서는 스크립트가 브라우저에서 실행되므로, 오브젝트를 펼쳐보고 속성을 확인/탐색하는 등의 작업이 가능합니다.

또한 Chrome 브라우저에서는 시뮬레이션 모드에서 JavaScript 키워드 `debugger` 를 사용해 브레이크포인트를 걸 수 있으며, 이를 통해 디버깅을 위해 스크립트 실행을 일시 정지할 수 있습니다.

	var result = creep.attack(target);
    if(result != OK) {
        debugger;
    }

## 메모리 인스펙터

실시간으로 어떤 값을 추적하고 싶다면, 그 값을 Memory에 기록하고 Memory inspector 패널에서 해당 항목을 watch로 추가하세요. 매 틱 자동으로 갱신됩니다.

![](img/chrome_2016-06-21_22-21-36.png)

