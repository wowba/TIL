interface Product {
  id: string;
  name: string;
  price: number;
}

function logProduct(product: Product) {
  const id: number = product.id;
     // ~~ Type 'string' is not assignable to type 'number'
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}

// 객체 레터럴에 Product 타입 지정시 오류를 효과적으로 파악 가능

const elmo: Product = {
  name: 'Tickle Me Elmo',
  id: '048188 627152',
  price: 28.99,
};
logProduct(elmo);

// 객체 레터럴에 타입을 지정하지 않으면 에러를 찾기 힘들어짐 

const furby = {
  name: 'Furby',
  id: 630509430963,
  price: 35,
};
logProduct(furby);
        // ~~~~~ Argument .. is not assignable to parameter of type 'Product'
        //         Types of property 'id' are incompatible
        //         Type 'number' is not assignable to type 'string'

// 타입 지정시 잉여 속성 체크 동작, 에러 찾기 수월.

const hello: Product = {
  name: 'Furby',
  id: 630509430963,
// ~~ Type 'number' is not assignable to type 'string'
  price: 35,
};
logProduct(furby);
       