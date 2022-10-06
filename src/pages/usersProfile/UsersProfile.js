import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/headerComponent/header";
import Post from "../../components/postComponent/post";
import { Hamburger } from "../../components/hamburger/hamburger";
import "./usersProfile.css";
import { useNavigate } from "react-router-dom";

function UsersProfile(post) {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let username = params.username;
  const fetchAdress = `https://squeak-backend.herokuapp.com/api/posts?user=${username}`;
  const fetchUsers = `https://squeak-backend.herokuapp.com/api/users?user=${username}`;
  const imgFolder = "https://squeak-backend.herokuapp.com/images/";
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/account");
  };
  const fetchPosts = async () => {
    const res = await axios.get(fetchAdress);
    setPosts(res.data);
  };
  const fetchUser = async () => {
    const res = await axios.get(fetchUsers);
    setUser(res.data[0]);
  };

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, []);

  console.log(user);
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
                  src={imgFolder + user.profilePic}
                  className="pic"
                  alt="Profile img could not load"
                />
                <h2> {username}</h2>
              </div>
              <div className="infoContainer">
                {" "}
                <h3>{user.name}</h3>
                <h5>{user.email}</h5>
              </div>
            </div>
          </div>
          <div className="rightDiv">
            <div className="squeakUser-container">
              <div className="postUser-container">
                {posts.map((post) => (
                  <Post post={post} />
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

export default UsersProfile;
