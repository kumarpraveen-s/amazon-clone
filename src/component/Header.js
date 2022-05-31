import React, { useRef } from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header({ handler }) {
  const [{ basket }] = useStateValue();
  const searchValue = useRef();

  const handleClick = () => {
    console.log(searchValue.current.value);
    handler(searchValue.current.value);
  };

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <img
            src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-1024x426.png"
            alt="logo"
            className="logo"
          />
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" ref={searchValue} />
        <button onClick={handleClick} className="header-btn">
          <SearchIcon className="header__searchIcon" />
        </button>
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
