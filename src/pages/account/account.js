import React from "react";
import Header from "../../components/headerComponent/header";
import "./accountStyle.css";
import { Link } from "react-router-dom";
import { profilePic } from "../../data";
import { Context } from "../../context/context";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";


export default function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch, user } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleUserInfo = async (e) => {
    e.preventDefault();
    const updatedInfo = {
      userId: user.user._id,
      name,
      email,
      phone,
    };

    try {
      await axios.put(
        "http://localhost:5001/api/users/" + user.user._id,
        updatedInfo
      );
    } catch (err) {}
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    const updatedPassword = {
      userId: user.user._id,
      password,
    };

    try {
      await axios.put(
        "http://localhost:5001/api/users/" + user.user._id,
        updatedPassword
      );
    } catch (err) {}
  };

  return (
    <>
      <Header />
      <div class="profile-container">
        <div className="left-container">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <Link to={"/feed"}>
                  <li>
                    <p>START</p>
                  </li>
                </Link>
                <a href="">
                  <li>
                    {" "}
                    <p>PROFILE</p>
                  </li>
                </a>
                <a href="">
                  <li>
                    {" "}
                    <p>MY SQUEAKS</p>
                  </li>
                </a>
                <a href="/account">
                  <li>
                    {" "}
                    <p>ACCOUNT SETTINGS</p>
                  </li>
                </a>
                <a href="">
                  <li onClick={handleLogout}>
                    {" "}
                    <p>LOGOUT</p>
                  </li>
                </a>
              </ul>
            </div>
          </nav>
        </div>
        <div className="main-container">
          <div className="settings-container">
            <form onSubmit={handleUserInfo}>
              <span id="profilePic-span">
                {" "}
                <label>
                  {" "}
                  <p>Profile Picture</p>
                </label>
                <img className="profile-pic" src={profilePic[0].img} alt="" />{" "}
                <button className="picture-btn">Change Profile picture</button>
              </span>
              <span>
                <label>
                  <p>Full Name</p>{" "}
                </label>
                <input
                  type="text"
                  placeholder={user.user.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
              <span>
                <label>
                  <p>Email</p>{" "}
                </label>
                <input
                  type="email"
                  placeholder={user.user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <span id="profilePic-span">
                <label>
                  <p>Phone</p>{" "}
                </label>
                <input
                  type="number"
                  placeholder={user.user.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </span>
              <button className="info-button" type="submit">
                Update Information
              </button>
              <br />
              <br />
            </form>
            <form onSubmit={handlePassword}>
              <span>
                <label>
                  <p>New Password</p>{" "}
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
              <span id="profilePic-span">
                <label>
                  <p>Repeat Password</p>{" "}
                </label>
                <input type="password" />
              </span>
              <button className="info-button">Change Password</button>
            </form>
          </div>
        </div>

        <div className="right-container"></div>
      </div>
    </>
  );
}
