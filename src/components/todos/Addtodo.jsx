import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodosReducer from "../../hooks/TodosReducer";
import useFetch from "../../hooks/useFetch";
import { current, currentDate } from "../Current";
const todosyUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
const categoryUrl = `${process.env.REACT_APP_TEST_JSONSERVER_CATEGORYS}`;

export default function Addtodo({ modalProps }) {
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

  const datas = useFetch(todosyUrl, "todos");

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

    fetch(todosyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adjData),
    })
      .then((response) => response.json())
      .then(() => {
        TodosReducer(datas, { type: "TODOS_UPDATE", adjData });
      });

    setUpdateData({ ...updateData, todosName: "" });
    modalProps({ visible: false });
  };

  return (
    <form onSubmit={handleSubmit} action="/">
      <CategoryList selectedCategory={setTargetCategory} />
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

function CategoryList({ selectedCategory }) {
  const [active, setActive] = useState("");
  const { loading, errorMessage, categorys } = useFetch(
    categoryUrl,
    "categorys"
  );
  const handleClick = (e) => {
    selectedCategory(e.target.value);
    setActive(e.target.value);
  };
  return (
    <>
      {loading ? (
        "loading.."
      ) : (
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
      )}
      {errorMessage ? errorMessage : null}
    </>
  );
}
