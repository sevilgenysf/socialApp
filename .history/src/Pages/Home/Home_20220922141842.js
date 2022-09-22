import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import LeftBar from "../../component/LeftSideContainer/Leftbar";
import MainPost from "../../component/MainPostContainer/MainPost";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div>
        <LeftBar />
        <MainPost />
      </div>
    </div>
  );
}

export default Home;
