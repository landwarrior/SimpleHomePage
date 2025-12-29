# Tailwind CSS クラスの決め方ガイド

## 基本的な考え方

Tailwind CSSは「ユーティリティファースト」のCSSフレームワークです。
各クラスが1つのCSSプロパティに対応しているため、クラスを組み合わせてデザインを構築します。

## クラスの命名規則

### 1. プロパティ名 + 値
- `bg-{color}` → 背景色（background-color）
- `text-{color}` → 文字色（color）
- `p-{size}` → パディング（padding）
- `m-{size}` → マージン（margin）

### 2. レスポンシブプレフィックス
- `md:` → 中サイズ以上（768px以上）
- `lg:` → 大サイズ以上（1024px以上）
- `xl:` → 特大サイズ以上（1280px以上）

### 3. 状態プレフィックス
- `hover:` → ホバー時
- `focus:` → フォーカス時
- `active:` → アクティブ時

## 現在のヘッダーのクラス解説

```vue
<header class="bg-teal-600 text-white shadow-md">
```
- `bg-teal-600`: 背景色をティール（teal）の600番（中程度の濃さ）
- `text-white`: 文字色を白
- `shadow-md`: 中程度の影を付ける

```vue
<nav class="container mx-auto px-4">
```
- `container`: 最大幅を設定（レスポンシブ）
- `mx-auto`: 左右のマージンを自動（中央揃え）
- `px-4`: 左右のパディングを1rem（16px）

```vue
<div class="flex items-center justify-between h-16">
```
- `flex`: フレックスボックスレイアウト
- `items-center`: 縦方向の中央揃え
- `justify-between`: 横方向の両端揃え
- `h-16`: 高さを4rem（64px）

```vue
<a class="text-xl font-bold hover:text-teal-200 transition-colors">
```
- `text-xl`: フォントサイズを1.25rem（20px）
- `font-bold`: フォントを太字
- `hover:text-teal-200`: ホバー時に文字色をティール200番（薄い）
- `transition-colors`: 色の変化にアニメーション

```vue
<ul class="hidden md:flex space-x-6">
```
- `hidden`: デフォルトで非表示
- `md:flex`: 中サイズ以上でフレックス表示
- `space-x-6`: 子要素間の横方向のスペースを1.5rem（24px）

## よく使うクラス一覧

### レイアウト
- `flex` / `grid` → レイアウト方式
- `items-center` → 縦方向中央揃え
- `justify-center` → 横方向中央揃え
- `justify-between` → 横方向両端揃え
- `space-x-{n}` → 子要素間の横スペース
- `space-y-{n}` → 子要素間の縦スペース

### サイズ
- `w-full` → 幅100%
- `h-{n}` → 高さ（例: h-16 = 64px）
- `w-{n}` → 幅（例: w-64 = 256px）
- `max-w-{n}` → 最大幅（例: max-w-4xl = 896px）

### 色
- `bg-{color}-{shade}` → 背景色（例: bg-blue-500）
- `text-{color}-{shade}` → 文字色（例: text-gray-800）
- `border-{color}-{shade}` → ボーダー色

### スペーシング
- `p-{n}` → パディング（例: p-4 = 16px）
- `px-{n}` → 左右パディング
- `py-{n}` → 上下パディング
- `m-{n}` → マージン
- `mx-{n}` → 左右マージン
- `my-{n}` → 上下マージン

### タイポグラフィ
- `text-{size}` → フォントサイズ（例: text-xl, text-2xl）
- `font-bold` → 太字
- `font-semibold` → やや太字
- `text-center` → 中央揃え
- `leading-relaxed` → 行間を広めに

### 装飾
- `rounded` → 角丸
- `rounded-lg` → 大きめの角丸
- `shadow` → 影
- `shadow-md` → 中程度の影
- `hover:bg-{color}` → ホバー時の背景色
- `transition-colors` → 色変化のアニメーション

## ヘッダーのデザインオプション例

### オプション1: シンプルな白背景
```vue
<header class="bg-white text-gray-800 shadow-sm border-b">
```

### オプション2: ダークテーマ
```vue
<header class="bg-gray-900 text-white shadow-lg">
```

### オプション3: グラデーション
```vue
<header class="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md">
```

**注意**: Tailwind CSS v4では、`bg-gradient-to-r`が`bg-linear-to-r`に変更されました。

### オプション4: 透明でスクロール時に固定
```vue
<header class="bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm sticky top-0 z-50">
```

## 参考リソース

1. **公式ドキュメント**: https://tailwindcss.com/docs
2. **クラス一覧**: https://tailwindcss.com/docs/utility-first
3. **カラーパレット**: https://tailwindcss.com/docs/customizing-colors
4. **コンポーネント例**: https://tailwindui.com/components
5. **Tailwind CSS Cheat Sheet**: https://nerdcave.com/tailwind-cheat-sheet

## デザインを決める手順

1. **目的を決める**: どんな雰囲気にしたいか（シンプル、モダン、ダークなど）
2. **色を選ぶ**: Tailwindのカラーパレットから選ぶ
3. **レイアウトを決める**: flex/gridで配置を決める
4. **スペーシングを調整**: p/mクラスで余白を調整
5. **インタラクションを追加**: hover/focusで動きを追加
6. **レスポンシブ対応**: md:/lg:プレフィックスで調整
