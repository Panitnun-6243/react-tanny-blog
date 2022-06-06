import React, { useState, useContext } from "react";
import "./write.css";
import { Context } from "../../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <>
      <div className="single-container">
        <div className="single-post-title">blog post</div>
        <div className="single-post-row">
          <div className="single-post-section-write">
            <div className="write-post-container">
              <div className="write-content-container">
                <form className="write-form" onSubmit={handleSubmit} id="form1">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your post title"
                    autoFocus={true}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="15"
                    placeholder="Detail..."
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </form>
              </div>
            </div>
          </div>
          <div className="single-sidebar-section-write">
            <div className="write-sidebar-container">
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="insert"
                  className="insert-post-image"
                />
              ) : (
                <div className="empty-image"></div>
              )}

              <div className="action-section">
                <form
                  className="action-form"
                  onSubmit={handleSubmit}
                  id="form1"
                >
                  <label className="insert-button" htmlFor="fileInput">
                    insert picture
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />{" "}
                </form>
                <div className="action-title">Publish your post</div>
                <div className="publish-button-container">
                  <button className="cancel-button">
                    <Link to="/" className="link">
                      cancel
                    </Link>
                  </button>
                  <button className="publish-button" type="submit" form="form1">
                    publish{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
