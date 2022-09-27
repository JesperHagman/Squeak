import React, { useState } from "react";
const fetchURL = "http://localhost:5001/api/auth/login";

const LoginComponent = () => {
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    debugger;
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
          console.log(data);
          if (data.loggedIn) {
            console.log("Logged in!");
          } else {
            setError(data.message);
            console.log(data.message);
          }
        });
    }
  };

  return (
    <div data-testid="loginform">
      <h2>Logga in</h2>
      <form onSubmit={handleLogin}>
        <div className="errorMessage" data-testid="errorMessage">
          {error}
        </div>
        <div>
          <label htmlFor="email" />
          <input
            type="text"
            id="email"
            data-testid="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />

          <label htmlFor="password">
            <input
              type="password"
              data-testid="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}></input>
          </label>
        </div>
        <input type="submit" value="Logga in" data-testid="submit"></input>
      </form>
    </div>
  );
};

export default LoginComponent;
