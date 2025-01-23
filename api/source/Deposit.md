# 예금

<img src="img/deposit. png" alt="" align="right" />

필수품을 생산하는데 필요한 희귀한 자원 매장. 크립들이 `WORK` 신체부를 가지고 채집할 수 있다.
각 채취 작업은 시간이 지남에 따라 길어지는, 재사용 대기시간을 일으킨다.
[이 글](/resources.html)에서 자원들에 관해 더 알아보세요.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>재사용 대기시간</strong></td>
        <td>`0. 001 * totalHarvested ^ 1. 2`</td>
    </tr>
    <tr>
        <td><strong>붕괴</strong></td>
        <td>50,000 틱이 지나면 사라진다.</td>
    </tr>
    </tbody>
</table>

{% api_property name 'string' %}


The deposit name. 


{% api_property ownerId 'integer' %}


The owner ID, who created and owns this deposit.  You can use <a href="#Game. getObjectOwner"><code>Game. getObjectOwner</code></a> method to retrieve the object owner by its <code>id</code>. 

{% api_property totalAmount 'number' %}


The total amount of resources in this deposit, in bytes. 


{% api_property type 'string' %}


The deposit type, one of the following constants:

```javascript-content
DEPOT_GAS
DEPOT_CRYSTAL
DEPOT_ORE
DEPOT_SILO
```

{% api_property ticksToDecay 'number' %}
게임에서 이 예금이 사라질 때까지의 틱 수입니다.