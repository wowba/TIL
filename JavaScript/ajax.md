## AJAX란?

ajax는 쉽게 얘기하면, 새로고침없이 서버에게 GET 요청을 할 수 있는 자바스크립트 코드를 말한다.

`p.s ajax는 jQuery를 임포트한 페이지에서만 동작한다.`

jQuery를 임포트한 브라우저의 콘솔에서

```
$.ajax({
  type: "GET",
  url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
  data: {},
  success: function(response){
    let rows = response[`RealtimeCityAir`][`row`]
    for( let i = 0; i < rows.length; i++ ){
        let gu_name = rows[i]["MSRTE_NM"]
        let gu_mise = rows[i]["IDEX_MVL"]
        if (gu_mise < 70){
            console.log(gu_name, gu_mise)
        }
     }
  }
})
```

다음과 같이 입력하면 해당 url(서울시 미세먼지 정보)에서 정보를 가져와
콘솔창에 출력할 수 있다.
