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
