import React from 'react';
import './Checkbox.css';

const Checkbox = ({ variant }) => {
  return (
    <div className={`checkbox ${variant}`}></div>
  );
};

export default Checkbox;
