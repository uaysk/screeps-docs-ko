# StructureExtension

<img src="img/spawn.png" alt="" align="right" />

에너지를 함유하고 있어서 더 큰 크립을 소환할 때 사용할 수 있습니다. 확장은 방의 어느 곳에나 배치할 수 있으며, 모든 스폰은 거리와 상관없이 사용할 수 있습니다.

"컨트롤러 레벨"
"—"
"확장팩 5개(용량: 50)"
"확장팩 10개(용량: 50)"
"확장팩 20개(용량: 50)"
"확장팩 30개(용량: 50)"
"확장팩 40개(용량: 50)"
"확장팩 50개(용량: 100)"
"—"
"비용"
"3,000"
"타격"
"1,000"
}

```javascript
if (structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```

A [`Store`](#StructureExtension.store) object that contains cargo of this structure extension.