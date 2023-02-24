import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ColorThemeProvider, { useColorTheme } from "../context/ColorTheme";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import GlobalLnb from "./layouts/GlobalLnb";
import PostIt from "./layouts/PostIt";
// import PageController from "./components/PageController";

export default function Index() {
  const [lnbFold, setLnbFold] = useState(false);
  const [postItActive, setPostItActive] = useState(false);
  const handleClickPostIt = () => {
    setPostItActive(!postItActive);
  };
  return (
    <ColorThemeProvider>
      <div className="global_wrap default_theme">
        <GlobalLnb fold={lnbFold} onoff={setLnbFold}></GlobalLnb>
        <PostIt active={postItActive}></PostIt>
        <div className={"global_container" + (lnbFold ? " lnb_fold" : "")}>
          <Header></Header>
          <div className="container">
            <button onClick={handleClickPostIt}>
              rightsheet_active_button
            </button>
            <Outlet></Outlet>
          </div>
          <Footer />
        </div>
      </div>
    </ColorThemeProvider>
  );
}
