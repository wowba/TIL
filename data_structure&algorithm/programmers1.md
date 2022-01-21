## 1강: 안녕, 자료구조 & 알고리즘!

알고리즘 이란?
어떤 문제를 해결하기 위한 절차, 방법, 명령어들의 집합

프로그램밍 이란?
주어진 문제의 해결을 위한 자료구조와 연산 방법에 대한 선택

결국 해결하고자 하는 문제에 따라 최적의 해법은 서로 다름!
--> 이 선택을 어떻게 해야 하느냐를 알기 위해 자료구조를 이해해야함.

## 2강: 선형 배열

파이썬은 배열을 구현하는데 리스트를 활용할 수 있다!

파이썬의 리스트는 다른 언어의 배열보다 좀 더 융통성있는 구조를 가진다.

배열은 원소들을 순서대로 늘어놓은 것이다. 각각의 원소는 0부터 시작하는 index를 가진다.

특히, 파이썬의 리스트는 인덱스에 음수를 부여하면 뒤에서부터 시작한다.

## 3강: 배열의 정렬 / 탐색

리스트 정렬 함수
sorted() - 내장함수 이며 정렬된 새로운 리스트 반환함.
sort() - 리스트의 method. 해당 리스트를 정렬하며 반환값은 없음.

길이 순서대로 정렬

```
L = ['abcd','xyz','spam']
sorted(L, key=lambda x: len(x))
L = ['xyz', 'abcd', 'spam']
```

키를 지정해서 정렬하기

```
L = [{'name':'John','score':83},{'name':'Paul','score':92}]
L.sort(key=lambda x: x['score'], reverse=True) -> 점수 순으로 정렬
L.sort(key=lambda x: x['name']) -> 이름 순으로 정렬
```

탐색 알고리즘 - 선형 탐색 / 이진 탐색
선형 탐색은 모든 원소 하나하나 확인해간다.
최악의 경우는 모든 원소를 확인할 때. `O(n)`

이진 탐색은 탐색하려는 리스트가 이미 정렬되어 있는 경우에만 적용이 가능하다.
크기 순으로 정렬되어있다는 특성을 이용하기 때문이다!
이는 리스트를 계속 반으로 나눠가면서 일부 내용들을 제외하면서 진행한다. `O(log n)`

```
def solution(L, x):
    lower = 0
    upper = len(L) - 1
    while lower <= upper:
        middle = (lower + upper) // 2
        if L[middle] > x:
            upper = middle
        elif L[middle] < x:
            lower = middle
        else:
            return middle
        if lower + 1 == upper:
            if L[lower + 1] == x:
                return lower + 1
            elif L[lower] == x:
                return lower
            else:
                return -1
    return -1
```

## 4강 재귀 알고리즘 - 기초 (Recursive Algorithms)

재귀함수는 하나의 함수에서 자신을 다시 호출하여 작업을 수행하는 것.

재귀 함수를 호출할 때는 종결 조건이 매우 중요하다.

피보나치 수열 반복문 구현

```
def solution(x):
    if x == 0:
        return 0
    if x == 1:
        return 1
    fibo = [0,1]
    if x >= 2:
        for i in range(x + 1):
            fibo.append(fibo[i]+fibo[i+1])
    return fibo[x]
```

피보나치 순열 재귀 구현

```
def solution(x):
    if x == 0:
        return 0
    if x == 1:
        return 1
    fibo = [0,1]
    if x >= 2:
        return solution(x-1) + solution(x-2)
```

## 5강 재귀 알고리즘 응용

조합의 수 계산

```
from math import factorial as f

def combi(n,m):
    return f(n) / (f(m) * f(n-m))
```

조합의 수 계산 - 재귀적인 방법

```
def combi(n,m)
    if n == m:
        return 1
    elif m == 0:
        return 1
    else:
        return combi(n-1, m) + combi(n-1, m-1)

--> 효율이 떨어지는 방법!
```

