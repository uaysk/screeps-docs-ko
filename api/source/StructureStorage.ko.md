# StructureStorage

<img src="img/storage.png" alt="" align="right" />

대량의 자원 유닛을 저장할 수 있는 구조물입니다. 룸당 1개만 건설할 수 있으며,
[`Room.storage`](#Room.storage) 프로퍼티로 접근할 수 있습니다.</p>

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1-3</td>
        <td>—</td>
    </tr>
    <tr>
        <td>4-8</td>
        <td>1 storage</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>30,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>10,000</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>1,000,000</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}


{% api_property store '<a href="#Store">Store</a>' %}

이 구조물의 적재물을 담고 있는 [`Store`](#Store) 오브젝트입니다.

{% api_property storeCapacity 'number' '{"deprecated": true}' %}

[`.store.getCapacity()`](#Store.getCapacity)에 대한 별칭(alias)입니다.

