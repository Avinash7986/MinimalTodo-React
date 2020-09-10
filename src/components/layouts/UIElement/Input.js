import React from 'react';

import './Input.css';

// const Input1 = ({ label, type, name, myRef, error, ...props }) => {
//   return (
//     <div className='form-group'>
//       <label htmlFor={name}>{label}</label>
//       <input
//         type={type ? type : 'text'}
//         name={name}
//         id={name}
//         ref={myRef}
//         className={`form-control ${error ? 'error' : ''}`}
//         {...props}
//       />

//       {error && <p className='error-message'>{error.message}</p>}
//     </div>
//   );
// };

const Input = ({
  element,
  label,
  type,
  name,
  placeholder,
  rows,
  autoFocus,
  myRef,
  error,
  ...props
}) => {
  const elementType =
    element === 'textarea' ? (
      <textarea
        autoFocus={autoFocus}
        id={name}
        name={name}
        rows={rows || 3}
        placeholder={placeholder}
        ref={myRef}
        className={`form-control textarea ${error ? 'error' : ''}`}
        {...props}
      />
    ) : (
      <input
        autoFocus={autoFocus}
        type={type || 'text'}
        id={name}
        name={name}
        placeholder={placeholder}
        ref={myRef}
        className={`form-control ${error ? 'error' : ''}`}
        {...props}
      />
    );

  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      {elementType}
      {error && <p className='error-message'>{error.message}</p>}
    </div>
  );
};

export default Input;
