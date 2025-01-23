# Room. Terrain

Terrain 데이터에 대한 빠른 액세스를 제공하는 객체입니다. 이러한 객체는 해당 객체에 대한 접근 권한이없는 경우에도 세계의 모든 방에 대해 구성 될 수 있습니다.

기술적으로 모든 `Room. Terrain`객체는 해당 최소 액세서를 갖는 기본 정적 지형 버퍼입니다.

{% api_method constructor 'roomName' 0 %}

```javascript
const terrain = new Room. Terrain("E2S7");
```

```javascript
const terrain = new Room. Terrain(Game. creeps. John. room. name);
```

Creates a new `Terrain` of room by its name. 방 객체를 만들 수 있습니다. 해당 객체에 대한 액세스 권한이없는 경우에도 세계의 모든 방을 구성 할 수 있습니다.

1 : 0 ;
        matrix. set(x, y, weight);
    }
}
```
{% em %}
{% /em %}
```javascript
console. log(`Tile at ${terrain. get(30, 20)} is ${terrain. get(30, 20)}`);
```

terrain">Terrain</a> API used in <a href="#Room. Terrain">Room. Terrain</a>, this method does not take <a href="#Tile. TILE_MASK_MASK">Tile.TILE_MASK_MASK</a> as input and returns the corresponding value of <a href="#Tile. TERRAIN_MASK_MASK">Tile.TERRAIN_MASK_MASK</a>.

Get terrain type at the specified room position by (x,y) coordinates. Unlike the Terrain API used in Room.Terrain, this method does not take Tile.TILE_MASK_MASK as input and returns the corresponding value of Tile.TERRAIN_MASK_MASK.

`Game.map.getTerrainAt(... )` 메서드는 문자열 조작을 수행하지 않으며 정수형 영토 유형 값(아래 참조)을 반환합니다.
{% api_method_params %}
x : number
룸의 X 위치입니다.
===
y : number
룸의 Y 위치입니다.

"#### 반환값

다음 정수 중 하나:

| value | <a href="#Constants">상수</a> (*있는 경우) | 설명 |
|-|-|-|
| 0 | *존재하지 않음* | 지형이 `평야`임. |
| 1 | `TERRAIN_MASK_WALL` | 지형이 `벽`임. |
| 2 | `TERRAIN_MASK_SWAMP` | 지형이 `늪`임. |

{% api_method getRawBuffer '[destinationArray]' 1 %}
```
javascript"}]

[("plains", "평야"), ("walls", "벽"), ("swamps", "늪")]

번역하기 힘든 부분은 건너뛰겠습니다. 원문과 최대한 유사하게 번역해보았습니다.

```javascript
// 입력 : "green" - "white",
// 변경된 색상의 서클을 만듭니다.
function visual(x, y, color) {
    if (color === 'green') {
        visual. circle(x, y, {fill: 'white', radius: 0.5});
    } else {
        visual. circle(x, y, {fill: color, radius: 0.5});
    }
}

visual. circle(1, 1, 'red'); // 빨강으로 변경됩니다.
```

```javascript
const raw = (new Room. Terrain("E2S7")). getRawBuffer();
myPrintRawTerain(raw);
```

**Get copy of underlying static terrain buffer.** **Current underlying representation is `Uint8Array`**.

{% api_method_params %}
destinationArray (optional) : Uint8Array
A typed array view in which terrain will be copied to.
{% endapi_method_params %}
***WARNING:*** *this method relies on underlying representation of terrain data.

전체 방의 지형 데이터 (2,500 타일)를 얻는 가장 빠른 방법이지만, 미래에 사용되지 않게 될 수도 있고, 기저 자료의 표현으로 인해 반환값의 타입이 바뀔 수 있다는 것을 잊지말아야한다. *

사용법 예제 참조. <a href="/modules.html#Binary-modules">_binary modules_</a>에 대해서 더 알아보기.

### Return value

2,500개의 크기를 지닌 `Uint8Array` [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)인 기저 방 지형 표현의 복사본이다.

각 요소는 정수이며, 지형 유형은 적절한 `TERRAIN_MASK_*` 상수와 AND(&) 연산자를 적용하여 얻을 수 있습니다.

룸 타일은 **행 단위로** 저장됩니다.

`destinationArray`가 지정되면 복사가 성공했는지 여부에 따라 이 채워진 `destinationArray`의 참조를 반환합니다. 그렇지 않으면 오류 코드가 반환됩니다.