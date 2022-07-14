"use strict";
// 정적 타이핑은 타입을 명시적으로 선언하며, 타입이 결정된 후에는 타입을 변경할 수 없다.
// 잘못된 타입의 값이 할당 또는 반환되면 컴파일러는 이를 감지해 에러를 발생시킨다.
let fool;
let bars;
let baz;
fool = `hello`;
bars = 123;
// baz = `true`; -> error: Type '"true"' is not assignable to type 'boolean'.
// 정적 타이핑은 변수는 물론 함수의 매개변수와 반환값에서도 사용할 수 있다.
function add(x, y) {
    return x + y;
}
console.log(add(1, 2)); // 3
// console.log(add("1", "2")); // type "string" is not assignable to parameter of type "number"
