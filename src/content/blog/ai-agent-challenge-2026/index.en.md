---
id: "ai-agent-challenge-2026"
locale: "en"
title: "AI Agent Challenge 2026 — First Setup, Implementation, and Retrospective"
excerpt: "A practical recap of my first hands-on use of Claude Code and MCP, including setup issues, scoring flow, and implementation strategy."
date: "2026-02-16"
tags: ["AI","Coding Challenge","Claude","MCP","Docker","GitHub Actions"]
order: 33
image: "/og/blog-designing-for-ai.svg"
---
【Introduction】

I participated in AI Agent Challenge 2026 in February 2026. It was my first hands-on experience with Claude Code and MCP, and setup itself became a major learning point.

【How the Challenge Worked】

・Create a repository from the template

・Start services locally with Docker and Make

・Register on the scoreboard repository and run /score in an Issue

・Receive scoring results from GitHub Actions

【Setup Issues I Hit】

The claude command was missing at first, so I installed it with npm install -g @anthropic-ai/claude-code.

After that, I logged in with claude and prepared the environment.

I also hit Cannot connect to the Docker daemon at unix:///.../docker.sock, which was fixed by starting Docker Desktop.

【Flow to Reach /score】

・Run make up

・Verify services with curl localhost:8080 and curl localhost:3100

・Create a scoring Issue and post /score

・Wait for CI scoring results

The key point was that local success did not count until /score was executed on CI.

【Retrospective: Why C Was Valuable but Slow】

I chose C to deepen low-level understanding, but Python was clearly faster for implementation speed.

JWT in C required heavier implementation and integration, while Python was quick with PyJWT.

bcrypt in C increased dependency overhead, while Python worked quickly with the bcrypt library.

JSON handling in C leaned toward manual parsing, while Python was straightforward with the standard json module.

HTTP in C required more custom server work, while Python could start quickly with FastAPI.

【Result and Next Strategy】

My final result was 55th place with a time of 1:24:12.

Next time, I will prioritize early scoring with Python, automate setup to make up, and verify /score as early as possible.

【Related Links】

Official event: https://cyberagent.connpass.com/event/

Podcast: https://open.spotify.com/episode/27GV87BnFHQJcxS2bZqZE7?si=9pAsIzb6jOncDtg
