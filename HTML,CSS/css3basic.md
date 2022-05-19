## 목차

1. [CSS란?](#css란)

# CSS란?

CSS는 HTML이나 XML과 같은 구조화 된 문서를 화면에 어떻게 렌더링할 것인지를 정의하기 위한 언어이다.  
즉 CSS는 HTML의 각 요소의 style을 정의하여 화면에 어떻게 렌더링하면 되는지 브라우저에게 설명하기 위한 언어이다.

HTML5에서 HTML은 정보와 구조화, CSS는 styling의 정의라는 명확한 구분이 이루어졌다.

## 셀렉터

CSS는 HTML 요소의 style을 정의하는데 사용된다. 이를 위해 스타일을 적용하고자 하는 HTML 요소를 선택한다.  
셀렉터는 스타일을 적용하고자 하는 HTML 요소를 선택하기 위해 CSS에서 제공하는 수단이다.

```
h1 { color: red; font-size: 12px;}

셀렉터 선언블록{선언(프로퍼티: 값;)}
```

## 프로퍼티

셀렉터로 HTML 요소를 선택하고 {} 내에 프로퍼티(속성)와 값을 지정하는 것으로 다양한 style을 정의할 수 있다.  
프로퍼티는 표준 스펙으로 이미 지정되어 있는 것을 사용하여야 하며 사용자가 임의로 정의할 수 없다.  
여러개의 프로퍼티를 연속해서 지정할 수 있으며, 세미콜론(;)으로 구분한다.

```
h1 {
    color: ~~~;
    font-size: ~~~;
}
```

## 값

셀렉터로 지정한 HTML 요소에 style을 적용하기 위해 프로퍼티를 사용했다.  
프로퍼티의 값은 해당 프로퍼티에 사용할 수 있는 값을 '키워드'나 '크기 단위' 등등의 특정 단위로 지정하여야 한다.

## HTML과 CSS의 연동

HTML은 CSS를 포함할 수 있다. CSS를 가지고 있지 않은 HTML은 브라우저에서 기본으로 적용하는 CSS에 의해 렌더링된다.

## Link Style

HTML 외부에 있는 CSS 파일을 로드하는 방식. 가장 일반적으로 사용한다.

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

## Embedding Style

HTML 내부에 CSS를 포함하는 방법. 간단한 웹페이지의 경우 문제될것이 없지만  
서로 다른 역할을 하므로 다른 파일로 구분하여 관리하는것이 바람직하다.

```
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 { color: red; }
      p  { background: aqua; }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

## Inline Style

HTML 요소의 style 프로퍼티에 CSS를 기술하는 방식이다. JavaScript가 동적으로 CSS를 생성할 때 사용하는 경우가 있지만,  
일반적으로 Link Style을 사용한다.

## Reset CSS

모든 웹 브라우저는 지원하는 내장 CSS가 달라 기본적인 HTML 요소의 CSS를 초기화 하여 브라우저별로 제각각인  
디폴트 스타일을 하나의 스타일로 통합시켜주는 역할을 한다.
