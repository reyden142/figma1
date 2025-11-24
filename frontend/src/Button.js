import React from 'react';
import './Button.css';

const Button = ({ className }) => {
  return (
    <button className={`button ${className}`}>
      Done
    </button>
  );
};

export default Button;
