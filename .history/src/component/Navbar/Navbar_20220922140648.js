import React from "react";
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimg from "../Images/profile.png";

function Navbar() {
  return (
    <div className="mainNavbar">
      <div className="logoContainer">
        <p>Social</p>
      </div>
      <div>
        <div className="searchIputContainer">
          <img src={`${searchIcon}`} alt="" className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="search your friends"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="iconsContainer">
        <img src={`${Notifications}`} className="icons" alt="" />
        <img src={`${Message}`} className="icons" alt="" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${Profileimg}`} alt="" className="profileImage" />
          <p style={{ marginLeft: "5px" }}>Yusuf</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
