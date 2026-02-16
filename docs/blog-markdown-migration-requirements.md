# ブログ記事 Markdown 移行 要件定義

## 1. 目的
- ブログ記事の管理方式を `src/data/posts.ts` 直編集から Markdown ファイル管理へ移行する。
- 既存URL（`/blog/:id`）を維持したまま、執筆・更新をコード編集より簡単にする。
- 既存の多言語表示（`ja/en/ko` + `zh -> en fallback`）と SEO / sitemap を維持する。

## 2. 現状
- 記事データは `/Users/kirishima/Documents/HP/src/data/posts.ts` に `BlogPost[]` として定義されている。
- 一覧ページは `/Users/kirishima/Documents/HP/src/pages/blog.tsx` で `posts` を直接描画している。
- 詳細ページは `/Users/kirishima/Documents/HP/src/pages/blog/[id].tsx` で `content_*: string[]` を段落表示している。
- sitemap は `/Users/kirishima/Documents/HP/scripts/generate-sitemap.mjs` が `posts.ts` の `id` を正規表現抽出して生成している。
- 経歴ページ `/Users/kirishima/Documents/HP/src/pages/work.tsx` には `/blog/<id>` へのリンクが 33 件ある。

## 3. スコープ
- ブログ記事ソースを Markdown 化する。
- ブログ一覧・詳細の描画を Markdown ベースに切り替える。
- sitemap 生成元を Markdown ソースに切り替える。
- 既存 36 記事のデータを Markdown へ移行する。

## 4. 非スコープ
- CMS 導入（microCMS / Contentful 等）は対象外。
- URL 構造変更（`/blog/:id` 以外）やルーティング追加は対象外。
- `work.tsx` の経歴データ構造変更は対象外（リンク先ID互換のみ保証）。
- 中国語 (`zh`) 記事本文の新規翻訳追加は対象外（現行どおり英語 fallback）。

## 5. ファイル構成要件

### FR-01 記事格納ディレクトリ
- 新規ディレクトリ: `/Users/kirishima/Documents/HP/src/content/blog`
- 記事単位でフォルダを作成し、フォルダ名を `id`（slug）と一致させる。
- 各記事フォルダ内に以下3ファイルを配置する。
  - `index.ja.md`
  - `index.en.md`
  - `index.ko.md`

### FR-02 Frontmatter スキーマ
- 3言語ファイルすべてに YAML frontmatter を持たせる。
- 必須キー:
  - `id` (string)
  - `locale` (`ja` | `en` | `ko`)
  - `title` (string)
  - `excerpt` (string)
  - `date` (`YYYY-MM-DD`)
  - `tags` (string array)
  - `order` (number, 一覧表示順)
- 任意キー:
  - `image` (string, `/og/...`)
  - `draft` (boolean, default: false)
- 同一 `id` の3ファイル間で `date/tags/order/image` は一致必須。

## 6. データロード要件

### FR-03 ローダ実装
- 新規モジュール: `/Users/kirishima/Documents/HP/src/data/posts.ts` を Markdown ローダ実装へ置換する。
- `import.meta.glob('/src/content/blog/**/index.*.md', { eager: true, query: '?raw', import: 'default' })` で本文を読み込む。
- frontmatter 解析は `gray-matter` を使用する。
- Markdown レンダリングは `react-markdown` + `remark-gfm` を使用する。

### FR-04 型定義
- `BlogPost` を次の形式へ変更する。
  - 共通: `id/date/tags/order/image`
  - 言語別: `title_ja/title_en/title_ko`, `excerpt_ja/excerpt_en/excerpt_ko`, `content_ja/content_en/content_ko`
- `content_*` は `string[]` から `string`（Markdown全文）へ変更する。
- `getPostById` の公開APIは維持する。

### FR-05 バリデーション
- ロード時に以下を検証し、違反時は build を失敗させる。
  - 必須キー欠落
  - 同一idの言語不足（ja/en/ko）
  - frontmatter不一致（`date/tags/order/image`）
  - 重複id
  - 不正日付フォーマット

## 7. 表示要件

