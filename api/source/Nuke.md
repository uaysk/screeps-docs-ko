# 뉴크

뉴크의 상륙 지점. 이 물체는 삭제되거나 수정할 수 없습니다. "FIND_NUKES" 컨스탄트를 사용하여 방에서 다가오는 뉴크를 찾을 수 있습니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td><strong>상륙 시간</strong></td>
        <td>50,000 틱</td>
    </tr>
    <tr>
        <td><strong>효과</strong></td>
        <td>방에 있는 모든 크립, 건설 장소 및 떨어진 자원이 즉시 제거됩니다. 라마르트에서도 마찬가지입니다. 구조물 피해:
            <ul>
                <li>상륙 지점에서 1,000만 회의 타격;</li>
                <li>5x5 영역 내의 모든 구조물에 5,000만 번의 타격.</li>
        </td>
    </tr>
</tbody>
</table>

<li></li>
<ul></ul>
<p><strong>참고: 여러 방의 뉴크를 동일한 목표 위치에 쌓아 피해를 증가시킬 수 있습니다.</strong></p>
<p>뉴크는 <strong>무덤석과 폐허를 생성하지 않으며,</strong> 방의 기존 무덤석과 폐허를 파괴합니다.</p>
<p><strong>안전 모드가 있는 방에서는 즉시 취소되고 안전 모드 재충전 대기 시간이 0으로 재설정됩니다.</strong></p>
<p><strong>방 컨트롤러가 </code>upgradeBlocked</code> <strong>트리거를 활성화하여, 향후 200틱 이내에는 안전 모드를 다시 활성화할 수 없습니다.</strong></p>
{% /page %}

객체 ID입니다. <a href="#Game. getObjectById"><code>Game. getObjectById</code></a> 메서드를 사용하여 <code>id</code>로 객체 인스턴스를 검색할 수 있습니다.

{% api_property launchRoomName 'string' %}



이 핵을 발사한 룸의 이름입니다.

{% api_property timeToLand 'number' %}


남은 착륙 시간입니다.