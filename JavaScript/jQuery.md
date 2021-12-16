## jQuery 란?

jQuery는 과거, 브라우저마다 호환성이 달라 코드를 다르게 써야 하는 문제점이 있었다.

그때 몇 사람은 각 브라우저에 호환될 수 있는 라이브러리를 만든것.

기존의 자바스크립트는 길게 써야하지만, jQuery는 그걸 짧게 만든것!

즉, jQuery는 미리 작성된 자바스크립트 코드이고, 이를 사용하려면 아래 코드를 hmtl 파일에 작성(import)해야 한다.

```
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
```

`p.s jQuery 는 class 값이 아닌 id값을 줘야 인지한다`

예제

```
ex)
$("#idName").show()
$("#idName").css("display")
$("#idName").text("abc")
$("#idName").empty()
```
