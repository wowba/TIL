## 데이터베이스 파일 만들기

먼저 콘솔에서 mongo를 실행해 나오는 URL을 가져온다.

```
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
```

그 뒤, db.js 파일을 만들고 다음과 같이 입력한다

```
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");
```

먼저 자바스크립트로 입력할 수 있게 mongoose를 import하고,

mongoose.connect 안에 들어가는 URL은 mongo를 실행시키면 나오는 URL을 가져오는 것! 매우 간단하다.

URL 뒤에 `wetube` 는 해당 데이터베이스의 이름이다! 이 이름은 꼭 입력해줘야 한다.

## 데이터베이스 파일 불러오기

하지만 파일의 존재만으론 데이터베이스 파일로 사용할 수 없다.

이 데이터베이스 파일을 사용할 서버 파일에서 import 해줘야 한다.

```
import ./db.js
```

이러면 이제 해당 파일을 데이터베이스 파일로 사용하는 것!

보통 데이터베이스 파일은 서버 파일에서 최우선적으로 불러와주는게 좋다.

## 데이터베이스 파일 세팅

데이터베이스 파일이 잘 연결되고 있는지, 오류가 발생하는지 알기 위해 해당 코드들을 추가해준다.

```
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

// 추가한 코드
const db = mongoose.connection;

const handleOpen = () => console.log("Coneected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
// 추가한 코드
```

db.on 은 해당 이벤트가 일어날 때마다 출력되고,
db.once 는 처음 서버를 여는 그 순간에만 출력된다. 이제 데이터베이스가 정상인지 확인 가능하다.

## 데이터베이스 파일 서버에 저장하기

다음과 같은 model 파일이 있다고 가정하자.

```
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
```

`위 파일의 meta값이 string로 저장되는 경우, 저장된 데이터의 meta값은 아예 사라진다! mongoose는 기본적으로 똑똑해서 몇가지 오류들을 잡아준다.`

이 파일을 POST 하는 컨트롤러를 만든다.

```
export const postUpload = (req, res) => {
  const { title, hashtags, description } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  console.log(video);
  return res.redirect("/");
};
```

데이터를 입력한 뒤 콘솔창을 확인해보면

```
{
  title: 'wow',
  description: 'hello',
  createdAt: 2021-11-22T05:35:10.241Z,
  hashtags: [ '#hi', '#potato', '#tomato' ],
  meta: { views: 0, rating: 0 },
  _id: new ObjectId("619b2c0e79a036fd80d6be08")
}
```

입력한 정보들과 자바스크립트 코드로 만든 내용이 나오고, mongoose 에서 id 또한 부여해준다.

하지만 이렇게 해선 저장이 되지 않는다. save를 하지 않았기 때문이다.
save는 promise를 return 해주는데, database에 정보가 기록되는데 시간이 걸리기 때문이다.

컨트롤러를 다음과 같이 다시 바꾼다. `(promise 이기 때문에 async와 await을 활용해야 한다!)`

```
export const postUpload = async (req, res) => {
  const { title, hashtags, description } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  await video.save();
  return res.redirect("/");
};
```

이렇게 하면 데이터베이스에 저장이 가능하다! 야호!
아래처럼 create()와 try/ catch 를 사용하면 깔끔하고 에러도 표시할 수 있다.

```
xport const postUpload = async (req, res) => {
  const { title, hashtags, description } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
      meta: {
        views: 0,
        rating: 0,
      },
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: `Upload Video`,
      errorMessage: error._message,
    });
  }
};
```
