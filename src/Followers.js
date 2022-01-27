import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Followers.css";
import BackNav from "./BackNav";

const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const urlProp = useParams();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${urlProp.urlFollowers}/followers`
      );
      setFollowers(response.data);
    };
    getData();
  }, [urlProp.urlFollowers]);

  return (
    <>
      <BackNav />
      <div className="followersgrid">
        {followers.map((ele) => (
          <div className="follower">
            <img
              src={ele.avatar_url}
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
              <b>{ele.login}</b>
            </h4>
            <Link to={`/follower/${ele.login}/repos`}>
              <button>List Repos</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Followers;
