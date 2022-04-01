import React, { useEffect, useState } from 'react';
import useFilters from '../components/CustomHooks/useFilters';
import SearchBarHOC from '../components/Search/SearchBarHOC';
import TableHOC from '../components/Table/TableHOC';
import { GET_COMMERCIAL_DATA } from '../Endpoints/Company';
import './CompanyDataView.scss';
import fakeData from '../data/data.json';

const CompanyDataView = () => {
  const [filters, { handleSearchInput, handleChangeStatus }] =
    useFilters();

  const [companyData, setCompanyData] = useState(fakeData.data);

  console.log('DD', fakeData);

  const getData = (queryFilters) => {
    console.log('SUBMIT', queryFilters);
    GET_COMMERCIAL_DATA(queryFilters);
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
      getData(filters);
    } else {
      console.log('SEARCH EMPTY');
      getData();
    }
  }, [filters]);

  return (
    <>
      <SearchBarHOC
        filters={filters}
        handleSearchInput={handleSearchInput}
        handleChangeStatus={handleChangeStatus}
      />
      <TableHOC companyData={companyData} />
    </>
  );
};

export default CompanyDataView;
