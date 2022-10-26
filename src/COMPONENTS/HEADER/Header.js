import React, { useContext } from "react";
import "./Header.css";
import logo from "../../IMAGES/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../CONTEXT/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuHandler = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.right === "-100%") {
      mobileMenu.style.right = "0px";
    } else {
      mobileMenu.style.right = "-100%";
    }
  };
  return (
    <nav>
      <div className="container">
        <div className="headerSection">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inverntory</Link>
            <Link to="/shipping">Shipping</Link>

            {user?.email ? (
              <span>
                <Link to="/infi"> Welcome {user.email}</Link>
                <button className="btnLogOut" onClick={logOut}>
                  LOGOUT
                </button>
              </span>
            ) : (
              <span>
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>
              </span>
            )}
          </div>

          <div className="mobileMenu">
            <p onClick={menuHandler}>MENU</p>
            <div className="mobileMenuItem" id="mobileMenu">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <li>
                  <Link to="/inventory">Inverntory</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping</Link>
                </li>
                <li>
                  {user?.email ? (
                    <span>
                      <ul>
                        <li className="login_register">
                          <Link to="/infi"> Welcome {user.email}</Link>
                        </li>
                      </ul>
                      <button className="btnLogOut" onClick={logOut}>
                        LOGOUT
                      </button>
                    </span>
                  ) : (
                    <span>
                      <ul>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/signup">Register</Link>
                        </li>
                      </ul>
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
