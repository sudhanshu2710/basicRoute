import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <React.Fragment>
      <div className={style.container}>
        <div>This is Navbar</div>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/products">
            <button>Products</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
