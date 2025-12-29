# SimpleHomePage

---

ただの静的なホームページです。  
とはいえせっかくなのでちゃんとした Vue を使ったプロジェクトとして作り直します。

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

# ESLint と HTMLHint のインストール
npm install -D eslint globals htmlhint eslint-plugin-vue
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

#### ③ ESLint の設定 ( `eslint.config.js` )

`SimpleHomePage` プロジェクトのルート直下に `eslint.config.js` ファイルを作成します。Vue.js プロジェクト用の基本的な設定例：

```js
import js from '@eslint/js';
import globals from 'globals';
import vue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['new-homepage/**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'new-homepage/node_modules/**', 'new-homepage/dist/**'],
  },
];
```

### 3. Tailwind CSS の読み込み設定

`src/style.css` の**ファイルの先頭**に以下を追加します。

```css
@import 'tailwindcss';
```

**注意：** Tailwind CSS v4では、従来の `@tailwind` ディレクティブの代わりに `@import 'tailwindcss'` を使用します。

そして、 `src/main.js` でこのCSSがインポートされていることを確認してください（通常は既にインポートされています）。

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
