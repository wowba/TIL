## Boolean data type

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

## 비교 연산자

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

## 조건문

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

## 조건문 응용

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

## == 와 equal 의 차이점
