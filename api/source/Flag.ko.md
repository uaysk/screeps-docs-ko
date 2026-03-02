# Flag

깃발입니다. 깃발은 룸 안의 특정 지점을 표시(mark)하는 데 사용할 수 있습니다. 깃발은 소유자에게만 보입니다. 깃발은 최대 10,000개까지 가질 수 있습니다.

{% page inherited/RoomObject.ko.md %}
 
{% api_property color number %}

깃발의 기본(Primary) 색상입니다. <code>COLOR_*</code> 상수 중 하나입니다.

{% api_property memory any %}

<code>Memory.flags[flag.name]</code>의 축약(shorthand)입니다. 깃발별 메모리 데이터 오브젝트에 빠르게 접근하는 데 사용할 수 있습니다.

{% api_property name string %}

깃발의 이름입니다. 새 깃발을 만들 때 이름을 정할 수 있으며, 이후 변경할 수 없습니다. 이 이름은 <a href="#Game.flags">Game.flags</a> 오브젝트를 통해 깃발에 접근하기 위한 해시 키입니다. 최대 길이는 100자입니다.

{% api_property secondaryColor number %}

깃발의 보조(Secondary) 색상입니다. <code>COLOR_*</code> 상수 중 하나입니다.

{% api_method remove '' A %}

깃발을 제거합니다.

### 반환 값

항상 `OK`를 반환합니다.

{% api_method setColor 'color, [secondaryColor]' A %}

```javascript
Game.flags.Flag1.setColor(COLOR_GREEN, COLOR_WHITE);
```

깃발의 새 색상을 설정합니다.

{% api_method_params %}
color : number
깃발의 기본 색상. <code>COLOR_*</code> 상수 중 하나입니다.
===
secondaryColor (optional) : number
깃발의 보조 색상. <code>COLOR_*</code> 상수 중 하나입니다.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_INVALID_ARGS | <code>color</code> 또는 <code>secondaryColor</code>가 유효한 색상 상수가 아닙니다.
{% endapi_return_codes %}

{% api_method setPosition 'x,y|pos' A %}

```javascript
Game.flags.Flag1.setPosition(10,20);
```

```javascript
Game.flags.Flag1.setPosition( new RoomPosition(10, 20, 'W3S5') );
```

깃발의 새 위치를 설정합니다.

{% api_method_params %}
x : number
룸 내 X 좌표.
===
y : number
룸 내 Y 좌표.
===
pos : object
<a href="#RoomPosition">RoomPosition</a> 오브젝트 또는 <a href="#RoomPosition">RoomPosition</a>을 포함하는 어떤 오브젝트.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_INVALID_TARGET | 제공한 대상이 유효하지 않습니다.
{% endapi_return_codes %}

