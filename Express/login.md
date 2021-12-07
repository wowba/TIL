## 로그인 이란?

유튜브에서 로그인을 하면 구독, 저장한 비디오들이 나오는 것들은

로그인한 사람이 누구인지 웹사이트가 알고있기 때문에 가능한 것이다. 즉, 유저를 기억할 수 있는 것이다.

## Cookie

유저를 기억하는 방법중 하나는 유저에게 쿠키를 보내는 것이다.

먹는 과자가 아니다!

쿠키를 이해하려면 세션을 먼저 이해해야 한다.

## Session

세션은 백엔드와 브라우저 간에 어떤 활동을 했는지 기억하는것을 말한다.

어떤 사이트에 로그인 하고 있다면, 그건 브라우저와 해당 사이트의 백엔드 사이에 세션이 존재하는것을 말한다.

특정 시간(보통 2주 정도)가 지나면 로그인 기록은 사라질 것이다. 즉 세션은 브라우저의 백엔드 사이의 memory 혹은 histroy 이다.

하지만 세션이 작동하려면 백엔드와 브라우저가 서로에 대한 정보를 가지고 있어야한다.

백엔드에서 단순히 사이트만 render 하는 기능이 있다면,
http method를 통해 한번 서버와 연결 되었다가 그냥 끊어지게 된다. 더이상 연결이 존재하지 않는걸 stateless(무상태) 라고 한다.
한번 연결된 뒤 둘 사이 연결에 state가 없는것.

그래서 서버는 유저가 백엔드에 뭔가 요청할 때 마다 알아볼 수 있어야 한다.
유저가 로그인 할 때 서버가 유저에게 ID카드 같은걸 준다고 상상해보자. 그 뒤 유저가 서버에게 요청할 때마다 ID카드를 보여주면
서버는 ID카드를 통해 해당 유저음을 인식할 수 있다. `실제로 서버는 일종의 텍스트를 건내준다!`

## [express-session](https://www.npmjs.com/package/express-session

express-session 이라는 Middleware를 설치하면 session 사용이 가능하다.
이 packeage를 설치하고, middleware들을 작동시키는 서버 파일에 다음과 같이 입력해주자. `(라우터 전에 입력해 줘야 한다!)`

```
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);
```

이렇게 하면 세션은 사이트로 들어오는 모두를 기억하게 된다. 로그인을 하지 않더라도!

그 뒤 사이트에서 새로고침을 하면(백엔드에 요청을 하면), 백엔드가 브라우져에게 쿠키를 보낸다. (쿠키는 브라우저가 저장하는 데이터, 세션은 서버 즉 백엔드에서 제공하는 데이터)

브라우저마다 쿠키가 다르기 때문에 크롬, 브레이브, 웨일등 다양한 브라우저로 들어가면 각기 다른 쿠키들이 나온다.

그 뒤, 해당 쿠키에 있는 세션 id는 백엔드에 req 할 때 마다 같이 보내지고 있는 것이다. 그럼 백엔드의 세션 DB에서 해당 id를 가진 세션을 찾는다.

그럼 그 세션에 유저 정보를 저장할 수 있게 된다.

하지만 이 세션들을 메모리에 저장되고 있기 때문에 서버를 재가동하면 사라지게 된다. 몽고DB 등 데이터베이스와 세션을 연결해 사라지지 않게 해야한다.

## 로그인 기억하기

우선 다음과 같이 session을 출력하는 임시 middleware를 추가해준다 `middleware는 서버 파일에서 추가한다`

```
app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    console.log(sessions);
    next();
  });
});
```

그리고 해당 세션이 유저를 기억하게 해주는 controller를 만든다.

```
export const postLogin = async (req, res) => {
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
```

최소한의 코드로 위와 같이 로그인을 할 경우 post 해서 session에 해당 유저를 기억하게 만들 수 있다.

이렇게 하고 로그인 하면 다음과 같은 내용이 출력된다. (user schema는 임의로 만듦)

```
[Object: null prototype] {
  '0eRJt8GLJm7NFoSV-Mxrx0UNoC437QBR': {
    cookie: { originalMaxAge: null, expires: null, httpOnly: true, path: '/' },
    loggedIn: true,
    user: {
      _id: '61a0e08c2ee4039ae5f31ce3',
      email: 'leeyuwk@naver.com',
      username: 'wowba',
      password: '$2b$05$L8tTE4/8lUb2N30P.0OPuuUNWr5FBbrqJqVMtuppNDrLkENr3OMWu',
      name: 'lee',
      location: 'Seoul',
      __v: 0
    }
  }
}
```

쿠키가 user를 기억하게 된다! 와우!
