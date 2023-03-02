import "./Common.css";
import Login from "./pages/member/Login";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Main from "./pages/layouts/Main";
import BoardList from "./pages/board/BoardList";
import EmptyPage from "./pages/EmptyPage";
import BoardIndex from "./pages/board/BoardIndex";
import SettingIndex from "./pages/setting/SettingIndex";
import Testjson from "./pages/test/Testjson";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <EmptyPage />,
    children: [
      { index: true, element: <Main /> },
      { path: "/basic", element: <Main /> },
      { path: "/layout/main", element: <Main /> },
      { path: "/setting", element: <SettingIndex /> },
      { path: "/board", element: <BoardIndex /> },
      { path: "/board/:boardNname", element: <BoardList /> },
      { path: "/test", element: <Testjson /> },
    ],
  },
]);

export default function Init() {
  // const [isLogin, setLogin] = useState(false);
  // return isLogin ? <Index /> : <Login isLogin={setLogin} />;
  return <RouterProvider router={router} />;
}
