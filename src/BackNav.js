import React from "react";
import { useNavigate } from "react-router";
import "./BackNav.css";

const BackNav = () => {
  let navigate = useNavigate();
  const onBack = () => {
    navigate("/");
  };
  return (
    <div onClick={onBack} className="backnav">
      <button className="backNavbutton">Back to Search Page</button>
    </div>
  );
};

export default BackNav;
