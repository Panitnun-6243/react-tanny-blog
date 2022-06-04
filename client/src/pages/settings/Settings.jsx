import React from 'react'
import "./settings.css"

export default function Settings() {
  return (
    <>
    <div className="setting-section">
    <div className='setting-page-title'>account setting</div>
      <div className="setting-container">
          <div className="setting">
          <div className='user-profile-image-container'>
          <img src="https://picsum.photos/300/300" alt="profile" className="user-profile-image" />
          <label className="insert-button" htmlFor="profileInput">Upload picture</label>
          <input type="file" id="profileInput" style={{display:"none"}}/> 
          </div>
          <form className='profile-form'>
              <label>Username</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          <label>Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          <label>Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder=""/>
          <label>About yourself</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your briefly description..."></textarea>
          </form>
          <div className='update-button-section'>
          <button type="button" class="btn btn-secondary">Update</button>
          </div>
          </div>
      </div>
    </div>
    
    </>
  )
}
