import React from 'react';

import './Button.css';

const Button = ({ classNames, type, onClick, disabled, children }) => {
  return (
    <button
      className={`btn ${classNames}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
