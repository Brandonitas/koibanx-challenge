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
      handleSortComercio,
      handleSortCuit,
    },
  ] = useFilters();

  const [companyData, setCompanyData] = useState(fakeData.data);
  const [hasMoreData, setHasMoreData] = useState(false);

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
        handleSortComercio={handleSortComercio}
        handleSortCuit={handleSortCuit}
      />
    </>
  );
};

export default CompanyDataView;
