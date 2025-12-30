# Tailwind CSS ニューモーフィズム（Neumorphism）ガイド

## 概要

ニューモーフィズムは、柔らかい影とハイライトを使って、要素が表面から浮き上がっているような、または表面に埋め込まれているような見た目を作るデザインスタイルです。

Tailwind CSSには標準でニューモーフィズムのクラスはありませんが、カスタムCSSクラスを追加することで実現できます。

## 追加したクラス

### 浮き上がった効果（Raised）

```html
<!-- 標準サイズ -->
<div class="neu-raised neu-rounded p-6">
  コンテンツ
</div>

<!-- 小さいサイズ -->
<div class="neu-raised-sm neu-rounded p-4">
  コンテンツ
</div>

<!-- 大きいサイズ -->
<div class="neu-raised-lg neu-rounded p-8">
  コンテンツ
</div>
```

### 埋め込まれた効果（Pressed/Inset）

```html
<!-- 標準サイズ -->
<div class="neu-pressed neu-rounded p-6">
  コンテンツ
</div>

<!-- 小さいサイズ -->
<div class="neu-pressed-sm neu-rounded p-4">
  コンテンツ
</div>

<!-- 大きいサイズ -->
<div class="neu-pressed-lg neu-rounded p-8">
  コンテンツ
</div>
```

### 背景色のバリエーション

```html
<!-- 明るい背景 -->
<div class="neu-raised neu-bg-light neu-rounded p-6">
  コンテンツ
</div>

<!-- グレー背景（デフォルト） -->
<div class="neu-raised neu-bg-gray neu-rounded p-6">
  コンテンツ
</div>

<!-- 暗い背景 -->
<div class="neu-raised neu-bg-dark neu-rounded p-6">
  コンテンツ
</div>
```

### 角丸のバリエーション

```html
<!-- 標準の角丸 -->
<div class="neu-raised neu-rounded p-6">
  コンテンツ
</div>

<!-- 大きい角丸 -->
<div class="neu-raised neu-rounded-lg p-6">
  コンテンツ
</div>

<!-- 非常に大きい角丸 -->
<div class="neu-raised neu-rounded-xl p-6">
  コンテンツ
</div>
```

## 使用例

### ボタン

```html
<button class="neu-raised neu-rounded px-6 py-3 text-gray-700 font-semibold hover:neu-raised active:neu-pressed transition-all">
  クリック
</button>
```

### カード

```html
<div class="neu-raised neu-rounded-lg p-8 max-w-md mx-auto">
  <h2 class="text-2xl font-bold mb-4 text-gray-800">タイトル</h2>
  <p class="text-gray-600">コンテンツテキスト</p>
</div>
```

### 入力フィールド

```html
<input 
  type="text" 
  class="neu-pressed neu-rounded-lg px-4 py-3 w-full text-gray-700 focus:neu-raised transition-all"
  placeholder="入力してください"
>
```

### ナビゲーションメニュー

```html
<nav class="neu-raised neu-rounded-lg p-4">
  <ul class="flex space-x-4">
    <li>
      <a href="#" class="neu-pressed neu-rounded px-4 py-2 text-gray-700 hover:neu-raised transition-all">
        ホーム
      </a>
    </li>
    <li>
      <a href="#" class="neu-pressed neu-rounded px-4 py-2 text-gray-700 hover:neu-raised transition-all">
        サービス
      </a>
    </li>
  </ul>
</nav>
```

## 重要なポイント

1. **背景色との調和**: ニューモーフィズムは背景色と同系色の要素で効果的です。背景が`#e0e0e0`（グレー）の場合、要素も同じ色系を使用します。

2. **コントラスト**: テキストのコントラストに注意してください。背景が明るい場合は、テキストは暗めの色を使用します。

3. **影の強さ**: `neu-raised-sm`、`neu-raised`、`neu-raised-lg`で影の強さを調整できます。

4. **インタラクション**: `hover:`や`:active`でインタラクティブな効果を追加できます。

## Tailwind CSSクラスとの組み合わせ

ニューモーフィズムクラスは、Tailwind CSSの他のクラスと組み合わせて使用できます：

```html
<div class="neu-raised neu-rounded-lg p-6 flex items-center justify-between">
  <span class="text-gray-700 font-semibold">タイトル</span>
  <button class="neu-pressed neu-rounded px-4 py-2 text-sm hover:neu-raised transition-all">
    アクション
  </button>
</div>
```

## カスタマイズ

`style.css`で影の強さや色を調整できます：

```css
.neu-raised {
  background: #e0e0e0;
  box-shadow: 
    8px 8px 16px #bebebe,  /* 暗い影 */
    -8px -8px 16px #ffffff; /* 明るい影 */
}
```

数値を変更することで、影の強さを調整できます。
