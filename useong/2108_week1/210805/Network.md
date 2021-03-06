## 네임 서버와 DNS 프로토콜, 전자 메일

### 네임 서버

**요청의 처리**

- 호스트 A가 호스트 B의 정보를 원할 때, 호스트 A, B가 같은 도메인에 위치하면 이 도메인의 네임 서버가 인증 데이터를 회신
- 다른 도메인에 위치하면 인근 네임 서버에게 요청 호스트(A)를 중개해 줌
- 인근 네임 서버를 찾는 작업은 인증 정보를 찾을 때까지 반복됨
- 질의 요청이 처리되는 과정

  - 인증 데이터가 반드시 필요한지 명시, 혹은 캐시

  - 해석기는 질의 요청을 재귀적으로 처리하는 명시, 혹은 비재귀적

- 재귀적 요청

  - 해석기가 최초로 접속을 시도한 네임 서버가 질의 요청을 추적, 관리

  - 재귀적 요청을 받은 네임 서버가 결과적으로 해석기 역할을 수행

  - 비재귀적: 요청을 받은 네임 서버가 다른 네임 서버의 포인터 정보를 회신

### DNS 프로토콜

**DNS 메시지**

- DNS 데이터를 요청하거나 응답할 때 DNS 메시지를 전송
- DNS 메시지

1. Header: 헤더 값에 따라 다른 필드의 사용 여부 결정
2. Question: 질의 메시지, 응답 메시지 모두 사용, 네임 서버에 요청하는 문의 사항
3. Answer
4. Authority
5. Additional: 기타 정보

- DNS 헤더

1. Identification: 요청과 응답이 연관 관계를 표시
2. QR: 질의 메시지, 응답 메시지 구분
3. OPCODE: 질의나 응답의 종류
4. AA (Autheritative Answer): 인증 권한이 있는 네임 서버
5. TC (Truncated): UDP 최대 크기 초과 여부
6. RD (Recursion Desired): 재귀적 응답
7. RA (Recursion Avaliable): 반복 응답 가능 여부
8. RCODE: 응답 오류

- UDP의 제한

1. 해석기와 네임 서버는 UDP 53번 포트로 DNS 메시지 전송
2. UDP 프로토콜의 최대 전송 크기: 512 바이트
3. TCP 53번 포트를 사용하는 경우

- 미리 512 바이트보다 크다는 것을 인지하는 경우에는 처음부터 TCP 사용

- 사전에 인지하지 못하는 경우는 TC = 1 로 지정되므로, TCP 연결을 사용

### 전자 메일 사용자 환경

- 메일 편집
- 메일 내용 읽기
- 수신 메일 관리: 메일 박스
- 전달 여부 통지

  - 메일 시스템의 하부 기능에 의한 구현: 메일 오류의 통지 등

  - 메일 시스템 자체 기능에 의한 구현: 옵션으로 수신 여부 확인

- 메일 전달

**메일 처리**

1. 전자 메일 주소: 로그인 이름@<메일 서버 이름>

**메일 형식**

- 메일 내용은 ASCII 코드 기반의 텍스트 형식으로 정의됨
- 멀티미디어 데이터를 수용하기 위한 기능 확장

**MIME (Multipurpose Internet Mail Extensions)**

- 실행 파일, 음성, 영상 등 멀티미디어 데이터를 수용하기 위한 기능 확장

1. MIME 구조

- 메일 송신 전에 비-ASCII 데이터를 ASCII 데이터로 변환
- 메일 수신 전에 ASCII를 비-ASCII 데이터로 변환

### 전자 메일 시스템 구조

- 사용자 환경: 메일 응용 프로그램인 사용자 에이전트 (UA)
- 네트워크 환경: 메일을 중개하고 송수신하는 메일 전송 에이전트 (MTA, Mail Transfer Agent)

**메일 전송 에이전트**

- MTA 정보

1. 받는 메일 서버: POP(Post Office Protocol)
2. 보내는 메일 서버: SMTP(Simple Mail Transfer Protocol)

### SMTP (Simple Mail Transfer Protocol)

- 전자 메일 전송은 SMTP 프로토콜을 지원하는 호스트 사이에 이루어짐
- SMTP 명령과 그에 따른 SMTP 응답
- 메일을 보내는 과정

  - SMTP 클라이언트와 SMTP 서버 사이의 TCP 연결을 설정하는 단계

  - SMTP 서버에 메일을 보내는 데이터 전송 단계

  - 메일 전송을 완료하고 TCP 연결을 종료하는 단계

**연결 설정**

- Well-known 포트: TCP 25번
- 명령과 응답: TCP 연결이 설정되면 SMTP세션 연결 설정

**데이터 전송**

- 명령과 응답
- 메일 주소 확인 과정

1. Mail From
2. RCPT TO

- 헤더 정보 전송 과정
