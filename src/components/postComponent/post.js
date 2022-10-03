import React from "react";
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
          <a href="/ ">
            <h4 className="post-username">{post.username}</h4>
          </a>
        )}
      </div>
    </div>
  );
}

export default Post;
