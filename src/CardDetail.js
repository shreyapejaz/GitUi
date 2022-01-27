import React from "react";
import { useParams } from "react-router";
import BackNav from "./BackNav";
import "./CardDetail.css";

const CardDetail = () => {
  const urlProps = useParams();
  const response = JSON.parse(localStorage.getItem(urlProps.userName));
  let repo = response.filter((ele) => ele.id == urlProps.repoId)

  return repo.map((data) => {
  return (
    <>
    <BackNav />
    <div className="cardDetails">
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
      <div className="info">
        <ul className="infolist">
          <li style={{ fontSize: "100px" }}>{data.owner.login}</li>
          <li>Repository Name:&nbsp;{data.name}</li>
          <li>Repository Visibility:&nbsp;{data.visibility}</li>
          <li>
            {data.description && <p>Description:&nbsp;{data.description}</p>}
          </li>
          <li>Language:&nbsp;{data.language}</li>
          <li>
            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", display:"block",backgroundColor:"#E0BFB8", width:"50%" ,borderRadius:"15px", textAlign:"center"}}
            > Visit Repo on Git</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  )}
  );
};

export default CardDetail;
