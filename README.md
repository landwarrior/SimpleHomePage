# SimpleHomePage

---

ただの静的なホームページです。  
とはいえせっかくなのでちゃんとした Vue を使ったプロジェクトとして作り直します。

## 1. プロジェクトの初期化とインストール

```bash
# プロジェクトの作成（Vueテンプレートを使用）
npm create vite@latest new-homepage -- --template vue

# ディレクトリ移動
cd new-homepage

# 依存関係のインストール
npm install

# Tailwind CSS と関連ツールのインストール
npm install -D tailwindcss postcss autoprefixer

# ESLint と HTMLHint のインストール
npm install -D eslint htmlhint
```

### 2. 各ツールの設定

#### ① Tailwind CSS の初期化

```bash
npx tailwindcss init -p
```

作成された `tailwind.config.js` の `content` 欄を以下のように書き換えます（Vueファイル等をスキャン対象にするため）。

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### ② HTMLHint の設定 ( `.htmlhintrc` )

プロジェクトのルート直下に `.htmlhintrc` ファイルを作成します。「doctype宣言がなくてもエラーにしない」設定を記述します。

```json
{
  "doctype-first": false
}
```

#### ③ ESLint の設定 ( `eslint.config.js` )

### 3. Tailwind CSS の読み込み設定

`src/style.css` （もしあれば）または `src/assets/main.css` などの内容を以下に書き換えます。

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

そして、 `src/main.js` でこのCSSがインポートされていることを確認してください。

### 4. Vue.js (Options API) での記述例

`src/App.vue` を、慣れ親しんだ Options API の形式で書き換えてみましょう。Tailwind CSS のクラスも活用します。

```js
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

<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js with Vite!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
```
