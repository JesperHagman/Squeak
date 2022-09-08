import React from "react";
import { profilePic } from "../data";
import "./css/feedStyle.css";

console.log(profilePic);
function Feed() {
  return (
    <div id="container">
      <div className="left-sidebar">left</div>
      <div className="feed">
        <input className="squeak-text" type="text" />
        <button className="submit-squeak">Squeak</button>

        <div className="squeak-container"></div>
      </div>
      <div className="right-sidebar">
        <img src={profilePic[0].img} />
        <a href="">Account</a>
        <a href="">Logout</a>
      </div>
    </div>
  );
}

export default Feed;
