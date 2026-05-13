# BERGIA キャリアドラフト

学生と企業をつなぐキャリアドラフトプラットフォーム。

## 技術スタック

- **Frontend/Backend**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL (Render)
- **ORM**: Prisma
- **Deploy**: Vercel

---

## ローカル開発

```bash
npm install
cp .env.example .env
# .env の DATABASE_URL を設定
npx prisma migrate dev
npm run dev
```

---

## デプロイ手順

### 1. Render でデータベース作成

1. [render.com](https://render.com) にログイン
2. **New** → **PostgreSQL** をクリック
3. 以下を設定:
   - **Name**: `bergia-db`
   - **Region**: Singapore (Asia Pacific に近いもの)
   - **Plan**: Free
4. 作成後、**External Database URL** をコピーしておく

### 2. Vercel にデプロイ

1. このプロジェクトを GitHub にプッシュ
2. [vercel.com](https://vercel.com) で **New Project** → GitHubリポジトリを選択
3. **Environment Variables** に以下を追加:
   ```
   DATABASE_URL = <Render の External Database URL>
   ```
4. **Deploy** をクリック

### 3. データベースマイグレーション

デプロイ後、ローカルから Render のDBにマイグレーションを適用:

```bash
# .env の DATABASE_URL を Render の External Database URL に変更
npx prisma migrate deploy
```

または Vercel のビルドコマンドに追加:
```
prisma migrate deploy && prisma generate && next build
```

---

## 環境変数

| 変数名 | 説明 |
|--------|------|
| `DATABASE_URL` | PostgreSQL接続URL (Render) |

---

## API エンドポイント

| Method | Path | 説明 |
|--------|------|------|
| POST | `/api/students` | 学生エントリー登録 |
| POST | `/api/enterprises` | 企業お問い合わせ登録 |
