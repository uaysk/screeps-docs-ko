크리프트, Game.creeps 배열에서 수확자를 골라내는 함수를 만들어 주세요:

```javascript
function harvest() {
    var harvesters = [];
    for(var i in Game.creeps) {
        if(_(Game.creeps[i]).type === 'harvester'){
            harvesters.push(Game.creeps[i]);
        }
    }
    return harvesters;
}
```

이 함수를 사용해서 Game.creeps 배열에 있는 크리프트 중 수확자만을 모아 새로운 배열을 만들어 봅시다:

```javascript
var scout = require('scout');
var harvesters = harvest();
for(var i in harvesters) {
    var creep = harvesters[i];
    scout.run(creep);
}
```

이제 모든 수확자를 처리했습니다!

한국어로 번역해줘:

creeps, {
    memory: {role: 'harvester'}
})

## 바이너리 모듈

일반적인 스크립트 모듈 외에, 특별한 바이너리 모듈을 만들 수 있습니다. 그러한 모듈은 `require`를 호출할 때 바이너리 데이터로 된 `Buffer`로서 로드되며, 이는 서로 다른 언어로 작성된 코드를 컴파일하고 Screeps에서 실행할 수 있게 해주는 [WebAssembly](http://webassembly.org/)와 같은 기법을 사용할 수 있도록 해줍니다.

WebAssembly는 C/C++ 또는 Rust 코드(향후에 지원되는 언어를 포함)를 네이티브 성능과 함께 직접 실행할 수 있게 하는 바이너리로 컴파일된 코드 형식입니다. 자세한 내용은 WebAssembly [문서](https://developer.mozilla.org/en-US/docs/WebAssembly)를 참조하십시오.

여기에 Emscripten을 사용하여 C/C++ 코드를 컴파일하는 방법에 대한 간단한 예가 있습니다.

[![Screenshot-2021-09-24-at-7.36.58-PM.png](https://user-images.githubusercontent.com/80310970/128762307-b0b2a6c8-d5c8-4e3e-9f0f-2a6713fd4d8b.png)](https://github.com/)

Imports.Int32 = wasmModule.export('Imports.Int32');
Imports.addTwo = wasmModule.export('addTwo');

// Import the function `addTwo` defined in `addTwo. wasm`
let result = Imports.addTwo(4, 6);

console.log(result); // Should print: 10
```

env = {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({ initial: 256 }),
    table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
};

const wasmInstance = new WebAssembly.Instance(wasmModule, imports);

console.log(wasmInstance.exports.);