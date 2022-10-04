import React, { useState, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import "./register.css";

const RegisterComponent = () => {
  const { dispatch} = useContext(Context);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    username: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate()

  const registerHandler = async (e) => {
    e.preventDefault();
    const registerUser = {
      name: details.name,
      username: details.username,
      email: details.email,
      password: details.password,
      phone: details.phone,
    };

    if (details.name === "") {
      setMessage("Please provide your name");
      return message;
    }
    if (details.phone === "") {
      setMessage("Please provide your phonenumber");
      return message;
    }
    if (details.email === "" || !details.email.includes("@") || !details.email.includes(".")) { 

      setMessage("Please provide a valid email adress");
      return message;
    }
    if (details.password === "") {
      setMessage("Please provide a password");
      return message;
    }
    if (details.username === "") {
      setMessage("Please provide a username");
      return message;
    }
    dispatch({ type: "LOGIN_START" });
    try {
      await fetch("https://squeak-backend.herokuapp.com/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(registerUser),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "LOGIN_SUCCESS", payload: data });
          redirect("/feed");
        });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div
      className="body-container"
      id="register-container"
      data-testid="registerform"
    >
      <form onSubmit={registerHandler}>
        <img className="small-logo" src="/img/squeak.png" alt="Squeak logo" onClick={() => navigate('/')} />
        <h1>Register here</h1>

        <div className="Message" data-testid="errorMessage">
          {message}
        </div>

        <div>
          <div className="form-group">
            <input
              className="form-input"
              type="text"
              name="name"
              id="name"
              data-testid="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
            <label className="form-label" htmlFor="name">
              Name:
            </label>
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="text"
              phone="phone"
              id="phone"
              data-testid="phone"
              onChange={(e) =>
                setDetails({ ...details, phone: e.target.value })
              }
              value={details.phone}
            />
            <label className="form-label" htmlFor="phone">
              Phone:
            </label>
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="text"
              id="email"
              data-testid="email"
              name="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
            <label className="form-label" htmlFor="email">
              Email:
            </label>
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="password"
              password="password"
              id="password"
              data-testid="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
            <label className="form-label" htmlFor="password">
              Password:
            </label>
          </div>

          <div className="form-group">
            <input
              className="form-input"
              type="text"
              name="username"
              id="username"
              data-testid="username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            />
            <label className="form-label" htmlFor="username">
              Username:
            </label>
          </div>

          <button
            className="orange-btn"
            type="submit"
            value="REGISTER"
            data-testid="submit"
          >
            Register
          </button>
        </div>
        <p className="p-hover" onClick={() => navigate("/")}>
            Already a user? Log in
      </p>
      </form>
      
    </div>
  );
};

export default RegisterComponent;
