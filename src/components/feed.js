import React from "react";
import { profilePic } from "../data";
import "./css/feedStyle.css";
import Post from "./post";
import { useState } from "react";
import Header from "./header";
import { useEffect } from "react";
import axios from "axios";

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
              <a href="">
                <li>
                  <p>START</p>
                </li>
              </a>
              <a href="">
                <li>
                  {" "}
                  <p>START</p>
                </li>
              </a>
              <a href="">
                <li>
                  {" "}
                  <p>START</p>
                </li>
              </a>
              <a href="">
                <li>
                  {" "}
                  <p>START</p>
                </li>
              </a>
              <a href="">
                <li>
                  {" "}
                  <p>START</p>
                </li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
      <div className="feed">
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

      <div className="right-sidebar">
        <div className="profile-upper">
          {" "}
          <img src={profilePic[0].img} />
          <h4>{profilePic[0].username}</h4>
        </div>
      </div>
    </div>
  );
}

export default Feed;
