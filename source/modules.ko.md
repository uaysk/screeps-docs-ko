title: 모듈을 사용해 스크립트 구성하기
---

편의를 위해, Node.js와 유사한 문법인 `require` 함수와 `module.exports` 오브젝트를 사용해 스크립트를 모듈로 나눌 수 있습니다. 예를 들어 다음 내용으로 'scout'라는 모듈을 만들 수 있습니다:

    module.exports = {
        run(creep) {
            creep.moveTo(...);
        }
    }

그런 다음 메인 모듈에서 이렇게 포함할 수 있습니다:

    var scout = require('scout');

    for(var i in Game.creeps) {
        scout.run(Game.creeps[i]);
    }

여러분이 만든 모듈 외에도, 일부 내장 모듈을 사용할 수 있습니다. 현재는 [lodash](http://lodash.com) 모듈이 제공되며, 다음처럼 사용할 수 있습니다:

    var _ = require('lodash');

    var harvesters = _.filter(Game.creeps, {
        memory: {role: 'harvester'}
    });

## 바이너리 모듈(Binary modules)

일반 스크립트 모듈 외에도, 특별한 바이너리 모듈을 만들 수 있습니다. 이런 모듈은 `require`를 호출할 때 바이너리 데이터가 담긴 원시 `Buffer`로 로드됩니다. 이를 통해 [WebAssembly](http://webassembly.org/) 같은 기법을 사용해 다른 언어로 작성한 코드를 컴파일하고 Screeps에서 실행할 수 있습니다.

WebAssembly는 바이너리 컴파일 코드 포맷으로, C/C++ 또는 Rust 코드(또는 향후 지원될 다른 언어)를 네이티브에 가까운 성능으로 직접 실행할 수 있게 해줍니다. 자세한 내용은 WebAssembly [문서](https://developer.mozilla.org/en-US/docs/WebAssembly)를 참고하세요.

아래는 [Emscripten](https://kripken.github.io/emscripten-site/index.html)을 사용해 C/C++ 코드를 컴파일하고 바이너리 파일을 Screeps에 업로드하는 간단한 예시입니다.

### `.wasm` 파일 빌드하기

{% note info %}
웹에 있는 이미 컴파일된 `.wasm` 파일을 사용한다면 이 단계는 건너뛰어도 됩니다. 예를 들어 아래 예제에서 우리가 이미 컴파일해 둔 [`addTwo.wasm`](img/addTwo.wasm) 파일을 사용할 수 있습니다.
{% endnote %}

[이 안내](https://kripken.github.io/emscripten-site/docs/getting_started/downloads.html#sdk-installation-instructions)를 따라 Emsripten SDK를 설치하세요.

네이티브 C 함수를 작성하고 `addTwo.c` 파일로 저장합니다:

```c++
int addTwo(int a, int b) {
    return a + b;
}
```

다음 명령으로 `addTwo.wasm`으로 컴파일합니다:
```
emcc -s WASM=1 -s SIDE_MODULE=1 -O3 addTwo.c -o addTwo.wasm
```

### 바이너리 모듈 업로드

이 스위치를 사용해 바이너리 타입으로 새 모듈 `addTwo`를 추가하세요:

![](img/binary1.png) 

`addTwo.wasm` 파일을 바이너리 모듈 내용으로 업로드하면 다음처럼 보일 것입니다:

![](img/binary2.png) 

✔️ 버튼을 눌러 모듈을 커밋하세요.

### Screeps에서 네이티브 모듈 실행하기

바이너리 모듈을 올바르게 업로드했다면, 게임 내 IDE에서 다음과 같은 화면을 볼 수 있습니다:

![](img/binary3.png) 

이제 WebAssembly API를 사용해 `main`에서 가져온 바이너리 코드를 실행할 수 있습니다:

```javascript
// This will return an ArrayBuffer with `addTwo.wasm` binary contents
const bytecode = require('addTwo');

const wasmModule = new WebAssembly.Module(bytecode);

const imports = {};

// Some predefined environment for Emscripten. See here:
// https://github.com/WebAssembly/tool-conventions/blob/master/DynamicLinking.md
imports.env = {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({ initial: 256 }),
    table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })    
};

const wasmInstance = new WebAssembly.Instance(wasmModule, imports);

console.log(wasmInstance.exports.addTwo(2,3));
```

