import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header-section">
      <div className="header-container">
        <div className="header-left">
          <img
            src="images/header_bg.png"
            className="header-image"
            alt="header pic"
          />
        </div>
        <div className="header-right">
          <div>
            <div className="header-title">
              &ldquo;Today a reader, tomorrow a leader.&rdquo;
              <span className="writer">by Margaret fuller</span>
            </div>
            <div className="header-detail">CSC217 Final project</div>
          </div>
          <div>
            <div className="header-category">
              {/* <div className="category-title">Categories</div> */}
              <div className="category-button-wrap">
                {/* <button className="category-button-a">All</button> */}
                <button className="category-button-i"><a href="#post" className="link">Explore now</a></button>
                {/* <button className="category-button-i">Lifestyle</button>
                <button className="category-button-i">Sport</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
