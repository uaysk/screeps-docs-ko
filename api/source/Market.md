시장 객체를 나타내는 글로벌 객체입니다. 이 객체를 사용하여 터미널에서의 자원 거래와 구매/판매 주문을 추적할 수 있습니다.

시장 시스템에 대해 [이 기사](/market.html)에서 더 알아보세요.

{% api_property Game.market.credits 'number' %}

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
		price : 2. 95
	}
}
%}

```javascript
[{
    transactionId: '56dec546a180ce641dd65960',
    time: 10390687,
    sender: {username: 'Sender'},
    recipient: {username: 'Me'},
    resourceType: 'U',
    amount: 100,
    from: 'W0N0',
    to: 'W10N10',
    description: 'trade contract #1',
    order: {// optional
      id: '55c34a6b5be41a0a6e80c68b',
      type: 'sell',
      price: 2.95
    }
}]
```

"id" : "56dec546a180ce641dd65960",
"time" : 10390687,
"sender" : {
    "username" : "Me"
},
"recipient" : {
    "username" : "Recipient"
},
"resourceType" : "U",
"amount" : 100,
"from" : "W0N0",
"to" : "W10N10",
"description" : "trade contract #1",
"order" : { // optional
    "id" : "55c34a6b5be41a0a6e80c68b",
    "type" : "sell",
    "price" : 2.95
}
}
...
```

The response object can contain an optional "order" property, which is another object that contains additional information about the outgoing transaction, such as its ID, type (buy or sell), and price if applicable.

55c34a6b5be41a0a6e80c68b: {
    id: "55c34a6b5be41a0a6e80c68b",
    created: 13131117,
    active: true,
    type: "sell",
    resourceType: "OH",
    roomName: "W1N1",
    amount: 15821,
    remainingAmount: 30000,
    totalAmount: 50000,
    price: 2.95,
    55c34a6b52411a0a6e80693a: {
        id: "55c34a6b52411a0a6e80693a",
        created: 13134122,
        active: true,
        type: "buy",
        resourceType: "energy",
        roomName: "W1N1",
        amount: 94000,
        remainingAmount: 94000,
        totalAmount: 94000,
        price: 0,
}
```

send</code></a>
with <a href="#Resource. energy"><code>Resource.energy</code></a>
amount of 1000 units from <a href="#Room. roomName"><code>Room.roomName</code></a> 'W0N0' to <a href="#Room. roomName"><code>Room.roomName</code></a> 'W10N5'.<br>

The result will be displayed in the variable named <a href="#StructureTerminal. cost"><code>StructureTerminal.cost</code></a>.

