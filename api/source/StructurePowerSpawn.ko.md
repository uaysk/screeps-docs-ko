# StructurePowerSpawn

<img src="img/powerSpawn.png" alt="" align="right" />

power를 계정으로 처리(process)하고, 특수 고유 파워를 가진 power creep을 스폰합니다(개발 중).
power에 대해서는 [이 문서](/power.html)에서 더 알아보세요.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1-7</td>
        <td>—</td>
    </tr>
    <tr>
        <td>8</td>
        <td>1 power spawn</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>5,000 energy units, 100 power units</td>
    </tr>
    <tr>
        <td><strong>Processing cost</strong></td>
        <td>power 1당 에너지 50</td>
    </tr>
    <tr>
        <td><strong>Processing speed</strong></td>
        <td>틱당 power 1</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}


{% api_property energy 'number' '{"deprecated": true}' %}
                                                                
[`.store[RESOURCE_ENERGY]`](#StructureExtension.store)에 대한 별칭(alias)입니다.

{% api_property energyCapacity 'number' '{"deprecated": true}' %}
                                                                                                                
[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_property power 'number' '{"deprecated": true}' %}
                                                               
[`.store[RESOURCE_POWER]`](#StructureExtension.store)에 대한 별칭(alias)입니다.

{% api_property powerCapacity 'number' '{"deprecated": true}' %}
                                                                                                               
[`.store.getCapacity(RESOURCE_POWER)`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```

이 구조물의 적재물을 담고 있는 [`Store`](#Store) 오브젝트입니다.

{% api_method processPower '' A %}

power 자원 유닛을 계정에 등록합니다. 등록된 power는 power creep 스킬을 성장시키는 데 사용됩니다.

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 구조물에 에너지 또는 power 자원이 충분하지 않습니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

