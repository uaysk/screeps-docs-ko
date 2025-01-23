# 게임 맵 시각화

맵 시각화는 게임 맵에서 다양한 시각적 디버그 정보를 표시하는 방법을 제공합니다. `Game.map.visual` 객체를 사용하여 당신만이 볼 수 있는 간단한 도형을 그릴 수 있습니다.

지도 시각화는 데이터베이스에 저장되지 않으며, 브라우저에서만 무언가를 표시하기위한 목적입니다. 모든 그림은 1 틱에 지속될 것이고, 업데이트되지 않을 경우 사라질 것입니다. `Game.map.visual`의 모든 호출들은 자연스럽게 CPU 비용이 추가되지 않습니다(그 비용은 간단한 `JSON.serialize` 호출과 관련이 있는 자연스러운 것입니다). 하지만, 사용량에는 제한이 있습니다: 당신은 1000 KB의 일치되지 않은 데이터를 포스트할 수 없습니다.

모든 그리기 좌표들은 게임의 전체 좌표계(`RoomPosition`](#RoomPosition))로 측정됩니다.

pos1 : <a href="#RoomPosition">RoomPosition</a>
The start position object. ===
pos2 : <a href="#RoomPosition">RoomPosition</a>
The finish position object. ===
style (선택 사항) : object
다음과 같은 속성을 가진 객체입니다.
<ul>
    <li>
        <div class="api-arg-title">width</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Line width, default is 0.</div>
    </li>
</ul>

코드나 JavaScript 같은 번역이 필요 없는 단어, 대문자로만 된 단어는 번역하지 마세요. </div>
<li>
    <div class="api-arg-title">color</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">다음 포맷의 선 색: <code>#ffffff</code>(16진수). 기본값은 #ffffff입니다.</div>
</li>
<li>
    <div class="api-arg-title">opacity</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">불투명도 값. 기본값은 0.5입니다.</div>
</li>
<li>
    <div class="api-arg-title">lineStyle</div>
    <div class="api-arg-type">string</div>
    <div class="api-arg-desc">undefined(solid line), dashed 또는 dotted입니다.</div>
</li>
</ul>

기본값은 정의되지 않았습니다. </div>
    </li>
</ul>


### 반환 값
<code>MapVisual</code> 개체 자체입니다. 연속적인 호출이 가능하도록 합니다.

```javascript
Game.map.visual.circle(new RoomPosition(25,25,'E2S7'));
```

```javascript
Game.map.visual.circle(nuker.pos, {fill: 'transparent', radius: NUKE_RANGE*50, stroke: '#ff0000'});
```

원을 그립니다.
{% api_method_params %}
pos : <a href="#RoomPosition">RoomPosition</a>
센터의 위치 객체

style (옵션) : object
객체에는 다음과 같은 속성이 있습니다:
<ul>
    <li>
        <div class="api-arg-title">radius</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">원의 반경, 기본값은 10입니다. </div>
    </li>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">채우기 색상은 다음과 같은 형식: <code>#ffffff</code> (16진수 삼중수)입니다. 기본값은 #ffffff입니다. </div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">불투명 값, 기본값은 0.5입니다. </div>
    </li>
</ul></code></div>

</div>
    </li>
    
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">boolean</div>
        <div class="api-arg-desc">Whether or not to fill the rectangle, default value is true. </div>
    </li>
    
    <li>
        <div class="api-arg-title">fillColor</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">Rectangle fill color in the following format: <code>#ffffff</code> (hex triplet). Default is transparent. </div>
    </li>
    
    <li>
        <div class="api-arg-title">scaleX</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Scale the element horizontally by 'x' percentage. Default value is 1. </div>
    </li>
    
    <li>
        <div class="api-arg-title">scaleY</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Scale the element vertically by 'y' percentage. Default value is 1. </div>
    </li>
    
    <li>
        <div class="api-arg-title">rotationX</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Rotate the element around x-axis by 'x' degrees. Default value is 0. </div>
    </li>
    
    <li>
        <div class="api-arg-title">rotationY</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Rotate the element around y-axis by 'y' degrees. Default value is 0. </div>
    </li>
    
</ul>

"topLeftPos": { type: "number", description: "The x-coordinate of the top-left corner of the bounding box. Default is 0." },
"width": { type: "number", description: "The width of the bounding box in pixels." },
"height": { type: "number", description: "The height of the bounding box in pixels." },
"style": { type: "string", description: "Either undefined (solid line), dashed, or dotted. Default is undefined." }
}