## 6강: 알고리즘의 복잡도

시간 복잡도 = 문제의 크기와 이를 해결하는 데 걸리는 시간 사이의 관계

공간 복잡도 = 문제의 크기와 이를 해결하는 데 필요한 메모리 공간 사이의 관계

1. 선형 시간 알고리즘 - 모든 원소를 일일히 다 확인함. O(n)
2. 로그 시간 알고리즘 - 이진 탐색 등. O(log n)
3. 이차 시간 알고리즘 - 삽입 정렬 등. O(n²)
   정렬 문제에 대해 병합 정렬과 같이 O(n log n)보다
   낮은 복잡도를 가진 알고리즘은 존재할 수 없음이 증명되어 있다.

## 7강: 단일 연결 리스트 (1)

추상적 자료구조 (Abstract Data Structure)는
자료구조의 내부 구현은 숨겨두고 밖에서 보이는 것 2가지를 제공하는 것들을 말한다.
하나는 Data( 정수 문자열 레코드 등...),
다른 하나는 A set of operations(삽입 삭제 순회 정렬 탐색 등..) 이다.

기본적인 연결 리스트는 앞의 데이터가 뒤의 데이터를 가리키는걸 말한다.
각각의 데이터가 담겨있는걸 `Node` 라고 하고, 이 노드는 `Data`와
다음 노드가 무엇인지 말하는 Link를 저장한다.

Node 내의 데이터는 문자열, 레코드, 또 다른 연결 리스트를 포함할 수 있다.
연결 리스트에서 기본적으로 알아야 할건 `Head`, 리스트의 맨 앞을 알아야 한다.
또한 맨 끝 노드는 `Tail` 이라고 부른다. 리스트의 끝을 알면 새로운 노드를
바로 넣을 수 있기 때문에 유리하고, 이 연결 리스트 안에 노드가 몇개 있는지
정보를 적어 넣는것도 중요하다.

노드에 Data와 연산을 넣으러면 파이썬의 class를 이용한다.

`생성자 노드`

```
class node:
    def __init__(self, item):
        self.data = item -> 정보
        self.next = None -> 다음 노드 링크
```

`링크드 리스트`

```
class linked_list
    def __init__(self):
        self.node_count = 0 -> 노드 수 count
        self.head = None -> 헤드 이동
        self.tail = None -> 테일 이동
```

`특정 원소 참조 연산`

```
def get_at(self, pos):
    if pos <=0 or pos > self.node_count:
        return None  ->  에러 제거!
    i = 1
    current = self.head -> 연결리스트 첫번째 노드
    while i < pos:
        current = current.next
        i += 1
    return current
```

`연결 리스트 순회`

```
def traverse(self):
    result = []
    temp = self.head
    while temp != None:
        result.append(temp.data)
        temp = temp.next

    return result
```

단일 연결리스트와 배열의 비교

1. 저장공간 / 배열 - 연속한 위치`(O(1))`, 연결리스트 - 임의의 위치`(O(n))`(링크 이용, 메모리 상에서 임의의 위치)

2. 특정 원소 지칭 / 배열 - 매우 간편`(O(1))`, 연결리스트 - 선형탐색과 유사`(O(n))`

## 8강 단일 연결 리스트 (2)

`연결 리스트 연산 - 원소의 삽입`

```
def insertAt(self, pos, newNode):
    if pos < 1 or pos > self.nodeCount + 1:
        return False

    if pos == 1: -> 멘 앞에 삽입할 경우
        newNode.next = self.head
        self.head = newNode

    else:
        if pos == self.nodeCount + 1:
            prev = self.tail
        else: -> 맨 뒤에 삽입할 경우 추가
            prev = self.getAt(pos - 1)
        newNode.next = prev.next
        prev.next = newNode

    if pos == self.nodeCount + 1: -> 맨 뒤에 삽입할 경우 추가
        self.tail = newNode

    self.nodeCount += 1 -> 추가했으므로 노드카운트 증가
    return True
```

