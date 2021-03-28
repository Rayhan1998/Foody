import React, { useContext } from "react";
import "./header.styles.css";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import logo from "../../assets/favicon.png";
export default function Header() {
  const { searchQuery, setSearchQuery } = useContext(Context);

  const searchSubmit = e => {
    e.preventDefault();
    console.log("for");
  };

  return (
    <div className="header">
      <Link to="/" className="logo-link">
        <div className="logo-header">
          <div className="logo">
            <img src={logo} alt="logo" className="logo-img" />
          </div>
          <h1 className="logo-name">Foody</h1>
        </div>
      </Link>

      <form onSubmit={searchSubmit} className="form">
        <input type="text" className="form-input" />
        <button type="submit" className="form-btn">
          {" "}
          Search
        </button>
      </form>
      <Link to="/shoppinglist" className="logo-link">
        {" "}
        <h2 className="shopping-list">Shopping List</h2>
      </Link>
    </div>
  );
}
