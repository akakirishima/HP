---
id: "ai-agent-challenge-2026"
locale: "ko"
title: "AI Agent Challenge 2026 참가 후기 — 첫 환경 구축부터 회고까지"
excerpt: "Claude Code와 MCP를 처음 실전에서 사용하며 겪은 환경 구축 이슈, 채점 흐름, 구현 전략의 배움을 정리한 기록."
date: "2026-02-16"
tags: ["AI","Coding Challenge","Claude","MCP","Docker","GitHub Actions"]
order: 33
image: "/og/blog-designing-for-ai.svg"
---
【소개】

2026년 2월에 열린 AI Agent Challenge 2026에 참가했습니다. Claude Code와 MCP를 처음 실전에서 사용했고, 환경 구축 자체가 큰 학습이었습니다.

【대회 진행 방식】

・템플릿 저장소에서 개인 저장소 생성

・로컬에서 Docker / Make로 환경 실행

・scoreboard 저장소에 등록 후 Issue에서 /score 실행

・GitHub Actions 채점 결과 확인

【환경 구축에서 어려웠던 점】

처음에 claude 명령어가 없어 npm install -g @anthropic-ai/claude-code 로 설치했습니다.

그다음 claude 로 로그인하고 실행 환경을 정리했습니다.

또한 Cannot connect to the Docker daemon at unix:///.../docker.sock 오류를 만났고, Docker Desktop을 실행해 해결했습니다.

【/score까지의 흐름】

・make up 실행

・curl localhost:8080 과 curl localhost:3100 으로 기동 확인

・채점용 Issue 생성 후 본문에 /score 입력

・CI 채점 결과 확인

로컬에서 동작해도 CI에서 /score를 실행하지 않으면 점수에 반영되지 않는 점이 핵심이었습니다.

【회고: C 언어로 도전하며 배운 점】

저수준 이해를 위해 C를 선택했지만, 구현 속도는 Python이 확실히 유리했습니다.

JWT는 C에서 구현과 연동 부담이 컸고, Python은 PyJWT로 빠르게 처리할 수 있었습니다.

bcrypt는 C에서 의존성 관리 부담이 컸고, Python은 bcrypt 라이브러리로 빠르게 구현할 수 있었습니다.

JSON은 C에서 수동 파싱 성격이 강했고, Python은 표준 json 모듈로 정리가 쉬웠습니다.

HTTP는 C에서 직접 구현 비중이 높았고, Python은 FastAPI로 빠르게 시작할 수 있었습니다.

【결과와 다음 전략】

최종 결과는 55위, 1:24:12였습니다.

다음에는 Python으로 먼저 점수를 확보하고, make up까지의 셋업 자동화와 조기 /score 검증을 우선하겠습니다.

【관련 링크】

공식 이벤트: https://cyberagent.connpass.com/event/

팟캐스트: https://open.spotify.com/episode/27GV87BnFHQJcxS2bZqZE7?si=9pAsIzb6jOncDtg
