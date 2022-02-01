# 스프링 입문 - 코드로 배우는 스프링 부트

김영한님의 스프링 입문 강좌에 기초하는 repo.

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

  - main: java, resourecs(자바 파일을 제외한 나머지가 들어있다!)
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
