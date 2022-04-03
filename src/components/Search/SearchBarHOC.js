import React, { useState } from 'react';
import { Select } from 'antd';
import SearchBar from './SearchBar';
import './SearchBar.scss';

const { Option } = Select;

function SearchBarHOC({
  filters,
  handleSearchInput,
  handleChangeFilter,
}) {
  // Filters list and types. We can add more if needed
  const [filtersLists, setFiltersLists] = useState({
    status: [
      {
        text: 'Activo',
        id: 'active',
      },
      {
        text: 'No activo',
        id: 'no-active',
      },
    ],
  });

  // On change select filter
  const handleApplyFilter = (value, filterKey) => {
    const index = filtersLists[filterKey].findIndex((x) => {
      return x.id === value;
    });
    const id = index === -1 ? '' : filtersLists[filterKey][index].id;
    handleChangeFilter(id);
  };

  // Automatic search when we stop typing
  const [timer, setTimer] = useState(null);
  const handleChangeDelay = (e) => {
    // Only clear timeout when user still typing
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(() => {
        const { value } = e.target;
        handleSearchInput(value);
      }, 2000)
    );
  };

  const handleOnBlur = (e) => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    const { value } = e.target;
    if (filters.search !== value) {
      handleSearchInput(value);
    }
  };

  // Get options to use in select filters component
  const getOptionsList = (filterKey) => {
    const options = [];
    filtersLists[filterKey].forEach((element) => {
      options.push(
        <Option key={element.id} value={element.id}>
          {element.text}
        </Option>
      );
    });
    return options;
  };

  return (
    <SearchBar
      filters={filters}
      filtersLists={filtersLists}
      handleApplyFilter={handleApplyFilter}
      handleChangeDelay={handleChangeDelay}
      handleOnBlur={handleOnBlur}
      getOptionsList={getOptionsList}
    />
  );
}

export default SearchBarHOC;
