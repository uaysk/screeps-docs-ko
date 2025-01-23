안전 모드 활성화`](/api/#StructureController.SafeModeActivated). 그런 다음 다시 활성화하려면 `StructureController.SafeModeDeactivated`를 호출해야합니다.

## 알람 설정

Screeps에서는 **자동으로** 실행되지만, 나중에 취소할 수 있습니다. 이것은 당신의 방을 떠날 경우를 대비하여 설정해야합니다.

! [](img/alarms. png)

## 알람 해제

위에서 언급했듯이, 실행되지 않도록 설정할 수 있습니다. 그러나 어떤 경우에는 즉시 해제해야합니다. 예를 들어, 방을 출구로 만들고 싶지 않은 경우 (이것은 자동으로 발생하므로 곧 취소되었습니다).

## 함정

그러나 **무료**가 아닌 방법도 있습니다. 침입자를 막는데 더 효과적인 것들이 있습니다. 예를 들어, 당신은 함정을 설치할 수 있습니다!

## 보안관

게임의 초기 단계에서는 **경비원**이 필요하지 않습니다. 더 많은 보호가 필요한 곳에서만 사용할 수 있습니다. 그러나 경비원을 고용하면 방 안에 들어오는 침입자의 수를 제한하여 보호 효과가 증가합니다.

## 추가 보너스:

- **벽돌로 된 장벽**은 아군을 막는데 사용할 수 없습니다.
- **도시의 경비원**이 당신에게 더 잘 작동합니다.

이 방법은 매우 쉽고 간단하지만, 방어력이 약합니다. 무기와 장비를 획득할 수 있는 초보자 구역과 같은 보호막을 제공하므로 플레이어들의 주요 타겟이 됩니다.

## Creep waves

Creeps는 시간이 지남에 따라 점차 강해집니다. 초보자 구역을 넘어서면, 적의 무기와 장비를 획득할 수 있는 곳으로 진입하게 됩니다.

이러한 상황에서, 충분히 강력한 방어시설을 구축해야 합니다. 예를 들면, 벽돌 벽과 도깨비 함정으로는 도저히 버텨내기 어려울 것입니다. 당신은 최전방에 있는 적들을 상대할 수 있는 충분한 무기와 장비를 제공해야 합니다.

## 안전 모드(Safe Mode)

만약 여러분의 방어시설이 충분히 강력하지 않고, 적들이 계속해서 공격을 감행한다면, 여러분은 안전 모드로 돌입할 수 있습니다.

Safe mode는 새로운 보호막을 구축하기 위한 시간을 벌어주고, 방어시설이 강화될 때까지 적들의 공격을 지연시킬 수 있습니다. 안전 모드를 활성화하면, 모든 파티원은 일정 시간 동안 방어시설로부터 벗어나게 되고, 적들의 공격을 받지 않습니다.

## 안전 모드(Safe Mode)를 활성화하는 법

`activateSafeMode`](/api/#StructureController. activateSafeMode):

Game. rooms. W1N1. controller. activateSafeMode()

A controller obtains one activation with each new level. 나중에, 당신은 컨트롤러에 도움을 받아 ghodium 자원을 사용하여 더 많은 활성화를 할 수 있습니다. `Creep. generateSafeMode`](/api/#Creep. generateSafeMode).

안전 모드는 마지막 수단의 방어책입니다. 모든 것이 실패했을 때, 적들에게 무기와 장비를 제공하지 않으면서 강력한 보호막을 구축할 수 있는 시간을 벌어주기 위함입니다.

여러분은 안전 모드가 활성화된 동안에도 방어시설을 강화하고, 더 많은 무기와 장비를 제공할 수 있습니다. 그러나 한 번에 한 개의 방에서만 활성화될 수 있습니다. 보다 강력한 방어책이 구축되면, 안전 모드를 해제하고 보다 적극적인 공격으로 돌아가야 합니다.

그러나 차이점이 있습니다: 초기의 벽은 바로 문에 세워져서 외부 크리퍼를 막았지만, 새로운 벽은 방 가장자리에서 **2칸** 이상 떨어진 곳에 세울 수 있으며 적대적인 크리퍼는 여전히 방에 들어가 요새를 파괴할 수 있습니다. 따라서 상대방이 많은 시간을 들여 요새를 파괴하게 만드는 것이 중요합니다.

(image: defense1. png)

벽을 건설한 후에 그 사각형은 **1점의 피해력**만 가지고 있습니다. 따라서 공격자들이 적어도 몇 시간(또는 심지어 며칠) 동안 요새를 파괴하기 어렵게 만들고 싶다면, 작업자의 도움과 `수리`() 액션을 통해 요새를 강화해야 합니다. 요새를 수리할 때 적용되는 최대 피해력은 **30억**입니다.

예: 만약 많은 자원을 소비한다면, 그러한 성벽은 여러 날 동안 공격에 견디어낼 수 있습니다. 게다가 이것은 단지 하나의 사각형인데 반해, 당신은 많은 줄로 된 성벽을 건설할 수 있습니다!

## 수동적 방어: 램파트

그러나, 성벽에는 상당한 단점이 하나 있습니다: 그것은 적대적인 크립들만 아니라, 자신의 것도 막을 수 있습니다. 출구로의 길목에 성벽을 건설한다면 당신의 자신의 확장으로부터 방해를 받게 될 것입니다.

이것이 바로 당신이 또 하나의 수동적인 방어 수단을 가지고 있는 이유입니다 – **램파트**. 그들은 적대적인 크립들에게 움직임을 막아주기 위해 성벽과 같이 행동하며, 자신의 크립들은 자유롭게 통과할 수 있습니다. 더군다나, 램파트 사각형에 있는 크립은 완전히 어떤 종류의 공격으로부터도 무적입니다. 방어된 상태로서, 그것은 여전히 상대를 공격할 수 있습니다.

![defense2.jpg](attachment://imgs/1024x768_d9582e3f5c2a03b9b20f5196bfa785c1_image1.jpg)

Therefore, it is crucial to have an active defense system in place. In this case, we are talking about towers.

Towers are units that can actively defend a building from enemy attacks. They are controlled by players and can be positioned wherever they want as long as it's within the building's range. 

When you deploy a tower, choose its level wisely because it determines how many hits the tower can take before being destroyed.  The higher the level, the more expensive it is to build, but also the stronger it will be in defense. 

Towers have **3 hit points** initially and need to be fortified by players after deployment.  The maximum number of towers depends on the building's level.  For example, a level 5 building can deploy up to 5 towers. 

Unlike ramparts, towers do not lose hit points over time.  They will stay active and continue defending the building as long as they are not destroyed by enemy attacks or players who decide to dismantle them.

따라서 요새만으로는 충분하지 않고 필요에 따라 방어 시스템을 설치해야합니다. ! [ [img] (defense3. png) ] (defense3. png)

룸 레벨 3부터 활성화할 수 있는 **타워**를 사용하여 적극적으로 방어할 수 있습니다. 성벽과 요새와 달리, 이 방어 수단은 능동적인데, 타워의 공격 기능을 사용하는 것은 에너지를 소비하기 때문입니다. 그것은 크립을 공격할 수도 있고 (/api/#StructureTower. attack) 치유할 수도 있고, (/api/#StructureTower. heal) 구조물을 복원할 수도 있습니다 (예를 들어 벽과 요새가 파손된 경우).

{% note info %}
타워의 사정거리는 전체 방에 영향을 미치지만, 표적까지의 거리가 길어질수록 효과가 약해집니다. 항상 잠재적인 목표물과 최대한 근접하게 타워를 배치해야합니다.

}

각 작업은 **10 에너지 단위**를 소비합니다. 따라서 크립이 탑의 에너지 공급을 살피고 필요할 경우 보충하도록 합니다.

방을 가진 룸에서 적 크립을 공격하는 간단한 코드의 예:

```
function defendRoom(roomName) {
    var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
    if (hostiles.length > 0) {
        var username = hostiles[0].owner.username;
        Game.notify(`사용자 ${username} 발견! 룸 ${roomName}`);
        var towers = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
        towers.forEach(tower => tower.useAbility(TOWER_ATTACK));
    }
}
```

공격(적군[0]);
        }

## 능동방어: 크립
타워는 공격에 대한 편리한 능동방어 수단이지만, 어떠한 공격에도 완전히 효과적인 해결책은 아니다. 보안을 잘 갖추고 있는 크립 침입자 군단은 여러 개의 타워에서 근거리에서 발사한 공격에도 견뎌낼 수 있다. 이런 공격을 막으려면 대칭적인 반격, 즉 크립 방어군이 필요하다. ! [file:defense4.png](https://image.ibb.co/KYx51F/defense4_250.png)
램파르트는 같은 사각형 안에 있는 모든 것을 보호할 수 있는 능력이 있기 때문에, 공격당한 사각형을 붙어 있는 크립 방어군과 램파트로 덮인 방어 체계를 구축해야 한다. 그러나 평화 시기에도 람파트를 지속적으로 건설하는 것은 자원을 낭비하는 일이다. 공격을 받을 때만 신속하게 건설하는 것이 더 좋다.

AI 논리를 이러한 유형의 침입자에게 적용하는 것은 매우 복잡할 수 있지만 실제로 모든 종류의 침입을 방어할 수 있도록 방을 보호하는 유일한 방법입니다.

{% note info %}
NPC 침입자 몬스터(invader creeps)를 방에 생성하여 방어 체계를 테스트해 볼 수 있습니다(/invaders.html).
{% endnote %}

따라서, 적절한 행동 논리가 포함된 훌륭한 방어 체계를 구상하면 방을 공격자로부터 매우 안전하게 지키는데 도움이 됩니다. 그러나, 항상 방에 틀어박혀 있으려고 해서는 안됩니다. 아시다시피, 가장 좋은 방어책은 공격입니다.