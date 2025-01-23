광물 매장지. extractor 구조를 사용하여 `WORK`신체 부위가있는 크리프스에 의해 수확 할 수 있습니다. [이 기사](/resources.html)에서 광물에 대해 자세히 알아보십시오.

"<table class=\"table gameplay-info\">"
"    <tbody>"
"    <tr>"
"        <td>"
"        <strong>Regeneration amount</strong>"
"        </td>"
"        <td>"
"         <code>DENSITY_LOW</code>: 15,000 <br /> <code>DENSITY_MODERATE</code>: 35,000<br /> <code>DENSITY_HIGH</code>: 70,000 <br /> <code>DENSITY_ULTRA</code>: 100,000</td>"
"      </tr>"
"    <tr>"
"        <td>"
"        <strong>Regeneration time</strong>"
"        </td>"
"        <td>"
"        50,000 ticks"
"        </td>"
"      </tr>"
"    <tr>"
"        <td>"
"        <strong>Density change probability</strong>"
"        </td>"
"        <td>"
"         <code>DENSITY_LOW</code>: 100% chance<br /> <code>DENSITY_MODERATE</code>: 5% chance<br /> <code>DENSITY_HIGH</code>: 5% chance<br /> <code>DENSITY_ULTRA</code>: 100% chance"
"        </td>"
"      </tr>"
"    </tbody>"
"  </table>"

md %} 
{% api_property density 'number' %}


이 광물 저장소가 <code>ticksToRegeneration</code> 0에 도달하면 다시 채워질 밀도입니다. 이것은 <code>DENSITY_</code> 상수 중 하나입니다.
{% api_property mineralAmount 'number' %}


남아있는 자원의 양입니다.
{% api_property mineralType 'string' %}


자원 유형, <code>RESOURCE_*</code> 상수 중 하나.
{% api_property id 'string' %}


객체 식별자, 고유합니다. 이것은 <a href="#Game.getObjectById"><code>Game.getObjectById</code></a> 방법을 사용하여 이 <code>id</code>로 객체 인스턴스를 검색할 수 있습니다.

재충전될 보증금의 남은 시간을 나타냅니다.