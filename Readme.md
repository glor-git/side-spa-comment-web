모듈 구조

    server: 서버 파일
    web: 프론트 파일
        dist: npm run web:build 시 생성되는 웹팩 번들링 파일
        src: 프론트단 컴포넌트 등 리소스
            apis: api아 관련한 유틸 및 fetch함수
            components: 컴포넌트
            pages: routes 별 페이지
            utils: 유틸함수
            app.css: 전역 스타일

실행 방법
1. server 실행
- npm run server:start
2. web 실행
- npm run web:build -> npm run web:start
3. web test 실행
- npm run web:test

web 포트번호: 8080
server 포트번호: 9999

컴파일러: typescript,

번들러: webpack,

스타일: css 모듈,

구현 목록
- 순수 자바스크립트 SPA 구현
  - 뒤로가기, 앞으로 가기 가능
  - /comments에서 새로고침시에는 동작 어려움 (서버 설정 필요)
- 댓글 작성 기능 구현
  - 이름은 1자 이상: 조건 부합시 얼럿 발생
  - 본문은 10자 이상: 조건 부합시 얼럿 발생
- 댓글 리스트 기능 구현
  - 본문과 이름은 특정 글자수 이상일시 ...으로 표현
- 페이징 기능 구현
  - 현재 페이지 확인 기능
  - 이전, 다음 없을 경우 페이지 변경되지 않도록 구현
- comment API 연동