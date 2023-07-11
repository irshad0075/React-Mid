import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import LoginImg from "../assets/images/Login[1].svg";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or other actions here
    console.log("Form submitted!");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="img">
        <img src={LoginImg} />
      </div>
      <div className="form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn"
                style={{ background: " #e1997e" }}
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Having no account <Link to="/SignUp">SignUp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
