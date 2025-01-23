# StructureLab
<img src="img/lab.png" alt="" align="right" />

기본 광물에서 미네랄 화합물을 생성하고, 크립을 부스트와 언부스트할 수 있습니다.
[이 글](/resources.html)에서 미네랄에 대해 더 자세히 알아보십시오.

컨트롤러 레벨
1-5
6개의 실험실
7개의 실험실
8개의 실험실
비용
50,000
히트
500
용량
미네랄 단위 3,000개, 에너지 단위 2,000개
생성
반응당 광물 화합물 5개 단위 생산
반응 재충전 대기시간
반응에 따라 다름(이 [글](/resources 참조)

번역하지 마세요 : JavaScript, 대문자로만 된 단어도 번역하지 마세요., 이 기사를 한국어로 번역하십시오. : html))</td>
    </tr>
    <tr>
        <td><strong>입력 실험실까지의 거리</strong></td>
        <td>2 블록</td>
    </tr>
    <tr>
        <td><strong>부스트 비용</strong></td>
        <td>30 미네랄 단위, 신체 일부당 20 에너지 단위</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure. md %}

{% api_property cooldown 'number' %}



{ [lab]}의 게임 틱이 {[next reaction or unboost operation]}을(를) 기다려야 하는 시간입니다.



{% api_property energy 'number' '{"deprecated": true}' %}

{% api_property energyCapacity 'number' '{"deprecated": true}' %}
{% api_property mineralAmount 'number' '{"deprecated": true}' %}
{% api_property mineralType 'string' %}

번역하지 말아야 할 코드 : JavaScript를 번역하지 말고, 대문자로만 된 단어도 번역하지 마세요. {% api_property mineralCapacity 'number' '{"deprecated": true}' %}
                                                                                                                
Translate this article into Korean : {% api_property mineralCapacity 'number' '{"deprecated": true}' %}
Don't translate codes like JavaScript, don't translate words that are only in uppercase letters, Translate this article into Korean : {% api_property mineralCapacity 'number' '{"deprecated": true}' %}
                                                                                                                
{% api_property store '<a href="#Store">Store</a>' %}

```javascript
if(structure. store. getFreeCapacity(RESOURCE_ENERGY) > 0) {
    creep. transfer(structure, RESOURCE_ENERGY);
}
```


A [`Store`](#Store) object that contains cargo of this structure.
{% api_method boostCreep 'creep, [bodyPartsCount]' A %}


Boosts creep body parts using the containing mineral compound.

기어는 실험실의 인접한 위치에 있어야합니다.

{% api_method_params %}
creep : <a href="#Creep">Creep</a>
대상 기어입니다.
===
bodyPartsCount (선택사항) : number
해당 유형의 신체 부위를 향상시킬 bodyPartsCount. 신체 부위는 <code>TOUGH</code>인 경우 왼쪽에서 오른쪽으로, 그리고 다른 유형의 경우 오른쪽에서 왼쪽으로 계산됩니다. bodyPartsCount가 지정되지 않은 경우, 모든 적격 신체 부위를 향상시킵니다.
{% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다.
ERR_NOT_OWNER | 사용자가 실험실의 소유자가 아닙니다.
ERR_NOT_FOUND | 광물에는 해당 기어의 신체 부위를 향상시키기에 적합한 요소가 포함되어 있지 않습니다.

{% api_return_codes %}

{% endapi_method_params %}

### 반환값

다음 코드 중 하나:
{% api_return_codes %}
OK | 작업이 성공적으로 예약되었습니다. ERR_NOT_OWNER | 실험실 소유자가 아닙니다. ERR_NOT_ENOUGH_RESOURCES | 원본 실험실에 충분한 리소스가 없습니다. ERR_INVALID_TARGET | 대상이 올바르지 않은 실험실 객체입니다. ERR_FULL | 목표 중 하나는 더 이상 리소스를받을 수 없습니다. ERR_NOT_IN_RANGE | 대상이 너무 멀리 있습니다. ERR_INVALID_ARGS | 반응은이 리소스로 역전될 수 없습니다. ERR_TIRED | 실험실이 아직 식지 않았습니다. ERR_RCL_NOT_ENOUGH | Room Controller Level은 구조를 사용하는 데 불충분합니다.

코드를 번역하지 마십시오. JavaScript와 같이 번역하지 마십시오. 대문자로만 된 단어도 번역하지 마십시오. 이 기사를 한국어로 번역하십시오. : {% endapi_return_codes %}
{% api_method runReaction 'lab1, lab2' A %}



미네랄 화합물을 다른 두 실험실의 시약으로 생성합니다. 동일한 입력 연구소는 여러 출력 연구소에서 사용할 수 있습니다.

ERR_INVALID_TARGET | 타겟이 유효하지 않은 연구실 객체입니다.
ERR_FULL | 대상은 더 이상의 자원을받을 수 없습니다.
ERR_NOT_IN_RANGE | 타겟이 너무 멀리 떨어져 있습니다.
ERR_INVALID_ARGS | 반응은 해당 자원을 사용하여 실행될 수 없습니다.
ERR_TIRED | 연구소가 아직 식지 않았습니다.
ERR_RCL_NOT_ENOUGH | 룸 컨트롤러 레벨이 해당 구조물을 사용하기에 부족합니다. {% endapi_return_codes %}
{% api_method unboostCreep 'creep' A %}
즉시 크립트의 부스트를 제거하고 수명이 남은 크립트에 사용된 광물 화합물의 50%를 연구실과 인접한 사각형에 떨어 뜨립니다. 크립트는 반드시 연구실의 인접한 사각형에 있어야 합니다.

unboosting은 반응이 필요한 화합물을 만들기 위해 필요한 총 합계와 같은 시간의 쿨다운 시간을 필요로 합니다.

ERR_RCL_NOT_ENOUGH | 구조를 사용하기에 룸 컨트롤러 레벨이 불충분합니다.