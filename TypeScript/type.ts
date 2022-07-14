let foo: string = "hello";

let bar: number = 213;

// 함수 선언식
function multiply1(x: number, y: number) {
  return x * y;
}

// 함수 표현식
const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(2, 5));
console.log(multiply2(10, 2));

// boolean
let isTrue: boolean = true;

// null
let n: null = null;

// undefined
let u: undefined = undefined;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = "red";
let myName: string = "Lee";
let greeting: string = `hello my name is ${myName}`;

// object
const obj: object = {};

// array
let list1: any[] = [1, "two", true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3];

// tuple
let tuple: [string, number];
tuple = [`hello`, 10];
// tuple = [10, "hello"]; -> 에러 발생!

// enum : 열거형은 숫자형 집합에 이름을 저장한 것.
enum Color1 {
  Red,
  Green,
  Blue,
}
let c1: Color1 = Color1.Green;
console.log(c1); // 1

enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let c2: Color2 = Color2.Green;
console.log(c2); // 2

enum Color3 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c3: Color3 = Color3.Blue;

console.log(c3);

/*
any : 타입 추론을 할 수 없거나 타입 체크가 필요 없는 변수에 사용한다.
var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당할 수 있다.
*/
let notSure: any = 4;
console.log("notSure = " + notSure);

notSure = `maybe a string instead`;
console.log("notSure = " + notSure);

notSure = false;
console.log("notSure = " + notSure);

// void : 일반적으로 함수에서 반환값이 없을때 사용한다.
function warnUser(): void {
  console.log("no return function");
}
console.log(warnUser());

// never : 결코 발생하지 않는 값
function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw new Error(message);
}

// 객체의 유형도 타입이 될 수 있다.
const today: Date = new Date();
