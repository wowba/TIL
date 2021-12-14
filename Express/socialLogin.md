## Authorizing Flow

다른 웹사이트에서의 정보를 가져와 로그인을 활성화 하려면 보통 다음의 흐름과 같다. 깃헙의 경우, 조금 특이하긴 하지만 OAuth를 쓰는 점에서 다른 SNS와 유사하다.
`ex) Github`

1. 사용자는 깃헙 유저 정보를 제출하고, 정보 공유에 승인한다.
2. 깃헙은 유저에게 token 을 주고 원래 사이트로 redirect 한다.
3. 사이트는 그 token으로 사용자의 정보를 볼 수 있다.

## Github Application

[Github OAuth 순서](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)

깃헙의 경우 우선 [Github Application](https://github.com/settings/apps)이 필요하다.

우선 새로운 OAuth Application을 만들어 준다.

그 다음 해당 주소로 가는 링크를 만들고 주소 뒤에 client_id를 넣어준다.

하지만 이렇게만 하면 public 데이터밖에 못 가져오는데, 더 많은걸 가져오고 싶은 경우 [scope](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps)를 활용할 수 있다.

p.s [fetch](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers)
