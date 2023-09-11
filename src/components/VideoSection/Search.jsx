import React from 'react';
import './Search.css'; // Import your CSS styles
import Searchlogo from '../../Assets/VideoSection/Search.svg';

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for Project"
      />
      <img src={Searchlogo} alt="Search Icon" className="search-icon" />
    </div>
  );
};

export default Search;
