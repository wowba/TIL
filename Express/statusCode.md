## [Status Code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

```
form(method="POST")
        input(placeholder="Name",name="name", type="text", required)
        input(placeholder="Email",name="email", type="text", required)
        input(placeholder="Username",name="username", type="text", required)
        input(placeholder="Password",name="password", type="text", required)
        input(placeholder="Confirm Password",name="password2", type="text", required)
        input(placeholder="Location",name="location", type="text", required)
        input(type="submit", value="Join")
```

위와 같은 form 이 아래와 같은 controller를 거칠경우( 비밀번호 혹은 이메일이 이미 있는 경우)
데이터는 저장되지 않는다.

```
if (password !== password2) {
    return res.render("join.pug", {
      pageTitle: "Join",
      errorMessage: "Password confirmation does not match",
    });
  }

  if (exists) {
    return res.render("join.pug", {
      pageTitle: "Join",
      errorMessage: " This username/email is already taken.",
    });
  }
```

하지만, `Morgan middleware 사용시` 다음과 같은 결과가 나온다.

```
POST /join 200 30.346 ms - 981
```

위과 같은 form 을 통해 회원가입을 하려고 할 때, 이메일이나 비밀번호가 일치하지 않아 데이터베이스는 에러가 나와도

브라우저는 res.render 만 정상적으로 되어도 status code 200, 즉 정상을 받았기 때문에 크롬같은 경우 계정 비밀번호를 저장할거냐고 묻는다.

그렇기에 브라우저한테 render는 잘 되었지만 에러가 있었다고 말해줘야 한다.

이때 400 Bad Request를 사용하면 된다.

상태 코드를 보내는 방법은 아주 간단한데, 다음과 같이 하면 된다. `res.status(400).render~~~`

```
if (password !== password2) {
    return res.status(400).render("join.pug", {
      pageTitle: "Join",
      errorMessage: "Password confirmation does not match",
    });
  }

  if (exists) {
    return res.status(400).render("join.pug", {
      pageTitle: "Join",
      errorMessage: " This username/email is already taken.",
    });
  }
```

위와 같이 res와 render 사이에 원하는 상태 코드를 넣으면 된다!

이러면 다음번에 크롬은 상태코드 400 을 인식하고 비밀번호를 저장할거냐고 묻지 않는다.

404 상태 코드를 받으면 브라우저는 히스토리를 기억하지 않으므로, 상황에 따라 적절한 상태코드를 보내주는것이 중요하다!
