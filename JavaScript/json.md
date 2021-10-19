# .json

json 은 프로그래머가 파일에 정보를 저장하기 위해 만든 방식 중 하나.

json object를 만들기 위해선 중괄호 안에 넣어 만든다.

```
{
    "name" : "lee"
}
```

NodeJS 의 경우 이런 파일의 이름은 package.json 이여야 한다. ( 꼭 소문자 )

## package.json

package.json 파일은 NodeJS 프로젝트를 만들 때 가장 먼저 만들어야 하는 파일이다.

콘솔에서 npm init 을 입력하면 package.json 파일 베이스를 간단하게 만들 수 있다.

```
npm init
```

결과 (예시)

```
{
  "name": "wetube",
  "version": "1.0.0",
  "description": "toy project",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wowba/youtube-clone.git"
  },
  "scripts": {
    "start": "node index.js"
  },
  "author": "Lee",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/wowba/youtube-clone/issues"
  },
  "homepage": "https://github.com/wowba/youtube-clone#readme"
}
```

개발자가 배포한 package를 다른 사람들이 설치하면 "main" 에 적힌 파일을 사용한다.
"name","version" 등은 몇가지는 반드시 필요하지 않다.

## "scripts"

"scripts" 에 적힌건 NPM을 통해서 이 파일을 작동할 수 있는 명령어이다.

```
"scripts": {
    "start": "node index.js"
  }
```

node index.js 는 index.js 라는 파일을 실행시키는 것이고, NPM 에서 start 명령어를 사용할 수 있게 된다.

앞으로 파일을 관리하는 다양한 scripts 명령어를 만들어서 사용하게 된다. 배포, 압축 등등..

```
npm run start.
```

## "dependencies"

npm i 를 통해 package를 설치하면 package.json 파일에 "dependencies" 라는 항목이 추가된다.
이것은 이 package가 필요로 하는 다른 package들을 말한다. 그래서 해당 package를 설치할 경우
해당 package의 "dependencies" 에 있는 다른 package들도 node_modules 폴더에 같이 설치가 된다.

```
"dependencies": {
    "express": "^4.17.1"
  }
```
