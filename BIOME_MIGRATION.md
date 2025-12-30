# Biomeへの移行ガイド

## Biomeとは

Biomeは、ESLintとPrettierを統合した高速なLinter/Formatterです。
- **高速**: Rustで実装されており、ESLint/Prettierより最大35倍高速
- **統合**: LinterとFormatterが1つのツールに統合
- **設定が簡単**: 1つの設定ファイル（`biome.json`）で管理

## インストール手順

### 1. Biomeのインストールと設定の移行

```bash
npm install --save-dev --save-exact @biomejs/biome
```

eslint.config.js は package.json の type が commonjs になっていると import / export の構文エラーになるので、 eslint.config.mjs にリネームします。  
移行コマンドは以下の通りです。

```bash
# インスパイアされたルールも移行する
npx @biomejs/biome migrate eslint --write --include-inspired
```

Prettier の移行は以下のコマンドです。

```bash
npx @biomejs/biome migrate prettier --write
```

### 2. VS Code拡張機能のインストール

VS Codeの拡張機能マーケットプレイスで「Biome」を検索し、公式拡張機能をインストールしてください。

拡張機能ID: `biomejs.biome`

### 3. 設定ファイルの確認

`biome.json` が既に作成されています。必要に応じて設定を調整してください。

## 使用方法

### コマンドライン

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

### VS Codeでの使用

1. **自動フォーマット**: ファイル保存時に自動的にフォーマットされます（`formatOnSave`が有効な場合）
2. **手動フォーマット**: `Shift + Alt + F`（Windows/Linux）または `Shift + Option + F`（Mac）
3. **問題の表示**: エディタにリントエラーが表示されます

## ESLint/Prettierからの移行

### 削除したパッケージ

以下のパッケージは削除されました（Biomeで代替）：
- `eslint`
- `eslint-plugin-vue`
- `globals`
- `prettier`（使用していた場合）

### 設定ファイル

- `eslint.config.js` → `biome.json`（新規作成）
- `.prettierrc` → `biome.json`に統合

## Vue.jsのサポート

BiomeはVue.jsのSFC（Single File Component）をサポートしていますが、一部のルールは限定的です。

- ✅ **フォーマット**: Vueファイルのフォーマットに対応
- ✅ **基本的なリント**: JavaScript/TypeScript部分のリントに対応
- ⚠️ **Vue固有のルール**: ESLintプラグインほど詳細なルールはありません

Vueファイルについては、Volar拡張機能と併用することを推奨します。

## 設定のカスタマイズ

`biome.json`を編集して、プロジェクトに合わせて設定を調整できます。

主な設定項目：
- `formatter`: フォーマット設定（インデント、行幅など）
- `linter`: リントルールの設定
- `javascript`: JavaScript固有の設定

詳細は [Biome公式ドキュメント](https://biomejs.dev/ja/) を参照してください。

## トラブルシューティング

### VS CodeでBiomeが動作しない場合

1. Biome拡張機能がインストールされているか確認
2. VS Codeを再起動
3. ワークスペース設定（`.vscode/settings.json`）を確認

### フォーマットが適用されない場合

1. ファイルタイプがBiomeでサポートされているか確認
2. `biome.json`の設定を確認
3. VS CodeのデフォルトフォーマッターがBiomeに設定されているか確認
