import React from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../components/LoginComponent";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container body-container">
      <aside className="flex user-container">
        <section>
          <LoginComponent />
        </section>
        <section>
          <p className="on-hover" onClick={() => navigate("/register")}>
            Not a user? Register now
          </p>
        </section>
      </aside>
      <main>
        <img
          id="squeak-logo"
          src="/img/squeak.png"
          alt="Squeak logo"
        />
        <h1>SQUEAK</h1>
        <h2>Join and start squeaking! </h2>
      </main>
    </div>
  );
};

export default Home;
