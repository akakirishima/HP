# AI Agent Challenge 2026 反映メモ

AI Agent Challenge 2026 の参加記録を、ポートフォリオサイト内の Blog / Work / News に反映した時のメモです。

今後、イベント参加記録を追加する時の参考として残しています。

## 反映した内容

- Blog: `/blog/ai-agent-challenge-2026`
- Work: 経歴タイムラインに `AI Agent Challenge 2026 参加` を追加
- Home: News に参加トピックを追加
- Sitemap: build 時に記事 URL が出力されるようにした

## 表示方針

- 経歴カードでは順位や細かい結果よりも、参加経験として簡潔に見せる
- 詳細な学び、環境構築、実装時の気づきはブログ本文で説明する
- 日本語、英語、韓国語の本文を用意し、中国語表示では英語 fallback を使う
- 記事 ID は `ai-agent-challenge-2026` とし、URL を安定させる

## 記事で扱う観点

- 初めての開発環境構築で詰まった点
- backend / frontend / database を分けて起動確認した流れ
- JWT、bcrypt、JSON、HTTP など基礎技術の理解を整理したこと
- 実装後に振り返った改善点
- イベントを通じて得た学び

## 関連ファイル

- `src/content/blog/ai-agent-challenge-2026/index.ja.md`
- `src/content/blog/ai-agent-challenge-2026/index.en.md`
- `src/content/blog/ai-agent-challenge-2026/index.ko.md`
- `src/pages/work.tsx`
- `src/data/news.ts`
- `scripts/generate-sitemap.mjs`

## 検証

```bash
npm run build
```

確認すること:

- `/blog` に記事カードが表示される
- `/blog/ai-agent-challenge-2026` で本文が表示される
- `/work` の経歴から記事へ遷移できる
- `/` の News に参加記録が表示される
- `public/sitemap.xml` に `/blog/ai-agent-challenge-2026` が含まれる

## 今後の同種更新ルール

- イベント参加や受賞を追加する場合、まず Blog に詳細を置く
- Work には短い事実、Blog には背景と学びを書く
- News はトップページで伝えたい直近トピックだけに絞る
- 記事 ID と経歴リンクは公開後に変更しない
