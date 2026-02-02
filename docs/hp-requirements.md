# HP改善・修正 要件定義

## 目的
- ポートフォリオサイトの情報設計・UX・SEO・運用性を強化し、問い合わせ/実績閲覧のCV導線を改善する。
- 現在の実装を基に、保守性と拡張性を高めた構成に整理する。

## 現状構成（確認結果）
- ルーティング: `/`（Home）, `/work`, `/blog`, `/portfolio`, `/projects/:id`, `/contact`。
- i18n: `LanguageContext` による日本語/英語切替（`translations.ts`）。
- コンテンツ: `projects.ts` に作品データを保持。`blog` はスタブ。
- 表示効果: Three.js 背景 + ページ別エフェクト。
- SEO: `SEO.tsx` + `public/sitemap.xml` + `robots.txt`。

## 改善点・ブラッシュアップ点
### 情報設計/コンテンツ
- `Blog` は仮テキストのみ。記事一覧/詳細が未実装。
- `Contact` は擬似送信・仮メール。送信先/成功失敗UI/バリデーションが不足。
- `News` は固定配列で更新が手動。更新運用の仕組みがない。

### UX/UI
- ナビゲーション定義が `Header` 固定で、ページ追加時に漏れやすい。
- `Footer` がサイトタイトル/権利表記と未統一。
- インラインスタイル中心で、デザイン調整がしづらい。

### SEO/計測
- `SEO.tsx` の `currentUrl` が `url` を正しく使えていない（演算子優先順位）。
- `sitemap.xml` と実ルート不整合（`/about`, `/projects` など）。
- `robots.txt` が固定ドメイン。公開ドメイン変更に追従できない。
- GA ID が固定値。環境切替（本番/検証）に非対応。

### パフォーマンス/安定性
- Three.js 背景・エフェクトが常時稼働。モバイル/低速端末の負荷懸念。
- `PageEffects` がレンダリング毎に乱数生成（再描画時のチラつき）。
- `App.tsx`/`App.css`/`CursorFollower` など未使用コードが残存。

### アクセシビリティ
- `Header`/`nav` のフォーカススタイル不足。
- `aria-current` 等のアクセシブルな現在地表示が未対応。
- アニメーションに `prefers-reduced-motion` 配慮が不足。

## 修正要件（優先度付き）
### P1（必須）
- **R-01 ルート定義の一元化**: ルート/ナビ/SEO/サイトマップを共通設定（`routes.ts` 等）に統合し、追加/変更の漏れを防ぐ。
- **R-02 SEOの正規URL修正**: `SEO.tsx` の `currentUrl` を `url` 優先で確定し、`canonical`/`og:url` を正確に出力。
- **R-03 サイトマップ整備**: 既存ルートに合わせた `sitemap.xml` へ更新（`/work`, `/portfolio`, `/projects/:id`, `/contact`, `/blog`）。
- **R-04 robots.txt 追従**: ドメイン変更に対応できる仕組み（`VITE_SITE_URL` 等）に変更。
- **R-05 GA IDの環境変数化**: `VITE_GA_ID` などに移行し、未設定時は無効化。
- **R-06 未使用コード整理**: `App.tsx`/`App.css`/`CursorFollower` の削除 or 目的明確化。

### P2（重要）
- **R-07 Contact送信実装**: フォーム送信先（Formspree/Email API 等）を決定し、成功/失敗UI、スパム対策（reCAPTCHA or honeypot）を実装。
- **R-08 Footer統一**: `translations.ts` の `footer_copyright` を使用し、サイト名/年号を統一。
- **R-09 低負荷モード**: `prefers-reduced-motion`/モバイル判定で Three.js/エフェクトの簡易化 or 停止。
- **R-10 ナビゲーション改善**: `aria-current`・フォーカスリング・モバイルメニューのフォーカス管理を整備。

### P3（推奨）
- **R-11 Blog構成**: `data/posts.ts` + クリックで詳細へ遷移する構成を追加（MD/MDX or CMS いずれか選定）。
- **R-12 News運用**: `data/news.ts` などに移し、更新しやすい構成へ。
- **R-13 スタイル整理**: インラインスタイルをCSS/ユーティリティに移行し保守性向上。
- **R-14 OG/Twitterタグ強化**: `og:image`・`twitter:image` のページ別差分、`og:site_name` 追加。

## 非機能要件
- Lighthouse: Performance/SEO/Accessibility 80+ を目標。
- 主要ブラウザ（Chrome/Safari/Edge）とモバイルで表示崩れがないこと。

## 受入条件（DoD）
- 主要ページ（Home/Work/Portfolio/Blog/Contact）がナビから到達可能。
- `sitemap.xml` が実ルートと一致し、`canonical` が正しく設定される。
- `Contact` 送信が本番で利用可能で、成功/失敗状態が明確。
- `prefers-reduced-motion` 有効時に大きなアニメーションが抑制される。
