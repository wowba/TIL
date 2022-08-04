/*
 인터페이스는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용한다.
 인터페이스는 프로퍼티와 메소드를 가질 수 있는 점에서 클래스와 유사하나
 직접 인스턴스를 생성할 수 없고, 모든 메서드는 추상 메서드이다.
 
 단 추상 클래스의 추상 메서드와 달리 abstract 키워드를 사용하지 않는다.
*/

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 변수 todo의 타입으로 Todo 인터페이스를 선언하였다.
let todo: Todo;

// 변수 todo는 Todo 인터페이스를 준수해야 한다.
todo = { id: 1, content: "typescript", completed: false };

// ----------------------------------------------------------------------

let todos: Todo[] = [];

// 파라미터 todo의 타입으로 Todo 인터페이스 선언
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

// 파라미터 todo는 Todo 인터페이스를 준수해야 한다.
const newTodo: Todo = { id: 1, content: `typescript`, completed: false };
addTodo(newTodo);
console.log(todos);

// 인터페이스는 함수의 타입으로 사용할 수 있다.
// 이때 함수의 인터페이스에는 타입이 선언된 파라미터 리스트와 리턴 타입을 정의한다.

// 함수 인터페이스 정의
interface SquareFunc {
  (num: number): number;
}

// 함수 인터페이스를 구현하는 함수는 인터페이스를 준수해야 함.
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
}

console.log(squareFunc(10));