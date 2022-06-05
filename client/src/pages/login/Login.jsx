import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }


  return (
    <>
      <div className="login-section">
        <div className="login-page-title">login</div>
        <div className="login-container">
          <div >
            <img src="images/login_bg.png" alt="login pic" className="login-bg" />
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-title">Login</div>
          {/* <label>Username</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/> */}
          <label>Username</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" ref={userRef}/>
          <label>Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" ref={passwordRef}/>
          <div className="login-button-container"><span className="signup-suggest">Don't have an account yet? <span className="signup-suggest-text"><Link to="/register">Sign Up</Link></span></span><button type="submit" className="btn btn-dark" disabled={isFetching}>Login</button></div>
          
          </form>
        </div>
      </div>
    </>
  );
}
