## 자바 객체 지향 프로그래밍

class 를 중심으로 컴퓨터 프로그래밍을 만들어 나가는 것,

method와 변수를 그룹으로 만들어 정리하는것이 객체 지향 프로그래밍의 제일 간단한 정의이다.

## 존재하는 클래스 사용하기

```
public class othersOOP {

	public static void main(String[] args) throws IOException {

		System.out.println(Math.PI);
		System.out.println(Math.floor(1.8));
		System.out.println(Math.ceil(1.8));
		// Math 라는 class 안에 PI라는 변수, floor와 ceil 같은 method 가 들어있다.
		// 한줄에 끝나는 작업을 가진 class는 변수를 class 에 소속된 것 그대로 사용

		FileWriter f1 = new FileWriter("data.txt"); // FileWriter라는 class가
		f1.write("Hello");                          // new를 통해 복제본을 만들고
		f1.write("Java");                           // FileWriter 라는 데이터 타입을 가지는 f1이라는 변수에 복제함.
		f1.close();                                 // 그리고 아래 내용을 data.txt 파일에 저장.

		// 맥락을 가진 경우에는 class를 직접 사용하는 것이 아닌,
		// class를 복제해서 복제본을 만들어 그걸 제어하는 방식으로 사용한다.
        // 즉 instance는 class를 복사한 후 새로운 이름을 부여하여 선언한 것.
	}
}
```

## Class 만들어보기

```
class Print{ // class 안에 있는 것들은 member라고 부른다.
	public static String delimiter = "";
	public static void A() {
		System.out.println(delimiter);
		System.out.println("A");
		System.out.println("A");
	}

	public static void B() {
		System.out.println(delimiter);
		System.out.println("B");
		System.out.println("B");
	}
}

public class myOOP {

	public static void main(String[] args) {
		Print.delimiter = "----";

		Print.A();
		Print.A();
		Print.B();
		Print.B();

		Print.delimiter = "****";

		Print.A();
		Print.A();
		Print.B();
		Print.B();
	}
}
```

## Instance 만들어보기

instance 는 public을 떼줘야 한다!

```
class Print{ // class 안에 있는 것들은 member라고 부른다.
	public  String delimiter = "";
	public void A() {
		System.out.println(delimiter);
		System.out.println("A");
		System.out.println("A");
	}

	public void B() {
		System.out.println(delimiter);
		System.out.println("B");
		System.out.println("B");
	}
}

public class myOOP {

	public static void main(String[] args) {
		Print p1 = new Print();
		p1.delimiter = "****";
		p1.A();
		p1.A();
		p1.B();
		p1.B();

		Print p2 = new Print();
		p2.delimiter = "----";
		p2.A();
		p2.A();
		p2.B();
		p2.B();
	}
}
```

## static

static이 붙게 되면 부모 class 파일과 연결되어 있어
변화가 생길 경우 instance 와 부모 class 둘 다에게 영향을 미친다.

instance로 저장된 값은 복제되었을 경우 값이 변할때 부모 class 혹은
다른 복제된 instance에게 영향을 미치지 않는다.

즉 static 이 있는건 class 소속, static 이 없는건 instance 소속이다.

```
class Foo {
	public static String classVar = "I class var";
	public String instanceVar = "I instance var";

	public static void classMethod() {
		System.out.println(classVar); // OK
//		System.out.println(instanceVar); // ERROR
	}
	public void instanceMethod() {
		System.out.println(classVar); // OK
		System.out.println(instanceVar); // OK
	}
}

public class Poo {

	public static void main(String[] args) {
		System.out.println(Foo.classVar); // OK
//		System.out.println(Foo.instanceVar); // ERROR
		Foo.classMethod(); // OK
//		Foo.instanceMethod(); // ERROR
	}
}
```

## 생성자와 this

생성자는 class의 이름과 똑같은 method를 정의한 것.
생성자는 instance로 복제할 때 제일 먼저 실행된다.
또한 생성자는 static, return Data type등을 정의하지 않는다.

결과적으로 생성자는 instance 내부의 method에 argument를 넣어줄 수 있다.
또한 만약 생성자의 인자와 instance의 변수의 이름이 같다면 this를 이용해
다음과 같이 만들 수 있다.

```
class Print{
    public String delimiter = "";
    public Print(String delimiter){
        this.delimiter = delimiter;
    }
}
```
