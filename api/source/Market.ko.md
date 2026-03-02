# Game.market

게임 내 마켓을 나타내는 전역 객체입니다. 이 객체를 사용해 터미널로 들어오고 나가는 자원 거래 내역과, 내 매수/매도 주문을 추적할 수 있습니다.

마켓 시스템에 대해 더 알아보려면 [이 문서](/market.html)를 참고하세요.

{% api_property Game.market.credits 'number' %}



현재 크레딧 잔액입니다.



{% api_property Game.market.incomingTransactions 'array' %}

```javascript
[{
    transactionId : "56dec546a180ce641dd65960",
    time : 10390687,
    sender : {username: "Sender"},
    recipient : {username: "Me"},
    resourceType : "U",
    amount : 100,
    from : "W0N0",
    to : "W10N10",
    description : "trade contract #1",
	order: {		// optional
		id : "55c34a6b5be41a0a6e80c68b",
		type : "sell",
		price : 2.95
	}
}]
```

터미널로 들어온 최근 100개의 거래를 담은 배열이며, 형식은 위와 같습니다.



{% api_property Game.market.outgoingTransactions 'array' %}

```javascript
[{
    transactionId : "56dec546a180ce641dd65960",
    time : 10390687,
    sender : {username: "Me"},
    recipient : {username: "Recipient"},
    resourceType : "U",
    amount : 100,
    from : "W0N0",
    to : "W10N10",
    description : "trade contract #1",
	order: {		// optional
		id : "55c34a6b5be41a0a6e80c68b",
		type : "sell",
		price : 2.95
	}
}]
```

터미널에서 나간 최근 100개의 거래를 담은 배열이며, 형식은 위와 같습니다.



{% api_property Game.market.orders 'object' %}

```javascript
{
	"55c34a6b5be41a0a6e80c68b": {
		id : "55c34a6b5be41a0a6e80c68b",
		created : 13131117,
		active: true,
		type : "sell"
		resourceType : "OH",
		roomName : "W1N1",
		amount : 15821,
		remainingAmount : 30000,
		totalAmount : 50000,
		price : 2.95
	},
	"55c34a6b52411a0a6e80693a": {
		id : "55c34a6b52411a0a6e80693a",
		created : 13134122,
		active: true,
		type : "buy"
		resourceType : "energy",
		roomName : "W1N1",
		amount : 94000,
		remainingAmount : 94000,
		totalAmount : 94000
		price : 0.45
	},
	"55c34a6b5be41a0a6e80c123": {
		id : "55c34a6b5be41a0a6e80c123",
		created : 13105123,
		active: false,
		type : "sell"
		resourceType : "token",
		amount : 0,
		remainingAmount : 10,
		totalAmount : 10,
		price : 50000
	}
}
```

마켓에 등록된 내 활성/비활성 매수/매도 주문을 담고 있는 객체입니다.
속성 설명은
<a href="#getAllOrders"><code>getAllOrders</code></a>
를 참고하세요.


{% api_method Game.market.calcTransactionCost 'amount, roomName1, roomName2' 0 %}

```javascript
const cost = Game.market.calcTransactionCost(1000, 'W0N0', 'W10N5');
// -> 284 energy units
```

<a href="#StructureTerminal.send"><code>StructureTerminal.send</code></a> 및 <a href="#Game.market.deal"><code>Game.market.deal</code></a> 메서드에서의 에너지 전송 비용을 추정합니다.
공식은 다음과 같습니다:

```javascript-content
Math.ceil( amount * ( 1 - Math.exp(-distanceBetweenRooms/30) ) )
```

{% api_method_params %}
amount : number
전송할 자원량입니다.
===
roomName1 : string
첫 번째 방의 이름입니다.
===
roomName2 : string
두 번째 방의 이름입니다.
{% endapi_method_params %}


### 반환 값

거래를 수행하는 데 필요한 에너지량입니다.

{% api_method Game.market.cancelOrder 'orderId' A %}

```javascript
for(const id in Game.market.orders) {
    Game.market.cancelOrder(id);
}
```

이전에 생성한 주문을 취소합니다. 5% 수수료는 반환되지 않습니다.

{% api_method_params %}
orderId : string
<code>Game.market.orders</code>에 제공되는 주문 ID입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_INVALID_ARGS | 주문 ID가 올바르지 않습니다.
{% endapi_return_codes %}



{% api_method Game.market.changeOrderPrice 'orderId, newPrice' A %}

```javascript
Game.market.changeOrderPrice('57bec1bf77f4d17c4c011960', 9.95);
```

기존 주문의 가격을 변경합니다. <code>newPrice</code>가 기존 가격보다 크면 <code>(newPrice-oldPrice)\*remainingAmount\*0.05</code> 크레딧이 수수료로 청구됩니다.

