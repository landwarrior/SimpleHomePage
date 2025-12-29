# ヘッダーデザインオプション

## 現在のヘッダーのクラス解説（行ごと）

```vue
<!-- 48行目: ヘッダー全体 -->
<header class="bg-teal-600 text-white shadow-md">
```
**意味:**
- `bg-teal-600`: 背景色をティール（青緑）の600番（中程度の濃さ）
- `text-white`: 文字色を白に設定
- `shadow-md`: 中程度の影を付ける（立体感）

**変更例:**
- `bg-blue-600` → 青背景
- `bg-gray-800` → ダークグレー背景
- `bg-white` → 白背景（この場合`text-gray-800`などに変更）

---

```vue
<!-- 49行目: ナビゲーションコンテナ -->
<nav class="container mx-auto px-4">
```
**意味:**
- `container`: 最大幅を設定（レスポンシブに自動調整）
- `mx-auto`: 左右のマージンを自動（中央揃え）
- `px-4`: 左右のパディングを1rem（16px）

**変更例:**
- `px-6` → パディングを1.5rem（24px）に増やす
- `max-w-7xl` → 最大幅を1280pxに制限

---

```vue
<!-- 50行目: フレックスコンテナ -->
<div class="flex items-center justify-between h-16">
```
**意味:**
- `flex`: フレックスボックスレイアウトを使用
- `items-center`: 縦方向（交差軸）の中央揃え
- `justify-between`: 横方向（主軸）の両端揃え（ロゴとメニューを両端に）
- `h-16`: 高さを4rem（64px）

**変更例:**
- `h-20` → 高さを5rem（80px）に増やす
- `justify-start` → 左揃え
- `justify-center` → 中央揃え

---

```vue
<!-- 51行目: ロゴ/サイト名 -->
<a href="/" class="text-xl font-bold hover:text-teal-200 transition-colors">
```
**意味:**
- `text-xl`: フォントサイズを1.25rem（20px）
- `font-bold`: フォントを太字
- `hover:text-teal-200`: ホバー時に文字色をティール200番（薄い色）に変更
- `transition-colors`: 色の変化にスムーズなアニメーション

**変更例:**
- `text-2xl` → フォントサイズを1.5rem（24px）に
- `hover:text-teal-100` → ホバー時により薄い色に
- `hover:underline` → ホバー時に下線を追加

---

```vue
<!-- 56行目: デスクトップメニュー -->
<ul class="hidden md:flex space-x-6">
```
**意味:**
- `hidden`: デフォルトで非表示（モバイルでは非表示）
- `md:flex`: 中サイズ以上（768px以上）でフレックス表示
- `space-x-6`: 子要素（li）間の横方向のスペースを1.5rem（24px）

**変更例:**
- `space-x-4` → スペースを1rem（16px）に減らす
- `space-x-8` → スペースを2rem（32px）に増やす

---

```vue
<!-- 62行目: メニューリンク -->
:class="[
  'px-3 py-2 rounded hover:bg-teal-700 transition-colors',
  activeTitle === menu.title ? 'bg-teal-800 font-semibold' : ''
]"
```
**意味:**
- `px-3`: 左右のパディングを0.75rem（12px）
- `py-2`: 上下のパディングを0.5rem（8px）
- `rounded`: 角を丸くする
- `hover:bg-teal-700`: ホバー時に背景色をティール700番（濃い）に
- `transition-colors`: 色変化のアニメーション
- 条件付き: アクティブな場合は`bg-teal-800`（さらに濃い）と`font-semibold`（やや太字）

**変更例:**
- `px-4 py-3` → パディングを増やす
- `rounded-lg` → より大きな角丸
- `hover:bg-teal-500` → ホバー時により薄い色に

---

## デザインオプション例

### オプション1: シンプルな白背景
```vue
<header class="bg-white text-gray-800 shadow-sm border-b border-gray-200">
  <!-- ロゴ -->
  <a href="/" class="text-xl font-bold hover:text-gray-600 transition-colors">
  
  <!-- メニューリンク -->
  :class="[
    'px-3 py-2 rounded hover:bg-gray-100 transition-colors',
    activeTitle === menu.title ? 'bg-gray-200 font-semibold text-gray-900' : ''
  ]"
```

### オプション2: ダークテーマ
```vue
<header class="bg-gray-900 text-white shadow-lg">
  <!-- ロゴ -->
  <a href="/" class="text-xl font-bold hover:text-gray-300 transition-colors">
  
  <!-- メニューリンク -->
  :class="[
    'px-3 py-2 rounded hover:bg-gray-800 transition-colors',
    activeTitle === menu.title ? 'bg-gray-700 font-semibold' : ''
  ]"
```

### オプション3: グラデーション背景
```vue
<header class="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
  <!-- ロゴ -->
  <a href="/" class="text-xl font-bold hover:text-blue-100 transition-colors">
  
  <!-- メニューリンク -->
  :class="[
    'px-3 py-2 rounded hover:bg-white/20 transition-colors',
    activeTitle === menu.title ? 'bg-white/30 font-semibold' : ''
  ]"
```

### オプション4: 透明でスクロール時に固定
```vue
<header class="bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm sticky top-0 z-50">
  <!-- backdrop-blur-sm: 背景をぼかす -->
  <!-- sticky top-0: スクロール時に上部に固定 -->
  <!-- z-50: 他の要素より前面に表示 -->
```

### オプション5: ミニマル（細いヘッダー）
```vue
<header class="bg-white text-gray-800 border-b border-gray-200">
  <!-- 高さを減らす -->
  <div class="flex items-center justify-between h-12">
  
  <!-- ロゴを小さく -->
  <a href="/" class="text-lg font-semibold hover:text-gray-600">
  
  <!-- メニューもシンプルに -->
  :class="[
    'px-2 py-1 text-sm hover:text-gray-600 transition-colors',
    activeTitle === menu.title ? 'font-semibold border-b-2 border-gray-800' : ''
  ]"
```

### オプション6: カラフル（アクセントカラー使用）
```vue
<header class="bg-indigo-600 text-white shadow-md">
  <!-- ロゴ -->
  <a href="/" class="text-xl font-bold hover:text-indigo-200 transition-colors">
  
  <!-- メニューリンク -->
  :class="[
    'px-3 py-2 rounded hover:bg-indigo-700 transition-colors',
    activeTitle === menu.title ? 'bg-indigo-800 font-semibold' : ''
  ]"
```

## クラスを選ぶコツ

1. **公式ドキュメントを参照**: https://tailwindcss.com/docs
   - 検索バーで「background color」など検索
   - カラーパレット: https://tailwindcss.com/docs/customizing-colors

2. **ブラウザの開発者ツールで試す**
   - 要素を選択してクラスを追加/削除して確認

3. **よく使う組み合わせを覚える**
   - `flex items-center justify-between` → 横並びで両端揃え
   - `px-4 py-2` → パディング
   - `hover:bg-{color}` → ホバー時の背景色
   - `transition-colors` → 色変化のアニメーション

4. **レスポンシブを意識**
   - `md:`プレフィックスで中サイズ以上でのみ適用
   - `hidden md:flex` → モバイルでは非表示、デスクトップでは表示
