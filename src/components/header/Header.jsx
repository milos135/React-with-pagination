import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <a>
        {" "}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </a>
    </div>
  );
};

export default Header;
