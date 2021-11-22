## MongoDB

몽고DB는 다목적, document-based, 분산 데이터베이스이다.

특히 자바스크립트와 유사해서 간단히 작동 가능하고, 초보자도 이해 가능하다.

일반적으로 database는 sql-based 인데, 몽고는 document-based로 object 처럼, 즉 json 파일처럼 저장된다.

window 10 유저는 chocolatey 설치한 뒤

```
choco install mongodb
```

powershell 에서 간단하게 설치하자.

## MongoDB Test

몽고DB 설치 이후에는 잘 작동하는지 테스트를 해줘야 한다.

windows 10 기준, 명령 프롬프트, 파워쉘, cmd 등 선호하는 콘솔에서 mongod 를 입력하면 코드들이 나와야 하는데, 에러가 나올 경우 다음 사이트에 들어가서 똑같이 하자.

[CMD mongod 해결하기](https://dangphongvanthanh.wordpress.com/2017/06/12/add-mongos-bin-folder-to-the-path-environment-variable/)

```
코드 일부 발췌.

{"t":{"$date":"2021-11-20T00:05:47.238+09:00"},"s":"I",  "c":"CONTROL",  "id":23285,   "ctx":"-","msg":"Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'"}
{"t":{"$date":"2021-11-20T00:05:47.239+09:00"},"s":"I",  "c":"NETWORK",  "id":4915701, "ctx":"main","msg":"Initialized wire specification","attr":{"spec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":14},"incomingInternalClient":{"minWireVersion":0,"maxWireVersion":14},"outgoing":{"minWireVersion":6,"maxWireVersion":14},"isInternalClient":true}}}
```

`왜인지는 모르겠지만 vs code 내장 터미널에서 mongod, mongo를 입력시 에러가 나온다. 바깥 터미널에서 작동하자!`

mongod 입력 시 문제가 없으면 mongo를 입력해보자!

그러면 mongoDB shell과 연결해준다. 즉, 터미널 안에서 mongo를 실행시켜 다양한 명령어들을 사용 가능.

여기서 show dbs 를 입력하면 처음 몽고db를 사용할 경우 다음과 같이 나올것이다. 다음 중 일부만 나올 수도 있다.

```
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

만약 show dbs를 실행할 수 없다면, 다시 설치하자.

지금까지 문제가 없다면 테스트 끝!
