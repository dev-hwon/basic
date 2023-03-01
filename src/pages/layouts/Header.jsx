import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { GridCol, GridWrap } from "./Layout";
export default function Header({ fold, isActive, postItActive }) {
  const handleClick = () => {
    postItActive((prev) => (prev = !prev));
  };
  return (
    <CommonHeader isFold={fold}>
      {fold && (
        <HeaderLogo className="header_logo">
          <Link to="/">로고</Link>
        </HeaderLogo>
      )}
      <GridWrap colWidth={50} colWidthUnit="%">
        <GridCol className="text_left">
          <GridWrap
            colWidth="auto"
            colHeight={60}
            colHeightUnit="px"
            colVerticalAlign="center"
            colGap={48}
            colNomargin
          >
            <GridCol>
              <Link to="">MV재료</Link>
            </GridCol>
            <GridCol>
              <Link to="">MV기사</Link>
            </GridCol>
            <GridCol>
              <Link to="" className="color-mv">
                클리닉관리
              </Link>
            </GridCol>
          </GridWrap>
        </GridCol>
        <GridCol className="text_right">
          <GridWrap
            colWidth="auto"
            colHeight={60}
            colHeightUnit="px"
            colVerticalAlign="center"
            colAlign="flex-end"
            colGap={28}
            colNomargin
          >
            <GridCol>
              <Link to="">이엘치과</Link>
            </GridCol>
            <GridCol>
              <Link to="">로그아웃</Link>
            </GridCol>
            <GridCol>
              <Link to="">고객센터</Link>
            </GridCol>
            <GridCol>
              <PostItButton
                onClick={handleClick}
                className={isActive ? "active" : ""}
              ></PostItButton>
            </GridCol>
          </GridWrap>
        </GridCol>
      </GridWrap>
    </CommonHeader>
  );
}

const CommonHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: all 0.4s;
  display: flex;
  > div {
    padding: 0 40px;
  }
  a {
    color: #aaa;
    font-size: 16px;
  }
  ${(props) =>
    props.isFold &&
    css`
      background-color: #000;
      > .header_logo {
        display: flex;
        align-items: center;
      }
    `};
`;
const HeaderLogo = styled.div`
  flex: 0 0 auto;
  padding: 0 40px;
  > a {
    display: block;
    width: 111px;
    height: 33px;
    background-color: #5570f1;
  }
`;
const PostItButton = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  background-color: #444;
`;
