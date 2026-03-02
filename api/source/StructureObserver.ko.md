# StructureObserver

<img src="img/observer.png" alt="" align="right" /> 

스크립트로 먼 룸을 관측(시야 확보)할 수 있게 해줍니다.

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
        <td>1 observer</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>8,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>500</td>
    </tr>
    <tr>
        <td><strong>Range</strong></td>
        <td>10 rooms</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}


{% api_method observeRoom 'roomName' A %}

스크립트로 먼 룸을 관측할 수 있게 합니다. 대상 룸 오브젝트는 다음 틱에 사용할 수 있습니다.

{% api_method_params %}
roomName : string
대상 룸 이름.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
ERR_INVALID_ARGS | <code>roomName</code> 인자가 유효한 룸 이름이 아닙니다.
ERR_NOT_IN_RANGE | <code>roomName</code> 룸이 관측 범위 밖입니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

