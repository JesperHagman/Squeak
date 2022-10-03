import React from "react";
import Comment from "../comment/Comment";
import { Link } from "react-router-dom";
import "./postStyle.css";

function Post({ post, editable }) {
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
        {editable ? (
          <button
            // onClick={() => {
            //   handleClick();
            // }}
            className="delete-btn"
          >
            Delete
          </button>
        ) : (
          <Link to= {`/usersprofile?username=${post.username}`}>
            <h4 className="post-username">{post.username}</h4>
          </Link>
        )}
      </div>
        <div className="comment-toggle">
        <Comment/>
        </div>
    </div>
  );
}

export default Post;
