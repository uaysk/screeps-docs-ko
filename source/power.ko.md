title: 파워
---

Power는 콜로니의 발전에서 완전히 새로운 길을 여는 엔드게임 메커니즘입니다. 정복한 영토의 “규모”가 아니라 콜로니의 “효율”을 높이는 방향으로 나아가게 합니다. 구성은 다음과 같습니다:

* “power”라는 특수 자원을 채굴합니다.
* 채굴한 자원은 RCL 8 룸에서 처리되어 계정의 Global Power Level(GPL)을 올립니다.
* GPL은 Power Creeps라는 특별한 영웅 유닛을 만들 수 있게 해주며, 그 레벨과 스킬을 성장시키게 해줍니다.

## 파워 뱅크(Power Banks)

![](img/power_banks.gif)

Power는 때때로 지도에서 거주 섹터 사이를 나누는 중립 빈 룸에 등장하는 [Power Banks](/api/#StructurePowerBank)라는 구조물에서 획득할 수 있습니다. 각 Power Bank에는 랜덤한 양의 power가 들어 있으며, 구조물을 파괴하면 획득할 수 있습니다. 이 구조물은 고에너지 성질 때문에, 가한 피해의 50%가 공격한 크립에게 반사됩니다. 따라서 팀에 힐러를 포함시키는 것을 잊지 마세요.

또한 마켓에서 NPC 트레이더나 다른 플레이어로부터 power를 구매할 수도 있습니다.

## 글로벌 파워 레벨(Global Power Level)

![](img/gpl.png)

RCL 8 룸에서는 [Power Spawn](/api/#StructurePowerSpawn)이라는 구조물에 접근할 수 있습니다. 이 구조물은 [`StructurePowerSpawn.processPower`](/api/#StructurePowerSpawn.processPower) 메서드를 실행할 수 있게 해줍니다. power 1과 에너지 50을 합쳐 처리하면 **Global Power Level** 진행도가 증가합니다. 새로운 GPL 레벨에 도달하면, 이를 사용해 **Power Creeps**를 성장시키는 기능이 언락됩니다.

게임 내 [Overview 페이지](https://screeps.com/a/#!/overview)에서 GPL을 확인할 수 있으며, API의 [`Game.gpl`](/api/#Game.gpl) 속성으로도 확인할 수 있습니다.

## 파워 크립(Power Creeps)

<video autoplay loop muted playsinline>
    <source src="img/pc_anim.mp4" type="video/mp4">
</video>

[Power Creeps](/api/#PowerCreep)(PC)는 전략 게임에서 영웅 유닛이 일반 유닛과 다른 것처럼, 일반 크립과는 다른 게임 유닛입니다.

PC는 불멸입니다. 새로 만든 PC는 계정에 귀속되며, 게임 월드에 스폰되어 있지 않더라도 계정에 존재합니다. PC가(노화로든 강제로든) 죽으면, 계정으로 되돌아가며 8시간 쿨다운이 끝난 뒤 어떤 Power Spawn에서든 다시 스폰할 수 있습니다.

PC는 3가지 클래스 중 하나에 속합니다:

<table>
<tr>
<td style="padding: 10px; background: #141414"><img src="img/operator.png"></td>
<td><strong>Operator</strong><br>
주로 기지 후방에서 일하는 크립이지만, 공격 작전에서 사보타주(교란) 용도로도 사용할 수 있습니다.
</td>
</tr>
<tr style="background: none">
<td style="padding: 10px; background: #141414"><img src="img/commander.png"></td>
<td><strong>Commander</strong><br>
단독으로는 유용성이 크지 않지만, 팀 플레이어입니다. 아군과 적군의 일반 크립에 영향을 주고 효과를 부여합니다.
</td>
</tr>
<tr>
<td style="padding: 10px; background: #141414"><img src="img/executor.png"></td>
<td><strong>Executor</strong><br>
혼자 일하는 것을 선호하는 클래스입니다. 스킬 덕분에 경제를 수행하거나, 방어/공격 시 전쟁 머신으로 매우 효과적입니다.
</td>
</tr>
</table>

PC는 0~25의 성장 레벨과 스킬(일명 “**powers**”, 초능력 같은 것)을 가질 수 있습니다. 새 레벨을 얻을 때마다 사용 가능한 새 스킬을 추가하거나, 기존 스킬 중 하나의 레벨을 올릴 수 있습니다.

기존 PC의 레벨을 올리려면 비어 있는 Global Power Level 1이 필요합니다. 같은 방식으로, 비어 있는 Global Power Level 1을 사용해 레벨 0의 새 PC를 만들 수도 있습니다.

PC 스킬은 컨트롤러가 없는 룸, 또는 파워가 활성화된 컨트롤러가 있는 룸에서 사용할 수 있습니다([`PowerCreep.enableRoom`](/api/#PowerCreep.enableRoom) 참고).

PC는 노화로 죽을 수도 있지만, 어떤 Power Spawn 또는 Power Bank에 접근해 [`PowerCreep.renew`](/api/#PowerCreep.renew)를 실행하면 즉시 무료로 수명을 회복할 수 있습니다. 이를 통해 지도에서 먼 거리를 이동할 수 있는데, 도중에 충전할 Power Bank를 제때 찾을 수 있어야 합니다.

{% note warn %}
<strong style="color: #f33">주의</strong>: 계정에서 Power Creep을 삭제하면(사용 중인 GPL을 회수해 다른 PC를 만들기 위해), **GPL이 1 감소합니다**! PC 삭제는 24시간이 걸립니다.
{% endnote %}

PC 구성을 검토하고 처음부터 다시 만들고 싶다면 **실험 기간(experimentation period)** 을 활성화하세요. 24시간 동안 GPL을 잃지 않고 PC를 즉시 삭제/재생성할 수 있게 됩니다. 각 플레이어에게는 30회의 실험 기간이 제공됩니다. 밸런스 조정이나 새 스킬 도입 등으로 플레이어가 PC 구성을 다시 검토해야 하는 경우, 앞으로 일부가 추가로 지급될 수도 있습니다.

## 파워(Powers)

### Operator

{% powers operator %}

### Commander

개발 중.

### Executor

개발 중.

