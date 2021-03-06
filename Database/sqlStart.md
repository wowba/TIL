## 목차

# 1장 데이터베이스와 SQL

## 1강 데이터베이스

1. 데이터의 정의

- 데이터 : 컴퓨터 안에 기록되어 있는 숫자
- 데이터베이스 : 데이터의 집합, 혹은 컴퓨터 안에 기록된 모든 것.

2. DB와 DBMS

- DB : DataBase의 약자. 저장 장치내에 정리된 데이터의 집합.
- DBMS : DB를 효율적으로 관리하는 소프트웨어, 즉 데이터베이스 관리 시스템  
  (Database Management System)

- DBMS의 장점
  - 생산성  
    기본 기능을 DBMS가 제공, 생산성 증가.
  - 기능성  
    데이터베이스를 다루는 기능을 많이 제공함.  
    또한 유저가 데이터베이스 관리 기능을 확장 가능해 유연한 개발 가능
  - 신뢰성  
    많은 요청에 대응할 수 있게 하드웨어를 여러대로 구성,  
    신뢰성을 높이면서 성능 향상 가능.
    이를 소프트웨어를 통해 확장성, 부하 분산을 구현한다.

3. 데이터베이스 언어, SQL

- SQL  
  DBMS를 사용하면 데이터베이스를 관리할 수 있으며,  
  이 DBMS를 사용하는데 필요한 것이 SQL.  
  SQL은 그중 관계형 데이터베스 관리 시스템(RDBMS)을 조작할 때 사용한다.

- 명령어의 종류
  - DML : 데이터 조작
  - DDL : 데이터 정의
  - DCL : 데이터베이스 제어

---

## 2강 다양한 데이터베이스

1. 데이터베이스 종류

- 계층형 데이터베이스 : 폴더와 파일등의 계층 구조로 저장하는 데이터베이스.
- 관계형 데이터베이스 : 행과 열을 가지는 표 형식 데이터를 저장하는 데이터베이스.
- 객체지향 데이터베이스 : 객체 그대로를 데이터베이스에 저장하는 데이터베이스.
- XML 데이터베이스 : HTML과 유사한 XML형식으로 데이터를 저장하는 데이터베이스
- 키, 밸류 스토어(KVS) : 단순히 키-밸류만 저장하는 데이터베이스

여기서 관계형 데이터베이스만 SQL이 사용 가능하다!

2. RDBMS 사용 시스템  
   현재 RDBMS는 대부분의 시스템에서 사용하고 있다.

3. SQL의 방언과 표준화  
   다양한 데이터베이스 제품이 있는 만큼, 특정 명령어가 다른것을 의미하기도 한다.  
   그렇기에 방언 대신 표준 SQL을 사용하는것이 좋다.

---

## 3강 데이터베이스 서버

RDBMS는 복수의 클라이언트가 보내오는 요청에 응답할 수 있도록  
클라이언트 / 서버 모델로 동작한다.

1. 클라이언트/서버 모델

- 클라이언트 : 사용자 조작에 따라 요청 전달
- 서버 : 해당 요청을 처리

  웹 시스템은 브라우저와 웹 서버로 구성되는 클라이언트/서버 모델의 시스템을 말합니다.  
   보통 클라이언트에서 요청이 들어오면, 서버에서는 응답을 내려줍니다.

  RDBMS도 클라이언트/서버 모델로 시스템이 구성됩니다.
  하지만, 해당 데이터베이스를 이용하기 위한 사용자 인증이 필요합니다.

  RDBMS에 접속하면 SQL 명령을 보낼 수 있습니다.
  일단 한 번 데이터베이스에 접속하면, SQL 명령을 몇번이고 보낼 수 있습니다.

2. 웹 애플리케이션의 구조  
   웹 애플리케이션은 일반적으로

- 웹 서버
- 데이터베이스 서버  
  의 조합으로 이루어집니다.

  정적인 HTML만으로 웹 사이트가 구성되어 있다면 웹 서버만으로 충분하지만,
  동적으로 HTML을 생성하려면 제어용 프로그램이 필요합니다.
  웹 서버에는 CGI 라 불리는 동적 콘텐츠를 위한 확장 방식이 있으며,
  이 프로그램을 이용해 프로그램과 웹 서버간 연동, 통신하여 처리합니다.

  이때, 실제 데이터베이스에 접속하는 것은 프로그래밍 언어로 만든 CGI 프로그램이다.

  데이터베이스 서버를 사용하기 위해선 접속 이후 SQL 명령을 전달하고,
  실행 결과는 클라이언트로 돌아갑니다.
  이때, 웹 서버의 CGI 프로그램이 데이터베이스의 클라이언트가 됩니다.

