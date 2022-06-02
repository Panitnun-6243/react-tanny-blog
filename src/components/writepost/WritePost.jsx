import React from 'react'
import "./writepost.css"

export default function WritePost() {
  return (
    <div className="single-post-container">
      <img src="https://picsum.photos/700/300" alt="" className="post-image" />
      <div className="post-content-container">
        <div className="post-content-title">How to make a blog</div>
        <div className="post-subtitle">
          <div className="post-subtitle-time">
            <i className="fa-solid fa-clock"></i> 1 hour ago
          </div>
          <div className="post-subtitle-tool">
            <div className="edit-post" >
              <i className="fa-solid fa-feather-pointed"></i>
            </div>
            <div className="delete-post">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
        <div className="post-content-paragraph"></div>
      </div>
    </div>
  )
}
