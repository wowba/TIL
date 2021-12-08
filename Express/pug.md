# Pug

[Pug 공식 문서](https://pugjs.org/api/getting-started.html)

Pug는 Html을 간단하게 작성할 수 있는 Template Engine이다.
Pug 문법을 따로 알아야 하지만 Html을 편하게 작성할 수 있고 코드량이 적어 생산성이 좋아진다.

특히 Pug는 html과 JS의 결합 형태로 나타나서 반복문, 삼항연산자 같은 것을 JS로 따로 해주지 않아도 된다.
자바스크립트 코드를 바로 활용할 수 있다는게 Pug의 큰 장점 중 하나이다.

## Express Setting

우선 사용하기 위해선 설치하자!

```
npm i pug
```

그 뒤 Express에게 html 헬퍼로 Pug를 쓴다고 말해줘야 한다.
Express는 view engine을 설정할 수 있는데, pug가 view engine이 된다고 말해주면 된다.

다음과 같은 코드로 설정할 수 있다.

```
app.set("view engine","pug")
```

또한 express는 기본적으로 views 라는 폴더 안에 있는 파일(뷰)을 찾는다.
여기서 뷰는 기본적으로 html 같은, 유저가 보는 대상을 의미한다.

[express api](https://expressjs.com/ko/4x/api.html#app.get)에 가면 기본적으로 express는 views 폴더를 다음과 같이 찾는다.

```
process.cwd() + '/views'
```

## CWD

Current Working Directory, 즉 현재 작업중인 파일이 있는 폴더인 cwd 에서 views 라는 폴더를 찾는것인데,
파일이 있는 곳에 views 폴더를 만들고 앞으로 보여줄 template을 이 폴더 안에서 만들면 된다.
그럼 express는 views 폴더에서 뷰를 찾는다.

하지만 만약 package.json 파일 내부의 "scripts" 에서 명령어를 만들어 사용하고 있다면
서버를 실행시키는 파일의 위치와 CWD는 반드시 동일하지 않다. 왜냐하면 CWD는 처음 파일을 실행한 위치를 찾기 때문에
서버를 실행시키는 server.js 파일의 위치가 아닌, package.json 의 위치를 CWD로 인식한다.

즉, Node를 실행시키는 위치가 CWD 이다.

## views setting

위의 문제를 해결하기 위해 express가 찾는 views 폴더의 위치를 변경할 수 있다.
cwd의 src 라는 폴더 안에 views 폴더를 넣고 싶다면 서버 파일에 다음과 같은 코드를 넣으면 된다.
참고 [express api](https://expressjs.com/ko/4x/api.html#app.get)

```
app.set("views", process.cwd() + "/src/views")
```

이러면 express는 자동으로 src 폴더 내부의 views 폴더에서 뷰를 찾는다.

express api의 default 값은 app.set 으로 변경할 수 있다!

## render

pug 파일로 보여주고 싶은걸 만들었다면, 이걸 render를 통해 보여줘야 한다.

render을 사용하면 express는 자동으로 views 폴더에 있는 동일한 이름의 파일을 찾는다.

home.pug 라는 파일을 만들고 이를 보여주고 싶다면 서버의 controller에서 다음과 같이 설정해주면 된다.

```
export const home = (req, res) => res.render("home")
```

## [partial](https://pugjs.org/language/includes.html)

Pug의 장점중 하나이다!
다른 파일을 가져와서 모든 파일에 코드를 반복하지 않고 한 파일로 모든 템플릿을 업데이트 할 수 있다.

views 폴더 안에 partials 폴더를 만들고 다음과 같은 footer.pug 파일을 만든다. (파일, 폴더 이름은 상관 없다!)

```
footer &copy; #{new Date().getFullYear()} Wetube
```

해당 파일을 views 폴더 안에 있는 pug 파일에 가져오고 싶으면 원하는 부분에 다음과 같이 입력한다.

```
include partials/footer.pug
```

이렇게 하면 한 파일로도 모든 템플릿에 들어가는 부분을 관리할 수 있다!

## [inheritance](https://pugjs.org/language/inheritance.html)

inheritance는 쉽게 말해 주로 쓰이는 기반, 베이스를 만들어준다.

다음과 같은 base.pug 파일을 만들었다고 가정하자.

```
doctype html
html(lang="ko")
    head
        title Wetube
    body
        h1 Base!
    include partials/footer.pug
```

이 파일을 home.pug 라는 파일에 그대로 가져오려면 home.pug 에서 extends 를 사용해 코드를 작성한다.

```
extends base.pug
```

그러면 render 했을 시, home.pug 파일은 base.pug 파일과 동일하게 나온다.
하지만 이렇게 되면 모두 동일한 모습이 나와 사용 의미가 없다. 이때 block 을 사용해야 한다.

## [block](https://pugjs.org/language/inheritance.html)

다시 base.pug 파일로 돌아와서 block 을 만들어 준다.

```
doctype html
html(lang="ko")
    head
        title Wetube
    body
        block content
    include partials/footer.pug
```

위와 같이 content 라는 이름의 block 을 만들어주면, 이 파일을 기반으로 하는 다른 파일에서 해당 block을 설정할 수 있다.

home.pug 라는 파일에서 그대로 가져와서 내용을 추가하려면 똑같이 block content 를 작성한 뒤 아래에 내용을 넣으면 된다.

```
extends base.pug

block content
    h1 Home!
```

이러면 해당 블록에는 h1 Home! 이 들어가고 결과적으로 home.pug 파일은 다음과 같이 되는것이다.

```
doctype html
html(lang="ko")
    head
        title Wetube
    body
        h1 Home!
    include partials/footer.pug
```

## variables to Template

pug에서 #{}, 해당 괄호안에 있다면 자바스크립트 코드를 의미한다. 이를 활용해 pug에 자바스크립트 변수를 넣을 수 있다.

```
doctype html
html(lang="ko")
    head
        title #{pageTitle} | Wetube
    body
        block content
    include partials/footer.pug
```

위의 home.pug 파일에서 #{pageTitle}, 즉 pageTitle 이라는 변수는 어디에서 가져와야 할까?

이 변수는 pug 파일을 render 하는 controller 에서 입력해 주어야 한다.

```
export const home = (req, res) => res.render("home", { pageTitle: "Home"})
```

먼저 home 이라는 controller 가 home.pug 파일을 render 한다.
render 는 argument를 2개를 받는데 하나는 render 하고자 하는 template, 두번째는 그 안에 들어가는 변수를 받을 수 있다. (변수는 여러개 넣을 수 있다!)
위와 같이 render 한다면, 결국 home.pug 파일은 다음과 같이 되는것이다.

```
doctype html
html(lang="ko")
    head
        title Home | Wetube
    body
        block content
    include partials/footer.pug
```

추가로, #{pageTitle} 이 아닌 다른 방법으로도 변수 입력이 가능하다.

```
h1=pageTitle
```

다만 위 방법은 해당 줄에 `변수만` 들어가면 사용 가능하다.

## [Conditionals](https://pugjs.org/language/conditionals.html)

pug는 자바스크립트 기반이기에 조건문을 사용할 수 있다.

다음은 로그인 상태에 따라 logout, login 2가지를 하나씩 보여주는 예문이다.

```
doctype html
html(lang="ko")
    head
        title  #{pageTitle} | Wetube
    body
        header
            nav
                ul
                    if fakeUser.loggedIn
                        li
                            a(href="/login") Logout
                    else
                        li
                            a(href="/login") Login
            h1=pageTitle
        main
            block content
    include partials/footer.pug
```

## [iteration](https://pugjs.org/language/iteration.html)

array 또한 pug 에서 표현할 수 있다!
iteration 을 사용하려면 우선 array나 object를 controller에서 argument로 받아야 한다.

```
const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos: videos });
```

home.pug 파일에서 videos 라는 array를 표현하려면 pug의 each를 사용할 수 있다.

```
doctype html
html(lang="ko")
    head
        title  #{pageTitle} | Wetube
    body
        header
            h1=pageTitle
        main
            Here is trending Video!

            each video in videos
                li=video
```

다음과 같이 보여진다.

```
Here is trending Video!

1
2
3
4
5
6
7
8
9
10
```

## [Mixin](https://pugjs.org/language/mixins.html)

mixin 은 똑똑한 partial 이라고 보면 된다. 데이터를 받을 수 있는 html block 이라고 생각하자.
즉, 반복되는 것들을 component로 만들어 여러곳에서 재사용 할 수 있는 것이라고 보면 된다.
(틀만 만들어 두면 가져오는 데이터에 따라 다르게 보인다! 유튜브가 매번 다른 동영상을 보여주는것과 비슷하다.)

우선 mixin.pug 파일을 만들어준다.

```
mixin video(info)
    div
        h4=info.title
        ul
            li #{info.rating}/5
            li #{info.comments} comments.
            li Posted #{createdAt}
            li #{info.views} views.
```

mixin 파일을 만드는건 partial 파일을 만드는 것과 비슷하다.

그 다음으로는 mixin.pug 파일을 불러온다.

```
include mixins/mixin.pug

block content
    h1 Here is trending Video!

    each potato in videos
        +video(potato)
    else
        sorry nothing found
```

partial 파일을 불러오는 것처럼 mixin.pug 파일을 include를 사용해 가져온다.

```
const videos = [
  {
    title: "video 1",
    rating: 5,
    comment: 2,
    createdAt: "2 m ago",
    views: 59,
    id: 1,
  },
  {
    title: "video 2",
    rating: 5,
    comment: 2,
    createdAt: "2 m ago",
    views: 59,
    id: 1,
  },
  {
    title: "video 3",
    rating: 5,
    comment: 2,
    createdAt: "2 m ago",
    views: 59,
    id: 1,
  },
];

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos: videos });
```

그리고 위와 같이 videos 라는 변수를 conrtoller를 통해 보내면 다음과 같이 나온다.

```
Here is trending Video!

video 1

5/5
comments.
Posted
59 views.

video 2

5/5
comments.
Posted
59 views.

video 3

5/5
comments.
Posted
59 views.
```

이렇게 다음에도 재사용 할 수 있는 mixin 파일을 만들었다.

## locals object

express와 pug 는 response object중 하나인 locals object에 접근할 수 있다. `res.locals.objectName`

이 방법을 이용해 data 를 template 에 공유 가능하다.

express에서 locals object를 보내주는 middleware를 만들어서 pug에 변수를 전역적으로 보낼 수 있게 되는 것!

```
ex)
app.use((req, res, next) => {
    res.locals.objectName = "hello";
    res.sessionStore.all((error, sessions) => {
        next();
    })
})
```

중요한 점은 무조건 locals object 안에 있어야 한다는 것이다. 이건 pug에서 `#{objectName}` 으로 불러올 수 있다.
