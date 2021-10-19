# NPM ( Node Package Manager )

NPM은 자바스크립트 언어를 위한 package 매니저이다. 보통 NodeJS를 설치하면 같이 설치되어 있다.

NPM은 NodeJS와 상호작용을 가능하게 해주며 NodeJS package를 다운받을 수 있고 콘솔창에서 npm 을 입력해 확인할 수 있다. (거의 유사한 yarn 이라는 package 매니저도 존재한다.)

많은 개발자들이 좋은 package들을 만들어서 공유해주고, 우리는 NPM을 통해 그걸 쉽게 다운받을 수 있다.

Express, Pug 등 유용한 package들이 많다.

## package 설치

```
npm install express / npm i express
```

두 코드 다 express 라는 package를 설치하는 코드이다.
npm i(install) 뒤에 설치하고 싶은 package 의 이름을 적으면 된다.
중요한 것은 package를 설치할때 package.json 파일은 닫아놓는 것이 좋다. 버그가 날 수 있음.

이렇게 package를 설치하면 해당 폴더에 node_modules 라는 폴더가 생기는데,
이 폴더에는 npm으로 설치한 모든 package가 저장된다.

설치한 package의 폴더에서 package.json 파일을 살펴보면 "dependencies" 라는 항목이 있는데,
이것은 이 package가 필요로 하는 다른 package들을 말한다. 그래서 해당 package를 설치할 경우
"dependencies" 에 있는 다른 package들도 같이 설치가 된다.

또한 원래 프로젝트의 package.json 파일에 들어가면 "dependencies" 항목이 추가되어있고 설치한 package의 이름이 적혀있다.

만약 술마시고 node_modules 폴더를 지운다던가 하면 간단하게 다음 코드로 해결이 가능하다

```
npm i / npm install
```

해당 코드는 package.json에 있는 "dependencies" 항목의 package 들을 알아서 설치해준다. NPM 은 굉장히 똑똑하다.

## package-lock.json

package-lock.json 파일은 package를 설치하면 자동으로 생기는데,
이 파일은 설치한 package들을 안전하게 관리하고 package가 수정됐는지 확인해준다.

만약 프로젝트를 공유하기 위해 "main" 파일과 package.json 만 보내고 npm i 로 나머지 package를 설치한다면 버전이 맞지 않을 수 있다.
하지만 package-lock.json 파일도 같이 보내면 정확하게 똑같은 version을 설치하기에 에러가 일어날 확률이 매우 낮다.
