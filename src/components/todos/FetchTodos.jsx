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

export function PostTodos(addData) {
  const [category, dispatch] = useReducer(TodosReducer, initialTodos);
  dispatch({ type: "TODOS_UPDATE", addData });
  console.log(category);
  return category;
}