<div>
<code><a href="#Game.market.sendOrder"><code>Game.market.sendOrder</code></a></code> and <a href="#Game.market.deal"><code>Game.market.deal</code></a> methods.
<code>Math.ceil(amount*((1-Math.exp(-distanceBetweenRooms/30)))</code></code>

{% api_method_params %}
amount:number
Resources to be sent amount. ===
roomName1:string
The name of the first room. ===
roomName2:string
The name of the second room. {% endapi_method_params %}

### Return value

The amount of energy required to perform the transaction.
</div>
<div>
{% api_method Game.market.cancelOrder 'orderId' %}

```javascript
for(const id in Game.market.orders) {
    Game.market.cancelOrder(id);
}
```
Cancel a previously created order.

5% 수수료는 환불되지 않습니다.

{% api_method_params %}
orderId : 문자열
새 Game. market. orders에서 제공하는 주문 ID입니다. {% endapi_method_params %}

### 반환값

다음과 같은 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다. ERR_INVALID_ARGS | 주문 ID가 유효하지 않습니다. {% endapi_return_codes %}


{% api_method Game.market.changeOrderPrice 'orderId, newPrice' A %}

```javascript
Game.market.changeOrderPrice('57bec1bf77f4d17c4c011960', 9.95);
```

기존 주문의 가격을 변경합니다. <code>newPrice</code>가 이전 가격보다 높은 경우, 나머지 금액에 대해 <code>(newPrice-oldPrice)*0.05</code>크레딧이 부과됩니다.

'createOrder': {
  params: {
   orderId : string, // The order ID as provided in <code>Game.market.orders</code>.
   newPrice : number, // The new order price.
  },
 },

 returnValue: one of the following codes:
{% api_return_codes %}
OK | The operation has been scheduled successfully.
ERR_NOT_OWNER | You are not the owner of the room's terminal or there is no terminal.
ERR_NOT_ENOUGH_RESOURCES | You don't have enough credits to pay a fee.
ERR_INVALID_ARGS | The arguments provided are invalid.
{% endapi_return_codes %},
}
```

터미널에서 시장 주문을 만듭니다. 주문이 제출되면 <code>가격 * 금액 * 0.05</code>크레딧이 청구됩니다. 최대 주문량은 플레이어당 300개입니다. 자원/크레딧 여부에 따라 주문이 자동으로 활성화되고 비활성화됩니다.

{% api_method_params %}
params : object
An object with the following params:
<ul>
    <li>
        <div class="api-arg-title">type</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc">order type, either <code>ORDER_SELL</code> or <code>ORDER\_BUY</code>. </div>
    </li>
    <li>
        <div class="api-arg-title">resourceType</div>
        <div class="api-arg-type">string</div>
        <div class="api-arg-desc"><code>RESOURCE_*</code> 상수 중 하나 또는 account-bound resources (See <code>INTERSHARD_RESOURCES</code> constant). 만약 Terminal에 지정된 resource가 없으면, 주문이 일시적으로 비활성화됩니다.

</div>
<li>
    <div class="api-arg-title">minimumPrice</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">The minimum price you are willing to pay for the resources.  This is an optional parameter.</div>
</li>
<li>
    <div class="api-arg-title">maximumPrice</div>
    <div class="api-arg-type">number</div>
    <div class="api-arg-desc">The maximum price you are willing to pay for the resources.  This is an optional parameter.</div>
</li>

이 방에는 Terminal 구조가 필요하며, 만들어진 주문은 일시적으로 활성화되지 않습니다. <code>resourceType</code>이 account-bound 리소스(<code>INTERSHARD_RESOURCES</code> 상수 참조) 중 하나인 경우에는 이 인수가 사용되지 않습니다.

'orderId', amountToBuy, orders[i]. roomName);
    }
}
```

{% endapi_method %}

구매/판매 주문을 지정하여 <code>yourRoomName</code>의 터미널에서 다른 플레이어의 터미널로 거래를 실행합니다. 귀하의 계약금은 주문 자원 유형과 상관없이 전송 비용만큼 에너지 단위가 청구됩니다. <a href="#calcTransactionCost"><code>Game.market. calcTransactionCost</code></a> 방법을 사용하여 예측할 수 있습니다. 여러 플레이어가 동일한 거래를 실행하려고 시도하면 최단 거리에 있는 주문을 선택합니다. 한 틱 중에 10 개 이상의 거래를 실행할 수 없습니다.

{% api_method_params %}
orderId : 문자열
게임.market.getAllOrders에서 제공된 주문 ID입니다.

양 : 숫자
전송할 자원의 금액.

(optional) yourRoomName : 문자열
활성 터미널이 충분한 에너지를 가진 귀하의 방 이름입니다. 이 인수는 주문 자원 유형이 계정과 바인딩된 자원 중 하나일 경우에는 사용되지 않습니다(<code>INTERSHARD_RESOURCES</code> 상수 참조).
{% endapi_method_params %}

### 반환 값
다음 코드 중 하나:
{% api_return_codes %}
OK | 성공적으로 일정을 잡았습니다.
ERR_NOT_OWNER | 대상 방에 터미널이 없습니다.
ERR_NOT_ENOUGH_RESOURCES | 크레딧이나 자원 단위가 부족합니다.
ERR_FULL | 한 틱 동안 거래를 10개 초과할 수 없습니다.

ERR_INVALID_ARGS | 제공된 인수가 올바르지 않습니다.
ERR_TIRED | 대상 터미널이 여전히 冷却중입니다.
{% endapi_return_codes %}

{% api_method Game.market.extendOrder 'orderId, addAmount' A %}
```javascript
Game.market.extendOrder('57bec1bf77f4d17c4c011960', 10000);
```
기존 주문에 더 많은 용량을 추가합니다. <code>remainingAmount</code> 및 <code>totalAmount</code> 속성에 영향을 미칩니다. <code>price * addAmount * 0.05</code> 크레딧이 부과됩니다.
{% api_method_params %}
orderId : string
<code>Game.market.orders</code>에서 제공된 주문 ID입니다.
===
addAmount : number
추가할 용량(양). 음수일 수 없습니다.

