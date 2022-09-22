import React from "react";
import "./Rightb ar.css";
import Ads from "../Images/ads.png";

function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightContainer">
        <div>
          <img src={`${Ads}`} alt="" className="adsImage" />
          <div>
            <p>CodeYsf</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
