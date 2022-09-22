import React from "react";
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimg from "../Images/bell.png";

function Navbar() {
  return (
    <div className="mainNavbar">
      <div>
        <p>Social</p>
      </div>
      <div>
        <div>
          <img src={`${searchIcon}`} alt="" className="Icons" />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div>
        <img src={`${Notifications}`} alt="" />
        <img src={`${Message}`} alt="" />
        <div>
          <img src="" alt="" className="profileImage" />
          <p>Suman</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
