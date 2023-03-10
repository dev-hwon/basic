import React, { useState } from "react";
const authorsUrl = `${process.env.REACT_APP_TEST_JSONSERVER_AUTHORS}`;
export default function AuthorList({ author, onDelete }) {
  const { id, name } = author;
  const handleDelete = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(authorsUrl + `/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            return onDelete(author);
          }
          throw new Error("삭제 실패!");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <li key={id}>
      {name}
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
    </li>
  );
}
