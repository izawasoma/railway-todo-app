# Railway中級編 Todoアプリをアップデートしよう

## バージョンを上げる

[[Node.js] 依存パッケージをアップデートする](https://blog.katsubemakito.net/nodejs/update-require-module)

```
ncu //アップデート対象の確認
ncu -u //最新のパッケージ情報に書き換え
```
実行後、「npm install」の実行を忘れずに行う。

## react-router-dom v5.0 -> v6.0での変更点

[React Router を v5 から v6 にアップデートしてみました](https://dev.classmethod.jp/articles/react-router-5to6/#toc-3)

他にも、Routerのプロパティが「component」から「element」に変わってたりする。

## 認証状態によってプライベートルーターを設定する

```JavaScript
export const Router = () => {
  const auth = useSelector((state) => state.auth.isSignIn);
  console.log(auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/signin`} element={<SignIn />} />
        <Route path={`/signup`} element={<SignUp />} />
        <Route path={`/`} element={<PrivateRouter />}>
          <Route path={`/`} element={<Home />} />
          <Route path={`/task/new`} element={<NewTask />} />
          <Route path={`/list/new`} element={<NewList />} />
          <Route path={`/lists/:listId/tasks/:taskId`} element={<EditTask />} />
          <Route path={`/lists/:listId/edit`} element={<EditList />} />
        </Route>
        <Route path="/*" element={NotFound} />
      </Routes>
    </BrowserRouter>
  )
}
```

```JavaScript
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRouter = () => {
  const auth = useSelector((state) => state.auth.isSignIn)
  return auth ? <Outlet/> : <Navigate to="/signup" />;
}
```