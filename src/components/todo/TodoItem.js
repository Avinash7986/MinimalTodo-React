import React, { useContext } from 'react';
import TodoContext from '../../context/todoContext';
import IconsList from '../layouts/IconsList';
import CheckBox from '../layouts/UIElement/CheckBox';
import './TodoItem.css';

const TodoItem = ({ todo, toggle }) => {
  const todoContext = useContext(TodoContext);

  const { setCurrentTodo, deleteTodo, clearCurrentTodo } = todoContext;

  const handleDelete = (id) => {
    deleteTodo(id);
    clearCurrentTodo();
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
    toggle();
  };

  return (
    <div>
      <li className='todo-list-item'>
        <div className='todo-title-wrapper'>
          <div className='title-wrapper-left'>
            <CheckBox id={todo.id} completed={todo.completed} />
            <h6
              className={`todo-title ${todo.completed ? 'text-cut' : ''}`}
              onClick={() => handleEdit(todo)}
            >
              {todo.title}
            </h6>
          </div>

          <div className='title-wrapper-right'>
            <IconsList id={todo.id} onDelete={handleDelete} />
          </div>
        </div>
        <p
          className={`title-desc truncate ${todo.completed ? 'text-cut' : ''}`}
        >
          {todo.description}
        </p>
      </li>
    </div>
  );
};

export default TodoItem;
