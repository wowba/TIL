## 목차

1. [Ajax](#ajax)
2. [JSON](#json)

# Ajax

브라우저와 서버간 통신 이후, 서버는 요청받은 페이지를 반환한다. HTML CSS JS 등을 반환받으며  
서버로부터 웹 페이지가 반환되면 브라우저는 이를 렌더링하여 화면에 표시한다.

Ajax는 자바스크립트를 이용해 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 의미한다.  
서버로부터 웹 페이지가 반환되면 화면 전체를 갱신해야 하는데, 페이지 일부만 갱신하고 동일한 효과를 보는것이 Ajax이다.  
페이지 전체를 로드하지 않고 갱신이 필요한 일부만 로드하여 빠른 퍼포먼스와 부드러운 화면 표시를 기대할 수 있다.

# JSON

JSON은 클라이언트와 서버간 데이터 교환을 위한 규칙, 즉 포맷을 말한다.  
JSON은 일반 텍스트 포맷보다 효과적인 데이터 구조화가 가능하며, XML 보다 가볍고 사용하기 간편하며 가독성도 좋다.

```json
{
  "name": "Lee",
  "gender": "male",
  "age": 20,
  "alive": true
}
```

## JSON.stringfy

JSON.stringfy 메소드는 객체를 JSON 형식의 문자열로 반환한다.

```javascript
const o = { name: "Lee", gender: "male", age: 20 };

// 객체 => JSON 형식의 문자열
const strObject = JSON.stringify(o);
console.log(typeof strObject, strObject);
// string {"name":"Lee","gender":"male","age":20}

// 객체 => JSON 형식의 문자열 + prettify
const strPrettyObject = JSON.stringify(o, null, 2);
console.log(typeof strPrettyObject, strPrettyObject);
/*
string {
  "name": "Lee",
  "gender": "male",
  "age": 20
}
*/

// replacer
// 값의 타입이 Number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
  // undefined: 반환하지 않음
  return typeof value === "number" ? undefined : value;
}

// 객체 => JSON 형식의 문자열 + replacer + prettify
const strFilteredObject = JSON.stringify(o, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
/*
string {
  "name": "Lee",
  "gender": "male"
}
*/

const arr = [1, 5, "false"];

// 배열 객체 => 문자열
const strArray = JSON.stringify(arr);
console.log(typeof strArray, strArray); // string [1,5,"false"]

// replacer
// 모든 값을 대문자로 변환된 문자열을 반환한다
function replaceToUpper(key, value) {
  return value.toString().toUpperCase();
}

// 배열 객체 => 문자열 + replacer
const strFilteredArray = JSON.stringify(arr, replaceToUpper);
console.log(typeof strFilteredArray, strFilteredArray); // string "1,5,FALSE"
```

## JSON.parse

JSON.parse 메소드는 JSON 데이터를 가진 문자열을 객체로 변환한다.

```
서버로부터 브라우저로 전송된 JSON 데이터는 문자열이다.
이 문자열을 객체로서 사용하려면 객체화하여야 하는데 이를 역직렬화(Deserializing)이라 한다.
역직렬화를 위해서 내장 객체 JSON의 static 메소드인 JSON.parse를 사용한다.
```

```javascript
const o = { name: "Lee", gender: "male", age: 20 };

// 객체 => JSON 형식의 문자열
const strObject = JSON.stringify(o);
console.log(typeof strObject, strObject);
// string {"name":"Lee","gender":"male","age":20}

const arr = [1, 5, "false"];

// 배열 객체 => 문자열
const strArray = JSON.stringify(arr);
console.log(typeof strArray, strArray); // string [1,5,"false"]

// JSON 형식의 문자열 => 객체
const obj = JSON.parse(strObject);
console.log(typeof obj, obj); // object { name: 'Lee', gender: 'male' }

// 문자열 => 배열 객체
const objArray = JSON.parse(strArray);
console.log(typeof objArray, objArray); // object [1, 5, "false"]
```

배열이 JSON 형식의 문자열로 변환되어 있는 경우, JSON.parse는 문자열을 배열 객체로 변환한다.  
배열의 요소가 객체인 경우 배열의 요소까지 객체로 변환한다.

```javascript
const todos = [
  { id: 1, content: "HTML", completed: true },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "JavaScript", completed: false },
];

// 배열 => JSON 형식의 문자열
const str = JSON.stringify(todos);
console.log(typeof str, str);

// JSON 형식의 문자열 => 배열
const parsed = JSON.parse(str);
console.log(typeof parsed, parsed);
```
