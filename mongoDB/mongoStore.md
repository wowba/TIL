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
