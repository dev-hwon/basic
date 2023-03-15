//eslint-disable
import { Link, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useState } from "react";
const url = `${process.env.REACT_APP_HOST}`;
const menulist = [
  { link: "/layout/main", name: "클리닉 리포트", icon: "icon_report.svg" },
  { link: "/layout/todos", name: "할일관리", icon: "icon_todos.svg" },
  { link: "/layout/folder", name: "업무폴더", icon: "icon_folder.svg" },
  { link: "/file", name: "파일함", icon: "icon_cloud.svg" },
  { link: "/setting", name: "설정관리", icon: "icon_setting.svg" },
  { link: "/board/manual", name: "우리 병원 매뉴얼", icon: "icon_manual.svg" },
];
const submenulist = [
  {
    link: "https://www.medivalue.co.kr/",
    name: "재료스토어",
    icon: "icon_store.svg",
    target: "_blank",
  },
  {
    link: "https://dt.medivalue.co.kr/",
    name: "기공플랫폼",
    icon: "icon_platform.svg",
    target: "_blank",
  },
];

const NavSubMenu = (props) => {
  const { setLnbHover } = props;
  const handleEnter = () => {
    setLnbHover(true);
  };
  const handleLeave = () => {
    setLnbHover(false);
  };

  return (
    <nav
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        paddingTop: "24px",
        marginTop: "24px",
        borderTop: "1px solid rgba(255,255,255,.3)",
      }}
    >
      <ul>
        {submenulist.map((d, idx) => (
          <li key={idx}>
            <Link to={d.link} target={d.target}>
              <img
                src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/${d.icon}`}
                alt={d.name}
              />
              <div className="menu_name">{d.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const NaviMenu = (props) => {
  const { setLnbHover } = props;
  const [active, setActive] = useState(0);
  const handleClick = (idx) => {
    setActive(idx);
  };
  const handleEnter = () => {
    setLnbHover(true);
  };
  const handleLeave = () => {
    setLnbHover(false);
  };

  return (
    <nav onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <ul>
        {menulist.map((d, idx) => (
          <li key={idx}>
            <Link
              to={d.link}
              onClick={() => handleClick(idx)}
              className={active === idx ? "active" : ""}
            >
              <img
                src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/${d.icon}`}
                alt={d.name}
              />
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
          <img
            src={`${process.env.REACT_APP_DEFAULT_IMG_URL}/images/icon_menu.svg`}
            alt=""
          />
        </LnbControllBtn>
        <div className="main_logo">
          <Link to={"/"}></Link>
        </div>
        <NaviMenu className="nav_menu" setLnbHover={setLnbHover} />
        <NavSubMenu className="nav_menu" setLnbHover={setLnbHover} />
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
