## Mongoose

몽구스는 노드JS와 몽고DB를 연결해준다.

노드JS에서 몽고DB와 상호작용 하기 위해 몽구스를 사용한다. 자바스크립트로 코딩이 가능해짐!

다음 명령어로 설치하자

```
npm i mongoose
```

## Model

Mongoose를 통해 데이터를 만들때, Model을 만들어 줘야 제대로 Mongoose를 사용할 수 있다.

Model에 어떤 데이터를 담고 있는 모습인지 정확하게 입력해줘야 추후에 CRUD를 제대로 할 수 있다.

어떤 종류의 데이터가 있는지, 그 데이터는 문자열을 받는지, 숫자인지, 문자인지 등등...

특정한 값을 입력하는 것이 아니라, 추후에 특정 값들을 받을 수 있는 틀이 곧 Model이다.

## How to Make Model? / [Schema](https://mongoosejs.com/docs/guide.html)

먼저 model 폴더를 만든 뒤 안에 js 파일을 만든다.
`Mongoose 에서 model 파일 이름의 첫번째 문자는 대문자로 하는것이 관습이다! ex) Video.js`

그 다음 model의 형태를 만들어 줘야 한다. 보통 schema 라고 부른다.

```
import mongoose from "mongoose";

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
```

schema를 만든 뒤, model을 정의해준다.

```
import mongoose from "mongoose";

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

const Video = mongoose.model("Video", videoSchema)

export default Video;
```

.model 은 argument를 2개 받는다. 하나는 이름 ("Video") `맨 앞 대문자는 관습이다.`3
다른 하나는 model의 형태인 schema (videoSchema)

`만든 뒤에는 서버 파일에서 꼭 import 해야 한다!`

`또한 이 model을 사용하는 controller 에서도 import 해줘야 한다!`

기본적으로 schema 안의 데이터들은 몇개 없어도 저장이 되지만,

아래와 같이 Html 처럼 required: true 를 이용하여 특정 데이터가 없으면 저장이 되지 않게 만들 수 있다!
몽구스에게 데이터 타입을 구체적으로 적어준다면 유용하게 사용할 수 있다.

```
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: {type:Date, required: true},
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});
```

## [Queries](https://mongoosejs.com/docs/queries.html)

몽구스의 model은 CRUD operation를 위한 다양한 query들을 제공한다.
`query: 데이터베이스에 정보를 요청하는 방법`

몽구스의 쿼리는 callback function 또는 promise를 통해 활용할 수 있다.

기본적으로 데이터베이스는 자바스크립트 바깥에 위치하기 때문에 가져오려면 아무리 짧아도 시간이 소요되며, 원인 모를 에러가 발생할 수도 있다.

## Callback function

```
const home = (req, res) => {
  Video.find({}, (error, videos) => {
    console.log("errors", error);
    console.log("videos", videos);
  });
  console.log("Hello");
  return res.render("home", { pageTitle: "Home", videos: [] });
};
```

다음과 같은 controller를 실행시키면(해당 페이지를 request 하면) 다음과 같이 나온다.

```
Hello
errors null
videos []
```

코드 순서상으론 Video.find 아래에 있는 error와 videos가 먼저 나와야 하는데, Hello가 제일 먼저 나온다.

이는 find 의 argument인 callback function 때문에 일어난 일이다. 특정 코드를 마지막에 실행하게 만드는 것.

하지만 error 를 찾기에는 callback이 편리하다. 한번에 바로 볼 수 있기 때문.

callback 의 단점은, 함수 안에 함수가 계속 들어가서 코드가 장황해진다.
하지만 Promise를 쓰면 이런 장황한 코드를 쓸 필요가 없다.

## Promise

자바스크립트는 원래 기다려주는 기능이 없기 때문에 callback 을 쓰게 되면 순서가 꼬이는 현상이 발생한다.

하지만 Promise의 await 을 사용하게 되면 데이터베이스에게서 결과값을 받을때까지 자바스크립트는 기다려준다! 또한 굉장히 직관적이고 이해하기 쉽다.

```
export const home = async (req, res) => {
  try {
    console.log("Starting");
    const videos = await Video.find({});
    console.log("Finished");
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch(error) {
    return res.render("server-error");
  }
};
```

try/catch를 사용하여 callback 과는 다르게 error 발생시 if/else 처럼 만들 수 있다.

위처럼 callback이 아닌 async 와 await을 이용하면 코드들이 순서대로 작동한다.

```
Starting
Finished
[]
```

규칙상 await은 무조건 async 아래에서만 작동하기 때문에 무조건 지켜줘야 한다.

## [Middlewares](https://mongoosejs.com/docs/middleware.html)

Express에서의 Middleware는 request 중간에 들어와서 특정 기능을 하는거라면(Morgan 등)

Mongoose의 Middleware는 데이터를 저장, 업데이트 하기 전 또는 후에 Middleware를 적용할 수 있다.

Middleware는 model 파일 안에 만들면 되는데, 중요한건 model() 로 생성하기 전에 middleware를 만들어야 한다.

```
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.pre("save", async function () {
  this.hashtags = this.hashtags[0]
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
```

위와 같이 pre middleware를 사용하여 save 되기 전 작동하는 middleware를 만들 수 있다.
다양한 middleware를 만들 수 있으니 참고하자!

## [Statics](https://mongoosejs.com/docs/guide.html#statics)

불행히도, save()는 hook을 통해 middleware 사용이 가능하지만,
findByIdAndUpdate() 같은 경우에는 document에 접근이 불가능해 middleware 사용이 불가능하다.

이런 경우, mongoose의 statics 를 사용해 원하는 static function 을 만들 수 있다.

```
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
```

여기서 만든 Video.formatHashtags()를 controller에서 사용하면

```
import Video from "../models/Video.js";

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "ERROR" });
  }
  try {
    await Video.findByIdAndUpdate(id, {
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect(`/videos/${id}`);
  } catch (error) {
    return res.render("404", { pageTitle: "ERROR" });
  }
};
```

다음과 같이 findByIdAndUpdate() 에도 적용할 수 있다.
이렇게 Video Model에 적용 가능한, 아주 유용한 static function을 만들었다!

## [Operator](https://docs.mongodb.com/manual/reference/operator/query/regex/)

몽고DB 는 다양한 오퍼레이터를 제공하는데, 몽구스는 이들을 사용해서 좀 더 정확한 데이터를 찾거나
원하는 값을 가진 데이터들을 추려낼 수 있는 코드를 만들 수 있다.

```
videos = Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      }
```

다음과 같이 특정 keyword의 소,대문자 상관없이 검색하는 Model.find를 만들 수 있다!
다양한 오퍼레이터를 통해 데이터를 더 확실하게 관리가능하다.
