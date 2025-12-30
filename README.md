# SimpleHomePage

---

ただの静的なホームページです。  
とはいえせっかくなのでちゃんとした Vue 3 + Composition API + TypeScript を使ったモダンなフロントエンドプロジェクトとして作り直します。

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

# Vue Router のインストール
npm install vue-router@4

# TypeScript と関連ツールのインストール
npm install -D typescript @vue/tsconfig
```

すでに new-homepage 内の package.json に書かれているので、クローンして構築する場合は new-homepage で `npm install` するだけで大丈夫です。

### 2. 各ツールの設定

#### ① Tailwind CSS の設定（v4）

Tailwind CSS v4では、設定ファイル（`tailwind.config.js`）は不要です。代わりにViteプラグインを使用します。

`vite.config.ts`（または `vite.config.js`）を以下のように更新します：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      // @/ で src/ を参照できるようにエイリアスを設定
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

**TypeScriptを使用する場合の注意：**
- ファイル名を `vite.config.js` → `vite.config.ts` に変更
- `node:url` モジュールを使用してパスエイリアスを設定（`@/` で `src/` を参照可能）

#### ② HTMLHint の設定 ( `.htmlhintrc` )

`SimpleHomePage` プロジェクトのルート直下に `.htmlhintrc` ファイルを作成します。「doctype宣言がなくてもエラーにしない」設定を記述します。

```json
{
  "doctype-first": false
}
```

#### ③ Biome の設定 ( `biome.json` )

`SimpleHomePage` プロジェクトのルート直下に `biome.json` ファイルを作成します。BiomeはESLintとPrettierを統合した高速なLinter/Formatterです。

設定ファイルは既に作成されています。必要に応じて設定を調整できます。

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

そして、 `src/main.ts`（または `src/main.js`）でこのCSSがインポートされていることを確認してください（通常は既にインポートされています）。

### 4. Vue.js (Composition API) での記述例

このプロジェクトでは、Vue 3 の **Composition API** と `<script setup>` 構文を使用しています。再利用性とTypeScriptとの相性を考慮して、Composition APIを採用しています。

`src/App.vue` の基本的な記述例：

```vue
<!--
  <template> セクション: HTMLのような見た目を定義します
  ここに書いた内容が実際にブラウザに表示されます
-->
<template>
  <!-- Tailwind CSSのクラスを使用してスタイリング -->
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md">
      <!--
        {{ message }}: データバインディング（マスタッシュ構文）
        JavaScriptの変数 message の値を表示します
        変数の値が変わると、自動的に画面も更新されます（リアクティブ）
      -->
      <h1 class="text-2xl font-bold text-blue-600">{{ message }}</h1>

      <!--
        @click="reverseMessage": イベントハンドリング
        ボタンがクリックされたときに reverseMessage という関数を実行します
        @click は v-on:click の短縮記法です
      -->
      <button
        @click="reverseMessage"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        メッセージを反転
      </button>
    </div>
  </div>
</template>

<!--
  <script setup> セクション: JavaScriptのロジックを書きます
  setup という単語がついていることで、Composition APIの構文が使えます
  ここで定義した変数や関数は、<template> セクションで使用できます
-->
<script setup>
// Vue から ref という関数をインポートします
// ref は、リアクティブ（反応的）なデータを作るための関数です
import { ref } from 'vue'

// ref() で囲むことで、message がリアクティブな変数になります
// この変数の値が変わると、画面に自動的に反映されます
// 初期値として 'Hello Vue.js with Vite!' を設定しています
const message = ref('Hello Vue.js with Vite!')

// 関数を定義します。この関数はボタンがクリックされたときに呼び出されます
const reverseMessage = () => {
  // ref() で作った変数にアクセスするときは .value を使います
  // .value で実際の値を取得・設定できます
  // ここでは、文字列を反転させています：
  //   1. split('') で文字列を1文字ずつの配列に分割
  //   2. reverse() で配列の順序を反転
  //   3. join('') で配列を再び文字列に結合
  message.value = message.value.split('').reverse().join('')
}
</script>
```

#### Composition APIの主な特徴

- **`<script setup>`**: より簡潔な記述が可能
- **`ref()`**: リアクティブなデータの定義
- **`composables`**: ロジックの再利用（`src/composables/` ディレクトリ）
- **TypeScript対応**: `<script setup lang="ts">` で型安全なコードを書ける

#### Composablesの例

再利用可能なロジックは `composables` ディレクトリに分離しています。例えば、テーマ管理のロジックは `src/composables/useTheme.js` に実装されています。

### 5. TypeScript の設定

このプロジェクトでは、**TypeScript** を使用して型安全なコードを書いています。

**TypeScriptとは？**
- JavaScriptに型システムを追加したプログラミング言語
- コンパイル時にエラーを検出できるため、バグを早期発見できる
- IDE（VS Codeなど）での自動補完やリファクタリングが強力
- 大規模なプロジェクトで特に有効

**TypeScriptのメリット**
- ✅ **型安全**: 変数や関数の型を明示することで、誤った使い方を防げる
- ✅ **エディタ支援**: コード補完やエラー表示が充実
- ✅ **リファクタリング**: 型情報があるため、安全にコードを変更できる
- ✅ **ドキュメント化**: 型がそのままドキュメントになる

#### TypeScript のインストール

```bash
cd new-homepage
npm install -D typescript @vue/tsconfig @types/node
```

**パッケージの説明：**
- `typescript`: TypeScriptコンパイラ本体
- `@vue/tsconfig`: Vue.js用のTypeScript設定のプリセット
- `@types/node`: Node.jsの型定義ファイル（`node:url`、`node:path`などのNode.js組み込みモジュールの型定義に必要）

#### TypeScript の設定ファイル

プロジェクトルートに `tsconfig.json` を作成します：

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "include": ["src/**/*", "src/**/*.vue", "vite.config.ts"],
  "exclude": ["node_modules"],
  "compilerOptions": {
    "composite": true,
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "types": ["vite/client", "node"]
  }
}
```

