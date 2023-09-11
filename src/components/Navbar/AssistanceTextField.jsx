import React, { useState, useRef, useEffect } from "react";
import mic from "../../Assets/NavbarAssets/mic.svg";
import SubSearch from "./SubSearch";
import cancelIcon from "../../Assets/NavbarAssets/cancel.svg";
import guyIcon from "../../Assets/NavbarAssets/guy.svg";
import robIcon from "../../Assets/NavbarAssets/rob.svg";
import hannaIcon from "../../Assets/NavbarAssets/hanna.svg";
import addIcon from "../../Assets/NavbarAssets/add-tooltip.svg";
import moveIcon from "../../Assets/NavbarAssets/move.svg";
import "./AssistanceTextField.css";

const AssistanceTextField = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click occurred outside of the dropdown, so close it.
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Attach the click event listener when the component mounts.
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts.
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`container ${isDropdownOpen ? "open" : ""}`} ref={dropdownRef}>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Need any Assistance?"
          onClick={handleDropdownToggle}
        />
        <img className="mic-icon" src={mic} alt="Mic" />
        
      </div>
      <div className="dropdown">
        {isDropdownOpen && (
          <div>
            <div className="dropdown-option">
              <SubSearch />
            </div>
            <div className="dropdown-option2">I'm looking for</div>
            <div className="button-container">
              <div className="dropdown3">
                Collaborator
                <img src={cancelIcon} alt="cnl" />
              </div>
              <div className="dropdown3">
                Videos
                <img src={cancelIcon} alt="cnl" />
              </div>
            </div>
            <div className="dropdown-option2">Last Search 3</div>
            <div>
            <div className="srh-content-container">
              <img className="srh-img" src={guyIcon} alt="cnl" />
              <span className="srh-name">Guy Hawkins</span>
              <span className="srh-email">guy@icloud.com</span>
            </div>
            <div className="srh-content-container">
              <img className="srh-img" src={robIcon} alt="cnl" />
              <span className="srh-name">Rob Miller</span>
              <span className="srh-email">rob@icloud.com</span>
            </div>
            <div className="srh-content-container">
              <img className="srh-img" src={hannaIcon} alt="cnl" />
              <span className="srh-name">Hanna</span>
              <span className="srh-email">hanna@icloud.com</span>
            </div>
            </div>
            <div className="dropdown-option2">Quick Actions</div>
            <div>
            <div className="srh-action-container">
              <img className="srh-img" src={addIcon} alt="cnl" />
              <span className="srh-action-name">Create new Video</span>
              <span className="srh-action-abr">N</span>
            </div>
            <div className="srh-action-container">
              <img className="srh-img" src={addIcon} alt="cnl" />
              <span className="srh-action-name">Add Collaborator</span>
              <span className="srh-action-abr">A</span>
            </div>
            <div className="srh-action-container">
              <img className="srh-img" src={moveIcon} alt="cnl" />
              <span className="srh-action-name">Move File</span>
              <span className="srh-action-abr" style={{marginLeft:"49%"}}>M</span>
            </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistanceTextField;
