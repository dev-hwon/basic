import "./Common.css";
import Login from "./pages/Login";
import { useState } from "react";
import Index from "./pages/Index";

export default function Init() {
  const [isLogin, setLogin] = useState(false);
  return isLogin ? <Index /> : <Login isLogin={setLogin} />;
}
