## POST method

GET 과는 다르게 웹사이트에 로그인 할때, 파일을 보낼 때, database에 있는 값을 바꾸는 무언가를 보낼때, 즉 정보를 추가, 변경, 삭제할 때 사용된다.

간단한 form.pug 를 만들어 POST를 해보자.

```
h4 Change Title of video
    form(method="POST")
        input(name="title, placeholder="Video Title",value=video.title,required)
        input(value="Save",type="submit")
```

여기서 중요한건, input attribute 중에 name을 설정하지 않으면 데이터를 보낼 수 없다!

물론 이 전에 controller에서 post를 받을 수 있게 해 주고, Router에 연결해야 한다.

```
let videos = [
  {
    title: "video 1",
    rating: 5,
    comment: 2,
    createdAt: "2 m ago",
    views: 1,
    id: 1,
  },
  {
    title: "video 2",
    rating: 5,
    comment: 2,
    createdAt: "2 m ago",
    views: 59,
    id: 2,
  },
  {
    title: "video 3",
    rating: 5,
    comment: 2,
    createdAt: "2 m ago",
    views: 59,
    id: 3,
  },
];

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};
```

```
videoRouter.post("/:id/edit", postEdit);
```

## app.use(express.urlencoded({ extended: true }));

제목과 같은 코드를 서버 파일에 추가하지 않으면, express는 html form 을 인식하지 못한다.

위와 같은 middleware를 router 전에 추가해야 한다!!

```
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
```
