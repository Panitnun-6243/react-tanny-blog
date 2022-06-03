import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="login-section">
        <div className="login-page-title">login</div>
        <div className="login-container">
          <div >
            <img src="images/login_bg.png" alt="login pic" className="login-bg" />
          </div>

          <form className="login-form">
          <div className="login-form-title">Login</div>
          {/* <label>Username</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/> */}
          <label>Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          <label>Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          <div className="login-button-container"><span className="signup-suggest">Don't have an account yet? <span className="signup-suggest-text"><Link to="/register">Sign Up</Link></span></span><button type="button" class="btn btn-dark">Login</button></div>
          
          </form>
        </div>
      </div>
    </>
  );
}
