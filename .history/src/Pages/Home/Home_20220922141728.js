import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import LeftBar from "../../component/LeftSideContainer/Leftbar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div>
        <LeftBar />
      </div>
    </div>
  );
}

export default Home;
