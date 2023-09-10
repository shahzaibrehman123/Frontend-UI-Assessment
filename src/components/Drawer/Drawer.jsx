import React, { useEffect, useRef } from 'react';
import {ReactComponent as Eclipse}from "../../Assets/DrawerAssets/Eclipse.svg"
import {ReactComponent as Dots}from "../../Assets/DrawerAssets/Dots-vertical.svg"
import Drawer from '@mui/material/Drawer';
import "./Drawer.css"
import SearchDrawer from './SearchDrawer'
import u1 from "../../Assets/NavbarAssets/users/u1.svg";
import u2 from "../../Assets/NavbarAssets/users/u2.svg";
export default function TemporaryDrawer({ isopen, onClose, title, img, description }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      // Check if the click occurred outside the drawer
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        onClose();
      }
    };

    // Add a click event listener to the document
    if (isopen) {
      document.addEventListener('click', handleDocumentClick);
    }

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isopen, onClose]);

  return (
    <Drawer
      anchor="right"
      open={isopen}
      onClose={onClose}
      ref={drawerRef}
      style={{ width: '516px', height: '1166px' }}
    >
      <div style={{ padding: '16px' }}>
        <div className="drawer-header">

          <div className="upper-title">
            <p>
            Recent Video
            </p>
            <Dots/>
          </div>
      <div className="eclipse">
      <Eclipse/>
      <div className ="card-data">
        <h2 className= "des">{title}</h2>
          <p  className= "des">{description}</p>
        </div>
      </div>
       
          <img src={img} alt={title} style={{ width: '400px' , height: '400px' }} />
        </div>
        <div className="drawer-collaborators">
            <div className="colab-head">Collaborators(2):</div>
            <div className="img-area">
              <img src={u1} alt="Avatar" className="avatar" />
              <img src={u2} alt="Avatar" className="avatar" />
            </div>
            <div>
              <div id="add-new-container">+ Add new</div>
            </div>
          </div>
          <div className="drawer-collaborators">
            <div className="colab-head">Timeline :</div>
           <p className="date"> Feb 2, 2023 - Feb 20, 2023</p>
           
          </div>
       
          <div className="drawer-collaborators">
            <div className="colab-head">Status :</div>
            <button className = "btn-style">
              In Progress
            </button>
          </div>

          <p className="add-collab des"> Add Collaborator</p>
          <p className="task des">Assign these tasks to some other user.</p>
       
        <p className="select"> Select Users</p>
        <SearchDrawer/>
    
      </div>
    </Drawer>
  );
}