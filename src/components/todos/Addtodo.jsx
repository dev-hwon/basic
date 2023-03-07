import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GetTodos, PostTodos } from "../../components/todos/FetchTodos";
import { current, currentDate } from "../Current";
const todosyUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
const categoryUrl = `${process.env.REACT_APP_TEST_JSONSERVER_CATEGORYS}`;

export default function Addtodo() {
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

  const handleChangeTodosName = (e) => {
    e.persist();
    setUpdateData({ ...updateData, todosName: e.target.value });
    console.log(updateData);
  };
  const handleChangeTargetCategory = (e) => {
    setTargetCategory(e.target.value);
    console.log(targetCategory);
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

    PostTodos(todosyUrl, targetCategory, {
      id: uuidv4(),
      todosName: updateData.todosName,
      todosStatus: "active",
      todosDate: currentDate,
      completeDate: updateData.completeDate,
      completeTime: updateData.completeTime,
      fileList: updateData.fileList,
      confirm: updateData.confirm,
      reple: updateData.reple,
      repleCount: updateData.repleCount,
    });
    setUpdateData({ ...updateData, todosName: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <CategoryList selectedCategory={handleChangeTargetCategory} />
      <input
        type="text"
        placeholder="dddd"
        value={updateData.todosName}
        onChange={handleChangeTodosName}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function CategoryList({ selectedCategory }) {
  const { loading, errorMessage, categorys } = GetTodos(
    categoryUrl,
    "categorys"
  );
  const handleClick = (e) => {
    selectedCategory(e.target.value);
  };
  return (
    <>
      {loading ? (
        "loading.."
      ) : (
        <div className="">
          {categorys.map((dd) => (
            <button key={dd.id} value={dd.id} onClick={handleClick}>
              {dd.name}
            </button>
          ))}
        </div>
      )}
      {errorMessage ? errorMessage : null}
    </>
  );
}
