## 목차

생활코딩에서 이클립스를 쓰다 이번에 인텔리제이로 바꿔서
새로운 강의로 복습 시작!

1. [인텔리제이 시작하기](#1장-인텔리제이-시작하기)
2. [변수와 계산](#2장-변수와-계산)
3. [제어문](#3장-제어문)
4. [배열](#4장-배열)
5. [클래스와 객체](#5장-클래스와-객체)
6. [클래스 다듬기](#6장-클래스-다듬기)
7. [상속](#7장-상속)

# 1장 인텔리제이 시작하기

## 자바 프로젝트 생성하기

1. 인텔리제이 좌상단 File - new - project / 혹은 첫 페이지 New Project
2. 자바를 선택한 뒤 Next
3. 프로젝트 폴더 위치를 정한다
4. 프로젝트 생성!

## 자바 클래스 파일 만들기

1. 프로젝트 폴더 내 src 폴더를 클릭, alt + insert를 누르면 생성할 수 있는 파일 목록이 뜬다.
2. java class를 선택 후 파일 생성
3. main method를 만들 때, 처음 생성되는 public class 내부에 `psvm`을 입력하면 자동으로 생성된다.
4. system.out.println("Hello JAVA!")를 내부에 입력하고 실행해보자.
5. 첫 클래스 파일 제작 완료!

# 2장 변수와 계산

## 변수

변수 : 값을 저장할 수 있는 메모리 공간

자바는 변수를 선언할 때, 데이터 타입이 그 앞에 와야 한다.

해당 변수에 마지막으로 선언된 값이 곧 그 변수의 값이다!

```
int count;
count = 10;
count = 20:
// 출력시 count = 20;
```

선언한 데이터 타입과 다른 데이터를 넣을 경우 에러!

```
int count;
count = 11.1
// Error!
```

## 상수

상수 : 한번 저장한 데이터값을 변경할 수 없다.

상수를 선언할 때는 데이터 타입 앞에 final을 붙여준다.

또한 상수는 대문자로 변수명을 짓는것이 관례!

```
final int COUNT ;
COUNT = 10;
COUNT = 20; // 이 줄은 에러가 나온다
```

## 기본형 데이터 타입

리터럴 : 정수, 실수, 문자, 논리 리터럴이 존재한다. 특정 값 자체를 리터럴이라고 부른다.

## 기본형의 타입 변환

byte < short, char < int < long < float < double

더 큰 타입에서 더 작은 타입으로 데이터 형 변환을 하면 에러가 나지만,

작은곳에서 큰 곳으로 하면 에러 없이 잘 변환 된다.

```
int x = 50000;
long y = x ; // Good! -> 묵시적 형변환

long x2 = 5;
int y2 = x2; // Error!

long x3 = 50;
int y3 = (int) x3; // Good! -> 강제 형변환
```

## 연산자와 연산식

연산 : 데이터를 처리하여 결과를 산출하는 것

연산식 ** x = y + z;**

- y와 z를 더한 값을 x에 대입한다는 것을 의미
- =과 + 는 연산자 = 은 대입연산자 이고, + 산술연산자 이다.
- y와 z 는 피연산자 이다.
- x = y+ z 는 연산식이다.

```
//부호 연산자
int i1 = -5;
int i2 = +i1; // -5
int i3 = -i1; // 5

//증감 연산자
int i4 = ++i3; // i4 = 6, i3 = 6
int i5 = i3++; // i5 = 6, i3 = 7
int i6 = --i3; // i6 = 5, i3 = 5
int i7 = i3--; // i7 = 5, i3 = 4
```

## 비교 연산자

비교 연산자의 결과는 boolean이다.

```
int i = 10; // = 대입연산자
int j = 10;

// i 와 j 가 같은지 비교 하는 비교 연산자
System.out.println(i == j )
System.out.println(i == j )
System.out.println(i != j );
System.out.println(i < j);
System.out.println( i <= j);
System.out.println(i > j);
System.out.println(i >= j);
```

# 3장 제어문

## if문

```
if(조건식){
    실행문;
    실행문;
}else if(조건식){
    실행문;
}else{
    실행문;
}
```

## 논리 연산자

논리연산자는 논리곱(&&,&) 논리합(||,|), 배타적 논리합 () 논리부정(!) 연산을 수행한다.

논리 연산자의 피연산자는 블린 타입만 사용할 수 있다. 결과는 불린값이다.

```
boolean b1 = true;
boolean b2 = false;
boolean b3 = true;
```

- 논리곱 (&&, &) - 피연산자가 모두 true일 경우에만 연산 결과가 true 이다.

```
System.out.println(b1 && b2); -> b2가 false 이므로 결과는 false
System.out.println(b1 && b3); -> b1과 b2 모두 true 이므로 결과는 true
```

- 논리합 (||,|) - 피연산자 중 하나만 true이면 연산 결과는 true 이다.

```
System.out.println(b1 || b2); -> b1 이 true이므로 결과는 true 이다.
```

배타적 논리합 () -> 피연산자가 서로 다른 값일 경우만 연산 결과가 true 이다.

```
System.out.println(b1 ^ b2); -> b1은 true, b2는 false로 서로 다르므로 결과는 true 이다.
System.out.println(b1 ^ b3); -> b1, b3 모두 true로 서로 같다. 결과는false 이다
```

논리 부정 (!) -> 피연산자의 논리값을 바꾼다. true는 false로 false는 true로 바꾼다.

```
System.out.println(!b1); -> b1 이 true 이므로 결과는 false 이다.
System.out.println(!b2); -> b1 이 false 이므로 결과는 true 이다.
```

## 삼항연산자

- 삼항 연산자
  조건식의 연산결과가 true 이면, 결과는 피연산자 1이고, 조건식의 연산결과가 false 이면 결과는 피연산자2

```
int b1 = (5 < 4) ? 50(피연산자 1) : 40(피연산자 2);
System.out.println(b1);

int b2 = 0;
if (5 > 4){
    b2 = 50;
} else {
    b2 = 40;
}
System.out.println(b2);
```

b1 과 b2 는 둘 다 동일한 코드이다.

삼항연산자를 쓰면 코드를 간결하게 만들 수 있다.

## Switch문

switch문은 어떤 변수의 값에 따라서 문장을 실행할 수 있도록 하는 제어문이다.

정수 말고 문자열도 사용할 수 있다.

```
int value = 1;

switch(value){
    case 1:
        System.out.println("1");
        break;
    case 2:
        System.out.println("2");
        break;
    case 3 :
        System.out.println("3");
        break;
    default :
        System.out.println("그 외의 숫자");
}
```

다음과 같이 사용 가능하다.

```
int value = 1;

switch(value){
    case 1:
    case 4:
    case 7:
        System.out.println("1");
        break;
    case 2:
    case 5:
        System.out.println("2");
        break;
    case 3:
        System.out.println("3");
        break;
    default :
        System.out.println("그 외의 숫자");
}
```

## 반복문

- 반복문
  반복문은 실행문을 반복적으로 실행해야 할 때 사용 한다.
  반복문의 종류는 while문, do-while문, for문 이 있다.

- while문 예시 ( 1부터 100까지 합 )

```
int i = 1;
int sum = 0;
while(i < 101) {
    sum += i;
    System.out.println(i);
    System.out.println(sum);
    i += 1;
}
```

- do while문 예시
  while문의 경우 조건이 만족하지 않는다면 한번도 반복하지 않을 수 있다.하지만, do while문의 경우는 무조건 한번은 실행되는 반복문이다.

```
int value = 0;

// Scanner는 java.util 패키지에 있는 클래스로써 키보드로 부터 값을 입력받는다던지 할 때 유용하게 사용할 수 있는 클래스입니다.
Scanner scan = new Scanner(System.in);
//위 처럼 작성하시면 키보드로부터 값을 입력받을 수 있는 Scanner객체가 생성됩니다.

do{
    value = scan.nextInt(); // Scanner클래스를 이용하여 키보드로 부터 숫자값을 입력받습니다.
    System.out.println("입력받은 수 : " + value);
}while(value != 10);  // 입력받은 값이 10이 아닐 경우에는 계속 반복합니다.

System.out.println("반복문 종료");
```

- for 반복문

for반복문은 변수초기화, 조건식, 증감식이 한줄에 모두 있다.

1. 초기화식은 최초 한 번만 수행합니다.
2. 조건식을 수행해서 수행결과가 false라면 for 반복문을 빠져 나갑니다.
3. 수행 결과가 true라면 실행문을 수행한다.
4. 증감식을 수행한다.
5. 2번부터 4번까지 반복적으로 수행한다.

```
for(초기화식; 조건식; 증감식){
        실행문;
        실행문;
    }
```

1 부터 100 까지 더하는 예시

```
int sum = 0;
for(int i = 1; i <= 100; i++){
    sum += i;
    System.out.println(sum);
}
```

# 4장 배열

## 배열 만들기

배열은 같은 데이터 타입을 가진 연속된 메모리 공간으로 이루어진 자료구조이다.

배열은 같은 데이터 타입을 가진 여러개의 변수가 필요할 때 사용한다.

```
int[] array2 = new int[]{1,2,3,4};

int[] array3 = {1,2,3,4};

int value = array3[0]; // int value = 1
```

array2 와 array3은 동일하며,

값을 꺼낼때는 해당 배열의 인덱스 번호로 가져온다.

## 1차원 배열 사용하기

```
int[] array = new int[100]; -> 길이가 100인 배열

for(int i = 0; i < array.length; i += 1){ -> .length를 사용해 길이 구하기
    array[i] = i + 1;
}

int sum = 0;

for(int i = 0; i<array.length; i += 1){
    sum += array[i];
}
System.out.println(sum);
```

## 2차원 배열 사용하기

크기를 지정해서 만들어주기

```
int[][] array = new int[3][4];

array[0][0] = 10;
```

가변크기의 2차원 배열 생성하기

```
int[][] array5 = new int[3][];

array5[0] = new int[1]; -> 크기 하나
array5[1] = new int[2]; -> 크기 둘
array5[2] = new int[3]; -> 크기 셋
```

선언과 동시에 초기화

```
int[][] array6 = {{1}, {2,3}, {4,5,6}};
```

## for each

파이썬의

for file in files: 라고 생각하자.

```
int[] iarr = {10,20,30,40,50};

for(int value:iarr){
    System.out.println(value);
}
```

# 5장 클래스와 객체

## 클래스 선언

객체지향 언어

프로그램을 구성하는 요소는 객체이며 이것이 상호작용 하도록 프로그래밍 한다.

자바는 객체를 만들기 위해 반드시 클래스를 먼저 만들어야 한다. 클래스는 객체를 만들기 위한 일종의 틀이다.

- 클래스 생성하기

```
public class Car{

}
```

- 클래스 사용하기

```
public class CarExam{
    public static void main(String args[]){
        Car c1 = new Car();
        Car c2 = new Car();
    }
}
```

- new 연산자는 new연산자 뒤에 나오는 생성자를 이용하여 메모리에 객체를 만들라는 명령.
- 메모리에 만들어진 객체를 인스턴스(instance)라고도 한다.
- 이렇게 만들어진 객체를 참조하는 변수가 c1 , c2 이다.
- 위의 코드가 실행되면 Car라는 객체가 2개가 만들어지고 각각의 객체를 참조하는 c1과 c2변수가 선언됩니다.

## 참조형 타입

참조형 타입은 기본형 타입을 제외한 모든 타입입니다. 앞서 배웠던, 배열도 참조형이고, 클래스도 모두 참조 타입이다

```
String str = new String("hello");
```

- str 변수 앞에 기본형 타입이 아닌 String클래스가 적혀있다.
- 이퀄(=)뒤에는 new 다음에 생성자라는 것이 있다.
- new 라는 키워드는 객체를 메모리에 올려준다. 이렇게 메모리에 올라간 객체를 인스턴스라고 말한다.

## String 클래스

String 클래스 : 문자열을 표현하는 자바에서 가장 많이 사용하는 클래스

String은 new를 사용하지 않아도 생성할 수 있다.

```
String str1 = "hello";
String str2 = "hello";

String str2 = new String("hello");
String str4 = new String("hello");
```

하지만 str1, 2와 str3, 4는 다르다.

new 연산자를 이용하지 않으면 문자열이 메모리 중에서 상수가 저장되는 영역에 저장된다. (final)

그러므로 str2는 이미 생성된 hello를 참조한다.

그러나 new 연산자를 이용하여 인스턴스를 만들면 인스턴스는 무조건 새롭게 만들어져야 하므로

str3 과 str4 는 서로 다른 인스턴스를 참조한다.

```
if(str1 == str2){  // 같은 인스턴스를 참조하므로 결과는 true
    System.out.println("str1과 str2는 같은 레퍼런스입니다.");
}

if(str1 == str3){  // str1과 str3은 서로 다른 인스턴스를 참조하므로 결과는 false
    System.out.println("str1과 str3는 같은 레퍼런스입니다.");
}

if(str3 == str4){  // str3과 str4는 서로 다른 인스턴스를 참조하므로 결과는 false
    System.out.println("str3과 str4는 같은 레퍼런스입니다.");
}
```

두 문자열을 비교하고 싶을땐 equal()을 사용하자

```
String str1 = new String("Hello world");
String str2 = new String("Hello world");

str1.equals(str2) == true
```

## 필드 선언

name과 number를 필드로 가지는 클래스 Car 선언

```
public class Car{
    String name;
    int number;
}
```

Car 클래스 인스턴스화 (참조변수 c1, c2 생성)

```
Car c1 = new Car();
Car c2 = new Car();
```

속성 이용하기

```
c1.name = "소방차";  //c1이 참조하는 객체의 name을 소방차로 설정

c1.number = 1234;   // c1.number = 1234란 c1이 참조하는 객체의 number를 1234 로 설정

c2.name = "구급차"  //c2가 가리키는 객체의name을 구급차로 설정

c2.number = 1004;  //c2가 가리키는 객체의 number를 1004로 설정

```

## 메소드

메소드는 입력값이 있고, 그 입력값을 받아서 무언가 한 다음 결과를 도출해 내는 수학의 함수와 비슷한 개념이다.

이때 입력값을 매개변수라고 하고,결과값을 리턴값이라고 합니다.

- 인자( Argument ) 는 어떤 함수를 호출시에 전달되는 값을 의미한다.
- 매개 변수( Parameter ) 는 그 전달된 인자를 받아들이는 변수를 의미한다.

메소드란 클래스가 가지고 있는 기능이다. 클래스 안에 선언됩니다.

## 메소드 선언

메소드 = 클래스가 가진 기능.

메소드 작성하는 방법

`public / 리턴 데이터 타입 / 메소드 이름 / 매개변수(생략 가능) / {구현}

```
리턴 데이터가 없고 매개변수를 받지 않는 메소드

public class MyClass{
    public void method1(){
        System.out.println("method1이 실행됩니다.");
    }
}
```

- void : 리턴 데이터 타입이 없을 경우 작성

```
정수를 받고 리턴하지 않는 메소드

public class MyClass{
    public void method2(int x){
        System.out.println(x + " 를 이용하는 method2입니다.");
    }
}
```

```
인자를 받지 않고 리턴하는 메소드

public int method3(){
    System.out.println("method3이 실행됩니다.");

    return 10;
}
```

## 메소드 사용해보기

메소드를 사용하기 위해서는 메소드가 정의된 클래스인 MyClass 가 생성되어야 한다

- MyClass 클래스 생성

```
public class MyClass{
    public void method(){
        System.out.println("method1이 실행됩니다.");
    }

    public void method2(int x){
        System.out.println(x + " 를 이용하는 method2입니다.");
    }

    public int method3(){
        System.out.println("method3이 실행됩니다.");
        return 10;
    }

    public void method4(int x, int y){
        System.out.println(x + "," + y + " 를 이용하는 method4입니다.");
    }

    public int method5(int y){
        System.out.println(y + " 를 이용하는 method5입니다.");
        return 5;
    }
}
```

- 클래스를 이용해 객체 생성, 객체를 생성할 때는 new 연산자 이용하기

```
public class MyClassExam{
    public static void main(String args[]){
        MyClass my1 = new MyClass(); //메소드가 정의된 클래스 생성

        my1.method1();   //MyClass에서 정의해 놓은 메소드 method1() 를 호출한다.

        my1.method2(10);

        int x = my1.method3();

        System.out.println("method3 이 리턴한 " + x + " 입니다.");

        my1.method4(10,100);

        int x2 = my1.method5(50);

        System.out.println("method5 가 리턴한 " + x2 + " 입니다.");
    }
}
```

## String 클래스의 메소드

- 문자열 길이 구하기

  str.length()는 str이 참조하는 문자열의 길이를 구해서 int 타입으로 리턴해주는 메소드 이다.

```
System.out.println(str.length());
```

- 문자열 붙히기 (concat)

  str.concat("world") 메소드는 str 이 참조하는 문자열 hello 에다가 메소드의 인자로 들어온 문자열 world 를 붙혀서 String 타입으로 리턴하는 메소드다.

  String Class는 불변 클래스로, 메소드가 수행되면, 새로운 문자열을 만든다. 그러므로, 원래 클래스는 변하지 않는다.

```
String str1 = new String("HELLO");

System.out.println(str1.concat(" World"));
// HELLO World
```

- 문자열 자르기 (subString)

  str.subString(1,3) 은 str이 참조하는 문자열을 인덱스 1번부터 3번까지 자른 결과이다.

  str.subString(2) 은 str이 참조하는 문자열을 2번 인덱스부터 마지막까지 자른 결과를 의미한다.

  문자열의 인덱스는 0번 부터 시작한다.

```
String str = "Hello";
String str2 = "Hello World";

System.out.println(str.substring(1, 3)); // el
System.out.println(str2.substring(2)); // llo World
```

## 변수의 scope와 static

보통 변수가 선언된 블록이 변수의 사용 범위이다.

프로그램상에서 사용되는 변수들은 사용 가능한 범위를 가지고, 그 범위를 변수의 스코프라고 한다.

그런데, 기본적으로 클래스는 인스턴스화 하지 않으면 사용할 수 없지만, static이라는 키워드가 붙으면 바로 사용할 수 있다.

static 처리를 한 변수등은 static 처리를 하지 않은 메소드 등에서
사용해도 문제가 없다.

static 처리를 하지 않은 변수는 main method에서 사용하려면
객체를 생성한 뒤 사용해야 한다.

`주의해야 할 것은,` static 변수는 하나의 값만 저장하기 때문에 여러 인스턴스에서 같은 static 변수의 값을 바꾼다면,

마지막에 저장된 값이 static 변수에 저장된다.

## 열거형

자바는 열거타입을 이용하여 변수를 선언할 때 변수타입으로 사용할 수 있다.

- 열거형 정의 방법

```
 public class EnumExam {
        public static final String MALE = "MALE";
        public static final String FEMALE = "FEMALE";
    }
}
enum Gender{
    MALE, FEMALE;
}
```

- 열거형 사용 방법

```
Gender gender2;

gender2 = Gender.MALE;
gender2 = Gender.FEMALE;
```

# 6장 클래스 다듬기

## 생성자

모든 클래스는 인스턴스화 될때 생성자를 사용한다.

생성자의 특징

- 생성자는 리턴타입이 없다.
- 생성자를 프로그래머가 만들지 않으면 매개변수가 없는 생성자가 컴파일할 때 자동으로 만들어진다.
- 매개변수가 없는 생성자를 기본생성자라고 한다.
- 생성자를 하나라도 프로그래머가 만들었다면 기본생성자는 자동으로 만들어지지 않는다.

생성자의 역할

- 생성자가 하는 일은 객체가 될 때 필드를 초기화 하는 역할을 수행한다.

Car 클래스 만들기

```
public class Car{
    String name;
    int number;

    public Car(String n){
        name = n;
    }
}
```

Car 클래스를 이용하여 Car 인스턴스 생성하기

```
public class CarExam2{
    public static void main(String args[]){

        Car c1 = new Car("소방차");
        Car c2 = new Car("구급차");
        //Car c3 = new Car(); // 컴파일 오류가 발생합니다.

        System.out.println(c1.name);

        System.out.println(c2.name);
    }
}
```

## this

- 이 경우에는 후에 출력시 name은 null로 나오게 된다.

```
public class Car{
    String name;
    int number;

    public Car(String name){
        name = name;
    }
}
```

- this를 사용하면 변수를 애매모호 하지 않게 선언 가능하다
  자기 자신의 변수 혹은 메소드를 호출할 때 this를 사용한다.(객체 자신을 참조)

```
public class Car{
    String name;
    int number;

    public Car(String name){
        this.name = name;
    }
}
```

## 메소드 오버로딩

- 메소드 오버로딩

매개변수의 유형과 개수가 다르게 하여 같은 이름의 메소드를 여러 개 가질 수 있게하는 기술

- 이름은 같지만 매개변수가 다른 메소드

```
class MyClass2{
    public int plus(int x, int y){
        return x+y;
    }

    public int plus(int x, int y, int z){
        return x + y + z;
    }

    public String plus(String x, String y){
        return x + y;
    }
}
```

메소드의 인자에 어떤 값이 쓰이느냐에 따라서 각기 다른 메소드가 호출된다.

## 생성자 오버로딩과 this

생성자의 매개변수의 유형과 개수가 다르게 하여 같은 이름의 생성자를 여러 개 가질 수 있다.

```
public class Car{
    String name;
    int number;

    public Car(){
        // 아무것도 없는 기본 생성자
    }

    public Car(String name){
        this.name = name;
    }

    public Car(String name, int number){
        this.name = name;
        this.number = number;
    }
}
```

## 패키지

패키지(package)란 서로 관련이 있는 클래스 또는 인터페이스들을 묶어 놓은 묶음이다.

패키지를 사용함으로써 클래스들이 필요할 때만 사용될 수 있도록 하고, 클래스를 패키지 이름과 함께 계층적인 형태로 사용함으로써

다른 그룹에 속한 클래스와 발생할 수 있는 클래스 이름간의 충돌을 막아줌으로 클래스의 관리를 편하게 해준다.

# 7장 상속

## 상속

상속이란? 부모가 가진것을 자식에게 물려주는것을 의미한다.
