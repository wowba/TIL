## OAuth 2.0

OAuth를 통해 정보를 가져오려는 서비스로 부터 accessToken을 부여받는다.

accessToken은 과거와 같이 id,pw 등을 담는것이 아니고, 또한 내 서비스가 필요한 정보만 골라서 가져올 수 있어

보안에 있어서 훨씬 뛰어나다.

OAuth를 통해 회원들이 정보를 처음부터 가지고 있지 않더라도, 이들을 식별할 수 있는 기능을 구현할 수 있다.

## Role

OAuth에는 3개의 주체가 등장한다.

`Client`, `Resource Owner`, `Resource Server`

우리의 서비스를 사용하려는 사람은 Resource Owner.

Resource Owner가 이미 회원가입이 되어있는 서비스는 Resource Server.

Resource Server 에서 정보를 가져오는 내 서비스는 Client이다.

## Register

client가 Resource Server의 승인을 먼저 받아놓야 후에 Resource Owner의 정보를 가져올 수 있다. 이 과정을 Register 라고 한다.

이 과정은 서비스마다 다 다르지만, 공통적으로

`Client ID`, `Client Secret`, `Athorized redirect URLs` 이 세가지를 받는다.

Client ID는 우리의 서비스를 식별하는 값. 이 값은 외부에 노출되어도 상관없다.

Client Secret은 Client ID의 비밀번호이기 때문에 절대 외부에 노출되어서는 안된다. 큰 보안사고가 일어난다!

Athorized redirect URLs는 Resource Server가 코드를 전달해 주는 주소이다.

## 승인

등록을 하게 되면 client와 resource server는 둘 다 client id 와 client secret, redirect url을 알게 된다.

이 때, resource owner가 client를 통해 resource server에 인증을 해 redirect url과 다른걸 확인한다면 그 요청을 취소한다.

동일하다면 요청한 기능을 client에 허용한다는 정보가 넘어간다.

그러면 resource server는 해당 유저가 어떤 기능을 요청했는지에 대한 정보를 서버에 저장하게 된다.

이렇게 resource owner가 승인을 한 뒤, resource server도 승인을 해야 한다.

비로 토큰을 발급하지 않고, 임시 비밀번호인 authorization code를 resource owner에게 발급한다.

그러면 resource owner는 해당 코드를 가지고 client에게 넘어가게 되는데, 그 때 client는 authorization code, client id, client srcret, redirect url을

resource server에 제출해 `access token`을 발급받을 수 있다.

## 발급

제출하고 나면, 다시 제출하지 않기 위해 client와 resource server 둘 다 authorization code를 제거하고, resource server는 client에게 AccessToken을 건네준다.

그 뒤, client가 access token으로 요청하면 해당 토큰이 가진 정보(유저, 요청 정보)를 건내주게 된다.

## Refresh Token

토큰에도 수명이 있다. 그 수명이 끝나면 api가 더이상 데이터를 주지 않는다.

이런 경우 다시 발급 받아야 하는데, 이때 손쉽게 발급받는 방법은 refresh token이다.

access token을 발급받을 때 같이 발급받을수도 있고, 무조건 access token만 발급할 수도 있다.
