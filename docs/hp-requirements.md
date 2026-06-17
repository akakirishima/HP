# HP 改善・運用メモ

このメモは、ポートフォリオサイトを継続的に改善するための整理です。

採用担当者や共同開発者がリポジトリを見たときに、現在の構成と今後の改善余地を把握できる粒度で残しています。

## 現在の目的

- 制作物、経歴、ブログ、掲載実績、問い合わせ導線を 1 つの公開サイトにまとめる
- 日本語を主軸にしつつ、英語・韓国語・中国語でも主要情報を読めるようにする
- SEO、OGP、sitemap、robots.txt を整え、検索や SNS 共有で内容が伝わるようにする
- 実績の更新を Markdown とデータファイル中心で行えるようにする

## 現在の構成

- ルーティング: `/`, `/work`, `/blog`, `/blog/:id`, `/portfolio`, `/projects/:id`, `/contact`
- i18n: `LanguageContext` と `translations.ts` による多言語切替
- ブログ: `src/content/blog` 配下の Markdown を `src/data/posts.ts` で読み込み
- 作品: `src/data/projects.ts` でプロジェクト情報を管理
- 掲載実績: `src/data/featuredAppearances.ts` で外部掲載や参加実績を管理
- SEO: `SEO.tsx`, `public/sitemap.xml`, `public/robots.txt`
- 公開 URL: `VITE_SITE_URL` を基準に canonical、sitemap、robots.txt を生成

## 実装済みの改善

- ルート、ナビ、SEO で使うルート情報を `src/data/routes.ts` に寄せた
- sitemap / robots.txt をビルドスクリプトで生成できるようにした
- ブログ本文を Markdown 化し、記事追加時にコード本文を直接編集しなくてよい形にした
- Google Analytics ID と問い合わせ送信先を環境変数で切り替えられるようにした
- Contact は Google Forms URL と CORS 対応 API の両方に対応した
- `react-markdown` と `remark-gfm` で見出し、リスト、コード、表を表示できるようにした

## 今後の改善候補

### コンテンツ

- 作品詳細の日本語説明と英語説明の粒度をそろえる
- ブログ記事のうち短い活動記録は、学び・担当範囲・技術的な観点を少し追加する
- 掲載実績の外部リンク切れを定期的に確認する

### UX / Accessibility

- モバイル表示で長いタイトルや多言語テキストが詰まりすぎないか確認する
- `prefers-reduced-motion` 有効時のアニメーション負荷をさらに下げる
- フォーカスリング、`aria-current`、フォームエラー表示の一貫性を保つ

### SEO / 運用

- ページ別 OGP 画像を必要に応じて増やす
- `VITE_SITE_URL` の本番値変更時に sitemap と robots.txt を必ず再生成する
- 新規記事追加時は `npm run build` で sitemap に URL が入ることを確認する

## 更新時のチェックリスト

1. `npm run lint`
2. `npm run build`
3. `/blog` と対象記事の直接 URL を確認
4. `/work` から記事リンクへ遷移できることを確認
5. `public/sitemap.xml` に公開対象 URL が含まれることを確認
6. `ja`, `en`, `ko`, `zh` の切替で主要ページが空表示にならないことを確認

## 判断メモ

- CMS は導入せず、当面は Git 管理の Markdown と TypeScript データで運用する
- 中国語本文は現時点では英語 fallback を許容する
- Contact の Google Forms 送信はブラウザ仕様上、成功可否の厳密な検証ができないため、UI では「送信済み」として扱う
- ライセンスは公開ポートフォリオとして `UNLICENSED` のまま維持する
