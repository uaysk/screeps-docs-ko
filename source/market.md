마켓 시스템은 Screeps의 [Terminal](/api/#StructureTerminal)이라고 불리는 특별한 구조물을 통해 다양한 자원들을 플레이어 간에 거래할 수 있게 합니다. 그들은 어떤 거리든 상관없이 다른 방으로 즉시 자원을 전송할 수 있습니다.

이 마켓에서의 거래를 하기 위해선 게임 내의 통화인 **크레딧(Credits)**이 필요합니다. 여러분의 크레딧은 계정과 연결되어 있으며, 마켓에서의 거래를 실행하는데 사용됩니다.

{% note info %}
첫 번째 크레딧을 획득하기 위해선, 이미 마켓 매수 주문을 가진 플레이어와 거래를 해야합니다.
{% endnote %}

## 마켓 주문

마켓 시스템은 **매도 및 매수 주문**에 기반을 두고 있으며, 이는 여러분의 터미널과 연결되어 있습니다. 주문을 생성할 때, 여러분은 자원을 팔거나 사기 위해 판매하고자 하는 터미널, 유형, 그리고 금액을 지정합니다. 또한, 단위당 1크레딧에 대한 가격도 지정해야 합니다.

모든 주문은 [Market](https://screeps.com/a/#!/market) 페이지나 API 메서드 `[Game.market.getAllOrders](/api/#Game.market.getAllOrders)`를 통해 게임 세계의 모든 플레이어가 볼 수 있습니다. 주문을 하려면 5%의 비용이 필요합니다. 상대방의 재화를 받아야 거래를 성사시킬 수 있는데(매도 주문을 한 경우), 매도자는 반드시 상대방에게 보내는 재화와 함께 다른 플레이어의 주문, 자신의 터미널, 원하는 자원량을 지정해야 합니다.

1. Suppose I have a trading robot that buys 1000 units of resource A at 5 credits per unit from a seller who has set a sell order for that amount, and the buying terminal has enough credits. In this case, the transaction is executed automatically by the two terminals, and the credits are transferred to the seller's account.

2. If the selling terminal does not have enough resource to sell, the transaction cannot be executed until the seller replenishes their stock. Similarly, if the buyer's credit account is insufficient, they cannot purchase the required amount of resource. In such cases, the order remains inactive until the necessary conditions are met.

3. When a trade is made between two terminals, there may be energy expenses involved in transferring resources from one terminal to another. These expenses are always borne by the party who executes the deal rather than the owner of the order. The same principle applies to terminal cooldown periods.

4. A trading robot can also use multiple sell orders simultaneously and execute them depending on the market conditions or the availability of resources in the selling terminals. Similarly, a buyer can create multiple buy orders for different quantities of resource at varying prices and execute them based on their preference or convenience.

* 플레이어 Alice가 10크레딧에 1000개의 우트리움 애시드를 구매하기위한 주문을 생성합니다. 이 주문을 만들기 위해 Alice는 W1N1실에서 자신의 단말기를 지정하고 500크레딧의 수수료를 즉시 지불합니다.
* 플레이어 Bob은 Alice의 주문을 발견하고 W1N1실에서 자신의 단말기를 사용할 때 Bob의 단말기가 3개 떨어져있음을 알게됩니다. 따라서 200개의 우트리움 애시드 자원을 보내는데 60 에너지가 필요합니다. Bob은 주어진 주문을 실행하고 200개의 ultrium acid를 W4N2에서 W1N1로 자동으로 이동시켜 2,000크레딧을 받습니다. Bob의 단말기는 W4N2에서 60 에너지 단위를 소모합니다.

* 지금 밥은 자신이 번 2,000 Cr을 소비하고 싶어합니다. W1N5방에서 판매 주문으로 0.5 Cr의 가격으로 에너지를 제공하는 플레이어 찰리에게서 에너지를 구입하고자 합니다. 밥이 4방의 거리를 커버하기 위해서는 1,600 단위의 에너지 비용을 소비해야 합니다. 이 금액은 거래가 실행되기 전에 밥의 단말기에 있어야만 했습니다. 찰리는 2,000 Cr를 받고 에너지 전송에 아무것도 소비하지 않았습니다.

이러한 사례는 관련된 플레이어들 간의 잔액 변화를 유발합니다:
* 앨리스 (구매 주문, 1,000 유트륨 산): +200 유트륨 산, -500~2,000 크레딧.
* 찰리 (판매 주문, 에너지): -4,000 에너지, +2,000 크레딧.
* 밥 (상인): -200 유트륨 산, +4,000~60~1,600 에너지, +2,000~-2,000 크레딧.

## NPC 터미널

섹터 간의 "고속도로 교차로"(즉, W0N0, W10N0, W10N10 등의 방에서)에는 중립적인 NPC 터미널이 있습니다. 마켓 인터페이스나 객체 [Game.market](/api/#Game.market)를 사용하여 실제 플레이어와 동일한 방식으로 이 NPC 터미널과 거래할 수 있습니다. NPC 터미널의 주문에는 자원 금액이 제한되며 설정된 규칙에 따라 보충됩니다. NPC 터미널은 가장 경쟁력 있는 가격을 자랑하지는 않지만, 자원 잉여를 크레딧으로 전환할 수 있게 해주며 그 반대의 경우도 가능합니다.