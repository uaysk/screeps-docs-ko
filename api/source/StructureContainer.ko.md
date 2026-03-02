# StructureContainer

<img src="img/container.png" alt="" align="right" />

자원을 저장할 수 있는 작은 컨테이너입니다. 이동 가능한(walkable) 구조물입니다. 같은 타일에 있는 모든 드랍 자원은 자동으로 컨테이너로 들어갑니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Controller level</strong></td>
        <td>Any (including neutral rooms)</td>
    </tr>
    <tr>
        <td><strong>Available per room</strong></td>
        <td>5</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>2,000</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>5,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>250,000</td>
    </tr>
    <tr>
        <td><strong>Decay</strong></td>
        <td>소유 룸에서는 500틱마다 5,000 hits를 잃고, 비소유 룸에서는 100틱마다 5,000 hits를 잃습니다.</td>
    </tr>
    </tbody>
</table>

{% page inherited/Structure.ko.md %}

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
const containersWithEnergy = room.find(FIND_STRUCTURES, {
    filter: (i) => i.structureType == STRUCTURE_CONTAINER &&
                   i.store[RESOURCE_ENERGY] > 0
});
```

이 구조물의 적재물을 담고 있는 [`Store`](#Store) 오브젝트입니다.

{% api_property storeCapacity 'number' '{"deprecated": true}' %}
                                       
[`.store.getCapacity()`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_property ticksToDecay 'number' %}

이 컨테이너가 일부 hit points를 잃기까지 남은 게임 틱 수입니다.

