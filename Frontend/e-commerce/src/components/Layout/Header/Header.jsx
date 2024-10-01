import { useContext, useState } from "react";
import "./Header.css";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import logo from "./images/gptLogo.png";
import { CartContext } from "../../../context/CartProvider";

const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const { pathname } = useLocation();

  return (
    <header>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile"></div>
            <div className="header-left">
              <a href="/" className="logo">
                <img src={"logo"} alt="LOGO" />
              </a>
            </div>
            <div className="header-center">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link to={"/"} className="menu-link">
                      Home
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/shop"}
                      className={`menu-link ${
                        pathname === "/shop" && "active"
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/blog"}
                      className={`menu-link ${
                        pathname === "/blog" && "active"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link
                      to={"/contact"}
                      className={`menu-link ${
                        pathname === "/contact" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <i
                className="bi bi-x-circle"
                id="close-sidebar"
                onClick={() => setIsMobileMenuOpen(false)}
              ></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <a href="account.html" className="header-account">
                  <Link to={"/auth"} className="header-account">
                    <i className="bi bi-person"></i>
                  </Link>
                </a>
                <button
                  className="search-button"
                  onClick={() => setIsSearchShow(true)}
                >
                  <i className="bi bi-search"></i>
                </button>
                <div className="header-cart">
                  <Link to={"/cart"} className="header-basket-link">
                    <i className="bi bi-bag"></i>
                    <span className="header-basket-count">
                      {cartItems.length}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  setIsSearchShow: PropTypes.func,
};

export default Header;
