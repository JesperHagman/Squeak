import React from "react";
import { profilePic } from "../data";
import "./css/postStyle.css";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-top">
        {" "}
        <p className="post-p">{post.desc}</p>
      </div>
      <div className="post-bottom">
        {" "}
        <p className="createdAt">{new Date(post.createdAt).toDateString()}</p>
        <h4>{post.username}</h4>
      </div>
    </div>
  );
}

export default Post;
