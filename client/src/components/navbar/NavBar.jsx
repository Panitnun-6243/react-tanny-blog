import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Context } from "../../context/Context";

export default function NavBar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    }
  
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
          {user? <li className="top-center-item" onClick={handleLogout}>Logout</li> : null}
          
          
        </ul>
      </div>
      <div className="top-right">
          {user?<><Link to="/settings" className="link"><img src={user.profilePic} alt="userpic" className="user-icon"/></Link> 
          <div className="user-container">
              <p className="display-name">{user.username}</p>
              
          </div></> :<div className="login-container-button"><button className="login-button"><Link to="/login" className="link">Login</Link></button></div>  }
          
      </div>
    </div>
  );
}
