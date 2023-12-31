import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SubSearch = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '90%',
  };

  const inputFieldStyle = {
    borderRadius: '36px',
    background: '#f9f9f9',
    height: '40px',
    color: '#818181',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 400,
  };

  const inputFieldFocusStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search for Collaborators"
        InputProps={{
          endAdornment: ( // Add Ctrl icon as the endAdornment
            <InputAdornment position="end">
              <KeyboardArrowDownIcon />
            </InputAdornment>
          ),
          style: inputFieldStyle,
        }}
        InputLabelProps={{
          style: inputFieldFocusStyle,
        }}
        style={inputFieldFocusStyle}
      />
    </div>
  );
};

export default SubSearch;
