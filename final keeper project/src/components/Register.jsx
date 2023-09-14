// src/Register.js

import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(event) {
    event.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    axios.post("/register", user).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
        <div className="separator">Or</div>
        <div className="social-buttons">
        <a href="/auth/facebook" className="facebook-btn btn btn-block btn-social btn-facebook">
          <span className="fa fa-facebook"></span> Sign up with Facebook
        </a>
        <a href="/auth/google" className="google-btn btn btn-block btn-social btn-google">
          <span className="fa fa-google"></span> Sign up with Google
        </a>
      </div>

      </form>
    </div>
  );
}

export default Register;
