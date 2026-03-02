# StructureLink

<img src="img/link.png" alt="" align="right" /> 

같은 룸 안의 다른 Link로 에너지를 원격 전송합니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1-4</td>
        <td>—</td>
    </tr>
    <tr>
        <td>5</td>
        <td>2 links</td>
    </tr>
    <tr>
        <td>6</td>
        <td>3 links</td>
    </tr>
    <tr>
        <td>7</td>
        <td>4 links</td>
    </tr>
    <tr>
        <td>8</td>
        <td>6 links</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>1,000</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>800</td>
    </tr>
    <tr>
        <td><strong>Cooldown time</strong></td>
        <td>대상까지의 직선 거리(타일) 1칸당 1틱</td>
    </tr>
    <tr>
        <td><strong>Energy loss</strong></td>
        <td>3%</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}

{% api_property cooldown 'number' %}

다음 전송이 가능해질 때까지 링크가 기다려야 하는 게임 틱 수입니다.

{% api_property energy 'number' '{"deprecated": true}' %}

[`.store[RESOURCE_ENERGY]`](#StructureExtension.store)에 대한 별칭(alias)입니다.

{% api_property energyCapacity 'number' '{"deprecated": true}' %}

[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```

이 구조물의 적재물을 담고 있는 [`Store`](#Store) 오브젝트입니다.

{% api_method transferEnergy 'target, [amount]' A %}

```javascript
const linkFrom = Game.rooms['W1N1'].lookForAt('structure', 10, 25)[0];

const linkTo = linkFrom.pos.findInRange(FIND_MY_STRUCTURES, 2,
    {filter: {structureType: STRUCTURE_LINK}})[0];

linkFrom.transferEnergy(linkTo);
```

같은 룸 안의 어떤 위치든 있는 다른 링크로 에너지를 원격 전송합니다.

{% api_method_params %}
target : <a href="#StructureLink">StructureLink</a>
대상 오브젝트.
===
amount (optional) : number
전송할 에너지 양. 생략하면 사용 가능한 에너지를 전부 사용합니다.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 링크의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 구조물에 지정한 양의 에너지가 없습니다.
ERR_INVALID_TARGET | 대상이 유효한 StructureLink 오브젝트가 아닙니다.
ERR_FULL | 대상이 더 이상 에너지를 받을 수 없습니다.
ERR_INVALID_ARGS | 에너지 양이 올바르지 않습니다.
ERR_TIRED | 링크가 아직 쿨다운 중입니다.
ERR_RCL_NOT_ENOUGH | 이 링크를 사용하기에 Room Controller Level이 부족합니다.
ERR_NOT_IN_RANGE | 대상이 너무 멉니다.
{% endapi_return_codes %}

