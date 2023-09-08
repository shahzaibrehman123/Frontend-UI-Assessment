import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Divider } from '@mui/material';
import './Leftslider.css';

function LeftSidebar() {
  const options = [
    {
      heading: 'Overview',
      items: [
        { text: 'Recent Videos', icon: 'video_library' },
        { text: 'Projects', icon: 'folder' },
        { text: 'Collaborators', icon: 'group' },
      ],
    },
    {
      heading: 'General',
      items: [
        { text: 'Payment', icon: 'payment' },
        { text: 'Messages', icon: 'message' },
        { text: 'News', icon: 'article' },
        { text: 'Notifications', icon: 'notifications' },
        { text: 'Theme', icon: 'palette' },
      ],
    },
  ];

  return (
    <div className="left-sidebar">
      {options.map((option, index) => (
        <div key={index}>
          <Typography variant="h6" color="primary">
            {option.heading}
          </Typography>
          <List>
            {option.items.map((item, itemIndex) => (
              <ListItem key={itemIndex} button>
                <ListItemIcon>
                  <i className="material-icons">{item.icon}</i>
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          {index < options.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
}

export default LeftSidebar;
