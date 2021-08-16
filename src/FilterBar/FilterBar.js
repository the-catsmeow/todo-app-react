import React, { useState } from 'react';
import classes from './FilterBar.module.css';
import { filterState } from '../properties/properties';

const FilterBar = ({ setFilterState }) => {
  const [styles, setStyles] = useState({
    all: [classes.FilterOption, classes.active],
    active: [classes.FilterOption],
    completed: [classes.FilterOption],
    activeButton: 'all',
  });

  const setActiveStyle = (filterOption) => {
    let newStyles = { ...styles };
    newStyles[filterOption].push(classes.active);
    newStyles[newStyles['activeButton']].pop();
    newStyles['activeButton'] = filterOption;
    setStyles(newStyles);
  };

  return (
    <div className={classes.FilterBar}>
      <button
        className={styles['all'].join(' ')}
        onClick={() => {
          setFilterState(filterState.ALL);
          setActiveStyle('all');
        }}
      >
        All
      </button>
      <button
        className={styles['active'].join(' ')}
        onClick={() => {
          setFilterState(filterState.ACTIVE);
          setActiveStyle('active');
        }}
      >
        Active
      </button>
      <button
        className={styles['completed'].join(' ')}
        onClick={() => {
          setFilterState(filterState.COMPLETED);
          setActiveStyle('completed');
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterBar;
