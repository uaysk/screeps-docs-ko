# StructureTower
	
<img src="img/tower.png" alt="" align="right" />

원격으로 크립을 공격하거나 치료하거나, 구조물을 수리합니다. 룸 내 어떤 오브젝트든 대상으로 지정할 수 있습니다.
다만 효율은 거리와 선형적으로(linearly) 비례합니다. 각 액션은 에너지를 소비합니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1-2</td>
        <td>—</td>
    </tr>
    <tr>
        <td>3-4</td>
        <td>1 tower</td>
    </tr>
    <tr>
        <td>5-6</td>
        <td>2 towers</td>
    </tr>
    <tr>
        <td>7</td>
        <td>3 towers</td>
    </tr>
    <tr>
        <td>8</td>
        <td>6 towers</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>3,000</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>1,000</td>
    </tr>
    <tr>
        <td><strong>Energy per action</strong></td>
        <td>10</td>
    </tr>
    <tr>
        <td><strong>Attack effectiveness</strong></td>
        <td>사거리 ≤5: 600 hits, 사거리 ≥20: 150 hits</td>
    </tr>
    <tr>
        <td><strong>Heal effectiveness</strong></td>
        <td>사거리 ≤5: 400 hits, 사거리 ≥20: 100 hits</td>
    </tr>
    <tr>
        <td><strong>Repair effectiveness</strong></td>
        <td>사거리 ≤5: 800 hits, 사거리 ≥20: 200 hits</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}

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

{% api_method attack 'target' A %}

룸 안의 어떤 creep / power creep / structure든 원격 공격합니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>, <a href="#Structure">Structure</a>
대상 오브젝트.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_ENERGY | 타워에 에너지가 충분하지 않습니다.
ERR_INVALID_TARGET | 대상이 유효한 공격 대상 오브젝트가 아닙니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

{% api_method heal 'target' A %}

룸 안의 어떤 creep 또는 power creep이든 원격 치료합니다.

{% api_method_params %}
target : <a href="#Creep">Creep</a>, <a href="#PowerCreep">PowerCreep</a>
대상 오브젝트.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_ENERGY | 타워에 에너지가 충분하지 않습니다.
ERR_INVALID_TARGET | 대상이 유효한 creep 오브젝트가 아닙니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

{% api_method repair 'target' A %}

룸 안의 어떤 구조물이든 원격 수리합니다.

{% api_method_params %}
target : <a href="#Structure">Structure</a>
대상 구조물.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_ENERGY | 타워에 에너지가 충분하지 않습니다.
ERR_INVALID_TARGET | 대상이 유효한 수리 대상 오브젝트가 아닙니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

