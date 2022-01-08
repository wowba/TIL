## Write once, Run anywhere

한번 작성하면 어디서든 동작되게하는 슬로건으로 만들어진 JAVA.

자바는 기업용 시장에서 광범휘하게 사용되며, 안드로이드 앱 개발에도 사용된다.

## JAVA 설치

JDK, Java Develpoement Kit 은 자바를 사용해 개발할 때 여러가지 도구를 제공하는

개발자용 프로그램이다. 보통 Oracle이라는 회사에서 배포하는 JAVA를 사용한다.

JAVA SE Developement KIT을 흔히 사용한다. 윈도우용을 쓰자!

또한 강의에선 개발환경으로 Eclipise를 사용한다.

## Eclipise 사용법

보통 폴더를 볼 때는 package explore 보다 Navigator를 많이 쓴다. 폴더 전체를 보여주기 때문.

새 프로젝트를 만들때 JRE는 Java Runtime Enviorment 는 사용하고자 하는 버전.

project layout은 폴더의 구조를 결정하는 방법이다.

소스 폴더와 컴파일된 파일의 폴더를 따로 만들수도 있고 같이 한 폴더에 둘 수도 있다.

## 파일 생성

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
