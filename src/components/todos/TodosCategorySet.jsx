import React, { useState, useContext } from "react";
import styled from "styled-components";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
import {
  ModalTitle,
  ModalSummary,
  ButtonWrapper,
  ConfirmButton,
  CancelButton,
} from "../Style";
const categoryUrl = `${process.env.REACT_APP_TEST_JSONSERVER_CATEGORYS}`;
const colorList = [
  "#F65555",
  "#FE8947",
  "#FFD600",
  "#00AF5B",
  "#1868FB",
  "#EB43B2",
  "#B468FF",
  "#7C18FB",
];
export default function TodosCategorySet({ modalProps }) {
  const dataList = useContext(DatasContext);
  const dataDispatch = useContext(DatasDispatchContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [changeInfo, setChangeInfo] = useState({
    name: "",
    color: "",
  });
  const { loading, errorMessage, categorys } = dataList;

  const handleChangeCategoryName = (e) => {
    setChangeInfo({ ...changeInfo, name: e.target.value });
  };
  const handleChangeCategoryColor = (e) => {
    setChangeInfo({ ...changeInfo, color: e.target.value });
  };
  const handleChangeSelectedCategory = (e) => {
    setSelectedCategory(
      categorys.filter((category) => category.id === e.target.value)[0]
    );
    setChangeInfo({
      ...changeInfo,
      color: categorys.filter((category) => category.id === e.target.value)[0]
        .color,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCategory);
    if (selectedCategory === "") {
      alert("변경할 카테고리를 선택해 주세요");
      return;
    }
    if (changeInfo.name.trim() === "" || changeInfo.name.trim() === 0) {
      alert("카테고리명을 기입해 주세요.");
      return;
    }

    fetch(categoryUrl + `/${selectedCategory.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedCategory,
        name: changeInfo.name,
        color: changeInfo.color,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dataDispatch({
          type: "CATEGORYS_UPDATE",
          id: selectedCategory.id,
          name: changeInfo.name,
          color: changeInfo.color,
        });
      });

    modalProps({ visible: false });
    console.log("categorys", categorys, dataList);
  };

  return (
    <>
      <ModalTitle>카테고리 설정</ModalTitle>
      <ModalSummary>각 영역의 카테고리를 지정해 보세요.</ModalSummary>
      <form onSubmit={handleSubmit}>
        <CategoryList className="categoryList">
          {categorys.map((category, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name="categoryName"
                value={category.id}
                onChange={handleChangeSelectedCategory}
              />
              <span className="category_name">{category.name}</span>
            </label>
          ))}
        </CategoryList>

        <input
          type="text"
          placeholder={
            !!selectedCategory
              ? selectedCategory.name + "(최대6자)"
              : "변경할 카테고리를 선택해 주세요"
          }
          value={changeInfo.name}
          onChange={handleChangeCategoryName}
        />
        <CategoryColor>
          <ul>
            {colorList.map((hexCode, idx) => (
              <li key={idx}>
                <label>
                  <input
                    type="radio"
                    name="categoryColor"
                    value={hexCode}
                    onChange={handleChangeCategoryColor}
                    checked={
                      !!changeInfo.color && changeInfo.color === hexCode
                        ? true
                        : false
                    }
                  />
                  <span>{hexCode}</span>
                </label>
              </li>
            ))}
          </ul>
        </CategoryColor>

        <ButtonWrapper align="right">
          <CancelButton className="common_btn btn_sm btn_cancel">
            취소
          </CancelButton>
          <ConfirmButton
            className="common_btn btn_sm btn_submit"
            style={{ marginLeft: "4px" }}
          >
            저장
          </ConfirmButton>
        </ButtonWrapper>
      </form>
    </>
  );
}
const CategoryList = styled.div`
  display:flex;
  flex-warp:warp
  justify-content: space-between;
  align-items: center;
  margin:0 -5px;
  > label {
    flex:0 0 auto;
    width:25%;
    padding:0 5px;
    > input {
      appearance: none;
      display:none;
    }
    > span.category_name {
      display:block;
      width:100%;
      height:100%;
      font-size: 14px;
      color:#222;
      border:1px solid #eee;
      
    }
  }
`;

const CategoryColor = styled.div`
  margin-top:10px;
  
  > ul {
    display:flex;
    flex-warp:warp
    justify-contents : flex-start;
    align-items: center;

    > li {

    }
  }
`;
