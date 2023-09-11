import React from 'react';
import './SearchCollaborator.css'; // Import your CSS styles
import EmailLogo from '../../../Assets/VideoSection/CollaboratorModal/email.svg';

const SearchCollaborator = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input-modal"
        placeholder="e.g John, john@gmail.com"
      />
      <img src={EmailLogo} alt="Email Icon" className="email-icon" />
    </div>
  );
};

export default SearchCollaborator;
