import React from "react";
import SearchCollaborator from "./SearchCollaborator";
import "./CollaboratorModal.css";

function CollaboratorModal({ isOpen, onClose, addCollaborator }) {

  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="title-container">
          <span className="title">Add New Collaborator</span>
          <span className="title-info">
            You can invite Collaborators with email
          </span>
        </div>
        <div className="info-container">
          <span className="user-info">Name or Email</span>
        </div>
        <SearchCollaborator/>
        <div className="sub-info">
          <div className="sub-info-text">
            This site is protected by reCAPTCHA and the<br/>{" "}
            <a href="/privacy-policy" className="link">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="link">
              Terms of Service
            </a>{" "}
            apply.
          </div>
        </div>
        <div className="btn-container-add">
          <span className="internal-text" onClick={onClose}>Add</span>
        </div>
      </div>
    </div>
  );
}

export default CollaboratorModal;
