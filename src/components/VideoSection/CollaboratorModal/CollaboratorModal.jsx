import React, { useState } from "react";
import SearchCollaborator from "./SearchCollaborator";
import "./CollaboratorModal.css";


function CollaboratorModal({ isOpen, onClose, addCollaborator }) {
    // eslint-disable-next-line
  const [newCollaboratorImage, setNewCollaboratorImage] = useState("");

  const handleImageSelection = (selectedImage) => {
    setNewCollaboratorImage(selectedImage);
  };

  const handleAddCollaborator = () => {
   
    // Call the addCollaborator function passed as a prop
    setNewCollaboratorImage(handleImageSelection);

    // Close the modal
    onClose();
  };

  const modalStyle = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  const contentStyle = {
    display: "inline-flex",
    padding: "32px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    borderRadius: "16px",
    background: "#FFF",
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div
        style={{
          ...contentStyle,
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside it
      >
        <div className="pa-ti-cont">
          <text id="title-container">Add New Collaborator</text>
          <text id="title-info-container">
            You can invite Collaborators with email
          </text>
        </div>
        <div className="pa-info-cont">
          <text id="user-info-container">Name or Email</text>
          <SearchCollaborator />
        </div>
        <div className="sub-info">
          <span>This site is protected by reCAPTCHA and the </span>
          <br />
          <a id="link-container" href="/privacy-policy">
            Privacy Policy
          </a>
          <span> and </span>
          <a id="link-container" href="/terms-of-service">
            Terms of Service
          </a>
          <span> apply.</span>
        </div>

        <div className="pa-btn-container">
          <div id="btn-cont" onClick={handleAddCollaborator}>
            <text id="internal-text">Add</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollaboratorModal;
