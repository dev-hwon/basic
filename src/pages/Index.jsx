import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ColorThemeProvider, { useColorTheme } from "../context/ColorTheme";
import EmptyPage from "./EmptyPage";
import Main from "./layouts/Main";
import Header from "./layouts/Header";
import Leftsheet from "./layouts/Leftsheet";
import Rightsheet from "./layouts/Rightsheet";
import Tabtest3 from "./test/Tabtest3";
import Testgrid from "./test/Testgrid";
import BoardList from "./board/BoardList";

// import PageController from "./components/PageController";
export default function Index() {
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
              "global_container" +
              (leftsheetActive ? " isLeftSheet" : "") +
              (rightsheetActive ? " isRightSheet" : "")
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
                <Route path="/" element={<Main></Main>} />
                <Route
                  path="/layout/testgrid"
                  element={<Testgrid></Testgrid>}
                />
                <Route path="/layout/main" element={<Main></Main>} />
                <Route path="/basic" element={<Main></Main>} />
                <Route path="/basic/tabtest" element={<Tabtest3></Tabtest3>} />
                <Route path="/basic/board/:name" element={<BoardList />} />
                <Route path="*" element={<EmptyPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </ColorThemeProvider>
  );
}
