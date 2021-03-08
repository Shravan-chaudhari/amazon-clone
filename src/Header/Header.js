import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import logo from './logo.png';

function Header() {
  return (
    <div className="Header">
      <img
        className="header__logo"
        src={logo}
        alt="amazon"
      />
      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="header__searchicon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionlineone">Hello Guest</span>
          <span className="header__optionlinetwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone">Returns</span>
          <span className="header__optionlinetwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineone">Your</span>
          <span className="header__optionlinetwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingCartSharpIcon />
          <span className="header__optionlinetwo header__basketcount" >
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
