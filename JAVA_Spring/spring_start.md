## 목차

1. [프로젝트 환경설정](#1장-프로젝트-환경설정)
2. [스프링 웹 개발 기초](#2장-스프링-웹-개발-기초)
3. [회원 관리 예제](#3장-회원-관리-예제:-백엔드개발)

# 스프링 입문 - 코드로 배우는 스프링 부트

김영한님의 스프링 입문 강좌에 기초하는 repo.

[스프링 Boot Document](https://docs.spring.io/spring-boot/docs/current/reference/html/)

# 1장 프로젝트 환경설정

## [스프링 initializr](https://start.spring.io/)

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

## 구조 설명 및 프로젝트 시작

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

## 라이브러리 살펴보기

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

## View 환경설정

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

- @Controller = 컨트롤러임을 선언
- @GetMapping(url) = 해당 url 이동시 이 컨트롤러 시작
- model.addAttribute(Name, Value) = 넣을 데이터 입력

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

## 빌드하고 실행하기

빌드는 실제 실행할 수 있는 파일을 만드는 것이다.
`빌드를 하기 전에 반드시 실행하고 있는 스프링 어플리케이션을 중지!!`

본인은 인텔리제이 에서 Terminal - Git Bash를 사용했다.

1. 프로젝트 폴더에서 ./gradlew build -> 빌드 폴더,파일 생성
2. cd build/libs -> jar파일 위치로 이동
3. java -jar hello-spring-0.0.1-SNAPSHOT.jar -> 콘솔에 입력시 스프링 실행

만약 build 폴더를 초기화 하고 싶다면 다시 프로젝트 폴더로 돌아와서 다음을 입력한다.

1. ./gradlew clean

# 2장 스프링 웹 개발 기초

## 정적 컨텐츠

서버에서 파일을 웹브라우저에 `그대로` 내려주는 방식.

1. hello-static.html 을 static 폴더에 만들어준다.
2. 주소창에 localhost:8080/hello-static.hmtl 입력시 이동한다.
3. 스프링은 먼저 hello-static 관련 컨트롤러를 찾는다.
4. 만약 없다면 resources/static/hello-static.html 을 찾는다
5. 있다면 웹 브라우저에 반환해준다.

## MVC와 템플릿 엔진

- MVC 의미

  Model, View, Controller 의 약자이다.

  Controller, Model은 비즈니스 모델, 내부 로직등을 완벽하게 처리하는것에 집중하고

  View는 오직 화면을 보여주는것에 집중을 하기위해 총 3분야로 나뉘게 된다.

- 컨트롤러 구현

```
@GetMapping("hello-mvc")
public String HelloMvc(@RequestParam("name") String name, Model model){ -> name을 query에 입력하지 않으면 error!
    model.addAttribute("name", name);
    return "hello-template";
}
```

- @RequestParam("dataName") = url 파라미터에 직접 넣을 데이터 선언

- 템플릿 구현

```
<html xmlns:th="http://www.thymeleaf.org">
<body>
<p th:text="'hello ' + ${name}">hello! empty</p> -> text는 템플릿엔진을 거치면 바뀐다.
</body>
```

RequestParam 의 "name"은 주소창(쿼리)에서 입력이 가능하다!

localhost:8080/hello-mvc?`name=spring` 과 같이 주소창에 입력하면 값을 받고

Thymeleaf 템플릿 엔진에서 값을 받아 처리한 다음 브라우저에 보낸다.

`name=spring`은 컨트롤러의 String name, 즉 String 타입이고 이름이 name인 변수에 spring이라는 값이 담겨

model.addAttribute의 value에 값이 넘어가게 되는것.

즉, 넘어간 다음에는 controller의 method parameter로 받은 name 변수를 model에 넣어주는 것이다.

`중요한건, modelAttribute에 Value를 controller에서 String 타입으로 직접 넣어줘도 주소창에 입력할 때 쿼리의 name을 입력하지 않으면 에러가 나온다.`

## API 방식

@ResponseBody -> html의 body 부분에 직접 데이터를 넣어주겠다!

템플릿 엔진을 거치는 MVC 와는 달리, 해당 데이터를 꽂아주는 방법.

만약 이걸로 html을 내려주고 싶다면, return 부분에 모든 html 내용을 입력해서 전달해야 한다.

```
    @GetMapping("hello-string")
    @ResponseBody
    public String helloString(@RequestParam("name") String name){
        return "hello" + name; -> 이 부분이 그대로 전달.
    }
}
```

하지만 만약 문자열을 내리는 것이 아닌, json 데이터를 내린다면 유용하게 사용할 수 있다.

- API 컨트롤러 구현

```
@GetMapping("hello-api")
    @ResponseBody
    public Hello helloApi(@RequestParam("name") String name){
        Hello hello = new Hello();
        hello.setName(name);
        return hello;
    }

    static class Hello{
        private String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
```

원래라면 viewResolver가 받아 페이지를 넘겨주지만,

HttpMessageConverter는 @ResponseBody를 통해 객체를 받을 경우
(Hello) 자동으로 json 처리를 해서 넘긴다.

위의 경우 주소창에 name에 들어갈 값을 입력하면(@RequestParam("name") String name)

api를 통해 json 형식으로 해당 데이터가 전환되어 출력이 된다. `{name: String name}`

만약 첫번째 처럼 단순히 String을 넘길 경우 기본 문자처리인
StringConverter가 동작한다.

# 3장 회원 관리 예제: 백엔드개발
