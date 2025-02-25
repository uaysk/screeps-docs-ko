title: 초보자 구역

## 초보자 구역

새로운 플레이어들이 게임에서 시작하고 스크립스 세계의 베테랑을 만나지 않도록, 우리는 특별한 일시적인 구역들을 초보자를 위해 마련했습니다. 이 구역은 녹색으로 표시되며 "**초보자 구역**"라고 표시된 레이블이 마우스 포인터가 이동하는 곳에 나타납니다.

! [image](https://user-images.githubusercontent.com/61907583/124195563-74a2e2f7-3c9d-4dd8-b9da-4ffc92c4101b.png)

다음의 규칙이 이러한 방에서 적용됩니다:
* 해당 구역은 외부 플레이어가 들어오지 못하도록 파괴할 수 없는 벽으로 완전히 분리되어 있습니다. 초보자 구역에 들어가려면 직접 초기 포트를 배치해야 합니다.
* 게임클라이언트레벨(GCL) 3 이하의 플레이어만 이러한 방에서 게임을 시작할 수 있습니다.
* 각 플레이어는 [영토를 주장](/api/#Creep.claim)할 수 있습니다.

한국어로 번역: claimController) 방이 3개를 초과할 수 없다. 하지만 [예약](/api/#Creep. reserveController)된 방의 경우는 제한이 없다. 
*   [안전 모드](/defense. html) 활성화 사이에 쿨다운이 없다. 
*   [뉴커](/api/#StructureNuker)를 사용하는 것은 금지되어 있다.  

신참 구역에서는 주간 카운터가 표시된다. 해당 카운터는 만료되면 벽이 사라지고, 방들의 초록색 마크도 없어진다. 모든 제한이 취소되며, 섹터가 일반적인 세계의 영역으로 변한다. 구역이 개방된 후에는 주민들이 외부로의 확장을 시작할 수 있지만, 다른 사람들의 침략도 겪게 될 수 있다.  

대부분의 신참 구역은 4x4방이 있는 10x10 세컨으로 나뉜 쿼터들로 나눠져 있다. 전체 영역을 에워싸고 있는 공통의 바깥쪽 벽과, 이 "쿼터"를 교차하는 내부 벽들이 있다.

"한국어로 된 원문 보기" 상기 벽들의 개수는 초보자 구역의 총 개수보다 더 적습니다. 이것은 각 거주자가 게임에서 자신의 "쿼터"안에서만 다른 플레이어들과 대결을 시작하지만, 며칠 후에는 해당 구역의 모든 거주자를 만날 수 있음을 의미합니다.

## 소생 구역

유사한 종류의 또 다른 고립된 월드맵 영역은 **소생 구역(Respawn Areas)**입니다. 이들은 파란색으로 강조되어 있으며, Nukers만 사용할 수 없습니다. 모든 플레이어는 GCL이 허용하는 한 많은 방을 클레임할 수 있고 해당 영역에 처음으로 스폰을 배치할 수 있습니다. ! [chrome_2017-03-06_14-40-11. png](img/chrome_2017-03-06_14-40-11. png)

## 내부 구역에서의 영역 생성

우리는 초보자와 소생 영역 인구가 증가하고 있는지 모니터링하여 필요한 경우 새로운 영역을 개방합니다.

다음과 같이 충분히 크고, 인구가 적으며, 아무도 사용하지 않는 공통 세계의 이전에 열린 섹터에서 해당 영역을 할당받을 수 있습니다.

{% note info %}
원하는 방을 Novice 또는 Respawn Area로 변환되는 것을 원치 않으시면, 해당 방의 [예약](/api/#Creep. reserveController) 여부를 확인하시기 바랍니다.
{% endnote %}
내부 섹터에 Novice 또는 Respawn Area가 계획될 때, 이 섹터의 모든 비어있는 방은 다음과 같은 메시지와 함께 게임에서 표시됩니다:

! [chrome_2017-03-08_13-01-20. png](img/chrome_2017-03-08_13-01-20. png)

게임 상수 `SYSTEM_USERNAME`, `SIGN_NOVICE_AREA`, 그리고 `SIGN_RESPAWN_AREA`를 사용하여 프로그래밍적으로 중요한 방의 표시를 확인하고 해당 메시지가 감지되면 예약할 수 있습니다.