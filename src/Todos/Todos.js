import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { formatDistance, parseISO } from 'date-fns';

import classes from './Todos.module.css';
import Todo from './Todo/Todo';
import AddTodo from './AddTodo/AddTodo';
import DeleteAllTodos from './DeleteAllTodos/DeleteAllTodos';
import { filterState, todoStatus } from '../properties/properties';

const Todos = ({ filter, todoList, setTodoList }) => {
  const addTodoHandler = (text) => {
    let updatedTodoList = [...todoList];
    updatedTodoList.push({
      id: uuidv4(),
      text: text,
      status: todoStatus.ACTIVE,
      created: new Date().toISOString(),
    });

    setTodoList(updatedTodoList);
  };

  const deleteHandler = (id) => {
    let updatedTodoList = [...todoList];
    let deletedTodoIndex = updatedTodoList.indexOf(
      todoList.find((todo) => todo.id === id)
    );
    updatedTodoList.splice(deletedTodoIndex, 1);

    setTodoList(updatedTodoList);
  };

  const checkboxChangeHandler = (id) => {
    let updatedTodoList = [...todoList];
    let changedTodoIndex = updatedTodoList.indexOf(
      todoList.find((todo) => todo.id === id)
    );

    if (updatedTodoList[changedTodoIndex].status === todoStatus.ACTIVE) {
      updatedTodoList[changedTodoIndex].status = todoStatus.COMPLETED;
    } else {
      updatedTodoList[changedTodoIndex].status = todoStatus.ACTIVE;
    }
    setTodoList(updatedTodoList);
  };

  const deleteAllCompletedTodosHandler = () => {
    let updatedTodoList = todoList.filter(
      (todo) => todo.status !== todoStatus.COMPLETED
    );

    setTodoList(updatedTodoList);
  };

  const filterTodos = (todo) => {
    if (filter === filterState.ALL) {
      return true;
    } else {
      return todo.status === filter;
    }
  };

  return (
    <div className={classes.TodoSection}>
      <AddTodo addTodoHandler={addTodoHandler} />
      <div className={classes.TodoList}>
        {todoList.filter(filterTodos).map((todo) => {
          console.log(todo.created.toString());
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              todoText={todo.text}
              dateDistance={formatDistance(parseISO(todo.created), new Date())}
              status={todo.status}
              checkboxChangeHandler={checkboxChangeHandler}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
      {filter === filterState.COMPLETED ? (
        <DeleteAllTodos clickHandler={deleteAllCompletedTodosHandler} />
      ) : null}
    </div>
  );
};

Todos.propTypes = {
  setTodoList: PropTypes.func,
  todoList: PropTypes.array,
};

export default Todos;
