# 깃발

깃발입니다. 깃발은 방의 특정 지점을 표시하는데 사용할 수 있습니다. 깃발은 소유자에게만 보입니다. 10,000개 이상의 깃발을 가질 수 없습니다.
{% page inherited/RoomObject. md %}

{% api_property color number %}

깃발의 기본 색상입니다. <code>COLOR_*</code> 상수들 중 하나를 사용할 수 있습니다.


{% api_property memory any %}


<code>Memory. flags[flag. name]</code>에 대한 편의적인 줄임말입니다. 빠르게 깃발의 특정 메모리 데이터 객체를 접근하기 위해 사용할 수 있습니다.


{% api_property name string %}

깃발의 이름입니다. 새로운 깃발을 만들 때 이름을 선택할 수 있으며, 나중에는 변경할 수 없습니다. 이 이름은 <a href="#Game. flags">Game. flags</a> 객체를 통해 깃발을 접근하기 위한 해시 키입니다.

최대 이름의 길이는 100자입니다.

{% api_property secondaryColor number %}

깃발의 2차 색상. Code: COLOR_* 상수 중 하나.

{% api_method remove '' A %}
깃발을 제거합니다.
### Return value
항상 OK를 반환합니다.
{% api_method setColor 'color, [secondaryColor]' A %}
```javascript
Game.flags.Flag1.setColor(COLOR_GREEN, COLOR_WHITE);
```
깃발의 새로운 색상을 설정합니다.
{% api_method_params %}
color : number
깃발의 주요 색상. Code: COLOR_* 상수 중 하나.
===
secondaryColor (선택 사항) : number
깃발의 2차 색상. Code: COLOR_* 상수 중 하나.

```
Game.flags.Flag1.setPosition(10,20);
```

```javascript
Game.flags.Flag1.setPosition( new RoomPosition(10, 20, 'W3S5') );
```

Set position using X and Y coordinates or a string representing a tile in the room.

== 객체로 지정된 방이나, RoomPosition 객체를 포함한 임의의 객체가 될 수 있다.
===
pos : object
<a href="#RoomPosition">RoomPosition</a> 객체로 지정되거나 <a href="#RoomPosition">RoomPosition</a>을 포함하는 임의의 객체가 될 수 있습니다.
{% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다. 
ERR_INVALID_TARGET | 제공된 대상이 유효하지 않습니다.