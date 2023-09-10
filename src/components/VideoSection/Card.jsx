// Card.js
import { ReactComponent as Threedots } from '../../Assets/CardAssets/threedots.svg';
import React, { useState } from 'react';
import TemporaryDrawer from '../Drawer/Drawer'
import './Card.css';

const Card = ({ title, description, img }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={handleCardClick}>
      <img src={img} alt="Card Image" />
      <div className='Card-inner'>
      <TemporaryDrawer isopen={isSelected} onClose={handleCloseDrawer} title={title} img={img} description={description} />
        <div className="info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='dot'>
          <Threedots />
        </div>
      </div>
    </div>
  );
};

export default Card;
