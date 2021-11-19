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

## How to Make Model?

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

만든 뒤에는 서버 파일에서 꼭 import 해야 한다!
