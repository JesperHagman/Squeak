import React from "react";
import Header from "../../components/headerComponent/header";
import "./accountStyle.css";
import { Link } from "react-router-dom";
import { profilePic } from "../../data";

export default function Account() {
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
                  <li>
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
            <span id="profilePic-span">
              {" "}
              <label>
                {" "}
                <p>Profile Picture</p>
              </label>
              <img src={profilePic[0].img} alt="" />{" "}
              <button className="picture-btn">Change Profile picture</button>
            </span>
            <span>
              <label>
                <p>Full Name</p>{" "}
              </label>
              <input type="text" />
            </span>
            <span>
              <label>
                <p>Email</p>{" "}
              </label>
              <input type="email" />
            </span>
            <span id="profilePic-span">
              <label>
                <p>Phone</p>{" "}
              </label>
              <input type="number" />
            </span>
            <button className="info-button">Change Information</button>
            <br />
            <br />

            <span>
              <label>
                <p>Password</p>{" "}
              </label>
              <input type="text" />
            </span>
            <span id="profilePic-span">
              <label>
                <p>Repeat Password</p>{" "}
              </label>
              <input type="text" />
            </span>
            <button className="info-button">Change Password</button>
          </div>
        </div>

        <div className="right-container"></div>
      </div>
    </>
  );
}
