import React from 'react';
import SearchBarHOC from '../components/Search/SearchBarHOC';
import FilterView from './FilterView';
import './FilterView.scss';

const FilterViewHOC = () => {
  return (
    <>
      <SearchBarHOC />
      <FilterView />
    </>
  );
};

export default FilterViewHOC;
