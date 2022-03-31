import React, { useState } from 'react';
import { Popover, Button } from 'antd';

const SearchBar = ({
  filters,
  handleSearchInput,
  handleChangeStatus,
}) => {
  const applyFilter = (e) => {
    const { value } = e.target;
    const {
      target: { id },
    } = e;
    if (id === 'search-value') {
      handleSearchInput(value);
    } else if (id === 'no-active' || id === 'active') {
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
            value="active"
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
            value="no-active"
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
    <div>
      <input
        onChange={changeDelay}
        type="text"
        autoComplete="off"
        id="search-value"
        placeholder="Search"
        className=""
      />
      <Popover placement="bottom" content={content} trigger="click">
        <Button>Filtros</Button>
      </Popover>
    </div>
  );
};

export default SearchBar;
