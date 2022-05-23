## 목차

1. [함수 정의](#함수-정의)
2. [함수 호이스팅](#함수-호이스팅)
3. [함수의 다양한 형태](#함수의-다양한-형태)

# 함수 정의

함수를 정의하는 방식은 3가지가 있다.

- 함수 선언문
- 함수 표현식
- Function 생성자 함수

## 함수 선언문

함수 선언문 방식으로 정의한 함수는 function 키워드와 이하의 내용으로 구성된다.

```javascript
// 함수 선언문
function square(number) {
  return number * number;
}
```

## 함수 표현식

자바스크립트는 함수 리터럴 방식으로 함수를 정의하고 변수에 할당할 수 있다.

```javascript
// 함수 표현식
var square = function (number) {
  return number * number;
};
```

함수 표현식 방식으로 정의한 함수는 함수명을 생략할 수 있다. 이러한 함수를 익명 함수 라고 한다.  
함수 표현식에서는 함수명을 생략하는것이 일반적이다.

```javascript
// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
  return a * b;
};

// 익명 함수 표현식(anonymous function expression)
var bar = function (a, b) {
  return a * b;
};

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined
```

# 함수 호이스팅

```javascript
var res = square(5);

function square(number) {
  return number * number;
}
```

위 코드와 같이 선언문으로 함수가 정의되기 이전에 함수 호출이 가능하다.  
함수 선언문의 경우 위치와는 상관없이 코드 내 어느 곳에서든지 호출이 가능한데, 이를 함수 호이스팅 이라고 한다.

자바스크립트는 ES6의 let, const를 포함하여 모든 선언(var, let, const, function, class 등..)을 호이스팅 한다.

호이스팅이란 var 선언문, function 선언문 등 모든 선언문이 해당 scope의 선두로 옮겨진 것처럼 동작하는 특성을 말한다.  
즉 자바스크립트는 모든 선언문이 선언되기 이전에 참조 가능하다.

함수 선언문으로 정의된 함수는 자바스크립트 엔진이 스크립트가 로딩되는 시점에 바로 초기화하고 이를 VO에 저장한다.  
즉 함수 선언, 초기화, 할당이 한번에 이루어진다. 그러기 때문에 함수 선언의 위치와는 상관 없이 소스 내 어느 곳에서든지 호출이 가능하다.

다음은 함수 표현식으로 함수를 정의한 경우이다.

```javascript
var res = square(5); // TypeError: square is not a function

var square = function (number) {
  return number * number;
};
```

위의 경우 함수 선언문과는 달리 TypeError 가 발생한다. 이 경우, 변수 호이스팅이 발생한다.

```
변수 호이스팅의 경우 변수 생성 및 초기화와 할당이 분리되어 진행한다. 호이스팅된 변수는 undefined 로 초기화 되고
실제값의 할당은 할당문에서 이루어 진다.
```

함수 표현식은 함수 선언문과는 달리 스크립트 로딩 시점에 변수 객체에 함수를 할당하지 않고 runtime에 해석되고 실행하므로  
이 두가지를 구분하는 것은 중요하다.

함수 호이스팅이 함수 호출 전 반드시 함수를 선언하여야 한다는 규칙을 무시하므로 코드의 구조를 엉성하게 만들 수 있기 때문에  
함수 표현식만을 사용할 것을 권장하며, 또한 함수 선언문으로 함수를 정의하면 너무 많은 코드를 VO에 저장하므로  
애플리케이션의 응답 속도는 현저히 떨어질 수 있다.

# 함수의 다양한 형태

## 즉시 실행 함수

함수의 정의와 동시에 실행되는 함수를 즉시 실행 함수라고 한다.  
최초 한번만 호출되며 다시 호출할 수는 없으며, 이러한 특징을 이용하여 최초 한번만 실행이 필요한 초기화 처리등에 사용할 수 있다.

```javascript
// 기명 즉시 실행 함수(named immediately-invoked function expression)
(function myFunction() {
  var a = 3;
  var b = 5;
  return a * b;
}());

// 익명 즉시 실행 함수(immediately-invoked function expression)
(function () {
  var a = 3;
  var b = 5;
  return a * b;
}());

// SyntaxError: Unexpected token (
// 함수선언문은 자바스크립트 엔진에 의해 함수 몸체를 닫는 중괄호 뒤에 ;가 자동 추가된다.
function () {
  // ...
}(); // => };();

// 따라서 즉시 실행 함수는 소괄호로 감싸준다.
(function () {
  // ...
}());

(function () {
  // ...
})();
```

자바스크립트의 문제 중 하나는 글로벌 스코프에 선언된 변수, 함수는 어디서든 접근이 가능한 점인데,  
즉시 실행함수 내에 처리 로직을 모아놓으면 혹시 있을 수 있는 변수 혹은 함수명의 충돌을 방지할 수 있어  
이를 위한 목적으로 즉시실행함수를 사용하기도 한다.

## 내부 함수

함수 내부에 정의된 함수를 내부함수라고 한다.  
자식함수는 부모함수에 접근할 수 있지만, 부모함수는 자식함수의 변수에 접근할 수 없다.

또한 내부함수는 부모함수의 외부에서 접근할 수 없다.

```javascript
function parent(param) {
  var parentVar = param;
  function child() {
    var childVar = "lee";
    console.log(parentVar + " " + childVar); // Hello lee
  }
  child();
  console.log(parentVar + " " + childVar);
  // Uncaught ReferenceError: childVar is not defined
}
parent("Hello");
```

## 콜백 함수

콜백함수는 함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수를 말한다.

콜백 함수가 자주 사용되는 대표적인 예는 이벤트 핸들러 처리이다.

```html
<!DOCTYPE html>
<html>
  <body>
    <button id="myButton">Click me</button>
    <script>
      var button = document.getElementById("myButton");
      button.addEventListener("click", function () {
        console.log("button clicked!");
      });
    </script>
  </body>
</html>
```

콜백함수는 주로 비동기식 처리 모델에 사용된다.  
비동기식 처리 모델은 처리가 종료되면 호출될 함수를 미리 매개변수에 전달하고, 처리가 종료되면 콜백함수를 호출하는 것이다.
