import React from "react";
import "./navbar.css";

export default function NavBar() {
    const isLogin = false
  return (
    <div className="navbar">
      <div className="top-left">
          <div className="logo-container">
              {/* <img src="images/Blog_logo.png" alt="logo" className="logo" /> */}
              <div>Tanny Blog</div>
          </div>
        
      </div>
      <div className="top-center">
        <ul className="top-center-list">
          <li className="top-center-item"><a href="#home">Home</a></li>
          <li className="top-center-item"><a href="#about me">About Me</a></li>
          <li className="top-center-item"><a href="#write">Write</a></li>
          {isLogin ? <li className="top-center-item"><a href="#logout">Logout</a></li> : null}
          
        </ul>
      </div>
      <div className="top-right">
          {isLogin?<> <img src="images/profileIcon.png" alt="userpic" className="user-icon"/>
          <div className="user-container">
              <p className="display-name">Panitnun Suvannabun</p>
              
          </div></> :<div className="login-container-button"><button className="login-button">Login</button></div>  }
          
      </div>
    </div>
  );
}
