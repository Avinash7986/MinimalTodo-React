import React, { useContext } from 'react';

import TodoContext from '../../../context/todoContext';

import './CheckBox.css';

const CheckBox = ({ id, completed }) => {
  const todoContext = useContext(TodoContext);
  const { toggleCompleted } = todoContext;
  return (
    <>
      <label className='checkbox' htmlFor={id}>
        <input
          className='checkbox__input'
          type='checkbox'
          name='myCheckboxName'
          id={id}
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        <span className='checkbox__box'></span>
      </label>
    </>
  );
};

export default CheckBox;
