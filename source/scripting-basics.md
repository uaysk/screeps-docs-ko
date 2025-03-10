스크립트 작성 기초

Screeps를 위한 스크립트 작성은 다른 JavaScript 응용 프로그램을 작성하는 것과 비슷합니다. 게임 내에서 특별한 편집기에 자신의 스크립트를 작성하면 오프라인일지라도 지속적으로 실행됩니다(시뮬레이션 룸 제외).

게임 스크립트는 각 게임 틱마다 루프에서 실행됩니다. 게임 틱 기간은 현재 서버의 부하에 따라 달라집니다. 스크립트의 목표는 게임 내의 현재 상황을 처리하고 크립과 스폰에 명령을 전달하는 것입니다. 명령은 즉시 실행되지 않습니다. 대신 게임이 모든 플레이어의 스크립트를 실행한 후 나중에 명령을 실행합니다. 자세한 내용은 [게임 루프, 시간 및 틱 이해하기](/game-loop.html) 문서를 참조하십시오.

해당 스크립트의 실행 기간은 귀하의 계정에서 사용할 수 있는 CPU 시간으로 제한됩니다. 이 기간을 초과하면 스크립트가 중지되며, 예외적인 경우로 Simulation Room에서는 스크립트를 무제한 실행할 수 있습니다.