import React from "react";
import "./Rightbar.css";
import Ads from "../Images/ads.png";

function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightContainer">
        <div className="adsContainer">
          <img src={`${Ads}`} alt="" className="adsImage" />
          <div>
            <p style={{ textAlign: "start" }}>CodeYsf</p>
            <p>Buy support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
