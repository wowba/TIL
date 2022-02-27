## 목차

1. [스프링 동작 원리 파악](#1장-스프링-동작-원리-파악)
2. [스프링 시큐리티](#2장-스프링-시큐리티)
3. [ORM, JPA 영속성, DB](#4장-ORM,-JPA-영속성,-DB)

# 1장 스프링 동작 원리 파악

## Controller의 장점

1. HTTP request, response 처리를 위해 매번 작성해야 하는 중복코드를 깔끔하게 생략할 수 있다.
2. API를 더 깔끔하게 구현할 수 있게 해준다. 유사한 성격의 API들을
   하나의 컨트롤러로 관리 가능.
3. ARC를 이용해 API 동작 검증을 간단히 할 수 있다.

## 스프링 MVC 이해 - Response

- 스프링 MVC

  - MVC (Model - View - Controller) 디자인 패턴

- Server 에서 HTML 을 내려 주는 경우

  1. 정적 (static) 웹 페이지

     - **Controller**
       1. Client 의 요청을 **Model** 로 받아 처리
          1. 예) 회원가입을 위한 개인 정보들 (id, password, name)
       2. Client 에게 **View** (정적 웹 페이지, HTML) 를 내려줌

  2. 동적 (dynamic) 웹 페이지

  - **Controller**
    1. Client 의 요청을 **Model** 로 받아 처리
    2. Template engine 에게 **View**, **Model** 전달
       1. **View**: 동적 HTML 파일
       2. **Model**: View 에 적용할 정보들
    3. Template engine
       1. **View** 에 **Model** 을 적용 → 동적 웹페이지 생성
          1. 예) 로그인 성공 시, "로그인된 사용자의 id" 를 페이지에 추가
          2. Template engine 종류: 타임리프 (Thymeleaf), Groovy, FreeMarker, Jade 등 (스프링에서 JSP 이용은 추천하지 않고 있음)
    4. Client 에게 **View** (동적 웹 페이지, HTML) 를 내려줌

# 2장 스프링 시큐리티

## 웹의 인증 및 인가

- 인증 (Authentication): 사용자 신원을 확인하는 행위
- 인가 (Authorization): 사용자 권한을 확인하는 행위

웹에서의 인증 및 인가

- 인증: 로그인을 통해 본인임을 확인 (주로, 아이디와 패스워드 이용)
- 인가: 주로 역할에 따른 사용 권한 관리
  예) 웹 카페 사이트에서 회원 랭킹 별 가능한 첨부파일 크기를 다르게 부여

## 쿠키와 세션

기본적으로 HTTP는 Stateless, 즉 상태를 저장하지 않습니다. 그래서 이를 해결하기 위해 쿠키와 세션이 존재합니다.

쿠키와 세션 모두 HTTP 에 상태 정보를 유지(Stateful)하기 위해 사용됩니다. 즉, 쿠키와 세션을 통해 서버에서는 클라이언트 별로 인증 및 인가를 할 수 있게 됩니다.

- 쿠키

  - 클라이언트에 저장될 목적으로 생성한 작은 정보를 담은 파일 입니다.
  - 구성요소
    - **Name** (이름): 쿠키를 구별하는 데 사용되는 키 (중복될 수 없음)
    - **Value** (값): 쿠키의 값
    - Domain (도메인): 쿠키가 저장된 도메인
    - Path (경로): 쿠키가 사용되는 경로
    - Expires (만료기한): 쿠키의 만료기한 (만료기한 지나면 삭제됩니다.)

- 세션
  - 서버에서 일정시간 동안 클라이언트 상태를 유지하기 위해 사용
  - 서버에서 클라이언트 별로 유일무이한 '세션 ID' 를 부여한 후 클라이언트 별 필요한 정보를 서버에 저장
  - 서버에서 생성한 '세션 ID' 는 클라이언트의 쿠키값('세션 쿠키' 라고 부름)으로 저장되어 클라이언트 식별에 사용됨
  - 세션 동작 방식
    - 1. 클라이언트가 서버에 1번 요청
    - 2. 서버가 세션ID 를 생성하고, 응답 헤더에 전달
         1. 세션 ID 형태: "SESSIONID = 12A345"
    - 3. 클라이언트가 쿠키를 저장 ('세션쿠키')
    - 4. 클라이언트가 서버에 2번 요청
         - 쿠키값 (세션 ID) 포함하여 요청
    - 5. 서버가 세션ID 를 확인하고, 1번 요청과 같은 클라이언트임을 인지

