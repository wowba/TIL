// Product 타입과 기록을 위한 함수 생성

interface ProductA {
  id: number;
  name: string;
  price: number;
}

function logProductA(product: ProductA) {
  const id: number = product.id;
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}

// 객체 레터럴에 타입을 지정할 경우 아래와 같이 코드 변경시 수정사항 추가

interface ProductB {
  id: string;
  name: string;
  price: number;
}

function logProductB(product: ProductB) {
  const id: number = product.id;
     // ~~ Type 'string' is not assignable to type 'number'
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}

// 함수 내의 명시적 타입을 제거하고, 비구조화 할당문을 사용해 구현 
// --> 모든 지역 변수의 타입이 추론됨.

interface ProductC {
  id: string;
  name: string;
  price: number;
}
function logProductC(product: ProductC) {
  const {id, name, price} = product;
  console.log(id, name, price);
}

// 오히려 추가로 명시적 타입 지정시 불필요한 코드 추가

interface ProductD {
  id: string;
  name: string;
  price: number;
}
function logProductD(product: ProductD) {
  const {id, name, price}: {id: string; name: string; price: number } = product;
  console.log(id, name, price);
}

