import React from "react";
import { profilePic } from "../data";
import "./css/postStyle.css";

function Post({ item }) {
  return (
    <div className="post">
      <div className="post-top">
        {" "}
        <p>{item.desc}</p>
      </div>
      <div className="post-bottom">
        {" "}
        <h4>{item.username}</h4>
      </div>
    </div>
  );
}

export default Post;