### 반환값

<code>MapVisual</code> 객체 자체이므로 호출을 연결할 수 있습니다.

{% api_method rect 'topLeftPos, width, height, [style]' 0 %}

```javascript
// 탑의 최대 효율성 영역
Game.map.visual.rect(new RoomPosition(tower.pos.x - 5, tower.pos.y - 5, tower.pos.

{fill: 'transparent', stroke: '#ff0000'})
}</li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">Stroke color.  Default is none. </div>
    </li>
</ul>

{% api_method_params %}
topLeftPos : <a href="#RoomPosition">RoomPosition</a>
The position object of the top-left corner. 
===
width : number
The width of the rectangle. 
===
height : number
The height of the rectangle. 
===
style (optional) : object
An object with the following properties:
<ul>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">Fill color in the following format: <code>#ffffff</code> (hex triplet).  Default is #ffffff. </div>
    </li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">Stroke color.  Default is none. </div>
    </li>
</ul>
```

</div>
    </li>
    <li>
        <div class="api-arg-title">strokeDash</div>
        <div class="api-arg-type">array of two numbers or strings</div>
        <div class="api-arg-desc">Stroke dashed line format, default is undefined (no stroke). The array should contain the following: <code>[10, 10]</code>. </div>
    </li>
    <li>
        <div class="api-arg-title">strokeDashOffset</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Stroke dashed line offset, default is 0. </div>
    </li>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">Fill color in the following format: <code>#ffffff</code> (hex triplet). Default is undefined. </div>
    </li>
    <li>
        <div class="api-arg-title">text</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">Text to be displayed. Default is '' (empty string). </div>
    </li>
    <li>
        <div class="api-arg-title">textDecentering</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Vertical text decentering, default is 0. </div>
    </li>
    <li>
        <div class="api-arg-title">textIndent</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">Horizontal text indentation, default is 0. </div>
    </li>
</ul></div>

getPivotPoint({points, style: 'dashed'});
```

### Return value
<code>MapVisual</code> 객체 자체를 반환하므로 호출을 연속해서 사용할 수 있습니다.

{% api_method poly 'points, [style]' 0 %}
```javascript
const points = [];
points.push(creep1.pos);
points.push(Game.rooms.E2S7.storage.pos);
points.push(new RoomPosition(20,21,'W1N1'));
Game.map.visual.getPivotPoint({points, style: 'dashed'});
```

{fill: 'aqua'}
```
이것은 경로를 시각화하는 데 사용됩니다. Game.map.visual에서 다음과 같습니다. `poly(path, {stroke: '#ffffff', strokeWidth: .8, opacity: .2, lineStyle: 'dashed'});`
이것은 경로를 폴리라인으로 그립니다.

{% api_method_params %}
points : array
점들의 배열입니다. 모든 항목은 RoomPosition 객체여야 합니다.

===
style (선택 사항): object
다음과 같은 속성을 가진 객체:

<ul>
	<li>
		<div class="api-arg-title">fill</div>
		<div class="api-arg-type">string</div>
		<div class="api-arg-desc">다음 형식으로 채우기 색상: <code>#ffffff</code> (16진수 삼중). 기본값은 <code>undefined</code> (채우기 안함). </div>
	</li>
	<li>
		<div class="api-arg-title">opacity</div>
		<div class="api-arg-type">number</div>
		<div class="api-arg-desc">불투명도 값, 기본값은 0.5.</div>
	</li>
</ul>

