import React from "react";
import "./userCard.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";
const imgFolder = "https://squeak-backend.herokuapp.com/images/";

const UserCard = ({ exploreUser, profileUser, setProfileUser }) => {
  const navigate = useNavigate();
  const { user } = useContext(Context)
  const changeState = (e) => {
    e.preventDefault();
    setProfileUser(exploreUser._id);
    if(user.user.username === exploreUser.username){
      navigate('/squeaks')
    }else{
      navigate("/usersprofile?username=" + exploreUser.username);
    }
  };
  return (
    <>
      <div className="users">
        <img
          src={imgFolder + exploreUser.profilePic}
          className="profilePic1"
          onClick={changeState}
        />
        <h6>{exploreUser.username}</h6>
      </div>
    </>
  );
};

export default UserCard;
