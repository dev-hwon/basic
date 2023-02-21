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
import Rightsheet from "./components/Rightsheet";
import Board from "./pages/Board";
import ColorThemeProvider, { useColorTheme } from "./context/ColorTheme";
import Tabtest3 from "./pages/Tabtest3";
import Header from "./components/Header";
import Testgrid from "./pages/Testgrid";
import Login from "./pages/Login";
// import PageController from "./components/PageController";

export default function Index() {
  const [isLogin, setLogin] = useState(false);
  const [leftsheetActive, setLeftsheetActive] = useState(false);
  const [rightsheetActive, setRightsheetActive] = useState(false);
  const handleClickLeftsheet = () => {
    setLeftsheetActive(!leftsheetActive);
  };
  const handleClickRightsheet = () => {
    setRightsheetActive(!rightsheetActive);
  };
  return (
    <ColorThemeProvider>
      <div className="global_wrap default_theme">
        <BrowserRouter>
          <Leftsheet
            active={leftsheetActive}
            onoff={setLeftsheetActive}
          ></Leftsheet>
          <Rightsheet
            active={rightsheetActive}
            onoff={setRightsheetActive}
          ></Rightsheet>

          <div
            className={
              "global_container" + (leftsheetActive ? " isLeftSheet" : "")
            }
          >
            <div className="container">
              <button onClick={handleClickLeftsheet}>
                leftsheet_active_button
              </button>
              <button onClick={handleClickRightsheet}>
                rightsheet_active_button
              </button>
              <Header></Header>
              <Routes>
                <Route path="/basic/" element={<Testgrid></Testgrid>} />
                <Route path="/basic/main" element={<Main></Main>} />
                <Route path="/basic/tabtest" element={<Tabtest3></Tabtest3>} />
                <Route path="/basic/login" element={<Login></Login>} />
                <Route path="/basic/board/:name" element={<Board></Board>} />
                <Route path="*" element={<EmptyPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </ColorThemeProvider>
  );
}
