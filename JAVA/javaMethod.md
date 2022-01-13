## JAVA Method

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

## 메소드의 입력

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

## 메소드의 출력

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

## 메소드의 활용

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
