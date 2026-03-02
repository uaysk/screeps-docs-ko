# Tombstone

<img src="img/tombstone.gif" alt="" align="right" />

죽은 크립의 흔적입니다. 이동 가능한(walkable) 오브젝트입니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>Decay</strong></td>
        <td>사망한 크립의 바디 파트 1개당 5틱</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject.ko.md %}

{% api_property creep '<a href="#Creep">Creep</a> | <a href="#PowerCreep">PowerCreep</a>' %}

```javascript
room.find(FIND_TOMBSTONES).forEach(tombstone => {
    if(tombstone.creep.my) {
        console.log(`My creep died with ID=${tombstone.creep.id} ` +
             `and role=${Memory.creeps[tombstone.creep.name].role}`);   
    }    
});
```
```javascript
room.find(FIND_TOMBSTONES).forEach(tombstone => {
    if(tombstone.creep instanceof PowerCreep) {
        console.log(`Power creep died here`);   
    }    
});
````

사망한 creep 또는 power creep을 담고 있는 오브젝트입니다.

{% api_property deathTime 'number' %}

사망 시각입니다.

{% api_property id string %}

고유한 오브젝트 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 오브젝트 인스턴스를 가져올 수 있습니다.

{% api_property store '<a href="#Store">Store</a>' %}

이 구조물의 적재물을 담는 [`Store`](#Store) 오브젝트입니다.

{% api_property ticksToDecay 'number' %}

이 tombstone이 붕괴(decay)되기까지 남은 게임 틱 수입니다.

