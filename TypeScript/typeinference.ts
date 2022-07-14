// 만약 타입스크립트에서 타입 선언을 생략하면 값이 할당되는 과정에서 동적으로 타입이 결정된다.
// 이를 타입 추론(Type Inference 라고 한다.)

let num = 123; // num 변수에 number 타입 지정
// num = `hi`; // 타입 지정 에러 발생

// 타입 선언을 생략하고 값도 할당하지 않는다면 any 타입이 지정된다.

let any;

any = `hello`;
console.log(typeof any);

any = true;
console.log(typeof any);

// as 키워드 혹은 <>연산자를 사용하면 타입 캐스팅이 가능하다.
