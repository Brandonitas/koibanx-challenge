import React from 'react';
import { Select } from 'antd';
import { nanoid } from 'nanoid';
import Loupe from '../../assets/loupe.png';

const SearchBar = ({
  filters,
  filtersLists,
  handleApplyFilter,
  handleChangeDelay,
  getOptionsList,
}) => {
  return (
    <div className="search-bar-container">
      <div className="input-search">
        <img src={Loupe} alt="lopue-icon" />
        <input
          onChange={handleChangeDelay}
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
            placeholder={
              filterKey.charAt(0).toUpperCase() + filterKey.slice(1)
            }
            onChange={(e) => handleApplyFilter(e, filterKey)}
          >
            {getOptionsList(filterKey)}
          </Select>
        );
      })}
    </div>
  );
};

export default SearchBar;
