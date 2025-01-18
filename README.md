## 主な機能

### 1. 動的ルーティング
- **Pages Router** を使用し、Next.js の動的ルーティング機能を実装。
- **例**: `/todos/[id]` で動的にページを生成し、`id` パラメータに基づいてデータを表示。

---

### 2. useState
- React の `useState` を使用して、ページ内でのローカルな状態管理を実装。
- **使用例**:
  - カウンターアプリで状態を管理し、ボタンをクリックするたびにカウントを増減。

---

### 3. useContext
- グローバルに共有する必要がある小規模な状態を管理。
- `useContext` を利用して、状態とアクションを各コンポーネントに渡す。
- **例**:
  - `CounterContext` を使用して、カウンターの状態を複数のコンポーネント間で共有。

---

### 4. Zustand
- 軽量な状態管理ライブラリ `Zustand` を使用。
- **状態の定義や更新がシンプル**で、**Redux DevTools** と連携可能。
- **例**:
  - `counterStore` ストアを作成し、状態をグローバルに管理。

---

### 5. ミドルウェア
- **Next.js のミドルウェア機能**を使用し、特定のページや API エンドポイントにアクセス制限を実装。
- **例**:
  - `/restricted` へのアクセスを制御し、認証が必要な場合はリダイレクト。

---

### 6. カスタムフック
- 再利用可能なロジックをカスタムフックとして定義。
- **例**:
  - `useAPI` フックで API リクエストを統一し、エラーハンドリングやローディング状態も管理。


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
