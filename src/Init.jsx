import "./Common.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Main from "./pages/Main";
import { useState, useEffect, useContext } from "react";
import EmptyPage from "./pages/EmptyPage";
import Leftsheet from "./components/Leftsheet";
import Board from "./pages/Board";
import ColorThemeProvider, { ColorThemeContext } from "./context/ColorTheme";
import Tabtest2 from "./pages/Tabtest2";

function Init() {
  return (
    <ColorThemeProvider>
      <BrowserRouter>
        <Testdiv></Testdiv>
        <Leftsheet></Leftsheet>
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="/board/:name" element={<Board></Board>} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </ColorThemeProvider>
  );
}

export default Init;

function Testdiv() {
  const { colortheme, toggleColorTheme } = useContext(ColorThemeContext);
  return (
    <div>
      colorTheme : <span>{colortheme}</span>
      <button onClick={() => toggleColorTheme()}> toggle</button>
    </div>
  );
}
