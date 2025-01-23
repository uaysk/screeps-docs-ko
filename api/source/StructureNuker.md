# StructureNuker

<img src="img/nuke.png" alt="" align="right" />

다른 방에 nuke를 발사하여 착륙 지역에 엄청난 피해를 줍니다. 각 발사마다 재사용 대기시간이 있으며 에너지와 ghodium 자원이 필요합니다. 목표 방 위치에 [Nuke](#Nuke) 객체를 생성하여 플레이어가 볼 수 있도록 착륙할 때까지 보관됩니다. 들어오는 nuke는 이동이나 취소가 불가능합니다. Nuke은(는) 초급 방에서 출발하거나 도착할 수 없습니다. StructureNuker로 넣은 자원은 회수할 수 없습니다.

컨트롤러 레벨: 1-7<br/> —<br/>8<br/> 1명의 녹스 전용<br/><br/>비용: 10만<br/>타격: 1,000<br/>사정거리: 10개 방<br/>발사 비용: 30만 에너지, 5천 골디움<br/>발사 재충전 대기시간: 10만 틱<br/>착륙 시간: 5만 틱<br/>효과: 방어구에도 영향을 미치는 일체의 파괴적인 요소를 가진 상대로부터, 한 턴 동안 보호를 받은 모든 벌레류, 건축 현장과 방 내부에 떨어진 자원을 제거합니다. </table>

구조물의 손상:
            <ul>
                <li>10,000,000회 타격이 착륙 지점에서 발생했습니다.</li>
                <li>5x5 영역 내의 모든 구조물에 5,000,000회 타격이 가해집니다.</li>
            </ul>
            <p>여러 개의 뉴클레어를 서로 다른 방에서 동일한 목표 지점으로 쌓아 피해를 증가시킬 수 있습니다.</p>
            <p>뉴클레어의 착륙은 묘비나 유적을 생성하지 않으며, 방에 이미 존재하는 묘비나 유적을 파괴합니다.</p>
            <p>만약 방이 안전 모드인 경우, 즉시 안전 모드가 취소되고 안전 모드 재사용 대기시간은 0으로 리셋됩니다.</p>

객체 컨트롤러는 `upgradeBlocked`를 트리거하여 다음 200틱 동안 세이프 모드를 다시 활성화할 수 없습니다.{% em-text %}

JavaScript를 번역하지 마십시오. 대문자로만 이루어진 단어도 번역하지 마십시오. 이 기사를 한국어로 번역하십시오 .: getCapacity (RESOURCE_ENERGY)`](#Store.getCapacity).

{% api_property ghodium 'number' '{"deprecated": true}' %}
```에 대한 별칭입니다.[`. store[RESOURCE_GHODIUM]`](#StructureExtension.store).

{% api_property ghodiumCapacity 'number' '{"deprecated": true}' %}
```에 대한 별칭입니다.[`. store. getCapacity(RESOURCE_GHODIUM)`](#Store.getCapacity).

{% api_property cooldown 'number' %}
게임 틱의 수는 다음 발사가 가능한 시간입니다.

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure,RESOURCE_ENERGY);
}
```

저장하는 `Store` 객체를 나타냅니다.

ERR_NOT_OWNER | 당신은 이 구조물의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 구조물에 충분한 에너지와/또는 골듐이 없습니다.
ERR_INVALID_ARGS | 목표가 유효한 RoomPosition이 아닙니다.
ERR_INVALID_TARGET | 핵을 [시작 영역](/start-areas.html)에 발사할 수 없습니다.
ERR_OUT_OF_RANGE | 타겟 방이 범위를 벗어났습니다.
ERR_TIRED | 이 구조물은 아직 식고 있습니다.
ERR_RCL_NOT_ENOUGH | Room Controller Level이 부족하여 이 구조물을 사용할 수 없습니다.