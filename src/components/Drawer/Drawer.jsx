import React, { useEffect, useRef } from 'react';
import Drawer from '@mui/material/Drawer';

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
          <h2>{title}</h2>
          <img src={img} alt={title} style={{ width: '452px' , height: '334px' }} />
        </div>
        <p>{description}</p>
        <hr />
      </div>
    </Drawer>
  );
}
