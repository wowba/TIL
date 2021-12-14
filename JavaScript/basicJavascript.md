## 변수

변수는 값을 가진것을 말한다!

```
let a = 2
let name = "kim"
const phoneNumber = "010-1234-5678"
```

위와 같이 숫자, 문자등을 담을 수 있다.
문자는 큰 따옴표 혹은 작은 따옴표 안에 들어가야 한다.

## 자료형

자료형에는 list, dictionary가 있다.

list는 []안에 값을 넣어 만든다. list는 내부 값들의 순서가 중요하다.

```
let a_list = [a, b, c]
let a_list[0] = "a"
let a_list[1] = "b"
```

dictionary는 {}안에 넣어서 만든다.

여기서 "name"은 key, "bob" 은 value가 된다.

```
let a_dictionary = {
    "name": "bob",
    "age": 27
}

a_dictionary["name"] = "bob"
```

임의의 key, value값을 넣어 새롭게 만들 수 있다.
또한 list 도 넣을 수 있다.

```
a_dictionary["height"] = 180

a_dictionary = {
    "name": "bob",
    "age": 27,
    "height": 180
}

a_dictionarty[abc] = a_list

a_dictionarty[abc][0] = "a"
```

## 기본적인 함수

```
let a = 100

a % 8 (나머지 구하기)
4

a < 150 (대소 비교)
true

a > 150
false

a == 100 (같다)
true

a != 100 (같지 않다)
false
```

## function

프로그래밍에서의 함수는 정해진 동작을 하는 것.

```
function sum(num1,num2){
    return num1 + num2
}
```

sum은 함수의 이름, num1과 num2는 함수의 인자이다.

return은 해당 함수의 결과를 내보내는것.

```
let result = sum(2,3)
result = 5
```

인자가 필요하지 않은 함수는 sum() 이렇게 써도 무방하다.

## 조건문

```
if (조건1){
    asdf
} else if (조건2) {
    qwer
} else {
    zxcv
}
```

조건1이 true 면 asdf, false면 다음 조건2로 넘어간다.
조건2가 true면 qwer을 실행, false면 else로 넘어가서 zxcv를 실행한다.

조건은 <, >, &&(그리고), || (또는) 등이 있다.

```
if (age > 20 || age < 30){
    asdf
} else {
    qwer
}
```

## 반복문

기본적으로 for을 사용하고,
해당 조건을 만족할 때 까지 작성한 코드를 반복한다.

```
for (let i = 0; i < 6, i++) {
    console.log(i)
}

1
2
3
4
5
```
