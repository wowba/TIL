## 목차

1. [HTML5란?](#html5란)
2. [HTML5 기본 문법](#html5-기본-문법)
3. [Semantic Web](#semantic-web)
4. [HTML 기본 태그](#html-구성-기본-태그)
5. [Hyperlink](#html의-핵심-개념-hyperlink)
6. [Form 태그](#커뮤니케이션을-위한-폼-태그)

# HTML5란?

HTML은 웹페이지를 기술하기 위한 마크업 언어.  
웹 페이지의 내용과 구조를 담당하는 언어로써 HTML 태그를 통해 정보를 구조화 하는것.

## Hello HTML5

- HTML5 문서는 반드시 \<!DOCTYPE html> 로 시작하여 문서 형식을 HTML5로 지정.
- 실제적인 HTML document는 2행부터 시작, \<html> 과 \<html> 사이에 기술한다.
- \<head> 에는 title, 외부 파일 참조, 메타데이터 설정 등이 위치.
- \<body> 에는 브라우저에 출력되는 모든 요소 위치

# HTML5 기본 문법

## 요소

HTML 요소는 시작 태그와 종료 태그 그리고 태그 사이에 위치한 content 로 구성.  
태그는 대소문자를 구분하지 않으나, 소문자를 사용하는것이 일반적.

## 요소의 중첩

요소는 다른 요소를 포함할 수 있으며, 이때 부자관계 성립. 이러한 관계로 정보를 구조화한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>안녕하세요</h1>
    <p>반갑습니다!</p>
  </body>
</html>
```

## 빈 요소

content를 가질 수 없는 요소를 빈 요소라고 한다. 빈 요소는 content 가 없으며  
attribute만 가질 수 있다.

```html
<meeta charset="utf-8"></meeta>
```

br hr img input link meta 등등이 있다.

## Attribute

어트리뷰트는 요소의 성질이며 이를 이용해 요소에 추가적인 정보를 제공할 수 있다.

## Global Attribute

글로벌 어트리뷰트는 모든 HTML 요소가 공통으로 사용할 수 있는 어트리뷰트다. 대체로 모든 요소에 적용 가능하다.  
id class hidden lang style title 등이 있다.

# Semantic Web

검색 사이트에서 사용하는 검색 엔진은 로봇(Robot)이라는 프로그램을 이용해 정보를 수집하는데,  
이 로봇은 웹사이트의 HTML 코드만으로 그 의미를 인지하며, 이때 시맨틱 요소를 해석하게 된다.

```html
<font size="6"><b>Hello</b></font>
<h1>Hello</h1>
```

2행의 경우에는 제목이라는 의미를 가진 태그이지만,  
1행의 경우에는 단순히 폰트 크기가 적용되어 있을 뿐, 아무런 의미도 없다.

2행은 header(제목)중 가장 상위 레벨이라는 의미를 내포하고 있어 개발자가 의도한 요소의 의미가 명확히 드러난다.  
이는 코드의 가독성을 높이고 유지보수를 쉽게 한다.

검색엔진은 대체로 h1 요소 내의 콘텐츠를 웹문서의 중요한 제목으로 인식하고 포함할 확률이 높다.  
시맨틱 요소로 구성된 웹 페이지는 의미론적으로 정보를 전달하며 콘텐츠의 의미를 명확히 설명하는 역할을 한다.

시멘틱 웹이란, 웹에 존재하는 수많은 웹페이지에 메타데이터를 부여하며, 기존의 잡다한 데이터 집합이였던 웹을  
의미와 관련성을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.

즉, HTML 요소는 semantic, non-semantic 요소로 구분된다.  
HTML5는 다음과 같은 시맨틱 태그가 추가되었다.

| tag     | Description                      |
| ------- | -------------------------------- |
| header  | 헤더                             |
| nav     | 네비게이션                       |
| asdie   | 사이드에 위치하는 공간           |
| section | 본문의 여러 내용을 포함하는 공간 |
| article | 본문의 주 내용이 들어가는 공간   |
| footer  | 푸터를 의미                      |

# HTML 구성 기본 태그

## 문서 형식 정의 tag

문서 형식 정의 태그는 출력할 웹 페이지의 양식을 정의한다.

```
HTML5
<!DOCTYPE html>
```

## html tag

html 태그는 모든 HTML 요소의 부모 요소이며 웹페이지에 단 하나만 존재.  
즉 모든 요소는 html 요소의 자식 요소이며 html 요소 내부에 기술해야 한다.  
단 \<!DOCTYPE>은 예외로 처리한다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>문서 제목</title>
  </head>
  <body>
    화면에 표시할 모든 콘텐츠는 이곳에 기술한다.
  </body>
</html>
```

## head tag

head 요소는 메타데이터를 포함하기 위한 요소이며 웹 페이지에 단 하나만 존재한다.  
메타데이터는 HTMl 문서의 title, style, link, script에 대한 데이터로 화면에 표시되지 않는다.

### title tag

title 요소는 문서의 제목을 정의한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>문서 제목</title>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

### style tag

style 요소에는 HTML 문서를 위한 style 정보를 정의한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>문서 제목</title>
    <style>
      body {
        background-color: yellow;
        color: blue;
      }
    </style>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

### link tag

link 요소에는 외부 리소스와의 연계 정보를 정의한다. 주로 HTML과 외부 CSS 파일 연계에 사용된다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>문서 제목</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    Hello World!
  </body>
</html>
```

### script tag

script 요소에는 client-side-JavaScript를 정의한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script>
      document.addEventListener("click", function () {
        alert("Clicked!");
      });
    </script>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

src attribute를 사용하면 외부 JS 파일을 로드할 수 있다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="main.js"></script>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

### meta tag

meta 요소는 description, keywords, author, 기타 메타데이터의 정의에 사용된다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript" />
    // 검색엔진이 사용할 keywords
    <meta name="description" content="Web tutorials on HTML and CSS" />
    // 웹페이지 설명
    <meta name="author" content="John Doe" />
    // 저자
    <meta http-equiv="refresh" content="30" />
    // 30초마다 리프레쉬
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

# HTML의 핵심 개념, Hyperlink

HyperText의 Hyper는 컴퓨터 용어로서 텍스트 등의 정보가 동일 선상에 있는 것이 아니라  
다중으로 연결되어 있는 상태를 의미한다.

이것은 HTML의 가장 중요한 특징인 link의 개념과 연결되는데, 기존 문서나 텍스트의 선형성, 고정성의 제약에서 벗어나  
사용자가 원하는 순서대로 원하는 정보를 취득할 수 있는 기능을 제공한다.

한 텍스트에서 다른 텍스트로 건너뛰어 읽을수 있는 이 기능을 하이퍼링크 라고 한다.  
HTML link는 hyperlink를 의미하며 a tag가 그 기능을 담당한다.

## href 어트리뷰트

href 어트리뷰트는 이동하고자 하는 파일의 위치를 값으로 받는다. 경로는 파일 시스템 상에서 특정 파일의 위치를 의미한다.

## 디렉터리(Directory)

디렉터리는 파일과 다른 디렉터리를 갖는 파일 시스템 내의 존재물로 폴더로고도 불린다.

```
루트 디렉터리
파일 시스템 계층 구조 상의 최상위 디렉터리이다.
Unix: /
Windows: C:\

홈 디렉터리
시스템의 사용자에게 각각 할당된 개별 디렉터리이다.
Unix: /Users/{계정 명}
Windows: C:\Users\{계정 명}

작업 디렉터리
작업 중인 파일이 위치한 디렉터리
./

부모 디렉터리
작업 디렉터리의 부모 디렉터리
../
```

## 절대경로와 상대경로

파일 경로는 파일 시스템에서 파일의 위치를 나타내는 방법. 경로에는 절대경로와 상대경로 존재.

```
절대경로(Absolute path)
현재 작업 디렉터리와 관계없이 특정 파일의 절대적인 위치를 가르킴. 루트 디렉터리를 기준으로 파일의 위치를 나타낸다.

상대경로(Relative path)
현재 작업 디렉터리를 기준으로 특정 파일의 상대적인 위치를 가르킨다.
```

```html
<!DOCTYPE html>
<html>
  <body>
    <a href="http://www.google.com">URL</a><br />
    // 절대 URL <a href="html/my.html">Local file</a><br />
    // 상대 URL <a href="#">fragment identifier</a><br />
    // 페이지 내 요소에 링크
    <a href="javascript:alert('Hello');">Javascript</a> // script
  </body>
</html>
```

## target 어트리뷰트

target 어트리뷰트는 링크를 클릭했을 때 윈도우를 어떻게 오픈할 지를 지정한다.
|Value|Description|
|----|-----|
|\_self|링크를 클릭했을 때 연결문서를 현재 윈도우에서 오픈|
|\_blank|링크를 클릭했을 때 연결문서를 새로운 윈도우나 탭에서 오픈|

```html
<!DOCTYPE html>
<html>
  <body>
    <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"
      >Visit google.com!</a
    >
  </body>
</html>
```

# 커뮤니케이션을 위한 폼 태그

form 태그는 사용자가 입력한 데이터를 수집하기 위해 사용되며,  
input, textarea, button, select, checkbox, radio button, submit button 등의 입력 양식 태그를 포함할 수 있다.

```
<form>
form elements (input, checkbox, radio button, submit button ...)
</form>
```

| attribute | Value    | Description                               |
| --------- | -------- | ----------------------------------------- |
| action    | URL      | 입력 데이터(form data) 가 전송될 URL 지정 |
| method    | get/post | 입력 데이터(form data) 전달 방식 지정     |

GET과 POST는 HTTP 프로토콜을 이용, 사용자 입력 데이터를 서버에 전달하는 방식을 나타내며 HTTP request method 라고 함.

```
GET
- GET 방식은 전송 URL에 입력 데이터를 쿼리스트링으로 보내는 방식
- 전송 URL 뒤에 `?` 를 통해 데이터의 시작을 알리고, key-value 형태의 데이터를 추가한다.
- URL에 전송 데이터가 모두 노출되기 때문에 보안 문제 존재, 전송할 수 있는 데이터의 한계 있음 (최대 255자)
- REST API에서 GET 메소드는 리소스의 조회를 요청.

POST
- POST 방식은 Request Body에 담아 보내는 방식
- URL에 전송 데이터가 모두 노출되지 않지만 GET에 비해 속도가 느림.
- REST API에서 POST는 특정 리소스의 생성을 요청함.
```

```html
<!DOCTYPE html>
<html>
  <body>
    <form action="http://jsonplaceholder.typicode.com/users" method="get">
      ID: <input type="text" name="id" value="1" /><br />
      username: <input type="text" name="username" value="Bret" /><br />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

## input

input 태그는 form 태그중 사용자의 입력을 받는 가장 중요한 태그이다.  
다양한 종류가 있으며 type attribute에 의해 구분된다. form 태그 내에 존재해야 입력 데이터를 전송할 수 있으나,  
ajax를 사용할 경우에는 태그 내에 존재하지 않아도 된다.

## select

복수개의 리스트에서 복수개의 아이템을 선택할 때 사용한다.

## textarea

여러 줄의 글자를 입력할 때 사용한다.

## button

클릭할 수 있는 버튼을 생성한다. \<input type = "button">과 유사하지만  
input 태그는 빈 태그인 반면 button 태그는 텍스트 혹은 콘텐츠를 사용할 수 있다.  
type 어트리뷰트는 반드시 지정하는것이 바람직하며 어트리뷰트 값으로 button, reset, submit을 지정할 수 있다.

```html
<!DOCTYPE html>
<html>
  <body>
    <button type="button" onclick="alert('Hello World!')">Click Me!</button>

    <input type="button" value="Click Me!" onclick="alert('Hello world!')" />
  </body>
</html>
```

## fieldset / legend

fieldset 태그는 관련된 입력 양식들을 그룹화할때 사용하며  
legend 태그는 fieldset 태그 내에서 사용됨과 동시에 그룹화된 fieldset의 제목을 정의한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <fieldset>
      <legend>Login</legend>
      Username <input type="text" name="username" /> Password
      <input type="text" name="password" />
    </fieldset>
  </body>
</html>
```
