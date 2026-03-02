# StructureFactory

<img src="img/factory.png" alt="" align="right" />

기본 미네랄과 다른 상품으로부터 거래용 상품(commodities)을 생산합니다. 상품에 대해서는 [이 문서](/resources.html#Commodities)에서 더 알아보세요.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1-6</td>
        <td>—</td>
    </tr>
    <tr>
        <td>7-8</td>
        <td>1 factory</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>1000</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>50,000</td>
    </tr>
    <tr>
        <td><strong>Production cooldown</strong></td>
        <td>자원에 따라 다름</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %} 

{% api_property cooldown 'number' %}

다음 생산이 가능해질 때까지 팩토리가 기다려야 하는 게임 틱 수입니다.

{% api_property level number %}

```javascript
if(!factory.level) {
    Game.powerCreeps['MyOperator1'].usePower(PWR_OPERATE_FACTORY, factory);
}
```

팩토리 레벨입니다. 새로 건설된 팩토리에 `PWR_OPERATE_FACTORY` 파워를 적용해 설정할 수 있습니다.
한 번 설정되면 레벨은 변경할 수 없습니다.

{% api_property store '<a href="#Store">Store</a>' %}

이 구조물의 적재물을 담고 있는 [`Store`](#Store) 오브젝트입니다.

{% api_property storeCapacity 'number' '{"deprecated": true}' %}
                                                                                                               
[`.store.getCapacity()`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_method produce 'resourceType' A %}

```javascript
factory.produce(RESOURCE_UTRIUM_BAR);
```

지정한 상품을 생산합니다. 필요한 모든 재료는 팩토리 store에 있어야 합니다.

{% api_method_params %}
resourceType : string
<code>RESOURCE_*</code> 상수 중 하나입니다.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_RCL_NOT_ENOUGH | 팩토리를 사용하기에 Room Controller 레벨이 부족합니다.
ERR_NOT_ENOUGH_RESOURCES | 구조물에 필요한 자원이 충분하지 않습니다.
ERR_INVALID_ARGS | 제공한 인자가 올바르지 않습니다.
ERR_INVALID_TARGET | 팩토리가 이 레벨의 상품을 생산할 수 없습니다.
ERR_TIRED | 팩토리가 아직 쿨다운 중입니다.
ERR_BUSY | 팩토리가 `PWR_OPERATE_FACTORY` 파워로 운영 중이 아닙니다.
ERR_FULL | 팩토리에 생산물을 담을 수 없습니다.
{% endapi_return_codes %}

