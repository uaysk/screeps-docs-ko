# StructureNuker

<img src="img/nuke.png" alt="" align="right" />

다른 룸으로 핵을 발사해 착탄 지역에 막대한 피해를 줍니다. 각 발사는 쿨다운이 있으며 에너지와 ghodium 자원이 필요합니다.
발사하면 대상 룸 좌표에 [Nuke](#Nuke) 오브젝트가 생성되며, 착탄할 때까지 모든 플레이어에게 보입니다.
들어오는 핵은 이동하거나 취소할 수 없습니다. 초보자 룸에서는 발사하거나 발사 대상이 될 수 없습니다. StructureNuker에 넣은 자원은 꺼낼 수 없습니다.

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
        <td>1 nuke</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>100,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>1,000</td>
    </tr>
    <tr>
        <td><strong>Range</strong></td>
        <td>10 rooms</td>
    </tr>
    <tr>
        <td><strong>Launch cost</strong></td>
        <td>300,000 energy<br /> 5,000 ghodium</td>
    </tr>
    <tr>
        <td><strong>Launch cooldown</strong></td>
        <td>100,000 ticks</td>
    </tr>
    <tr>
        <td><strong>Landing time</strong></td>
        <td>50,000 ticks</td>
    </tr>
    <tr>
        <td><strong>Effect</strong></td>
        <td>룸 내의 모든 크립, 건설 사이트, 드랍된 자원이 즉시 제거됩니다(램파트 내부도 포함). 구조물 피해:
            <ul>
                <li>착탄 지점: 10,000,000 hits;</li>
                <li>5x5 영역 내 모든 구조물: 5,000,000 hits.</li>
            </ul>
            <p>서로 다른 룸에서 여러 핵을 같은 목표 위치에 겹쳐 발사하여 피해를 늘릴 수 있다는 점에 유의하세요.</p>
            <p>핵 착탄은 tombstone과 ruin을 생성하지 않으며, 룸에 존재하는 모든 tombstone과 ruin을 파괴합니다.</p>
            <p>룸이 세이프 모드인 경우, 세이프 모드는 즉시 해제되며 세이프 모드 쿨다운은 0으로 리셋됩니다.</p>
            <p>룸 컨트롤러는 <code>upgradeBlocked</code> 기간이 트리거되어, 다음 200틱 동안 세이프 모드를 다시 활성화할 수 없습니다.</p>
        </td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}

{% api_property energy 'number' '{"deprecated": true}' %}

[`.store[RESOURCE_ENERGY]`](#StructureExtension.store)에 대한 별칭(alias)입니다.

{% api_property energyCapacity 'number' '{"deprecated": true}' %}

[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_property ghodium 'number' '{"deprecated": true}' %}

[`.store[RESOURCE_GHODIUM]`](#StructureExtension.store)에 대한 별칭(alias)입니다.

{% api_property ghodiumCapacity 'number' '{"deprecated": true}' %}

[`.store.getCapacity(RESOURCE_GHODIUM)`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_property cooldown 'number' %}

다음 발사가 가능해질 때까지 남은 게임 틱 수입니다.

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```

이 구조물의 적재물을 담고 있는 [`Store`](#Store) 오브젝트입니다.

{% api_method launchNuke 'pos' A %}

```javascript
nuker.launchNuke(new RoomPosition(20,30, 'W1N1'));
```

지정한 위치로 핵을 발사합니다.

{% api_method_params %}
pos : <a href="#RoomPosition">RoomPosition</a>
대상 룸 좌표.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 구조물에 에너지 및/또는 ghodium이 충분하지 않습니다.
ERR_INVALID_ARGS | 대상이 유효한 RoomPosition이 아닙니다.
ERR_INVALID_TARGET | 지정한 RoomPosition으로 핵을 발사할 수 없습니다([Start Areas](/start-areas.html) 참고).
ERR_NOT_IN_RANGE | 대상 룸이 사거리 밖입니다.
ERR_TIRED | 구조물이 아직 쿨다운 중입니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

