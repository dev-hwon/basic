import React, { useEffect, useReducer, useState, useCallback } from "react";
import { GetTodos } from "../../components/todos/FetchTodos";
import TodoList from "../../components/todos/TodoList";
const todosyUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
const categoryUrl = `${process.env.REACT_APP_TEST_JSONSERVER_CATEGORYS}`;

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

  // const [category, dispatch] = useReducer(TodosReducer, initialTodos);
  const { loading, errorMessage, todos } = GetTodos(todosyUrl, "todos");
  const filtered = todos.filter((f) => f.category === filter);

  return (
    <>
      {loading ? (
        "loading.."
      ) : (
        <div className="">
          <CategoryList filter={filter} />
          <ul>
            {filtered.map((dd) => (
              <TodoList key={dd.id} todo={dd} />
            ))}
          </ul>
        </div>
      )}
      {errorMessage ? errorMessage : null}
    </>
  );
}

function CategoryList({ filter }) {
  const { loading, errorMessage, categorys } = GetTodos(
    categoryUrl,
    "categorys"
  );
  const filtered = categorys.filter((f) => f.id === filter);
  return (
    <>
      {loading ? (
        "loading.."
      ) : (
        <div className="">
          {filtered.map((dd) => (
            <div key={dd.id}>{dd.name}</div>
          ))}
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
