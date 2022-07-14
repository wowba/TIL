class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return "Hello " + this.name;
  }
}

const person1 = new Person("Lee");

console.log(person1.sayHello());
