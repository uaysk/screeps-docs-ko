# OwnedStructure

소유자(owner)가 있는 구조물의 기본 프로토타입입니다.
이런 구조물은 `FIND_MY_STRUCTURES` 및 `FIND_HOSTILE_STRUCTURES` 상수로 찾을 수 있습니다.

{% page inherited/Structure.ko.md %}  

{% api_property my 'boolean' %}

이 구조물이 여러분의 구조물인지 여부입니다.

{% api_property owner 'object' %}

구조물 소유자 정보를 담은 오브젝트입니다. 다음 프로퍼티를 포함합니다:

{% api_method_params %}
username : string
소유자 유저 이름.
{% endapi_method_params %}

