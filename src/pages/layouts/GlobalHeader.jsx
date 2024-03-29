import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { GridCol, GridWrap } from "../../components/Style";
export default function GlobalHeader({ postItActive, setPostItActive }) {
  const handleClick = () => {
    setPostItActive((prev) => (prev = !prev));
  };
  return (
    <Header>
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
            <GridCol>
              <PostItButton
                onClick={handleClick}
                className={postItActive ? "active" : ""}
              ></PostItButton>
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
          </GridWrap>
        </GridCol>
      </GridWrap>
    </Header>
  );
}

const Header = styled.header`
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
const PostItButton = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  background-color: #444;
`;
