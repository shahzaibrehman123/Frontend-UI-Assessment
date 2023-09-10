import { Margin } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';

function CurrentDate({ onUpdateDate }) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);
    setCurrentDate(formattedDate);
    onUpdateDate(formattedDate); // Call the callback to update the parent's state
  }, [onUpdateDate]);

  return (
    <div style={{width:'max-content'}}>
      {currentDate}
    </div>
  );
}

export default CurrentDate;
