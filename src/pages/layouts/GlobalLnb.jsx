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
          <img
            src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/icon_menu.svg`}
            alt=""
          />
        </LnbControllBtn>
        <div className="main_logo">
          <Link to={"/"}></Link>
        </div>
        <nav className="nav_menu nav_menu1">
          <ul>
            <li>
              <Link to={"/layout/main"} className="active">
                <img
                  src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/icon_report.svg`}
                  alt=""
                />
                <div className="menu_name">클리닉 리포트</div>
              </Link>
            </li>
            <li>
              <Link to={"/layout/todos"}>
                <img
                  src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/icon_todos.svg`}
                  alt=""
                />
                <div className="menu_name">할일관리</div>
              </Link>
            </li>
            <li>
              <Link to={"/layout/folder"}>
                <img
                  src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/icon_folder.svg`}
                  alt=""
                />
                <div className="menu_name">업무폴더</div>
              </Link>
            </li>
            <li>
              <Link to={"/file"}>
                <img
                  src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/icon_cloud.svg`}
                  alt=""
                />
                <div className="menu_name">파일함</div>
              </Link>
            </li>
            <li>
              <Link to={"/setting"}>
                <img
                  src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/icon_setting.svg`}
                  alt=""
                />
                <div className="menu_name">설정관리</div>
              </Link>
            </li>
            <li>
              <Link to={"/board/manual"}>
                <img
                  src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/icon_manual.svg`}
                  alt=""
                />
                <div className="menu_name">우리 병원 매뉴얼</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

const LnbControllBtn = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  transition: all 0.4s;
  margin-bottom:16px;
  &:hover {
    background-color: #404249;
`;
