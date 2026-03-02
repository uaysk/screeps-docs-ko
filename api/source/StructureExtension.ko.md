# StructureExtension

<img src="img/spawn.png" alt="" align="right" />

에너지를 담고 있으며, 더 큰 크립을 스폰하는 데 사용할 수 있습니다. 익스텐션은 룸 안 어디에나 배치할 수 있고, 거리에 상관없이 어떤 스폰이든 사용할 수 있습니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1</td>
        <td>—</td>
    </tr>
    <tr>
        <td>2</td>
        <td>5 extensions (50 capacity)</td>
    </tr>
    <tr>
        <td>3</td>
        <td>10 extensions (50 capacity)</td>
    </tr>
    <tr>
        <td>4</td>
        <td>20 extensions (50 capacity)</td>
    </tr>
    <tr>
        <td>5</td>
        <td>30 extensions (50 capacity)</td>
    </tr>
    <tr>
        <td>6</td>
        <td>40 extensions (50 capacity)</td>
    </tr>
    <tr>
        <td>7</td>
        <td>50 extensions (100 capacity)</td>
    </tr>
    <tr>
        <td>8</td>
        <td>60 extensions (200 capacity)</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>3,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>1,000</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}

{% api_property energy 'number' '{"deprecated": true}' %}
                                
[`.store[RESOURCE_ENERGY]`](#StructureExtension.store)에 대한 별칭(alias)입니다.

{% api_property energyCapacity 'number' '{"deprecated": true}' %}
                                                                        
[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity)에 대한 별칭(alias)입니다.

익스텐션이 담을 수 있는 총 에너지 양입니다.

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```

이 구조물의 적재물을 담고 있는 [`Store`](#Store) 오브젝트입니다.

