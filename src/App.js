import React, { useState } from 'react';
import TodoState from './context/todoState';
import TodoList from './components/todo/TodoList';
import Backdrop from './components/layouts/BackDrop';
import ModalForm from './components/layouts/ModalForm';
import TodoSearch from './components/todo/TodoSearch';
import Button from './components/layouts/UIElement/Button';

const App = () => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };
  return (
    <TodoState>
      <div className='container'>
        {open && <Backdrop toggle={toggleModal} />}
        {open && <ModalForm toggle={toggleModal} />}

        <div className='todo__wrapper'>
          <div className='content__area'>
            <Button onClick={toggleModal}>Add Task</Button>
            <TodoSearch />
          </div>

          <TodoList toggle={toggleModal} />
        </div>
      </div>
    </TodoState>
  );
};

export default App;
