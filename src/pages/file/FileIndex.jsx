import React, { useCallback, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
// console.log(moment(new Date()).format("YYYY년 MM월 DD일  HH시mm분ss초"));

export default function FileIndex() {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const { loading, errorMessage, categorys } = dataList;
  const handleChangeSelectedCategory = (e) => {};

  return (
    <div>
      <CategoryList className="categoryList">
        {categorys.map((dc, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="categoryName"
              value={dc.id}
              onChange={handleChangeSelectedCategory}
            />
            {dc.name}
          </label>
        ))}
      </CategoryList>
    </div>
  );
}

const CategoryList = styled.div`
  display:flex;
  flex-warp:warp
  justify-contents : flex-start;
  align-items: center;
`;
