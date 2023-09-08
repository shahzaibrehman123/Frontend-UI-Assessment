import React from "react";
import aiavatar from "../../Assets/NavbarAssets/ai-avatar.svg";
import mic from "../../Assets/NavbarAssets/mic.svg";
import "./Navbar.css";

import { ReactComponent as User1} from"../../Assets/NavbarAssets/users/user1.svg"
function Navbar() {
  return (
    <div className="parent-div">
      
        <div className="img-name-container">
          <img
            style={{ borderRadius: `100px`, justifyContent: "center" }}
            src={aiavatar}
            alt={aiavatar}
          />
          <div className="text-container">
            <text className="hi-container">Hi,</text>
            <text className="name-container">John</text>
          </div>
        </div>

        <div className="assist-container">
          <div className="input-wrapper">
            <input
              className="input-field"
              type="text"
              placeholder="Need any Assistance?"
            />
            <span className="input-icon">
              <img  className="my-img" src={mic} alt={mic} />
            </span>
          </div>
          
        </div>

        <div className="collaborators">
      <text>Collaboraters(10)</text>
      </div>
      
    </div>
  )
}

export default Navbar;
