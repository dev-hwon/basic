import React from "react";
import styled, { css } from "styled-components";
const GridTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;
const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${(props) =>
    props.colGap &&
    css`
      margin: 0 ${props.colGap * -0.5}px;
      > div {
        padding: 0 ${props.colGap * 0.5}px;
        margin-bottom: ${props.colGap}px;
      }
    `}
  ${(props) =>
    props.colWidth &&
    css`
      > div {
        width: ${props.colWidth}${props.colWidthUnit ? props.colWidthUnit : "px"};
      }
    `}
`;

const GridCol = styled.div`
  flex: 0 0 auto;
`;
const Box = styled.div`
  background-color: #fff;
  height: 100%;
  min-height: 20px;
  border-radius: 12px;
  overflow: hidden;
`;
const BoxHead = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #222;
`;
const BoxFoot = styled.div`
  font-size: 12px;
  color: #888;
`;
const BoxCont = styled.div`
  font-size: 13px;
  color: #333;
`;
export { GridTitle, GridWrap, GridCol, Box, BoxHead, BoxFoot, BoxCont };
