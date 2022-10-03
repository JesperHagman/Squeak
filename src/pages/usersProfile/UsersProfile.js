import React, { useEffect, useState} from "react";
import axios from "axios";
import Header from "../../components/headerComponent/header";
import Post from "../../components/postComponent/post";
import { Hamburger } from "../../components/hamburger/hamburger";

function UsersProfile(post) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let username = params.username;
  const fetchAdress = `https://squeak-backend.herokuapp.com/api/posts?user=${username}`;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(fetchAdress);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
    <Header />
    <div className="profile-container">
      <Hamburger></Hamburger>
      <div className="main-container  mysqueaks-container">
        <h2> {username}'s Squeak</h2>
        <div className="squeak-container">
          <div className="post-container">
            {posts.map((post) => (
              <Post post={post}/>
            ))}
          </div>
        </div>
      </div>
      <div className="right-container"></div>
    </div>
  </>
  );
}

export default UsersProfile;
