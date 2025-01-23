자원 단위의 대량을 저장할 수 있는 구조체. [:room.storage] (#Room.storage) 속성으로 주소를 지정할 수 있는 방에 한 개만 구조체를 허용합니다.

코드를 번역하지 마세요. JavaScript와 같은 코드는 번역하지 마십시오. 대문자로만 표기된 단어도 번역하지 말고, 이 글을 한국어로 번역하십시오 . : </p>

<table class="table gameplay-info">
    <tbody>
    <tr>
        <td colspan="2"><strong>Controller level</strong></td>
    </tr>
    <tr>
        <td>1-3</td>
        <td>—</td>
    </tr>
    <tr>
        <td>4-8</td>
        <td>1 storage</td>
    </tr>
    <tr>
        <td><strong>Cost</strong></td>
        <td>30,000</td>
    </tr>
    <tr>
        <td><strong>Hits</strong></td>
        <td>10,000</td>
    </tr>
    <tr>
        <td><strong>Capacity</strong></td>
        <td>1,000,000</td>
    </tr>
    </tbody>
</table>

{% page inherited/OwnedStructure. md %}


{% api_property store '<a href="#Store">Store</a>' %}

<`Store`>(#Store) 객체는 해당 구조체의 화물을 포함합니다.

```
{% apidoc storeCapacity 'number' '{"deprecated": true}' %}

An alias for `store.getCapacity()`.
```

Deprecated 속성은 더 이상 사용되지 않습니다.