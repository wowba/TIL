# Babel / Nodemon

두개를 같이 활용하면 정말 편리하게 NodeJS 개발환경을 구현 가능하다!

## Babel

Babel 은 자바스크립트 컴파일러이다.

NodeJS 는 자바스크립트 언어를 이해하지만, 최근에 추가된 코드들은 이해하지 못한다.

Babel 을 사용하면 사용자가 작성한 최신 자바스크립트를 NodeJS가 이해할 수 있도록 컴파일(변환) 해준다.

(물론 자바스크립트 말고도 다양한 언어가 나와있다.)

자세한 설치방법은 [홈페이지](https://babeljs.io/)에 나온 대로 따라가면 된다.

Babel을 사용하려면 다음과 같은 코드를 JavaScript에 입력해야 한다

```
require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});
```

"code" 부분에 transform 하고싶은 코드를 넣으면 최신 JavaScript 가 NodeJS 가 이해할 수 있는 형태로 바뀌게 된다.

하지만 JavaScript 파일에서 직접 코드를 입력하지 않고 package.json 에 파일 시작시 Babel로 컴파일 하는 "scripts" 를 추가할 수 있다.
설치 후 package.json 파일에서 다음과 같이 입력하면

```
{
  "scripts": {
    "dev": "babel-node index.js"
  }
}
```

```
npm run dev
```

index.js 파일을 굳이 코드를 입력해서 변환시킬 필요가 없다. 파일을 실행할 때 마다 변환된다.

## Nodemon

매번 컴파일 하기 위해

```
npm run dev
```

위의 코드를 입력하는건 귀찮다.

하지만 파일이 변경될 때 마다 알아서 실행시켜준다면 매우 편할것이고, Nodemon은 기꺼이 우리를 위해 해준다.

Nodemon 설치하기

```
npm i nodemon --save-dev
```

[Babel을 Nodemon으로 실행하기](https://babeljs.io/setup#installation)

사용하기 위해선 "scripts"를 다음과 같이 바꿔준다

```
"scripts": {
    "dev": "nodemon --exec babel-node index.js"
  },
```

이렇게 하면 처음 한번만

```
npm run dev
```

다음과 같은 코드를 입력 후 파일을 저장한다면 콘솔이 바로 종료되지 않고

Nodemon이 파일이 바뀐걸 확인한 후 자동으로 재실행하여 변환을 해준다. 정말 편리하다!
