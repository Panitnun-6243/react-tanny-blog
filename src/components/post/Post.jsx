import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="card-header-mask"></div>
        </div>
        <div className="card-body">
          <div className="card-body-header">
            <h1>How to write a blog</h1>
          </div>
          <p className="card-body-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            
          </p>
          <div className="card-body-footer">
            <i className="fa-solid fa-clock"></i> 1 hour ago
          </div>
        </div>
      </div>
    </div>
  );
}
