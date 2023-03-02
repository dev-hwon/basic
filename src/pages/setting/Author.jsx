import React, { useState, useEffect } from "react";

import AddAuthor from "../../components/setting/AddAuthor";
import AuthorList from "../../components/setting/AuthorList";

export default function Author() {
  const [author, setAuthor] = useState([]);
  const handleAdd = (AddAuthor) => setAuthor([AddAuthor, ...author]);
  const handleDelete = (deletedAuthor) =>
    setAuthor(author.filter((t) => t.id !== deletedAuthor.id));

  useEffect(() => {
    fetch(`${process.env.REACT_APP_TEST_JSONSERVER_AUTHOR}`)
      .then((res) => res.json())
      .then((res) => {
        let arr = res;
        arr.reverse();
        console.log(arr);
        setAuthor(arr);
      });
  }, []);
  return (
    <div>
      글쓴이 목록
      <AddAuthor author={author} onAdd={handleAdd}></AddAuthor>
      <ul>
        {author.map((a) => (
          <AuthorList
            key={a.id}
            author={a}
            onDelete={handleDelete}
          ></AuthorList>
        ))}
      </ul>
    </div>
  );
}
