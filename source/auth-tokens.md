---
title: 인증 토큰
---
Screeps에는 공개된 웹 API가 문서화되어 있지 않습니다. 그러나, 문서화되지 않은 서버가 클라이언트와의 통신에 사용하는 HTTP endpoint를 원할 경우, 괜찮습니다. 이 프로세스를 더 쉽게 해줄 목적으로 **인증 토큰** 시스템을 개발했습니다.
정규 웹 브라우저 클라이언트는 백그라운드에서 몇몇 요청들, 예를 들어 로그인 요청을 확인하기 위해 Google Invisible reCAPTCHA를 사용합니다. Steam 클라이언트는 유사한 목적으로 암호화된 로컬 Steam 연결을 사용합니다. 외부 도구를 개발하고 있고 인간의 상호작용이 필요하지 않은 경우, CAPTCHA를 풀지 않아도 되는 요청들을 위해 지속적인 auth token을 생성할 수 있습니다. 이러한 토큰은 한번 생성되고 만료시간이 없습니다.

하지만 API 요청은 속도 제한이 있습니다.

1. 웹소켓 방식으로 보내는 요청: 요청당 최대 50개의 객체를 받을 수 있고, 한 번에 하나의 연결만 허용됩니다.
2. JSON-RPC 방식으로 보내는 요청: 1분에 최대 150개의 요청을 받습니다.
3. JSON 방식으로 보내는 요청: 10초당 최대 20개의 요청을 받고, 한 번에 하나의 연결만 허용됩니다.

속도 제한을 피하려면 몇 분마다 몇 초씩 요청을 보내야 합니다.

그러나, 인증된 auth token에 의한 모든 요청은 속도 제한 규칙의 적용을 받습니다. 속도 용량이 초과되면, 응답으로 `429` HTTP 코드를 수신합니다:
```
HTTP/1.1 429 Too Many Requests
```
세 개의 HTTP 헤더는 정보 제공 목적으로 설정되며, 사용자가 속도 제한을 처리하는데 사용할 수 있습니다:

| 헤더 이름 | 설명 |
|-|-|
| `X-RateLimit-Limit` | 제한 창에서 사용자가 실행할 수 있는 최대 요청의 개수. |
| `X-RateLimit-Remaining` | 현재 속도 제한 창에서 남은 요청 개수. |
| `X-RateLimit-Reset` | 현재 속도 제한 창이 UTC 에포크 초(epoch seconds)로 리셋되는 시간.

To do this, send the following header with your request:

```
X-RateLimit-Bypass: true
```

This will temporarily disable rate limiting for that particular token, allowing human interaction during development. However, keep in mind that this should be done sparingly and only when necessary to avoid overloading our system.

이를 위해 사용자에게 `https://screeps.com/a/#! /account/auth-tokens/noratelimit?token=XXX` 링크를 제공하고 해당 페이지로 이동하도록 합니다. 사용자가 "Proceed" 버튼을 클릭하면, 2시간 동안 무료 제한 없이 토큰이 부여됩니다. 

! [token-noratelimit.png](https://minimalist.gitbook.io/screeps-node-js-client/contents/assets/img/token-norate limit.png)

웹 기반의 도구는 이 페이지를 `<iframe>`에 임베드하고 `screepsTokenSuccess` 메시지를 수신할 수 있습니다.

```javascript
window.addEventListener('message', (event) => {
    if(event.data === 'screepsTokenSuccess') {
        console.log("We are not rate limited now!");
    }
}, false);
```

이 페이지는 Google Invisible reCAPTCHA를 사용하므로 자동으로 사용할 수 없습니다.

특정 토큰(무제한 기간 타이머 포함)에 대한 정보를 쿼리하려면 `https://screeps.com/api/auth/query-token?token=XXX` 엔드포인트를 사용할 수 있습니다.