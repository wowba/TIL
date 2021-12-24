## JAVA

자바는 코드를 한번 작성하면 윈도우, 맥, 모바일 상관없이 다 동작할 수 있는 환경을 제공한다.

그 환경을 JRE (Java Runtime Environment) 라고 한다.

또한 자바 언어는 오래되어서 좋은 라이브러리가 많고 뛰어난 생태계가 이루어져 있다

주로 백엔드 서버 개발, 데이터 엔지니어링 등에 사용되고 있다.

## JAVA의 한계

자바의 문법 때문에 이를 대체하는 새로운 언어들이 나왔다. Kotlin, Golang 등이 자바의 단점을 극복한 언어다.

## JAVA의 장점

우선 레퍼런스가 많아 배우기 가장 쉬운 객체지향 언어이다.

또한 언어가 다르더라고 실행환경은 자바의 구동환경인 JVM에서 동작하는 언어들이 있고,
JAVA를 익히면서 배우는 JVM에 대한 지식은 언어가 바뀌더라도 유효하다.

그리고 안정성이 중요한 대부분의 도구들은 대부분 JAVA로 이루어져 있어 쉽게 언어를 대체할 수 없다
이는 곧 취업시장에서의 수요로 이어진다.
대표적으로 백엔드 커리어를 시작할 경우 자바 프레임워크인 Spring이라는 프레임워크를 통해 커리어를 쉽게 시작 가능하다.

## IntelliJ

인텔리제이는 vscode 처럼 편집기이며, 보통 java를 사용할때는 IntelliJ를 주로 사용한다.

## 첫 프로젝트 생성해보기

gradle 방식으로 프로젝트를 생성하면

src/main/java 폴더에 첫 자바파일(java class)를 만들고 다음을 입력해보자.

```
public class Main {
    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}
```

그리고 재생하면 `헬로 월드!` 출력된다.

이 public class에서 자바 파일은 시작한다.

## 변수 / 상수

```
public class Main {
    public static void main(String[] args) {
        // write your code here
        int number = 5;
        System.out.println(number)

        final int finalNumber = 2;
        System.out.println(hi);
    }
}
```

값을 할당할 때 뒤에 final이 없으면 변수, 있으면 상수이다.

변수는 후에 값이 변경 가능하지만(let) 상수는 값이 변경 불가능하다.(const) 변경할 경우 에러가 나온다.

## 자료형의 종류

자바의 자료형에는 크게 두가지가 있다.

하나는 `Primitive Type` 이라는 기본 자료형.

다른 하나는 `Reference Type` 이라는 참조 자료형이 있다. 기본 자료형이 아닌것은 모두 참조 자료형이다.
즉 자바의 인스턴스, 자바의 객체를 가르키는것이 참조 자료형이다.

## Primitive Type 정수 자료형

```
public class Main {
    public static void main(String[] args) {

        short s = 2;
        System.out.println(s);

        int a = 4;
        System.out.println(a);

        long b = 8
        System.out.println(b);

        float c = 5.5F;
        System.out.println(c);

        double d = 5.5;
        System.out.println(d);

        System.out.println(Short.MAX_VALUE)
        System.out.println(Short.MIN_VALUE)
    }
}
```

`short`는 컴퓨터에서 2바이트로 표현할 수 있는 정수형 자료형을 의미한다.

`int`는 4바이트로 표현할 수 있는 정수형 자료형 (+20억 ~ -20억) / 기본적으로 int를 많이 쓴다.

`long`은 8바이트로 표현할 수 있는 정수형 자료형이다.

`float`은 소수를 표현할 수 있는데 숫자 뒤에 대문자F를 붙여줘야 한다.

`double`은 대문자를 붙이지 않고도 소수를 표현할 수 있다.

또한 MAX_VALUE, MIN_VALUE 등을 이용해 각 자료형의 최대, 최소 값을 알 수 있다.

## Primitive Type 문자 자료형

```
public class Main {
    public static void main(String[] args) {

        char a = 'A';
        System.out.println(a);

        byte data = 'd';
        System.out.println(data)
    }
}
```

`char`은 글자 하나만을 담을 수 있는 자료형이다. 만약 'ABC' 처럼 글자 여러개를 담으려 하면 에러가 나온다.
중요한점은 char은 "" 를 쓰지 않고 무조건 '' 를 쓴다. 조심할것!

`byte`는 모든 데이터를 byte로 표현하려는 것이다. d를 출력하면 아스키코드 십진법으로 변환해 100이 나온다.

## Primitive Type 논리 자료형

```
public class Main {
    public static void main(String[] args) {

        boolean fact = true;
        System.out.println(fact);
    }
}
```

`boolean` 은 논리값이며 true 혹은 false 만 값으로 가진다.

## Reference Type 자료형

```
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String sparta = "sparta";
        System.out.println(sparta);

        int[] intArray = new int[] {1,2,3,4,5};
        System.out.println(Arrays.toString(intArray));

        int[] emptyArray = new int[5];
        System.out.println(Arrays.toString(emptyArray));

        String[] stringEmpty = new String[5];
        System.out.println(Arrays.toString(stringEmpty));

        String[] season = {"봄", "여름", "가을", "겨울"}
        System.out.println(Arrays.toString(season));
    }
}
```

`String`은 char과 달리 여러 글자를 넣을 수 있다. 그리고 무조건 ""를 사용한다.
또한 String은 class를 이용한 참조 자료형이라고도 한다.
ctrl을 누를 채로 String을 클릭하면 String이 선언된 구현체로 넘어가는데, JAVA 언어를 개발하는 사람들이 미리 정해놓은걸 볼 수 있다.

`int[]`는 정수를 담는 int가 아닌, int를 여러개 담을 수 있는 int배열이다. 즉 기본자료형이 아닌 참조자료형.

new int`[5]` 라고 하면 안에 element는 없는 5칸짜리 array가 만들어진다.

String 배열도 유사하다! 하지만 int의 기본값은 0, String의 기본값은 없기때문에

emptyArray는 `[0,0,0,0,0]` 으로 표시되고, stringEmpty는 `[null, null, null, null, null,]` 로 표시된다.
