import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import BackNav from "./BackNav";

const Repos = () => {
  const [data, setData] = useState([]);
  const urlProps = useParams();
  useEffect(() => {
    const fireApi = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${urlProps.userName}/repos`
      );
      setData(response.data);
    };
    fireApi();
  }, [urlProps.userName]);

  return (
    <>
      <BackNav />
      <div
        className="board"
        style={{ display: "flex", flexWrap: "wrap", boxSizing: "border-box" }}
      >
        {data.map((ele) => (
          <div className="datacard">
            <div className="datacontainer">
              <img
                src={ele.owner.avatar_url}
                alt="Avatar"
                style={{
                  padding: "0",
                  borderRadius: "50%",
                  width: "20%",
                  height: "20%",
                  margin: "3%",
                  marginLeft: "5%",
                  float: "left",
                }}
              />
              <h4>
                <b>{ele.owner.login}</b>
              </h4>
              <p>Repository Name:&nbsp;{ele.name}</p>
              {ele.description ? (
                <p>Description:&nbsp;{ele.description}</p>
              ) : (
                ""
              )}
              {ele.language ? <p>Language:&nbsp;{ele.language}</p> : ""}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Repos;
