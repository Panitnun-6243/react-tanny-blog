import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
          <Posts/>
      </div>
      <Footer/>
    </>
  );
}
