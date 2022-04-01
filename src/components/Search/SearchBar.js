import React, { useState } from 'react';
import { Popover } from 'antd';
import Loupe from '../../assets/loupe.png';

const SearchBar = ({
  filters,
  handleSearchInput,
  handleChangeStatus,
}) => {
  const applyFilter = (e) => {
    console.log('SII');
    const {
      target: { id },
    } = e;
    if (id === 'no-active' || id === 'active') {
      handleChangeStatus(id);
    }
  };

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

  const content = (
    <div>
      <p className="font-bold">Status</p>
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="active"
            id="active"
            checked={filters.status === 'active'}
            onChange={applyFilter}
          />{' '}
          Activo
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="no-active"
            id="no-active"
            checked={filters.status === 'no-active'}
            onChange={applyFilter}
          />{' '}
          No activo
        </div>
      </div>
    </div>
  );

  return (
    <div className="search-bar-container">
      {/* <input
        onChange={changeDelay}
        type="text"
        autoComplete="off"
        id="search-value"
        placeholder="Search"
        className="input-search"
      /> */}

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

      <Popover
        placement="bottom"
        content={content}
        trigger="click"
        overlayClassName="popover-filters"
      >
        <button className="filter-button" type="button">
          Filtros
        </button>
      </Popover>
    </div>
  );
};

export default SearchBar;
