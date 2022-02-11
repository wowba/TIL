## 목차

1. [스프링 시작하기](#1장-스프링-시작하기)
2. [서버와 데이터베이스](#2장-서버와-데이터베이스)

# 1장 스프링 시작하기

## 스프링 프로젝트 생성하기

인텔리제이에서 `new project - Spring Initializr` 로 들어가면 다양한 기능이 있다. 그중 몇가지를 확인하자면

- Group : 서비스가 제공될 주소를 거꾸로 씀 (관습적)
- Artifact : 프로젝트의 이름
- Java, Project SDK : 사용할 자바 버전 및 툴
- Gradle : 배포할때 쓰거나 혹은 다른 라이브러리를 가져오는 방법(build.gradle)

그 다음 `Dependencies`를 설정한다.

- Spring Web
- Spring Data JPA
- MySQL Driver
- H2 Database
- Lombok

그리고 생성해준다! 시간이 좀 걸린다.

## 서버 첫 실행

프로젝트 생성이 끝나고 나면

main/java/projectName/projectApplication 을 실행하면 바로 스프링 서버를 실행한다.!

스프링은 기본적으로 8080 포트를 사용하기에 바로 `localhost:8080` 들어가면 에러페이지가 뜨는 서버로 들어간다.

## 인텔리제이 세팅

`Setting - plugin` 으로 가면 다양한 테마를 받을 수 있다!

그리고 `Setting - Auto Import` 에서 `Add unambiguous imports on the fly`를 체크하면

자동으로 에디터에서 파일을 잡아줘 더 편리하게 사용 가능하다.

## RestController 만들기

`Rest`란, 서버의 응답이 JSON 형식임을 나타낸다.

HTML, CSS 등을 주고받을땐 Rest를 붙이지 않는다.

`Controller`란, 클라이언트의 요청(Request)을 전달받는 코드를 말한다.

그 중, JSON만을 돌려주는 것은 `RestController`라고 부른다.

- RestController 만들기

스프링 어플리케이션이 있는 폴더에 `controller` 라는 패키지를 만들고, 그 안에 컨트롤러가 들어갈 클래스를 만든다.

```
package com.sparta.week01.controller;

import com.sparta.week01.prac.Course;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {

    @GetMapping("/courses")
    public Course getCourses() {
        Course course = new Course();
        course.setTitle("웹개발의 봄 스프링");
        course.setDays(35);
        course.setTutor("남병관");
        return course;
    }
}
```

- @GetMapping
  브라우저에서 주소를 치는 행위를 GET 방식으로 정보를 요청한다고 합니다. 스프링 주소(http://localhost:8080) 뒤의 주소가 /courses 일 경우, getCourse 메소드를 실행함을 나타냅니다.

이후 스프링을 실행하고 해당 주소로 들어가면 return 받은 JSON 데이터를 확인할 수 있다.

## Gradle

다른사람들이 만들어 놓은 코드를 사용할 때 Gradle을 통해 편하게 가져올 수 있다.

`MavenRepository`라는 사이트 에서는 다른 사람들이 만들어 놓은 자바 라이브러리를 찾을 수 있다.

여기서 `JSON In Java`를 찾아 Gradle 코드를 복사한 뒤,

프로젝트 폴더에 있는 build.gradle 파일 안 `dependencies` 항목에 복사하고 한번 파일을 실행하면
해당 라이브러리를 설치하게 된다.

# 2장 서버와 데이터베이스

## RDBMS

- RDBMS란?
  - RDBMS(Relational DataBase Management System)은 컴퓨터에 정보를 저장하고 관리하는 기술입니다.
  - 성능/관리 면에서 매우 고도화된 엑셀 이라고 생각하셔도 좋습니다.
- RDBMS의 종류
  💡 각 제품 간 차이가 크지 않아서 사실 어떤 걸 사용하든 좋습니다. 유료인 Oracle을 제외하고 보통 MySQL, PostgreSQL 중에서 많이 고르는 편인데, 우리는 실제 배포 시 MySQL을 사용합니다.
  - MySQL
  - PostgreSQL
  - Oracle Database
- 실제로 사용할 RDBMS
  - H2
    - In-memory DB의 대표 주자인 H2를, 4주차까지 사용해볼겁니다. 인메모리 DB란 서버가 작동하는 동안에만 내용을 저장하고, 서버가 작동을 멈추면 데이터가 모두 삭제되는 데이터베이스를 말합니다.
  - MySQL
    - MySQL은 우리가 서비스를 배포할 때 사용할 데이터베이스입니다. AWS RDS 라는 서비스를 사용해 붙여볼 예정인데요. 스프링과 궁합이 좋아서 많은 회사에서 사용하고 있답니다.

## 연습용 H2 웹콘솔 사용하기

1. src/main/resources/application.properties 에 다음 내용을 복사한다.

```
spring.h2.console.enabled=true
spring.datasource.url=jdbc:h2:mem:testdb
```

2. 스프링 어플리케이션 실행
3. http://localhost:8080/h2-console 로 접속한다.
4. JDBC URL에 `jdbc:h2:mem:testdb`를 입력한다
5. Connect 버튼을 클릭하면 콘솔이 나온다.

## SQL 처음 연습하기

아래의 내용들을 웹 콘솔의 텍스트 박스에 복붙해서 데이터를 넣자!

- 테이블 생성하기

  - bigint : 자바의 Long
  - varchar : 자바의 String

```
CREATE TABLE IF NOT EXISTS courses (
    id bigint(5) NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    tutor varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```

- 데이터 입력하기

```
INSERT INTO courses (title, tutor) VALUES
    ('웹개발의 봄, Spring', '남병관'), ('웹개발 종합반', '이범규');
```

- 데이터 조회하기

```
SELECT * FROM courses;
```

하지만 JPA를 이용하면, SQL에 많은 시간을 투자할 필요가 없다!

## JPA 시작하기

엑셀 파일 하나가 "데이터베이스"라면,
엑셀 시트 하나는 "테이블"이라고 부르고,
엑셀 행 하나는 "데이터"라고 부를 수 있다.

- JPA란?
  👉 JPA는, SQL을 쓰지 않고 데이터를 생성, 조회, 수정, 삭제할 수 있도록 해주는 번역기입니다.
- JPA가 없다면?
  - 자바 짜다가 갑자기 SQL 짜고, 그걸 잘 맞추어 넣어야 합니다. 복잡하네요 😇
- JPA가 있다면?

  - 설정은 아래 한 줄이면 끝나고
    ```
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    ```
  - 명령도 그냥 간단하게 자바로 만들면 된다.

- Domain
  위에서 테이블에 해당하는것이 Domain 이다.
- Repository
  SQL 은 Repository라고 할 수 있다. 여기 적혀있는 코드가 JPA코드를 사용하는 것이라고 할 수 있다.

### Domain 생성하기

`src/main/java/Group/domain` 에 클래스 파일을 하나 만든다.

```
package com.sparta.week02.domain;

import lombok.NoArgsConstructor;
import javax.persistence.*;

@NoArgsConstructor // 기본생성자를 대신 생성해줍니다.
@Entity // 테이블임을 나타냅니다.
public class Course {

    @Id // ID 값, Primary Key로 사용하겠다는 뜻입니다.
    @GeneratedValue(strategy = GenerationType.AUTO) // 자동 증가 명령입니다.
    private Long id;

    @Column(nullable = false) // 컬럼 값이고 반드시 값이 존재해야 함을 나타냅니다.
    private String title;

    @Column(nullable = false)
    private String tutor;

    public String getTitle() {
        return this.title;
    }

    public String getTutor() {
        return this.tutor;
    }

    public Course(String title, String tutor) {
        this.title = title;
        this.tutor = tutor;
    }
}
```

### Repositiory 생성하고 JPA 실행하기

Domain과 같은 위치에 인터페이스 파일을 하나 만든다.

`JPA는 Repository를 통해서만 사용할 수 있다.`

이렇게 미리 작성된 JPA코드들을 받아와서 편리하게 사용할 수 있다.

```
package com.sparta.week02.domain;

import org.springframework.data.jpa.repository.JpaRepository;

                                        //Course = 클래스, Long = id 자료형
public interface CourseRepository extends JpaRepository<Course, Long> {
}

```

그 다음, application.properties 에 다음 한줄을 추가해 SQL을 보이도록 한다.

```
spring.jpa.show-sql=true
```

그리고 스프링 어플리케이션 파일에 아래와 같은 코드를 넣으면,
스프링 실행시 자동으로 JPA가 데이터를 넣고 가져와서 출력해준다.

`단순히 교육을 위한 참고 코드이니 깊게 생각하지 말 것!!`

```
@Bean
public CommandLineRunner demo(CourseRepository repository) {
    return (args) -> {

        Course course1 = new Course("스프링","남병관");
        repository.save(course1);

        List<Course> courseList = repository.findAll();
        for(Course course : courseList){
            System.out.println(course.getTitle());
            System.out.println(course.getTutor());
        }
    };
}
```

스프링을 실행하고 h2 웹콘솔을 통해 생성된 데이터를 확인할 수 있다.

JPA는 이렇게 SQL을 편리하게 사용할 수 있는 엄청난 도구다!

## 생성일자 수정일자

DB 기본 중의 기본은, "생성일자"와 "수정일자"를 필드로 가지는 것이다.

Domain 에 Timestamped 라는 클래스 파일을 추가하자.

```
package com.sparta.week02.domain;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@MappedSuperclass // 상속했을 때, 컬럼으로 인식하게 합니다.
@EntityListeners(AuditingEntityListener.class) // 생성/수정 시간을 자동으로 반영하도록 설정
public abstract class Timestamped {

    @CreatedDate // 생성일자임을 나타냅니다.
    private LocalDateTime createdAt;

    @LastModifiedDate // 마지막 수정일자임을 나타냅니다.
    private LocalDateTime modifiedAt;
}
```

그 다음 SQL에 들어가는 Course 클래스에 Timestamped 클래스를 상속시킨다.

```
public class Course extends Timestamped
```

그 뒤, 스프링 어플리케이션에 다음과 같이 JPA 수정이 가능하게 하는 코드를 붙이면 끝난다.

```
@EnableJpaAuditing <-- 해당 코드를 추가한다!
@SpringBootApplication
public class Week02Application
```

그리고 나서 웹 콘솔에서 출력하게 되면 생성, 수정일자가 나온다.

```
ID  	CREATED_AT  	          MODIFIED_AT  	        TITLE  	TUTOR
1   	2022-02-11 19:51:06.611	2022-02-11 19:51:06.611	스프링	남병관

```
