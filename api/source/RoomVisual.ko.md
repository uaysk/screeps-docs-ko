# RoomVisual

<img align="right" src="img/visual.png">

룸 비주얼(Room visuals)은 게임 룸 안에 다양한 시각적 디버그 정보를 표시하는 방법을 제공합니다.
`RoomVisual` 객체를 사용해 본인에게만 보이는 간단한 도형을 그릴 수 있습니다.
모든 `Room` 객체에는 이미 [`visual`](#Room.visual) 속성이 있지만,
[생성자](#RoomVisual.constructor)를 사용하면 (시야가 없어도) 어떤 방에 대해서든 새 `RoomVisual` 객체를 만들 수도 있습니다.

룸 비주얼은 데이터베이스에 저장되지 않으며, 오직 브라우저에 표시하는 것이 목적입니다. 모든 그림은 1틱 동안만 유지되며, 업데이트하지 않으면 사라집니다.
모든 `RoomVisual` API 호출은 추가 CPU 비용이 없습니다(비용은 자연 비용이며, 주로 간단한 `JSON.serialize` 호출과 관련됩니다).
다만 사용량 제한이 있습니다: 방 하나당 직렬화된 데이터는 500 KB를 초과하여 게시할 수 없습니다([`getSize`](#RoomVisual.getSize) 메서드 참고).

모든 좌표는 게임 좌표로 측정되며 타일의 중앙을 기준으로 합니다. 즉 (10,10)은 `x:10; y:10` 위치에 있는 크립의 중앙을 가리킵니다. 소수 좌표도 사용할 수 있습니다.



{% api_method constructor '[roomName]' 0 %}

```javascript
Game.rooms['W10N10'].visual.circle(10,20).line(0,0,10,20);
// the same as:
new RoomVisual('W10N10').circle(10,20).line(0,0,10,20);
```

```javascript
// this text will be displayed in all rooms
new RoomVisual().text('Some text', 1, 1, {align: 'left'}); 
```

스크립트에서 보이지 않는 방이라도, 어떤 방이든 새 <code>RoomVisual</code> 객체를 직접 생성할 수 있습니다.

{% api_method_params %}
roomName (optional) : string
방 이름입니다. undefined이면 비주얼이 모든 방에 동시에 게시됩니다.
{% endapi_method_params %}



{% api_property roomName 'string' %}



방 이름입니다.





{% api_method line 'x1, y1, x2, y2, [style]|pos1, pos2, [style]' 0 %}

```javascript
new RoomVisual('W1N1').line(10,15, 20,20);
```

```javascript
creep.room.visual.line(creep.pos, target.pos,
    {color: 'red', lineStyle: 'dashed'});
```

선을 그립니다.

{% api_method_params %}
x1 : number
시작 X 좌표입니다.
===
y1 : number
시작 Y 좌표입니다.
===
x2 : number
끝 X 좌표입니다.
===
y2 : number
끝 Y 좌표입니다.
===
pos1 : <a href="#RoomPosition">RoomPosition</a>
시작 위치 객체입니다.
===
pos2 : <a href="#RoomPosition">RoomPosition</a>
끝 위치 객체입니다.
===
style (optional) : object
다음 속성을 가진 객체입니다:
<ul>
    <li>
        <div class="api-arg-title">width</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">선 두께이며 기본값은 0.1입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">color</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">선 색상입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 <code>#ffffff</code>(흰색)입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">불투명도 값이며 기본값은 0.5입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code>(실선), <code>dashed</code>, <code>dotted</code> 중 하나입니다. 기본값은 undefined입니다.</div>
    </li>
</ul>
				
{% endapi_method_params %}


### 반환 값

메서드 체이닝을 할 수 있도록 <code>RoomVisual</code> 객체 자기 자신을 반환합니다.

{% api_method circle 'x, y, [style]|pos, [style]' 0 %}

```javascript
new RoomVisual('W1N1').circle(10,15);
```

```javascript
creep.room.visual.circle(creep.pos,
    {fill: 'transparent', radius: 0.55, stroke: 'red'});
```

원을 그립니다.

{% api_method_params %}
x : number
중심의 X 좌표입니다.
===
y : number
중심의 Y 좌표입니다.
===
pos : <a href="#RoomPosition">RoomPosition</a>
중심의 위치 객체입니다.
===
style (optional) : object
다음 속성을 가진 객체입니다:
<ul>
    <li>
        <div class="api-arg-title">radius</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">원의 반지름이며 기본값은 0.15입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">채우기 색상입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 <code>#ffffff</code>(흰색)입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">불투명도 값이며 기본값은 0.5입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">외곽선 색상입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 undefined(외곽선 없음)입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">strokeWidth</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">외곽선 두께이며 기본값은 0.1입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code>(실선), <code>dashed</code>, <code>dotted</code> 중 하나입니다. 기본값은 undefined입니다.</div>
    </li>
</ul>
				
{% endapi_method_params %}


### 반환 값

메서드 체이닝을 할 수 있도록 <code>RoomVisual</code> 객체 자기 자신을 반환합니다.

{% api_method rect 'x, y, width, height, [style]|topLeftPos, width, height, [style]' 0 %}

```javascript
// 9x9 area from (2,2) to (10,10)
new RoomVisual('W1N1').rect(1.5, 1.5, 9, 9); 
```

```javascript
// a rectangle border on creep
creep.room.visual.rect(creep.pos.x - 0.6, creep.pos.y - 0.6, 
    1.2, 1.2,
    {fill: 'transparent', stroke: '#f00'});
```

사각형을 그립니다.

{% api_method_params %}
x : number
좌상단 모서리의 X 좌표입니다.
===
y : number
좌상단 모서리의 Y 좌표입니다.
===
topLeftPos : <a href="#RoomPosition">RoomPosition</a>
좌상단 모서리의 위치 객체입니다.
===
width : number
사각형의 너비입니다.
===
height : number
사각형의 높이입니다.
===
style (optional) : object
다음 속성을 가진 객체입니다:
<ul>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">채우기 색상입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 <code>#ffffff</code>(흰색)입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">불투명도 값이며 기본값은 0.5입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">외곽선 색상입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 undefined(외곽선 없음)입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">strokeWidth</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">외곽선 두께이며 기본값은 0.1입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code>(실선), <code>dashed</code>, <code>dotted</code> 중 하나입니다. 기본값은 undefined입니다.</div>
    </li>
</ul>
				
{% endapi_method_params %}


### 반환 값

메서드 체이닝을 할 수 있도록 <code>RoomVisual</code> 객체 자기 자신을 반환합니다.

{% api_method poly 'points, [style]' 0 %}


```javascript
const points = [];
points.push(creep1.pos);
points.push([10,15]);
points.push(new RoomPosition(20,21,'W1N1'));
new RoomVisual('W1N1').poly(points, {fill: 'aqua'}); 
```

```javascript
// visualize the path
const path = Game.rooms['W1N1'].findPath(from, to);
new RoomVisual('W1N1').poly(path, {stroke: '#fff', strokeWidth: .15,
	opacity: .2, lineStyle: 'dashed'}); 
```

폴리라인을 그립니다.

{% api_method_params %}
points : array
점들의 배열입니다. 각 요소는 숫자 2개로 이루어진 배열(예: <code>[10,15]</code>)이거나, <a href="#RoomPosition"><code>RoomPosition</code></a> 객체여야 합니다.
===
style (optional) : object
다음 속성을 가진 객체입니다:
						<ul>
							<li>
								<div class="api-arg-title">fill</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">채우기 색상입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 <code>undefined</code>(채우기 없음)입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">opacity</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">불투명도 값이며 기본값은 0.5입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">stroke</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">외곽선 색상입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 <code>#ffffff</code>(흰색)입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">strokeWidth</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">외곽선 두께이며 기본값은 0.1입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">lineStyle</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc"><code>undefined</code>(실선), <code>dashed</code>, <code>dotted</code> 중 하나입니다. 기본값은 undefined입니다.</div>
							</li>
						</ul>
					
{% endapi_method_params %}


### 반환 값

메서드 체이닝을 할 수 있도록 <code>RoomVisual</code> 객체 자기 자신을 반환합니다.

{% api_method text 'text, x, y, [style]|text, pos, [style]' 0 %}

```javascript
new RoomVisual('W1N1').text("Target💥", 10, 15, {color: 'green', font: 0.8}); 
```

텍스트 라벨을 그립니다. <a href="http://unicode.org/emoji/charts/emoji-style.txt" target="_blank">이모지</a>를 포함해, 유효한 모든 유니코드 문자를 사용할 수 있습니다.

{% api_method_params %}
text : string
텍스트 메시지입니다.
===
x : number
라벨 기준선(baseline) 지점의 X 좌표입니다.
===
y : number
라벨 기준선(baseline) 지점의 Y 좌표입니다.
===
pos : <a href="#RoomPosition">RoomPosition</a>
라벨 기준선(baseline)의 위치 객체입니다.
===
style (optional) : object
다음 속성을 가진 객체입니다:
						<ul>
							<li>
								<div class="api-arg-title">color</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">글꼴 색상입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 <code>#ffffff</code>(흰색)입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">font</div>
								<div class="api-arg-type">number, string</div>
								<div class="api-arg-desc">아래 형식 중 하나의 숫자 또는 문자열입니다:
									<ul>
										<li><code>0.7</code> - 게임 좌표 기준 상대 크기</li>
										<li><code>20px</code> - 픽셀 기준 절대 크기</li>
										<li><code>0.7 serif</code></li>
										<li><code>bold italic 1.5 Times New Roman</code></li>
									</ul>
								</div>
							</li>
							<li>
								<div class="api-arg-title">stroke</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">외곽선 색상입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 undefined(외곽선 없음)입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">strokeWidth</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">외곽선 두께이며 기본값은 0.15입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">backgroundColor</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">배경색입니다(웹에서 사용 가능한 어떤 형식도 가능). 기본값은 undefined(배경 없음)입니다. 배경을 켜면 텍스트 세로 정렬이 middle로 설정됩니다(기본은 baseline).</div>
							</li>
							<li>
								<div class="api-arg-title">backgroundPadding</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">배경 사각형의 여백(padding)이며 기본값은 0.3입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">align</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">텍스트 정렬입니다. <code>center</code>, <code>left</code>, <code>right</code> 중 하나이며 기본값은 <code>center</code>입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">opacity</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">불투명도 값이며 기본값은 1.0입니다.</div>
							</li>
						</ul>
					
{% endapi_method_params %}


### 반환 값

메서드 체이닝을 할 수 있도록 <code>RoomVisual</code> 객체 자기 자신을 반환합니다.

{% api_method clear '' 0 %}

```javascript
new RoomVisual('W1N1').clear();
```

방에서 모든 비주얼을 제거합니다.



### 반환 값

메서드 체이닝을 할 수 있도록 <code>RoomVisual</code> 객체 자기 자신을 반환합니다.

{% api_method getSize '' 0 %}

```javascript
if(creep.room.visual.getSize() >= 512000) {
    // cannot add more visuals in this tick
}
```

현재 틱에서 방에 추가된 모든 비주얼 데이터의 저장 크기를 가져옵니다. 이 값은 512,000(500 KB)을 초과하면 안 됩니다.



### 반환 값

비주얼의 크기를 바이트 단위로 반환합니다.


{% api_method export '' 0 %}

```javascript
Memory.RoomVisualData['E2S7'] = Game.rooms.E2S7.visual.export();
```

현재 틱에서 방에 추가된 모든 비주얼을 압축된 형태로 반환합니다.



### 반환 값

비주얼 데이터가 담긴 문자열입니다. 이 문자열로 할 수 있는 일은 많지 않으며, 보통 나중을 위해 저장하는 용도로 사용합니다.

{% api_method import 'val' 0 %}

```javascript
if(Memory.RoomVisualData['E2S7']) {
    Game.rooms.E2S7.visual.import(Memory.RoomVisualData['E2S7']);
}
```

이전에(<a href="#RoomVisual.export">RoomVisual.export</a>로) 내보낸 룸 비주얼을 현재 틱의 룸 비주얼 데이터에 추가합니다.

{% api_method_params %}
val : string
RoomVisual.export에서 반환된 문자열입니다.

{% endapi_method_params %}

### 반환 값

메서드 체이닝을 할 수 있도록 <code>RoomVisual</code> 객체 자기 자신을 반환합니다.

