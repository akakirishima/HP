---
id: "ai-agent-challenge-2026"
locale: "ja"
title: "AI Agent Challenge 2026 に参加した話 — 初体験の環境構築から感想戦まで"
excerpt: "Claude Code と MCP の初実戦で、環境構築の壁、採点フロー、実装戦略の学びを整理した記録。"
date: "2026-02-16"
tags: ["AI","Coding Challenge","Claude","MCP","Docker","GitHub Actions"]
order: 33
image: "/og/blog-designing-for-ai.svg"
---
【はじめに】

2026年2月に開催された AI Agent Challenge 2026 に参加しました。Claude Code と MCP を触るのは初めてで、環境構築から学びが多い大会でした。

【大会の仕組み】

・テンプレートリポジトリから自分のリポジトリを作成

・ローカルで Docker / Make で環境を起動

・scoreboard リポジトリに登録して Issue で /score を実行

・GitHub Actions で採点結果を受け取る

【環境構築で苦労した点】

claude コマンドが見つからず、npm install -g @anthropic-ai/claude-code を実行してセットアップしました。

その後は claude でログインし、実行環境を整えました。

Docker デーモン未起動の状態で Cannot connect to the Docker daemon at unix:///.../docker.sock が出て、Docker Desktop 起動で解消しました。

【/score までの流れ】

・make up を実行

・curl localhost:8080 と curl localhost:3100 で起動確認

・採点用 Issue を作成して本文に /score を投稿

・CI 上で採点が走り、結果が返る

ローカルで動作しても /score を実行しないと採点に反映されない点が重要でした。

【感想戦：C 言語で挑んだ学び】

C を選んだ理由は低レイヤー理解を深めたかったからですが、実装速度では Python が有利だと実感しました。

JWT は C だと実装や連携が重く、Python は PyJWT ですぐ扱えました。

bcrypt は C だと依存管理の負担が大きく、Python は bcrypt ライブラリで短時間に実装できました。

JSON は C だと手動パース寄りになり、Python は json 標準機能で完結しやすいです。

HTTP は C だと自前実装の比率が上がり、Python は FastAPI で立ち上げが速いです。

【結果と次回戦略】

最終順位は 55位 / 1:24:12 でした。

次回は Python で先にスコアを出し、make up までのセットアップ自動化と早期 /score 確認を徹底します。

【関連リンク】

大会公式: https://cyberagent.connpass.com/event/

Podcast: https://open.spotify.com/episode/27GV87BnFHQJcxS2bZqZE7?si=9pAsIzb6jOncDtg
