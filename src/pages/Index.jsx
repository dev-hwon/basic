import { useState, useEffect, useContext, useCallback } from "react";
import { Outlet } from "react-router-dom";
import ColorThemeProvider, { useColorTheme } from "../context/ColorTheme";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import GlobalLnb from "./layouts/GlobalLnb";
import PostIts from "./postit/PostIts";
import { GlobalContextProvider } from "../context/Golbal";
// import PageController from "./components/PageController";

export default function Index() {
  const [lnbFold, setLnbFold] = useState(false);
  const [postItActive, setPostItActive] = useState(false);
  // console.log(datasContext);

  return (
    <GlobalContextProvider>
      <div className={"global_wrap" + (lnbFold ? " lnb_fold" : "")}>
        <GlobalLnb fold={lnbFold} onoff={setLnbFold}></GlobalLnb>
        <PostIts isActive={postItActive}></PostIts>
        <div className="global_container">
          <Header
            fold={lnbFold}
            isActive={postItActive}
            postItActive={setPostItActive}
          ></Header>
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
