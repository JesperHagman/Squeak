import React from "react";
import Header from "../../components/headerComponent/header";
import "./accountStyle.css";
import { Context } from "../../context/context";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { Hamburger } from "../../components/hamburger/hamburger";

export default function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const imgFolder = "http://localhost:5001/images/";

  const { user } = useContext(Context);

  const handleFile = async (e) => {
    e.preventDefault();
    const updatedFile = {
      userId: user.user._id,
    };
    const data = new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    updatedFile.profilePic = filename;

    try {
      await axios.post("http://localhost:5001/api/upload", data);
    } catch (err) {}

    try {
      await axios.put(
        "http://localhost:5001/api/users/" + user.user._id,
        updatedFile
      );
    } catch (err) {}
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
        "https://squeak-backend.herokuapp.com/api/users/" + user.user._id,
        updatedInfo
      );
    } catch (err) {}
    window.location.reload();
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
      console.log("good");
    } catch (err) {}
  };

  return (
    <>
      <Header />
      <div class="profile-container">
        <Hamburger />
        <div className="main-container">
          <div className="settings-container">
            <form onSubmit={handleFile}>
              <span id="profilePic-span">
                {" "}
                <label>
                  {" "}
                  <p>Profile Picture</p>
                </label>
                <label htmlFor="fileInput" className="iconImg">
                  <i class="fa-solid fa-images"></i>
                </label>
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : imgFolder + user.user.profilePic
                  }
                  alt=""
                />{" "}
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <button className="picture-btn" type="submit">
                  Update Profile picture
                </button>
              </span>
            </form>
            <form onSubmit={handleUserInfo}>
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
