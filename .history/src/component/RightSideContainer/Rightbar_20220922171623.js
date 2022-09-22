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
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: "0px",
              }}
            >
              CodeYsf
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "12px",
                marginTop: "-20px",
              }}
            >
              Buy support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
