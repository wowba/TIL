## URL Parameter

```
/:id
```

다음과 같이, 주소 앞에 ":" 가 붙어 있다면, 해당 URL은 변수를 포함할 수 있게 된다.

id 는 곧 parameter의 이름이 된다.

이 변수가 있기 때문에, 영상을 올리는 사이트의 경우 각각의 영상마다 Router를 만들지 않아도 된다.
(현실적으로 모든 영상마다 Router를 만들어 주는것을 불가능하다. 유튜브를 생각하자!)

```
videoRouter.get("/:id", see);

const see = (req, res) => {
  return res.send(`Watch Video id:${req.params.id}`);
};
```

다음 예제와 같이, express에서 유용하게 사용할 수 있다.

만약 /123456 으로 들어간다면 console.log(req.params.id) 값은

```
{ id: '123456'}
```

으로 나온다.

## express routing

- [express routing](https://expressjs.com/ko/guide/routing.html)

위 사이트에 들어가면 정규식을 기반으로 한 다양한 express route 경로를 볼 수 있다.

ex) 아래처럼 하면 id는 오직 숫자밖에 오지 못한다.

```
videoRouter.get("/:id(\\d+)", see);
```

- [정규식 연습 사이트](https://regexr.com/)

- [정규식 정리 글](https://kasterra.github.io/regex1-the-basic-operation/)

이를 통해 다양한 parameter를 적재적소로 사용 가능하다.
