import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  const data = props.data;
  let navigate = useNavigate();
  const toNavigate = () => {
    navigate(`repo/${data.owner.login}/${data.id}`);
  };

  return (
    <div className="datacard">
      <div className="datacontainer">
        <img
          src={data.owner.avatar_url}
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
          <b>{data.owner.login}</b>
        </h4>
        <p>Repository Name:&nbsp;{data.name}</p>
        {data.description && <p>Description:&nbsp;{data.description}</p>}
        <button onClick={toNavigate}>More Info on Repo</button>
        <Link to={`/results/followers/${data.owner.login}`} className="link">
          <button>Followers</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
