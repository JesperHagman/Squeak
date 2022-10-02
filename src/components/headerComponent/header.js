import React from "react";
import "./headerStyle.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 onClick={() => navigate("/feed")}>SQUEAK</h1>
    </div>
  );
}

export default Header;
