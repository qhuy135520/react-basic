import { useState } from "react";
import "./nav.scss";
import { Link, NavLink } from "react-router-dom";
let Nav = () => {
  return (
    <div className="topnav">
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
