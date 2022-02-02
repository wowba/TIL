## 목차

1. [생활코딩 자바 1](#생활코딩-자바-1)
2. [생활코딩 자바 제어문](#생활코딩-자바-제어문)
3. [생활코딩 자바 method](#생활코딩-자바-method)
4. [생활코딩 자바 Exception](#생활코딩-자바-Exception)
5. [생활코딩 자바 객체 지향 프로그래밍](#생활코딩-자바-객체-지향-프로그래밍)
6. [생활코딩 자바 상속](#생활코딩-자바-상속)

# 생활코딩 자바 1

### Write once, Run anywhere

한번 작성하면 어디서든 동작되게하는 슬로건으로 만들어진 JAVA.

자바는 기업용 시장에서 광범휘하게 사용되며, 안드로이드 앱 개발에도 사용된다.

### JAVA 설치

JDK, Java Develpoement Kit 은 자바를 사용해 개발할 때 여러가지 도구를 제공하는

개발자용 프로그램이다. 보통 Oracle이라는 회사에서 배포하는 JAVA를 사용한다.

JAVA SE Developement KIT을 흔히 사용한다. 윈도우용을 쓰자!
`설치 후 Path 설정 꼭 해주기`

또한 강의에선 개발환경으로 Eclipise를 사용한다.

### Eclipise 사용법

보통 폴더를 볼 때는 package explore 보다 Navigator를 많이 쓴다. 폴더 전체를 보여주기 때문.

새 프로젝트를 만들때 JRE는 Java Runtime Enviorment 는 사용하고자 하는 버전.

project layout은 폴더의 구조를 결정하는 방법이다.

소스 폴더와 컴파일된 파일의 폴더를 따로 만들수도 있고 같이 한 폴더에 둘 수도 있다.

### Hello World

HelloWorldApp.java 라는 파일을 만들었으면 다음과 같이 입력한다.

```
public class HelloWorldApp{
    public static void main(String[] args) {
        System.out.println("Hello World!");
	}
}
```

자바 파일을 파일의 이름과 동일한 class를 찾기 때문에 이름을 똑같이 만들어줘야 한다.

그 다음에 main 이라 불리는 약속된 이름의 method를 찾고, 그 안 중괄호 안에 있는 코드를 작동하기로 약속되어 있다.

이 파일을 저장하면 동일한 이름의 class 파일이 폴더에 생성된다. 이 파일은 컴파일을 거쳐서 만들어지고 열어보면 깨진 텍스트로 나온다.

사람이 읽기위해 있는것이 아닌, 컴퓨터를 위한 파일이다.

### Data Type

다양한 데이터 타입들을 자바로 사용 가능하다.

데이터 타입을 나누는 이유는 각각의 데이터마다 데이터의 특성에 맞는 처리방식이 존재하기 때문.

예를들어 숫자는 다양한 수학적 처리가 가능하고 문자는 문자의 추가, 검색 등의 작업이 가능하다. 이를 위해 데이터 타입들을 잘 정리해야 한다.

`팁 sysout을 적고 ctrl + space 하면 자동으로 System.out.println(); 을 완성한다.`

```
public class DataType {
	public static void main(String[] args) {
		System.out.println(6); // Number

		System.out.println("6"); // String

		System.out.println(6 + 6); // 12

		System.out.println(6*6); // 36

		System.out.println("6"+"6"); // 66

		System.out.println("1111".length()); // 4

		System.out.println("1111".length());
	}
}
```

### 숫자와 연산

Math 를 사용해 다양한 연산을 할 수 있다.

```
public class Number {

	public static void main(String[] args) {
		// Operator
		System.out.println(6 + 2); // 8
		System.out.println(6 - 2); // 4
		System.out.println(6 * 2); // 12
		System.out.println(6 / 2); // 3

		System.out.println(Math.PI); // 3.141592653589793
		System.out.println(Math.floor(Math.PI) ); // 3.0
		System.out.println(Math.ceil(Math.PI) ); // 4.0
	}
}
```

### 문자열의 표현

String과 Character를 구별 잘 해야한다.
Character는 단 한 글자만 가질 수 있다.

```
public class StringApp {

	public static void main(String[] args) {

		// Character VS String
		System.out.println("Hello World"); // String // ""로 표현한다.
		System.out.println('H'); // Character //  ''로 표현한다.
		System.out.println("H"); // String

		System.out.println("Hello "
				+ "World"); // Hello World

		// new line = \n
		System.out.println("Hello \nWorld"); // Hello
											 // World
		// escape
		System.out.println("Hello \"World\""); // Hello "World"
	}
}
```

### 문자열 다루기

```
public class StringOperation {

	public static void main(String[] args) {

		System.out.println("Hello World".length()); // 11
		System.out.println("Hello, [[[name]]] ... bye.".replace("[[[name]]]", "duru")); // 이름 바꾸기
	}

}
```

### 변수

변수는 그 값이 변할 수 있는것이라고 수학에서 정의한다.

자바에서는 해당 데이터가 어떤 값을 받는지 정확하게 명시하지 않으면 오류가 나온다.

```
public class variable {

	public static void main(String[] args) {
		int a = 1; // Number -> integer (정수)
		System.out.println(a);

		double b = 1.1; // real number -> double
		System.out.println(b);

		String c = "Hello World"; // 문자열
		System.out.println(c);

		String name = "wowba";
		System.out.println("Hello, "+name+"...");

		double VAT = 10.0;
		System.out.println(VAT);
	}
}

```

### 변수 타입 바꾸기 / Casting

자바는 데이터 타입을 엄격히 엄수하기 때문에 항상 잘 확인하자.

```
public class casting {

	public static void main(String[] args) {

		double a = 1.1;
		System.out.println(a);
		double b = 1;
		System.out.println(b);
		double b2 = (double) 1;
		System.out.println(b2);

		int c = (int) 1.1; // 강제로 손실을 내서 1.1을 1.0으로 바꾼다. 꼭 명시적으로 해야함!
		System.out.println(c);

		String str = Integer.toString(1);
		System.out.println(str.getClass()); // 타입을 볼 수 있음.
	}

}
```

# 생활코딩 자바 제어문

### Boolean data type

true, false. 대문자로 쓰지 않는다.

```
public class Boolean {

	public static void main(String[] args) {

		System.out.println(true); // true
		System.out.println(false); // false

		String foo = "Hello World";
		// String true = "Hello World"; true, false 는 변수의 이름으로 사용 불가.
		// reserved word 라고도 한다.

		System.out.println(foo.contains("World")); // true
	}

}
```

### 비교 연산자

```
public class comparison {

	public static void main(String[] args) {

		System.out.println(1 > 1); // false
		System.out.println(1 == 1); // true
		System.out.println(1 < 1); // false
		System.out.println(1 >= 1); // true
		System.out.println(1 <= 1); //true
	}
}
```

### 조건문

```
public class ifapp {

	public static void main(String[] args) {

		System.out.println("a");
		if(true) {
			System.out.println(1); // 출력 됨
		}
		if(false) {
			System.out.println(1); // 출력 안됨
		}else if(true) {
			System.out.println(2);
		}	else {
			System.out.println(3);
		}
		System.out.println("b");

	}
}
```

### 조건문 응용

```
public class AuthApp {

	public static void main(String[] args) {

		System.out.println(args[0]);

		String id = "egoing";
		String inputId = args[0];

		System.out.println("Hi.");

		if (inputId.equals(id)) {
			System.out.println("Master!");
		} else {
			System.out.println("Who are you?");
		}
	}

}
```

### == 와 equal 의 차이점

자바에는 primitive, non primitive 두가지 데이터 타입으로 나눌 수 있다.

primitive는 다음과 같다.
`boolean / int / double / shor / long / float / char`
non primitive 위를 제외한 나머지이다.
`String / Array / Data / File 등등..`

자바는 원시데이터 타입과 그 외를 다르게 사용한다.

원시데이터는 데이터의 값을 저장할 때 다른 데이터가 동일한 값을 가질경우
하나의 값에서 같이 가져온다.

`동등 비교 연산자는 같은 곳에서 데이터를 가져왔는지 확인하는 연산자!!!`
자바는 아래 두 값을 다르게 취급한다

```
int p1 = 1
int p2 = 2
p1 == p2 // true
```

원시데이터 타입이 아닌 객체들은 `equal()` 이라는 메소드를 가지고 있다
non primtive 데이터는 값이 같더라도 따로따로 저장해 동등 비교 연산자를 쓰면 false가 나온다.

```
String o1 = "java";
String o2 = new String ("java");
o1 == o2 // false
o1.equals(o2) // true
```

하지만 new 를 쓰지 않고 바로 문자열을 만든다면 얘네들은 원시데이터 취급을 받는다. 하지만 equal()을 쓰는게 정신건강에 좋다.

```
String o3 = "java2"
String 04 = "java2"
o3 == o4 // true
```

### 반복문

for이 while보다 좋다

```
public class equal {

	public static void main(String[] args) {

		System.out.println(1);

		System.out.println("===while===");
		int i = 0;
		while(i < 3) {
		System.out.println(3);
		System.out.println(4);
		i++;
	}
		System.out.println("===for===");
		for(int j=0; j < 3; j++) {
			System.out.println(3);
			System.out.println(4);
		}
	}
}
```

### 배열

자바의 가장 기본적인 체계는 배열(Array) 이다.
배열과 반복문을 접하면 좋은 시너지가 된다.

```
public class equal {

	public static void main(String[] args) {
		String[] users = new String[3];
		users[0] = "egoing";
		users[1] = "jin";
		users[2] = "bin";

		System.out.println(users[1]); // jin
		System.out.println(users.length); // 3

		int[] scores = {10, 100, 100};
		System.out.println(scores[1]); // 100
		System.out.println(scores.length); // 3

		for(int i = 0; i < users.length ; i++ ) {
			System.out.println("<li>"+users[i]+"</li>"); // <li>egoing</li>
														 //	<li>jin</li>
													     // <li>bin</li>
		}
	}
}
```

### 배열 심화

자바는 program argument로 직접 값을 넣어서 불러올 수 있다
`String inputId = args[0]; // 첫번째 값을 가져옴`

```
public class equal {

	public static void main(String[] args) {

//		String[] users = {"egoing","jin","bin"};
		String [][] users = {
				{"egoing","1111"},
				{"jin","2222"},
				{"kim","3333"}
		};
		String inputId = args[0]; // program argument의 첫번째 값
		String inputPw = args[1]; // program argument의 두번째 값

		boolean isLogined = false;
		for(int i=0; i<users.length;i++) {
			String [] current = users[i];
			if(
					current[0].equals(inputId) &&
					current[1].equals(inputPw)
					) {
				isLogined = true;
				break;
			}
		}
		System.out.println("Hi!");
		if(isLogined) {
			System.out.println("Master!");
		} else {
			System.out.println("Who are you?");
		}
	}
}
```

# 생활코딩 자바 method

### JAVA Method

다른 언어에서 function 이라고 하는것은 자바에서 method 라고 부른다.

```
public class frist_method {

	public static void main(String[] args) {
		System.out.println("Hello World");
		System.out.println(Math.floor(1.5));
	}
}
```

위에선 println 이라는 method를 사용하고 있고, 더 크게 main이라는 이름을 가진
method를 만들어서 사용하고 있다. main이라는 이름은 반드시 사용하게 약속되어 있다.

즉 main 이라는 method 안에 실행시키고자 하는 method를 넣어서 코드를 완성시키는 것.
main 위에 다른 method 를 만들어 main 안에 넣어 작동하면 매우 효율적으로 코드 작성이 가능하다.

```
public class whymethod {

	public static void printthis() {
		System.out.println("a");
		System.out.println("b");
		System.out.println("c");
	}

	public static void main(String[] args) {
		printthis();
	}
}
```

### 메소드의 입력

자바는 js와 달리 입력하고자 하는 데이터의 타입을 명시한 다음
해당 데이터 타입을 가지는 변수의 이름을 옆에 적어준다.
변수는 여러개 넣을 수 있다.

```
public class whymethod {

	public static void printthis(String text, String taxt) {
		System.out.println(text);
		System.out.println(taxt);
	}

	public static void main(String[] args) {
		printthis("good","bad"); // good
	}                            // bad
}
```

### 메소드의 출력

method가 return 값을 가지면 내부에서 뭘 하든 결국 return값을 출력한다.
만약 리턴값이 없는 경우 method 이름 앞에 void를 붙인다.

```
public class methodoutout {

	public static String a() { // 실행시 String을 return 하므로
		return "a";            // method 이름 앞에 String을 붙인다.
	}

	public static int one() {  // 실행시 int를 return 하므로
		return 1;              // method 이름 앞에 int을 붙인다
	}

	public static void main(String[] args) {

		System.out.println(a());
		System.out.println(one());
	}
}
```

### 메소드의 활용

변수값을 main 함수 밖에서 설정하고
method를 통해 출력한 값들을 return 한 뒤
main method에서 출력해주면 편하게 관리가 가능하다.

```
public class AccountingApp {

	//공급가액
	public static double valueOfSupply = 1000.0;
	//부가가치세율
	public static double vatRate = 0.1;

	public static double getVAT() {

		return valueOfSupply * vatRate; //부가세
	}

	public static double getTOTAL() {

		return valueOfSupply + getVAT(); //합계
	}

	public static void main(String[] args) {
		System.out.println("Value of supply : " + valueOfSupply); // 공급가액
		System.out.println("VAT : " + getVAT());      //부가세
		System.out.println("Total : " + getTOTAL());  //합계
	}
}
```

# 생활코딩 자바 Exception

### Exception vs Error

자바에서 Error는 숙명과도 같은것. 동작하는 환경에서 무언가 문제가 생긴걸
Error 라고 한다. 운영체제 문제, 램 문제 등. 프로그램이 동작하는 환경의 문제가 Error!

Exception은 우리가 의도한 상황과 다르게 흘러갈때를 의미한다.
예상하지못한 값을 사용자가 입력해서 예외가 발생하는 것 등.

이런 예외적인 상황을 처리하는 기술을 Exception 이라고 한다.

try, catch를 이용해 Exception을 할 수 있으며
먼저 나온 에러를 체크해서 catch한다.

```
package java_Exception;

public class exception {

	public static void main(String[] args) {
		System.out.println(1);
		int[] scores = {10,20,30};

		try {
		System.out.println(2);
		System.out.println(scores[3]);
		System.out.println(3);
		System.out.println(2/0);
		System.out.println(4);
		} catch(ArithmeticException e) {
			System.out.println("잘못된 계산");
		} catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("범위 에러");
		}
		System.out.println(5);
	}
}
```

### 예외의 부모와 자식

특정한 에러들을 예상하고 값을 넣어주는게 아닌, 에러들을 하나의 코드로
퉁치고 싶을수도 있다. 예외는 상속이란걸 통해 부모, 자식이 있는데 부모의 자식에
해당하는 어떤 예외가 발생하건 Exception이 처리하게 만들 수 있다.

```
package java_Exception;

public class exception {

	public static void main(String[] args) {
		System.out.println(1);
		int[] scores = {10,20,30};

		try {
		System.out.println(2);
		System.out.println(scores[3]);
		System.out.println(3);
		System.out.println(2/0);
		System.out.println(4);
		} catch(Exception e) {
			System.out.println("오류 발생");
		}
		System.out.println(5);
	}
}
```

### 에러 메세지 가져오기

에러가 발생했을 시, print에 `+e.getMessage()` 를 사용하거나
`e.printStackTrace();`를 사용하면 디테일한 정보를 가져올 수 있다.

```
package java_Exception;

public class exception {
	public static void main(String[] args) {
		try {
		System.out.println(2/0);
		} catch(Exception e) {
			System.out.println("오류 발생" +e.getMessage());
		}
	}
}
---출력---
오류 발생/ by zero
java.lang.ArithmeticException: / by zero
	at java_Exception.exception.main(exception.java:7)
----------
```

### Checked VS Unchecked exception

Unckeck Exception은 Runtime Exception을 포함한 그 자식들을 말하며

Checked Exception은 Exception에서 Runtime을 제외한 모든 Excpetion이다.
대표적으로 IO(input/output)Exception이 있다. 또한 컴파일러가 자동으로 체크한다.

데이터를 인풋, 아웃풋 하면서 에러가 많이 발생하는데 이유는 외부와 통신하면서 생기기 때문이다.

```
public class checked_Exception {

	public static void main(String[] args) {

		try {
		FileWriter f = new FileWriter("data.text");
		f.write("hello");
		f.close();
		} catch(IOException e) { // 반드시 exception을 체크해야 컴파일이 된다!
			e.printStackTrace();
		}
	}
}
```

### Finally 와 resource

자바는 프로그램 외부에 있는 데이터에 접근하려고 하면 문제가 발생할 수 있다.

File, Network, DB 등을 통틀어 resource 라고 하며, 이것들은 자바 내부에 존재하지 않기 때문에
상대적으로 매우 불안정하고 많은 예외적 상황이 발생할 수 있다.

이 resource를 사용하다가 작업이 끝나면 close() 라는 메소드를 사용해야 한다.

```
public class checked_Exception {

	public static void main(String[] args) {

		try {
		FileWriter f = new FileWriter("data.text");
		f.write("hello");
		f.close();
		} catch(IOException e) { // 반드시 exception을 체크해야 컴파일이 된다!
			e.printStackTrace();
		}
	}
}
```

위 과정중에서 f.close() 가 실행되기 전에 에러가 발생하면 해당 코드를 실행하지 못하니 문제가 된다.
이때 `finally` 를 사용하면 된다.

```
public class checked_Exception {

	public static void main(String[] args) {
		FileWriter f = null;
		try {
		f = new FileWriter("data.text");
		f.write("hello");

		} catch(IOException e) {
			e.printStackTrace();
		} finally {
			if( f != null ) {  // close 도 IOexception이 발생할 수 있어
				try {          // Exception을 한번 더 해줘야 한다.
					f.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
```

### try with resource

리소스 작업을 포함하는 기능의 예외처리를 할 수있다! 자바 7부터 사용 가능하다.
위와 같이 코드가 길어지는걸 해결하는 기능이다.

아래 코드는 위 코드와 기능이 동일하다.
try의 괄호 안에 close가 필요한 class를 instance 화 시키는 코드를 넣으면 된다.
그럼 자바는 자동으로 f.close를 내부적으로 수행한다.
이를 `try with resouce` statement 라고 한다.

```
public class checked_Exception {

	public static void main(String[] args) {
		try(FileWriter f = new FileWriter("data.txt")) {
			f.write("hello");
		} catch(IOException e) {
			e.printStackTrace();
		}
	}
}
```

# 생활코딩 자바 객체 지향 프로그래밍

### 자바 객체 지향 프로그래밍

class 를 중심으로 컴퓨터 프로그래밍을 만들어 나가는 것,

method와 변수를 그룹으로 만들어 정리하는것이 객체 지향 프로그래밍의 제일 간단한 정의이다.

### 존재하는 클래스 사용하기

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

### Class 만들어보기

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

### Instance 만들어보기

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

### static

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

### 생성자와 this

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

# 생활코딩 자바 상속

### 상속

상속은 특정 class가 가진 method와 변수를 다른 클래스에게 상속하는 것.
이는 코드의 재사용성, 유지보수, 편의성을 높이고 코드의 양을 줄인다.

```
class cal1{
	public int sum(int v1, int v2) {
		return v1+v2;
	}
}

class cal3 extends cal1{  cal3를 가져와 사용 가능.
	public int minus(int v1, int v2) {
		return v1-v2;
	}
}

public class cal {

	public static void main(String[] args) {

		cal3 c3 = new cal3();
		System.out.println(c3.sum(2,1)); # sum은 cal1에 있지만 cal3 에서 쓸 수 있다.
		System.out.println(c3.minus(2,1));
	}
}
```

### Overriding VS Overloading

```
class cal1{
	public int sum(int v1, int v2) {
		return v1+v2;
    public int sum(int v1, int v2, int v3){  --> overloading
        return v1 + v2 + v3
	}
}
class cal3 extends cal1{             --> overriding
	public int sum(int v1, int v2) {
		return v1+v2+v2;
	}
}
```

### this / super

this 는 자기 자신, sum은 부모.

### 상속과 생성자

```
class Cal{
    int v1,v2;
    Cal(int v1, int v2){
        System.out.println("Cal init!!");
        this.v1 = v1; this.v2 = v2;
    }
    public int sum(){return this.v1+v2;}
}
class Cal3 extends Cal{
    Cal3(int v1, int v2) {
        super(v1, v2);
        System.out.println("Cal3 init!!");
    }
    public int minus(){return this.v1-v2;}
}
public class InheritanceApp {
    public static void main(String[] args) {
        Cal c = new Cal(2,1);
        Cal3 c3 = new Cal3(2, 1);
        System.out.println(c3.sum()); // 3
        System.out.println(c3.minus()); // 1
    }
}
```
