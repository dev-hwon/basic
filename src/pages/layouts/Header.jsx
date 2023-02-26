import React from "react";
import styled from "styled-components";
export default function Header({ isActive, postItActive }) {
  const handleClick = () => {
    postItActive((prev) => (prev = !prev));
  };
  return (
    <header>
      header area
      <PostItButton
        onClick={handleClick}
        className={isActive ? "active" : ""}
      ></PostItButton>
    </header>
  );
}

const PostItButton = styled.button`
  display: block;
  width: 30px;
  height: 30px;
  background-color: #444;
`;
