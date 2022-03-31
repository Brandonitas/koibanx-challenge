import React from 'react';
import SearchBar from './SearchBar';
import './SearchBar.scss';

function SearchBarHOC({
  filters,
  handleSearchInput,
  handleChangeStatus,
}) {
  return (
    <SearchBar
      filters={filters}
      handleSearchInput={handleSearchInput}
      handleChangeStatus={handleChangeStatus}
    />
  );
}

export default SearchBarHOC;