### FR-06 一覧表示
- `/blog` は `order` 昇順で描画する。
- 既存の表示項目（date/tags/title/excerpt/read more）を維持する。
- 既存の `zh` 注意文と `en fallback` 挙動を維持する。

### FR-07 詳細表示
- `/blog/:id` は `ReactMarkdown` で本文を描画する。
- `remark-gfm` で見出し・箇条書き・表・コードブロックを表示可能にする。
- 本文内リンクは `target="_blank" rel="noopener noreferrer"` を維持する。
- 生HTMLは無効化し、Markdown以外のHTML埋め込みは許可しない（XSS回避）。

### FR-08 i18n fallback
- 言語選択が `ja/en/ko` の場合は該当本文を表示。
- `zh` の場合は英語本文・英語タイトル・英語要約を表示する（現行互換）。

## 8. SEO / sitemap 要件

### FR-09 SEO互換
- 記事詳細の canonical は `VITE_SITE_URL + /blog/:id` のまま維持する。
- `SEO` コンポーネント呼び出し仕様は変更しない。

### FR-10 sitemap生成変更
- `/Users/kirishima/Documents/HP/scripts/generate-sitemap.mjs` の記事抽出元を `src/data/posts.ts` 正規表現から Markdown ファイル群へ変更する。
- `draft: true` 記事は sitemap から除外する。
- 既存ルートと project ルート生成ロジックは維持する。

## 9. 移行要件

### FR-11 既存記事移行
- 既存36記事を Markdown に移行する。
- 一覧順を維持するため `order` を必須化し、現行配列順をそのまま採番する。
- `id` は既存値を完全維持し、`/work` からのリンク切れを発生させない。

### FR-12 移行スクリプト
- 一括変換用に `scripts/migrate-posts-to-markdown.mjs` を作成する。
- 変換対象:
  - `title_*`, `excerpt_*`, `content_*`, `date`, `tags`, `image`
- 出力:
  - `src/content/blog/<id>/index.ja.md`
  - `src/content/blog/<id>/index.en.md`
  - `src/content/blog/<id>/index.ko.md`
- 変換完了後、`posts.ts` は Markdown ローダ実装へ置換する。

## 10. 非機能要件
- build 時間の増加は +20% 以内を目標にする。
- 記事詳細ページの初回描画で致命的な遅延が発生しないこと。
- Markdownファイル数増加時も型安全性とビルド再現性を維持する。

## 11. 受け入れ基準（DoD）
1. 既存36記事すべてが `/blog` 一覧と `/blog/:id` で表示される。
2. `/Users/kirishima/Documents/HP/src/data/posts.ts` に記事本文のハードコードが残っていない。
3. `npm run build` が成功する。
4. `public/sitemap.xml` に公開記事URLが出力され、`draft` 記事は含まれない。
5. `/work` からの全 `href: '/blog/<id>'` が 404 にならない。
6. `ja/en/ko` と `zh fallback` が現行どおり機能する。
7. コードブロック・表・箇条書きが詳細ページで表示できる。

## 12. 実装タスク（推奨順）
1. 依存追加: `react-markdown`, `remark-gfm`, `gray-matter`
2. `src/content/blog` ディレクトリと frontmatter スキーマを作成
3. 変換スクリプトで既存36記事を Markdown 化
4. `src/data/posts.ts` を Markdown ローダへ置換
5. `src/pages/blog/[id].tsx` を Markdown 描画へ切替
6. `scripts/generate-sitemap.mjs` を Markdown ソース参照へ切替
7. build と目視テストで DoD を確認

## 13. リスクと対策
- リスク: 言語ファイル間の frontmatter 不整合
- 対策: ローダ検証で build fail
- リスク: 表示順が崩れる
- 対策: `order` 必須化
- リスク: リンク切れ
- 対策: `id` 完全互換と `/work` リンク全件確認
- リスク: Markdown の HTML 混在による XSS
- 対策: 生HTML無効化、`rehype-raw` 不採用

## 14. 前提
- 本要件では「全記事移行」を前提とする。
- 新規記事追加時も `ja/en/ko` 3言語ファイルを同時作成する運用とする。
- 公開日は frontmatter の `date` を単一の正として扱う。
