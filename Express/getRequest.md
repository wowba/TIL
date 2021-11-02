```
import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () =>
  console.log(`Server Listening on port http:localhost:${PORT}`);

app.listen(PORT, handleListening);
```

다음과 같은 .js 파일로 만든 서버(http:localhost:$4000) 에 들어간다면 아래의 메세지가 나온다.

```
Cannot GET /
```

먼저 "/" 는 서버의 root, 혹은 첫 페이지를 말한다.

"GET"은 http의 method 중 하나이다. HTTP 는 사용자와 서버, 서버와 서버가 소통하는 방법이다.
사용자들이 서버에 접속하려고 할 때, 브라우저가 http request를 만들어 보내는 것임.
즉, 웹사이트에 접속하고 서버에 정보를 보내는 방법이다.

저 문장은 서버의 root 를 가져올 수 없기에 나타나는 메세지이다.
