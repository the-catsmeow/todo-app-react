import React, { useState } from 'react';
import classes from './AddTodo.module.css';

const AddTodo = ({ addTodoHandler }) => {
  const [todoText, setTodoText] = useState('');

  const onChangeHandler = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div className={classes.AddTodoContainer}>
      <input
        className={classes.TodoTextfield}
        type="text"
        placeholder="add new todo..."
        value={todoText}
        onChange={(e) => onChangeHandler(e)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') addTodoHandler(todoText);
        }}
      />
      <button
        className={classes.AddButton}
        onClick={() => addTodoHandler(todoText)}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