3. MySQL 서버와 mysql 클라이언트

MySQL 서비스가 데이터베이스 서버가 되고, mysql 커맨드가 클라이언트가 되는것.  
mysql 클라이언트에서 SQL로 명령을 내려 MySQL 서비스를 받는 것이다.

---

# 2장 테이블에서 데이터 검색

## 4강 Hello World 실행하기

mysql 클라이언트에 다음과 같이 입력한다.

```sql
SELECT * FROM TableName;
```

SELECT는 DML에 속하는 명령어로, 데이터베이스의 데이터를 읽어온다.  
SELECT 명령은 '질의' 혹은 '쿼리' 라 불리기도 한다.

\* 은 모든 열을 의미하는 메타문자이다.

FROM은 처리 대상 테이블을 지정하는 키워드이다.  
즉, SELECT \* / FROM TableName 두개의 구로 나눌 수 있다.  
여기서 SELECT, FROM은 예약어 라고 한다. 예약어와 동일한 이름의 테이블은 만들 수 없다.  
(예약어와 데이터베이스 객체명은 소대문자를 가리지 않는다.)

---

## 5강 테이블 구조 참조하기

```sql
DESC Tablename
```

DESC 명령으로 테이블에 어떤 열이 정의되어 있는지 알 수 있다.

---

## 6강 검색 조건 지정하기

행을 선택할 때는 WHERE, 열을 선택할 때는 SELECT 구를 사용합니다.

```sql
SELECT 열1, 열2 FROM 테이블명 WHERE 조건식
```

WHERE 구의 조건에 일치하는 행만 결과로 나옵니다.

- WHERE name = '홍길동'
- WHERE id = 3

또한 WHERE은 NULL 값으로도 검색할 수 있는데, 이때 = 가 아닌 IS 를 사용해야 합니다.

- WHERE number IS NULL

---

## 7강 조건 조합하기

```sql
조건식1 AND 조건식2
조건식1 OR 조건식2
NOT (조건식)
```

논리 연산자를 통해 다양한 조건을 생성해서 검색할 수 있다.

---

## 8강 패턴 매칭에 의한 검색

1. LIKE 로 패턴 매칭하기

```sql
열 LIKE 패턴
```

```
패턴을 정의할 때 "%", "_" 를 사용할 수 있다.
```

= 연산자로 검색하는 경우 데이터 값이 완전히 동일한지 비교한다.  
하지만 특정 문자나 문자열이 포함되어 있는지 확인하는 방법은  
패턴 매칭 또는 부분 검색 이라고 한다.

만약 "SQL" 이라는 텍스트를 찾을 경우

- 전방일치 'SQL%' / 무조건 텍스트의 맨 앞부터 비교한다.
- 중간일치 '%SQL%' / 텍스트가 어디 있든 상관 X
- 후방일치 '%SQL' / 무조건 텍스트의 맨 뒤부터 비교한다.

2. LIKE로 % 검색하기

%를 검색해야 할 경우에는 이스케이프, 즉 " \\ " 를 앞에 입력하면 된다.

```sql
LIKE '%\%%'
```

3. 문자열 상수의 이스케이프

```sql
It's -> 'It''s' / ' -> ''''
```

" ' " 을 문자열 상수 안에 포함할 경우에는 '를 2개 연속 입력한다!!

---

# 3장 정렬과 연산

## 9강 정렬 - ORDER BY

```sql
SELECT 열명 FROM 테이블명 WHERE 조건식 ORDER BY 열명 ASC / DESC
```

내림차순, 오름차순 비교할 때 수치형과 문자열형의 차이를 주의하자!!

## 10강 복수의 열을 지정해 정렬하기

```sql
SELECT 열명 FROM 테이블명 WHERE 조건식 ORDER BY 열명1, 열명2...
```

이 경우 만약 NULL 값이 저장되어 있다면 다음과 같이 표시된다.

- 오름차순에선 가장 먼저
- 내림차순에선 가장 나중에

---

## 11강 결과 행 제한하기

1. 행수 제한

SELECT 명령으로는 결과값 반환 행의 개수를 제한할 수 있습니다.

```sql
SELECT 열명 FROM 테이블명 LIMIT 행수 [OFFSET 시작행]
```

```sql
LIMIT 구 // MySQL과 PostgreSQL 에서 사용 가능
SELECT 열명 FROM 테이블명 WHERE 조건식 ORDER BY 열명 LIMIT 행수
```

