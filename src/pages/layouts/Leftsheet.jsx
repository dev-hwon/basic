//eslint-disable
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
const url = `${process.env.REACT_APP_HOST}`;

export default function Leftsheet({ active, onoff }) {
  const handleClick = () => {
    onoff(false);
  };

  return (
    <>
      <div className={"global_left" + (active ? " active" : "")}>
        <button className="btn_sheet_controll" onClick={handleClick}>
          닫기
        </button>
        <nav className="nav_menu nav_menu1">
          <ul>
            <li>
              <Link to={url + "/layout/testgrid"}>그리드</Link>
            </li>
            <li>
              <Link to={url + "/layout/main"}>메인테스트</Link>
            </li>
            <li>
              <Link to={url + "/login"}>로그인</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴3</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴4</Link>
            </li>
          </ul>
        </nav>
        <nav className="nav_menu nav_menu2">
          <ul>
            <li>
              <Link to={url}>메인</Link>
            </li>
            <li>
              <Link to={url + "/main"}>메뉴1</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴2</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴3</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴4</Link>
            </li>
            <li>
              <Link to={url}>메인</Link>
            </li>
            <li>
              <Link to={url + "/main"}>메뉴1</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴2</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴3</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴4</Link>
            </li>
            <li>
              <Link to={url}>메인</Link>
            </li>
            <li>
              <Link to={url + "/main"}>메뉴1</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴2</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴3</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴4</Link>
            </li>
            <li>
              <Link to={url}>메인</Link>
            </li>
            <li>
              <Link to={url + "/main"}>메뉴1</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴2</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴3</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴4</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
