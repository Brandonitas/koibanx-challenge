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

  // Data for our pagination component
  const [totalData, setTotalData] = useState(fakeData.total);
  const [dataPerPage, setDataPerPage] = useState(
    fakeData.rowsPerPage
  );

  // Get data from API
  const getData = async (queryFilters, querySortBy) => {
    const requestData = await GET_COMMERCIAL_DATA(
      queryFilters,
      querySortBy
    );

    // When API is available uncomment this line
    // setCompanyData(requestData.data);
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
        handleSort={handleSort}
        totalData={totalData}
        dataPerPage={dataPerPage}
      />
    </>
  );
};

export default CompanyDataView;
