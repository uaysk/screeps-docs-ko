---
title: 오브젝트 프로토타입 수정하기
contributed:
    name: Helam
    link: https://screeps.com/a/#!/profile/Helam
    date: 2017-05-14
---

이 글에서는 오브젝트 프로토타입(prototype)이 무엇인지, 그리고 Screeps에서 조금 더 편하게 코드를 작성할 수 있도록 프로토타입을 활용/수정하는 여러 방법을 다룹니다.

## 프로토타입이란?
[프로토타입(Prototypes)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)은 JavaScript에서 [상속(inheritance)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)을 가능하게 하는 메커니즘이며, 매우 강력한 방식으로 활용될 수 있습니다.

JavaScript의 모든 오브젝트는 다른 오브젝트를 가리키는 링크를 갖는데, 이를 **프로토타입(prototype)** 오브젝트라고 하며, 여기서 속성과 메서드를 상속받습니다. 프로토타입 오브젝트도 하나의 오브젝트이므로 또 다른 프로토타입 오브젝트를 가리킬 수 있고, 이로 인해 [프로토타입 체인(prototype chain)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)이 만들어집니다. 또는 프로토타입은 `null`일 수도 있습니다.

예를 들어 "John"이라는 크립을 만들었다면 `Game.creeps.John`은 [`Creep`](http://docs.screeps.com/api/#Creep) 프로토타입을 가리키는 링크를 가집니다. [`Creep`](http://docs.screeps.com/api/#Creep) 프로토타입에는 여러분이 익숙한 [`.name`](http://docs.screeps.com/api/#Creep.name), [`.moveTo()`](http://docs.screeps.com/api/#Creep.moveTo), [`.harvest()`](http://docs.screeps.com/api/#Creep.harvest) 같은 유용한 속성과 메서드가 정의되어 있습니다. 이 속성과 메서드를 모든 크립에서 사용할 수 있는 이유는, 그것들이 [`Creep`](http://docs.screeps.com/api/#Creep) 프로토타입에 정의되어 있고, 각 크립 오브젝트가 그 프로토타입을 링크로 가지고 있어 상속받기 때문입니다. 이런 방식으로 게임 내 모든 오브젝트의 속성과 메서드가 정의됩니다. [`Room`](http://docs.screeps.com/api/#Room), [`Source`](http://docs.screeps.com/api/#Source), [`Structure`](http://docs.screeps.com/api/#Structure) 같은 다른 프로토타입도 참고하세요.

## 프로토타입에 메서드 추가하기
프로토타입에 메서드를 추가할 수 있다는 점은, 특히 Screeps에서 매우 유용합니다. 메서드를 한 번만 정의해두면 모든 크립에서 사용할 수 있습니다!

프로토타입 메서드를 다룰 때 중요한 점은, [함수(functions)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)가 숫자/오브젝트/배열/문자열/불리언처럼 변수나 오브젝트의 프로퍼티에 저장될 수 있다는 사실입니다. [`.attack()`](http://docs.screeps.com/api/#Creep.attack)이나 [`.move()`](http://docs.screeps.com/api/#Creep.move) 같은 크립 메서드는 [`Creep`](http://docs.screeps.com/api/#Creep) 프로토타입의 프로퍼티로 저장된 함수입니다.

따라서 다른 프로퍼티처럼 새 함수를 추가할 수 있습니다:
```javascript
Creep.prototype.sayHello = function() { 
    // In prototype functions, 'this' usually has the value of the object calling 
    // the function. In this case that is whatever creep you are 
    // calling '.sayHello()' on.
    this.say("Hello!"); 
};
```
이 코드를 실행한 뒤에는 어떤 크립이든 `creep.sayHello();`를 호출할 수 있고, 크립이 인사할 것입니다!

기존 프로토타입 메서드를 덮어쓸(overwrite) 수도 있습니다:
```javascript
Creep.prototype.suicide = function() {
    this.say("NO WAY!");
};
```
위 코드는 원래의 [`creep.suicide()`](http://docs.screeps.com/api/#Creep.suicide) 함수를 덮어써서, 자폭하는 대신 명령에 동의하지 않는다고 말하게 만듭니다.

### 원본 메서드 저장하기
프로토타입 메서드를 덮어쓰면 원래 함수에 접근할 수 없게 됩니다. Screeps에서 [`.move()`](http://docs.screeps.com/api/#Creep.move) 같은 중요한 함수에 접근하지 못하게 되면 치명적일 수 있습니다. 이런 문제는 덮어쓰기 전에 원본 함수를 다른 프로퍼티에 저장해두면 피할 수 있으며, 필요하면 나중에 원본을 사용할 수 있습니다.

앞서 [`.suicide()`](http://docs.screeps.com/api/#Creep.suicide)를 덮어쓸 때는 원본을 저장하지 않았습니다. 그래서 필요할 때 실제로 자폭할 수 없게 되었습니다. 이번에는 조금 다르게 [`.suicide()`](http://docs.screeps.com/api/#Creep.suicide)를 다시 덮어써 보겠습니다.

원본 함수를 `._suicide`라는 새 프로퍼티에 저장합니다. 프로퍼티 이름 앞에 언더스코어를 붙이는 것은 해당 프로퍼티가 [private](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Contributor_s_Guide/Private_Properties)임을 나타내려는 JavaScript 네이밍 컨벤션입니다.
```javascript
// Make sure we haven't already stored the original
if (!Creep.prototype._suicide) {

	// Store the original method
	Creep.prototype._suicide = Creep.prototype.suicide;

	// Create our new function
	Creep.prototype.suicide = function() {

		// Add custom functionality
		console.log(`May ${this.name} rest in peace.`);

		// Call and return the original method
		return this._suicide();
	}

}
```
위 코드를 실행한 뒤 어떤 크립에서 `creep.suicide()`를 호출하면, 콘솔에 위로의 메시지가 출력되는 동시에 크립이 실제로 자폭합니다.

위 코드에는 기억해야 할 중요한 포인트가 몇 가지 있습니다:
- 멱등성(idempotence)을 보장하려면(코드를 여러 번 실행해도 한 번 실행한 것과 동일한 효과), 원본이 아직 저장되지 않았을 때만 원본 저장과 덮어쓰기를 수행하세요.
- 항상 원본 메서드를 저장해두세요.
- 가능하면 원본 함수가 반환한 값을 그대로 반환해, 새 함수가 원본과 최대한 동일하게 동작하도록 하세요. 여러분의 코드뿐 아니라 게임 내부 코드도, 수정한 함수의 반환값에 의존할 수 있습니다.

### 임의의 인자 목록(arbitrary arguments list) 다루기
이전 예시는 [`Creep.prototype.suicide`](http://docs.screeps.com/api/#Creep.suicide)가 파라미터를 받지 않기 때문에 단순했습니다. 프로토타입 메서드를 덮어쓸 때는 인자를 올바르게 처리하는 것이 매우 중요합니다.

[`Creep.prototype.moveTo`](http://docs.screeps.com/api/#Creep.moveTo)는 인자 처리가 특히 중요한 좋은 예시입니다. 이 메서드는 두 가지 시그니처를 가질 수 있기 때문입니다: `(x, y, [opts])` 또는 `(target, [opts])`. 아래 예시들은 [`.moveTo()`](http://docs.screeps.com/api/#Creep.moveTo)를 덮어써서, 각 크립의 이동에 사용된 CPU 양을 기록하도록 합니다. 세 예시 각각은 인자 처리를 다른 방식으로 보여줍니다:

1. 직접 인자 정의하기:
```javascript
if (!Creep.prototype._moveTo) {
	Creep.prototype._moveTo = Creep.prototype.moveTo;
	Creep.prototype.moveTo = function(myArg1, myArg2, myArg3) {
	    console.log(`My moveTo with my own arguments!`);
	    
	    let startCpu = Game.cpu.getUsed();
	    // Call original function and store the return value
	    let returnValue = this._moveTo(myArg1, myArg2, myArg3);
	    let endCpu = Game.cpu.getUsed();
	    
	    let used = endCpu - startCpu;
	    
	    if (!this.memory.moveToCPU) this.memory.moveToCPU = 0;
	    
	    this.memory.moveToCPU += used;
	    
	    return returnValue; // return original value
	};
}
```
2. 모든 함수에서 사용 가능한 [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) 오브젝트 사용하기:
```javascript
if (!Creep.prototype._moveTo) {
	Creep.prototype._moveTo = Creep.prototype.moveTo;
	Creep.prototype.moveTo = function() {
	    console.log(`My moveTo using the arguments object!`);
	    
	    let startCpu = Game.cpu.getUsed();
	    // There is a short description of Function.apply() later
	    let returnValue = this._moveTo.apply(this, arguments);
	    let endCpu = Game.cpu.getUsed();
	    
	    let used = endCpu - startCpu;
	    
	    if (!this.memory.moveToCPU) this.memory.moveToCPU = 0;
	    
	    this.memory.moveToCPU += used;
	    
	    return returnValue;
	};
}
```
3. ["rest parameters"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) 사용하기:
```javascript
if (!Creep.prototype._moveTo) {
	Creep.prototype._moveTo = Creep.prototype.moveTo;
	Creep.prototype.moveTo = function(...myArgumentsArray) {
	    console.log(`My moveTo using rest parameters!`);
	    
	    let startCpu = Game.cpu.getUsed();
	    let returnValue = this._moveTo.apply(this, myArgumentsArray);
	    let endCpu = Game.cpu.getUsed();
	    
	    let used = endCpu - startCpu;
	    
	    if (!this.memory.moveToCPU) this.memory.moveToCPU = 0;
	    
	    this.memory.moveToCPU += used;
	    
	    return returnValue;
	};
}
```

#### [Function.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
`Function.apply(thisArg, argumentsArray)`는 지정한 `this` 값으로 함수를 호출하고, 인자 배열의 각 원소를 함수 인자로 전달합니다.
예시:
```javascript
let name = "Helam";
console.log("Hello my name is: ", name);
```
위 코드는 다음과 같은 동작을 합니다:
```javascript
let name = "Helam";
let myArguments = ["Hello my name is: ", name];
console.log.apply(console, myArguments);
```
[Function.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)도 참고하세요.

### 다른 예시

#### [Spawn.spawnCreep](http://docs.screeps.com/api/#StructureSpawn.spawnCreep) - 자동 이름 생성
크립이 많아지면 크립 이름을 수동으로 지정하는 것이 번거롭고 코드가 지저분해질 수 있습니다. 자동으로 이름을 생성하면 코드를 정리하는 데 도움이 될 수 있습니다.
```javascript
// Make sure the method has not already been overwritten
if (!StructureSpawn.prototype._spawnCreep) {
    StructureSpawn.prototype._spawnCreep = StructureSpawn.prototype.spawnCreep;
    
    // The original signature: spawnCreep(body, name, opts)
    // Make a new version with the signature createCreep(body, opts)
    StructureSpawn.prototype.spawnCreep = function(body, opts = {}) { 
        if (!Memory.myCreepNameCounter) Memory.myCreepNameCounter = 0;
        
        // Now we need to generate a name and make sure it hasnt been taken
        let name;
        let dryRun;
        do {
            name = `c${Memory.creepNameCounter++}`;
            dryRun = this._spawnCreep(body, name, { ...opts, dryRun: true });
        } while (dryRun !== ERR_NAME_EXISTS);
        
        // Now we call the original function passing in our generated name and 
        // returning the value
        return this._spawnCreep(body, name, opts);
    };
}
```

#### [StructureObserver.observeRoom](http://docs.screeps.com/api/#StructureObserver) - 덮어쓰기 호출 방지
같은 옵저버에서 같은 틱에 [`.observeRoom`](http://docs.screeps.com/api/#StructureObserver.observeRoom)을 여러 번 호출하면, 이후 호출이 이전 호출을 덮어쓰며, 마지막 호출만 실제로 실행됩니다. 이때 모든 호출이 `OK`를 반환했더라도 그렇습니다. 아래는 이후 호출이 이전 호출을 덮어쓰는 대신 `ERR_BUSY`를 반환하도록 동작을 바꾸는 예시입니다.
```javascript
if (!StructureObserver.prototype._observeRoom) {
    StructureObserver.prototype._observeRoom = StructureObserver.prototype.observeRoom;
    StructureObserver.prototype.observeRoom = function() {
        if (this.observing) 
            return ERR_BUSY;
        let observeResult = this._observeRoom.apply(this, arguments);
        if (observeResult === OK)
            this.observing = roomName;
        return observeResult;
    };
}
```

## 프로토타입에 프로퍼티 추가하기
프로토타입 함수와 마찬가지로, [`Creep`](http://docs.screeps.com/api/#Creep) 프로토타입의 [`.name`](http://docs.screeps.com/api/#Creep.name) 같은 비함수(non-function) 프로토타입 프로퍼티도 있고, [`Structure`](http://docs.screeps.com/api/#Structure) 프로토타입의 [`hits`](http://docs.screeps.com/api/#Structure.hits) 같은 것들도 있습니다. 이 프로퍼티들은 프로토타입에서 게임 오브젝트로 상속되어 접근할 수 있게 됩니다. 게임 [API](http://docs.screeps.com/api/)가 제공하는 프로퍼티에만 제한될 필요는 없습니다. 여러분만의 프로퍼티를 만들 수도 있습니다!!!

커스텀 프로퍼티는 다양한 방식으로 만들 수 있지만, 여기서는 일부만 소개합니다. 프로퍼티는 [`Object.defineProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)와 [`Object.defineProperties`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)로 추가합니다.

여기서는 [`Room`](http://docs.screeps.com/api/#Room) 프로토타입에 `sources`라는 커스텀 프로퍼티를 만들고, 룸의 에너지 소스 배열을 담도록 해보겠습니다. Screeps에서 커스텀 프로퍼티를 만들 때의 다양한 특징/가능성을 보여주기 위해 4가지 방식으로 구현합니다.

### getter만 있고 캐시가 없는 기본 프로퍼티
[`Object.defineProperty`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)는 3개의 파라미터를 받습니다:
1. 프로퍼티를 추가할 오브젝트(보통 프로토타입 오브젝트). 예시에서는 `Room.prototype`.
2. 추가할 프로퍼티 이름. 예시에서는 `'sources'`이지만 `'foo'`, `'myProp'`처럼 무엇이든 가능합니다.
3. 프로퍼티 동작을 정의하는 옵션 오브젝트. 가능한 모든 옵션은 [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)를 참고하세요.
```javascript
Object.defineProperty(Room.prototype, 'sources', {
    // This is the getter function, when you type room.sources it will have 
    // the value returned by this function
    get: function() {
        // Since we are defining the property on the Room prototype, 'this' in 
        // the line below is whatever room object we are getting the .sources from
        return this.find(FIND_SOURCES);
    },
    // This makes it so the property doesn't show up when enumerating the properties 
    // of the creep. If you arent sure, put false.
    enumerable: false,
    // This makes the characteristics of the property modifiable and also makes 
    // the property deletable. if you arent sure, put true.
    configurable: true
});
```
이 옵션은 가장 기본이며, `room.find(FIND_SOURCES)`를 `room.sources`로 바꿔 타이핑을 조금 줄이는 정도의 의미입니다. 더 나은 옵션은 다음 예시들을 참고하세요.

### 로컬 오브젝트 캐싱
아래 코드에서는 getter가 처음 호출될 때 `this._sources`에 값이 없으므로, 값을 찾은 뒤 저장합니다. 다음에 프로퍼티에 접근하면 저장된 값을 반환합니다.
이 방식으로 저장된 값은 틱을 넘어 유지되지 않습니다. 틱 간 지속성을 원한다면 memory caching 예시를 참고하세요.
또한 값을 저장할 때 `.sources`가 아니라 `._sources`를 사용하는 것을 주의하세요. `.sources`에 접근하면 getter가 다시 호출되어 무한 루프가 발생하기 때문입니다!
```javascript
Object.defineProperty(Room.prototype, 'sources', {
    get: function() {
        if (!this._sources) {
            this._sources = this.find(FIND_SOURCES);
        }
        return this._sources;
    },
    enumerable: false,
    configurable: true
});
```

### setter 추가하기
이 버전은 setter 함수를 추가합니다. 커스텀 프로퍼티에 값을 할당할 수 있으려면 setter가 필요하며, 없으면 할당 시 에러가 발생합니다. 이 예시에서는 getter가 값을 설정해주므로 room.sources에 직접 값을 설정할 일은 없겠지만, setter를 추가하는 방법을 보여주기 위해 포함합니다.
```javascript
Object.defineProperty(Room.prototype, 'sources', {
    get: function() {
        if (!this._sources) {
            this._sources = this.find(FIND_SOURCES);
        }
        return this._sources;
    },
    set: function(newValue) {
        // We set the stored private variable so the next time the getter is called 
        // it returns this new value
        this._sources = newValue;
    },
    enumerable: false,
    configurable: true
});
```

### Memory 캐싱
이 버전에서는 틱 간에도 값이 유지되도록 memory caching을 추가합니다. 이 예시에서는 유용하지만, 항상 적절한 것은 아닙니다. 메모리에 저장하는 오브젝트가 많아질수록 파싱에 더 많은 CPU가 든다는 점을 기억하세요!

룸의 소스는 변하지 않으므로, 이 예시에서 memory caching을 사용하면 룸의 소스를 한 번만 저장하고, 메모리 값이 삭제되지 않는 한 `room.find(FIND_SOURCES)`를 다시 호출할 필요가 없어집니다.

```javascript
Object.defineProperty(Room.prototype, 'sources', {
    get: function() {
    		// If we dont have the value stored locally
        if (!this._sources) {
        		// If we dont have the value stored in memory
            if (!this.memory.sourceIds) {
            		// Find the sources and store their id's in memory, 
            		// NOT the full objects
                this.memory.sourceIds = this.find(FIND_SOURCES)
                                        .map(source => source.id);
            }
            // Get the source objects from the id's in memory and store them locally
            this._sources = this.memory.sourceIds.map(id => Game.getObjectById(id));
        }
        // return the locally stored value
        return this._sources;
    },
    set: function(newValue) {
        // when storing in memory you will want to change the setter
        // to set the memory value as well as the local value
        this.memory.sources = newValue.map(source => source.id);
        this._sources = newValue;
    },
    enumerable: false,
    configurable: true
});
```
이런 상황에서는 메모리에 오브젝트의 id만 저장하고, 매 틱 [`Game.getObjectById(id)`](http://docs.screeps.com/api/#Game.getObjectById)로 새 오브젝트를 가져오는 것이 매우 중요합니다. 전체 오브젝트를 메모리에 저장하면 메모리 사용량이 크게 증가해 CPU 사용량이 커질 뿐 아니라, 오래된(stale) 오브젝트 정보로 인한 버그를 유발할 수 있습니다. [Storing game objects in memory](http://docs.screeps.com/global-objects.html#Storing-game-objects-in-memory)도 참고하세요.

### 다른 예시

#### Creep.prototype.isFull - carry가 가득 찼나요?
크립에 프로퍼티를 추가하는 간단한 예시입니다. `if (creep.isFull)`처럼 사용할 수 있습니다. carry는 틱마다 변할 수 있으므로, 이 경우 memory caching은 유용하지 않습니다(메모리 값이 무효화될 수 있기 때문입니다).
```javascript
Object.defineProperty(Creep.prototype, 'isFull', {
    get: function() {
        if (!this._isFull) {
            this._isFull = _.sum(this.carry) === this.carryCapacity;
        }
        return this._isFull;
    },
    enumerable: false,
    configurable: true
});
```

#### Source.memory - (여러 대상에 메모리 붙이기)
조금 더 고급 예시로, 모든 source에 `.memory` 프로퍼티를 추가합니다. 원하는 어떤 프로토타입에도 `.memory` 프로퍼티를 쉽게 추가하도록 변형할 수 있습니다.
```javascript
Object.defineProperty(Source.prototype, 'memory', {
    configurable: true,
    get: function() {
        if(_.isUndefined(Memory.mySourcesMemory)) {
            Memory.mySourcesMemory = {};
        }
        if(!_.isObject(Memory.mySourcesMemory)) {
            return undefined;
        }
        return Memory.mySourcesMemory[this.id] = 
                Memory.mySourcesMemory[this.id] || {};
    },
    set: function(value) {
        if(_.isUndefined(Memory.mySourcesMemory)) {
            Memory.mySourcesMemory = {};
        }
        if(!_.isObject(Memory.mySourcesMemory)) {
            throw new Error('Could not set source memory');
        }
        Memory.mySourcesMemory[this.id] = value;
    }
});
```

#### Source.freeSpaceCount - 해당 소스 주변에 몇 크립이 붙을 수 있나요?
이 예시는 앞선 예시에 기반하며, 새로 만든 `source.memory` 프로퍼티를 사용해 `.freeSpaceCount`를 캐시합니다. 이는 소스 주변 8칸 중 자연 벽이 아닌 칸이 몇 개인지(즉, 붙을 수 있는 자리 수)를 숫자로 반환합니다.
```javascript
Object.defineProperty(Source.prototype, 'freeSpaceCount', {
    get: function () {
        if (this._freeSpaceCount == undefined) {
            if (this.memory.freeSpaceCount == undefined) {
                let freeSpaceCount = 0;
                [this.pos.x - 1, this.pos.x, this.pos.x + 1].forEach(x => {
                    [this.pos.y - 1, this.pos.y, this.pos.y + 1].forEach(y => {
                    	if (Game.map.getTerrainAt(x, y, this.pos.roomName) != 'wall')
                				freeSpaceCount++;
            				}, this);
            		}, this);
                this.memory.freeSpaceCount = freeSpaceCount;
            }
            this._freeSpaceCount = this.memory.freeSpaceCount;
        }
        return this._freeSpaceCount;
    },
    enumerable: false,
    configurable: true
});
```

