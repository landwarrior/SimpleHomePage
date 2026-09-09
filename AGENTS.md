# AGENTS.md

このリポジトリで作業する AI エージェント向けのガイドです。

## プロジェクト概要

個人サイト「Survivalな理想郷」の静的サイト。実体は `new-homepage/` 配下の Vue 3 + TypeScript + Vite SPA で、`main` への push で GitHub Actions がビルドしてレンタルサーバーへ FTPS デプロイします。

- フレームワーク: Vue 3（Composition API / `<script setup lang="ts">`）+ Vue Router 4
- ビルド: Vite 7、スタイル: Tailwind CSS v4（設定ファイル不要、Vite プラグイン方式）
- Lint / Format: Biome（ルート `biome.jsonc` がリポジトリ全体を管理）

## ディレクトリ構成

| パス | 内容 |
| --- | --- |
| `new-homepage/` | 実際のサイト本体。開発作業のほぼすべてがここ |
| `new-homepage/src/components/` | ページと UI コンポーネント（`*Comp.vue` は共通パーツ、`*Page.vue` はルート単位のページ） |
| `new-homepage/src/composables/` | ロジックとデータ。`useToygun.ts` はトイガンの静的データ定義（383 行） |
| `new-homepage/src/style.css` | Tailwind の読み込み、CSS 変数、ニューモーフィズムのユーティリティ定義 |
| `new-homepage/public/` | そのまま `dist/` にコピーされる。`.htaccess` は SPA ルーティングに必須 |
| `index.html` / `mhw_kaishin.html`（ルート） | 旧サイトの遺物。デプロイ対象外なので基本的に触らない |
| `README.md` | 構築手順のチュートリアル。実装の正 ではなく学習用ドキュメント |

## コマンド

作業ディレクトリに注意してください。ビルド系は `new-homepage/`、Lint 系はリポジトリルートです。

```bash
# 開発サーバー（http://localhost:5173）
cd new-homepage && npm run dev

# 型チェック込みの本番ビルド → new-homepage/dist/
cd new-homepage && npm run build

# 型チェックのみ
cd new-homepage && npm run type-check

# Lint + Format のチェック / 自動修正（リポジトリルートで実行）
npx biome check .
npx biome check --write .
```

**注意:** ルートの `package.json` に `scripts` は定義されていません。`README.md` と `BIOME_MIGRATION.md` に出てくる `npm run lint` / `npm run check` は動きません。Biome は `npx biome ...` で直接呼び出してください。

## コーディング規約

`biome.jsonc` と `.editorconfig` が正です。編集後は `npx biome check --write .` をかけてから終えてください。

- インデント 4 スペース（HTML のみ 2）、改行 LF、行幅 200
- TypeScript / JavaScript: シングルクォート、セミコロン必須、末尾カンマは ES5 準拠
- `const` を強制。`console` の使用は warn、`debugger` は error
- import は Biome の assist が自動整理する

### Vue コンポーネント

- 必ず `<script setup lang="ts">`。Options API は使いません
- props / emits は型引数付きで宣言する（`defineProps<{ ... }>()` / `defineEmits<{ ... }>()`）
- 再利用するロジックや静的データは `src/composables/use*.ts` に切り出し、型（`interface` / `type`）も同じファイルで export する
- 関数には戻り値の型を明示する（`const foo = (): void => { ... }`）
- `@/` で `src/` を参照できます（`vite.config.ts` と `tsconfig.json` の両方に設定済み）
- 既存コードは日本語の説明コメントが多めです。トーンを合わせてください

### スタイリング

- Tailwind ユーティリティを基本とし、足りないものだけ `style.css` に足す
- 配色は CSS 変数（`--neu-bg`, `--neu-text-color`, `--neu-shadow-lt`, `--neu-shadow-rb`）経由。`.dark` クラスで値が切り替わるので、ハードコードした色を書かない
- 立体表現は既存のニューモーフィズムクラスを使う。表示専用は `neu-raised*` / `neu-pressed*`、ホバーや押下の効果が要るボタンは `neu-btn-*`。詳細は `new-homepage/NEUMORPHISM_GUIDE.md`
- ダークモードはクラスベース（`@custom-variant dark (.dark &)`）。`useTheme` が `html` に `.dark` を付け外しします
- 横幅の共通コンテナは `.page-container`。独自に `max-w-*` を並べない
- `box-shadow` は `overflow-hidden` や `overflow-x-auto` でクリップされるため、影付き要素の親にはパディングを入れる

## ルーティングとデプロイ

- Vue Router は History モード。ルートの追加は `src/main.ts` の `routes` に定義します
- History モードのため `public/.htaccess` のリライト設定が必須。消すと直リンクが 404 になります
- ヘッダーメニューに出したい場合は `HeaderComp.vue` の `menuList` にも追加し、ページタイトルの表示は `App.vue` の `activeTitle` に分岐を足します
- `.github/workflows/deploy.yml` が `main` への push で `new-homepage/` をビルドし、`dist/` を FTPS 転送します。サーバー情報は GitHub Secrets 管理

## 作業時の注意

- `HomePage.vue` の「最終更新日」は手書きです。サイトの内容を変えたら合わせて更新してください（更新忘れのコミットが過去にあります）
- `dist/` はコミット対象外です（`new-homepage/.gitignore`）
- コミットメッセージは日本語で、変更内容を一文で書く既存の慣習に合わせてください
- `useToygun.ts` は固有名詞だらけなのでスペルチェッカーの対象外に設定されています。表記を勝手に直さないでください
