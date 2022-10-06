import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import { useContext } from "react";
import "./hamburger.css";
import { useState } from "react";

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
                <p className="arrow">{">"}</p>
              </li>
            </Link>
            <Link to="/squeaks">
              <li>
                {" "}
                <p>PROFILE</p>
                <p className="arrow">{">"}</p>
              </li>
            </Link>
            <Link to="/account">
              <li>
                {" "}
                <p>SETTINGS</p>
                <p className="arrow">{">"}</p>
              </li>
            </Link>
            <Link>
              <li onClick={handleLogout}>
                {" "}
                <p>LOGOUT</p>
                <p className="arrow">{">"}</p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};
