import React from "react";

import "./right-sidebar.css";
import { ReactComponent as Dashicon } from "../../Assets/SidebarAssets/dash.svg";
import { ReactComponent as Mutemic } from "../../Assets/SidebarAssets/mute-mic.svg";
import { ReactComponent as Search } from "../../Assets/SidebarAssets/search.svg";
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

   
    </div>
  );
}

export default RightSlider;