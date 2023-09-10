import React from "react";

import "./right-sidebar.css";
import { ReactComponent as Dashicon } from "../../Assets/SidebarAssets/dash.svg";
import { ReactComponent as Mutemic } from "../../Assets/SidebarAssets/mute-mic.svg";
import { ReactComponent as Search } from "../../Assets/SidebarAssets/search.svg";
import recent from "../../Assets/SidebarAssets/Rightsidebar/recent.svg";
import project from "../../Assets/SidebarAssets/Rightsidebar/projects.svg";
import collaborators from "../../Assets/SidebarAssets/Rightsidebar/collaborators.svg";
import addbtn from "../../Assets/SidebarAssets/add-btn.svg";
import line from "../../Assets/SidebarAssets/Rightsidebar/line.svg";
import wallet from "../../Assets/SidebarAssets/Rightsidebar/wallet.svg";
import message from "../../Assets/SidebarAssets/Rightsidebar/message.svg";
import news from "../../Assets/SidebarAssets/Rightsidebar/new.svg";
import avatar from "../../Assets/SidebarAssets/Rightsidebar/avatar.svg";
import notification from "../../Assets/SidebarAssets/Rightsidebar/notification.svg";
import theme from "../../Assets/SidebarAssets/Rightsidebar/theme.svg";
import switcher from "../../Assets/SidebarAssets/Rightsidebar/switch.svg";

function RightSlider({ isSidebarOpen }) {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="main-icon-area">
        <div className="toggle-button">
          <Dashicon />
        </div>

        <div className="Searchmic">
          <Search />
          <Mutemic />
        </div>
      </div>
      <div className="overview-container">
        <div className="ov-container">Overview</div>
        <div className="overview-content-container">
          <div className="ov-opt">
            <div className="recent-container">
              <img src={recent} alt="icon"></img>
              <div id="re-text">Recent Videos</div>
            </div>
          </div>
          <div className="ov-opt">
            <div className="recent-container">
              <img src={project} alt="icon"></img>
              <div id="re-text">Projects</div>
            </div>
          </div>
          <div className="ov-opt">
            <div className="recent-container">
              <img src={collaborators} alt="icon"></img>
              <div id="re-text">Collaborators</div>
              <span className="img-prop">
                <img
                  style={{ width: "24px", height: "24px", marginLeft: "65px" }}
                  src={addbtn}
                  alt="add-btn"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="line-container">
          <img src={line} alt="line"></img>
        </div>
      </div>
      <div className="general-container">
        <div className="ov-container">General</div>
        <div className="general-content-container">
          <div className="ov-opt">
            <div className="recent-container">
              <img src={wallet} alt="icon"></img>
              <div id="re-text">Payment</div>
            </div>
          </div>
          <div className="ov-opt">
            <div className="recent-container">
              <img src={message} alt="icon"></img>
              <div id="re-text">Messages</div>
              <span className="img-prop">
                <img
                  style={{ width: "38px", height: "38px", marginLeft: "65px" }}
                  src={avatar}
                  alt="add-btn"
                />
              </span>
            </div>
          </div>
          <div className="ov-opt">
            <div className="recent-container">
              <img src={news} alt="icon"></img>
              <div id="re-text">News</div>
            </div>
          </div>
        </div>
        <div className="line-container">
          <img src={line} alt="line"></img>
        </div>
      </div>
      <div className="lower-container">
        <div className="ov-opt">
          <div className="recent-container">
            <img src={notification} alt="icon"></img>
            <div id="re-text">Notification</div>
          </div>
        </div>
        <div className="ov-opt">
          <div className="recent-container">
            <img src={theme} alt="icon"></img>
            <div id="re-text">Theme</div>
            <span className="img-prop">
              <img
                style={{ width: "54px", height: "28px", marginLeft: "65px" }}
                src={switcher}
                alt="add-btn"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSlider;