. canComplete(targetRoom));
```

```javascript
Game. market. getAllOrders(['id': 1234]); // fast if IDs are unique
```


### Error codes:
{% api_method_params %}
ERR_NOT_ENOUGH_RESOURCES | You don't have enough credits to pay a fee.
ERR_INVALID_ARGS | The arguments provided are invalid.
{% endapi_method_params %}
```javascript
Game. market. getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_GHODIUM}); // fast

const errors = [ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS];

// Call the method with multiple arguments
Game. market. getAllOrders([{type: ORDER_SELL, resourceType: RESOURCE_GHODIUM}, {type: ORDER_BUY, resourceType: RESOURCE_PLUTONIUM}]); // fast
```


### Response codes:
{% api_return_codes %}
OK | The operation has been scheduled successfully.
401 | You don't have enough credits to pay a fee.
403 | The arguments provided are invalid.
{% endapi_return_codes %}
```javascript
Game. market. getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_GHODIUM}); // fast

// Call the method with no arguments
Game. market. getAllOrders(); // slow
```

calcTransactionCost(1000, targetRoom, order. roomName) < 500); // slow
```
becomes:
```javascript
// Output:

[{
    id: "55c34a6b5be41a0a6e80c68b",
    created: 13131117,
    type: "sell",
    resourceType: "OH",
    roomName: "W1N1",
    amount: 15821,
    remainingAmount: 30000,
    price: 2.
]
```
```javascript
// Output:

[{
    id: "55c34a6b5be41a0a6e80c68b",
    created: 13131117,
    type: "sell",
    resourceType: "OH",
    roomName: "W1N1",
    amount: 15821,
    remainingAmount: 30000,
    price: 2.
}
```

filter</code></a> method. The default is `true`, which means that the input data will not be filtered.
resourceType (optional) : string, resource type of the item to find
The type of resource being traded in the market. If this parameter is provided, the list of orders will only contain items with a matching resource type. If it's not provided, all items will be included.
sortBy (optional) : string, column to sort by
The column to sort the results by. Options are "createdTimestamp", "type", "amount", "remainingAmount", "price". If this parameter is provided and the filter parameter is also provided, the list of orders will only contain items with a matching resource type that match the filter criteria. If it's not provided, all items will be included in the result.
order (optional) : string, order
The direction of sorting the results. Options are "asc", "desc". The default is "asc" if no value is specified.

filter</code></a> method.

### Return value

An orders array in the following form:

property | description
---|---
`id` | The unique order ID. 
`created` | The order creation time in game ticks.  This property is absent for orders of the inter-shard market. 
`createdTimestamp` | The order creation time <a href="https://developer. mozilla. org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime#Syntax">in milliseconds since UNIX epoch time</a>.  This property is absent for old orders. 
`type` | Either <code>ORDER_SELL</code> or <code>ORDER_BUY</code>.

'resourceType' | 'resourceType' | '자원 유형' | '게임 시장에서 지정한 리소스의 일일 가격 기록을 마지막 14일간 확인할 수 있습니다.
{% api_method Game.market.getHistory '[resourceType]' 1 %}
{% api_method_params %}
resourceType (선택사항) : 문자열
`RESOURCE_*` 상수 중 하나입니다. 정의되지 않으면 모든 리소스에 대한 기록을 반환합니다.

번역하지 마세요 : JavaScript 코드, 대문자로만 된 단어들,

### Return value
```json-content
[{
    "resourceType": "L",
    "date": "2019-06-24",
    "transactions": 4,
    "volume": 400,
    "avgPrice": 3. 63,
    "stddevPrice": 0. 27
}]    
```

{% api_method Game. market. getOrderById 'id' 1 %}

```javascript
const order = Game. market. getOrderById('55c34a6b5be41a0a6e80c123');
```

특정 시장 주문에 대한 정보를 검색합니다.
{% api_method_params %}
id : string
주문 ID. {% endapi_method_params %}

### Return value
주문 정보가 포함된 객체입니다. <a href="#getAllOrders"><code>getAllOrders</code></a>를 참조하세요.

번역하지 마세요 : JavaScript, 대문자로만 된 단어들,