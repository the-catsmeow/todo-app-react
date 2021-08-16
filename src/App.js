import React, { useState, useEffect } from 'react';

import classes from './App.module.css';
import FilterBar from './FilterBar/FilterBar';
import Todos from './Todos/Todos';
import { filterState } from './properties/properties';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState(filterState.ALL);

  useEffect(() => {
    if (!!localStorage.getItem('todos'))
      setTodoList(JSON.parse(localStorage.getItem('todos')));
  }, []);

  useEffect(() => {
    localStorage.clear('todos');
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className={classes.App}>
      <h1 className={classes.AppTitle}>#todo</h1>
      <FilterBar setFilterState={setFilter} />
      <Todos filter={filter} todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
