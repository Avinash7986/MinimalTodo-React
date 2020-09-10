import React from 'react';

import { FiTrash2 } from 'react-icons/fi';

import './IconsList.css';

const IconsList = ({ id, onDelete }) => {
  return (
    <div className='icon-list'>
      <span className='icon-list-item' onClick={() => onDelete(id)}>
        <FiTrash2 />
      </span>
    </div>
  );
};

export default IconsList;
