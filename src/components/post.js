import React from "react";
import { profilePic } from "../data";
import "./css/postStyle.css";

function Post() {
  return (
    <div className="post">
      <div>
        {" "}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          omnis excepturi corrupti saepe beatae, ratione consequuntur est natus
          ipsam eligendi earum fugit pariatur ad ullam, nobis illo iste.
          Nostrum, atque!
        </p>
      </div>
      <div className="post-bottom">
        {" "}
        <h4>{profilePic.username}</h4>
      </div>
    </div>
  );
}

export default Post;
