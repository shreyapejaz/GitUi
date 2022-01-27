import React from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";

const Search = (props) => {
  let inputVal = "";
  const inputHandler = (event) => {
    inputVal = event.target.value;
  };
  const searchHandler = () => {
    props.inputVal(inputVal);
  };
  return (
    <>
      <h2 className="searchtitle"> Search Git Repos</h2>
      <div className="card">
        <div className="container">
          <input
            type="text"
            onInput={inputHandler}
            placeholder="Enter user name"
          ></input>
          <Link to="/results">
            <button type="submit" onClick={searchHandler}>
              Search
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Search;
