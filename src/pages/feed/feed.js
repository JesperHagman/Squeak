import React from "react";
import "./feedStyle.css";
import Post from "../../components/postComponent/post";
import { useState } from "react";
import Header from "../../components/headerComponent/header";
import { useEffect } from "react";
import axios from "axios";
import { Context } from "../../context/context";
import { useContext } from "react";
import { Hamburger } from "../../components/hamburger/hamburger";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [desc, setDesc] = useState("");
  const { user } = useContext(Context);
  const imgFolder = "http://localhost:5001/images/";

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5001/api/posts");
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSqueak = {
      username: user.user.username,
      desc
    };

    try {
      await axios.post("http://localhost:5001/api/posts/", newSqueak);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <>
      <Header />
      <div id="container">
        <Hamburger />
        <div className="feed">
          <div className="feedContainer">
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
            />
            <h4>{user.user.username}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
