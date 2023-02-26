//eslint-disable
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useColorTheme } from "../../context/ColorTheme";
const url = `${process.env.REACT_APP_HOST}`;

export default function GlobalLnb({ fold, onoff }) {
  const { colortheme, toggleColorTheme } = useColorTheme("default");
  const handleClick = () => {
    onoff((prev) => !prev);
  };

  return (
    <>
      <div className={"global_lnb" + (fold ? " fold" : "")}>
        <button className="btn_lnb_controll" onClick={handleClick}></button>
        <button onClick={toggleColorTheme}>color theme : {colortheme}</button>
        <nav className="nav_menu nav_menu1">
          <ul>
            <li>
              <Link to={"/layout/testgrid"}>그리드</Link>
            </li>
            <li>
              <Link to={"/layout/main"}>메인테스트</Link>
            </li>
            <li>
              <Link to={"/board"}>보드</Link>
            </li>
            <li>
              <Link to={"/login"}>로그인</Link>
            </li>
            <li>
              <Link to={"/setting"}>setting</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
