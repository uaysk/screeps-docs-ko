전력은 게임의 끝 부분에서 당신의 식민지를 발달시키는데 완전히 새로운 길을 열어줍니다: 영토의 크기가 아닌, 효과성을 증대시키는 쪽으로. 이것은 내용물이 무엇인지를 보여줍니다:

* "전력"이라고 불리우는 특별한 자원을 채굴합니다.

* 채굴된 자원은 8단계의 방에서 처리되며, 당신의 계정 [글로벌 전력 레벨](/api/#StructurePowerBank)을 증가시킵니다.

* GPL은 특별한 영웅 유닛인 "파워크립(Power Creeps)"의 창조와, 레벨과 스킬들의 개발을 허용합니다.

## 전력 뱅크

![power_banks.gif](power_banks.gif)

전력은 중립적인 빈 방에서 때로는 나타나는, 지도를 분할하는 구조물들인 [파워 뱅크](/api/#StructurePowerBank)로부터 수집될 수 있습니다.

각 전력 은행에는 구조물을 파괴함으로써 획득할 수 있는 무작위의 양의 전원이 포함되어 있습니다. 50%의 피해를 입히면 구조물에 적용되므로 치료자가 팀에 있도록 주의하십시오.

또한 마켓에서 전력을 구매할 수 있습니다. NPC 상인이나 다른 플레이어로부터 구매하실 수 있습니다.

## Global Power Level

8개의 레벨이 있는 방은 [Power Spawn](/api/#StructurePowerSpawn)이라는 구조물에 접근할 수 있게 해줍니다. 50 단위의 에너지와 1 단위의 전원 자원을 합치면, 글로벌 **전력 레벨**이 올라가는데 사용할 수 있습니다.

PC의 GPL 레벨이 올라가면 PC를 개발하는데 사용할 수 있습니다. 게임에서 GPL을 볼 수 있는 곳은 [개요 페이지](https://screeps.com/a/#! /overview)이고, API를 통해서도 [`Game.gpl`](/api/#Game.gpl) 속성으로 볼 수 있습니다.

## Power Creeps

<video autoplay loop muted playsinline>
    <source src="img/pc_anim.mp4" type="video/mp4">
</video>

Power Creeps (PC)는 전략 게임에서 영웅 유닛이 일반 유닛과 다른 것처럼 게임 내의 일반 크립과 다른 게임 유닛입니다.

PC는 불멸입니다. 새로 생성된 PC는 계정에 연결되며, 게임 세계에서 스폰되지 않더라도 그 계정에 영구적으로 존재합니다.

이것은 자연스러운 죽음으로도, 강제로 사망했을 때에도 계정으로 돌아가며, 8시간 뒤에 다시 소환할 수 있습니다.
PC는 3개의 클래스 중 하나를 선택할 수 있습니다:
<table>
<tr>
<td style="padding: 10px; background: #141414"><img src="img/operator. png"></td>
<td><strong>오퍼레이터</strong><br>후방에서 기지를 수비하는 크립으로, 공격 작전에서 사보타주를 할 때도 사용됩니다.</td>
</tr>
<tr style="background: none">
<td style="padding: 10px; background: #141414"><img src="img/commander. png"></td>
<td><strong>커맨더</strong><br>이 크립은 단독으로는 별로 유용하지 않지만, 팀 플레이를 통해 효과를 극대화합니다. 자신의 진영 크립들에게 영향을 주고 조종할 수 있습니다.</td>
</tr>
</table>

</td>
</tr>
<tr>
<td style="padding: 10px; background: #141414"><img src="img/executor. png"></td>
<td><strong>Executer</strong><br>
이 겁쟁이 계급은 혼자서 일하기를 선호합니다. 그것의 기술로 인해, 당신의 경제에서나 방어 또는 공격 시 전쟁 기계로서 매우 효과적인 수행자입니다. </td>
</tr> 
</table>
<br>
PCs는 0부터 25개의 발달 레벨 및 스킬(소위 "**파워**," 슈퍼 파워와 같은)을 가지고 있습니다. 새로운 레벨을 하나씩 얻으면서, 사용할 수 있는 새로운 스킬을 추가하거나 기존의 스킬 중 한 개의 레벨을 올릴 수 있습니다. 동일한 방식으로, 기존 PC의 한 수준을 높이는데 하나의 자유 Global Power Level을 사용할 수 있습니다. 마찬가지로, 0 레벨의 새로운 PC를 만들기 위해 하나의 무료 Global Power Level을 활용할 수 있습니다.

PC 기술은 컨트롤러가없는 방이나 전원을 사용할 수있는 컨트롤러가있는 방에서도 사용할 수 있습니다 (`PowerCreep. enableRoom` 참조: //api/#PowerCreep. enableRoom). PC의 나이가 들고 노인으로 죽을 수는 있지만, 단순히 어떤 Power Spawn 또는 Power Bank에 접근하여 `PowerCreep. renew` (/api/#PowerCreep. renew)를 실행하면 비용없이 즉시 그들의 수명을 복원 할 수 있습니다. 이는 지도상에서 먼 거리를 이동할 수 있게합니다. Power Bank를 제 시간에 충전하면 가능합니다.
{% note warn %}
**주의**: Power Creep을 계정에서 삭제하여 GPL을 무료로 사용할 수 있지만, 이는 귀하의 GPL을 **1 단위 감소**시킵니다! PC를 계정에서 삭제하려면 24시간이 걸립니다.

{% endnote %}

If you want to 검토하여 자신의 PC 구성을 만들고 싶다면, 부탁드립니다. **실험 기간**을 활성화하십시오. 24 시간 이내에 GPL을 잃지 않으며 PC를 즉시 삭제 및 재구성 할 수 있습니다. 각 플레이어는 30 번의 실험 기간을 부여받습니다. 게임에서 플레이어의 PC 구성을 검토해야하는 균형 조정 또는 새로운 스킬이 도입되면 시간을 내어 이를 보충 할 수 있습니다.

## 능력

### 운영자

{% powers operator %}

### 사령관

개발 중입니다.

### 집행자

개발 중입니다.