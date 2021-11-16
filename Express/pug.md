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

## [include](https://pugjs.org/language/includes.html)

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
