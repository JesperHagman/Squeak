import React from "react";
import { Link } from "react-router-dom";
import "./postStyle.css";

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
        <p className="comment-style">Comment</p>
        <a href='/ '>
          <h4 className="post-username" >{post.username}</h4> 
        </a>
      </div>
    </div>
  );
}

export default Post;
