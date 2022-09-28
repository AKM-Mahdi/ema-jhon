import React from "react";
import "./Header.css";
import logo from "../../IMAGES/logo.png";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <a href="/order">Order</a>
            <a href="/order-review">Order Review</a>
            <a href="/manage-inventory">Manage Inventory</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
