import React from "react";
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimg from "../Images/bell.png";

function Navbar() {
  return (
    <div className="mainNavbar">
      <div className="logoContainer">
        <p>Social</p>
      </div>
      <div>
        <div className="searchIputContainer">
          <img src={`${searchIcon}`} alt="" className="icons" />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="iconsContainer">
        <img src={`${Notifications}`} className="icons" alt="" />
        <img src={`${Message}`} className="icons" alt="" />
        <div>
          <img src="" alt="" className="profileImage" />
          <p>Suman</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