{% api_method_params %}
orderId : string
<code>Game.market.orders</code>에 제공되는 주문 ID입니다.
===
newPrice : number
새 주문 가격입니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 해당 방의 터미널 소유자가 아니거나 터미널이 없습니다.
ERR_NOT_ENOUGH_RESOURCES | 수수료를 낼 크레딧이 부족합니다.
ERR_INVALID_ARGS | 제공된 인자가 올바르지 않습니다.
{% endapi_return_codes %}


{% api_method Game.market.createOrder 'params' A %}

```javascript
Game.market.createOrder({
    type: ORDER_SELL,
    resourceType: RESOURCE_GHODIUM,
    price: 9.95,
    totalAmount: 10000,
    roomName: "W1N1"   
});
```

터미널에 마켓 주문을 생성합니다. 주문을 등록할 때 <code>price\*amount\*0.05</code> 크레딧이 수수료로 청구됩니다. 플레이어당 최대 주문 수는 300개입니다. 주문은 언제든 어떤 수량으로든 만들 수 있으며, 자원/크레딧 가용성에 따라 자동으로 활성/비활성 상태가 전환됩니다.

{% api_method_params %}
params : object
다음 파라미터를 가진 객체입니다:
<ul>
    <li>
        <div class="api-arg-title">type</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">주문 타입이며 <code>ORDER_SELL</code> 또는 <code>ORDER\_BUY</code>입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">resourceType</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>RESOURCE_*</code> 상수 중 하나이거나, 계정 귀속 리소스 중 하나입니다(<code>INTERSHARD_RESOURCES</code> 상수 참고). 터미널에 해당 리소스가 없으면 주문은 일시적으로 비활성 상태가 됩니다.</div>
    </li>
    <li>
        <div class="api-arg-title">price</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">자원 1개당 가격(크레딧)입니다. 소수 값을 사용할 수 있습니다.</div>
    </li>
    <li>
        <div class="api-arg-title">totalAmount</div>
        <div class="api-arg-type">number</div>
        <div class="api-arg-desc">총 거래할 자원량입니다.</div>
    </li>
    <li>
        <div class="api-arg-title">roomName (optional)</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">주문을 생성할 방입니다. 이 방에는 내 터미널 구조물이 있어야 하며, 그렇지 않으면 생성된 주문은 일시적으로 비활성 상태가 됩니다. <code>resourceType</code>이 계정 귀속 리소스(<code>INTERSHARD_RESOURCES</code> 참고)인 경우에는 이 인자를 사용하지 않습니다.</div>
    </li>        
</ul>
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 해당 방의 터미널 소유자가 아니거나 터미널이 없습니다.
ERR_NOT_ENOUGH_RESOURCES | 수수료를 낼 크레딧이 부족합니다.
ERR_FULL | 50개를 초과하여 주문을 생성할 수 없습니다.
ERR_INVALID_ARGS | 제공된 인자가 올바르지 않습니다.
{% endapi_return_codes %}



{% api_method Game.market.deal 'orderId, amount, [yourRoomName]' A %}

```javascript
Game.market.deal('57cd2b12cda69a004ae223a3', 1000, "W1N1");
```

```javascript
const amountToBuy = 2000, maxTransferEnergyCost = 500;
const orders = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_GHODIUM});

for(let i=0; i<orders.length; i++) {
    const transferEnergyCost = Game.market.calcTransactionCost(
        amountToBuy, 'W1N1', orders[i].roomName);

    if(transferEnergyCost < maxTransferEnergyCost) {
        Game.market.deal(orders[i].id, amountToBuy, "W1N1");
        break;
    }
}
```

지정한 매수/매도 주문을 사용해, <code>yourRoomName</code>에 있는 내 터미널에서 다른 플레이어의 터미널로 거래(deal)를 실행합니다. 주문의 자원 타입과 무관하게, 내 터미널은 전송 비용만큼의 에너지를 소비합니다. 이 값은 <a href="#calcTransactionCost"><code>Game.market.calcTransactionCost</code></a>로 추정할 수 있습니다. 여러 플레이어가 같은 거래를 동시에 실행하려 하면, 거리(방 간 거리)가 가장 짧은 쪽이 우선합니다. 한 틱에 10건을 초과하여 deal을 실행할 수 없습니다.

{% api_method_params %}
orderId : string
<code>Game.market.getAllOrders</code>에서 제공되는 주문 ID입니다.
===
amount : number
전송할 자원량입니다.
===
yourRoomName (optional) : string
활성화된 터미널이 존재하고 에너지가 충분한 내 방의 이름입니다. 주문의 자원 타입이 계정 귀속 리소스(<code>INTERSHARD_RESOURCES</code> 참고)인 경우에는 이 인자를 사용하지 않습니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 대상 방에 내 터미널이 없습니다.
ERR_NOT_ENOUGH_RESOURCES | 크레딧 또는 자원 수량이 부족합니다.
ERR_FULL | 한 틱에 10건을 초과하여 deal을 실행할 수 없습니다.
ERR_INVALID_ARGS | 제공된 인자가 올바르지 않습니다.
ERR_TIRED | 대상 터미널이 아직 쿨다운 중입니다.
{% endapi_return_codes %}



