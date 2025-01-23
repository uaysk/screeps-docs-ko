# StructureObserver
<img src="img/observer.png" alt="" align="right" />
구체적인 방에서 스크립트로 관측할 수 있도록 해줍니다.

```
1-7 또는 8 컨트롤러 레벨에서 사용이 가능합니다. 1개의 옵저버를 제공합니다. 비용은 8,000입니다. 최대 500명까지 관측할 수 있습니다. 방 10곳을 관측할 수 있는 범위를 제공합니다.
```

{% api_method observeRoom 'roomName' A %}

{% api_method_params %}
roomName : string
The name of the target room.
{% endapi_method_params %}

### Return value

One of the following codes:
OK | The operation has been scheduled successfully.
ERR_NOT_OWNER | You are not the owner of this structure.
ERR_INVALID_ARGS | <code>roomName</code> argument is not a valid room name value.
ERR_NOT_IN_RANGE | Room <code>roomName</code> is not in observing range.
ERR_RCL_NOT_ENOUGH | Room Controller Level insufficient to use this structure.