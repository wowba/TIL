## 목차

1. [클래스](#클래스)

   - [인스턴스 생성](#인스턴스-생성)

   - [constructor](#consrtructor)

   - [클래스 필드](#클래스-필드)

   - [getter / setter](#getter--setter)

   - [정적 메소드](#정적-메소드)

   - [클래스 상속](#클래스-상속)

# 클래스

ES6의 클래스는 클래스 기반 언어에 익숙한 프로그래머가 빠르게 학습할 수 있는 간단명료한 새로운 문법을 제시한다.

## 클래스 정의

ES6 클래스는 class 키워드를 사용하여 정의한다.  
클래스 이름은 파스칼 케이스를 사용하는것이 보편적이다.

```javascript
// 클래스 선언문
class Person {
  // constructor(생성자)
  constructor(name) {
    this._name = name;
  }

  sayHi() {
    console.log(`Hi! ${this._name}`);
  }
}

// 인스턴스 생성
const me = new Person("Lee");
me.sayHi(); // Hi! Lee

console.log(me instanceof Person); // true

클래스는 클래스 선언문 이전에 참조할 수 없다.
console.log(Foo);
// ReferenceError: Cannot access 'Foo' before initialization

class Foo {}
```

## 인스턴스 생성

생성자 함수처럼 new 연산자와 함께 클래스 이름을 호출하면 클래스의 인스턴스가 생성된다.

```javascript
class Foo {}

const foo = new Foo();
```

new 연산자를 사용하지 않고 constructor를 호출하면 타입 에러(TypeError)가 발생한다. constructor는 new 연산자 없이 호출할 수 없다.

```javascript
class Foo {}

const foo = Foo(); // TypeError: Class constructor Foo cannot be invoked without 'new'
```

## consrtructor

constructor는 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 특수한 메소드이다.

- 클래스 필드 : 클래스 내부의 캡슐화된 변수를 말한다. 데이터 멤버 또는 멤버 변수라고도 부른다.  
  클래스 필드는 인스턴스의 프로퍼티 또는 정적 프로퍼티가 될 수 있다.  
  쉽게 말해, 자바스크립트의 생성자 함수에서 this에 추가한 프로퍼티를 클래스 기반 객체지향 언어에서는 클래스 필드라고 부른다.

```javascript
// 클래스 선언문
class Person {
  // constructor(생성자). 이름을 바꿀 수 없다.
  constructor(name) {
    // this는 클래스가 생성할 인스턴스를 가리킨다.
    // _name은 클래스 필드이다.
    this._name = name;
  }
}

// 인스턴스 생성
const me = new Person("Lee");
console.log(me); // Person {_name: "Lee"}
```

constructor는 클래스 내에 한 개만 존재할 수 있으며 만약 클래스가 2개 이상의 constructor를 포함하면 문법 에러(SyntaxError)가 발생한다.  
인스턴스를 생성할 때 new 연산자와 함께 호출한 것이 바로 constructor이며 constructor의 파라미터에 전달한 값은 클래스 필드에 할당한다.

constructor는 생략할 수 있다. constructor를 생략하면 클래스에 constructor() {}를 포함한 것과 동일하게 동작한다. 즉, 빈 객체를 생성한다.  
따라서 인스턴스에 프로퍼티를 추가하려면 인스턴스를 생성한 이후, 프로퍼티를 동적으로 추가해야 한다.

```javascript
class Foo {}

const foo = new Foo();
console.log(foo); // Foo {}

// 프로퍼티 동적 할당 및 초기화
foo.num = 1;
console.log(foo); // Foo&nbsp;{ num: 1 }
```

constructor는 인스턴스의 생성과 동시에 클래스 필드의 생성과 초기화를 실행한다.  
따라서 클래스 필드를 초기화해야 한다면 constructor를 생략해서는 안된다.

```javascript
class Foo {
  // constructor는 인스턴스의 생성과 동시에 클래스 필드의 생성과 초기화를 실행한다.
  constructor(num) {
    this.num = num;
  }
}

const foo = new Foo(1);

console.log(foo); // Foo { num: 1 }
```

## 클래스 필드

클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다.

```javascript
class Foo {
  constructor(name = "") {
    this.name = name; // 클래스 필드의 선언과 초기화
  }
}
const foo = new Foo("Lee");
console.log(foo); // Foo { name: 'Lee' }
```

## getter / setter

getter는 클래스 필드에 접근할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다. getter는 메소드 이름 앞에 get 키워드를 사용해 정의한다.

```javascript
class Foo {
  constructor(age = ``) {
    this.age = age;
  }

  // getter: get 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드 이름처럼 사용된다.
  get getage() {
    // getter는 반드시 무언가를 반환해야 한다.
    return this.age;
  }
  // setter: set 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드 이름처럼 사용된다.
  set setage(age) {
    this.age = age;
  }
}

const foo = new Foo(26);
// 필드 firstElem에 접근하면 getter가 호출된다.
console.log(foo.getage); // 26

// 클래스 필드에 값을 할당하면 setter가 호출된다.
foo.setage = 22;
console.log(foo.getage); // 22
```

## 정적 메소드

클래스의 정적 메소드를 정의할 때 static 키워드를 사용한다. 정적 메소드는 인스턴스가 아닌, 클래스 이름으로 호출한다.  
즉, 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.

```javascript
class Foo {
  constructor(prop) {
    this.prop = prop;
  }

  static staticMethod() {
    /*
    정적 메소드는 this를 사용할 수 없다.
    정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다.
    */
    return "staticMethod";
  }

  prototypeMethod() {
    return this.prop;
  }
}

// 정적 메소드는 클래스 이름으로 호출한다.
console.log(Foo.staticMethod());

const foo = new Foo(123);
// 정적 메소드는 인스턴스로 호출할 수 없다.
console.log(foo.staticMethod()); // Uncaught TypeError: foo.staticMethod is not a function
```

## 클래스 상속

### extends

extends 키워드는 부모 클래스를 상속받는 자식 클래스를 정의할 때 사용한다.

```javascript
// 부모 클래스
class Circle {
  constructor(radius) {
    this.radius = radius; // 반지름
  }

  // 원의 지름
  getDiameter() {
    return 2 * this.radius;
  }

  // 원의 둘레
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  // 원의 넓이
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// 자식 클래스
class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius);
    this.height = height;
  }

  // 원통의 넓이: 부모 클래스의 getArea 메소드를 오버라이딩하였다.
  getArea() {
    // (원통의 높이 * 원의 둘레) + (2 * 원의 넓이)
    return this.height * super.getPerimeter() + 2 * super.getArea();
  }

  // 원통의 부피
  getVolume() {
    return super.getArea() * this.height;
  }
}

// 반지름이 2, 높이가 10인 원통
const cylinder = new Cylinder(2, 10);

// 원의 지름
console.log(cylinder.getDiameter()); // 4
// 원의 둘레
console.log(cylinder.getPerimeter()); // 12.566370614359172
// 원통의 넓이
console.log(cylinder.getArea()); // 150.79644737231007
// 원통의 부피
console.log(cylinder.getVolume()); // 125.66370614359172

// cylinder는 Cylinder 클래스의 인스턴스이다.
console.log(cylinder instanceof Cylinder); // true
// cylinder는 Circle 클래스의 인스턴스이다.
console.log(cylinder instanceof Circle); // true
```

### super 키워드

super 키워드는 부모 클래스를 참조할때, 혹은 부모 클래스의 constructor을 호출할 때 사용한다.

# 모듈

모듈은 파일, 기능별로 분리되어 작성되므로 코드의 단위를 명확히 분리하여 재사용성, 개발 효율성, 유지보수성을 높인다.
