import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router";
import BackNav from "./BackNav";

const Board = (props) => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  var userName = props.data;
  useEffect(() => {
    const fireApi = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${userName}/repos`
      );
      setData(response.data);
      localStorage.setItem(userName, JSON.stringify(response.data));
    };
    if (localStorage.getItem(userName)) {
      const response = JSON.parse(localStorage.getItem(userName));
      setData(response);
    } else if (props.data.length > 0) {
      fireApi();
    } else if ( props.data.length === 0) {
      return (() => navigate("/"))();
    }
  }, [props.data]);

  return (
    <>
      <BackNav />
      <div
        className="board"
        style={{ display: "flex", flexWrap: "wrap", boxSizing: "border-box" }}
      >
        {data.map((ele) => (
          <Card data={ele} key={ele.id} />
        ))}
      </div>
    </>
  );
};

export default Board;
