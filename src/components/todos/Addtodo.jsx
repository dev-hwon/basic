import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";
import { current, currentDate } from "../Current";

const todosUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
const categoryUrl = `${process.env.REACT_APP_TEST_JSONSERVER_CATEGORYS}`;
export default function Addtodo({ modalProps }) {
  const todosList = useContext(DatasContext);
  const todosDispatch = useContext(DatasDispatchContext);

  const [targetCategory, setTargetCategory] = useState("");
  const [updateData, setUpdateData] = useState({
    todosName: "",
    completeDate: null,
    completeTime: null,
    fileList: null,
    confirm: null,
    reple: null,
    repleCount: null,
  });

  // 데이터 가져오기
  const { categorys } = todosList;

  const handleChangeTodosName = (e) => {
    setUpdateData({ ...updateData, todosName: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      updateData.todosName.trim() === "" ||
      updateData.todosName.trim() === 0
    ) {
      alert("제목누락");
      return;
    }

    const adjData = {
      id: uuidv4(),
      category: targetCategory,
      todosStatus: "active",
      todosName: updateData.todosName,
      todosDate: currentDate,
      ...updateData,
    };
    fetch(todosUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(adjData),
    })
      .then((response) => response.json())
      .then(() => {
        todosDispatch({ type: "TODOS_UPDATE", adjData });
      });

    setUpdateData({ ...updateData, todosName: "" });
    modalProps({ visible: false });
  };

  return (
    <form onSubmit={handleSubmit} action="/">
      <CategoryList
        categorys={categorys}
        selectedCategory={setTargetCategory}
      />
      <input
        type="text"
        placeholder="dddd"
        value={updateData.todosName}
        onChange={handleChangeTodosName}
      />
      <button>Add</button>
    </form>
  );
}

function CategoryList({ categorys, selectedCategory }) {
  const [active, setActive] = useState("");
  const handleClick = (e) => {
    selectedCategory(e.target.value);
    setActive(e.target.value);
  };
  return (
    <div className="">
      {categorys.map((dd) => (
        <button
          type="button"
          key={dd.id}
          value={dd.id}
          className={dd.id === active ? "active" : ""}
          onClick={handleClick}
        >
          {dd.name}
        </button>
      ))}
    </div>
  );
}
