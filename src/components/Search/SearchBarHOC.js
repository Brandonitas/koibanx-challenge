import React from 'react';
import SearchBar from './SearchBar';
import './SearchBar.scss';

function SearchBarHOC({
  filters,
  handleSearchInput,
  handleChangeFilter,
}) {
  return (
    <SearchBar
      filters={filters}
      handleSearchInput={handleSearchInput}
      handleChangeFilter={handleChangeFilter}
    />
  );
}

export default SearchBarHOC;
