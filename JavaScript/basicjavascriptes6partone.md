## 목차

1. [let](#let)
2. [const](#const)
3. [템플릿 리터럴](#템플릿-리터럴)
4. [화살표 함수](#화살표-함수)
5. [매개변수 기본값](#매개변수-기본값)
6. [Rest 파라미터](#rest-파라미터)
7. [Spread 문법](#spread-문법)
8. [Spread 문법 With 배열](#배열에서-사용하는-경우)
9. [객체 리터럴 프로퍼티 기능 확장](#객체-리터럴-프로퍼티-기능-확장)
10. [클래스](#클래스)

# let

## 블록 레벨 스코프

ES6는 블록 레벨 스코프를 따르는 변수를 선언하기 위해 let 키워드를 제공한다.

```javascript
let foo = 123; // 전역 변수

{
  let foo = 456; // 지역 변수
  let bar = 456; // 지역 변수
}

console.log(foo); // 123
console.log(bar); // ReferenceError: bar is not defined
```

## 변수 중복 선언 금지

var 키워드로는 동일한 이름을 갖는 변수를 중복해서 선언할 수 있었다.
하지만 let 키워드로는 중복 선언이 불가능하다.

```javascript
var foo = 123;
var foo = 456; // 중복 선언 허용

let bar = 123;
let bar = 456; // Uncaught SyntaxError: Identifier 'bar' has already been declared
```

## 호이스팅

자바스크립트는 모든 선언을 호이스팅한다.  
하지만 var과는 달리, let 키워드로 선언된 변수를 선언문 이전에 참조하면 참조 에러가 발생한다.

let 키워드는 var과 달리 선언 단계와 초기화 단계가 분리되어 진행되며, 변수를 위한 메모리 공간이 확보되지 않아 변수를 참조할 수 없다.

```javascript
let foo = 1; // 전역 변수

{
  console.log(foo); // ReferenceError: foo is not defined
  let foo = 2; // 지역 변수
}
```

## 전역 객체와 let

var 키워드로 선언된 변수를 전역 변수로 사용하면 전역 객체의 프로퍼티가 된다.

```javascript
var foo = 123; // 전역변수

console.log(window.foo); // 123
```

let 키워드로 선언된 변수를 전역 변수로 사용하는 경우, let 전역 변수는 전역 객체의 프로퍼티가 아니여서 window.foo 로 접근할 수 없다.  
즉, let 전역 변수는 보이지 않는 개념적인 블록 내에 존재하게 된다.

```javascript
let foo = 123; // 전역변수

console.log(window.foo); // undefined
```

# const

const는 상수를 위해 사용한다. const의 특징은 let과 대부분 동일하다.

## 선언과 초기화

let은 재할당이 자유로우나, const는 재할당이 금지된다.

```javascript
const FOO = 123;
FOO = 456; // TypeError: Assignment to constant variable.
```

주의할 점은, let과 다르게 const는 반드시 선언과 동시에 할당이 이루어저야 한다.

```javascript
const FOO; // SyntaxError: Missing initializer in const declaration
```

또한, const는 let과 동일하게 블록 레벨 스코프를 갖는다.

```javascript
{
  const FOO = 10;
  console.log(FOO); //10
}
console.log(FOO); // ReferenceError: FOO is not defined
```

## 상수

상수는 가독성과 유지보수의 편의를 위해 적극적으로 사용해야 한다.

```javascript
// 10의 의미를 알기 어렵기 때문에 가독성이 좋지 않다.
if (rows > 10) {
}

// 값의 의미를 명확히 기술하여 가독성이 향상되었다.
const MAXROWS = 10;
if (rows > MAXROWS) {
}
```

const는 객체에도 사용할 수 있지만, 역시 재할당은 불가능하다.

```javascript
const obj = { foo: 123 };
obj = { bar: 456 }; // TypeError: Assignment to constant variable.
```

## const와 객체

const는 재할당은 불가능하지만, 프로퍼티의 추가, 삭제, 프로퍼티 값의 변경은 가능하다.

```javascript
const user = { name: "Lee" };

// const 변수는 재할당이 금지된다.
// user = {}; // TypeError: Assignment to constant variable.

// 객체의 내용은 변경할 수 있다.
user.name = "Kim";

console.log(user); // { name: 'Kim' }
```

## var, let, const

변수 선언에는 기본적으로 const를 사용하고, 재할당이 필요한 경우에만 let을 사용하는 것이 좋다.
우선 const로 선언한 뒤, 필요하다면 let으로 변경해도 늦지 않는다.

# 템플릿 리터럴

ES6는 템플릿 리터럴이라고 불리는 새로운 문자열 표기법을 도입했다.
템플릿 리터럴은 일반 문자열과 비슷해 보이지만, ', " 같은 통상적인 따옴표 문자 대신 백틱 문자를 사용한다.

```javascript
const template = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`;

console.log(template);
```

템플릿 리터럴은 여러줄에 걸쳐 문자열 작성이 가능하다.

```javascript
const template = `<ul class="nav-items">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                  </ul>`;

console.log(template);
```

또한 + 연산자를 사용하지 않아도 간단한 방법으로 새 문자열을 삽입할 수 있다.  
이를 문자열 인터폴레이션이라 한다.

```javascript
const first = "Ung-mo";
const last = "Lee";

// ES5: 문자열 연결
console.log("My name is " + first + " " + last + ".");
// "My name is Ung-mo Lee."

// ES6: String Interpolation
console.log(`My name is ${first} ${last}.`);
// "My name is Ung-mo Lee."
```

# 화살표 함수

화살표 함수는 키워드 대신 화살표를 사용하여 보다 간략한 방버브로 함수를 선언할 수 있다.  
하지만 모든 경우 화살표 함수를 쓸 수는 없다.

```javascript
// 매개변수 지정 방법
    () => { ... } // 매개변수가 없을 경우
     x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
(x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

// 함수 몸체 지정 방법
x => { return x * x }  // single line block
x => x * x             // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

() => {           // multi line block.
  const x = 10;
  return x * x;
};
```

## 화살표 함수의 호출

화살표 함수는 익명 함수, 즉 함수 표현식으로만 사용 가능하다.

```javascript
// ES5
var pow = function (x) {
  return x * x;
};
console.log(pow(10)); // 100

// ES6
const pow = (x) => x * x;
console.log(pow(10)); // 100
```

또는 콜백 함수로 사용할 수 있는데, 이 경우 표현이 간결해진다.

```javascript
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) {
  // x는 요소값
  return x * x;
});

console.log(pow); // [ 1, 4, 9 ]

// ES6
const arr = [1, 2, 3];
const pow = arr.map((x) => x * x);

console.log(pow); // [ 1, 4, 9 ]
```

# 매개변수 기본값

함수를 호출할 때, 매개변수의 개수만큼 인수를 전달하는게 일반적이지만 그렇지 않아도 에러가 발생하지 않는다.  
함수는 매개변수의 개수와 인수의 개수를 체크하지 않으며, 인수가 부족한 경우 기본값은 undefined 이다.

```javascript
function sum(x, y) {
  return x + y;
}

console.log(sum(1)); // NaN
```

따라서 매개변수에 적절한 인수가 전달되었는지 함수 내부에서 체크해야 한다.

```javascript
function sum(x, y) {
  // 매개변수의 값이 falsy value인 경우, 기본값을 할당한다.
  x = x || 0;
  y = y || 0;

  return x + y;
}

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
```

ES6에서는 매개변수 기본값을 사용하여 함수 내에서 수행하던 인수 체크 및 초기화를 간소화 할 수 있다.  
매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우에만 유효하다.

```javascript
function sum(x = 0, y = 0) {
  return x + y;
}

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
```

매개변수 기본값은 함수 정의시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티와 arguments 객체에 영향을 주지 않는다.

```javascript
function foo(x, y = 0) {
  console.log(arguments);
}

console.log(foo.length); // 1

sum(1); // Arguments { '0': 1 }
sum(1, 2); // Arguments { '0': 1, '1': 2 }
```

## Rest 파라미터

Rest 파라미터(Rest Parameter, 나머지 매개변수)는 매개변수 이름 앞에 세개의 점(...) 을 붙여서 정의한 매개변수를 의미한다.  
Rest 파리미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.

함수에 전달된 인수들은 순차적으로 파라미터와 Rest 파라미터에 할당된다.

```javascript
function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest); // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);
```

Rest 파라미터는 이름 그대로 먼저 선언된 파라미터에 할당된 인수를 제외한 나머지 인수들이 모두 배열에 담겨 할당된다.  
따라서 Rest 파라미터는 반드시 마지막 파라미터이어야 한다.

```javascript
function foo( ...rest, param1, param2) { }

foo(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
```

## arguments와 Rest 파라미터

ES6에서는 rest 파라미터를 사용하여 가변 인자의 목록을 배열로 전달받을 수 있다.  
이를 통해 유사 배열인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있다.

```javascript
// ES6
function sum(...args) {
  console.log(arguments); // Arguments(5) [1, 2, 3, 4, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
  console.log(Array.isArray(args)); // true
  return args.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
```

하지만 ES6의 화살표 함수에는 함수 객체의 arguments 프로퍼티가 없기 때문에 반드시 rest 파라미터를 사용해야 한다.

```javascript
var normalFunc = function () {};
console.log(normalFunc.hasOwnProperty("arguments")); // true

const arrowFunc = () => {};
console.log(arrowFunc.hasOwnProperty("arguments")); // false
```

## Spread 문법

Spread 문법(Spread Syntax, ...)은 대상을 개별 요소로 분리한다. Spread문법의 대상은 이터러블 이여야 한다.

```javascript
// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]); // 1, 2, 3

// 문자열은 이터러블이다.
console.log(..."Hello"); // H e l l o

// Map과 Set은 이터러블이다.
console.log(
  ...new Map([
    ["a", "1"],
    ["b", "2"],
  ])
); // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3])); // 1 2 3

// 이터러블이 아닌 일반 객체는 Spread 문법의 대상이 될 수 없다.
console.log(...{ a: 1, b: 2 });
// TypeError: Found non-callable @@iterator
```

ES6의 Spread 문법(…)을 사용한 배열을 인수로 함수에 전달하면 배열의 요소를 분해하여 순차적으로 파라미터에 할당한다.

```javascript
// ES6
function foo(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

// 배열을 foo 함수의 인자로 전달하려고 한다.
const arr = [1, 2, 3];

/* ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
   spread 문법에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다. */
foo(...arr);
```

Rest 파라미터는 반드시 마지막 파라미터이어야 하지만 Spread 문법을 사용한 인수는 자유롭게 사용할 수 있다.

```javascript
// ES6
function foo(v, w, x, y, z) {
  console.log(v); // 1
  console.log(w); // 2
  console.log(x); // 3
  console.log(y); // 4
  console.log(z); // 5
}

// ...[2, 3]는 [2, 3]을 개별 요소로 분리한다(→ 2, 3)
// spread 문법에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다.
foo(1, ...[2, 3], 4, ...[5]);
```

## 배열에서 사용하는 경우

### concat

ES5에서 기존 배열의 요소를 새로운 배열 요소의 일부로 만들고 싶은 경우  
배열 리터럴 만으로 해결할 수 없고 concat 메소드를 사용해야 한다.

```javascript
// ES5
var arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
```

Spread 문법을 사용하면 배열 리터럴 만으로 기존 배열의 요소를 새로운 배열 요소의 일부로 만들 수 있다.

```javascript
// ES6
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
console.log([...arr, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]
```

### push

ES5에서 기존 배열에 다른 배열의 개별 요소를 각각 push하려면 아래와 같은 방법을 사용한다.

```javascript
// ES5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

// apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 push 메소드에 전달된다.
Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

Spread 문법을 사용하면 아래와 같이 보다 간편하게 표현할 수 있다.

```javascript
// ES6
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ...arr2는 [4, 5, 6]을 개별 요소로 분리한다
arr1.push(...arr2); // == arr1.push(4, 5, 6);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

### splice

ES5에서 기존 배열에 다른 배열의 개별 요소를 삽입하려면 아래와 같은 방법을 사용한다.

```javascript
// ES5
var arr1 = [1, 2, 3, 6];
var arr2 = [4, 5];

/*
apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 splice 메소드에 전달된다.
[3, 0].concat(arr2) → [3, 0, 4, 5]
arr1.splice(3, 0, 4, 5) → arr1[3]부터 0개의 요소를 제거하고 그자리(arr1[3])에 새로운 요소(4, 5)를 추가한다.
*/
Array.prototype.splice.apply(arr1, [3, 0].concat(arr2));

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

Spread 문법을 사용하면 아래와 같이 보다 간편하게 표현할 수 있다.

```javascript
// ES6
const arr1 = [1, 2, 3, 6];
const arr2 = [4, 5];

// ...arr2는 [4, 5]을 개별 요소로 분리한다
arr1.splice(3, 0, ...arr2); // == arr1.splice(3, 0, 4, 5);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
```

### copy

ES5에서 기존 배열을 복사하기 위해서는 slice 메소드를 사용한다.

```javascript
// ES5
var arr = [1, 2, 3];
var copy = arr.slice();

console.log(copy); // [ 1, 2, 3 ]

// copy를 변경한다.
copy.push(4);

console.log(copy); // [ 1, 2, 3, 4 ]
// arr은 변경되지 않는다.
console.log(arr); // [ 1, 2, 3 ]
```

Spread 문법을 사용하면 보다 간편하게 배열을 복사할 수 있다.

```javascript
// ES6
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
const copy = [...arr];

console.log(copy); // [ 1, 2, 3 ]

// copy를 변경한다.
copy.push(4);

console.log(copy); // [ 1, 2, 3, 4 ]
// arr은 변경되지 않는다.
console.log(arr); // [ 1, 2, 3 ]
```

# 객체 리터럴 프로퍼티 기능 확장

ES5에서 객체 리터럴의 프로퍼티는 프로퍼티 이름과 프로퍼티 값으로 구성된다. 프로퍼티의 값은 변수에 할당된 값일 수도 있다.

```javascript
// ES5
var x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj); // { x: 1, y: 2 }
```

ES6에서는 프로퍼티 값으로 변수를 사용하는 경우, 프로퍼티 이름을 생략(Property shorthand)할 수 있다.  
이때 프로퍼티 이름은 변수의 이름으로 자동 생성된다.

```javascript
// ES6
let x = 1,
  y = 2;

const obj = { x, y };

console.log(obj); // { x: 1, y: 2 }
```

## 프로퍼티 키 동적 생성

문자열 또는 문자열로 변환 가능한 값을 반환하는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수 있다.  
프로퍼티 키로 사용할 표현식을 대괄호로 묶어야 한다.

ES5에서 프로퍼티 키를 동적으로 생성하려면 객체 리터럴 외부에서 대괄호([…]) 표기법을 사용해야 한다.

```javascript
// ES5
var prefix = "prop";
var i = 0;

var obj = {};

obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

ES6에서는 객체 리터럴 내부에서도 프로퍼티 키를 동적으로 생성할 수 있다.

```javascript
// ES6
const prefix = "prop";
let i = 0;

const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

## 메소드 축약 표현

ES5에서 메소드를 선언하려면 프로퍼티 값으로 함수 선언식을 할당한다.

```javascript
// ES5
var obj = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};

obj.sayHi(); // Hi! Lee
```

ES6에서는 메소드를 선언할 때, function 키워드를 생략한 축약 표현을 사용할 수 있다.

```javascript
// ES6
const obj = {
  name: "Lee",
  // 메소드 축약 표현
  sayHi() {
    console.log("Hi! " + this.name);
  },
};

obj.sayHi(); // Hi! Lee
```

# 디스트럭처링

## 배열 디스트럭처링

ES5에서 배열의 각 요소를 배열로부터 디스트럭처링하여 변수에 할당하기 위한 방법은 아래와 같다.

```javascript
// ES5
var arr = [1, 2, 3];

var one = arr[0];
var two = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3
```

ES6의 배열 디스트럭처링은 배열의 각 요소를 배열로부터 추출하여 변수 리스트에 할당한다. 이때 추출/할당 기준은 배열의 인덱스이다.

```javascript
// ES6 Destructuring
const arr = [1, 2, 3];

// 배열의 인덱스를 기준으로 배열로부터 요소를 추출하여 변수에 할당
// 변수 one, two, three가 선언되고 arr(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
const [one, two, three] = arr;
// 디스트럭처링을 사용할 때는 반드시 initializer(초기화자)를 할당해야 한다.
// const [one, two, three]; // SyntaxError: Missing initializer in destructuring declaration

console.log(one, two, three); // 1 2 3
```

ES6의 배열 디스트럭처링은 배열에서 필요한 요소만 추출하여 변수에 할당하고 싶은 경우에 유용하다. 아래의 코드는 Date 객체에서 년도, 월, 일을 추출하는 예제이다.

```javascript
const today = new Date(); // Tue May 21 2019 22:19:42 GMT+0900 (한국 표준시)
const formattedDate = today.toISOString().substring(0, 10); // "2019-05-21"
const [year, month, day] = formattedDate.split("-");
console.log([year, month, day]); // [ '2019', '05', '21' ]
```

## 객체 디스트럭처링

ES5에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 이름(키)을 사용해야 한다.

```javascript
// ES5
var obj = { firstName: "Ungmo", lastName: "Lee" };

var firstName = obj.firstName;
var lastName = obj.lastName;

console.log(firstName, lastName); // Ungmo Lee
```

ES6의 객체 디스트럭처링은 객체의 각 프로퍼티를 객체로부터 추출하여 변수 리스트에 할당한다. 이때 할당 기준은 프로퍼티 이름(키)이다.

```javascript
// ES6 Destructuring
const obj = { firstName: "Ungmo", lastName: "Lee" };

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
// 변수 lastName, firstName가 선언되고 obj(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
const { lastName, firstName } = obj;

console.log(firstName, lastName); // Ungmo Lee
```

객체 디스트럭처링은 객체에서 프로퍼티 이름(키)으로 필요한 프로퍼티 값만을 추출할 수 있다. 아래의 코드를 살펴보자.

```javascript
const todos = [
  { id: 1, content: "HTML", completed: true },
  { id: 2, content: "CSS", completed: false },
  { id: 3, content: "JS", completed: false },
];

// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]
```
