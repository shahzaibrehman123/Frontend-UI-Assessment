import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import email from '../../../Assets/VideoSection/CollaboratorModal/email.svg';

const SearchCollaborator = () => {
  const containerStyle = {
    width: '381px', // Set the width of the containing div
  };

  const inputFieldStyle = {
    borderRadius: '36px',
    background: 'transparent', // Make the background transparent
    padding: '10px',
    paddingRight: '40px',
    width: '100%',
    height: '40px',
    color: '#222',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  };

  const inputFieldFocusStyle = {
    marginLeft: '40px',
    border: 'none',
    outline: 'none',
    display: 'flex',
    alignItems: 'flex-start',
  };

  const emailImageStyle = {
    position: 'initial',
    left: '10px', // Adjust the left position as needed
    top: '50%', // Center vertically
    transform: 'translateY(-50%)',
  };

  return (
    <div style={containerStyle}>
      <TextField
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" style={emailImageStyle}>
              <img src={email} alt="" />
            </InputAdornment>
          ),
          style: inputFieldStyle, // Apply custom styling
        }}
        InputLabelProps={{
          style: inputFieldFocusStyle, // Apply custom styling when focused
        }}
        placeholder="e.g John, john@gmail.com" // Move the placeholder here
      />
    </div>
  );
};

export default SearchCollaborator;
