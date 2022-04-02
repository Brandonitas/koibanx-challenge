import React, { useEffect, useState } from 'react';
import useFilters from '../components/CustomHooks/useFilters';
import SearchBarHOC from '../components/Search/SearchBarHOC';
import TableHOC from '../components/Table/TableHOC';
import { GET_COMMERCIAL_DATA } from '../Endpoints/Company';
import './CompanyDataView.scss';
import fakeData from '../data/data.json';

const CompanyDataView = () => {
  // Custom hook to get and update filters
  const [
    filters,
    sortBy,
    {
      handleSearchInput,
      handleChangeFilter,
      handleUpdatePage,
      handleSort,
    },
  ] = useFilters();

  // When API is available change companyData value to empty array
  const [companyData, setCompanyData] = useState(fakeData.data);

  // When API is available change hasMoreData value to false
  const [hasMoreData, setHasMoreData] = useState(true);

  // Get data from API
  const getData = async (queryFilters, querySortBy) => {
    const { data } = await GET_COMMERCIAL_DATA(
      queryFilters,
      querySortBy
    );

    if (filters.page === 1) {
      setCompanyData(data);
    } else {
      setCompanyData((prev) => {
        return [...prev, ...data];
      });
    }
    setHasMoreData(data.length > 0);
  };

  // Make request when filters or sortBy values change
  useEffect(() => {
    getData(filters, sortBy);
  }, [filters, sortBy]);

  return (
    <>
      <div className="text-2xl font-bold title">Comercios</div>
      <SearchBarHOC
        filters={filters}
        handleSearchInput={handleSearchInput}
        handleChangeFilter={handleChangeFilter}
      />
      <TableHOC
        filters={filters}
        sortBy={sortBy}
        companyData={companyData}
        handleUpdatePage={handleUpdatePage}
        hasMoreData={hasMoreData}
        handleSort={handleSort}
      />
    </>
  );
};

export default CompanyDataView;
