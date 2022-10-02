import React from "react";
import Comment from "../comment/Comment";
import "./postStyle.css";

function Post({ post }) {

  const toggleComment = () => {
  
  }

  return (
    <div className="post">
      <div className="post-top">
        {" "}
        <p className="post-p">{post.desc}</p>
      </div>
      <div className="post-bottom">
        {" "}
        <p className="createdAt">{new Date(post.createdAt).toDateString()}</p>
        <button className="comment-style" onClick={toggleComment}>Comment</button>
        <h4>{post.username}</h4>
      </div>
        <div className="comment-toggle">
        <Comment/>
        </div>
    </div>
  );
}

export default Post;
