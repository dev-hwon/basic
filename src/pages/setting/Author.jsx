import React, { useState, useEffect, useReducer } from "react";
import AddAuthor from "../../components/setting/AddAuthor";
import AuthorList from "../../components/setting/AuthorList";
import AuthorReducer from "../../components/setting/AuthorReducer";

const initialAuthor = {
  loading: true,
  errorMessage: "",
  authors: [],
};
export default function Author() {
  const [author, dispatch] = useReducer(AuthorReducer, initialAuthor);
  const { loading, errorMessage, authors } = author;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_TEST_JSONSERVER_AUTHOR}`)
      .then((res) => res.json())
      .then((res) => {
        let data = res;
        let dataReverse = data.reverse();
        dispatch({ type: "AUTHOR_SUCCESS", dataReverse });
      })
      .catch(() => {
        dispatch({ type: "AUTHOR_ERROR" });
      });
  }, []);

  const handleAdd = (addTarget) => {
    dispatch({
      type: "AUTHOR_ADD",
      addTarget,
    });
  };

  const handleDelete = (deleteTarget) => {
    dispatch({
      type: "AUTHOR_DELETE",
      ...author,
      deleteTarget,
      // authors: author.authors.filter((a) => a.id !== target.id),
    });
  };
  return (
    <div>
      글쓴이 목록
      <AddAuthor author={author} onAdd={handleAdd}></AddAuthor>
      {loading ? (
        "loading.."
      ) : (
        <ul>
          {authors.map((a) => (
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
