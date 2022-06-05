import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlepost.css";
import axios from "axios";

export default function SinglePost() {
  const location = useLocation();
  const [post, setPost] = useState({});
    const path = location.pathname.split("/")[2];



    useEffect(() => {
      const getPost = async () => {
        const res = await axios.get("/posts/" + path);
        
        setPost(res.data);
        console.log(res)
      };
      getPost();
    }, [path]);

  return (
    <div className="single-post-container">
      {post.picture && (<img src={post.photo} alt="" className="post-image" />)}
      
      <div className="post-content-container">
        <div className="post-content-title">{post.title}</div>
        <div className="post-subtitle">
          <div className="post-subtitle-time">
            <i className="fa-solid fa-clock"></i> {new Date(post.createdAt).toDateString()}
          </div>
          <div className="post-subtitle-tool">
            <div className="edit-post">
              <i className="fa-solid fa-feather-pointed"></i>
            </div>
            <div className="delete-post">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
        <div className="post-content-paragraph">{post.desc}</div>
      </div>
    </div>
  );
}
