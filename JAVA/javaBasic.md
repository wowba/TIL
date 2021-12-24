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
