//eslint-disable
import { Link, useLocation, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useState } from "react";
import logo from "../../logo_medi.svg";
import { Line } from "../../components/Style";
const url = `${process.env.REACT_APP_HOST}`;
const menulist = [
  {
    id: "1",
    link: "/layout/main",
    name: "클리닉 리포트",
    icon: "icon_report.svg",
  },
  { id: "2", link: "/todos", name: "할일관리", icon: "icon_todos.svg" },
  {
    id: "3",
    link: "/todos",
    name: "업무폴더",
    icon: "icon_folder.svg",
  },
  { id: "4", link: "/file", name: "파일함", icon: "icon_cloud.svg" },
  { id: "5", link: "/setting", name: "설정관리", icon: "icon_setting.svg" },
  {
    id: "6",
    link: "/board/manual",
    name: "우리 병원 매뉴얼",
    icon: "icon_manual.svg",
  },
];
const menulist2 = [
  {
    id: "7",
    link: "https://www.medivalue.co.kr/",
    name: "재료스토어",
    icon: "icon_store.svg",
    target: "_blank",
  },
  {
    id: "8",
    link: "https://dt.medivalue.co.kr/",
    name: "기공플랫폼",
    icon: "icon_platform.svg",
    target: "_blank",
  },
];

const NaviMenu = (props) => {
  const location = useLocation();
  const { setLnbHover, lnbData } = props;

  const handleEnter = () => {
    setLnbHover(true);
  };
  const handleLeave = () => {
    setLnbHover(false);
  };

  return (
    <nav onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <ul>
        {lnbData.map((d, idx) => (
          <li key={idx}>
            <Link
              to={d.link}
              className={location.pathname === d.link ? "active" : ""}
            >
              <img src={`/basic/images/${d.icon}`} alt={d.name} />
              <div className="menu_name">{d.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function GlobalLnb({ lnbFold, setLnbFold, setLnbHover }) {
  const handleClick = () => {
    setLnbFold((prev) => !prev);
  };
  return (
    <>
      <div className="global_lnb">
        <LnbControllBtn
          className={"btn_lnb_controll" + (lnbFold ? " fold" : "")}
          onClick={handleClick}
        >
          <img src={`/basic/images/icon_menu.svg`} alt="" />
        </LnbControllBtn>
        <div className="main_logo">
          <Link to={"/"}>
            <img src={logo} />
          </Link>
        </div>
        <NaviMenu
          className="nav_menu"
          setLnbHover={setLnbHover}
          lnbData={menulist}
        />
        <Line />
        <NaviMenu
          className="nav_menu"
          setLnbHover={setLnbHover}
          lnbData={menulist2}
        />
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
