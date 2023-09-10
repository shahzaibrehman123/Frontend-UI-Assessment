import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import mic from "../../Assets/NavbarAssets/mic.svg";
import SubSearch from "./SubSearch";
import cancelIcon from "../../Assets/NavbarAssets/cancel.svg";

const AssistanceTextField = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const containerStyle = {
    position: "relative",
    width: "50%",
  };

  const inputFieldStyle = {
    borderRadius: "36px",
    background: "#f9f9f9",
    border: "none",
    padding: "10px",
    paddingRight: "20px",
    width: "100%",
    height: "40px",
    color: "#818181",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    height: "auto",
    background: "#fff",
    borderRadius: "16px",
    border: "1px solid #ccc",
    display: isDropdownOpen ? "block" : "none",
    flexShrink: 0,
  };

  const dropdownOptionStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10px",
  };

  const ButtonStyle = {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  };

  const dropdown3styles = {
    display: "flex",
    padding: "8px 12px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "31px",
    border: "1px solid #f9f9f9",
    background: "#f9f9f9",
    cursor: "pointer",
  };

  const dropdownOption2Style = {
    padding: "8px 16px",
    color: "#888", // Add color property
    fontFamily: "Poppins", // Add fontFamily property
    fontSize: "12px", // Add fontSize property
    fontStyle: "normal", // Add fontStyle property
    fontWeight: 400, // Add fontWeight property
    lineHeight: "normal", // Add lineHeight property
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={containerStyle}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Need any Assistance?"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img src={mic} alt="" />
            </InputAdornment>
          ),
          style: inputFieldStyle,
          onClick: handleDropdownToggle,
        }}
        InputLabelProps={{
          style: inputFieldStyle,
        }}
        style={inputFieldStyle}
      />
      <div style={dropdownStyle}>
        {isDropdownOpen && (
          <div>
            <div style={dropdownOptionStyle}>
              <SubSearch />
            </div>
            <div style={dropdownOption2Style}>I'm looking for</div>
            <div style={ButtonStyle}>
              <div style={dropdown3styles}>
                Collaborator
                <img src={cancelIcon} alt="cnl" />
              </div>
              <div style={dropdown3styles}>
                Videos 
                <img src={cancelIcon} alt="cnl" />
              </div>
              
            </div>
            <div style={dropdownOption2Style}>Last Search</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssistanceTextField;
