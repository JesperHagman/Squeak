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
  const { dispatch, user } = useContext(Context);
  const [squeaks, setSqueaks] = useState([]);
  const username = user.user.username;
  const fetchAdress = `https://squeak-backend.herokuapp.com/api/posts?user=${username}`;

  const fetchPosts = async () => {
    try {
      const res = await axios.get(fetchAdress);
      setSqueaks(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="profile-container">
        <Hamburger></Hamburger>
        <div className="main-container  mysqueaks-container">
          <h2>My Squeaks</h2>
          <div className="squeak-container">
            <div className="post-container">
              {squeaks.map((squeak) => (
                <Post post={squeak} editable={true} />
              ))}
            </div>
          </div>
        </div>
        <div className="right-container"></div>
      </div>
    </>
  );
}
