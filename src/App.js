import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Details } from "./components/Details";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Products } from "./components/Products";

function App() {
  return (
    <React.Fragment className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Details />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
