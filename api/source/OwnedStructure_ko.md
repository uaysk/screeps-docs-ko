# 소유권 구조

소유자가 있는 구조의 기본 프로토타입입니다. 이러한 구조는 `FIND_MY_STRUCTURES` 및 `FIND_HOSTILE_STRUCTURES` 상수를 사용하여 검색할 수 있습니다.

{% page inherited/Structure. md %}

{% api_property my 'boolean' %}

소유된 구조인지의 여부입니다.

{% api_property owner 'object' %}

구조의 소유자 정보 객체로, 다음과 같은 속성을 가집니다:

{% api_method_params %}
username : string
소유자 사용자 이름.

```
OwnedStructure
```