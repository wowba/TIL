## Exception vs Error

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

## 예외의 부모와 자식

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

## 에러 메세지 가져오기

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

## Checked VS Unchecked exception

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

## Finally 와 resource

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

## try with resource

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
