import React, { useState, useEffect, useReducer } from "react";
import { useContext } from "react";
import AddAuthor from "../../components/setting/AddAuthor";
import AuthorList from "../../components/setting/AuthorList";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";

export default function Author() {
  const authorsList = useContext(DatasContext);
  const authorsDispatch = useContext(DatasDispatchContext);
  const { loading, errorMessage, authors } = authorsList;

  const reverseData = [...authors].reverse();
  console.log(reverseData);

  const handleAdd = (addTarget) => {
    authorsDispatch({
      type: "AUTHORS_UPDATE",
      addTarget,
    });
  };

  const handleDelete = (deleteTarget) => {
    authorsDispatch({
      type: "AUTHORS_DELETE",
      authors,
      deleteTarget,
    });
  };
  return (
    <div>
      글쓴이 목록
      <AddAuthor authors={authors} onAdd={handleAdd}></AddAuthor>
      {loading ? (
        "loading.."
      ) : (
        <ul>
          {reverseData.map((a) => (
            <AuthorList
              key={a.id}
              author={a}
              onDelete={handleDelete}
            ></AuthorList>
          ))}
        </ul>
      )}
      {errorMessage ? errorMessage : null}
    </div>
  );
}
