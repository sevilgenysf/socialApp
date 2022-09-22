import React from "react";
import "./leftbar.css";
import profileImage from "../Images/profile.png";

function Leftbar() {
  return (
    <div className="Leftbar">
      <div className="notificationsContainer">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "-10px",
          }}
        >
          <p>Notification</p>
          <p style={{ color: "#aaa" }}>See all</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${profileImage}`} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: 10,
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post.
          </p>
          <img src={`${profileImage}`} alt="" className="likeImage" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}
        >
          <img src={`${profileImage}`} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: 10,
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}
          >
            Suman started to follow you.
          </p>
          <img src={`${profileImage}`} alt="" className="likeImage" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}
        >
          <img src={`${profileImage}`} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: 10,
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post.
          </p>
          <img src={`${profileImage}`} alt="" className="likeImage" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}
        >
          <img src={`${profileImage}`} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: 10,
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post.
          </p>
          <img src={`${profileImage}`} alt="" className="followingUserName" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}
        >
          <img src={`${profileImage}`} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: 10,
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post.
          </p>
          <img src={`${profileImage}`} alt="" className="likeImage" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}
        >
          <img src={`${profileImage}`} className="notificationImg" alt="" />
          <p
            style={{
              marginLeft: 10,
              color: "#aaa",
              fontSize: 13,
              width: "120px",
              textAlign: "start",
            }}
          >
            Madan like your post.
          </p>
          <img src={`${profileImage}`} alt="" className="followingUserName" />
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