## 스프링 시큐리티 프레임워크

'스프링 시큐리티' 프레임워크는 스프링 서버에 필요한 인증 및 인가를 위해 많은 기능을 제공해 줌으로써 개발의 수고를 덜어 줍니다. 마치 '스프링' 프레임워크가 웹 서버 구현에 편의를 제공해 주는 것처럼요!

# 4장 ORM, JPA 영속성, DB

- 1. ORM이란?
     💡 ORM: Object-Relational Mapping

  Object: **"객체"**지향 언어 (자바, 파이썬)
  Relational: **"관계형"** 데이터베이스 (H2, MySQL)

- 2. JPA는?

  💡 JPA: Java Persistence API
  자바 ORM 기술에 대한 표준 명세

## JPA 영속성 컨테스트

- JPA
  - **객체** - ORM - **DB**
  - **객체** - **영속성 컨텍스트 매니져** (entity context manager) - **DB**
- 영속성 컨텍스트 매니져
  - 객체 ↔ DB 의 소통을 효율적으로 관리
- PK (Primary Key)
  - 테이블에서 각 row 마다 가져야 하는 유일무이한 값 (Null 허용되지 않음)
  - 보통 테이블 ID 를 PK 로 설정 (인조키)

## DB의 연관관계

- DB 의 연관관계

  - JPA 가 제공하는 연관관계는 결국 DB 의 연관관계를 표현하기 위함
  - 따라서 먼저 DB 의 연관관계를 이해해야 함
  - DB 의 연관관계는 비즈니스 요구사항에 맞춰 이루어짐

- '음식 배달 서버'를 개발한다고 가정

  - 회원 1명은 주문 N개를 할 수 있다.
    - 회원 : 주문 = 1 : N 관계
  - 음식 1개는 주문 N개에 포함될 수 있다.
    - 음식 : 주문 = 1 : N 관계
  - 결론적으로
    - 회원 : 음식 = N : N 관계

## JPA 연관관계

- JPA 연관관계 설정방법
  👉 JPA 의 경우는 Enitity 클래스의 필드 위에 연관관계 어노테이션 (@) 을 설정해 주는 것만으로 연관관계가 형성됩니다.

- '음식 배달 서버'를 개발한다고 가정

  - @OneToMany / Order(1) : Food(N) --> 배달주문 1개에 음식 여러개 선택
  - @ManyToOne / Owner(1) : Restaurant(N) --> 음식점 주인 여러명이 하나의 가게 소유
  - @OneToOne / Order(1) : Coupon(1) --> 배달 주문 1개에 쿠폰 1개만 적용 가능
  - @ManyToMany / User(N) : Restaurant(N) --> 고객이 음식점 여러개 찜 가능 / 음식점은 고객 여러명에게 찜 가능

- 주문 (Order)

```
@Enitity
public class Order {
    @OneToMany
    private List<Food> foods;

		@OneToOne
		private Coupon coupon;
}
```

- 음식점주 (Owner)

```
@Entity
public class Owner {
	@ManyToOne
	Restaurant restaurant;
}
```

- 고객 (User)

```
@Entity
public class User {
	@ManyToMany
	List<Restaurant> likeRestaurants;
}
```

## Spring Data JPA 이해

- Spring Data JPA 는?
  - JPA 를 편리하게 사용하기 위해, 스프링에서 JPA 를 Wrapping
  - 스프링 개발자들이 JPA 를 사용할 때 필수적으로 생성해야 하나, 예상 가능하고 반복적인 코드들 → Spring Data JPA 가 대신 작성
  - Repostiory 인터페이스만 작성하면, 필요한 구현은 스프링이 대신 알아서 척척!
