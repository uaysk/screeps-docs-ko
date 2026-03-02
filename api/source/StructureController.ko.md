# StructureController

<img src="img/controller.png" alt="" align="right" />

이 구조물을 claim하면 룸을 컨트롤할 수 있습니다. 컨트롤러 구조물은 피해를 받거나 파괴될 수 없습니다.

[`Room.controller`](#Room.controller) 프로퍼티로 접근할 수 있습니다.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <th><strong>Level</strong></th>
        <th>Upgrade to next level</th>
        <th>Downgrade timer</th>
    </tr>
    <tr>
        <td>1</td>
        <td>200 energy</td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td>2</td>
        <td>45,000 energy</td>
        <td>10,000 ticks</td>
    </tr>
    <tr>
        <td>3</td>
        <td>135,000 energy</td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td>4</td>
        <td>405,000 energy</td>
        <td>40,000 ticks</td>
    </tr>
    <tr>
        <td>5</td>
        <td>1,215,000 energy</td>
        <td>80,000 ticks</td>
    </tr>
    <tr>
        <td>6</td>
        <td>3,645,000 energy</td>
        <td>120,000 ticks</td>
    </tr>
    <tr>
        <td>7</td>
        <td>10,935,000 energy</td>
        <td>150,000 ticks</td>
    </tr>
    <tr>
        <td>8</td>
        <td>—</td>
        <td>200,000 ticks</td>
    </tr>
    </tbody>
</table>
	
### 세이프 모드(Safe mode)
	
<table class=gameplay-info>
    <tbody>
    <tr>
        <td><strong>Effect</strong></td>
        <td>룸 안의 모든 적대 크립의 <code>attack</code>, <code>rangedAttack</code>, <code>rangedMassAttack</code>, <code>dismantle</code>, <code>heal</code>, <code>rangedHeal</code>, <code>attackController</code>, <code>withdraw</code> 메서드와, 적대 Power Creep의 <code>enableRoom</code>, <code>usePower</code> 메서드를 차단합니다. 동시에 오직 1개의 룸만 세이프 모드일 수 있습니다.<br/>
	세이프 모드가 활성화되면 모든 적대 크립은 시각적으로 반투명해지고 통과 가능한 상태가 되어, 여러분의 크립은 자유롭게 통과할 수 있습니다(반대로 적이 여러분을 통과하는 것은 불가).</td>
    </tr>
    <tr>
        <td><strong>Duration</strong></td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td><strong>Cooldown</strong></td>
        <td>50,000 ticks (Novice Areas에서는 쿨다운이 없으며, 첫 룸의 초기 Safe Mode도 쿨다운이 없습니다)</td>
    </tr>
    <tr>
        <td><strong>Generation</strong></td>
        <td>
            <ul>
                <li>컨트롤러 레벨이 올라갈 때마다 사용 가능한 활성화 1회를 생성</li>
                <li>크립이 ghodium 1,000을 사용해 생성할 수 있음</li>
                <li>컨트롤러가 다운그레이드되면 사용 가능한 활성화는 모두 리셋됨</li>
            </ul>
        </td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}

{% api_property isPowerEnabled 'boolean' %}
이 룸에서 power 사용이 활성화되어 있는지 여부입니다. 파워를 켜려면 [`PowerCreep.enableRoom`](#PowerCreep.enableRoom)을 사용하세요.

{% api_property level 'number' %}

현재 컨트롤러 레벨(0~8).

{% api_property progress 'number' %}

다음 레벨로 업그레이드하기 위한 현재 진행도입니다.

{% api_property progressTotal 'number' %}

다음 레벨에 도달하기 위해 필요한 진행도입니다.

{% api_property reservation 'object' %}

컨트롤러가 예약(reservation)되어 있다면 예약 정보 오브젝트입니다:

{% api_method_params %}
username : string
이 컨트롤러를 예약한 플레이어 이름.
===
ticksToEnd : number
예약이 종료될 게임 틱 시각.
{% endapi_method_params %}

{% api_property safeMode 'number' %}

남은 세이프 모드 틱 수 또는 undefined.

{% api_property safeModeAvailable 'number' %}

사용 가능한 세이프 모드 활성화 수입니다.

{% api_property safeModeCooldown 'number' %}

이 기간(틱) 동안에는 새 세이프 모드 활성화가 차단됩니다. 쿨다운이 비활성일 때는 undefined입니다.

{% api_property sign 'object' %}

컨트롤러에 사인(sign)이 있다면 사인 정보 오브젝트입니다:

{% api_method_params %}
username : string
사인한 플레이어 이름.
===
text : string
사인 텍스트.
===
time : number
게임 틱 기준 사인 시간.
===
datetime : Date
실제 날짜 기준 사인 시간.
{% endapi_method_params %}

{% api_property ticksToDowngrade 'number' %}

이 컨트롤러가 레벨을 1 잃게 되는 게임 틱 시각입니다. 이 타이머는 레벨 업/다운 시 50%로 설정되며, <code><a href="#Creep.upgradeController">Creep.upgradeController</a></code>로 증가시킬 수 있습니다. 다음 레벨로 업그레이드하려면 이 값이 꽉 차 있어야 합니다.

{% api_property upgradeBlocked 'number' %}

공격으로 인해 이 컨트롤러를 업그레이드할 수 없는 기간(틱)입니다. 이 기간 동안 세이프 모드도 사용할 수 없습니다.

{% api_method activateSafeMode '' A %}

```javascript
room.controller.activateSafeMode();
```

가능하다면 세이프 모드를 활성화합니다.

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 컨트롤러의 소유자가 아닙니다.
ERR_BUSY | 이미 세이프 모드인 다른 룸이 있습니다.
ERR_NOT_ENOUGH_RESOURCES | 사용 가능한 세이프 모드 활성화가 없습니다.
ERR_TIRED | 이전 세이프 모드가 아직 쿨다운 중이거나, 컨트롤러가 `upgradeBlocked` 상태이거나, 컨트롤러가 50% + 5000틱 이상으로 다운그레이드된 상태입니다.
{% endapi_return_codes %}

{% api_method unclaim '' A %}

```javascript
room.controller.unclaim();
```

점령(claim)한 컨트롤러를 다시 중립 상태로 만듭니다.

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 컨트롤러의 소유자가 아닙니다.
{% endapi_return_codes %}

