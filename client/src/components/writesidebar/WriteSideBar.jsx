import React from "react";
import "./writesidebar.css";

export default function WriteSideBar() {
  const isEmpty = false;

  return (
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
  );
}
