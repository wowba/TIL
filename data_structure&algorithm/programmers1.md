## 1강: 안녕, 자료구조 & 알고리즘!

알고리즘 이란?
어떤 문제를 해결하기 위한 절차, 방법, 명령어들의 집합

프로그램밍 이란?
주어진 문제의 해결을 위한 자료구조와 연산 방법에 대한 선택

결국 해결하고자 하는 문제에 따라 최적의 해법은 서로 다름!
--> 이 선택을 어떻게 해야 하느냐를 알기 위해 자료구조를 이해해야함.

## 7강: 연결 리스트 (1)

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

연결리스트와 배열의 비교

1. 저장공간 / 배열 - 연속한 위치`(O(1))`, 연결리스트 - 임의의 위치`(O(n))`(링크 이용, 메모리 상에서 임의의 위치)

2. 특정 원소 지칭 / 배열 - 매우 간편`(O(1))`, 연결리스트 - 선형탐색과 유사`(O(n))`

## 8강 연결 리스트 (2)

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

연결리스트 원소 삽입의 복잡도

1. 맨 앞에 삽입하는 경우 - O(1)
2. 중간에 삽입하는 경우 - O(n)
3. 맨 끝에 삽입하는 경우 - O(1)

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
