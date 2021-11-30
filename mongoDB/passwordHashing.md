## Password Hashing

DB 에 password 등 노출되지 말아야 할 것들을 그대로 저장한다면, 추후에 큰 보안 문제로 이어질 수 있다.

그중에 한가지 방법이 password를 hash 화 하는것!

## [bcrypt](https://www.npmjs.com/package/bcrypt)

Hashing은 일방향 함수이다. 입력값을 넣으면 출력값이 나온다. 같은 입력값으로는 항상 같은 해시값이 나온다.
컴퓨터 과학에서 이를 결정적 함수(deterministic function) 이라고 한다.

`ex) 121212121212 -> askljdwsflgkjeglikjg`

하지만, 출력값으로는 절대 입력값을 알아낼 수 없다.

여기에 사용할 수 있는 brcypt는 1999년에 만들어졌고, 여러 언어에서 사용가능하다.

해커가 해싱된 비밀번호를 가지고 할 수 있는 rainbow table 이라는 공격이 있는데, bcrypt로 방지 가능하다.

다음과 같은 방법으로 적용이 가능하다! (홈페이지 출처)

```
Technique 2 (auto-gen a salt and hash):

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
```

bcrypt는 async/await을 지원하기 때문에 callback을 쓰지 않아도 된다. saltRounds는 해싱을 하는 횟수,
즉 여러번 할수록 보안이 좋아진다.

```
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: String,
});

userSchema.pre("save", async function () {
  console.log("User Password", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hashed password", this.password);
});

const User = mongoose.model("User", userSchema);

export default User;
```

위와 같이 Mongoose Model의 Middleware로 사용할 수 있다!!

123456 을 password로 입력한 경우, 다음과 같이 나온다

```
User Password 123456
Hashed password $2b$05$/N4RpimrR9ZW8ryMijHLZu2VyM.6U9b/4i0oHOhsK.ZFQc.9dA9WS
```

## 비밀번호 확인하기

hash된 비밀번호를 어떻게 확인할 수 있을까?
post 하는 controller에서 bcrypt의 compare를 사용하면 비교할 수 있다!

```
export const postLogin = async (req, res) => {

const { username, password } = req.body;

const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Username does not exist",
    });
  }

const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong Password",
    });
  }
  console.log("Login");
  return res.redirect("/");
}
```

위와 같이 req.body에서 사용자가 입력한 비밀번호를 가져오고(compare를 통해 알아서 암호화 시켜준다),
DB에 있는 암호화된 user.password를 가져와 서로 일치한지 비교한다!
