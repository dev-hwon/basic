//eslint-disable
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
const url = `${process.env.REACT_APP_HOST_MAIN}`;

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
        <nav>
          <ul>
            <li>
              <Link to={url}>메인</Link>
            </li>
            <li>
              <Link to={url + "/tabtest"}>메뉴1</Link>
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
