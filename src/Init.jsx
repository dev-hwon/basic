import "./Common.css";
import Login from "./pages/member/Login";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./context/Golbal";
import Index from "./pages/Index";
import Main from "./pages/layouts/Main";
import EmptyPage from "./pages/EmptyPage";
import BoardIndex from "./pages/board/BoardIndex";
import SettingIndex from "./pages/setting/SettingIndex";
import FileIndex from "./pages/file/FileIndex";
import BoardView from "./components/board/BoardView";
import BoardWrite from "./components/board/BoardWrite";
import TodosIndex from "./pages/todos/TodosIndex";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <EmptyPage />,
    children: [
      { index: true, element: <Main /> },
      { path: "/basic", element: <Main /> },
      { path: "/layout/main", element: <Main /> },
      { path: "/todos", element: <TodosIndex /> },
      { path: "/file", element: <FileIndex /> },
      { path: "/board", element: <BoardIndex /> },
      { path: "/board/:boardName", element: <BoardIndex /> },
      { path: "/board/:boardName/id/:id", element: <BoardView /> },
      { path: "/board/:boardName/write", element: <BoardWrite /> },
      { path: "/setting", element: <SettingIndex /> },
    ],
  },
]);

export default function Init() {
  // const [isLogin, setLogin] = useState(false);
  // return isLogin ? <Index /> : <Login isLogin={setLogin} />;
  return <RouterProvider router={router} />;
}
