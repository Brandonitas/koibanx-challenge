import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import SearchBar from '../components/Search/SearchBar';
import {
  filters,
  filtersLists,
  getOptionsList,
  handleApplyFilter,
  handleChangeDelay,
  handleChangeFilter,
  handleSearchInput,
} from './SearchTestUtils';

describe('Search test', () => {
  let component;

  beforeEach(() => {
    component = render(
      <SearchBar
        filters={filters}
        handleSearchInput={handleSearchInput}
        handleChangeFilter={handleChangeFilter}
        filtersLists={filtersLists}
        handleApplyFilter={handleApplyFilter}
        handleChangeDelay={handleChangeDelay}
        getOptionsList={getOptionsList}
      />
    );
  });

  test('Should render our search bar component', () => {
    const input = component.container.querySelector('#search-value');
    expect(input).toHaveTextContent('');
  });

  test('Should type in our input component', () => {
    const input = component.container.querySelector('#search-value');
    fireEvent.change(input, { target: { value: 'ID 40' } });
    expect(input.value).toBe('ID 40');
  });
});
