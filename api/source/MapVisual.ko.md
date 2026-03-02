# Game.map.visual

맵 비주얼(Map visuals)은 게임 맵 위에 다양한 시각적 디버그 정보를 표시하는 방법을 제공합니다. `Game.map.visual` 객체를 사용해 본인에게만 보이는 간단한 도형을 그릴 수 있습니다.

맵 비주얼은 데이터베이스에 저장되지 않으며, 오직 브라우저에 표시하는 것이 목적입니다. 모든 그림은 1틱 동안만 유지되며, 다음 틱에서 업데이트하지 않으면 사라집니다. 모든 `Game.map.visual` 호출은 추가 CPU 비용이 없습니다(비용은 자연 비용이며, 주로 간단한 `JSON.serialize` 호출과 관련됩니다). 다만 사용량 제한이 있습니다: 직렬화된 데이터는 1000 KB를 초과하여 게시할 수 없습니다.

모든 좌표는 전역 게임 좌표([`RoomPosition`](#RoomPosition))로 측정합니다.


{% api_method line 'pos1, pos2, [style]' 0 %}

```javascript
Game.map.visual.line(creep.pos, target.pos,
    {color: '#ff0000', lineStyle: 'dashed'});
```

선을 그립니다.

{% api_method_params %}
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
        <div class="api-arg-desc">선 색상입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 #ffffff입니다.</div>
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

메서드 체이닝을 할 수 있도록 <code>MapVisual</code> 객체 자기 자신을 반환합니다.


{% api_method circle 'pos, [style]' 0 %}

```javascript
Game.map.visual.circle(new RoomPosition(25,25,'E2S7'));
```

```javascript
Game.map.visual.circle(nuker.pos, {fill: 'transparent', radius: NUKE_RANGE*50, stroke: '#ff0000'});
```

원을 그립니다.

{% api_method_params %}
pos : <a href="#RoomPosition">RoomPosition</a>
중심의 위치 객체입니다.
===
style (optional) : object
다음 속성을 가진 객체입니다:
<ul>
    <li>
        <div class="api-arg-title">radius</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">원의 반지름이며 기본값은 10입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">fill</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">채우기 색상입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 #ffffff입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">불투명도 값이며 기본값은 0.5입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">외곽선 색상입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 undefined(외곽선 없음)입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">strokeWidth</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">외곽선 두께이며 기본값은 0.5입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code>(실선), <code>dashed</code>, <code>dotted</code> 중 하나입니다. 기본값은 undefined입니다.</div>
    </li>
</ul>
				
{% endapi_method_params %}


### 반환 값

메서드 체이닝을 할 수 있도록 <code>MapVisual</code> 객체 자기 자신을 반환합니다.


{% api_method rect 'topLeftPos, width, height, [style]' 0 %}

```javascript
// the max efficiency area of the tower
Game.map.visual.rect(new RoomPosition(tower.pos.x - 5, tower.pos.y - 5, tower.pos.roomName), 
    11, 11,
    {fill: 'transparent', stroke: '#ff0000'});
```

사각형을 그립니다.

{% api_method_params %}
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
        <div class="api-arg-desc">채우기 색상입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 #ffffff입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">opacity</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">불투명도 값이며 기본값은 0.5입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">stroke</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">외곽선 색상입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 undefined(외곽선 없음)입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">strokeWidth</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">외곽선 두께이며 기본값은 0.5입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">lineStyle</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>undefined</code>(실선), <code>dashed</code>, <code>dotted</code> 중 하나입니다. 기본값은 undefined입니다.</div>
    </li>
</ul>
				
{% endapi_method_params %}


### 반환 값

메서드 체이닝을 할 수 있도록 <code>MapVisual</code> 객체 자기 자신을 반환합니다.


{% api_method poly 'points, [style]' 0 %}

```javascript
const points = [];
points.push(creep1.pos);
points.push(Game.rooms.E2S7.storage.pos);
points.push(new RoomPosition(20,21,'W1N1'));
Game.map.visual.poly(points, {fill: 'aqua'}); 
```

```javascript
// visualize the path
const path = PathFinder.search(creep.pos, creep.room.storage.pos).path;
Game.map.visual.poly(path, {stroke: '#ffffff', strokeWidth: .8, opacity: .2, lineStyle: 'dashed'});
```

폴리라인을 그립니다.

{% api_method_params %}
points : array
점들의 배열입니다. 각 요소는 <a href="#RoomPosition"><code>RoomPosition</code></a> 객체여야 합니다.
===
style (optional) : object
다음 속성을 가진 객체입니다:
						<ul>
							<li>
								<div class="api-arg-title">fill</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">채우기 색상입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 <code>undefined</code>(채우기 없음)입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">opacity</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">불투명도 값이며 기본값은 0.5입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">stroke</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">외곽선 색상입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 #ffffff입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">strokeWidth</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">외곽선 두께이며 기본값은 0.5입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">lineStyle</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc"><code>undefined</code>(실선), <code>dashed</code>, <code>dotted</code> 중 하나입니다. 기본값은 undefined입니다.</div>
							</li>
						</ul>
					
{% endapi_method_params %}


### 반환 값

메서드 체이닝을 할 수 있도록 <code>MapVisual</code> 객체 자기 자신을 반환합니다.


{% api_method text 'text, pos, [style]' 0 %}

```javascript
Game.map.visual.text("Target💥", new RoomPosition(11,14,'E2S7'), {color: '#FF0000', fontSize: 10}); 
```

텍스트 라벨을 그립니다. <a href="http://unicode.org/emoji/charts/emoji-style.txt" target="_blank">이모지</a>를 포함해, 유효한 모든 유니코드 문자를 사용할 수 있습니다.

{% api_method_params %}
text : string
텍스트 메시지입니다.
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
								<div class="api-arg-desc">글꼴 색상입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 #ffffff입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">fontFamily</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">글꼴 패밀리이며 기본값은 <code>sans-serif</code>입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">fontSize</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">게임 좌표 기준 글꼴 크기이며 기본값은 10입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">fontStyle</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">글꼴 스타일입니다(<code>normal</code>, <code>italic</code>, <code>oblique</code>).</div>
							</li>
							<li>
								<div class="api-arg-title">fontVariant</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">글꼴 변형입니다(<code>normal</code> 또는 <code>small-caps</code>).</div>
							</li>
							<li>
								<div class="api-arg-title">stroke</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">외곽선 색상입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 undefined(외곽선 없음)입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">strokeWidth</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">외곽선 두께이며 기본값은 0.15입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">backgroundColor</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">배경색입니다. <code>#ffffff</code>(16진수 트리플릿) 형식입니다. 기본값은 undefined(배경 없음)입니다. 배경을 켜면 텍스트 세로 정렬이 middle로 설정됩니다(기본은 baseline).</div>
							</li>
							<li>
								<div class="api-arg-title">backgroundPadding</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">배경 사각형의 여백(padding)이며 기본값은 2입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">align</div>
								<div class="api-arg-type">string</div>
								<div class="api-arg-desc">텍스트 정렬입니다. <code>center</code>, <code>left</code>, <code>right</code> 중 하나이며 기본값은 <code>center</code>입니다.</div>
							</li>
							<li>
								<div class="api-arg-title">opacity</div>
								<div class="api-arg-type">number</div>
								<div class="api-arg-desc">불투명도 값이며 기본값은 0.5입니다.</div>
							</li>
						</ul>
					
{% endapi_method_params %}


### 반환 값

메서드 체이닝을 할 수 있도록 <code>MapVisual</code> 객체 자기 자신을 반환합니다.


{% api_method clear '' 0 %}

```javascript
Game.map.visual.clear();
```

맵에서 모든 비주얼을 제거합니다.



### 반환 값

메서드 체이닝을 할 수 있도록 <code>MapVisual</code> 객체 자기 자신을 반환합니다.


{% api_method getSize '' 0 %}

```javascript
if(Game.map.visual.getSize() >= 1024000) {
    // cannot add more visuals in this tick
}
```

현재 틱에서 맵에 추가된 모든 비주얼 데이터의 저장 크기를 가져옵니다. 이 값은 1024,000(1000 KB)을 초과하면 안 됩니다.



### 반환 값

비주얼의 크기를 바이트 단위로 반환합니다.

{% api_method export '' 0 %}

```javascript
Memory.MapVisualData = Game.map.visual.export();
```

현재 틱에서 맵에 추가된 모든 비주얼을 압축된 형태로 반환합니다.



### 반환 값

비주얼 데이터가 담긴 문자열입니다. 이 문자열로 할 수 있는 일은 많지 않으며, 보통 나중을 위해 저장하는 용도로 사용합니다.

{% api_method import 'val' 0 %}

```javascript
Game.map.visual.import(Memory.MapVisualData);
```

이전에(<a href="#Game.map-visual.export">Game.map.visual.export</a>로) 내보낸 맵 비주얼을 현재 틱의 맵 비주얼 데이터에 추가합니다.

{% api_method_params %}
val : string
Game.map.visual.export에서 반환된 문자열입니다.

{% endapi_method_params %}

### 반환 값

메서드 체이닝을 할 수 있도록 <code>MapVisual</code> 객체 자기 자신을 반환합니다.

