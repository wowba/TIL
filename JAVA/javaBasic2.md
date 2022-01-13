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

## 반복문

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

## 배열

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

## 배열 심화

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
