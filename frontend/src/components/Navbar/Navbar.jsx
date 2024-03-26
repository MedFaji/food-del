import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("app")}
          className={menu === "app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="navbar-search-icon" />
        <div className="navbar-basket-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="basket-count"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
