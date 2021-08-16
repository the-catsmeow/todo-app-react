import React from 'react';
import PropTypes from 'prop-types';
import classes from './Todo.module.css';
import { todoStatus } from '../../properties/properties';

const Todo = ({
  id,
  status,
  deleteHandler,
  checkboxChangeHandler,
  todoText,
  dateDistance,
}) => {
  console.log(dateDistance);
  return (
    <div className={classes.Todo}>
      <input
        type="checkbox"
        value={''}
        onChange={() => checkboxChangeHandler(id)}
        checked={status === todoStatus.COMPLETED}
      />
      <div className={classes.TodoTextContainer}>
        <p>{todoText}</p>
        <span className={classes.CreatedDistance}>
          Created {dateDistance} ago
        </span>
      </div>

      {status === todoStatus.COMPLETED ? (
        <button
          className={classes.DeleteTodo}
          onClick={() => deleteHandler(id)}
        >
          <span className="material-icons-outlined">delete</span>
        </button>
      ) : null}
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  todoText: PropTypes.string.isRequired,
  dateDistance: PropTypes.string.isRequired,
  checkboxChangeHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func,
};

export default Todo;
