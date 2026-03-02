# Nuke

핵이 착탄하는 위치입니다. 이 오브젝트는 제거하거나 수정할 수 없습니다. `FIND_NUKES` 상수로 룸에서 들어오는 핵을 찾을 수 있습니다.

<table class="table gameplay-info">
    <tbody>
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

{% page inherited/RoomObject.ko.md %}

{% api_property id 'string' %}

고유한 오브젝트 식별자입니다. <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 메서드를 사용해 <code>id</code>로 오브젝트 인스턴스를 가져올 수 있습니다.

{% api_property launchRoomName 'string' %}

이 핵이 발사된 룸 이름입니다.

{% api_property timeToLand 'number' %}

남은 착탄 시간입니다.

