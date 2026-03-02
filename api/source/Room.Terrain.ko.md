# Room.Terrain

룸 지형 데이터에 빠르게 접근할 수 있게 해주는 오브젝트입니다. 이 오브젝트는 여러분이 접근 권한이 없는 룸에 대해서도 월드의 어떤 룸이든 생성할 수 있습니다.

기술적으로 모든 `Room.Terrain` 오브젝트는, 대응되는 최소 접근자(accessors)를 가진 정적 지형 버퍼 위에 있는 매우 가벼운 어댑터(adapter)입니다.

{% api_method constructor 'roomName' 0 %}

```javascript
const terrain = new Room.Terrain("E2S7");
```

```javascript
const terrain = new Room.Terrain(Game.creeps.John.room.name);
```

룸 이름으로 새 `Terrain`을 생성합니다. `Terrain` 오브젝트는 접근 권한이 없더라도 월드의 어떤 룸이든 생성할 수 있습니다.

{% api_method_params %}
roomName : string
룸 이름.
{% endapi_method_params %}

{% api_method get 'x, y' 0 %}

```javascript
switch(terrain.get(10,15)) {
    case TERRAIN_MASK_WALL:
        break;
    case TERRAIN_MASK_SWAMP:
        break;
    case 0:
        break;
}
```

```javascript
const roomName = "E2S7";
const terrain = new Room.Terrain(roomName);
const matrix = new PathFinder.CostMatrix;
const visual = new RoomVisual(roomName);

// Fill CostMatrix with default terrain costs for future analysis:
for(let y = 0; y < 50; y++) {
    for(let x = 0; x < 50; x++) {
        const tile = terrain.get(x, y);
        const weight =
            tile === TERRAIN_MASK_WALL  ? 255 : // wall  => unwalkable
            tile === TERRAIN_MASK_SWAMP ?   5 : // swamp => weight:  5
                                            1 ; // plain => weight:  1
        matrix.set(x, y, weight);
        visual.text(weight, x, y);
    }
}
```

```javascript
// bound to WASM module heap
const heapView = new Uint8Array(wasmModule.HEAPU8.buffer, ...); 
const terrain = new Room.Terrain("E2S7");

// Copy terrain data to binary WASM module heap:
for(let y = 0; y < 50; y++) {
    for(let x = 0; x < 50; x++) {
        heapView[y * 50 + x] = terrain.get(x, y);
    }    
}
```

`(x,y)` 좌표로 지정한 룸 위치의 지형 타입을 가져옵니다. <a href="#Game.map.getTerrainAt">`Game.map.getTerrainAt(...)`</a>과 달리, 이 메서드는 문자열 연산을 수행하지 않으며 정수 지형 타입 값을 반환합니다(아래 참고).

{% api_method_params %}
x : number
룸 내 X 좌표.
===
y : number
룸 내 Y 좌표.
{% endapi_method_params %}

### 반환 값

다음 정수 값 중 하나:

| value | <a href="#Constants">constant</a> (*if exists*) | description |
|-|-|-|
| 0 | *doesn't exist* | terrain is `plain` |
| 1 | `TERRAIN_MASK_WALL` | terrain is `wall`|
| 2 | `TERRAIN_MASK_SWAMP` | terrain is `swamp`|

{% api_method getRawBuffer '[destinationArray]' 1 %}

```javascript
function myPrintRawTerain(raw) {
    const visual = new RoomVisual();
    for(let y = 0; y < 50; y++) {
        for(let x = 0; x < 50; x++) {
            const code = raw[y * 50 + x];
            const color =
                (code & TERRAIN_MASK_WALL ) ? "gray"  :
                (code & TERRAIN_MASK_SWAMP) ? "green" : "white" ;
            visual.circle(x, y, {fill: color, radius: 0.5});
        }
    }
}

const raw = (new Room.Terrain("E2S7")).getRawBuffer();
myPrintRawTerain(raw);
```

```javascript
// bound to WASM module heap
const heapView = new Uint8Array(wasmModule.HEAPU8.buffer, ...); 
const terrain = new Room.Terrain("E2S7");

// Fast direct copy terrain data to binary WASM module heap:
const t = Game.cpu.getUsed();
const result = terrain.getRawBuffer(heapView);
if(result !== ERR_INVALID_ARGS) {
    // Copy succeeded, call WASM functions here:
    // wasmModule.myFunc(...); // modifies raw memory of "heapView"
    console.log("Distance transform done in", Game.cpu.getUsed() - t);
    myPrintRawTerain(heapView);
}
```

```cpp
// Somewhere inside binary module source code...
void myFunc(void* ptr) {
    auto u8ptr = static_cast<uint8_t*>(ptr);
    // computations here...
}
```

기저의 정적 지형 버퍼 복사본을 가져옵니다. **현재 기저 표현은 `Uint8Array`입니다.**

{% api_method_params %}
destinationArray (optional) : Uint8Array
지형이 복사될 typed array view.
{% endapi_method_params %}

***경고:*** *이 메서드는 지형 데이터의 기저 표현에 의존합니다. 룸 전체(2500 타일)의 지형 데이터를 얻는 가장 빠른 방법이지만, 향후 언제든 deprecated될 수 있거나 반환 타입이 바뀔 수 있음을 염두에 두세요.*

사용 예시를 참고하세요. <a href="/modules.html#Binary-modules">_바이너리 모듈_</a>에 대해서도 참고할 수 있습니다.

### 반환 값

크기 2500의 새 `Uint8Array` [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)로, 룸 지형 표현의 복사본을 반환합니다.

각 원소는 정수이며, 적절한 `TERRAIN_MASK_*` 상수로 비트 AND(`&`)를 적용해 지형 타입을 얻을 수 있습니다. 룸 타일은 **행(row) 단위**로 저장됩니다.

`destinationArray`가 지정되면, 복사에 성공했을 때는 채워진 `destinationArray` 레퍼런스를 반환하고, 실패하면 에러 코드를 반환합니다:

{% api_return_codes %}
ERR_INVALID_ARGS | `destinationArray` 타입이 호환되지 않습니다.
{% endapi_return_codes %}

