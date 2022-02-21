import React from "react";
import "./navbar.css";
import "./profileIcon.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="topLeft">
        <img
          className="tannyBlogPic"
          src="https://cdn-icons-png.flaticon.com/512/6816/6816837.png"
        />
        <img
          className="tannyBlogPic"
          src="https://cdn-icons-png.flaticon.com/512/6816/6816810.png"
        />
        <img
          className="tannyBlogPic"
          src="https://cdn-icons-png.flaticon.com/512/6816/6816826.png"
        />
        <img
          className="tannyBlogPic"
          src="https://cdn-icons-png.flaticon.com/512/6816/6816826.png"
        />
        <img
          className="tannyBlogPicY"
          src="https://cdn-icons-png.flaticon.com/512/6816/6816848.png"
        />
        <img
          className="tannyBlogPic"
          src="https://cdn-icons-png.flaticon.com/512/6816/6816811.png"
        />
        <img
          className="tannyBlogPic"
          src="https://cdn-icons-png.flaticon.com/512/6816/6816821.png"
        />
        <img
          className="tannyBlogPic"
          src="https://cdn-icons-png.flaticon.com/512/6816/6816828.png"
        />
        <img
          className="tannyBlogPic"
          src="https://cdn-icons-png.flaticon.com/512/6816/6816816.png"
        />
        <img
          className="tannyBlogPicC"
          src="https://cdn-icons.flaticon.com/png/512/2940/premium/2940637.png?token=exp=1645472292~hmac=9eb6af6ce7baca9b1583cb38dc5cffb7"
        />
      </div>
      <div className="topCenter">
        <ul className="topCenterList">
          <li className="topCenterItem">Home</li>
          <li className="topCenterItem">About Me</li>
          <li className="topCenterItem">Write</li>
        </ul>
      </div>
      <div className="topRight">
        <div className="topRightImg">
          <img
            className="userPic"
            src="https://cdn-icons-png.flaticon.com/512/1385/1385003.png"
            alt="User's pic"
          />
        </div>

        <div className="topRightText">
          <div>User's name</div>
          <button className="topRightLogout">Logout</button>
        </div>
      </div>
    </div>
  );
}
