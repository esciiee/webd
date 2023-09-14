// src/Login.js

import React, { useState } from "react";
import axios from "axios";


function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    axios.post("/login", user).then((response) => {
      if (response.data) {
        setIsLoggedIn(true);
      }
    });
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        <div className="separator">Or</div>
        <div className="social-buttons">
        <a href="/auth/facebook" className="facebook-btn btn btn-block btn-social btn-facebook">
          <span className="fab fa-facebook"></span> Sign in with Facebook
        </a>
        <a href="/auth/google" className="google-btn btn btn-block btn-social btn-google">
          <span className="fa fa-google"></span> Sign in with Google
        </a>
      </div>
      </form>
    </div>
  );
}

export default Login;
