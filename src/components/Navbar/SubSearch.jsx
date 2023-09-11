import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { ReactComponent as SearchLogo } from '../../Assets/VideoSection/Search.svg';
import { ReactComponent as CtrlIcon } from '../../Assets/NavbarAssets/ctrl.svg';
import './SubSearch.css';

const SubSearch = () => {
  return (
    <div className="sub-search-container">
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search for People, tasks, docs"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchLogo />
            </InputAdornment>
          ),
          endAdornment: ( // Add Ctrl icon as the endAdornment
            <InputAdornment position="end">
              <CtrlIcon />
            </InputAdornment>
          ),
          className: "input-field",
        }}
        InputLabelProps={{
          className: "input-field-focus",
        }}
        className="input-field-focus"
      />
    </div>
  );
};

export default SubSearch;
