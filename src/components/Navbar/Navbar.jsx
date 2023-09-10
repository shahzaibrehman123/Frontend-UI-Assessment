import React from "react";
import aiavatar from "../../Assets/NavbarAssets/ai-avatar.svg";
import AssistanceTextField from "./AssistanceTextField";
import VideoSection from "../VideoSection/VideoSection";
import u1 from "../../Assets/NavbarAssets/users/u1.svg"
import u2 from "../../Assets/NavbarAssets/users/u2.svg"
import u3 from "../../Assets/NavbarAssets/users/u3.svg"
import u4 from "../../Assets/NavbarAssets/users/u4.svg"
import u5 from "../../Assets/NavbarAssets/users/u5.svg"
import u6 from "../../Assets/NavbarAssets/users/u6.svg"
import u7 from "../../Assets/NavbarAssets/users/u7.svg"
import u8 from "../../Assets/NavbarAssets/users/u8.svg"
import u9 from "../../Assets/NavbarAssets/users/u9.svg"
import u10 from "../../Assets/NavbarAssets/users/u10.svg"
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
            <div className="colab-head">Collaboraters(10):</div>
            <div class="img-area">
              <img src={u1} alt="Avatar" class="avatar" />
              <img src={u2} alt="Avatar" class="avatar" />
              <img src={u3} alt="Avatar" class="avatar" />
              <img src={u4} alt="Avatar" class="avatar" />
              <img src={u5} alt="Avatar" class="avatar" />
              <img src={u6} alt="Avatar" class="avatar" />
              <img src={u7} alt="Avatar" class="avatar" />
              <img src={u8} alt="Avatar" class="avatar" />
              <img src={u9} alt="Avatar" class="avatar" />
              <img src={u10} alt="Avatar" class="avatar" />
            </div>
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
      <VideoSection />
    </div>
  );
}

export default Navbar;
