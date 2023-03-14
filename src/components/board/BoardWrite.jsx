import React, { useState } from "react";

export default function BoardWrite() {
  const [text, setText] = useState("");
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ddd"
          value={text}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
