import React, { useRef, useContext, useEffect } from 'react';

import { FiSearch } from 'react-icons/fi';

import './TodoSearch.css';
import TodoContext from '../../context/todoContext';

const TodoSearch = () => {
  const todoContext = useContext(TodoContext);
  const text = useRef('');

  const { filterTodos, clearFilter, filtered } = todoContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterTodos(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div className='todo__search'>
      <span>
        <FiSearch />
      </span>
      <input
        ref={text}
        type='search'
        name='search'
        placeholder='Search your todo...'
        onChange={onChange}
      />
    </div>
  );
};

export default TodoSearch;
