## 목차

프로그래머스 자바 중급 강의내용 정리.

1. [Object 클래스](#1장-Object-클래스)
2. [java.lang 패키지](#2장-java-lang-패키지)
3. [java.util 패키지](#3장-java-util-패키지)

# 1장 Object 클래스

## Object와 오버라이딩

- Object클래스는 모든 클래스의 최상위 클래스

- 아무것도 상속받지 않으면 자동으로 Object를 상속

- Object가 가지고 있는 메소드는 모든 클래스에서 다 사용할 수 있다는 것을 의미

Object가 가지고 있는 method중 가장 많이 쓰이는 것은 다음과 같다.

- equals : 객체가 가진 값을 비교
- toString : 객체가 가진 값을 문자열로 반환
- hashCode : 객체의 해시코드 값 반환

이 3가지는 반드시 오버라이딩 해서 사용해야 한다.

## equals() and hashCode()

```
 public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "홍길동";
        s1.number = "1234";
        s1.birthyear = 1995;


        Student s2 = new Student();
        s2.name = "홍길동";
        s2.number = "1234";
        s2.birthyear = 1995;

        if(s1.equals(s2))
            System.out.println("s1 == s2");
        else
            System.out.println("s1 != s2");
 }
```

위와 같은 두개의 인스턴스를 비교하면, `"s1 != s2"`가 출력된다.

그렇기에 인텔리제이에서 제공하는

alt + insert를 하면 나오는 `equals() and hashCode()`를 사용해 비교하고자 하는 필드(name, number, birthyear 등)를 선택,

두 method를 오버라이드 하면 의도하던 비교가 된다.

```
public class Student {
    String name;
    String number;
    int birthyear;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(number, student.number);
    }

    @Override
    public int hashCode() {
        return Objects.hash(number);
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "홍길동";
        s1.number = "1234";
        s1.birthyear = 1995;

        Student s2 = new Student();
        s2.name = "홍길동";
        s2.number = "1234";
        s2.birthyear = 1995;

        if(s1.equals(s2))
            System.out.println("s1 == s2");
        else
            System.out.println("s1 != s2");

        System.out.println(s1.hashCode());
        System.out.println(s2.hashCode());
    }
}
```

이게 해당 method를 오버라이드 한 뒤의 코드인데,

`"s1 == s2"`가 정상적으로 출력되며 각각 hashCode를 출력하면 두개 다 동일하게 출력된다.

## toString()

위의 두 메소드와 같이 alt + insert에서 `toString()`을 선택한 뒤,

보여주고 싶은 필드를 선택한다.

그 뒤에 출력시 데이터 코드가 아닌 필드가 정상적으로 출력된다.

```
public class Student {
    String name;
    String number;
    int birthyear;

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", number='" + number + '\'' +
                ", birthyear=" + birthyear +
                '}';
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "홍길동";
        s1.number = "1234";
        s1.birthyear = 1995;

        System.out.println(s1);
        //
        Student{name='홍길동', number='1234', birthyear=1995}
    }
}
```

위와 같이 toString()을 오버라이드 해서 사용하면

원하는 속성이 출력되게 바꿀 수 있다.

# 2장 java lang 패키지

## java.lang 패키지/오토박싱, 언박싱

자바는 기본적으로 다양한 패키지를 지원하며, 그중에서 가장 중요한 패키지가 java.lang 패키지 이다.

```
    public class WrapperExam {
        public static void main(String[] args) {
            int i = 5;
            Integer i2 = new Integer(5);
            Integer i3 = 5;     //오토박싱
            int i4 = i2.intValue();
            int i5 = i2;       //오토언박싱
        }
    }
```

자바 버전이 높아질수록 이런것은 자동으로 해결되어,

현재는 컴파일러에서 알아서 해준다.

## 스트링 버퍼 / StringBuffer

StringBuffer가 가지고 있는 메소드들은 대부분 자기 자신, this를 반환하며

자기 자신의 메소드를 호출하여 자신의 값을 바꾸는 것을 메소드체이닝 이라고 한다.

스트링 버퍼는 메소드 체인 방식으로 사용할 수 있도록 만들어져 있다.

```
public class StringBufferTest {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer();
        sb.append("hello").append(" ").append("world");

        String str = sb.toString();
        System.out.println(str); // hello world

        StringBuffer sb2 = new StringBuffer();
        StringBuffer sb3 = sb2.append("hello");

        if(sb2 == sb3)
            System.out.println("sb2 == sb3");
    }
}
```

## String

String 클래스는 문자열을 다룰때 사용하는 불변 클래스 이다.

헌데 문자열과 문자열을 더할 때 반복문 안에서 더하게 되면 성능상 문제가 생긴다.

```
String str4 = "";
for(int i = 0; i < 100; i++){
    str4 = str4 + "*";
}
```

위의 코드에서 반복되는 과정은 사실 아래와 같다.

```
String str4 = new StringBuffer().append(str1).append(str2).toString();
System.out.println(str4);
```

그렇기에 다음과 같이 String이 아닌 StringBuffer를 이용하는것이 성능 측면에서 좋다.

```
StringBuffer sb = new StringBuffer();
for(int i = 0; i < 100; i++) {
    sb.append("*");
}
String str6 = sb.toString(); // 마지막에 한번만 toString() 해주기.
System.out.println(str6);
```

## Math

Math 클래스는 이름 그대로 수학계산을 위한 클래스이며

코싸인, 싸인, 탄젠트, 절대값, 랜덤값 등을 구할 수 있는 클래스이다.

아래는 예시.

```
public class MathExam {
    public static void main(String[] args) {
        int value1 = Math.max(5, 20);
        int value2 = Math.min(5, -5);
        int value3 = Math.abs(-10);
        double value4 = Math.random();
        double value5 = Math.sqrt(25);
    }
}
```

Math는 private 이지만 모든 메서드가 static 처리가 되어있어

바로 가져와서 사용할 수 있다.

# 3장 java util 패키지

## java.util 패키지

java.util패키지는 유용한 클래스들을 많이 가지고 있는 패키지다.

## 컬랙션 프레임워크

java.util패키지에는 자료를 다룰 수 있는 자료구조 클래스가 다수 존재한다.

자료구조 클래스들을 컬렉션 프레임워크라고 한다.

## Generic

Box 클래스

- Box는 매개변수로 Object를 하나 받아들이고, Object를 반환한다.
- Object를 받아들일 수 있다는 것은 Object의 후손이라면 무엇이든 받아들일 수 있다는 것이다.
- 클래스 이름 뒤에 `<E>` 가 제네릭을 적용한 것이다. Box는 가상의 클래스 E를 사용한다는 의미.
- Object를 받아들이고, 리턴하던 부분이 E로 변경. E는 실제로 존재하는 클래스는 아니다.

```
public class Box<E> {
    private E obj;

    public void setObj(E obj){
        this.obj = obj;
    }

    public E getObj(){
        return obj;
    }
}
```

Box 클래스 사용하기

```
public class BoxExam {
    public static void main(String[] args) {

        Box<Object> box = new Box<>();
        box.setObj(new Object());
        Object obj = box.getObj();

        Box<String> box2 = new Box<>();
        box2.setObj("3");
        String str = box2.getObj();
        System.out.println(str);

        Box<Integer> box3 = new Box<>();
        box3.setObj(3);
        int v2 = box3.getObj();
    }
}
```

- 참조타입에 `<Object> , <String>, <Integer>`가 있는 것을 볼 수 있다.
- 각각 `Object, String, Integer`을 사용하는 인스턴스를 생성하는 것.
- Generic을 사용하는 대표적인 클래스는 컬렉션 프레임워크와 관련된 클래스이다.

## Set

set은 중복이 없고, 순서도 없는 자료구조. Hashset과 TreeSet이 있다.

iterator를 이용해 하나씩 내용물을 확인할 수 있다.

```
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class SetExam {
    public static void main(String[] args) {
        Set<String> set1 = new HashSet<>(); // set은 boolean 값을 반환.
        boolean flag1 = set1.add("Hello");
        boolean flag2 = set1.add("World");
        boolean flag3 = set1.add("Hello");

        System.out.println(set1.size());

        System.out.println(flag1); // true
        System.out.println(flag2); // true
        System.out.println(flag3); // false

        Iterator<String> iter = set1.iterator();
        while(iter.hasNext()){
            String str = iter.next();
            System.out.println(str);
            // Hello
            // World
        }
    }
}
```

## List

list는 데이터의 중복이 있을 수 있고, 순서도 있다.

배열은 한번 생성하면 크기 변경이 불가하지만,

리스트는 저장공간을 자유롭게 변경 가능하다.

```
import java.util.ArrayList;
import java.util.List;

public class ListExam {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Hello");
        list.add("World");
        list.add("Hello");

        for(int i = 0; i < list.size(); i++){
            String str = list.get(i);
            System.out.println(str);
            // Hello
            // World
            // Hello
        }
    }
}
```

## Map

Map은 key와 value를 쌍으로 저장하는 자료구조이며, 키는 중복될 수 없고, 값은 중복될 수 있다.

이미 존재하는 키에 값을 넣을경우, 값은 최신화 된다.

```
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class MapExam {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        map.put("001", "kim");
        map.put("002", "Lee");
        map.put("003", "Park");

        map.put("001", "Kang"); // 최신화 함.

        Set<String> keys = map.keySet();
        System.out.println(keys);

        Iterator<String> iter = keys.iterator();
        while(iter.hasNext()){
            String key = iter.next();
            String value = map.get(key);
            System.out.println(key + ":" + value);
        }
    }
}
```
