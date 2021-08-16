import React from 'react';
import PropTypes from 'prop-types';

import classes from './DeleteAllTodos.module.css';

const DeleteAllTodos = ({ clickHandler }) => {
  return (
    <button className={classes.DeleteTodoButton} onClick={clickHandler}>
      <span className="material-icons-outlined">delete</span>delete all
    </button>
  );
};

DeleteAllTodos.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default DeleteAllTodos;
