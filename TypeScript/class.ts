// 클래스 정의

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }
}

const person = new Person(`Lee`);
person.walk();

// 접근 제한자

class Access {
  public x: string;
  protected y: string;
  private z: string;

  constructor(x: string, y: string, z: string) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const newClass = new Access(`x`, `y`, `z`);

// punlic 접근 제한자는 클래스 외부에서 참조 가능하다.
console.log(newClass.x);

// protected는 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
// console.log(newClass.y); -> 에러 발생

// private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다. 오직 해당 클래스 내부에서만 사용 가능.
// console.log(newClass.z);

class Child extends Access {
  constructor(x: string, y: string, z: string) {
    super(x, y, z);

    // public은 자식 클래스 내부에서 참조 가능
    console.log(this.x);

    // protected는 자식 클래스 내부에서 참조 가능
    console.log(this.y);

    // private는 자식 클래스 내부에서 참조 불가
    // console.log(this.z);
  }
}

// 추상 클래스는 하나 이상의 추상 메소드를 포함하며 일반 메소드도 포함할 수 있다.
// 정의할때는 abstract 키워드를 사용하며, 직접 인스턴스는 생성 불가능하며 상속만을 위해 사용된다.
// 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반듯시 구현해야 한다.

// 추상 클래스
abstract class Animal {
  //추상 메서드
  abstract makeSound(): void;
  //일반 메소드
  move(): void {
    console.log("Animal is moving");
  }
}

// 추상 클래스 상속받는 클래스 생성
class Dog extends Animal {
  makeSound(): void {
    console.log("wall wall");
  }
}

const myDog = new Dog();
myDog.move();
myDog.makeSound();
