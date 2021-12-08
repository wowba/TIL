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
