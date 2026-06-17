# akakirishima portfolio

宮崎で Web 開発、アプリ開発、AI 研究に取り組む akakirishima のポートフォリオサイトです。

制作物、経歴、外部掲載記事、ブログ、問い合わせ導線を 1 つの React アプリとしてまとめています。

## 目的

- 採用担当者や共同開発者が、技術スタックと制作実績を短時間で確認できるようにする
- 経歴、制作物、ブログ記事を URL で共有しやすい形に整理する
- 日本語、英語、韓国語、中国語の表示切替に対応し、海外イベントや留学経験も伝えやすくする
- SEO、OGP、sitemap、robots.txt をビルド時に整え、公開後の検索・共有に耐える構成にする

## 主な機能

- Home: プロフィール、最新情報、掲載・参加実績、スキル一覧
- Work: 学業、研究、ハッカソン、アルバイト、団体活動を時系列で表示
- Blog: Markdown 管理の記事一覧と詳細表示
- Portfolio: 主要プロジェクトの一覧と詳細ページ
- Contact: Google Forms または CORS 対応 API へ送信できる問い合わせフォーム
- SEO: ページ別 title / description / canonical / OGP / JSON-LD
- i18n: `ja`, `en`, `ko`, `zh` の表示切替

## 技術スタック

- Runtime: React 19, TypeScript, Vite
- Routing: React Router
- Markdown: `gray-matter`, `react-markdown`, `remark-gfm`
- SEO: `react-helmet-async`, JSON-LD, sitemap / robots 生成スクリプト
- Analytics: `react-ga4`
- Styling: CSS modules ではなく、アプリ共通の CSS とコンポーネントクラスで管理

## コンテンツ管理

ブログ記事は `src/content/blog/<id>/index.<locale>.md` に配置します。

```text
src/content/blog/
  ai-agent-challenge-2026/
    index.ja.md
    index.en.md
    index.ko.md
```

各 Markdown には frontmatter を持たせ、`src/data/posts.ts` がビルド時に読み込みます。

主な frontmatter:

- `id`: 記事 ID。URL `/blog/:id` と一致させる
- `locale`: `ja`, `en`, `ko`
- `title`: 一覧・詳細・SEO に使うタイトル
- `excerpt`: 一覧・SEO に使う要約
- `date`: 公開日
- `tags`: タグ配列
- `order`: 一覧表示順
- `image`: 任意の OGP 画像

制作物データは `src/data/projects.ts`、掲載実績は `src/data/featuredAppearances.ts`、News は `src/data/news.ts` で管理します。

## セットアップ

```bash
npm install
npm run dev
```

開発サーバー起動後、Vite が表示するローカル URL を開いて確認します。

## ビルド

```bash
npm run build
npm run preview
```

`npm run build` では、以下を順に実行します。

1. `scripts/generate-robots.mjs`
2. `scripts/generate-sitemap.mjs`
3. TypeScript build
4. Vite production build

## 環境変数

すべて任意です。未設定でもローカル表示とビルドは可能です。

| 変数 | 用途 |
| --- | --- |
| `VITE_SITE_URL` | canonical、sitemap、robots.txt の基準 URL |
| `VITE_GA_ID` | Google Analytics の measurement ID |
| `VITE_CONTACT_ENDPOINT` | 問い合わせフォームの送信先 |
| `VITE_CONTACT_EMAIL` | 直接連絡先として表示するメールアドレス |
| `VITE_CONTACT_GOOGLE_ENTRY_NAME` | Google Forms の名前 field ID |
| `VITE_CONTACT_GOOGLE_ENTRY_EMAIL` | Google Forms の email field ID |
| `VITE_CONTACT_GOOGLE_ENTRY_MESSAGE` | Google Forms の本文 field ID |

`VITE_CONTACT_ENDPOINT` に Google Forms の URL を指定した場合、アプリ側で `formResponse` に正規化して送信します。Google Forms はブラウザから送信結果を厳密に検証できないため、UI では送信済みとして扱います。

## 検証

```bash
npm run lint
npm run build
```

確認する観点:

- `/`, `/work`, `/blog`, `/portfolio`, `/contact` が表示できる
- `/blog/:id` と `/projects/:id` の直接アクセスで 404 にならない
- 言語切替で主要なテキストが空にならない
- `public/sitemap.xml` に公開ルート、公開記事、公開プロジェクトが出力される
- `prefers-reduced-motion` 環境でも主要コンテンツが読める

## 関連メモ

- [HP 改善・運用メモ](docs/hp-requirements.md)
- [ブログ Markdown 運用メモ](docs/blog-markdown-migration-requirements.md)
- [AI Agent Challenge 2026 反映メモ](docs/blog-post-ai-agent-challenge-2026-requirements.md)

## ライセンス

このリポジトリはポートフォリオサイト本体です。現時点では `package.json` のとおり `UNLICENSED` としています。
