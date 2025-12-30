# SimpleHomePage

---

ただの静的なホームページです。  
とはいえせっかくなのでちゃんとした Vue 3 + Composition API を使ったモダンなフロントエンドプロジェクトとして作り直します。

## 1. プロジェクトの初期化とインストール

```bash
# プロジェクトの作成（Vueテンプレートを使用）
# 選択はデフォルトのまま
npm create vite@latest new-homepage -- --template vue

# ディレクトリ移動
cd new-homepage

# 依存関係のインストール
npm install

# Tailwind CSS と関連ツールのインストール（v4を使用）
npm install -D tailwindcss @tailwindcss/vite

# Biome（Linter/Formatter）のインストール
npm install -D @biomejs/biome
```

### 2. 各ツールの設定

#### ① Tailwind CSS の設定（v4）

Tailwind CSS v4では、設定ファイル（`tailwind.config.js`）は不要です。代わりにViteプラグインを使用します。

`vite.config.js` を以下のように更新します：

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
```

#### ② HTMLHint の設定 ( `.htmlhintrc` )

`SimpleHomePage` プロジェクトのルート直下に `.htmlhintrc` ファイルを作成します。「doctype宣言がなくてもエラーにしない」設定を記述します。

```json
{
  "doctype-first": false
}
```

#### ③ Biome の設定 ( `biome.json` )

`new-homepage` ディレクトリ直下に `biome.json` ファイルを作成します。BiomeはESLintとPrettierを統合した高速なLinter/Formatterです。

設定ファイルは既に作成されています。必要に応じて `new-homepage/biome.json` を編集して設定を調整できます。

**Biomeの特徴:**
- **高速**: Rustで実装されており、ESLint/Prettierより最大35倍高速
- **統合**: LinterとFormatterが1つのツールに統合
- **設定が簡単**: 1つの設定ファイルで管理

**使用方法:**
```bash
# リントチェック
npm run lint

# フォーマット
npm run format

# リントとフォーマットの両方をチェック
npm run check

# リントとフォーマットを自動修正
npm run check:fix
```

**VS Codeでの使用:**
VS Codeの拡張機能マーケットプレイスで「Biome」を検索し、公式拡張機能（`biomejs.biome`）をインストールすると、保存時に自動フォーマットされます。

詳細は `BIOME_MIGRATION.md` を参照してください。

### 3. Tailwind CSS の読み込み設定

`src/style.css` の**ファイルの先頭**に以下を追加します。

```css
@import 'tailwindcss';
```

**注意：** Tailwind CSS v4では、従来の `@tailwind` ディレクティブの代わりに `@import 'tailwindcss'` を使用します。

そして、 `src/main.js` でこのCSSがインポートされていることを確認してください（通常は既にインポートされています）。

### 4. Vue.js (Composition API) での記述例

このプロジェクトでは、Vue 3 の **Composition API** と `<script setup>` 構文を使用しています。再利用性とTypeScriptとの相性を考慮して、Composition APIを採用しています。

`src/App.vue` の基本的な記述例：

```vue
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-blue-600">{{ message }}</h1>
      <button 
        @click="reverseMessage"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        メッセージを反転
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue.js with Vite!')

const reverseMessage = () => {
  message.value = message.value.split('').reverse().join('')
}
</script>
```

#### Composition APIの主な特徴

- **`<script setup>`**: より簡潔な記述が可能
- **`ref()`**: リアクティブなデータの定義
- **`composables`**: ロジックの再利用（`src/composables/` ディレクトリ）
- **TypeScript対応**: 将来的にTypeScript化しやすい

#### Composablesの例

再利用可能なロジックは `composables` ディレクトリに分離しています。例えば、テーマ管理のロジックは `src/composables/useTheme.js` に実装されています。

## 5. 開発サーバーの起動

開発中は、以下のコマンドで開発サーバーを起動できます：

```bash
cd new-homepage
npm run dev
```

ブラウザで `http://localhost:5173` （ポート番号は表示されるURLを確認してください）にアクセスすると、アプリケーションが表示されます。

開発サーバーは、ファイルを変更すると自動的にリロードされます（ホットリロード）。

## 6. ビルドとプレビュー

### ビルド

本番環境用にビルドする場合は、以下のコマンドを実行します：

```bash
cd new-homepage
npm run build
```

ビルドが完了すると、`new-homepage/dist` ディレクトリに最適化されたファイルが生成されます。

**重要：** `dist` フォルダ内の `index.html` を直接ブラウザで開いても（`file://` プロトコル）何も表示されません。これは、ESモジュールを使用しているため、HTTPサーバー経由でアクセスする必要があるためです。

- ✅ **動作する**: レンタルサーバーに配置してHTTP経由でアクセス
- ✅ **動作する**: `npm run preview` でローカルプレビューサーバーを起動
- ❌ **動作しない**: `dist/index.html` を直接ブラウザで開く（`file://` プロトコル）

### ビルドしたコードのプレビュー

ビルドしたコードをローカルで確認する場合は、以下のコマンドを実行します：

```bash
cd new-homepage
npm run preview
```

ブラウザで表示されるURLにアクセスすると、ビルドしたアプリケーションを確認できます。
