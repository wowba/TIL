## Write once, Run anywhere

한번 작성하면 어디서든 동작되게하는 슬로건으로 만들어진 JAVA.

자바는 기업용 시장에서 광범휘하게 사용되며, 안드로이드 앱 개발에도 사용된다.

## JAVA 설치

JDK, Java Develpoement Kit 은 자바를 사용해 개발할 때 여러가지 도구를 제공하는

개발자용 프로그램이다. 보통 Oracle이라는 회사에서 배포하는 JAVA를 사용한다.

JAVA SE Developement KIT을 흔히 사용한다. 윈도우용을 쓰자!
`설치 후 Path 설정 꼭 해주기`

또한 강의에선 개발환경으로 Eclipise를 사용한다.

## Eclipise 사용법

보통 폴더를 볼 때는 package explore 보다 Navigator를 많이 쓴다. 폴더 전체를 보여주기 때문.

새 프로젝트를 만들때 JRE는 Java Runtime Enviorment 는 사용하고자 하는 버전.

project layout은 폴더의 구조를 결정하는 방법이다.

소스 폴더와 컴파일된 파일의 폴더를 따로 만들수도 있고 같이 한 폴더에 둘 수도 있다.

## Hello World

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

## Data Type

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

## 숫자와 연산

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

## 문자열의 표현

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

## 문자열 다루기

```
public class StringOperation {

	public static void main(String[] args) {

		System.out.println("Hello World".length()); // 11
		System.out.println("Hello, [[[name]]] ... bye.".replace("[[[name]]]", "duru")); // 이름 바꾸기
	}

}
```

## 변수

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

## 변수 타입 바꾸기 / Casting

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
