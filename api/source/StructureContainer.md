# StructureContainer

테이블 class="table gameplay-info">
tbody
tr
td strong{Controller 레벨}
td Any (중립적인 룸 포함)
tr
td strong{사용 가능한 룸당}
td5
tr
td strong{수용 인원}
td2,000
tr
td strong{비용}
td5,000
tr
td strong{타격 횟수}
td250,000
tr
td strong{손상 정도}
td소유한 룸에서는 500 간격으로 5,000회 감소하고, 소유하지 않은 룸에서는 100 간격으로 5,000회 감소합니다.

{% translated "Don't translate codes like JavaScript, don't translate words that are only in uppercase letters," transled "%{translated} Don't translate JavaScript-like codes or all capitalized words, " %}

```javascript
const containersWithEnergy = room.find(FIND_STRUCTURES, {
    filter: (i) => i.structureType == STRUCTURE_CONTAINER &&
              i.store[RESOURCE_ENERGY] > 0
});
```

A [`Store`](#Store) object that contains cargo of this structure.

{% api_property storeCapacity 'number' '{"deprecated": true}' %}

An alias for `.store.getCapacity()`.


{% api_property ticksToDecay 'number' %}

The amount of game ticks when this container will lose some hit points.