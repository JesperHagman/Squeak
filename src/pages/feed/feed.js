import React, { useEffect, useState, useContext } from "react";
import "./feedStyle.css";
import Post from "../../components/postComponent/post";
import Header from "../../components/headerComponent/header";
import axios from "axios";
import { Context } from "../../context/context";
import { Hamburger } from "../../components/hamburger/hamburger";
import Explore from "../../components/explore/explore";
import Profile from "../profile/profile";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [desc, setDesc] = useState("");
  const { user } = useContext(Context);
  const [profileUser, setProfileUser] = useState("");

  const imgFolder = "https://squeak-backend.herokuapp.com/images/";

  const fetchPosts = async () => {
    const res = await axios.get(
      "https://squeak-backend.herokuapp.com/api/posts"
    );
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSqueak = {
      username: user.user.username,
      desc,
    };
    try {
      await axios.post(
        "https://squeak-backend.herokuapp.com/api/posts/",
        newSqueak
      );
      window.location.reload();
    } catch (err) {}
  };
  return (
    <>
      <Header />
      <div id="container">
        <Hamburger />
        <div className="feed">
          <div className="feed-container">
            <form className="input-container" onSubmit={handleSubmit}>
              <textarea
                className="squeak-text"
                type="text"
                placeholder="What's on your mind?"
                onChange={(e) => setDesc(e.target.value)}
              />
              <button className="submit-squeak" type="submit">
                Squeak
              </button>
            </form>

            <div className="squeak-container">
              <div className="post-container">
                {posts.map((p) => (
                  <Post post={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="profile-upper">
            {" "}
            <img
              src={imgFolder + user.user.profilePic}
              className="profilePic"
              alt="hej"
            />
            <h4>{user.user.username}</h4>
          </div>
          <h4>EXPLORE</h4>
          <div className="explore">
            <Explore
              profileUser={profileUser}
              setProfileUser={setProfileUser}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
