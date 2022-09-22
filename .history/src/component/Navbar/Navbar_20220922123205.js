import React from "react";
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";

function Navbar() {
  return (
    <div className="mainNavbar">
      <div>
        <p>Social</p>
      </div>
      <div>
        <div>
          <img src={`${searchIcon}`} alt="" />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <div>
          <img src="" alt="" />
          <p>Suman</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
