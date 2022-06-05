import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="signup-section">
        <div className="signup-page-title">sign up</div>
        <div className="signup-container">
          <div>
            <img
              src="images/register_bg.png"
              alt="login pic"
              className="signup-bg"
            />
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-form-title">Sign up</div>
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="signup-button-container">
              <button type="button" className="btn btn-outline-secondary">
                <Link to="/login" className="link">
                  Cancel
                </Link>
              </button>
              <button type="submit" className="btn btn-dark">
                Sign up
              </button>
              
            </div>{error && <span style={{color:"red"}}>Something went wrong!</span>}
          </form>
        </div>
      </div>
    </>
  );
}
