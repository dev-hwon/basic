import React, { useEffect, useReducer, useState, useCallback } from "react";
import TodosReducer from "../../components/todos/TodosReducer";

const initialTodos = {
  loading: true,
  errorMessage: "",
  todos: [],
  categorys: [],
};
export function GetTodos(url, objName) {
  const [category, dispatch] = useReducer(TodosReducer, initialTodos);
  const getData = useCallback(() => fetch(url).then((res) => res.json()));
  useEffect(() => {
    getData()
      .then((res) => {
        const datas = res;
        dispatch({ type: "TODOS_SUCCESS", datas, objName });
      })
      .catch(() => {
        dispatch({ type: "TODOS_ERROR" });
      });
  }, []);

  return category;
}

const num = 0;
export function PostTodos(url, targetCategory, postData) {
  const [category, dispatch] = useReducer(TodosReducer, initialTodos);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  // .then((response) => response.json())
  // .then(() => {
  //   dispatch({ type: "TODOS_UPDATE", postData });
  // });
  // return category;
  console.log(num++, postData);
}
