import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Products = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/posts`, {
      method: "GET",
      headers: { "content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        setList([...data]);
      })
      .catch((err) => console.log(err));
  }, []);
  //console.log(list, "list");
  return (
    <div>
      <div>List of products </div>
      <ul>
        {list.map((task) => (
          <li key={task.id}>
            <div>{task.name}</div>
            <div>{task.price}</div>
            <Link to={`./${task.id}`}>More details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
