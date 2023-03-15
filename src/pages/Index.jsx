import { useState, useEffect, useContext, useCallback } from "react";
import { Outlet } from "react-router-dom";
import ColorThemeProvider, { useColorTheme } from "../context/ColorTheme";
import GlobalHeader from "./layouts/GlobalHeader";
import Footer from "./layouts/Footer";
import GlobalLnb from "./layouts/GlobalLnb";
import PostIts from "./postit/PostIts";
import { GlobalContextProvider } from "../context/Golbal";
// import PageController from "./components/PageController";

export default function Index() {
  const [lnbFold, setLnbFold] = useState(false);
  const [lnbHover, setLnbHover] = useState(false);
  const [postItActive, setPostItActive] = useState(false);
  // console.log(datasContext);

  return (
    <GlobalContextProvider>
      <div
        className={
          "global_wrap" +
          (lnbFold ? " lnbFold" : "") +
          (lnbHover ? " lnbHover" : "")
        }
      >
        <GlobalLnb
          lnbFold={lnbFold}
          setLnbFold={setLnbFold}
          setLnbHover={setLnbHover}
        ></GlobalLnb>
        <PostIts isActive={postItActive}></PostIts>
        <div className="global_container">
          <GlobalHeader
            postItActive={postItActive}
            setPostItActive={setPostItActive}
          ></GlobalHeader>

          <div className="container">
            <Outlet></Outlet>
          </div>
          <Footer />
        </div>
      </div>
      <div id="modal-root"></div>
    </GlobalContextProvider>
  );
}
