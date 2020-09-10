import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_CURRENT_TODO,
  CLEAR_CURRENT_TODO,
  TOGGLE_COMPLETED,
  CLEAR_FILTER,
  FILTER_TODOS,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case SET_CURRENT_TODO:
      return {
        ...state,
        currentTodo: action.payload,
      };

    case CLEAR_CURRENT_TODO:
      return {
        ...state,
        currentTodo: null,
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case FILTER_TODOS:
      return {
        ...state,
        filtered: state.todos.filter((todo) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return todo.title.match(regex) || todo.description.match(regex);
        }),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
