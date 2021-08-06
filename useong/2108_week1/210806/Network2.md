## 소켓 시스템 (1)

### 주소의 표현

**소켓의 주소**

1. 프로토콜의 종류에 따라 사용하는 주소 체계가 다름

- AF_UNIX: 한 호스트에 존재하는 프로세스 사이의 통신을 지원
- AF_INET: 다른 호스트에 존재하는 프로세스 사이의 통신을 지원

2. 유닉스 주소 체계

- AF_UNIX: 한 호스트에 존재하는 프로세스 사이의 통신을 지원

3. 인터넷 주소 체계

- AF_INET: 다른 호스트에 존재하는 프로세스 사이의 통신을 지원
- 주소 체계는 32비트 IP 주소와 16 비트 포트 번호를 기반으로 함

4. 통합 주소 체계

- 프로토콜마다 주소 체계를 지원하는 문법
- 문법 구조상 하나의 함수에서 다양한 주소 체계를 지원하는데 어려움이 있음
- 따라서 모든 주소 체계를 수용할 수 있는 공통 주소 체계가 필요함
- 사용 예

  - addr: 주소 공간 자체는 해당 프로토콜의 주소 체계로 선언 (인터넷 주소 체계)

  - bind(): 함수의 두 번째 매개 변수는 문법적으로 공통 주소 체계만 수용

**소켓 서비스**

소켓 함수

1. s = socket(int domain, int type, int protocol)

- 매개 변수로 지정된 유형을 지원하는 소켓을 생성
- 생성된 소켓을 가리키는 파일 디스크립터를 리턴

2. bind (int s, struct sockaddr _ name, socken_t _ namelen)

- s가 가리키는 소켓에 소켓 주소를 부여함
- name: 소켓 주소

3. listen (int s, int backlog)

- 소켓을 활성화 시킴

4. accept(int s, struct sockaddr _ addr, socken_t _ addrlen

- 클라이언트/서버 환경에서 서버가 대기하는 역할을 함
- 클라이언트의 connect() 함수와 만나면 소켓 연결을 설정함

5. connect (int s, struct sockaddr _ name, socken_t _ namelen)

- 클라이언트/서버 환경에서 클라이언트의 연결 설정 요청을 수행
- 서버의 accept() 함수와 만나면 소켓 연결을 설정

6. send (int s, void \* msg, size_t len, int flags)

- 연결이 설정된 소켓에 데이터를 송신
- 전송 데이터는 msg가 가리킴

7. recv(int s, void \* buf, size_t inf flags)

- 연결이 설정된 소켓에서 데이터를 수신
- 수신 데이터는 buf가 가리키는 공간에 저장됨

### 시스템 콜

**socket() 함수**

- 소켓을 생성하며, 생성된 소켓의 디스크립터를 반환

socket() 함수 사용법

1. 문법

```jsx
# include <sys/types.h>
# include <sys/socket.h>
int socket(int domain, int type, int protocol)
```

2. 설명

- domain: 사용할 도메인을 지정
- type: 서비스 유형을 지정
- protocol: 보통 0으로 지정

3. 예제

- sd = socket(AF_UNIX, SOCK_STREAM, 0);

⇒ 유닉스 도메인 연결형 서비스

- sd = socket(AF_INET, SOCK_DGRAM, 0);

⇒ 인터넷 도메인 비 연결형 서비스

**bind() 함수**

- 생성된 소켓에 주소를 부여

bind() 함수 사용법

1. 문법

```jsx
# include <sys/types.h>
# include <sys/socket.h>
int bind(int s, const struct sockaddr * name, socklen_t * namelen);
```

2. 설명

- s: socket() 함수가 리턴한 디스크립터
- name: 바인트할 소켓 주소를 표기
- namelen: name에 보관된 주소 공간의 크기

3. 주소 변환

- 컴퓨터마다 정수형 데이터를 처리하는 방법이 다를 수 있다
- 개별 호스트 ⇒ 네트워크 변환: htonl(), htons()
- 네트워크 ⇒ 개별호스트 변환: ntohl(), ntons()

**listen() 함수**

- 소켓에서 대기할 수 있는 연결 요청의 개수를 지정

listen() 함수 사용법

1. 문법

```jsx
# include <sys/types.h>
# include <sys/socket.h>
int listen(int s, int backlog);
```

2. 설명

- s: socket() 함수가 생성한 연결형 서비스용 소켓
- backlog: 일반적인 환경에서 5로 지정

**accept() 함수**

- 서버 프로그램에서 클라이언트의 연결 요청을 대기

accept() 함수 사용법

1. 문법

```jsx
# include <sys/types.h>
# include <sys/socket.h>
int accept(int s, struct sockaddr * addr, socklen_t * addrlen);
```

2. 설명

- s: socket() 함수가 생성한 연결형 서비스용 소켓
- addr: 연결을 요청한 클라이언트의 소켓 주소를 반환

**connet() 함수**

- 클라이언트 프로그램에서 서버에게 연결 요청을 수행

connet() 함수 사용법

1. 문법

```jsx
# include <sys/types.h>
# include <sys/socket.h>
int connet(int s, const struct sockaddr * name, socklen_t * namelen);
```

2. 설명

- s: socket() 함수가 생성한 연결형 서비스용 소켓
- name: 연결하고자 하는 서버의 소켓 주소
