## IP 프로토콜과 IPv6

### 라우팅

**거리 벡터 프로토콜**

- RIP

1. 패킷 구조: 백터 정보를 교환하는 목적으로 사용

**링크 상태 프로토콜**

- 거리 벡터 프로토콜과 반대의 원리로 동작
- 누가: 네트워크에 연결된 모든 라우터간에 라우팅 정보를 교환
- 무엇을: 개별 라우터에서 주변 라우터까지 패킷을 전송하는데 걸리는 거리 정보
- 정보 전달 시점 차이

1. 거리 벡터: 주기적으로 전달
2. 링크 상태: 주변 상황에 변화가 생기는 경우

- 플러딩 방식을 사용해서 정보 전달
- OSPF(Open Shortest Path First) 프로토콜

**외부 라우팅 프로토콜**

- 내부 라우팅 프로토콜

1. 거리 벡터 방식을 사용하는 RIP
2. 링크 상태 방식을 사용하는 OSPF

- 외부 라우팅 프로토콜

1. 경로 벡터 프로토콜: 단순히 연결 가능한지에 대한 정보만 제공

- BGP(Border Gateway Protocol)

1. TCP 프로토콜을 사용

### IP 프로토콜

- 비연결형 서비스를 제공
- 패킷을 분할/병합하는 기능을 수행
- 헤더 체크섬만 제공
- Best Effort 방식의 전송 기능

**IP 헤더**

- 패킷 분할

1. Identification

- 분할되지 않은 패킷: 값을 순차적으로 증가

- 분할된 패킷: 동일한 번호 부여

1. DF(Don't Fragment): 패킷 분할 금지

2. MF(More Fragment)

- 분할된 패킷의 처음과 중간: 1

- 분할된 패킷의 마지막: 0

1. Fragment Offset

- 분할되기 전 데이터에서의 상대적인 위치 정보

- 8 바이트의 배수로 지정

- 주소 관련 필드

1. Source Address: 송신 호스트의 IP 주소
2. Destination Address: 수신 호스트의 IP 주소

- 기타 필드

1. Version Number: 버전 4 (IPv4)
2. Header Length: 헤더 길이를 32 비트 단위로 표시
3. Packet Length: 헤더를 포함한 패킷의 전체 길이
4. Time To Live(TTL)

- 패킷의 생존 시간

- 라우터를 거칠 때마다 1씩 감소되며, 0이 되면 네트워크에서 강제로 제거

1. Transport Protocol: 상위 계층 프로토콜
2. Header Checksum: 헤더 오류 검출
3. Options
4. Padding

**패킷의 분할**

- 분할의 예

1. IP 헤더를 제외한 전송 데이터의 크기: 380 바이트
2. 패킷의 최대 크기: 128 바이트

### IPv6

**IPv6 헤더 형식**

- 총 40 바이트 중 32 바이트를 주소 공간으로 사용
- 필요 시 기본 헤더 뒤에 여러 개의 확장 헤더를 지원

확장 헤더의 종류

- Hop-by-Hop Options Header: hop-by-hop 옵션 처리를 지원

1. Jumbo 페이로드 옵션: 데이터의 크기가 65535 바이트보다 클 때 사용
2. 라우터 긴급 옵션: 라우터에 전송 대역 예약 같은 특정 정보를 제공

- Routing Header

1. IPv4의 소스 라우팅과 유사한 기능
2. 패킷이 Routing Header에 지정된 특정 노드를 경유하여 전송됨

- Fragment Header: 패킷 분할과 관련된 정보를 포함
- Destination Options Header: 수신 호스트가 확인할 수 있는 옵션 정보
- Authentication Header: 패킷 인증 관련 기능
- Encapsulating Security Payload Header: 프라이버시 기능

우선순위

- Priority 필드: 특정 패킷의 우선 순위를 상향
- 혼잡 제어 유무에 따른 처리

  - 혼잡 제어 기능이 없으면 우선 순위를 8 단계로 구분하여 처리

  - 혼잡 제어 기능이 있으면 인터넷 제어 트래픽, 대화식 트래픽, 대용량 전송 트래픽, 데이터 트래픽, 필터 트래픽 등으로 구분하여 처리

- 흐름 제어

1. IPv4에서는 패킷 중개 시 동일한 기준을 적용
2. Flow Label 필드: 실시간 서비스가 필요한 응용 환경에서 사용
3. 필드를 지원하지 않는 호스트 혹은 라우터에서의 처리

- 패킷 생성시 0으로 지정

- 패킷 중개시 현재 값 유지

- 패킷 수신시 값 무시

1. 0이 아닌 동일번호 패킷들은 중개 과정을 간단히 처리할 수 있음

기타 필드

- Version Number: 6으로 지정
- Payload Length: 헤더를 제외한 패킷의 크기
- Next Header: 기본 헤더 다음에 위치하는 헤더의 유형

  - IPv6의 확장 헤더

  - 상위 계층인 TCP 혹은 UDP 헤더

- Hop Limit: IPv4의 Time To Live 필드와 동일한 역할을 수행
- Source Address / Destination Address: IPv6 주소

IPv6 주소

- 128 비트로 확장
- 주소 표현

1. 16 비트의 숫자 8개를 콜론으로 구분
