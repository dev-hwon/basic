import React, { useEffect, useReducer, useState } from "react";
import Addtodo from "../../components/todos/Addtodo";
import TodoList from "../../components/todos/TodoList";
import TodosReducer from "../../components/todos/TodosReducer";

const initialTodos = {
  loading: true,
  errorMessage: "",
  category: [],
};
export default function TodoIndex({ filter }) {
  // const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  // const handleAdd = (todo) => setTodos([...todos, todo]);
  // const handleupdate = (updated) =>
  //   setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  // const handleDelete = (deleted) =>
  //   setTodos(todos.filter((t) => t.id !== deleted.id));

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const [category, dispatch] = useReducer(TodosReducer, initialTodos);
  const { loading, errorMessage, categorys } = category;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`)
      .then((res) => res.json())
      .then((res) => {
        const category = res;
        // const category = [];
        // const filtered = res.filter((cate) => cate.id === filter);
        // category.push(filtered);
        dispatch({ type: "TODOS_SUCCESS", category, filter });
      })
      .catch(() => {
        dispatch({ type: "TODOS_ERROR" });
      });
  }, []);

  // console.log(categorys);
  // const handleupdate = (updated) => {
  //   dispatch({ type: "TODOS_UPDATE" });
  // };

  // const handleDelete = (deleted) => {
  //   dispatch({ type: "TODOS_DELETE" });
  // };

  // const filtered = getFilteredItems(todos, filter);
  // const filtered = categorys.filter((category) => category.id === filter);
  // const filtered = getFilteredItems(todos, "category1");
  // console.log(filtered);
  return (
    <>
      {loading ? (
        "loading.."
      ) : (
        <div className="">
          {categorys.map((cate) => (
            <div key={cate.id} className="">
              {cate.name}
            </div>
          ))}
          <ul>
            {categorys.map((cate) =>
              cate.todos.map((dd) => <TodoList key={dd.id} todo={dd} />)
            )}
          </ul>
        </div>
      )}
      {errorMessage ? errorMessage : null}
    </>
  );
}

// function getFilteredItems(todos, filter) {
//   return todos.filter((category) => category.id === filter);
// }
// function readTodosFromLocalStorage() {
//   const todos = localStorage.getItem("todos");
//   return todos ? JSON.parse(todos) : [];
// }
