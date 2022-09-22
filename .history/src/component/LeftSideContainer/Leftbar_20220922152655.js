import React from "react";
import "./leftbar.css";

function Leftbar() {
  return (
    <div className="Leftbar">
      <div className="notificationsContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Notification</p>
          <p style={{ color: "#aaa" }}>See all</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Madan</p>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