**設定ファイルの説明：**
- `extends`: Vue用のTypeScript設定を継承
- `include`: TypeScriptで処理するファイルのパターン
  - `vite.config.ts`を含めることで、Vite設定ファイルも型チェックの対象になります
- `exclude`: 処理から除外するディレクトリ
- `compilerOptions`: TypeScriptコンパイラのオプション
  - `baseUrl` / `paths`: インポートパスのエイリアス設定（`@/` で `src/` を参照可能）
  - `types`: 型定義ファイルの場所
    - `"vite/client"`: Viteの型定義（`import.meta.env`など）
    - `"node"`: Node.jsの型定義（`node:url`、`node:path`などの組み込みモジュール用）

#### Vue 3 + TypeScript での記述例

TypeScriptを使用する場合、`<script setup>` に `lang="ts"` を追加します：

```vue
<!--
  <template> セクションは JavaScript と同じです
  見た目の定義に変更はありません
-->
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

<!--
  <script setup lang="ts">: TypeScriptを使用することを明示
  lang="ts" を追加することで、TypeScriptの構文が使えます
-->
<script setup lang="ts">
// Vue から ref をインポート（TypeScriptでも同じ）
import { ref } from 'vue'

// ref() の使い方は同じですが、型を明示できます
// ref<string> と書くことで、「この変数は文字列型」と明示
// 型を書かなくても、初期値から自動的に型を推論してくれます（型推論）
const message = ref<string>('Hello Vue.js with TypeScript!')
// または、型推論を利用して型を省略することも可能：
// const message = ref('Hello Vue.js with TypeScript!')

// 関数にも型を付けられます
// この関数は引数を受け取らず、戻り値もない（void）ことを明示
const reverseMessage = (): void => {
  // .value でアクセスするのは同じ
  // TypeScriptは message.value が文字列型であることを知っているので、
  // 文字列のメソッド（split, reverse, join）を安全に使えます
  message.value = message.value.split('').reverse().join('')
}

// 型を明示した関数の例
// 数値を2倍にする関数
const doubleNumber = (num: number): number => {
  // num は number型、戻り値も number型
  // もし num に文字列を渡そうとすると、コンパイル時にエラーになります
  return num * 2
}

// 型推論の例
const count = ref(0)  // TypeScriptが自動的に ref<number> と推論
const name = ref('Vue')  // TypeScriptが自動的に ref<string> と推論
</script>
```

#### ファイル拡張子の変更

TypeScriptを使用する場合、以下のようにファイル拡張子を変更します：

- **JavaScriptファイル**: `.js` → `.ts`
  - 例：`src/main.js` → `src/main.ts`
  - 例：`src/composables/useTheme.js` → `src/composables/useTheme.ts`

- **Vueコンポーネント**: `.vue` ファイル内の `<script setup>` に `lang="ts"` を追加
  - 例：`<script setup>` → `<script setup lang="ts">`

#### 型定義の例

TypeScriptでは、オブジェクトや配列の型も定義できます：

```typescript
// インターフェース（オブジェクトの型を定義）
interface Link {
  url: string      // url は文字列型
  name: string     // name は文字列型
}

// 型定義を使った配列
const links: Link[] = [
  { url: 'https://example.com', name: 'Example' },
  { url: 'https://vuejs.org', name: 'Vue.js' },
]

// 型定義を使った関数
function addLink(newLink: Link): void {
  links.push(newLink)  // Link型のオブジェクトのみ追加可能
}
```

#### TypeScriptの型チェック

TypeScriptの型チェックを実行するには：

```bash
cd new-homepage
# TypeScriptコンパイラで型チェック
npx tsc --noEmit

# または、package.jsonにスクリプトを追加して実行
npm run type-check
```

