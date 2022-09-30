import React from "react";
import "./postStyle.css";

function Post({ post, editable }) {
  return (
    <div className="post">
      <div className="post-top">
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
          <h4>{post.username}</h4>
        )}
      </div>
    </div>
  );
}

export default Post;
