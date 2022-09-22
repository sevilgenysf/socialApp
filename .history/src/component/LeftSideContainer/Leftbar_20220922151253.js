import React from "react";
import "./leftbar.css";

function Leftbar() {
  return (
    <div className="Leftbar">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>Notification</p>
        <p>See all</p>
      </div>
    </div>
  );
}

export default Leftbar;
