import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddAuthor({ onAdd, author }) {
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
    let sameCount = author.filter((a) => a.name === name.trim()).length;
    if (sameCount > 0) {
      alert("같은 이름이 있습니다.");
      return;
    }
    // 추가
    fetch("http://localhost:8001/authors", {
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
