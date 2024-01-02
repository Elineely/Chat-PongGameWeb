# 💬Chat & Game 웹 서비스 / Chat&PongGame
<p align="center">
  <img width="1471" alt="스크린샷 2024-01-02 오후 12 05 46" src="https://github.com/Elineely/Chat-PongGameWeb/assets/80635378/8ff40211-41d3-4849-b151-544b9c93d181">
  <img width="1464" alt="스크린샷 2024-01-02 오후 12 30 25" src="https://github.com/Elineely/Chat-PongGameWeb/assets/80635378/ebf5dac1-fad1-44e4-baee-8e113752b36c">
  <img width="1479" alt="스크린샷 2024-01-02 오후 12 30 46" src="https://github.com/Elineely/Chat-PongGameWeb/assets/80635378/9c9a97d5-c94a-434a-a606-764d9d5e00d3">
  <img width="1485" alt="스크린샷 2024-01-02 오후 12 31 18" src="https://github.com/Elineely/Chat-PongGameWeb/assets/80635378/d7240c36-5dd6-4bef-9fc5-514096d147d0">
</p>


Chat&PongGame은 nestjs, nextjs 프레임 워크를 사용해서 만든 웹 서비스입니다.
사용자는 "42 계정(https://intra.42.fr)" 으로 서비스에 가입 할 수 있으며, 실제 계정 및 권한이 필요합니다.

## ⏲️개발 기간
2023.08.15 ~ 2023.09.27 (약 1개월)

## 👩🏻‍💻개발 멤버 구성
### back-end
- 이수린 : docker 개발환경 구축, 채팅 도메인 서버 개발
- 곽진솔 : 게임 도메인 개발
- 최재영 : login, porfile 도메인 서버 개발 
### front-end
- 김호권 : 프로필, 게임 클라이언트 페이지 개발
- 이지우 : 채팅 클라이언트 페이지 개발


## ⚙️기능 및 특징
- 프로필 기능(게임 전적, 랭크 확인 가능), 친구 추가 및 차단 가능
- 2FA 로그인 설정 가능-> mail 인증
- 사용자의 상태 확인 가능(온라인, 오프라인, 채팅 중, 게임 중)
- 단체 채팅 채널, DM(개인 메시지) 채널 관리 가능
- 차단 친구 메시지 Block 지원 -> 차단 해지시 이전에 받은 메시지 확인 가능
- 단체 채팅 시 owner, admin 기능 지원. 각 권한 내 사용자에 대해 kick, ban, mute(3분) 가능
- 채팅창에서 친선 게임 초대 가능
- 채팅 웹소켓을 활용한 실시간 알림 가능
- 랜덤 게임 및 다양한 모드의 퐁 게임 지원

## 🦿작동방법
1. repository를 git clone 합니다.
```
git clone https://github.com/Elineely/Chat-PongGameWeb.git
```
2. clone 한 폴더에 들어갑니다.
```
cd CreateHTTPServerFromBottom
```
3. makefile을 실행시키면 도커 컨테이너가 띄워지고 서버가 run 됩니다.
```
make
```

### 선행 조건
1. 레포지토리 내부 3개의 .env 파일에 사용자의 api key 정보를 수정해야합니다.
2. make 명령 전, 도커가 실행중이어야 합니다.
