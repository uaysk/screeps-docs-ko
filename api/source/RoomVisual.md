# RoomVisual

<center><img src="https://i.imgur.com/856l3Ug.png" width="50%" align="left"></center>

Room visuals는 게임방에서 다양한 시각적인 디버그 정보를 표현하기 위해 사용됩니다. `RoomVisual` 객체를 이용해 자신만 볼 수 있는 간단한 도형을 그릴 수 있습니다. 모든 존재하는 [Room] 객체에는 이미 `visual` (#Room. visual) 속성이 포함되어 있지만, 비가시성 여부와 관계없이 어떤 방을 위한 새로운 `RoomVisual` 객체도 생성자(#RoomVisual. constructor)를 사용하여 만들 수 있습니다.

Room visuals는 데이터베이스에 저장되지 않으며, 브라우저에서 무언가를 표시하기 위한 목적을 갖고 있습니다. 모든 그림은 1번의 틱 동안만 존속될 것이고 업데이트되지 않으면 사라질 것입니다.

'RoomVisual' API 호출에는 CPU 비용이 추가되지 않습니다. (비용은 자연스럽고 대부분 간단한 `JSON. serialize` 호출과 관련됩니다). 하지만, 사용 제한이 있습니다: 하나의 방에 500KB보다 더 많은 양의 직렬화된 데이터를 올릴 수 없습니다 (`RoomVisual. getSize` 메서드 참조).

모든 그리기 좌표는 게임 좌표로 측정되고 타일 중심으로 집계됩니다. 즉, `(10,10)`는 위치 `x:10; y:10`에 있는 크립트의 중심을 가리킵니다. 소수 좌표도 사용할 수 있습니다.
```javascript
Game.rooms['W10N10'].visual.circle(10,20).line(0,0,10,20);
// 동일한 작업:
new RoomVisual('W10N10').circle(10,20).line(0,0,10,20);
```

JavaScript 코드를 번역하지 마시고, 대문자로만 쓰인 단어도 번역하지 마십시오.
Translate this article into Korean : line(0,0,10,20);
```

```javascript
// 이 텍스트는 모든 룸에 표시됩니다
new RoomVisual().text('Some text', 1, 1, {align: 'left'}); 
```

새로운 RoomVisual객체를 언제든지 보이지 않는 스크립트에서도 룸에 직접 만들 수 있습니다.

{% api_method_params %}
roomName (optional) : string
이 룸의 이름입니다. 값을 지정하지 않으면, 시각적 효과가 모든 룸에 동시에 게시됩니다.
{% endapi_method_params %}



{% api_property roomName 'string' %}

이름: 룸의 이름입니다.



{% api_method line 'x1, y1, x2, y2, [style]|pos1, pos2, [style]' 0 %}
```javascript
new RoomVisual('W1N1').line(10,15, 20,20);
```

```javascript
creep.room.visual.line(creep.pos, target.pos);
```

{color: 'red', lineStyle: 'dashed'}');
```

이는 선을 그리기 위한 코드입니다.
{% api_method_params %}
x1 : number
시작 X 좌표입니다. 
===
y1 : number
시작 Y 좌표입니다. 
===
x2 : number
끝남 X 좌표입니다. 
===
y2 : number
끝남 Y 좌표입니다. 
===
pos1 : <a href="#RoomPosition">RoomPosition</a>
시작 위치 객체입니다. 
===
pos2 : <a href="#RoomPosition">RoomPosition</a>
끝남 위치 객체입니다. 
===
style (선택적) : object
다음과 같은 속성을 가진 객체입니다.
<ul>
    <li>
        <div class="api-arg-title">width</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">선 폭, 기본값은 0입니다. 1.</div>
    </li>
</ul>
```

<li>
    <div class="api-arg-title">color</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">웹에서 사용할 수 있는 어떤 형식의 라인 색상이든, 기본값은 <code>#ffffff</code> (흰색)입니다. </div>
</li>
<li>
    <div class="api-arg-title">opacity</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">불투명도 값, 기본값은 0.5입니다.</div>
</li>
<li>
    <div class="api-arg-title">lineStyle</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">undefined (선 채움), dashed, 또는 dotted. 기본값은 undefined입니다.</div>
</li>

{% api_method_params %}
style: <string|undefined>,
pos: <RoomPosition>,
radius: number,
{% endapi_method_params %}

===
fill : <string|undefined>,
stroke : string,
color : number,
opacity : number
{% api_method_params %}

```
style (optional): object
값을 할당하지 않으면 default가 되는 속성을 가진 객체입니다.
<ul>
    <li>
        <div class="api-arg-title">radius</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">원의 반경, default is 0. 15.</div>
    </li>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">웹에서 사용하는 모든 색상, default is #ffffff (white).</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">불투명도 값, default is 0. 5.</div>
    </li>
</ul>```

</li>
<li>
    <div class="api-arg-title">fillColor</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">Fill color in any web format, default is undefined (no fill). </div>
</li>
<li>
    <div class="api-arg-title">fillAlpha</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">Fill opacity, from 0 (no fill) to 1. Default is undefined (no fill). </div>
</li>
<li>
    <div class="api-arg-title">fillHandles</div>
    <div class="api-arg-type">boolean</div>
    <div class="api-arg-desc">Whether the shape should have fill handles, default is true. </div>
</li>
<li>
    <div class="api-arg-title">fontFamily</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">Font family name or an array of names, default is undefined. </div>
</li>
<li>
    <div class="api-arg-title">fontSize</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">Font size in pixels, default is 14. </div>
</li>
<li>
    <div class="api-arg-title">fontWeight</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">Font weight, either normal or bold. Default is normal. </div>
</li>
<li>
    <div class="api-arg-title">horizontalAlignment</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">Horizontal alignment of text, either <code>left</code>, <code>center</code>, or <code>right</code>. Default is left. </div>
</li>
<li>
    <div class="api-arg-title">verticalAlignment</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">Vertical alignment of text, either <code>top</code>, <code>middle</code>, or <code>bottom</code>. Default is top. </div>
</li>
<li>
    <div class="api-arg-title">textDecoration</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">Text decoration, either <code>none</code>, <code>line-through</code>, or <code>underline</code>. Default is none. </div>
</li>
<li>
    <div class="api-arg-title">textTransform</div>
    <div class="api-arg-type">object</div>
    <div class="api-arg-desc">Text transform, as an object with the following properties: <code>{}</code>, <code>rotate</code>, and <code>scale</code>. Default is none. </div>
</li>
<li>
    <div class="api-arg-title">borderColor</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">Border color in any web format, default is undefined (no border). </div>
</li>
<li>
    <div class="api-arg-title">borderRadius</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">Border radius, default is 0. </div>
</li>
<li>
    <div class="api-arg-title">borderWidth</div>
    <div class="api-arg-type">object</div>
    <div class="api-arg-desc">Border width, as an object with the following properties: <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>. Default is undefined. </div>
</li>
<li>
    <div class="api-arg-title">backgroundColor</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc

x, y, width, height, [style]|topLeftPos, width, height, [style]:
이것은 <code>RoomVisual</code> 객체를 반환합니다. 연속 호출을 실행할 수 있습니다.
{% api_method rect 'x, y, width, height, [style]|topLeftPos, width, height, [style]' 0 %}
```javascript
// 9x9 영역의 (2,2)에서 (10,10)까지
new RoomVisual('W1N1'). rect(1.5, 1.5, 9, 9);
```
```javascript
// 크리퍼스의 경계선 사각형
creep.room.visual.rect(creep.pos.x - 0.6, creep.pos.y - 0.6,
    1.2, 1.2, {fill: 'transparent', stroke: '#f00'});
```
사각형을 그립니다.
{% api_method_params %}
x : number
사각형의 왼쪽 상단 모서리의 X 좌표입니다. ===
y : number
사각형의 왼쪽 상단 모서리의 Y 좌표입니다.

topLeftPos : RoomPosition
topLeftPos 의 위치입니다.
===
width : number
사각형의 너비입니다.
===
height : number
사각형의 높이입니다.
===
style (optional) : object
다음과 같은 속성을 갖는 객체입니다.
<ul>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">모든 웹 형식에서 채우기 색상, 기본값은 #ffffff(white)입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">불투명도 값, 기본값은 0.5입니다.</div>
    </li>
</ul>

번역할 코드가 없습니다. 대문자로만 이루어진 단어도 번역하지 마십시오. </div>
<li>
    <div class="api-arg-title">stroke</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">웹 형식의 스트로크(stroke) 색상, 기본값은 undefined(없음)입니다.</div>
</li>
<li>
    <div class="api-arg-title">strokeWidth</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">스트로크(stroke) 선 너비, 기본값은 0.1입니다.</div>
</li>
<li>
    <div class="api-arg-title">lineStyle</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">undefined(솔리드 선), dashed, 또는 dotted입니다. 기본값은 undefined입니다.</div>
</li>

코드를 한국어로 번역하지 마십시오. JavaScript와 같은 코드를 번역하지 마십시오. 대문자로만 된 단어는 번역하지 마십시오. Translate this article into Korean : </div>
<li>
</ul>
				
{% endapi_method_params %}

### 반환값

객체인 <code>RoomVisual</code>를 직접 반환하므로, 연속 호출이 가능합니다. {% api_method poly 'points, [style]' 0 %}
```javascript
const points = [];
points. push(creep1. pos);
points. push([10,15]);
points. push(new RoomPosition(20,21,'W1N1'));
new RoomVisual('W1N1'). poly(points, {fill: 'aqua'}); 
```
```javascript
// visualize the path
const path = Game. rooms['W1N1']. findPath(from, to);
new RoomVisual('W1N1'). poly(path, {stroke: '#fff', strokeWidth: . 15,
	opacity: . 2, lineStyle: 'dashed'}); 
```
{% api_method_params %}
points : array
An array of points.

모든 항목은 배열로 2개의 숫자(예: <code>[10,15]</code>)여야 하거나 <a href="#RoomPosition"><code>RoomPosition</code></a> 객체여야 합니다.
===
style (선택적): 객체
다음과 같은 속성을 가진 객체:
					<ul>
						<li>
							<div class="api-arg-title">fill</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">웹 포맷의 색상 채우기이며, 기본값은 <code>undefined</code> (채워지지 않음)입니다. </div>
						</li>
						<li>
							<div class="api-arg-title">opacity</div>
							<div class="api-arg-type">number</div>
	0.5와 같이 불투명도 값, 기본값은 0입니다.

번역하지 마세요: JavaScript, 대문자로만 된 단어를 번역하지 마십시오. Translate this article into Korean : </div>
						</li>
						<li>
							<div class="api-arg-title">stroke</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">웹 형식의 밑줄 색상, 기본값은 <code>#ffffff</code> (흰색). </div>
						</li>
						<li>
							<div class="api-arg-title">strokeWidth</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">밑줄 라인 너비, 기본값은 0.1입니다. </div>
						</li>
						<li>
							<div class="api-arg-title">lineStyle</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">undefined( Solid line ), dashed , or dotted . 기본값은 undefined. </div>
						</li>

객체 자체를 반환합니다. 이렇게하면 호출을 연결할 수 있습니다.
```javascript
new RoomVisual('W1N1'). text("Target💥", 10, 15, {color: 'green', font: 0.8});
```
텍스트 레이블을 그립니다. 모든 유효한 Unicode 문자를 사용할 수 있습니다. `<a href="http://unicode.org/emoji/charts/emoji-style.txt" target="_blank">이모티콘</a>`도 가능합니다.
```javascript
new RoomVisual('W1N1'). text("Target💥", 10, 15, {color: 'green', font: 0.8});
```

pos : RoomPosition
레이블의 baseline 위치입니다. ===
style (optional) : object
다음과 같은 프로퍼티를 가진 객체입니다:
					<ul>
						<li>
							<div class="api-arg-title">color</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">웹 포맷의 글꼴 색상, 기본값은 #ffffff(white)입니다.</div>
						</li>
						<li>
							<div class="api-arg-title">font</div>
							<div class="api-arg-type">number, string</div>
							<div class="api-arg-desc">다음 중 하나인 숫자 또는 문자열입니다:
		0.

7 - 게임 좌표의 상대적인 크기
20px - 픽셀의 절대 크기
0.7 serif
bold italic 1.5 Times New Roman

</div>
						<li>
							<div class="api-arg-title">backgroundPositionX</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">Background rectangle position x, default is 0. </div>
						</li>
						<li>
							<div class="api-arg-title">backgroundPositionY</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">Background rectangle position y, default is 0. </div>
						</li>
						<li>
							<div class="api-arg-title">borderRadius</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">Border radius, default is 0. </div>
						</li>
						<li>
							<div class="api-arg-title">borderWidth</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">Border width, default is 0. </div>
						</li>
						<li>
							<div class="api-arg-title">borderStyle</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">Border style, default is 'solid'. </div>
						</li>
						<li>
							<div class="api-arg-title">color</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">Text color, default is undefined (no text). </div>
						</li>
						<li>
							<div class="api-arg-title">fontFamily</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">Font family, default is 'auto'. </div>
	0						<li>
							<div class="api-arg-title">fontSize</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">Font size, default is 16. </div>
						</li>
						<li>
							<div class="api-arg-title">fontWeight</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">Font weight, default is 'normal'. </div>
						</li>
						<li>
							<div class="api-arg-title">horizontalAlignment</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">Horizontal alignment, default is 'center'. </div>
						</li>
						<li>
							<div class="api-arg-title">leftPadding</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc

align('center')
  opacity(0.5)
  .setTranslation(345, 128)
  .update();
```

The <code>RoomVisual</code>
object itself, so that you can chain calls.

{% api_method clear '' 0 %}

```
clear(); // Don't translate codes like JavaScript, don't translate words that are only in uppercase letters, Translate this article into Korean :

방에서 모든 시각적 요소를 삭제합니다.

### 반환값

<code>RoomVisual</code> 객체 자체입니다. 연속 호출이 가능하도록 해줍니다.
{% api_method getSize '' 0 %}

```javascript
if(creep.room.visual.getSize() >= 512000) {
    // 현재 틱에서 더 이상의 시각적 요소를 추가할 수 없습니다.
}
```
현재 틱에서 방에 추가된 모든 시각적 요소들의 크기를 바이트 단위로 얻을 수 있습니다. 512,000 (500 KB)를 넘어서는 안됩니다.

### 반환값

시각적 요소들의 크기(바이트).
{% api_method export '' 0 %}
```javascript
Memory.RoomVisualData['E2S7'] = Game.rooms.E2S7.visual.export();
```
현재 틱에서 방에 추가된 모든 시각적 요소들의 컴팩트한 표현을 반환합니다.

## 반환 값

시각적 데이터가 포함된 문자열입니다. 나중에 저장하기 위해 문자열을 사용할 수있는 방법은 거의 없습니다.

{% api_method import 'val' 0 %}

```javascript
if(Memory.RoomVisualData['E2S7']) {
    Game.rooms.E2S7.visual.import(Memory.RoomVisualData['E2S7']);
}
```

{% api_method_params %}
val : 문자열
<a href="#RoomVisual.export">RoomVisual.export</a>로 이전에 내보낸 방의 시각적 데이터를 현재 틱의 방 시각 데이터에 추가합니다.
{% endapi_method_params %}

## 반환 값

<code>RoomVisual</code> 객체 자체이므로 호출을 연결할 수 있습니다.