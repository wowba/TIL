## Router

Router는 controller와 url 관리를 쉽게 해준다. URL을 그룹화 해주는 것이 Router의 기능이다.

계속 임의로 이름을 만드는 것이 아닌, 분류를 하면 URL을 쉽게 정리 가능하다.

```
# Router Example

## global router

/ -> home
/join -> join
/login -> Login
/search -> Search

## users router

/users/edit -> Edit Profile
/users/delete -> Delete Profile

## video router

/videos/watch -> Watch Video
/videos/edit -> Video
/videos/delete -> Delete Video
/videos/comment -> Comment on a video
/videos/comment/delete -> Delete a comment of a Video

```

## Router 만들기

express에선 Router(); 를 사용해서 Router를 만든다.
그리고 global Middleware처럼 app.use 를 사용해 항상 사용하는 상태로 만든다.

```
const globalRouter = express.Router();

const userRouter = express.Router();

const videoRouter = express.Router();

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
```

그리고 middleware를 만들어준 뒤 get을 사용하여 router에 붙이면
/viedos/watch 라고 URL을 쓰지 않아도 해당 주소로 갈 수 있다.

```
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/edit", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
```

즉 global Middleware -> Router -> finalware(controller) 순으로 이동한다고 볼 수 있다.
