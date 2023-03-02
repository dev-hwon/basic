//eslint-disable
import { Link, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useState } from "react";
// import { useColorTheme } from "../../context/ColorTheme";
const url = `${process.env.REACT_APP_HOST}`;

export default function GlobalLnb({ fold, onoff }) {
  // const { colortheme, toggleColorTheme } = useColorTheme();
  const handleClick = () => {
    onoff((prev) => !prev);
  };

  return (
    <>
      <div className="global_lnb">
        {/* <button onClick={toggleColorTheme}>color theme : {colortheme}</button> */}
        <LnbControllBtn
          className={"btn_lnb_controll" + (fold ? " fold" : "")}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </LnbControllBtn>
        <nav className="nav_menu nav_menu1">
          <ul>
            <li>
              <Link to={"/layout/main"}>메인</Link>
            </li>
            <li>
              <Link to={"/test"}>임시링크1</Link>
            </li>
            <li>
              <Link to={"/layout/main"}>임시링크2</Link>
            </li>
            <li>
              <Link to={"/layout/main"}>임시링크3</Link>
            </li>
            <li>
              <Link to={"/board"}>보드</Link>
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
const LnbControllBtn = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  background-color: #fff;
  border: none;
  box-shadow: 3px 1px 3px 0 rgba(0, 0, 0, 0.3);
  left: 100%;
  padding: 7px 0;
  transition: all 0.4s;
  > span {
    background: #000;
    border-radius: 2px;
    display: block;
    height: 2px;
    width: 20px;
    margin: 3px auto;
    transition: all 0.4s;
  }
`;
