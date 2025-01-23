# PathFinder. CostMatrix
CostMatrix는 사용자 정의 네비게이션 비용 데이터를 저장합니다. 기본적으로 `PathFinder`는 오직 지형 데이터(평원, 늪지, 장벽)만을 고려할 것입니다. — 건물이나 크립과 같은 장애물을 피해가기 위해 루트를 만들어야 한다면 반드시 `CostMatrix`에 넣어야 합니다. 일반적으로 룸 콜백(roomCallback) 내에서 룸의 CostMatrix를 사용하여 만든 `CostMatrix`. 비용 매트릭스에서 0이 아닌 값을 찾았다면, 해당 값이 기본 지형 비용 대신 사용될 것입니다. 코스트매트릭스와 지형 비용 플래그에 0 이상의 큰 값을 사용하는 것은 피해야 합니다. 예를 들어, `PathFinder.

{% api_method constructor %}

```javascript
let paths = new PathFinder. PathFinder;
``` 

Creates a new PathFinder object that can be used to find the shortest path between two positions on a cost matrix.  

{% api_method set 'x, y' x %}

```javascript
paths. getPath(x) { // Return an array of position pairs that represent the shortest path from x1 to x2 }
```

Retrieve the shortest path from a given position x1 to any other position x in the room. 

{% api_method_params %}
x1 : number
Position x1 on the cost matrix.
===
x2 : number
Position x2 on the cost matrix.

==== CostMatrix ====

cost : number
이 CostMatrix의 위치에 대한 비용. 반드시 정수여야 합니다. 0의 비용은 해당 타일의 지형 비용을 사용합니다. 255보다 큰 비용은 걸을 수 없는 것으로 취급됩니다.
{% endapi_method_params %}


{% api_method get 'x, y' 0 %}



방의 X, Y 위치에서 CostMatrix의 비용을 가져옵니다.

{% api_method_params %}
x : number
방의 X 위치.
y : number
방의 Y 위치.
{% endapi_method_params %}



{% api_method clone '' 1 %}



동일한 데이터를 갖는 새로운 CostMatrix로 이 CostMatrix를 복사합니다.


### 반환 값

새로운 CostMatrix 인스턴스.
{% api_method serialize '' 1 %}

```javascript
let costs = new PathFinder.CostMatrix;
Memory.savedMatrix= costs.clone();

serialize();
```

이것은 CostMatrix의 간결한 표현을 반환하며 <code>JSON.stringify</code>를 통해 저장할 수 있습니다.

### 반환값

배열로 숫자를 포함합니다. 나중에 사용하기 위해 숫자 이외의 작업은 없습니다.
{% api_method PathFinder. CostMatrix. deserialize 'val' 1 %}

```javascript
let costs = PathFinder.CostMatrix.deserialize(Memory.savedMatrix)
```

정적 메서드는 <code>serialize</code>가 반환한 값을 사용하여 새 CostMatrix를 복원합니다.
{% api_method_params %}
val : object
<code>serialize</code>의 반환값
{% endapi_method_params %}

### 반환값

새로운 <code>CostMatrix</code> 인스턴스가 반환됩니다.