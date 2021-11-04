## Middleware

middleware 는 middle softeare 의 줄임말로,
브라우저의 request와 서버의 response, 그 사이에 존재한다.

모든 middleware는 controller( http method의 argument 중 하나 ) 이고, 모든 controller는 middleware다.
즉, middleware 도 controller(handler) 처럼 req, res, next 세가지가 다 필요하다.

controller 예

```
const gossipMiddleware = (req, res, next) => {
  console.log("middleware!");
  next();
};
```

req는 request Object, res는 response Object, next는 다음 함수를 호출해 준다.

다음과 같이 적용하면

```

const gossipMiddleware = (req, res, next) => {
  console.log("middleware");
  next();
};

const handleHome = (req, res) => {
  return res.send("Home");
};

app.get("/", gossipMiddleware, handleHome);
```

서버의 root 에 get 하면 gossipMiddleware()를 호출하고,
next()에 의해 다음 handleHome() 함수가 호출된다. 여기서 handleHome() 은 finalware, 마지막으로 호출되는 함수이다.
또한 finalware는 마지막이기 때문에 gossipMiddleware처럼 next argument가 필요치 않다.

만약 gossipMiddleware가 다음과 같다면

```
const gossipMiddleware = (req, res, next) => {
  console.log("middleware");
  return res.end();
  next();
};
```

return 에 의해 결과가 나오기 때문에 next()는 실행되지 않고 종료된다.

## app.use / golbal middleware

app.use 는 golbal middleware, 즉 어떤 URL 에서도 사용가능한 middleware를 만들 수 있게 해준다.

변경 전

```
app.get("/", gossipMiddleware, handleHome);
```

변경 후

```
app.use(gossipMiddleware);
app.get("/", handleHome);
```

중요한 점은 app.use 가 app.get 보다 먼저 나와야 한다. 이렇게 하면 gossipmiddleware가
서버의 root 에 request를 보내면 알아서 호출되서 사용된다. root 뿐이 아닌, 모든 route에서 사용된다.

## controller or middleware

```
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("not allowed");
  }
  console.log("Pass");
  next();
};
```

다음과 같이 middleware를 만든다면, 중간 if문에 의해
return되어 controller가 될 수도 있고, 조건에 부합하면 middleware로 사용될 수 있다.
연결이 중단되면 middleware가 아니다.
