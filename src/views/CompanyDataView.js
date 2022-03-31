import React, { useEffect } from 'react';
import useFilters from '../components/CustomHooks/useFilters';
import SearchBarHOC from '../components/Search/SearchBarHOC';
import TableHOC from '../components/Table/TableHOC';
import { GET_COMMERCIAL_DATA } from '../Endpoints/Company';
import './CompanyDataView.scss';

const CompanyDataView = () => {
  const [filters, { handleSearchInput, handleChangeStatus }] =
    useFilters();

  const getData = () => {
    console.log('SUBMIT', filters);
    GET_COMMERCIAL_DATA(filters);
  };

  useEffect(() => {
    let filtersIsEmpty = true;
    Object.entries(filters).forEach((filter) => {
      const [, value] = filter;
      if (value !== '') {
        filtersIsEmpty = false;
      }
    });

    if (!filtersIsEmpty) {
      console.log('SEARCH WITH PARAMS');
      getData();
    } else {
      console.log('SEARCH EMPTY');
    }
  }, [filters]);

  return (
    <>
      <SearchBarHOC
        filters={filters}
        handleSearchInput={handleSearchInput}
        handleChangeStatus={handleChangeStatus}
      />
      <TableHOC />
    </>
  );
};

export default CompanyDataView;
