# StructureLab

<img src="img/lab.png" alt="" align="right" />

기본 미네랄로부터 미네랄 화합물을 생산하고, 크립을 부스트/언부스트합니다.
미네랄에 대해서는 [이 문서](/resources.html)에서 더 알아보세요.

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1-5</td>
        <td>—</td>
    </tr>
    <tr>
        <td>6</td>
        <td>3 labs</td>
    </tr>
    <tr>
        <td>7</td>
        <td>6 labs</td>
    </tr>
    <tr>
        <td>8</td>
        <td>10 labs</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>50,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>500</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>3000 mineral units, 2000 energy units</td>
    </tr>
    <tr>
        <td><strong>Produce</strong></td>
        <td>반응(reaction)당 미네랄 화합물 5</td>
    </tr>
    <tr>
        <td><strong>Reaction cooldown</strong></td>
        <td>반응에 따라 다름([이 문서](/resources.html) 참고)</td>
    </tr>
    <tr>
        <td><strong>Distance to input labs</strong></td>
        <td>2 squares</td>
    </tr>
    <tr>
        <td><strong>Boost cost</strong></td>
        <td>바디 파트 1개당 미네랄 30, 에너지 20</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure.ko.md %}

{% api_property cooldown 'number' %}

다음 반응 또는 언부스트 작업이 가능해질 때까지 랩이 기다려야 하는 게임 틱 수입니다.

{% api_property energy 'number' '{"deprecated": true}' %}

[`.store[RESOURCE_ENERGY]`](#StructureExtension.store)에 대한 별칭(alias)입니다.

{% api_property energyCapacity 'number' '{"deprecated": true}' %}

[`.store.getCapacity(RESOURCE_ENERGY)`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_property mineralAmount 'number' '{"deprecated": true}' %}

[`lab.store[lab.mineralType]`](#StructureExtension.store)에 대한 별칭(alias)입니다.

{% api_property mineralType 'string' %}

랩에 들어 있는 미네랄 타입입니다. 랩은 동시에 한 종류의 미네랄만 담을 수 있습니다.

{% api_property mineralCapacity 'number' '{"deprecated": true}' %}

[`lab.store.getCapacity(lab.mineralType || yourMineral)`](#Store.getCapacity)에 대한 별칭(alias)입니다.

{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep.transfer(structure, RESOURCE_ENERGY);
}
```

이 구조물의 적재물을 담고 있는 [`Store`](#Store) 오브젝트입니다.

{% api_method boostCreep 'creep, [bodyPartsCount]' A %}

담고 있는 미네랄 화합물로 크립의 바디 파트를 부스트합니다. 크립은 랩에 인접한 칸에 있어야 합니다.

{% api_method_params %}
creep : <a href="#Creep">Creep</a>
대상 크립.
===
bodyPartsCount (optional) : number
부스트할 해당 타입 바디 파트 개수. 바디 파트는 <code>TOUGH</code>는 왼쪽→오른쪽, 그 외 타입은 오른쪽→왼쪽으로 카운트됩니다. undefined이면 가능한 모든 바디 파트를 부스트합니다.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 랩의 소유자가 아닙니다.
ERR_NOT_FOUND | 랩에 있는 미네랄이 크립의 어떤 바디 파트도 부스트할 수 없습니다.
ERR_NOT_ENOUGH_RESOURCES | 랩에 에너지 또는 미네랄이 충분하지 않습니다.
ERR_INVALID_TARGET | 대상이 유효한 creep 오브젝트가 아닙니다.
ERR_NOT_IN_RANGE | 대상이 너무 멉니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

{% api_method reverseReaction 'lab1, lab2' A %}

미네랄 화합물을 다시 시약(reagents)으로 분해합니다. 같은 출력 랩(output labs)은 여러 소스 랩(source labs)이 함께 사용할 수 있습니다.

{% api_method_params %}
lab1 : <a href="#StructureLab">StructureLab</a>
첫 번째 결과 랩(result lab).
===
lab2 : <a href="#StructureLab">StructureLab</a>
두 번째 결과 랩(result lab).
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 랩의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 소스 랩에 자원이 충분하지 않습니다.
ERR_INVALID_TARGET | 대상이 유효한 랩 오브젝트가 아닙니다.
ERR_FULL | 대상 중 하나가 더 이상 자원을 받을 수 없습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멉니다.
ERR_INVALID_ARGS | 이 자원으로 반응을 되돌릴 수 없습니다.
ERR_TIRED | 랩이 아직 쿨다운 중입니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

{% api_method runReaction 'lab1, lab2' A %}

다른 두 랩의 시약(reagents)으로 미네랄 화합물을 생산합니다. 같은 입력 랩(input labs)은 여러 출력 랩(output labs)이 함께 사용할 수 있습니다.

{% api_method_params %}
lab1 : <a href="#StructureLab">StructureLab</a> (lab)
첫 번째 소스 랩.
===
lab2 : <a href="#StructureLab">StructureLab</a> (lab)
두 번째 소스 랩.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 랩의 소유자가 아닙니다.
ERR_NOT_ENOUGH_RESOURCES | 소스 랩에 자원이 충분하지 않습니다.
ERR_INVALID_TARGET | 대상이 유효한 랩 오브젝트가 아닙니다.
ERR_FULL | 대상이 더 이상 자원을 받을 수 없습니다.
ERR_NOT_IN_RANGE | 대상이 너무 멉니다.
ERR_INVALID_ARGS | 이 자원으로 반응을 실행할 수 없습니다.
ERR_TIRED | 랩이 아직 쿨다운 중입니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

{% api_method unboostCreep 'creep' A %}

크립의 부스트를 즉시 제거하고, 크립의 남은 수명과 무관하게, 부스트에 사용된 미네랄 화합물의 50%를 바닥에 드랍합니다. 크립은 랩에 인접한 칸에 있어야 합니다.
언부스트(unboost)는 크립에 적용된 모든 화합물을 생산하기 위해 필요한 반응 시간의 총합만큼 쿨다운을 요구합니다.

{% api_method_params %}
creep : <a href="#Creep">Creep</a>
대상 크립.
{% endapi_method_params %}

### 반환 값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 이 랩 또는 대상 크립의 소유자가 아닙니다.
ERR_INVALID_TARGET | 대상이 유효한 Creep 오브젝트가 아닙니다.
ERR_TIRED | 랩이 아직 쿨다운 중입니다.
ERR_NOT_IN_RANGE | 대상이 너무 멉니다.
ERR_NOT_FOUND | 대상에 부스트된 파트가 없습니다.
ERR_RCL_NOT_ENOUGH | 이 구조물을 사용하기에 Room Controller Level이 부족합니다.
{% endapi_return_codes %}

