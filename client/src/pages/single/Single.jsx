import React from "react";
import "./single.css";
import SinglePost from "../../components/singlepost/SinglePost"
import SingleSideBar from "../../components/singlepost_sidebar/SingleSideBar"
import Footer from "../../components/footer/Footer";

export default function Single() {
  return (
    <>
    <div className="single-container">
    <div className='single-post-title'>blog post</div>
      <div className="single-post-row">
          <div className="single-post-section">
              <SinglePost/>
          </div>
          <div className="single-sidebar-section">
              <SingleSideBar/>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
