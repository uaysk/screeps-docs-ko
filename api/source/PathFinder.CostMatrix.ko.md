# PathFinder.CostMatrix

커스텀 네비게이션 비용 데이터를 담는 컨테이너입니다. 기본적으로 `PathFinder`는
지형 정보(plain, swamp, wall)만 고려합니다. 건물이나 크립 같은 장애물을 피해서 경로를 잡고 싶다면
그 정보를 `CostMatrix`에 넣어야 합니다. 일반적으로 `roomCallback` 안에서 `CostMatrix`를 생성합니다.
룸의 CostMatrix에서 0이 아닌 값이 발견되면, 기본 지형 비용 대신 그 값이 사용됩니다.
CostMatrix와 지형 비용 플래그에는 너무 큰 값을 사용하는 것을 피하세요. 예를 들어
`{ plainCost: 1, swampCost: 5 }`로 `PathFinder.search`를 실행하는 것이,
경로가 동일하더라도 `{plainCost: 2, swampCost: 10 }`으로 실행하는 것보다 더 빠릅니다.

{% api_method constructor %}

```javascript
let costs = new PathFinder.CostMatrix;
``` 

모든 좌표가 0인 새 CostMatrix를 생성합니다.

{% api_method set 'x, y, cost' 0 %}

```javascript
let costs = new PathFinder.CostMatrix;
let pos = Game.spawns['Spawn1'].pos;
costs.set(pos.x, pos.y, 255); // Can't walk over a building
```

이 CostMatrix에서 특정 좌표의 비용을 설정합니다.

{% api_method_params %}
x : number
룸 내 X 좌표.
===
y : number
룸 내 Y 좌표.
===
cost : number
이 좌표의 비용. 정수여야 합니다. 0이면 해당 타일의 지형 비용을 사용합니다. 255 이상이면 통행 불가(unwalkable)로 취급됩니다.
{% endapi_method_params %}

{% api_method get 'x, y' 0 %}

이 CostMatrix에서 특정 좌표의 비용을 가져옵니다.

{% api_method_params %}
x : number
룸 내 X 좌표.
===
y : number
룸 내 Y 좌표.
{% endapi_method_params %}

{% api_method clone '' 1 %}

이 CostMatrix를 동일한 데이터로 새 CostMatrix에 복사합니다.

### 반환 값

새 CostMatrix 인스턴스.

{% api_method serialize '' 1 %}

```javascript
let costs = new PathFinder.CostMatrix;
Memory.savedMatrix = costs.serialize();
```

<code>JSON.stringify</code>로 저장할 수 있는, 이 CostMatrix의 컴팩트 표현을 반환합니다.

### 반환 값

숫자 배열입니다. 보통은 나중에 사용하기 위해 저장하는 것 외에는 할 수 있는 일이 많지 않습니다.

{% api_method PathFinder.CostMatrix.deserialize 'val' 1 %}

```javascript
let costs = PathFinder.CostMatrix.deserialize(Memory.savedMatrix)
```

<code>serialize</code>의 반환값을 사용해 새 CostMatrix를 역직렬화(deserialize)하는 정적 메서드입니다.

{% api_method_params %}
val : object
<code>serialize</code>의 반환값
{% endapi_method_params %}

### 반환 값

새 <code>CostMatrix</code> 인스턴스를 반환합니다.

