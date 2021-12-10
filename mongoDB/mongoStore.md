## Session Store

세션 id 자체는 쿠키에 저장되지만 세션 데이타는 서버에 저장된다.

하지만 서버에 저장되는 데이타는 MemoryStore, 즉 휘발성이다. 실제 사용을 염두하고 만들어진 것이 아니다.

그래서 세션을 서버가 아닌, DB에 저장하는 Session Store을 사용해야 한다.

여러가지가 있지만, 그중에 connect-mongo 도 존재한다.

## 설치

```
npm i connect-mongo
```

그리고 session middleware에 다음 코드를 추가한다 `mongoUrl은 mongoDB에서 사용하고 있는 주소를 넣어주자`

```
store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" })
```

적용

```
app.use(
  session({
    secret: "Hello!",
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" }), --> 추가한 코드
  })
);
```

이렇게 하면 mongoDB collection에 sessions 항목이 추가된다.

session은 브라우저가 백엔드를 방문하면 만들어진다.

## Uninitalized Sessions

```
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);
```

이렇게 세션을 만든다면, 로그인 하지 않은 사용자들도 다 DB에 저장되기 때문에 매우 비효율적이다.

모든 방문자에게 쿠키를 주지 않고 로그인한 사람들에게만 주면 된다! 이럴 경우엔 `resave와 saveUninitialized를 false 로 바꿔준다`

```
app.use(
  session({
    secret: "Hello!",
    resave: false,
    saveUninitialized: false,
  })
);
```

이렇게 하면 `세션을 수정할 때만` 세션을 DB에 저장하고 브라우저에 쿠키를 넘겨주는 것.
즉, 다음과 같은 controller가 있으면 백엔드가 로그인 한 유저에게만 쿠키를 주게 된다.

```
const postLogin = async (req, res) => {
  const { username, password } = req.body;      --> Login form 에서 아이디, 비밀번호 받아옴
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Username does not exist",
    });
  }                                             --> 아이디 일치 확인
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong Password",
    });
  }                                            --> 비밀번호 일치 확인
  req.session.loggedIn = true;
  req.session.user = user;                     --> DB에 세션 업데이트, 쿠키를 받게 됨.
  return res.redirect("/");
};
```

브라우저가 없는 ios, 안드로이드 앱은 쿠키가 없기 때문에 token 을 사용한다.

## Session Property

session의 다양한 속성을 알아보자.

`secret`은 쿠키에 sign 할 때 사용하는 string이다.

쿠키에 sign을 하는 이유는 백엔드에서 브라우저에게 쿠키를 줬다는걸 보여주기 위함이다.

session hijack 이라는 공격을 막기 위해 길고 복잡하게 만들어야 한다.

```
app.use(
  session({
    secret: "Hello!",
  })
);
```

`Domain`은 이 쿠키를 만든 backend가 뭔지 알려준다. 브라우저는 Domain에 따라 쿠키를 저장하도록 되어있다.

또한 해당 쿠키는 Domain에 적힌 backend로만 전송된다.

`Expires/Max-Age`는 언제 해당 쿠키가 만료되는지(삭제되는지) 알려준다.

만약 Expire date를 설정하지 않으면 쿠키는 session cookie가 되고, session cookie는 세션이 닫힐 경우 삭제된다.

maxAge는 밀리세컨이 기준이다.

```
app.use(
  session({
    secret: "Hello!",
    cookie: {
      maxAge: 20000,
    }
  })
);
```

## .env

또한 세션에는 다른 사람이 보게되면 위험할 수 있는 것들이 있다.
secret, API key, 데이터베이스 주소등은 공개되면 안되는데, 이는 `.env`, 환경변수를 이용해 숨길 수 있다.
이 파일은 깃헙에 올라가면 안되니 `.gitignore`로 제외시켜주자.

```
app.use(
  session({
    secret: "Hello!",
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" }),
  })
);
```

위 세션 코드에서 secret과 store의 주소를 숨기고 싶은 경우, 같은 폴더에 .env 파일을 만들고
그 안에 각 항목 안에 들어갈 내용을 적는다. `관습적으로 .env 파일은 대문자로 작성한다`

```
COOKIE_SECRET=asdasfdwafweadf12312asdfasdasd
DB_URL=mongodb://127.0.0.1:27017/wetube
```

그리고 이건 `process.env` 로 가져온다.

```
app.use(
  session({
    secret: process.env.COOKIE_SCRET,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);
```

중요한점은 URL을 바꿀 경우 해당 URL이 있는 파일에 가서 똑같이 수정해줘야 한다. 안그럼 에러난다.
ex) db 파일 mongo 주소 등.

또한 `dotenv`라는 package를 설치해야 한다!

```
npm i dotenv
```

dotenv는 env를 인지하게 해주며 process.env를 사용하는 모든 파일에
다음 코드를 최상단에 입력해 주어야 한다.

```
require("dotenv").config();
```

혹은, 다음 코드를 시작 파일의 최상단에 입력하면 된다.

```
import "dotenv/config"
```

훨씬 편리하다.
