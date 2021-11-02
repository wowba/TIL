# Express 란?

Express 는 NodeJS 웹 에플리케이션 프레임워크이다.
Express 는 프레임워크이므로 웹 애프리케이션을 만들기 위한 각종 라이브러리, 미들웨어등이 내장되어 있고
개발 규칙을 강제하여 코드 및 구조의 통일성을 향상시킨다.

차세대 웹 프레임워크로 Express 개발팀에서 만든 Koa 가 있다.

## Express 로 NodeJS 서버 만들기

우선 NPM 으로 express를 설치해준 뒤, js 파일에 다음과 같이 입력한다.

```
import express from "express"
```

"express" 라는 package를 express 라는 이름으로 import 하는 것.

이렇게 입력하면 NPM 은 node_modules 에서 express를 찾고 있는것을 이해한다.
그 뒤 NPM이 express 폴더의 index.js 파일을 불러오는 것.
(node_modules/express 라고 입력할 필요가 없다.)

```
const app = express();
```

그 뒤 다음과 같이 입력하면 express() 는 express application을 만드는 함수이고
express module 에서 top-level function 이다. 이제 서버를 만들었다!

```
app.listen(4000(port), handleListening(callback))
```

서버를 만든 뒤, 서버가 사람들의 request 가 올때까지 기다리게 만들어야 한다. app.listen()이 그 역할을 한다.
listen()의 argument는 port, callback 이 있다.

먼저 서버에게 어떤 port(4000)를 listening 할지 입력해야 하고, 그 다음 서버가 작동할 callback 함수를 입력해야 한다.

```
const handleListening = () => console.log("Server Listening on port 4000)
```

결과

```
import express from "express";

const app = express();

const handleListening = () => console.log("Server Listening on port 4000");

app.listen(4000, handleListening);

```

4줄의 코드로 서버를 만들었다!
localhost:4000 으로 들어가면 해당 서버로 들어갈 수 있다. 물론 cannot get 을 제외하고 아무것도 뜨지 않는다.
서버를 종료하면 해당 서버로 들어갈 수 없다.
