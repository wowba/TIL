## 목차

1. [프로젝트 환경설정](#1장-프로젝트-환경설정)

# 스프링 입문 - 코드로 배우는 스프링 부트

김영한님의 스프링 입문 강좌에 기초하는 repo.

[스프링 Boot Document](https://docs.spring.io/spring-boot/docs/current/reference/html/)

# 1장 프로젝트 환경설정

### [스프링 initializr](https://start.spring.io/)

이 사이트는 스프링 부트 기반으로 스프링 관련 프로젝트를 만들어주는 사이트이다.

기능 설명

- Project

  Maven과 Gradle 이 있는데, 레거시 프로젝트 등은 Maven 으로 하지만
  최근에는 Gradle로 하는 경향이다.

- Language
  쓰는 언어 쓰기.

- Spring Boot

  SNAPSNOT, M1 등은 아직 정식 출시가 안된 것들.
  현재 날짜 기준 2.3.1 을 사용한다.

- Project Metadata

  - Group : 보통 기업 명을 적는다
  - Atrifact : 빌드되어 나온 결과물 (프로젝트 명)

- Denendencies

  지금 스프링 부트를 통해 시작할 때, 어떤 라이브러리를 사용할 것인지 정하는것!

다 정하고 나면 하단의 GENERATE를 눌러 생성 파일을 다운로드 받자.

다운받은 압축 파일을 풀고 인텔리제이에서 build.gradle 파일을 실행하자!

### 구조 설명 및 프로젝트 시작

- gradle
  gradle 관련 파일이 들어있는 폴더

- src

  - main: java, resourecs(자바 파일을 제외한 나머지가 이 폴더에 들어있다!)
  - test: 테스트 코드들과 관련된 소스들.
    요즘 개발 트렌드에서는 테스트 코드가 정말 중요하다!

- build.gradle

  예전에는 하나씩 작성해야 했지만,
  지금은 spring.io를 통해 알아서 만들어준다.

  - repositories
    mavenCentral() 이라는 사이트에서 라이브러리는 다운받는 설정.

  - dependencies
    처음에 설정한 라이브러리가 들어있다.

- gitignore.

  필요한 소스코드만 올라가고 나머지는 올리지 않기 위해 사용. (빌드된 결과물 등)

- 프로젝트 실행해보기

프로젝트를 실행해보려면 /main/java/프로젝트 명/프로젝트 파일

경로로 들어가서 실행시킨 뒤, `Tomcat initialized with port(s): 8080 (http)`

가 나오면 해당 포트 `localhost:8080` 로 이동하면 whitelabel 에러가 나오고,

이렇게 되면 프로젝트 세팅 성공이다.

- 인텔리제이 gradle 세팅
  setting - gradle(검색)으로 들어가서 `Build and run using`과 `Run tests using`의 `gradle` 설정을 인텔리제이로 바꿔주면 인텔리제이에서 바로 자바로 돌려 속도가 더 빨라진다.

### 라이브러리 살펴보기

External Libraries에 들어가보면 수많은 라이브러리들이 존재한다.

처음에 [스프링 initializr](https://start.spring.io/) 에서 정한

Maven 또는 Gradle와 같은 빌드 툴은 `의존 관계`를 다 관리해준다.

예로 spring-boot-starter-web 과 같은 라이브러리를 설치하면 의존 관계에 있는 모든 라이브러리를 따라 가져온다.

예전에는 하나하나 다 설치해줬다면, 지금은 그냥 라이브러리를 하나 빌드해서 웹서버에

올리면 간편하게 끝이 난다.

```
기본 설치시 생기는 라이브러리

스프링 부트 라이브러리
spring-boot-starter-web
spring-boot-starter-tomcat: 톰캣 (웹서버)
spring-webmvc: 스프링 웹 MVC
spring-boot-starter-thymeleaf: 타임리프 템플릿 엔진(View)
spring-boot-starter(공통): 스프링 부트 + 스프링 코어 + 로깅
spring-boot
spring-core
spring-boot-starter-logging
logback, slf4j

테스트 라이브러리
spring-boot-starter-test
junit: 테스트 프레임워크  -> 5.0으로 넘어가는 중!
mockito: 목 라이브러리
assertj: 테스트 코드를 좀 더 편하게 작성하게 도와주는 라이브러리
spring-test: 스프링 통합 테스트 지원
```

- 로깅

현업에서는 println을 통해 띄우지 않고 logging을 쓰는데, 특정 에러들을 모아보는 등의 행위가 가능하다.

인텔리제이의 우측에 Gradle - Dependencies를 타고 들어가면 starter를 타고 들어갈 수 있는데, 거기서 이미 라이브러리가 설치되있음을 확인할 수 있다.

로그백, slf4j 2개가 있는데, 요즘에는 이 두 라이브러리를 주로 사용한다.

### View 환경설정

스프링은 resources/static/ 폴더에 index.html 파일을 넣으면

해당 파일을 Welcome Page로 인식한다.

이때 내가 원하는 template을 controller를 통해 띄우고 싶으면 다음과 같이 하자.

1. 메인 어플리케이션 폴더에 controller 라는 이름의 패키지 폴더를 만든다

2. 다음과 같은 파일을 만든다

```
package hello.hellospring.controller; -> 패키지 이름

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller  -> 컨트롤러 인식
public class HelloController {  -> 파일 이름

    @GetMapping("hello") -> hello 라는 url 인식!
    public String hello(Model model){
        model.addAttribute("data","hello!!!"); -> 변수에 넣을 정보 전달하기
        return "hello";  -> hello 라는 이름의 파일 렌더링, 유로버전은 ctrl + click시 해당 html 파일로 이동한다.
    }
}
```

3. template 폴더에 hello.html 파일을 만들어준다.
   `resources/templates/hello.html`

```
<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">  -> 템플릿 엔진
<head>
    <title>Hello</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
<p th:text="'안녕하세요. ' + ${data}" >안녕하세요. 손님</p>
</body>
</html>
```

4. 이제 서버를 키고 주소로 이동하면 렌더된 html을 볼 수 있다.
   `이때, spring-boot-devtools 라이브러리를 추가하면, html 파일을 컴파일만 해주면 서버 재시작 없이 View 파일 변경이 가능하다.`

### 빌드하고 실행하기

빌드는 실제 실행할 수 있는 파일을 만드는 것이다.
`빌드를 하기 전에 반드시 실행하고 있는 스프링 어플리케이션을 중지!!`

본인은 인텔리제이 에서 Terminal - Git Bash를 사용했다.

1. 프로젝트 폴더에서 ./gradlew build -> 빌드 폴더,파일 생성
2. cd build/libs -> jar파일 위치로 이동
3. java -jar hello-spring-0.0.1-SNAPSHOT.jar -> 콘솔에 입력시 스프링 실행

만약 build 폴더를 초기화 하고 싶다면 다시 프로젝트 폴더로 돌아와서 다음을 입력한다.

1. ./gradlew clean
