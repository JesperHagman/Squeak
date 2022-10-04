import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";
import "./postStyle.css";
import { useState } from "react";

function Post({ post, editable }) {
  const { dispatch, user } = useContext(Context)
  const [verification, setVerification] = useState(false)
  const username = user.user.username;
  const handleInitialClick = () => {
    setVerification(true)
  }
  const handleDelete = async (id) => {
    const postID = id;
    const fetchAdress = `https://squeak-backend.herokuapp.com/api/posts/${postID}`
    try {
      const res = await axios({
        method: 'DELETE',
        url: fetchAdress,
        headers: {}, 
        data: {
          username: username, // This is the body part
        }
      });

     window.location.reload()

    }catch(err) {
      throw new Error(err)
    }
    setVerification(false)
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
        {editable ? (
          verification ? ( 
          <div className="btn-holder">
            <p>Are you sure?</p>
              <button onClick={() => handleDelete(post._id)}>Yes</button>
              <button onClick={() => setVerification(false)}>No</button>
           </div>
                      
          ) : (
            <button
              onClick={() => {
                handleInitialClick(post._id);
              }}
              className="delete-btn"
            >
              Delete
            </button>
           
           
          )
        ) : (
          <Link to= {`/usersprofile?username=${post.username}`}>
            <h4 className="post-username">{post.username}</h4>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Post;
