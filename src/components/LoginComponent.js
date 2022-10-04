import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import { redirect } from "react-router-dom";

const fetchURL = "https://squeak-backend.herokuapp.com/api/auth/login";

const LoginComponent = () => {
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(Context);

  const handleLogin = (e) => {
    dispatch({ type: "LOGIN_START" });
    e.preventDefault();
    if (
      details.email === "" ||
      !details.email.includes("@") ||
      !details.email.includes(".")
    ) {
      setError("Please provide a valid email adress");
    } else if (details.password === "") {
      setError("Please provide a password");
    } else {
      const user = {
        email: details.email,
        password: details.password,
      };

      fetch(fetchURL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.loggedIn) {
            dispatch({ type: "LOGIN_SUCCESS", payload: data });
            redirect("/feed");
          } else {
            setError(data.message);
            dispatch({ type: "LOGIN_FAILURE" });
          }
        });
    }
  };

  return (
    <div data-testid="loginform">
      <form onSubmit={handleLogin}>
        <div className="errorMessage" data-testid="errorMessage">
          {error}
        </div>
        <div>
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
              Email
            </label>
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="password"
              data-testid="password"
              id="password"
              name="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            ></input>
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>
        </div>
        <button
          className="orange-btn"
          type="submit"
          value="Logga in"
          data-testid="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
