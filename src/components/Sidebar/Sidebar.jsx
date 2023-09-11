import React, { useState } from "react";
import avatar from "../../Assets/SidebarAssets/avatar.svg";
import img1 from "../../Assets/SidebarAssets/icon-1.svg";
import addbtn from "../../Assets/SidebarAssets/add-btn.svg";
import discover from "../../Assets/SidebarAssets/discover.svg";
import folder from "../../Assets/SidebarAssets/folder.svg";
import profile from "../../Assets/SidebarAssets/profile-user.svg";
import wallet from "../../Assets/SidebarAssets/wallet.svg";
import bell from "../../Assets/SidebarAssets/bell.svg";
import setting from "../../Assets/SidebarAssets/setting.svg";
import logout from "../../Assets/SidebarAssets/logout.svg";

import "./Sidebar.css";
import RightSlider from "./Rightsidebar";
function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
     

      <div className= 'Main-sidebar' >
        <div className="parent-side-bar">
          <div className="container-for-imgs">
            <span className="img-prop" onClick={toggleSidebar}>
              <img src={avatar} alt="avatar" />
            </span>
            <span className="img-prop">
              <img src={img1} alt="icon" />
            </span>
            <span className="img-prop">
              <img src={addbtn} alt="add-btn" />
            </span>
          </div>

          <div className="container-for-icons">
            <span className="img-prop">
              <span className="drop-icon">
                <img src={discover} alt="avatar" />
              </span>
            </span>
            <span className="img-prop">
              <img src={folder} alt="icon" />
            </span>
            <span className="img-prop">
              <img src={profile} alt="add-btn" />
            </span>
            <span className="img-prop">
              <img src={wallet} alt="add-btn" />
            </span>
            <span className="img-prop">
              <img src={bell} alt="add-btn" />
            </span>
            <span className="img-prop">
              <img src={setting} alt="add-btn" />
            </span>
          </div>

          <div className="logout-container">
            <div id="logout-btn" className="img-prop">
              <img src={logout} alt="avatar" />
            </div>
          </div>
        </div>

        <div
          className={`right-slider-container ${
            isSidebarOpen ? "open" : "closed"
          }`}
        >
          <RightSlider isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
