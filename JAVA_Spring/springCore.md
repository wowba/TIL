## 목차

1. [객체 지향 설계와 스프링](#객체-지향-설계와-스프링)

# 객체 지향 설계와 스프링

## EJB 이후, 스프링과 하이버네이트

끔찍한 EJB에서 탈출하기 위해 스프링과 하이버네이트가 등장한다.

하이버네이트가 등장하고 EJB를 사람들이 쓰지 않자

결국 EJB 에서 하이버네이트 개발자를 데려와 JPA를 만들었지만, 지금은 여러 구현체가 들어있다.

로드 존슨이라는 개발자는 EJB 없이 고품질의 애플리케이션을 개발하는 방법을 찾고, 이후 오픈소스 프로젝트로 진화한다.

## 스프링이란?

스프링 프레임워크, 스프링 부트는 필수이며,

그 외에 스프링 데이터, 스프링 세션, 스프링 시큐리티, 스프링 REST Docs, 스프링 배치, 스프링 클라우드 등등이 선택적으로 사용 가능하다.

스프링 부트는 스프링을 편리하게 사용할 수 있도록 많은 편의를 지원한다.

스프링이란 단어의 뜻은 근래에 스프링 부트, 스프링 프레임워크등을 포함한 생태계를 칭한다.

## 스프링의 핵심 개념

스프링은 자바 언어 기반의 프레임워크

자바 언어의 가장 큰 특징 - 객체 지향 언어

스프링은 객체 지향 언어가 가진 강력한 특징을 살려내는 프레임워크

스프링은 좋은 객체 지향 어플리케이션을 개발할 수 있게 해주는 프레임워크

## 좋은 객체 지향 프로그래밍?

객체 지향 프로그래밍은 컴퓨터 프로그램을 명령어가 아닌, 객체들의 모임으로 보는 것.

객체지향 프로그래밍은 프로그램을 유연하고 변경이 용이하게 만들어

대규모 소프트웨어 개발에 주요 사용되고 컴퓨터 부품을 갈아 끼우는것과 비슷하다.

즉, 다형성은 객체지향에서 가장 중요한 핵심이라고 할 수 있다.

다향성은 역할과 구현으로 분리해서 생각하면 간단하게 나눌 수 있다.

- 클라이언트는 대상의 역할(인터페이스)만 알면 된다.
- 클라이언트는 구현 대상의 내부 구조를 몰라도 된다.
- 클라이언트는 구현 대상의 내부 구조가 변경되어도 영향을 받지 않는다.
- 클라이언트는 구현 대상 자체를 변경해도 영향을 받지 않는다.

자바 언어에서도 다형성을 활용한다

- 역할 = 인터페이스
- 구현 = 인터페이스를 구현한 클래스, 구현 객체

즉, 객체를 설계할 때 역할과 구현을 명확히 분리하며
객체 설계시 역할(인터페이스)을 먼저 부여하고 그 역할을 수행하는 객체를 만드는 것.

객체는 혼자 있을 수 없으며, 요청하는 클라이언트와 응답하는 서버가 서로 협력 관계를 가진다.

특히 오버라이딩에서 자바 언어의 다향성을 알 수 있다.

1. 인터페이스를 구현한 객체 인스턴스를 실행 시점에 유연하게 변경 가능
2. 다형성의 본질을 이해하려면 협력이라는 객체사이의 관계에서 시작
3. 클라이언트를 변경하지 않고, 서버의 구현 기능을 유연하게 변경 가능.

결국, 스프링은 이 다형성을 극대화해서 이용할 수 있게 도와준다.

스프링의 IOC, DI 등은 다형성을 활용, 역할과 구현을 편리하게 다룰 수 있도록 지원한다.

## 좋은 객체 지향 설계의 5가지 원칙 (SOLID)

SRP - 단일 책임 원칙

- 한 클래스는 하나의 책임만 가진다. 책임의 기준은 애매모호하다.
- 해당 클래스가 변경될 때 파급 효과가 적으면 단일 책임 원칙을 잘 따른 것.
- ex) UI 변경, 객체의 생성과 사용을 분리

OCP - 게방, 폐쇄 원칙

- 소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 함.
- 다향성을 활용, 인터페이스를 구현한 새로운 클래스를 하나 만들어서 새로운 기능을 구현
- 역할과 구현의 분리를 잘 생각해서 OCP 원칙을 잘 지켜야 한다.
- 이 원칙을 지키기 위해 스프링에서 IOC, DI를 지원해 준다.

LSP 리스코프 치환 원칙

- 프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 한다.
- 다향성에서 하위 클래스는 인터페이스 규약을 다 지켜야 한다.
- 예를 들어, 자동차의 엑셀은 앞으로 가야하는데, 뒤로 가게 만들어 버리면 LSP를 위배하는 구현.

ISP 인터페이스 분리 원칙

- 특정 클라이언트를 위한 인터페이스 여럿이 범용 인터페이스 하나보다 낫다
- 자동차 인터페이스 -> 운전 인터페이스, 정비 인터페이스로 분리
- 사용자 인터페이스 -> 운전자 클라이언트, 정비사 클라이언트로 분리
- 분리하면 관계 없는 인터페이스가 클라이언트에 큰 영향을 끼치지 않음.
- 인터페이스가 명확해지고, 대체 가능성이 높아진다.

DIP 의존관계 역전 원칙

- 프로그래머는 추상화에 의존해야 하며, 구체화에 의존하지 않는다.
- 구현 클래스에 의존하지 않고, 인터페이스에 의존한다.
- 즉 대체가능성, 역할에 의존해야 하고 구현에 의존하면 DIP를 위배한다.

다형성 만으로는 구현 객체를 변경할 때 클라이언트 코드도 함께 변경한다.

OCP, DIP를 지킬 수 없게 된다. 이때 스프링이 필요하다.

## 객체 지향 설계와 스프링

스프링은 DI 컨테이너를 제공해 OCP, DIP 를 지킬 수 있게 한다.

모든 설계에 역할과 구현을 분리하고, 이상적으로는 모든 설계에 인터페이스를 부여해야 한다.

하지만 인터페이스를 도입하면 추상화라는 비용이 발생, 향후 꼭 필요할때 리펙토링 해서 인터페이스를 도입하는 것도 방법이다.
