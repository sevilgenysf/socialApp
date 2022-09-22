import React from "react";
import "./Rightbar.css";
import Ads from "../Images/add-user.png";

function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightContainer">
        <div>
          <img src={`${Ads}`} alt="" />
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
