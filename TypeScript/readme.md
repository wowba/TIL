# 타입스크립트 설치

1. npm install -g typescript

2. 설치 확인 tsc -v

3. 타입스크립트 파일의 확장자는 ts 이다.

# 트랜스 파일링 실행

1. tsc person -> person.js 파일을 만든다. 이렇게 하면 ES3 버전으로 컴파일 한다.

2. tsc person --target ES2015 -> ES2015 버전 자바스크립트로 컴파일한다.

3. tsc -> 프로젝트 폴더 내의 모든 ts 파일이 트랜스파일링 된다.

# 설정 파일 생성

1. tsc --init -> 타입스크립트 옵션 설정 파일(tsconfig.json)을 생성한다.