코드나 JavaScript를 번역하지 마시고, 대문자로만 이루어진 단어도 번역하지 마십시오. Translated text: </div>
						</li>
						<li>
							<div class="api-arg-title">stroke</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">스트로크 색상, 다음과 같은 형식: <code>#ffffff</code> (16진수 세 배). 기본값은 #ffffff입니다. </div>
						</li>
						<li>
							<div class="api-arg-title">strokeWidth</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">스트로크 라인 폭, 기본값은 0.5입니다. </div>
						</li>
						<li>
							<div class="api-arg-title">lineStyle</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">안 되며 (두꺼운 선) undefined, dashed또는 dotted입니다.

기본값은 undefined입니다. </div>
							</li>
					</ul>

### 반환 값

<code>MapVisual</code> 객체 자체이므로, 호출을 연속적으로 사용할 수 있습니다.

{% endapi_method_params %}

### Return value

The <code>MapVisual</code> object itself, so that you can chain calls. 

{% api_method text 'text, pos, [style]' 0 %}

```javascript
Game.map.visual.text("Target💥", new RoomPosition(11,14,'E2S7'), {color: '#FF0000', fontSize: 10}); 
```

텍스트 레이블을 그립니다. 유효한 Unicode 문자를 사용할 수 있습니다(<a href="http://unicode.org/emoji/charts/emoji-style.txt" target="_blank">이모티콘</a>).

{% api_method_params %}
text : string
텍스트 메시지입니다. ====
pos : <a href="#RoomPosition">RoomPosition</a>
레이블 기준선의 위치 객체입니다.

</li>
							<li>
								<div class="api-arg-title">size</div>
						             <div class="api-arg-type">number</div>
		007							<div class="api-arg-desc">Font size in the following format: <code>16px</code>.  Default is "16px".</div>
							</li>
		008
							<li>
						              <div class="api-arg-title">fontfamily</div>
			009						<div class="api-arg-type">string</div>
							   <div class="api-arg-desc">Font family in the following format: <code>Helvetica, Arial, sans-serif</code>.  Default is "Helvetica, Arial, sans-serif".</div>
			010
				</ul>

description (required) : string
A description of the component.

default (optional) : object
An object with the following properties:
					<ul>
						<li>
		011					<div class="api-arg-title">color</div>
							<div class="api-arg-type">string</div>
							<div class="api-arg-desc">Font color in the following format: <code>#ffffff</code> (hex triplet).  Default is #ffffff.</div>
			012
							<li>
		013							<div class="api-arg-title">size</div>
			014						<div class="api-arg-type">number</div>
			015						<div class="api-arg-desc">Font size in the following format: <code>16px</code>.  Default is "16px".</div>
		016
	017
				</ul>

fontfamily (required) : string
A font family name.

kind (optional) : string
The kind of component, can be one of the following:
- text
- heading
- link
- label
- button

layout (optional) : object
An object with the following properties:
					<ul>
		018						<li>
			019						<div class="api-arg-title">padding</div>
			020						<div class="api-arg-type">number</div>
			021						<div class="api-arg-desc">Padding in the following format: <code>16px</code>.  Default is "0".</div>
			022
							</li>
		023
							<li>
		024							<div class="api-arg-title">margin</div>
		025							<div class="api-arg-type">number</div>
		026							<div class="api-arg-desc">Margin in the following format: <code>16px</code>.  Default is "0".</div>
		027
							</li>
		028
			</ul>

layout (optional) : object
An object with the following properties:
					<ul>
		029						<li>
		030							<div class="api-arg-title">padding</div>
		031							<div class="api-arg-type">number</div>
		032							<div class="api-arg-desc">Padding in the following format: <code>16px</code>.  Default is "0".</div>
		033
			034
							</li>
	035
	036
							<li>
		037							<div class="api-arg-title">margin</div>
		038							<div class="api-arg-type">number</div>
		039							<div class="api-arg-desc

</div><li>
<div class="api-arg-title">fontFamily</div>
<div class="api-arg-type">string</div>
<div class="api-arg-desc">글꼴 가족, 기본값은 <code>sans-serif</code></div>

<div class="api-arg-title">fontSize</div>
<div class="api-arg-type">number</div>
<div class="api-arg-desc">게임 좌표 단위로 글꼴 크기, 기본값은 10입니다.</div>

