## 목차

1. [객체](#객체)
2. [객체 생성 방법](#객체-생성-방법)
3. [Pass by reference](#pass-by-reference)
4. [Pass by value](#pass-by-value)

# 객체

자바스크립트의 객체는 키와 값으로 구성된 프로퍼티의 집합이다.  
프로퍼티 값으로 함수를 사용할 수 있으며 이럴 경우 일반 함수와 구분하기 위해 메소드라 부른다.

이와 같이 객체는 데이터를 의미하는 프로퍼티와 데이터를 참조하고 조작할 수 있는 메소드로 구성된 집합이다.  
객체는 데이터와 그 데이터와 관련된 동작을 모두 포함할 수 있기 때문에 데이터와 동작을 하나의 단위로 구조화 할 수 있다.

또한 자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 프로토타입이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다.  
이 프로토타입은 타 언어와 구별되는 중요한 개념이다.

## 프로퍼티

프로퍼티는 프로퍼티 키와 프로퍼티 값으로 구성된다. 즉, 프로퍼티 키는 프로퍼티를 식별하기 위한 식별자다.  
명명 규칙과 프로퍼티 값으로 사용할 수 있는 타입은 다음과 같다.

- 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol 값
- 프로퍼티 값 : 모든 값

프로퍼티 키에 문자열 혹은 symbol 값 이외의 값을 지정하면 암묵적으로 타입이 변환되어 문자열이 된다.

## 메소드

프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.  
즉, 메소드는 객체에 제한되어 있는 함수를 의미한다.

# 객체 생성 방법

자바와 같은 클래스 기반 객체 지향 언어는 클래스를 사전에 정의하고  
필요한 시점에 new 연산자를 사용하여 인스턴스를 생성하는 방식으로 객체를 생성한다.

하지만 자바스크립트는 프로토타입 기반 객체 지향 언어로서 클래스라는 개념이 없고 별도의 객체 생성 방법이 존재한다.

```
ES6 에서는 새롭게 클래스가 도입되었다. 프로토타입 기반 프로그래밍은 클래스 기반 언어에 익숙한 프로그래머들에게 혼란을 야기했다.
ES6의 클래스는 클래스 기반 언어에 익숙한 프로그래머가 보다 빠르게 학습할 수 있는 단순한고 깨끗한 문법을 제시하고 있다.
ES6의 클래스가 새로운 객체지향 모델을 제공하는 것이 아니며 클래스도 사실 함수이고 기존 프로토타입 기반 패턴의 문법적 설탕이다.
```

## 객체 리터럴

가장 일반적인 자바스크립트의 객체 생성 방식이다.

```javascript
var emptyObject = {};
console.log(typeof emptyObject); // object

var person = {
  name: "Lee",
  gender: "male",
  sayHello: function () {
    console.log("Hi! My name is " + this.name);
  },
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```

## Object 생성자 함수

new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성할 수 있다.  
빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성하는 방법이다.  
하지만 객체 리터럴 방식으로 생성된 객체는 Object 생성자 함수로 객체를 생성하는 것을 단순화 시킨 표현이라  
직접 Object 생성자 함수를 사용해 객체를 생성해야 할 일은 거의 없다.

```javascript
// 빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name = "Lee";
person.gender = "male";
person.sayHello = function () {
  console.log("Hi! My name is " + this.name);
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```

## 생성자 함수

객체 리터럴 방식과 Object 생성자 함수 방식으로 객체를 생성하는 것은 프로퍼티 값만 다른 여러개의 객체를 생성할 때 불편하다.  
동일한 프로퍼티임에도 매번 반복되게 기술해야 함을 피하기 위해 생성자 함수를 사용한다.

```javascript
// 생성자 함수 이름은 일반적으로 대문자로 시작한다.
function Person(name, gender) {
  this.name = name; // 프로퍼티 또는 메소드명 앞에 기술한 this는 생성자 함수가 생성할 인스턴스를 의미한다.
  this.gender = gender;
  this.sayHello = function () {
    console.log("Hi! My name is " + this.name);
  };
  var height = 180; // 생성자 함수 내에서 선언된 변수는 private 이다. 함수 내부에서는 접근 가능하나 외부에서 접근할 수 업다.
}

// 인스턴스의 생성
var person1 = new Person("Lee", "male");
var person2 = new Person("Kim", "female");

console.log(person1.name); // 'Lee'
console.log(person1.height); // undefined
```

# Pass by reference

object type을 객체 타입 혹은 참조 타입이라 한다. 참조 타입이란 객체의 모든 연산이 실제값이 아닌 참조값으로 처리됨을 말한다.  
원시 타입은 값이 한번 정해지면 바꿀 수 없지만, 객체는 프로퍼티를 변경, 추가, 삭제가 가능하다.

따라서 객체 타입은 동적으로 변화할 수 있으므로 어느 정도의 메모리 공간을 확보해야 하는지 예측할 수 없기 때문에  
런타임에 메모리 공간을 확보하고 메모리의 힙 영역에 저장된다.

이에 반에 원시 타입은 복사되어 값으로 전달된다. 이를 call by value 라고 한다.

```javascript
// Pass-by-reference
var foo = {
  val: 10,
};

var bar = foo;
console.log(foo.val, bar.val); // 10 10
console.log(foo === bar); // true

bar.val = 20;
console.log(foo.val, bar.val); // 20 20
console.log(foo === bar); // true
```

변수 bar 에 변수 foo 의 값을 할당할 경우, foo 와 bar은 둘 다 동일한 객체를 참조하고 있어  
해당 객체가 변경될 경우 두 변수 모두 변경된 객체의 프로퍼티 값을 참조한다.

```javascript
var foo = { val: 10 };
var bar = { val: 10 };

console.log(foo.val, bar.val); // 10 10
console.log(foo === bar); // false

var baz = bar;

console.log(baz.val, bar.val); // 10 10
console.log(baz === bar); // true
```

foo와 bar은 비록 내용은 같지만 별개의 객체를 생성하여 참조값을 할당하였기 때문에 변수 foo와 bar의 참조값은 동일하지 않다.(별도의 어드레스)

```javascript
var a = {},
  b = {},
  c = {}; // a, b, c는 각각 다른 빈 객체를 참조
console.log(a === b, a === c, b === c); // false false false

a = b = c = {}; // a, b, c는 모두 같은 빈 객체를 참조
console.log(a === b, a === c, b === c); // true true true
```

# Pass by value

원시 타입은 값으로 전달된다. 이를 Pass by value(값에 의한 전달)이라고 한다.  
원시 타입은 값이 한번 정해지면 변경할 수 없으며, 이들은 런타임에 메모리의 스택 영역에 고정된 메모리 영역을 점유하고 저장된다.

```javascript
// Pass-by-value
var a = 1;
var b = a;

console.log(a, b); // 1  1
console.log(a === b); // true

a = 10;
console.log(a, b); // 1  10
console.log(a === b); // false
```
