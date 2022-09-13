import React from "react";
import { profilePic } from "../data";
import "./css/postStyle.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-top">
        {" "}
        <p>{post.desc}</p>
      </div>
      <div className="post-bottom">
        {" "}
        <h4>{post.username}</h4>
      </div>
    </div>
  );
}

export default Post;
