import React from "react";
import "./leftbar.css";
import profileImage from "../Images/profile.png";
import imageOne from "../Images/image1.jpg";
import imageTwo from "../Images/image2.jpg";
import imageThree from "../Images/image3.jpg";
import imageFour from "../Images/image4.jpg";

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
          <p style={{ marginLeft: "-14px" }}>Notification</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
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
      <div className="notificationsContainer">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "-10px",
          }}
        >
          <p style={{ marginLeft: "-20px" }}>Explore</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>

        <div>
          <img src={`${profileImage}`} alt="" className="exploreImage" />
          <img src={`${profileImage}`} alt="" className="exploreImage" />
          <img src={`${profileImage}`} alt="" className="exploreImage" />
          <img src={`${profileImage}`} alt="" className="exploreImage" />
          <img src={`${profileImage}`} alt="" className="exploreImage" />
          <img src={`${profileImage}`} alt="" className="exploreImage" />
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