2. 오프셋 지정

```sql
SELECT 열명 FROM 테이블명 LIMIT 행수 OFFSET 시작지점
```

---

## 12강 수치 연산

```
산술 연산
+ - * / % MOD
```

1. SELECT구를 이용해 연산하기  
   열의 이름을 이용해 계산식을 작성할 수 있다. (price, quantity)

```sql
EX ) SELECT *, price * quantity FROM example;
```

2. 열의 별명

```sql
EX ) SELECT *, price * quantity AS amount FROM example;
```

계산을 통해 생긴 열의 이름을 AS 를 사용해 지정할 수 있다.

3. WHERE 구에서 연산하기

```sql
EX ) SELECT *, price * quantity AS amount FROM example
    WHERE price * quantity >= 2000;
```

여기서 amount가 아닌 price \* quantity로 했는데,  
그 이유는 구 처리 순서가 WHERE -> SELECT 이기 때문이다.  
즉, SELECT 내에서 지정한 별명은 WHERE에서 쓸 수 없다.

4. NULL 연산

SQL은 NULL값에 어떤 연산을 해도 결과는 NULL로 나온다.

5. ORDER BY 구에서 연산하기

```sql
EX ) SELECT *, price * quantity AS amount FROM example
    ORDER BY price * quantity DESC;
```

ORDER BY 구는 SELECT 후에 처리되기 때문에 별명 사용이 가능합니다.

```sql
EX ) SELECT *, price * quantity AS amount FROM example
    ORDER BY amount DESC;
```

처리 순서는 WHERE -> SELECT -> ORDER BY 입니다.

6. ROUND 함수

단위가 소수점을 가질때 반올림을 하려면 ROUND 함수를 쓸 수 있습니다.

```sql
EX ) SELECT amount, ROUND(amount) FROM example;
```

Round 함수는 기본적으로 소수점 첫째 자리를 기준으로 반올림 하지만,  
인수를 지정한 경우 해당 지점을 기준으로 반올림 합니다.

```sql
EX ) SELECT amount, ROUND(amount, 1) FROM example;
```

---

## 13강 문자열 연산

```
문자열 연산자 종류
+, ||, CONCAT, SUBSTRING, TRIM, CHARACTER_LENGTH
```

1. 문자열 결합

```
문자열 결합 예시.
'ABC' || '1234' -> 'ABC1234'
```

- SQL Server는 +
- Oracle, DB2, postgreSQL은 ||
- MySQL은 CONCAT을 이용해 문자열을 결합니다.

```sql
EX ) SELECT CONCAT(quantity, unit) AS total FROM example;
```

결합시 생성되는 열은 AS를 사용해 별명을 만들 수 있다.

2. SUBSTRING 함수  
   SUBSTRING 함수는 문자열의 일부분을 계싼해서 반환해주는 함수입니다.
   ```
   SUBSTRING('20110123', 1, 4) -> '2011'
   ```
3. TRIM 함수
   TRIM 함수는 문자열의 앞뒤로 여분의 공간이 있으면 이를 제거합니다.
   ```
   TRIM('ABC   ') -> 'ABC'
   ```
4. CHARACTER_LENGTH 함수  
   CHARACTER_LENGTH 함수는 문자열의 길이를 계산해 돌려줍니다.  
   문자열 데이터의 길이는 사용하는 문자세트에 따라 다른데,  
   UTF-8, EUC-KR 등등이 있습니다.

---

## 14강 날짜 연산

```
CURRENT_TIMESTAMP, CURRENT_DATE, INTERVAL
```

1. SQL에서 날짜  
   날짜시간 데이터를 연산하면 결과값으로

- 날짜시간 유형의 데이터
- 간격을 나타내는 기간형(INTERVAL)  
  의 데이터들을 반환합니다.

  ```sql
  시스템 날짜
  SELECT CURRENT_TIMESTAMP;
  ```

날짜 데이터의 경우 서식을 지정할 수 있습니다.

2. 날짜의 덧셈과 뺄셈  
   날짜시간형 데이터는 기간형 수치데이터와 덧셈 및 뺄셈 가능.

   ```sql
    SELECT CURRENT_DATE + INTERVAL 1 DAY;
   ```

---

## 15강 CASE 문으로 데이터 변환하기

```sql
CASE WHEN 조건식1 THEN 식1
  [ WHEN 조건식2 THEN 식2 ...]
  [ ELSE 식3]
END
```
