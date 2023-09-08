import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import mic from "../../Assets/NavbarAssets/mic.svg";

const AssistanceTextField = () => {
  const containerStyle = {
    width: '50%', // Set the width of the containing div
  };

  const inputFieldStyle = {
    borderRadius: '36px',
    background: '#f9f9f9',
    border: 'none',
    padding: '10px',
    paddingRight: '20px', // Add right padding for the icon
    width: '80%', // Set the width of the text field to 100%
    height: '40px',
    color: '#818181',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
  };

  const inputFieldFocusStyle = {
    border: 'none',
    outline: 'none',
    display: 'flex', // Center content vertically and horizontally
  alignItems: 'center', // Center content vertically
  justifyContent: 'center',
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
          style: inputFieldStyle, // Apply custom styling
        }}
        InputLabelProps={{
          style: inputFieldFocusStyle, // Apply custom styling when focused
        }}
        style={inputFieldFocusStyle} // Apply custom styling
      />
    </div>
  );
};

export default AssistanceTextField;
