import React from "react";
import "./userCard.css";
import { useNavigate } from "react-router-dom";
const imgFolder = "https://squeak-backend.herokuapp.com/images/";

const UserCard = ({ user, profileUser, setProfileUser }) => {
  const navigate = useNavigate();
  const changeState = (e) => {
    e.preventDefault();
    setProfileUser(user._id);
    console.log(user._id);
    navigate("/usersprofile?username=" + user.username);
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
