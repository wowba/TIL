## Rest api 생성 규칙

0. REST API 는 웹 통신 규약 http에 기반한다.

1. URL 에선 동사를 사용하지 않는다

2. GET 은 읽을때, POST는 생성할 때, PUT은 전체 업데이트, PATCH는 부분 업데이트, DELETE는 삭제할 때 사용한다.

3. URL에 collections과 element만을 활용한다. ex) /movies, /movies/inception (id값에 주로 element를 사용.)

4. URL에 조건을 넣을 경우 query parameter 적극적으로 사용하기
   ex) /movies?min_rating=9.8, /movies?release_date=2021
