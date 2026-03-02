# StructureRampart

<img src="img/rampart.png" alt="" align="right" />

적대 크립의 이동을 막고, 같은 타일 위의 여러분의 크립과 구조물을 방어합니다.
조작 가능한 게이트처럼 사용할 수 있습니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan=2><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1</td>
        <td>—</td>
    </tr>
    <tr>
        <td>2</td>
        <td>300,000 max hits</td>
    </tr>
    <tr>
        <td>3</td>
        <td>1,000,000 max hits</td>
    </tr>
    <tr>
        <td>4</td>
        <td>3,000,000 max hits</td>
    </tr>
    <tr>
        <td>5</td>
        <td>10,000,000 max hits</td>
    </tr>
    <tr>
        <td>6</td>
        <td>30,000,000 max hits</td>
    </tr>
    <tr>
        <td>7</td>
        <td>100,000,000 max hits</td>
    </tr>
    <tr>
        <td>8</td>
        <td>300,000,000 max hits</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>1</td>
    </tr>
    <tr>
        <td><strong>Hits when constructed</strong></td>
        <td>1</td>
    </tr>
    <tr>
        <td><strong>Decay</strong></td>
        <td>100틱마다 300 hits를 잃습니다.</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}


{% api_property isPublic 'boolean' %}

false(기본값)라면 여러분의 크립만 같은 칸에 설 수 있습니다. true라면 적대 크립도 통과할 수 있습니다.

{% api_property ticksToDecay 'number' %}

이 램파트가 일부 hit points를 잃기까지 남은 게임 틱 수입니다.

{% api_method setPublic 'isPublic' A %}

이 램파트를 public으로 설정해 다른 플레이어의 크립이 통과할 수 있게 합니다.

{% api_method_params %}
isPublic : boolean
이 램파트를 public으로 할지 non-public으로 할지.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 구조물의 소유자가 아닙니다.
{% endapi_return_codes %}

