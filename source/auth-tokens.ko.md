---
title: 인증 토큰(Authentication Tokens)
---

Screeps에는 문서화된 공개 Web API가 없습니다. 하지만 서버가 클라이언트와 통신하는 데 사용하는, 문서화되지 않은 HTTP 엔드포인트를 사용하고 싶다면 괜찮습니다. 이를 더 쉽게 하기 위해 **인증 토큰(authentication tokens)** 시스템을 개발했습니다.

일반 웹 브라우저 클라이언트는 로그인 요청을 포함해 일부 요청을 백그라운드에서 검증하기 위해 Google Invisible reCAPTCHA를 사용합니다. Steam 클라이언트도 비슷한 목적을 위해 암호화된 로컬 Steam 연결을 사용합니다. 사람의 상호작용이 필요 없는 외부 도구를 만들고 있다면, CAPTCHA를 풀지 않고도 요청을 보낼 수 있도록 지속형(persistent) auth token을 생성할 수 있습니다. 이 토큰은 한 번 생성되며 만료 시간이 없습니다.

## Auth Token 사용하기

[계정 설정](https://screeps.com/a/#!/account/auth-tokens)에서 auth token을 생성할 수 있습니다:

![](img/auth_tokens.png)

**전체 권한(full access)** 토큰은 일반 로그인 자격 증명과 동일한 범위의 접근 권한을 가집니다. 또한 접근 범위를 **선택한 엔드포인트**, **웹소켓 이벤트**, **메모리 세그먼트**로 제한할 수도 있습니다.

이 토큰을 사용하는 방법은 두 가지가 있으며, 둘 다 동일하게 유효합니다:

* 요청에 `X-Token` 헤더를 설정:
   ```
   X-Token: 3bdd1da7-3002-4aaa-be91-330562f54093
   ```
   
* URL에 `_token` 쿼리 파라미터를 추가:
   ```
   https://screeps.com/api/user/name?_token=3bdd1da7-3002-4aaa-be91-330562f54093
   ```

## 레이트 리미팅(Rate Limiting)

브라우저 또는 Steam 클라이언트가 보내는 일반 요청은 레이트 리미팅이 **적용되지 않습니다**.

하지만 auth token으로 인증된 모든 요청은 레이트 리미팅 규칙의 대상입니다. 제한 용량을 초과하면 응답으로 `429` HTTP 코드를 받게 됩니다:

```
HTTP/1.1 429 Too Many Requests

Rate limit exceeded, retry after 51243ms
```

아래 3개의 HTTP 헤더는 정보 제공 목적이며, 여러분 쪽에서 레이트 리미팅을 처리하는 데 사용할 수 있습니다:

| Header Name | Description |
|-|-|
| `X-RateLimit-Limit` | 제한 윈도우당 허용되는 최대 요청 수 |
| <nobr>`X-RateLimit-Remaining`</nobr> | 현재 제한 윈도우에서 남은 요청 수 |
| `X-RateLimit-Reset` | 현재 제한 윈도우가 리셋되는 시각(UTC epoch seconds) |

```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 35
X-RateLimit-Reset: 1514539728
```

레이트 리미팅은 두 레벨(글로벌, 엔드포인트별)로 적용되며 아래 표에 표시됩니다:

| Endpoint | Rate |
|----------|------|
| **Global**   | **120 / minute** |
| GET /api/game/room-terrain | 360 / hour |
| POST /api/game/map-stats | 60 / hour |
| GET /api/user/code | 60 / hour |
| POST /api/user/code | 240 / day
| POST /api/user/set-active-branch | 240 / day |
| GET /api/user/memory | 1440 / day |
| POST /api/user/memory | 240 / day |
| GET /api/user/memory-segment | 360 / hour |
| POST /api/user/memory-segment | 60 / hour |
| POST /api/user/console | 360 / hour |
| GET /api/game/market/orders-index | 60 / hour |
| GET /api/game/market/orders | 60 / hour |
| GET /api/game/market/my-orders | 60 / hour |
| GET /api/game/market/stats | 60 / hour |
| GET /api/game/user/money-history | 60 / hour |

### 레이트 리미팅 끄기

사람의 상호작용이 필요한 서드파티 도구를 개발한다면, 특정 토큰에 대해 레이트 리미팅을 끄는 특별한 플로우를 통합할 수 있습니다. 이를 위해 사용자에게 `https://screeps.com/a/#!/account/auth-tokens/noratelimit?token=XXX` 링크를 제공해야 하며, 사용자가 해당 페이지로 이동해야 합니다. 사용자가 페이지에서 "Proceed" 버튼을 클릭하면, 해당 토큰은 2시간 동안 레이트 리미팅 없이 사용할 수 있게 됩니다.

![](img/token-noratelimit.png)

도구가 웹 기반이라면, 이 페이지를 `<iframe>`에 임베드하고 `screepsTokenSuccess` 메시지를 수신할 수 있습니다:

```javascript
window.addEventListener('message', (event) => {
    if(event.data === 'screepsTokenSuccess') {
        console.log("We are not rate limited now!");
    }   
}, false);
```

이 페이지는 Google Invisible reCAPTCHA를 사용하므로 자동으로 사용할 수 없다는 점에 유의하세요.

`https://screeps.com/api/auth/query-token?token=XXX` 엔드포인트로 특정 토큰 정보(무제한 기간 타이머 포함)를 조회할 수 있습니다.

