import "./Common.css";
import Login from "./pages/member/Login";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Main from "./pages/layouts/Main";
import Testgrid from "./pages/test/Testgrid";
import Tabtest3 from "./pages/test/Tabtest3";
import BoardList from "./pages/board/BoardList";
import EmptyPage from "./pages/EmptyPage";
import BoardIndex from "./pages/board/BoardIndex";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <EmptyPage />,
    children: [
      { index: true, element: <Main /> },
      { path: "/layout/main", element: <Main /> },
      { path: "/layout/testgrid", element: <Testgrid /> },
      { path: "/basic", element: <Main /> },
      { path: "/tabtest", element: <Tabtest3 /> },
      { path: "/board", element: <BoardIndex /> },
      { path: "/board/:boardNname", element: <BoardList /> },
      { path: "/tabtest", element: <BoardList /> },
    ],
  },
]);

export default function Init() {
  // const [isLogin, setLogin] = useState(false);
  // return isLogin ? <Index /> : <Login isLogin={setLogin} />;
  return <RouterProvider router={router} />;
}
