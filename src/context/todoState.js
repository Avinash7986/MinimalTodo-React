import React, { useReducer } from 'react';
import todoContext from './todoContext';
import todoReducer from './todoReducer';
import {
  ADD_TODO,
  CLEAR_CURRENT_TODO,
  CLEAR_FILTER,
  DELETE_TODO,
  FILTER_TODOS,
  SET_CURRENT_TODO,
  TOGGLE_COMPLETED,
  UPDATE_TODO,
} from './types';

const TodoState = ({ children }) => {
  const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [
      {
        id: new Date().getTime(),
        title: 'Meet developers at github',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat voluptates expedita laborum sit nulla corporis dolorum perferendis quos deleniti voluptate.',
        completed: false,
      },
    ],
    currentTodo: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Add Todo
  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  // Update Todo
  const updateTodo = (todo) => {
    dispatch({ type: UPDATE_TODO, payload: todo });
  };

  // Delete Todo
  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  // Set Current Todo
  const setCurrentTodo = (todo) => {
    dispatch({ type: SET_CURRENT_TODO, payload: todo });
  };

  // Clear Current Todo
  const clearCurrentTodo = () => {
    dispatch({ type: CLEAR_CURRENT_TODO });
  };

  // Toggle Completed
  const toggleCompleted = (id) => {
    dispatch({ type: TOGGLE_COMPLETED, payload: id });
  };

  // Search Todo
  const filterTodos = (text) => {
    dispatch({ type: FILTER_TODOS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        currentTodo: state.currentTodo,
        filtered: state.filtered,
        addTodo,
        updateTodo,
        deleteTodo,
        setCurrentTodo,
        clearCurrentTodo,
        toggleCompleted,
        filterTodos,
        clearFilter,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoState;