### 6. Vue Router の設定

このプロジェクトでは、Vue Router を使用してSPA（Single Page Application）として構築されています。

**SPAとは？**
- 通常のWebサイト：ページを移動するたびに、サーバーから新しいHTMLファイルを読み込む
- SPA：1つのHTMLファイルだけを読み込み、JavaScriptでページの内容を切り替える
- メリット：ページ遷移が速い、スムーズなユーザー体験、アプリのような操作感

**Vue Routerとは？**
- Vue.jsでSPAを実現するための公式ライブラリ
- URLのパス（例：`/linkpage`）に応じて、表示するコンポーネントを切り替える
- ブラウザの戻る/進むボタンも正常に動作する

#### Vue Router のインストール

```bash
cd new-homepage
npm install vue-router@4
```

#### ルーティングの設定

`src/main.ts`（または `src/main.js`）でルーティングを設定しています：

```typescript
// Vue Router から必要な関数をインポートします
// createRouter: ルーターインスタンスを作成する関数
// createWebHistory: ブラウザの履歴APIを使用するモード（通常のURL形式）
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// 各ページのコンポーネントをインポートします
// これらのコンポーネントが、URLに応じて表示されます
import HomePage from './components/HomePage.vue';
import LinkPage from './components/LinkPage.vue';

// ルート（URLパスとコンポーネントの対応関係）を定義します
// RouteRecordRaw[] という型を指定することで、ルートの型が明確になります
// 配列の中に、各ルートの設定をオブジェクトとして書きます
const routes: RouteRecordRaw[] = [
  // path: URLのパス（例：http://example.com/）
  // component: そのパスで表示するコンポーネント
  { path: '/', component: HomePage },           // トップページ（/）では HomePage を表示
  { path: '/linkpage', component: LinkPage },  // /linkpage では LinkPage を表示
];

// createRouter でルーターインスタンスを作成します
const router = createRouter({
  // history: URLの管理方法を指定
  // createWebHistory() を使うと、通常のURL形式（例：/linkpage）になります
  // 他にも createWebHashHistory() という方法もあります（例：/#/linkpage）
  history: createWebHistory(),
  // routes: 上で定義したルートの配列を指定
  routes,
});

// Vueアプリにルーターを登録します
// .use(router) でルーター機能を有効化
// これにより、アプリ全体でルーティングが使えるようになります
createApp(App).use(router).mount('#app');
```

#### ルーティングの使用例

コンポーネント内でルーティングを使用する場合：

```vue
<script setup lang="ts">
// Vue Router から必要な機能をインポートします
// RouterLink: ページ間を移動するためのリンクコンポーネント（<a>タグの代わり）
// useRoute: 現在のルート情報（URLパスなど）を取得するための関数
import { RouterLink, useRoute } from 'vue-router'

// useRoute() を呼び出すと、現在のルート情報が入ったオブジェクトが返されます
// このオブジェクトには、path（パス）、params（パラメータ）、query（クエリ）などの情報が含まれます
// TypeScriptでは、useRoute()の戻り値の型が自動的に推論されます
const route = useRoute()
</script>

<template>
  <!--
    RouterLink: Vue Router専用のリンクコンポーネント
    通常の <a> タグと違い、ページ全体を再読み込みせずに、コンポーネントだけを切り替えます

    to: 移動先のパスを指定します
    例：to="/linkpage" とすると、/linkpage に移動します

    通常の <a> タグと同様に、クリックするとリンク先に移動しますが、
    ページ全体の再読み込みは発生せず、スムーズに切り替わります
  -->
  <RouterLink to="/linkpage">リンク集</RouterLink>

  <!--
    現在のルート情報を表示します
    route.path で現在のURLパス（例："/linkpage"）を取得できます
    データバインディング（{{ }}）を使って、画面に表示します
  -->
  <p>現在のパス: {{ route.path }}</p>

  <!--
    補足：通常の <a> タグとの違い

    ❌ 通常の <a> タグ（ページ全体が再読み込みされる）
    <a href="/linkpage">リンク集</a>

    ✅ RouterLink（コンポーネントだけが切り替わる、高速）
    <RouterLink to="/linkpage">リンク集</RouterLink>
  -->
</template>
```

#### 現在のルート構成

- `/`: ホームページ（`HomePage.vue`）
- `/linkpage`: リンク集ページ（`LinkPage.vue`）

## 7. 開発サーバーの起動

開発中は、以下のコマンドで開発サーバーを起動できます：

```bash
cd new-homepage
npm run dev
```

ブラウザで `http://localhost:5173` （ポート番号は表示されるURLを確認してください）にアクセスすると、アプリケーションが表示されます。

開発サーバーは、ファイルを変更すると自動的にリロードされます（ホットリロード）。

## 8. ビルドとプレビュー

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
