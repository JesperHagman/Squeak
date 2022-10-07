import React from "react";
import Header from "../../components/headerComponent/header";
import "../account/accountStyle.css";
import { Context } from "../../context/context";
import { useContext } from "react";
import { useState } from "react";
import { Hamburger } from "../../components/hamburger/hamburger";
import { useEffect } from "react";
import axios from "axios";
import Post from "../../components/postComponent/post";
import "./mysqueaks.css";

export default function Squeaks() {
  const imgFolder = "https://squeak-backend.herokuapp.com/images/";
  const { dispatch, user } = useContext(Context);
  const [squeaks, setSqueaks] = useState([]);
  const username = user.user.username;
  const fetchAdress = `https://squeak-backend.herokuapp.com/api/posts?user=${username}`;

  const fetchPosts = async () => {
    try {
      const res = await axios.get(fetchAdress);
      setSqueaks(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="profile-container">
        <Hamburger></Hamburger>

        <div className="main-container ">
          <div className="leftDiv">
            <div className="picContainer">
              <div className="leftPicholder">
                <img
                  src={imgFolder + user.user.profilePic}
                  className="pic"
                  alt="Profile img could not load"
                />
                <h2> {username}</h2>
              </div>
              <div className="infoContainer">
                {" "}
                <h3>{user.user.name}</h3>
                <h5>{user.user.email}</h5>
              </div>
            </div>
          </div>
          <div className="rightDiv">
            <div className="squeakUser-container">
              <div className="postUser-container">
                {squeaks.map((squeak) => (
                  <Post post={squeak} editable={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="right-container"></div>
      </div>
    </>
  );
}