단일 연결리스트 원소 삽입의 복잡도

1. 맨 앞에 삽입하는 경우 - `O(1)`
2. 중간에 삽입하는 경우 - `O(n)`
3. 맨 끝에 삽입하는 경우 - `O(n)`

추후 배울 이중 연결리스트는 위의 단점을 없앴다!

`연결 리스트 연산 - 원소의 삭제`

prev.next를 curr.next로 바꾼 뒤
node_count -= 1 을 하면 되지만 경우의 수를 확인해야 한다.
만약 삭제하려는 node가 맨 앞의 것일 때
prev가 없고 head를 새로 조정해야 한다.

`연결 리스트 연산 - 두 리스트의 연결`

```
    def concat(self, L):
        self.tail.next = L.head -> 추가하는 리스트의 head 설정
        if L.tail:
            self.tail = L.tail -> 만약 tail이 빈 리스트일 경우를 제외,
                                  유효하면 끝으로 self.tail 설정하기.
        self.nodeCount += L.nodeCount -> 추가하는 리스트의 노드카운트 더하기
```

## 11강 스택

스택은 자료를 보관할 수 있는 선형 구조.
단, 넣을 때에는 한 쪽 끝에서 밀어넣어야 하고 -> 푸시(push) 연산
꺼낼 때에는 같은 쪽에서 뽑아 꺼내야 하는 제약이 있음. -> 팝(pop) 연산

즉 후입선출 특징을 가지는 선형 자료구조이다.

스택은 초기에 비어있는 스택으로 존재한다.

`스택에서 발생하는 오류`

1. 비어 있는 스택에서 데이터 원소를 꺼내려 할 때(스택 언더플로우)
2. 꽉 찬 스택에 데이터 원소를 넣으려 할 때(스택 오버플로우)

`스택의 추상적 자료구조 구현`

1. 배열을 이용하여 구현
   파이썬 리스트와 메서드를 이용
2. 연결리스트를 이용하여 구현
   양방향 연결 리스트를 이용

`스택 연산의 정의`
size() - 현재 스택에 들어 있는 데이터 원소의 수를 구함
isEmpty() - 현재 스택이 비어 있는지를 판단
push(x) - 데이터 원소 x를 스택에 추가
pop() - 스택 맨 위에 저장된 데이터 원소를 제거(또한 반환)
peak() - 스택 맨 위에 저장된 데이터 원소를 반환(제거하지 않음)

`배열로 구현한 스택`

```
class ArrayStack:

	def __init__(self):
		self.data = []  ->  빈 스택을 초기화

	def size(self):
		return len(self.data)  ->  데이터의 개수

	def isEmpty(self):
		return self.size() == 0  -> 스택이 비어 있는지 판단

	def push(self, item):
		self.data.append(item)  ->  데이터 원소를 추가

	def pop(self):
		return self.data.pop()  ->  데이터 원소를 삭제(동시에 리턴)

	def peek(self):
		return self.data[-1]  -> 스택의 꼭대기 원소 반환
```

`양방향 연결 리스트로 구현한 스택`

```
from doublylinkedlist import Node
from doublylinkedlist import DoublyLinkedList

class LinkedListStack:

	def __init__(self):
		self.data = DoublyLinkedList()  ->  비어있는 양방향 리스트

	def size(self):
		return self.data.getLength()  ->  데이터의 개수

	def isEmpty(self):
		return self.size() == 0  ->  스택이 비어 있는지 판단

	def push(self, item):
		node = Node(item)  ->  노드를 만든 뒤
		self.data.insertAt(self.size() + 1, node)  ->  만들어진 노드를 안에 넣음

	def pop(self):
		return self.data.popAt(self.size())  ->  데이터 원소 삭제(및 리턴)

	def peek(self):
		return self.data.getAt(self.size()).data  ->  맨 마지막 의 데이터만 리턴
```
