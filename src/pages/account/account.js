import React from "react";
import Header from "../../components/headerComponent/header";
import "./accountStyle.css";
import { Context } from "../../context/context";
import { useContext, useState } from "react";
import axios from "axios";
import { Hamburger } from "../../components/hamburger/hamburger";

export default function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [successPic, setSuccessPic] = useState(false);
  const [successInfo, setSuccessInfo] = useState(false);
  const [successPassword, setSuccessPassword] = useState(false);
  const imgFolder = "https://squeak-backend.herokuapp.com/images/";

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
      await axios.post("https://squeak-backend.herokuapp.com/api/upload", data);
    } catch (err) {}

    try {
      await axios.put(
        "https://squeak-backend.herokuapp.com/api/users/" + user.user._id,
        updatedFile
      );
      setSuccessPic(true);
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
      setSuccessInfo(true);
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
        "https://squeak-backend.herokuapp.com/api/users/" + user.user._id,
        updatedPassword
      );
      setSuccessPassword(true);
    } catch (err) {}
  };

  return (
    <>
      <Header />
      <div className="profile-container">
        <Hamburger />
        <div className="main-container">
          <div className="settings-container">
            <form onSubmit={handleFile}>
              <span id="profilePic-span">
                {" "}
                <label>
                  {" "}
                  <p>Profile picture</p>
                </label>
                <span id="small-screen-profile">
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
                  {successPic && (
                    <span
                      style={{
                        color: "green",
                        textAlign: "right",
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      Picture has been updated.
                    </span>
                  )}
                </span>
              </span>
            </form>
            <form onSubmit={handleUserInfo}>
              <span className="form-group">
                <input
                  type="text"
                  placeholder={user.user.name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
                <label className="form-label">
                  <p>Full name</p>{" "}
                </label>
              </span>
              <span className="form-group">
                <input
                  type="email"
                  placeholder={user.user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
                <label className="form-label">
                  <p>Email</p>{" "}
                </label>
              </span>
              <span className="form-group">
                <input
                  type="number"
                  placeholder={user.user.phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
                <label className="form-label">
                  <p>Phone</p>{" "}
                </label>
              </span>
              <button className="info-button" type="submit">
                Update information
              </button>
              {successInfo && (
                <span
                  style={{
                    color: "green",
                    textAlign: "right",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  Profile has been updated.
                </span>
              )}
              <br />
              <br />
            </form>
            <form onSubmit={handlePassword}>
              <span className="form-group">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                />
                <label className="form-label">
                  <p>New password</p>{" "}
                </label>
              </span>
              <span className="form-group">
                <input type="password" 
                className="form-input"/>
                <label className="form-label">
                  <p>Repeat password</p>{" "}
                </label>
              </span>
              <button className="info-button">Change password</button>
              {successPassword && (
                <span
                  style={{
                    color: "green",
                    textAlign: "right",
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  Password has been updated.
                </span>
              )}
            </form>
          </div>
        </div>

        <div className="right-container"></div>
      </div>
    </>
  );
}
