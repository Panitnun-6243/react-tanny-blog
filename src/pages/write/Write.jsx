import React from 'react'
import "./write.css"
import WritePost from "../../components/writepost/WritePost";
import WriteSideBar from '../../components/writesidebar/WriteSideBar';

export default function Write() {
  return (
    <>
    <div className="single-container">
    <div className='single-post-title'>blog post</div>
      <div className="single-post-row">
          <div className="single-post-section">
              <WritePost/>
          </div>
          <div className="single-sidebar-section">
              <WriteSideBar/>
          </div>
      </div>
    </div>
    
    </>
  )
}
