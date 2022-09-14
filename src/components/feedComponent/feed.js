import React from "react";
import { profilePic } from "../../data";
import "./feedStyle.css";
import Post from "../postComponent/post";
import { useState } from "react";
import Header from "../headerComponent/header";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5001/api/posts");
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div id="container">
        <div className="left-sidebar">
          {" "}
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <Link to={"/login"}>
                  <li>
                    <p>START</p>
                  </li>
                </Link>
                <a href="">
                  <li>
                    {" "}
                    <p>PROFILE</p>
                  </li>
                </a>
                <a href="">
                  <li>
                    {" "}
                    <p>MY SQUEAKS</p>
                  </li>
                </a>
                <a href="/account">
                  <li>
                    {" "}
                    <p>ACCOUNT SETTINGS</p>
                  </li>
                </a>
                <a href="">
                  <li>
                    {" "}
                    <p>LOGOUT</p>
                  </li>
                </a>
              </ul>
            </div>
          </nav>
        </div>
        <div className="feed">
          <div className="feedContainer">
            <div className="input-container">
              <textarea
                className="squeak-text"
                type="text"
                placeholder="What's on your mind?"
              />

              <button className="submit-squeak">Squeak</button>
            </div>
            <div className="squeak-container">
              <div className="post-container">
                {posts.map((p) => (
                  <Post post={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="profile-upper">
            {" "}
            <img src={profilePic[0].img} />
            <h4>{profilePic[0].username}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
