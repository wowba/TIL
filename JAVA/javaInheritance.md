## 상속

상속은 특정 class가 가진 method와 변수를 다른 클래스에게 상속하는 것.
이는 코드의 재사용성, 유지보수, 편의성을 높이고 코드의 양을 줄인다.

```
class cal1{
	public int sum(int v1, int v2) {
		return v1+v2;
	}
}

class cal3 extends cal1{  cal3를 가져와 사용 가능.
	public int minus(int v1, int v2) {
		return v1-v2;
	}
}

public class cal {

	public static void main(String[] args) {

		cal3 c3 = new cal3();
		System.out.println(c3.sum(2,1)); # sum은 cal1에 있지만 cal3 에서 쓸 수 있다.
		System.out.println(c3.minus(2,1));
	}
}
```

## Overriding VS Overloading

```
class cal1{
	public int sum(int v1, int v2) {
		return v1+v2;
    public int sum(int v1, int v2, int v3){  --> overloading
        return v1 + v2 + v3
	}
}
class cal3 extends cal1{             --> overriding
	public int sum(int v1, int v2) {
		return v1+v2+v2;
	}
}
```

## this / super

this 는 자기 자신, sum은 부모.

## 상속과 생성자

```
class Cal{
    int v1,v2;
    Cal(int v1, int v2){
        System.out.println("Cal init!!");
        this.v1 = v1; this.v2 = v2;
    }
    public int sum(){return this.v1+v2;}
}
class Cal3 extends Cal{
    Cal3(int v1, int v2) {
        super(v1, v2);
        System.out.println("Cal3 init!!");
    }
    public int minus(){return this.v1-v2;}
}
public class InheritanceApp {
    public static void main(String[] args) {
        Cal c = new Cal(2,1);
        Cal3 c3 = new Cal3(2, 1);
        System.out.println(c3.sum()); // 3
        System.out.println(c3.minus()); // 1
    }
}
```
