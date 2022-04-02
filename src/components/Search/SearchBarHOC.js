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
  // Filters list and types. We can add more
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

  const applyFilter = (value, filterKey) => {
    const index = filtersLists[filterKey].findIndex((x) => {
      return x.id === value;
    });
    const id = index === -1 ? '' : filtersLists[filterKey][index].id;
    console.log(id);
    handleChangeFilter(id);
  };

  // Automatic search when we stop typing
  const [timer, setTimer] = useState(null);
  const changeDelay = (e) => {
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
      handleSearchInput={handleSearchInput}
      handleChangeFilter={handleChangeFilter}
      filtersLists={filtersLists}
      applyFilter={applyFilter}
      changeDelay={changeDelay}
      getOptionsList={getOptionsList}
    />
  );
}

export default SearchBarHOC;
