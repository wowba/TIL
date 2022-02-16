## 목차

4. [ORM, JPA 영속성, DB](4장-ORM,-JPA-영속성,-DB)

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
