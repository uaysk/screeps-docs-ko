# StructureTerminal

<img src="img/terminal.png" alt="" align="right" />

다른 룸의 Terminal로 어떤 자원이든 보낼 수 있습니다. 목적지 Terminal은 어떤 플레이어의 것이어도 됩니다.
각 트랜잭션은(전송하는 자원 타입과 무관하게) 추가 에너지를 필요로 하며, [`Game.market.calcTransactionCost`](#Game.market.calcTransactionCost) 메서드로 계산할 수 있습니다.
예를 들어 W0N0에서 W10N5로 미네랄 1000을 보내면 에너지 742를 소비합니다.
[`Game.market`](#Game.market) 오브젝트로 들어오고 나가는 트랜잭션을 추적할 수 있습니다.
룸당 Terminal은 하나만 허용되며 [`Room.terminal`](#Room.terminal) 프로퍼티로 접근할 수 있습니다.

Terminal은 [마켓 시스템](/market.html)에서 사용됩니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1-5</td>
        <td>—</td>
    </tr>
    <tr>
        <td>6-8</td>
        <td>1 terminal</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>3,000</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>300,000</td>
    </tr>
    <tr>
        <td><strong>Cooldown on send</strong></td>
        <td>10 ticks</td>
    </tr>
    </tbody>
</table> 

{% page inherited/OwnedStructure.ko.md %}

{% api_property cooldown 'number' %}

이 터미널이 [`StructureTerminal.send`](#StructureTerminal.send) 또는 [`Game.market.deal`](#Game.market.deal)을 호출해 사용할 수 없게 남아 있는 틱 수입니다.

{% api_property store '<a href="#Store">Store</a>' %}

이 구조물의 적재물을 담고 있는 [`Store`](#Store) 오브젝트입니다.

{% api_property storeCapacity 'number' '{"deprecated": true}' %}
                                                                              
[`.store.getCapacity()`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_method send 'resourceType, amount, destination, [description]' A %}

```javascript
Game.rooms['W1N1'].terminal.send(RESOURCE_UTRIUM, 100, 'W2N3',
	'trade contract #1');
```

지정한 이름의 다른 룸 Terminal로 자원을 보냅니다.

{% api_method_params %}
resourceType : string
<code>RESOURCE_*</code> 상수 중 하나입니다.
===
amount : number
보낼 자원 양.
===
destination : string
대상 룸 이름. 이 룸을 볼 필요는 없습니다.
===
description (optional) : string
트랜잭션 설명. 수신자에게 보입니다. 최대 길이는 100자입니다.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 구조물에 필요한 자원이 충분하지 않습니다.
ERR_INVALID_ARGS | 제공한 인자가 올바르지 않습니다.
ERR_TIRED | 터미널이 아직 쿨다운 중입니다.
{% endapi_return_codes %}

