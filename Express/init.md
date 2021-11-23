아래와 같은 서버 js 파일은 여러가지 기능을 가지고 있다.

데이터베이스를 가져오기도 하고, express를 실행시키기도 하며

또한 PORT를 가지고 listening 하는 중이다.

```
import "./db.js";
import "./models/Video.js";

import express from "express";

import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server Listening on port http:localhost:${PORT}`);

app.listen(PORT, handleListening);
```

한 파일이 여러가지 기능을 가지면 관리하기 어려워지니,

서버 js 파일에는 express 관련 내용과 controller, router 코드들만 남기고

나머지 코드들은 `init.js` 파일을 따로 만들어 빼준다.

init.js 파일에는 데이터베이스 등을 다루고 서버를 실행시키는 코드를 넣어놓는다.

## 서버 js 파일 바꾸기

```
import express from "express";

import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server Listening on port http:localhost:${PORT}`);

app.listen(PORT, handleListening);

export default app;
```

데이터베이스, listening 관련 내용들을 빼주고 app 을 export한다.

## init.js 파일 만들기

```
import "./db.js";
import "./models/Video.js";
import app from "./server.js";

const PORT = 4000;

const handleListening = () =>
  console.log(`Server Listening on port http:localhost:${PORT}`);

app.listen(PORT, handleListening);
```

init.js 파일은 데이터베이스 관련 내용을 가져오고 server.js 파일을 그대로 가져와
PORT를 해당해준 뒤 listen 해줌으로서 서버를 실행시키는 파일이 된다.

init.js 파일을 만든 뒤 package.json 에서 시작 파일을 변경하는걸 잊지 말자!
