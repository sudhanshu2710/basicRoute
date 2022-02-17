import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { productId } = useParams();
  const [pro, setPro] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8000/posts/${productId}`, {
      method: "GET",
      headers: { "content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        setPro({ ...data });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(productId);
  return (
    <div>
      <div>{pro.name}</div>
      <div>{pro.price}</div>
      <img src={pro.image} />
    </div>
  );
};
