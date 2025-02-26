import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import BurgerLogo from "../assets/burgerlogo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} alt="" />
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};
