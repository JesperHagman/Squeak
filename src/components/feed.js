import React from "react";
import { profilePic } from "../data";
import "./css/feedStyle.css";
import Post from "./post";
import { useState } from "react";
import Header from "./header";

function Feed() {
  return (
    <div id="container">
      <div className="left-sidebar">left</div>
      <div className="feed">
        <div className="input-container">
          <input className="squeak-text" type="text" />

          <button className="submit-squeak">Squeak</button>
        </div>
        <div className="squeak-container">
          <div className="post-container">
            {profilePic.map((item) => (
              <Post item={item} key={item.id} />
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

        <ul>
          <li>PROFILE</li>
          <li>LOGOUT</li>
        </ul>
      </div>
    </div>
  );
}

export default Feed;
