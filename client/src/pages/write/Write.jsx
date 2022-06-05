import React from 'react'
import "./write.css"
// import WritePost from "../../components/writepost/WritePost";
// import WriteSideBar from '../../components/writesidebar/WriteSideBar';

export default function Write() {
  const isEmpty = false;
  return (
    <>
    <div className="single-container">
    <div className='single-post-title'>blog post</div>
      <div className="single-post-row">
          <div className="single-post-section">
          <div className="write-post-container">
      
      <div className="write-content-container">
          <form className='write-form'>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your post title"/>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" placeholder="Detail..."></textarea>
          </form>
      </div>
    </div>
          </div>
          <div className="single-sidebar-section">
          <div className="write-sidebar-container">
      {isEmpty ? (
        <div className="empty-image"></div>
      ) : (
        <img
          src="https://picsum.photos/700/300"
          alt="insert"
          className="insert-post-image"
        />
      )}

      <div className="action-section">
        <label className="insert-button" htmlFor="fileInput">insert picture</label>
        <input type="file" id="fileInput" style={{display:"none"}}/> 
        <div className="action-title">Publish your post</div>
        <div className="publish-button-container">
          <button className="cancel-button">cancel</button>
          <button className="publish-button">publish </button>
        </div>
      </div>
    </div>
          </div>
      </div>
    </div>
    
    </>
  )
}
