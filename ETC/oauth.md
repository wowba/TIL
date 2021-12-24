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
