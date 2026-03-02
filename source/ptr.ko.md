title: 공개 테스트 렐름(PTR)
---

Public Test Realm(PTR)은 자체 월드 데이터, 플레이어 스크립트, 메모리, 설정을 가진 독립적인 게임 서버입니다. PTR은 두 가지 목적을 위해 만들어졌습니다:

1) 메인 서버에 곧 적용될 변경 사항과 새 기능을 테스트하기,  
2) 멀티 룸 환경에서 스크립트를 안전하게 테스트할 수 있는 플랫폼 제공하기.

---

<div style="text-align: center">

<p><strong style="font-size: 20px; background: #eee; padding: 10px 40px;">[ENTER](https://screeps.com/ptr/)</strong></p>

<p>[API Reference](http://docs-ptr.screeps.com/api/)</p>
</div>

---

PTR에서는 World Mode와 Simulation Mode를 모두 사용할 수 있습니다. 모든 게임 월드 데이터는 매주 월요일 0:00 UTC에 메인 서버에서 PTR로 복사되며, 이후 이전 PTR 데이터(플레이어 스크립트 포함)는 삭제됩니다. **PTR을 코드의 장기 보관 용도로 사용하지 마세요!**

PTR 신규 계정 등록은 차단되어 있습니다. 메인 서버에서 PTR로 데이터가 복사될 때마다 기존 플레이어 계정도 함께 복사됩니다. 계정 CPU 구독은 기본적으로 비활성화되어 있습니다. [주문 페이지](https://screeps.com/ptr/#!/order)에서 Activate 버튼을 클릭하면, 다음 PTR 리셋 전까지 무료 PTR 구독을 활성화할 수 있습니다.

또한 PTR에서는 어떤 구조물을 건설하든 비용이 에너지 1이며, 컨트롤러 업그레이드는 에너지 1000이 필요합니다. 이를 통해 테스트에 필요한 인프라를 빠르게 만들 수 있습니다.

로컬 머신에서 [grunt-screeps](/commit.html)를 사용해 스크립트를 커밋한다면, PTR에 코드를 커밋하기 위해 <code style="white-space: nowrap;">ptr: true</code> 옵션을 지정할 수 있습니다.

PTR에서의 엔진 코드 변경 사항은 주기적으로 npm의 프라이빗 서버 패키지 `ptr` 브랜치에 배포됩니다. 따라서 다음 명령으로 로컬에서 실행할 수 있습니다:

```
npm install screeps@ptr
```

