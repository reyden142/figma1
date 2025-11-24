import React from 'react';
import Checkbox from './Checkbox';
import './HomeItem.css';

const HomeItem = ({ text, checkboxVariant }) => {
  return (
    <div className="home-item">
      <span className="home-item-text">{text}</span>
      <Checkbox variant={checkboxVariant} />
    </div>
  );
};

export default HomeItem;
