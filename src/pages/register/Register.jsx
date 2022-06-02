import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <>
      <div className="signup-section">
        <div className="signup-page-title">sign up</div>
        <div className="signup-container">
          <div >
            <img src="images/register_bg.png" alt="login pic" className="signup-bg" />
          </div>

          <form className="signup-form">
          <div className="signup-form-title">Sign up</div>
          <label>Username</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          <label>Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          <label>Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          <div className="signup-button-container"><button type="button" class="btn btn-outline-secondary">Cancel</button><button type="button" class="btn btn-dark">Sign up</button></div>
          
          </form>
        </div>
      </div>
    </>
  )
}
