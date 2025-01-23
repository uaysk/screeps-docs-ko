# 톰스톤

이것은 죽은 크립의 유물입니다. 이동할 수 있는 개체입니다.

<img src="img/tombstone. gif" alt="" align="right" />

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>썩어감</strong></td>
        <td>사망한 크립의 신체 부위당 5 ticks 씩</td>
    </tr>
    </tbody>
</table>

{% page inherited/RoomObject. md %}

{% api_property creep '<a href="#Creep">Creep</a> | <a href="#PowerCreep">PowerCreep</a>' %}

```javascript
room. find(FIND_TOMBSTONES). forEach(tombstone => {
    if(tombstone. creep. my) {
        console. log(`My creep died with ID=${tombstone. creep. id} ` +
             `and role=${Memory. creeps[tombstone. creep. name]. role}`);
    }
});
```

```javascript
 room.find(FIND_TOMBSTONES).forEach(tombstone => {
    if (tombstone.creep instanceof PowerCreep) {
        console.log(`Power creep died here`);
    }
});
```

```javascript
room. find(FIND_TOMBSTONES). forEach(tombstone => {
    if(tombstone.creep instanceof PowerCreep) {
        console.log(`Power creep died here`);
    }    
});
````

객체에는 사망한 크립이나 파워 크립이 들어 있습니다.

{% api_property deathTime 'number' %}

사망 시간.

{% api_property id string %}

객체를 고유하게 식별하는 아이디입니다. `<a href="#Game. getObjectById"><code>Game. getObjectById</code></a>` 메서드를 사용하여 이 아이디로 객체 인스턴스를 검색할 수 있습니다.


{% api_property store '<a href="#Store">Store</a>' %}

[`Store`](#Store) 개체는 해당 구조물의 화물을 포함합니다.

이 무덤 Stone은 얼마나 오래 지속되는가?{% api_property ticksToDecay 'number' %}