<div class="api-arg-title">fontStyle</div>
<div class="api-arg-type">string</div>
<div class="api-arg-desc">글꼴 스타일 ('normal', 'italic' or 'oblique')</div>

<div class="api-arg-title">fontVariant</div>
<div class="api-arg-type">string</div>
<div class="api-arg-desc">글꼴 변형 ('normal' or 'small-caps')</div>

<div class="api-arg-title">stroke</div>
<div class="api-arg-type">string</div>
<div class="api-arg-desc">눈금자 색상, 다음 형식을 사용하십시오: <code>#ffffff</code> (헥스 트리플릿).</div></li>

Default: undefined(배경색 없음)
</div>
						<li>
							<div class="api-arg-title">strokeWidth</div>
							<div class="api-arg-type">숫자</div>
							<div class="api-arg-desc">선 폭, 기본값은 0.15입니다.</div>
						</li>
						<li>
							<div class="api-arg-title">backgroundColor</div>
							<div class="api-arg-type">문자열</div>
							<div class="api-arg-desc">배경색은 다음과 같은 형식을 따릅니다. <code>#ffffff</code>(16진수). 기본값은 정의되지 않았습니다(배경색 없음). 배경이 활성화되면, 텍스트 수직 정렬은 중간으로 설정됩니다(기본값은 baseline(기준선)입니다.).

</div>
						<div class="api-arg-title">backgroundColor</div>
						<div class="api-arg-type">string</div>
						<div class="api-arg-desc">Background color string, default is #000000. </div>
					</li>
					<li>
							<div class="api-arg-title">borderWidth</div>
							<div class="api-arg-type">number</div>
							<div class="api-arg-desc">Border width, default is 1. </div>
	0.

안 번역할 것: JavaScript 코드, 대문자로만 된 단어
한국어 번역: 번역하지 마세요: JavaScript 코드, 전부 대문자인 단어
-------------------------------------
{% em-api-method-params %}

### 반환값
<code>MapVisual</code> 객체 자체이므로 호출을 연결할 수 있습니다.

{% api_method clear '' 0 %}

```javascript
Game.map.visual.clear();
```
지도에서 모든 비주얼을 제거합니다.


### 반환값
<code>MapVisual</code> 객체 자체이므로 호출을 연결할 수 있습니다.
{% api_method getSize '' 0 %}
```javascript
if(Game.map.visual.getSize() >= 1024000) {
    // 현재 틱에서 더 이상의 비주얼을 추가할 수 없습니다.
}
```
지도에 추가된 모든 비주얼의 크기를 메모리에 저장합니다. 현재 틱에서 1024,000(1000KB)을 넘길 수 없습니다.


### 반환값
비주얼의 크기입니다(바이트 단위).

Memory.MapVisualData = Game.map.visual.export();

Game.map.visual.import(Memory.MapVisualData)를 호출하면 현재 틱에서 지도에 추가된 모든 시각적 요소의 간결한 표현이 반환됩니다.

### 반환값

시각적 데이터가 있는 문자열입니다. 나중에 사용하기 위해 저장할 수 있지만 문자열로 얻은 데이터를 직접 처리할 방법은 없습니다.

{% api_method import 'val' 0 %}

Game.map.visual.import(Memory.MapVisualData)를 호출하면 이전에 <a href="#Game.map-visual.export">Game.map.visual.export</a>로 내보낸(exported) 지도 시각적 요소를 현재 틱의 지도 시각적 데이터에 추가합니다.

{% api_method_params %}
val : string
Game.map.visual.export()로 반환된 문자열입니다.

### API 메서드 매개변수

```javascript
const options = {
  method: 'GET',
  headers: {
    'User-Agent': 'MyScript/1.0'
  },
  params: {
    apiVersion: 'v1',
    resourceName: 'myresource'
  }
};

fetch('/api/<code>MapVisual</code>', options);
```

### 반환값

<code>MapVisual</code> 객체 자체, 호출을 연결할 수 있습니다.