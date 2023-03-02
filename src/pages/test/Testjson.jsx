import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ddd from "../../db/postits.json";
// const qwer = JSON.stringify(ddd.postits);
// console.log(qwer);
export default function Testjson() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ddd.postits);
  }, []);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(qwer)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData(res);
  //     });
  // }, []);

  return (
    <>
      <ul>
        {data.map((d) => (
          <li key={d.id}>
            {d.id} - {d.name}
          </li>
        ))}
      </ul>
    </>
  );
}
