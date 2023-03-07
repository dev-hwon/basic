import React from "react";
import TodoList from "../../components/todos/TodoList";
import useFetch from "../../hooks/useFetch";
const todosyUrl = `${process.env.REACT_APP_TEST_JSONSERVER_TODOS}`;
const categoryUrl = `${process.env.REACT_APP_TEST_JSONSERVER_CATEGORYS}`;

export default function TodoIndex({ filter }) {
  const { loading, errorMessage, todos } = useFetch(todosyUrl, "todos");
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
  const { loading, errorMessage, categorys } = useFetch(
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
