import React from "react";
import axios from "axios";
import "./profile.css";
import { useEffect, useState } from "react";
const imgFolder = "https://squeak-backend.herokuapp.com/images/";

const Profile = ({ profileUser }) => {
  const [profile, setProfile] = useState([]);

  const fetchProfile = async () => {
    const res = await axios.get(
      "https://squeak-backend.herokuapp.com/api/users/" + profileUser
    );
    setProfile(res.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="profileContainer">
      <div className="top-holder">
        <img src={imgFolder + profile.profilePic} />
        <h1>{profile.username}</h1>
      </div>
      <div className="lower-holder">
        <h3>{profile.name}</h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa
        aperiam nulla? Repudiandae, iusto perferendis possimus enim, voluptates
        praesentium temporibus dolorum ipsam minima sequi, dicta aperiam ipsa ea
        dolorem tenetur?
        <h3>{profile.email}</h3>
      </div>
    </div>
  );
};

export default Profile;
