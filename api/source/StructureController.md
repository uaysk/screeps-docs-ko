# StructureController

컨트롤러 구조물을 주장하여 방에서 통제권을 잡으세요. 컨트롤러 구조물은 피해를 받거나 파괴되지 않습니다.

`[Room. controller]`(#Room. controller) 속성으로 주소를 설정할 수 있습니다.

### 안전 모드

<table class="gameplay-info">
    <tbody>
    <tr>
        <td><strong>효과</strong></td>
        <td>방을 내부에 있는 적대적인 크립들의 <code>attack</code>, <code>rangedAttack</code>, <code>rangedMassAttack</code>, <code>dismantle</code>, <code>heal</code>, <code>rangedHeal</code>, <code>attackController</code>, 그리고 <code>withdraw</code> 메소드들을 막습니다. 또한, 적대적인 Power Creeps의 <code>enableRoom</code>와 <code>usePower</code> 메소드들도 막습니다.</td>
</tr>
<tr>
    <td><strong>레벨</strong></td>
    <td>다음 단계로의 업그레이드가 필요한 에너지</td>
    <td>강등 카운트다운 타이머</td>
</tr>
<tr>
    <td>1</td>
    <td>200 에너지</td>
    <td>20,000 틱</td>
</tr>
<tr>
    <td>2</td>
    <td>45,000 에너지</td>
    <td>10,000 틱</td>
</tr>
<tr>
    <td>3</td>
    <td>135,000 에너지</td>
    <td>20,000 틱</td>
</tr>
<tr>
    <td>4</td>
    <td>405,000 에너지</td>
    <td>40,000 틱</td>
</tr>
<tr>
    <td>5</td>
    <td>1,215,000 에너지</td>
    <td>80,000 틱</td>
</tr>
<tr>
    <td>6</td>
    <td>3,645,000 에너지</td>
    <td>120,000 틱</td>
</tr>
<tr>
    <td>7</td>
    <td>10,935,000 에너지</td>
    <td>150,000 틱</td>
</tr>
<tr>
    <td>8</td>
    <td>—</td>
    <td>200,000 틱</td>
</tr>
</tbody>
</table>

한 번에 하나의 방만 안전 모드로 들어갈 수 있습니다. <br/>
	안전 모드가 활성화되면, 모든 적대적인 크립들은 시각적으로 투명해지고 통과할 수 있게 됩니다 - 당신의 크립들이 그것들을 자유롭게 움직일 수 있습니다 (하지만 그 반대는 아닙니다).

번역하지 마세요 : JavaScript, 대문자로 된 단어는 번역하지 마십시오. 이 기사를 한국어로 번역하십시오. : </td>
    </tr>
    <tr>
        <td><strong>Duration</strong></td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td><strong>Cooldown</strong></td>
        <td>50,000 ticks (no cooldown in Novice Areas, also no cooldown for initial Safe Mode in your first room)</td>
    </tr>
    <tr>
        <td><strong>Generation</strong></td>
        <td>
            <ul>
                <li>Each new controller level generates one available activation</li>
                <li>Can be generated by creeps using 1,000 ghodium</li>
                <li>All available activations are reset if the controller is downgraded</li>
            </ul>
        </td>
    </tr>
    </tbody>
}</table>

{% translate aligned/OwnedStructure.html %}
<tbody>
    <tr>
        <td><strong>Duration</strong></td>
        <td>20,000 ticks</td>
    </tr>
    <tr>
        <td><strong>Cooldown</strong></td>
        <td>50,000 ticks (노비스 지역에서는 쿨다운이 없으며, 첫 번째 룸의 안전 모드에서도 쿨다운이 없습니다.</td>
    </tr>
    <tr>
        <td><strong>Generation</strong></td>
        <td>
            <ul>
                <li>각각의 새로운 컨트롤러 레벨은 사용 가능한 활성화를 하나씩 생성합니다.</li>
                <li>1,000개의 고디움을 사용하여 크립트에 의해 활성화될 수 있습니다.</li>
                <li>컨트롤러가 하향된 경우, 모든 사용 가능한 활성화는 재설정됩니다.</li>
            </ul>
        </td>
    </tr>
</tbody>
</table>

현재 전원이 켜져 있는지 여부를 나타냅니다. `PowerCreep. enableRoom`을(를) 사용하면 컨트롤러의 전원을 켤 수 있습니다.

{% api_property level 'number' %}


현재 컨트롤러의 레벨입니다. 0에서 8 사이의 숫자가 표시됩니다.


{% api_property progress 'number' %}


현재 업그레이드를 진행하는 컨트롤러의 진도입니다.


{% api_property progressTotal 'number' %}


다음 단계로 넘어가기 위해 필요한 진도입니다.

{% api_property reservation 'object' %}


컨트롤러의 예약에 대한 정보(있는 경우)를 나타내는 객체입니다.

{% api_method_params %}
username : string
예약된 컨트롤러에 대한 플레이어 이름을 나타냅니다.

===
ticksToEnd : number
게임 틱의 수로 예약이 끝나는 시점을 말합니다.
{% endapi_method_params %}


{% api_property safeMode 'number' %}
남은 안전 모드 사용 횟수 또는 undefined.
{% api_property safeModeAvailable 'number' %}
안전 모드 활성화 가능 횟수.
{% api_property safeModeCooldown 'number' %}
새로운 안전 모드 활성화를 차단하는 시간(게임 틱)의 기간입니다. undefined는 쿨다운이 비활성인 경우입니다.
{% api_property sign 'object' %}
컨트롤러 서명 정보가 있을 경우 관리자 서명의 객체를 표시합니다.
{% api_method_params %}
username : string
플레이어 이름을 나타냅니다.
text : string
서명의 텍스트입니다.

==== time (number) ====
게임 틱 단위의 시간입니다. ==== datetime (Date) ====
실제 날짜를 나타냅니다. {% endapi_method_params %}

{% api_property ticksToDowngrade 'number' %}
컨트롤러가 한 레벨 내려갈 때의 게임 틱 수입니다. 이 타<|im_start|> type: content
타임라인에서 컨트롤러가 한 단계 올라가거나 내려갈 때, 이 값은 50%로 설정되며, <code><a href="#Creep. upgradeController">Creep. upgradeController</a></code>를 사용하여 증가시킬 수 있습니다. 컨트롤러가 최고 레벨에 도달해야만 컨트롤러가 한 단계 올라갑니다. {% api_property upgradeBlocked 'number' %}
컨트롤러를 공격으로 인해 업그레이드할 수 없을 때의 게임 틱 수입니다. 이 기간 동안 안전 모드도 사용할 수 없습니다.

컨트롤러에서 safe mode를 해제합니다.


### Return value

One of the following codes:
{% api_return_codes %}
OK | Safe mode has been deactivated successfully. 
ERR_NOT_OWNER | You are not the owner of this controller. 
ERR_BUSY | There is another room in safe mode already. 
ERR_NOT_ENOUGH_RESOURCES | There is no safe mode deactivations available. 
ERR_TIRED | The previous safe mode is still cooling down, or the controller is `upgradeBlocked`, or the controller is downgraded for 50% plus 5000 ticks or more. 
{% endapi_return_codes %}
```javascript
room.

컨트롤러를 다시 중립으로 만들기 위해 controller. unclaim();
```

### 반환값

{% api_return_codes %} 중 하나의 코드:
OK | 작업이 성공적으로 예약되었습니다. ERR_NOT_OWNER | 사용자가 컨트롤러의 소유권을 갖고 있지 않습니다.