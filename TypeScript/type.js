"use strict";
let foo = "hello";
let bar = 213;
// 함수 선언식
function multiply1(x, y) {
    return x * y;
}
// 함수 표현식
const multiply2 = (x, y) => x * y;
console.log(multiply1(2, 5));
console.log(multiply2(10, 2));
// boolean
let isTrue = true;
// null
let n = null;
// undefined
let u = undefined;
// number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// string
let color = "blue";
color = "red";
let myName = "Lee";
let greeting = `hello my name is ${myName}`;
// object
const obj = {};
// array
let list1 = [1, "two", true];
let list2 = [1, 2, 3];
let list3 = [1, 2, 3];
// tuple
let tuple;
tuple = [`hello`, 10];
// tuple = [10, "hello"]; -> 에러 발생!
// enum : 열거형은 숫자형 집합에 이름을 저장한 것.
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color1.Green;
console.log(c1); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green;
console.log(c2); // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
let c3 = Color3.Blue;
console.log(c3);
/*
any : 타입 추론을 할 수 없거나 타입 체크가 필요 없는 변수에 사용한다.
var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있다.
*/
let notSure = 4;
console.log("notSure = " + notSure);
notSure = `maybe a string instead`;
console.log("notSure = " + notSure);
notSure = false;
console.log("notSure = " + notSure);
// void : 일반적으로 함수에서 반환값이 없을때 사용한다.
function warnUser() {
    console.log("no return function");
}
console.log(warnUser());
// never : 결코 발생하지 않는 값
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
// 객체의 유형도 타입이 될 수 있다.
const today = new Date();
