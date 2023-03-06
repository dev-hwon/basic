import React, { useCallback, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AuthorReducer from "./AuthorReducer";
//https://velog.io/@hwang-eunji/React-Hooks-5-useReducer
export default function AddAuthor({ onAdd, author }) {
  const { authors } = author;
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 공백 입력시
    if (name.trim() === "" || name.trim() === 0) {
      return;
    }
    // 같은값 입력시
    let sameCount = authors.findIndex((a) => a.name === name);
    if (sameCount !== -1) {
      alert("같은 이름이 있습니다.");
      return;
    }
    // 추가
    fetch(`${process.env.REACT_APP_TEST_JSONSERVER_AUTHOR}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: uuidv4(), name }),
    })
      .then((response) => response.json())
      .then(() => {
        onAdd({ id: uuidv4(), name });
      });

    // 초기화
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={name} />
      <button type="submit">추가</button>
    </form>
  );
}
