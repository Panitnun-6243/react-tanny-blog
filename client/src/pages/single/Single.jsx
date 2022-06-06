import React from "react";
import "./single.css";
import SinglePost from "../../components/singlepost/SinglePost";

export default function Single() {
  return (
    <>
      <div className="single-container">
        <div className="single-post-title">blog post</div>
        <div className="single-post-row">
          <SinglePost />
        </div>
      </div>
    </>
  );
}
