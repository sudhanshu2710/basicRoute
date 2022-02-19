import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Details = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [pro, setPro] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8000/posts/${productId}`, {
      method: "GET",
      headers: { "content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => {
        if (res.status == 404) navigate("/notfound");
        return res.json();
      })
      .then((data) => {
        setPro({ ...data });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>{pro.name}</div>
      <div>{pro.price}</div>
      <img src={pro.image} />
    </div>
  );
};
