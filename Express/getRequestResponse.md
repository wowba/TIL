## GET method

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

그러면 다음 코드 한줄을 더해서 root로 가는 request를 해결할 수 있게 해주자!

```
const handleHome = () => console.log("coming!")

app.get("/", handleHome);
```

get은 해당 route (여기선 root)로 가면 argument로 적힌 함수를 실행한다!
콘솔창에 coming! 이라고 적히고, 브라우저는 계속 로딩하고 있을 것이다.

결과

```
import express from "express";

const PORT = 4000;

const app = express();

app.get("/", () => console.log("coming!"));

const handleListening = () =>
  console.log(`Server Listening on port http:localhost:${PORT}`);

app.listen(PORT, handleListening);
```

## Route Handler

```
import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("coming!");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server Listening on port http:localhost:${PORT}`);

app.listen(PORT, handleListening);
```

다음과 같은 서버 파일에서 handelHome 은 route handler 이다.

express의 route handler는 request Object 와 response Object를 받는다. (addEventListener의 event 와 유사하다.)

그러므로 handleHome 코드를 다음과 같이 바꿔줄 수 있다.

```
const handleHome = (req, res) => console.log("coming!");
```

req, res의 이름은 상관 없지만, 먼저 오는것이 request Obeject, 나중에 오는것이 response Object 인 것은 알아야 한다.

```
import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  console.log("coming!")
};

app.get("/", handleHome);


const handleListening = () =>
  console.log(`Server Listening on port http:localhost:${PORT}`);

app.listen(PORT, handleListening);

```

## Response Object

```
app.get("/", handleHome);
```

다음과 같은 코드로 request를 보낸다면, 서버는 response를 해줘야 한다.

```
const handleHome = (req, res) => {
  return res.send("Home");
};
```

res.send("Home"); 으로 해당 route에 대한 response 를 보내준 것이다.

결과

```
import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("Home");
};
const handleLogin = (req, res) => {
  return res.send("Login");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server Listening on port http:localhost:${PORT}`);

app.listen(PORT, handleListening);
```
