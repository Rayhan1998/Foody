import React, { useContext, useEffect, useRef } from "react";
import axios from "axios";
import "./header.styles.css";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import logo from "../../assets/favicon.png";
export default function Header() {
  const inputEl = useRef(null);
  const { searchQuery, setSearchQuery, setSearchResults } = useContext(Context);

  const fetchData = () => {
    axios
      .get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}&key=a7f381e4-84eb-4f85-8423-f8f9eda04da0`
      )
      .then(function(response) {
        // handle success
        setSearchResults(response.data.data.recipes);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  const searchSubmit = e => {
    e.preventDefault();
    setSearchQuery(inputEl.current.value);
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);
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
        <input type="text" className="form-input" ref={inputEl} />
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
