import React, { useContext, useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import TodoContext from '../../context/todoContext';
import './ModalForm.css';
import Button from './UIElement/Button';
import Input from './UIElement/Input';

const ModalForm = ({ toggle }) => {
  const todoContext = useContext(TodoContext);
  const { addTodo, currentTodo, clearCurrentTodo, updateTodo } = todoContext;
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    completed: false,
  });

  useEffect(() => {
    if (currentTodo) {
      setTodo(currentTodo);
    } else {
      setTodo({
        title: '',
        description: '',
        completed: false,
      });
    }
  }, [todoContext, currentTodo]);

  const handleToggle = () => {
    clearCurrentTodo();
    toggle();
  };

  const handleChange = (e) =>
    setTodo({ ...todo, [e.target.name]: e.target.value });

  const handleUpdate = () => {
    if (currentTodo) {
      updateTodo(todo);
    } else if (todo.title !== '' && todo.description !== '') {
      const newTodo = {
        id: new Date().getTime(),
        title: todo.title,
        description: todo.description,
        completed: false,
      };

      addTodo(newTodo);
    }

    handleToggle();
  };

  const content = (
    <div className='modal__wrapper'>
      <div className='modal__content'>
        <div className='modal__header'>
          <h2>Update Todo</h2>
          <div className='close__btn' onClick={handleToggle}>
            x
          </div>
        </div>
        <div className='modal__body'>
          <Input
            label='Title'
            name='title'
            autoFocus
            onChange={handleChange}
            value={todo.title}
          />
          <Input
            element='textarea'
            label='Description'
            placeholder='Enter some description'
            name='description'
            value={todo.description}
            onChange={handleChange}
          />
        </div>
        <div className='modal__footer'>
          <Button classNames='outline' onClick={handleToggle}>
            Cancel
          </Button>
          <Button onClick={handleUpdate}>
            {currentTodo ? 'Update' : 'Add'}
          </Button>
        </div>
      </div>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById('modal-hook'));
};

export default ModalForm;
