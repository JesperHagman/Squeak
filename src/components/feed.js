import React from "react";
import "./css/feedStyle.css";
function Feed() {
  return (
    <div id="container">
      <div className="left-sidebar">left</div>
      <div className="feed">
        <input className="squeak-text" type="text" />
        <button className="submit-squeak">Squeak</button>

        <div className="squeak-container">tweeeet</div>
      </div>
      <div className="right-sidebar">right</div>
    </div>
  );
}

export default Feed;
