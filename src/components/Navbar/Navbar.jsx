import React from "react";
import aiavatar from "../../Assets/NavbarAssets/ai-avatar.svg";
import AssistanceTextField from "./AssistanceTextField";
import VideoSection from "../VideoSection/VideoSection"
import "./Navbar.css";

function Navbar() {
  return (
    <div className="parent-div">
      <div className="nav-container">
      <div className="child-1-container">
        <div className="img-name-container">
          <img
            style={{
              borderRadius: `100px`,
              justifyContent: "center",
              height: "40px",
            }}
            src={aiavatar}
            alt={aiavatar}
          />
          <div className="text-container">
            <text className="hi-container">Hi,</text>
            <text className="name-container">John</text>
          </div>
        </div>
        <AssistanceTextField />
      </div>
      <div className="child-2-container">
        <div className="collaborators">
          <text className="colab-head">Collaboraters(10):</text>
        </div>

        <div className="user-info">
          <div className="text-info-holder">
            <div className="user-name">Marvin McKinney</div>
            <div className="user-email">marving@gmail.com</div>
          </div>

          <div className="user-avatar"></div>
        </div>
      </div>
      </div>
      <VideoSection/>
    </div>
    
  );
}

export default Navbar;
