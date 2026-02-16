# AI Agent Challenge 2026 反映 要件定義（方針A）

## 1. 概要
- 反映範囲は「ブログ + 経歴 + News」。
- 実装方式は既存のデータ直編集（Markdown レンダラ導入なし）。
- 経歴表示は「参加のみ」、日付は `2026-02`。
- 型定義やルーティングは変更せず、既存配列へのデータ追加のみで対応する。

## 2. 対象と現状
- ブログ記事データ: `/Users/kirishima/Documents/HP/src/data/posts.ts`
- 経歴タイムライン: `/Users/kirishima/Documents/HP/src/pages/work.tsx` 内 `experiences`
- ホーム News: `/Users/kirishima/Documents/HP/src/data/news.ts`
- 記事詳細ルート: 既存 `/blog/:id`
- sitemap: build 時に `/Users/kirishima/Documents/HP/scripts/generate-sitemap.mjs` が `posts.ts` の `id` を抽出して生成

## 3. 決定事項（確定）
1. `update_scope`: ブログ + 経歴 + News
2. `career_label_style`: 参加のみ（順位を経歴カードに書かない）
3. `career_date_format`: `2026-02`

## 4. 機能要件

### FR-01 記事追加
- `posts` に新規記事を 1 件追加する。
- `id`: `ai-agent-challenge-2026`
- `date`: `2026-02-16`
- `title_ja`: `AI Agent Challenge 2026 に参加した話 — 初体験の環境構築から感想戦まで`
- `excerpt_ja/en/ko` と `content_ja/en/ko` はすべて空文字禁止。
- 配置位置は `id: 'designing-for-ai'` の直前。

### FR-02 本文変換ルール（方針A）
- Markdown 記法は使わず `content_*: string[]` へ段落変換する。
- 見出しは `【見出し名】` で 1 段落化する。
- 箇条書きは `・` で始まる 1 行段落に分解する。
- コマンドは本文文字列として記載する（コードブロック化しない）。
- 比較表は 4 段落（JWT / bcrypt / JSON / HTTP）に分解する。
- リンクは生 URL のまま記載する（既存実装で自動リンク化）。

### FR-03 ブログ導線
- `/blog` の一覧カードに新規記事が表示されること。
- `/blog/ai-agent-challenge-2026` で記事本文が表示されること。

### FR-04 経歴（/work）反映
- `experiences` に新規 1 件追加する。
- 追加位置は `research-masters-plan` の直後、`research-thi-thi-zin` の前。
- 値は以下固定:
```ts
{
  category: 'awards_other',
  date_ja: '2026-02',
  date_en: 'Feb 2026',
  date_ko: '2026-02',
  title_ja: 'AI Agent Challenge 2026 参加',
  title_en: 'Participated in AI Agent Challenge 2026',
  title_ko: 'AI Agent Challenge 2026 참가',
  desc_ja: '大会参加',
  desc_en: 'Competition participation',
  desc_ko: '대회 참가',
  href: '/blog/ai-agent-challenge-2026',
}
```
- 順位（55位）は経歴カードには記載しない。

### FR-05 News（/）反映
- `newsItems` 先頭に 1 件追加する。
- 値は以下固定:
```ts
{
  date: '2026.02.16',
  text_ja: 'AI Agent Challenge 2026 に参加しました',
  text_en: 'Participated in AI Agent Challenge 2026',
  text_ko: 'AI Agent Challenge 2026에 참가했습니다',
}
```

### FR-06 SEO / sitemap
- `npm run build` 後の `public/sitemap.xml` に `/blog/ai-agent-challenge-2026` が含まれること。
- 記事詳細ページで既存 SEO 実装により `title / description / canonical / og:image` が出力されること。

### FR-07 多言語要件
- `ja/en/ko` でタイトル・要約・本文・経歴・News が空欄にならないこと。
- `zh` は既存仕様どおり英語 fallback のまま（新規 zh テキスト追加なし）。

## 5. 非機能要件
- 型変更なし（`BlogPost[]`, `Experience[]`, `NewsItem[]` へのデータ追加のみ）。
- 既存ルーティング変更なし。
- ビルドエラーなし。
- 他記事や既存経歴の表示を破壊しない。

## 6. 受け入れ基準（DoD）
1. `/blog` で新規記事カードが表示される。
2. `/blog/ai-agent-challenge-2026` で本文が欠落なく表示される。
3. `/work` のデフォルト表示（Core Only）で新規経歴が表示される。
4. 新規経歴クリックで `/blog/ai-agent-challenge-2026` に遷移できる。
5. `/` の News 先頭に新規行が表示される。
6. `ja/en/ko` の切替で新規文言が空欄にならない。
7. `npm run build` 成功後、`public/sitemap.xml` に対象 URL が出力される。

## 7. テストシナリオ
1. Build 検証: `npm run build` が成功し、sitemap が更新されること。
2. Blog 検証: 一覧表示、詳細遷移、直接 URL アクセスで表示されること。
3. Work 検証: Core Only で新規経歴が見え、記事に遷移できること。
4. Home 検証: News 先頭に新規トピックが表示されること。
5. i18n 検証: JA/EN/KO で文言切替が機能すること。

## 8. 前提・除外
- 前提:
  - 大会日付はブログ/Newsで `2026-02-16`、経歴は `2026-02`。
  - 経歴には順位を書かず、本文での順位言及は許容。
- 除外:
  - Markdown レンダリング対応（方針B）
  - 新規 OG 画像作成
