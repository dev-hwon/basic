import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BoardIndex() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`/board/${text}`);
  };
  return (
    <div>
      <h2>board</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ddd"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
