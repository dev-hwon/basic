import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ColorThemeProvider, { useColorTheme } from "../context/ColorTheme";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import GlobalLnb from "./layouts/GlobalLnb";
import PostIt from "./layer/PostIt";
// import PageController from "./components/PageController";

export default function Index() {
  const [lnbFold, setLnbFold] = useState(false);
  const [postItActive, setPostItActive] = useState(false);
  return (
    <ColorThemeProvider>
      <div className="global_wrap default_theme">
        <GlobalLnb fold={lnbFold} onoff={setLnbFold}></GlobalLnb>
        <PostIt isActive={postItActive}></PostIt>
        <div className={"global_container" + (lnbFold ? " lnb_fold" : "")}>
          <Header
            isActive={postItActive}
            postItActive={setPostItActive}
          ></Header>
          <div className="container">
            <Outlet></Outlet>
          </div>
          <Footer />
        </div>
      </div>
    </ColorThemeProvider>
  );
}
