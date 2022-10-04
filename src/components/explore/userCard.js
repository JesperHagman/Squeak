import React from "react";
import "./userCard.css";
const imgFolder = "http://localhost:5001/images/";

const UserCard = ({ user, profileUser, setProfileUser }) => {
  const changeState = (e) => {
    e.preventDefault();
    setProfileUser(user._id);
    console.log(profileUser);
  };
  return (
    <>
      <div className="users">
        <img
          src={imgFolder + user.profilePic}
          className="profilePic1"
          onClick={changeState}
        />
        <h6>{user.username}</h6>
      </div>
    </>
  );
};

export default UserCard;
