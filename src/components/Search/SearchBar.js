import React from 'react';
import { Select } from 'antd';
import { nanoid } from 'nanoid';
import Loupe from '../../assets/loupe.png';

const { Option } = Select;

const SearchBar = ({
  filters,
  filtersLists,
  applyFilter,
  changeDelay,
  getOptionsList,
}) => {
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
            style={{ width: '200px', fontSize: '14px' }}
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
