import React from "react";
import "./post.css";

export default function Post({post}) {
  return (
    <div>
      <div className="post-card">
        <div className="post-card-header" style={{backgroundImage:`url(${post.picture})`}}>
          <div className="post-card-header-mask"></div>
        </div>
        <div className="card-body">
          <div className="card-body-header">
            <h1>{post.title}</h1>
          </div>
          <p className="card-body-description">
            {post.desc}
          </p>
          <div className="card-body-footer">
            <i className="fa-solid fa-clock"></i> {new Date(post.createdAt).toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}