{% api_method Game.market.extendOrder 'orderId, addAmount' A %}

```javascript
Game.market.extendOrder('57bec1bf77f4d17c4c011960', 10000);
```

기존 주문의 용량을 늘립니다. 이는 <code>remainingAmount</code> 및 <code>totalAmount</code> 속성에 영향을 줍니다. <code>price\*addAmount\*0.05</code> 크레딧이 수수료로 청구됩니다.

{% api_method_params %}
orderId : string
<code>Game.market.orders</code>에 제공되는 주문 ID입니다.
===
addAmount : number
추가할 용량입니다. 음수일 수 없습니다.
{% endapi_method_params %}


### 반환 값

다음 코드 중 하나를 반환합니다:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_ENOUGH_RESOURCES | 수수료를 낼 크레딧이 부족합니다.
ERR_INVALID_ARGS | 제공된 인자가 올바르지 않습니다.
{% endapi_return_codes %}



{% api_method Game.market.getAllOrders '[filter]' 3 %}


```javascript
Game.market.getAllOrders(); // slow
```

```javascript
Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_GHODIUM}); // fast
```

```javascript
const targetRoom = "W1N1";
Game.market.getAllOrders(order => order.resourceType == RESOURCE_GHODIUM &&
	order.type == ORDER_SELL &&
    Game.market.calcTransactionCost(1000, targetRoom, order.roomName) < 500); // slow
```

```javascript
// Output:

[{
	id : "55c34a6b5be41a0a6e80c68b",
	created : 13131117,
	type : "sell",
	resourceType : "OH",
	roomName : "W1N1",
	amount : 15821,
	remainingAmount : 30000,
	price : 2.95
}, {
    createdTimestamp: 1543253147522,
    type: "sell",
    amount: 1000,
    remainingAmount: 1000,
    resourceType: "O",
    price: 1,
    roomName: "E2S7",
    created: 12010056,
    id: "5bfc2c9bd719fb605037c06d"
}, {
	id : "55c34a6b5be41a0a6e80c123",
	createdTimestamp: 1543253155580,
	type : "sell",
	resourceType : "token",
	amount : 3,
	remainingAmount : 10,
	price : 50000
}]
```

현재 마켓에 활성화되어 있는 다른 플레이어의 주문을 가져옵니다. 이 메서드는 `resourceType`에 대한 내부 인덱싱을 지원합니다.

{% api_method_params %}
filter (optional) : object, function
<a href="https://lodash.com/docs#filter"><code>lodash.filter</code></a> 메서드를 사용해 결과 목록을 필터링할 객체 또는 함수입니다.
{% endapi_method_params %}


### 반환 값

아래 형태의 주문 배열을 반환합니다:

property | description
---|---
`id` | 고유한 주문 ID입니다.
`created` | 게임 틱 기준 주문 생성 시각입니다. 인터샤드 마켓 주문에는 이 속성이 없습니다.
`createdTimestamp` | 주문 생성 시각으로, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime#Syntax">UNIX epoch 이후 밀리초</a>로 표현됩니다. 오래된 주문에는 이 속성이 없을 수 있습니다.
`type` | <code>ORDER_SELL</code> 또는 <code>ORDER_BUY</code>입니다.
`resourceType` | <code>RESOURCE_*</code> 상수 중 하나이거나, 계정 귀속 리소스 중 하나입니다(<code>INTERSHARD_RESOURCES</code> 상수 참고).
`roomName` | 이 주문이 등록된 방입니다.
`amount` | 현재 거래 가능한 수량입니다.
`remainingAmount` | 이 주문으로 앞으로 더 거래할 수 있는 자원량입니다.
`price` | 현재 단가입니다.


{% api_method Game.market.getHistory '[resourceType]' 1 %}

최근 14일 동안, 지정한 리소스의 일별 가격 히스토리를 가져옵니다.

{% api_method_params %}
resourceType (optional) : string
`RESOURCE_*` 상수 중 하나입니다. undefined이면 모든 리소스에 대한 히스토리를 반환합니다.
{% endapi_method_params %}


### 반환 값

아래 형식의 객체 배열을 반환합니다:
```json-content
[{
    "resourceType": "L",
    "date": "2019-06-24",
    "transactions": 4,
    "volume": 400,
    "avgPrice": 3.63,
    "stddevPrice": 0.27
}]    
``` 


{% api_method Game.market.getOrderById 'id' 1 %}

```javascript
const order = Game.market.getOrderById('55c34a6b5be41a0a6e80c123');
```

특정 마켓 주문의 정보를 가져옵니다.

{% api_method_params %}
id : string
주문 ID입니다.
{% endapi_method_params %}


### 반환 값

주문 정보가 담긴 객체입니다. 속성 설명은
<a href="#getAllOrders"><code>getAllOrders</code></a>
를 참고하세요.

