import React, { useContext, useEffect } from 'react';
import { FaRegFolderOpen } from 'react-icons/fa';
import TodoContext from '../../context/todoContext';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ toggle }) => {
  const todoContext = useContext(TodoContext);
  const { todos, filtered } = todoContext;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  if (todos.length === 0)
    return (
      <div className='empty__todo'>
        <span>
          <FaRegFolderOpen />
        </span>
        <h2>No Todos</h2>
      </div>
    );

  if (filtered !== null && filtered.length === 0) {
    return <h1 className='text-center'>No todos found</h1>;
  }

  return (
    <div>
      {filtered !== null && filtered.length > 0
        ? filtered.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggle={toggle} />
          ))
        : todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggle={toggle} />
          ))}
    </div>
  );
};

export default TodoList;
