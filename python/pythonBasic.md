# 파이썬 기본 문법

## 변수

```
a = 2
b = 3

a + b = 5

first = "a"
second = "b"

first + second = "ab"
```

변수 선언이 있는 자바스크립트에 비해 굉장히 직관적이다.
문자열과 숫자를 합칠 수 없는건 동일하다.

## 리스트, 딕셔너리

```
list = ["a","b","c"]
list.append("d")
list = ["a","b","c","d"]

dict = {"name" : "lee", "age" : 27}
dict["name"] = "lee"
```

자바스크립트와 거의 동일하다.

## 함수

```
def functionName(num1,num2) :
    return num1 + num2

sum = functionName(3,4)

print(sum)
7
```

function이 아닌, def로 함수선언을 한다. 또한 중괄호를 쓰지 않는다.

## 조건문

```
if age > 20:
    print("성인입니다")
else:
    print("미성년입니다")
```

단순하다.

## 반복문

```
fruits = ['사과','배','배','감','수박','귤','딸기','사과','배','수박']

for fruit in fruits:
    print (fruit)
```

fruits 에는 리스트, fruit 자리에는 아무거나 올 수 있다(함수의 인자를 임의로 넣는 것)
즉, 리스트의 내용물을 하나씩 빼서 쓰는것.

```
people = [{'name': 'bob', 'age': 20},
          {'name': 'carry', 'age': 38},
          {'name': 'john', 'age': 7},
          {'name': 'smith', 'age': 17},
          {'name': 'ben', 'age': 27}]

for person in people:
    print(person["name"],person["age"])

```

리스트 안에 딕셔너리가 오는 경우에도 자바스크립트처럼 쓸 수 있다.

## 가상환경

프로젝트마다 사용하는 라이브러리가 다를때, 일일이 그때마다 바꿔줄 필요 없이

각 프로젝마다 가상환경(virtual envirment)을 만들어준다.

가상환경은

```
같은 시스템에서 실행되는 다른 파이썬 응용 프로그램들의 동작에 영향을 주지 않기 위해

파이썬 배포 패키지들을 설치하거나 업그레이드 하는 것을 가능하게 하는

격리된 실행 환경 이다.
```

보통 venv 폴더 안에 라이브러리를 담는다.
