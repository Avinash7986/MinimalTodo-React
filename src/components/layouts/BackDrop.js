import React from 'react';
import ReactDOM from 'react-dom';

import './BackDrop.css';
import { useContext } from 'react';
import TodoContext from '../../context/todoContext';

const Backdrop = ({ toggle }) => {
  const todoContext = useContext(TodoContext);
  const { clearCurrentTodo } = todoContext;

  const handleToggle = () => {
    clearCurrentTodo();
    toggle();
  };
  return ReactDOM.createPortal(
    <div className='backdrop' onClick={handleToggle}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
