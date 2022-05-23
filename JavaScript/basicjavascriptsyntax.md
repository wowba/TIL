# 자바스크립트의 기본 문법

1. [변수](#변수)
2. [값](#값)
3. [연산자](#연산자)
4. [키워드](#키워드)
5. [표현식](#표현식)
6. [함수](#함수)
7. [객체](#객체)
8. [배열](#배열)
9. [변수 호이스팅](#변수-호이스팅)
10. [비교 연산자](#비교-연산자)
11. [typeof 연산자](#typeof-연산자)
12. [switch 문](#switch-문)
13. [타입 변환](#타입-변환)

## 변수

변수는 값을 저장하고 저장한 값을 참조하기 위해 사용. 한번 쓰고 버리는 값이 아닌 유지할 필요가 있는 값은  
변수에 담아 사용한다. 또한 변수 이름을 통해 값의 의미를 명확히 알 수 있어 코드의 가독성이 좋아짐

변수 선언시 `var` 을 사용하며 할당 연산자 `=`는 변수에 값을 할당할 때 사용

```
var x; 변수 선언
x = 6; 변수 할당
```

## 값

```javascript
var str = "Hello World";
변수 선언 및 문자열 리터럴을 값으로 할당.
```

```
다양한 리터럴 표기법
// 숫자 리터럴
10.50
1001

// 문자열 리터럴
'Hello'
"World"

// 불리언 리터럴
true
false

// null 리터럴
null

// undefined 리터럴
undefined

// 객체 리터럴
{ name: 'Lee', gender: 'male' }

// 배열 리터럴
[ 1, 2, 3 ]

// 정규표현식 리터럴
/ab+c/

// 함수 리터럴
function() {}
```

자바스크립트의 모든 값은 데이터 타입을 가지며, 총 7가지 타입을 제공한다.

- 원시타입
  - number
  - string
  - boolean
  - null
  - undefined
  - symbol
- 객체타입
  - object

자바스크립트는 C나 Java와는 다르게 변수를 선언할 때 데이터 타입을 미리 지정하지 않는다.  
변수에 할당된 값의 타입에 의해 동적으로 변수의 타입이 결정된다. 이를 동적 타이핑이라 하며 자바스크립트의 특징중 하나이다.

```javascript
// Number
var num1 = 1001;
var num2 = 10.5;

// String
var string1 = "Hello";
var string2 = "World";

// Boolean
var bool = true;

// null
var foo = null;

// undefined
var bar;

// Object
var obj = { name: "Lee", gender: "male" };

// Array
var array = [1, 2, 3];

// function
var foo = function () {};
```

## 연산자

연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산등을 수행해 하나의 값을 만든다.  
이때 연산의 대상을 피연산자 라고 한다.

```javascript
// 산술 연산자
var area = 5 * 4; // 20

// 문자열 연결 연산자
var str = "My name is " + "Lee"; // "My name is Lee"

// 할당 연산자
var color = "red"; // "red"

// 비교 연산자
var foo = 3 > 5; // false

// 논리 연산자
var bar = 5 > 3 && 2 < 4; // true

// 타입 연산자
var type = typeof "Hi"; // "string"

// 인스턴스 생성 연산자
var today = new Date(); // Sat Dec 01 2018 00:57:19 GMT+0900 (한국 표준시)
```

피연산자의 타입은 반드시 일치할 필요는 없다. 이때 자바스크립트는 암묵적 타입 강제 변환을 통해 연산을 수행한다.

```javascript
var foo = 1 + "10"; // '110'
var bar = 1 * "10"; // 10
```

## 키워드

키워드는 수행할 동작을 규정한 것. 예로 var 키워드는 새로운 변수를 생성할 것을 지시.

```javascript
// 변수의 선언
var x = 5 + 6;

// 함수의 선언
function foo(arg) {
  // 함수 종료 및 값의 반환
  return ++arg;
}

var i = 0;
// 반복문
while (1) {
  if (i > 5) {
    // 반복문 탈출
    break;
  }
  console.log(i);
  i++;
}
```

## 표현식

표현식은 하나의 값으로 평가된다. 값, 변수, 객체의 프로퍼티, 배열의 요소, 함수 호출, 메소드 호출 등등은 모두 표현식이며 하나의 값으로 평가된다.  
표현식은 결국 하나의 값이 되기 때문에 다른 표현식의 일부가 되어 조금 더 복잡한 표현식을 구성할 수도 있다.

```
// 표현식
5             // 5
5 * 10        // 50
5 * 10 > 10   // true
(5 * 10 > 10) && (5 * 10 < 100)  // true
```

## 함수

함수는 호출에 의해 실행된다.

```javascript
// 함수의 정의(함수 선언문)
function square(number) {
  return number * number;
}

// 함수의 호출
square(2); // 4
```

## 객체

자바스크립트는 객체 기반의 스크립트 언어이며, 자바스크립트를 이루고 있는 모든것이 객체이다.  
원시타입을 제외한 나머지 값들은 모두 객체로 존재한다.

자바스크립트의 객체는 키와 값으로 구성된 프로퍼티의 집합이다. 프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다.  
자바스크립트의 함수는 일급 객체이므로 값으로 취급할 수 있다. 따라서 프로퍼티 값으로 함수를 사용할 수 있으며  
프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메소드라고 부른다.

```javascript
var person = {
  name: "Lee",
  gender: "male",
  sayHello: function () {
    console.log("Hi! My name is " + this.name);
  },
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee
```

이와 같이 객체는 데이터를 의미하는 프로퍼티와 데이터를 참조하고 조작할 수 있는 동작을 의미하는 메소드로 구성된 집합이다.  
객체는 데이터와 그 데이터에 관련되는 동작을 모두 포함할 수 있기 때문에, 데이터와 동작을 하나의 단위로 구조화할 수 있어 유용하다.

자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 "프로토타입"이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다.  
이 프로토타입은 타 언어와 구별되는 중요한 개념이다.

## 배열

배열은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용한다. 자바스크립트의 배열은 객체이며 내장 메소드를 포함한다.

```javascript
var arr = [1, 2, 3, 4, 5];

console.log(arr[1]); // 2
```

## 변수 호이스팅

```javascript
console.log(foo); // ① undefined
var foo = 123;
console.log(foo); // ② 123
{
  var foo = 456;
}
console.log(foo); // ③ 456
```

1행에서 코드 순서상 ReferenceError: foo is not defined 가 나와야 하지만 undefined 라고 출력된다.  
그 이유는 자바스크립트의 특징으로 모든 선언문은 호이스팅 되기 때문이다.

호이스팅이란 자바스크립트의 모든 선언문이 해당 Scope의 선두로 옮겨진 것을 말한다. 즉, 자바스크립트는 모든 선언문이 선언되기 이전에 참조 가능하다.

변수가 생성되는 과정은 다음과 같다.

- 선언 단계
  - 변수 객체에 변수를 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.
- 초기화 단계
  - 변수 객체에 등록된 변수를 메모리에 할당한다. 이 단계에서 변수는 undefined 로 초기화된다.
- 할당 단계
  - undefined로 초기화된 변수에 실제 값을 할당한다.

자바스크립트의 변수는 함수 레벨 스코프를 가지고 있지만,  
ES6에서 도입된 let, const 키워드를 사용하면 블록 레벨 스코프를 사용할 수 있다.

```
함수 레벨 스코프(Function-level scope)
함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.

블록 레벨 스코프(Block-level scope)
코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다.
```

## var 키워드로 선언된 변수의 문제점

ES5 에서 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이였다.  
var 키워드로 선언된 변수는 아래와 같은 특징을 갖는다.

- 함수 레벨 스코프
  - 전역 변수의 남발
  - for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.
- var 키워드 생략 허용
  - 의도하지 않은 변수의 전역화
- 중복 선언 허용
  - 의도하지 않은 변수값 변경
- 변수 호이스팅
  - 변수를 선언하기 전에 참조가 가능하다.

대부분의 문제는 전역 변수로 인해 발생한다. 전역 변수는 간단한 애플리케이션의 경우 사용이 편리한 면이 있지만  
불가피한 상황을 제외하고 사용을 억제해야 한다.

전역 변수는 유효 범위가 넓어서 어디에서 어떻게 사용될지 파악하기 힘들고, 이는 의도치 않은 변수의 변경이 발생할 수 있는 가능성이 증가한다.  
또한 여러 함수와 상호 의존하는 등 부수 효과가 있을 수 있어서 복잡성이 증가한다.  
즉, 변수의 유효 범위는 좁을수록 좋다. 이 단점을 보완하기 위해 let과 const 키워드를 도입하였다.

# 비교 연산자

비교 연산자는 좌항과 우항의 피연산자를 비교, Boolean 값을 반환한다.

## 동등 / 일치 비교 연산자

| 비교 연산자 | 의미        | 사례    | 설명                     |
| ----------- | ----------- | ------- | ------------------------ |
| ==          | 동등 비교   | x == y  | x와 y의 값이 같음        |
| ===         | 일치 비교   | x === y | x와 y의 값과 타입이 같음 |
| !=          | 부등 비교   | x != y  | x와 y의 값이 다름        |
| !==         | 불일치 비교 | x !== y | x와 y의 값과 타입이 다름 |

주의! 동등 비교 연산자는 수많은 부작용을 야기하므로 보통 일치, 불일치 연산자를 사용한다.

# 삼항 연산자

삼항 조건 연산자는 조건식의 결과에 따라 반환할 값을 결정한다.  
자바스크립트의 유일한 삼항 연산자이며 부수 효과는 없고, 다음과 같이 표기한다.

```
조건식 ? 조건식이 true일때 반환할 값 : 조건식이 false 일때 반환할 값
```

```javascript
var x = 2;
var result = x % 2 ? "홀수" : "짝수";

console.log(result); // 짝수
```

# typeof 연산자

typeof 연산자는 자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환한다.

```javascript
typeof ""; // "string"
typeof 1; // "number"
typeof NaN; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof Symbol(); // "symbol"
typeof null; // "object"
typeof []; // "object"
typeof {}; // "object"
typeof new Date(); // "object"
typeof /test/gi; // "object"
typeof function () {}; // "function"
```

하지만 null을 비교할 경우에는 일치 연산자를 사용해야 한다.

```javascript
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null); // true
```

# switch 문

switch문은 switch문의 표현식을 평가, 그 값과 일치하는 표현식을 갖는 case 문으로 실행 순서를 이동시킨다.  
case 문은 상황을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 그 뒤 실행할 문들을 위치시킨다.  
switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없다면 실행 순서는 default 문으로 이동한다.

```javascript
switch (표현식) {
  case 표현식1:
    switch 문의 표현식과 표현식1이 일치하면 실행될 문;
    break;
  case 표현식2:
    switch 문의 표현식과 표현식2가 일치하면 실행될 문;
    break;
  default:
    switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;
}
```

예시

```javascript
var month = 11;
var monthName;

switch (month) {
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}

console.log(monthName); // November
```

만약 case문에 break;가 없다면, 계속해서 switch 문을 탐색하고 default문을 실행시킨다.

# 타입 변환

자바스크립트의 모든 값은 타입이 존재하며, 다른 타입으로 의도적으로 변환되거나  
자바스크립트 엔진에 의해 암묵적으로 자동 변환될 수 있다.  
개발자에 의해 의도적으로 값의 타입을 변경하는 것을 명시적 타입 변환 혹은 타입 캐스팅 이라 한다.

```javascript
var x = 10;

// 명시적 타입 변환
var str = x.toString(); // 숫자를 문자열로 타입 캐스팅한다.
console.log(typeof str); // string
```

```javascript
var x = 10;

// 암묵적 타입 변환
// 숫자 타입 x의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가한다.
var str = x + "";

console.log(typeof str, str); // string 10

// 변수 x의 값이 변경된 것은 아니다.
console.log(x); // 10
```
