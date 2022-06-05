import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div>
      <div className="post-card">
        <div className="post-card-header" style={{ backgroundImage:`url(${PF + post.photo})`} }>
          <div className="post-card-header-mask"></div>
        </div>
        <div className="card-body">
          <div className="card-body-header">
            <Link to={`/post/${post._id}`} className="link">
            <h1>{post.title}</h1>
            </Link>
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
