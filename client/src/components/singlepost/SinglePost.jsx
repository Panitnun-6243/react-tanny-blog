import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./singlepost.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const [post, setPost] = useState({});
    const path = location.pathname.split("/")[2];
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
      const getPost = async () => {
        const res = await axios.get("/posts/" + path);
        setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      };
      getPost();
    }, [path]);

    const handleDelete = async () => {
      try {
        await axios.delete(`/posts/${post._id}`, {
          data: { username: user.username },
        });
        window.location.replace("/");
      } catch (err) {}
    };
  
    const handleUpdate = async () => {
      try {
        await axios.put(`/posts/${post._id}`, {
          username: user.username,
          title,
          desc,
        });
        setUpdateMode(false)
      } catch (err) {}
    };
  

  return (
    <div className="single-post-container">
      {post.photo ? <img src={PF + post.photo} alt="" className="post-image" /> : null}
      
      <div className="post-content-container">
        {updateMode? <input type="text" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)}/> :<div className="post-content-title">{title}</div>}
        
        <div className="post-subtitle">
          <div className="post-subtitle-time">
            <i className="fa-solid fa-clock"></i> {new Date(post.createdAt).toDateString()}
          </div>
          {post.username === user?.username ? <div className="post-subtitle-tool">
            
            <div className="edit-post">
              <i className="fa-solid fa-feather-pointed" onClick={() => setUpdateMode(true)}></i>
            </div>
            <div className="delete-post">
              <i className="fa-solid fa-trash" onClick={handleDelete}></i>
            </div>
          </div> : null}
          
        </div>
        {updateMode? <><textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea> <button type="button" class="btn btn-outline-secondary" onClick={handleUpdate}>Update</button></>: <div className="post-content-paragraph">{desc}</div>}
      </div>
    </div>
  );
}
