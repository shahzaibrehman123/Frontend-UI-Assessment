import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search'; // Import the search icon
import {ReactComponent as Searchlogo} from '../../Assets/VideoSection/Search.svg'

const Search = () => {
  const containerStyle = {
    width: '20%',

  };

  const inputFieldStyle = {
    borderRadius: '36px',
    background: '#f9f9f9',
    height: '40px',
    color: '#818181',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 600,
  };

  const inputFieldFocusStyle = {
    display: 'flex', // Center content vertically and horizontally
    alignItems: 'center', // Center content vertically
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search for Project"
        InputProps={{
          startAdornment: ( // Add search icon as the startAdornment
            <InputAdornment position="start">
              <Searchlogo />
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

export default Search;
