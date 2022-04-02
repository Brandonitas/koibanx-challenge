import React, { useState } from 'react';
import { Select } from 'antd';
import { nanoid } from 'nanoid';
import Loupe from '../../assets/loupe.png';

const { Option } = Select;

const SearchBar = ({
  filters,
  handleSearchInput,
  handleChangeFilter,
}) => {
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
    console.log('VVV', value, filterKey);
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
    <div className="search-bar-container">
      <div className="input-search">
        <img src={Loupe} alt="lopue-icon" />
        <input
          onChange={changeDelay}
          type="text"
          autoComplete="off"
          id="search-value"
          placeholder="Search"
        />
      </div>
      {Object.keys(filtersLists).map((filterKey) => {
        return (
          <Select
            size="large"
            value={filters[filterKey] || null}
            style={{ width: '100%', fontSize: '14px' }}
            allowClear
            key={nanoid(5)}
            placeholder="Status"
            onChange={(e) => applyFilter(e, filterKey)}
          >
            {getOptionsList(filterKey)}
          </Select>
        );
      })}
    </div>
  );
};

export default SearchBar;
