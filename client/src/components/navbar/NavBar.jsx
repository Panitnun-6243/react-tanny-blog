import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
    const isLogin = true
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
          <li className="top-center-item">
            <Link to="/">Home</Link>
            </li>
          {/* <li className="top-center-item">About Me</li> */}
          <li className="top-center-item"><Link to="/write">Write</Link></li>
          {isLogin ? <li className="top-center-item"><Link to="/">Logout</Link></li> : null}
          
        </ul>
      </div>
      <div className="top-right">
          {isLogin?<><Link to="/settings" className="link"><img src="https://picsum.photos/300/300" alt="userpic" className="user-icon"/></Link> 
          <div className="user-container">
              <p className="display-name">Panitnun Suvannabun</p>
              
          </div></> :<div className="login-container-button"><button className="login-button">Login</button></div>  }
          
      </div>
    </div>
  );
}
