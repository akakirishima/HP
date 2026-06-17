# ブログ Markdown 運用メモ

ブログ記事は TypeScript 配列ではなく Markdown ファイルで管理しています。

このメモは、新しい記事を追加する時や表示ロジックを変更する時の確認用です。

## 管理方針

- URL は `/blog/:id` のまま維持する
- 記事本文は `src/content/blog/<id>/index.<locale>.md` に置く
- 現在の本文 locale は `ja`, `en`, `ko`
- `zh` 表示時は英語本文へ fallback する
- 記事本文に生 HTML は使わず、Markdown と GFM の範囲で書く

## ディレクトリ構成

```text
src/content/blog/
  example-post/
    index.ja.md
    index.en.md
    index.ko.md
```

`example-post` のディレクトリ名は frontmatter の `id` と一致させます。

## Frontmatter

各 Markdown には次の frontmatter を置きます。

```yaml
---
id: "example-post"
locale: "ja"
title: "記事タイトル"
excerpt: "一覧とSEOに表示する短い説明"
date: "2026-01-01"
tags: ["React", "TypeScript"]
order: 1
image: "/og/blog-index.svg"
---
```

必須項目:

- `id`: 記事 ID。URL と一致させる
- `locale`: `ja`, `en`, `ko`
- `title`: 一覧、詳細、SEO に使うタイトル
- `excerpt`: 一覧と SEO description に使う要約
- `date`: 公開日
- `tags`: タグ配列
- `order`: 一覧表示順

任意項目:

- `image`: 記事用 OGP 画像
- `draft`: `true` の場合は sitemap から除外する

同じ `id` の 3 言語ファイルでは、`date`, `tags`, `order`, `image`, `draft` を一致させます。

## 表示ロジック

- `src/data/posts.ts` が `import.meta.glob` で Markdown を読み込む
- frontmatter は `gray-matter` で解析する
- 詳細ページは `react-markdown` と `remark-gfm` で本文を描画する
- 記事一覧は `order` 昇順で表示する
- `getPostById` は `/blog/:id` の詳細表示で使う

## 新規記事追加手順

1. `src/content/blog/<id>/` を作成する
2. `index.ja.md`, `index.en.md`, `index.ko.md` を追加する
3. 3 ファイルの frontmatter 共通項目が一致していることを確認する
4. `/work` などからリンクする場合は既存 ID と重複しないことを確認する
5. `npm run build` を実行する
6. `public/sitemap.xml` に公開記事 URL が出力されることを確認する

## 書き方の基準

- 採用向けに読まれる記事では、単なる活動報告だけでなく、担当範囲、判断理由、技術的な学びを書く
- コマンドや設定値はコードブロックにする
- 外部リンクは出典や補足として自然な文脈で置く
- 一時的な作業メモ、機密値、個人情報、実運用のログイン情報は書かない

## 検証

```bash
npm run build
```

確認すること:

- `/blog` に記事カードが出る
- `/blog/<id>` で本文が表示される
- `ja`, `en`, `ko`, `zh` の切替で欠落がない
- `draft: true` の記事が sitemap に出ない
- `/work` など既存リンクから 404 にならない
