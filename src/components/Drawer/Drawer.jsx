import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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
