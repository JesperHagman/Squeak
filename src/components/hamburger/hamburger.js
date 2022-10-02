import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import { useContext } from "react";

export const Hamburger = () => {
  const { dispatch, user } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
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
            <a href="/squeaks">
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
  );
};
