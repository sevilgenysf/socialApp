import React from "react";
import "./leftbar.css";
import profileImage from "../Images/profile.png";

function Leftbar() {
  return (
    <div className="Leftbar">
      <div className="notificationsContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Notification</p>
          <p style={{ color: "#aaa" }}>See all</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${profileImage}`} className="notificationImg" alt="" />
          <p style={{ marginLeft: 10, color: "#aaa", fontSize: 15 }}>
            Madan like your post.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
