import React, { useEffect, useState } from 'react';
import useFilters from '../components/CustomHooks/useFilters';
import SearchBarHOC from '../components/Search/SearchBarHOC';
import TableHOC from '../components/Table/TableHOC';
import { GET_COMMERCIAL_DATA } from '../Endpoints/Stores';
import './StoreDataView.scss';
import fakeData from '../data/data.json';

const StoreDataView = () => {
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

  // When API is available change storeData value to empty array
  const [storeData, setStoreData] = useState(fakeData.data);

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
    // setStoreData(requestData.data);
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
        sortBy={sortBy}
        storeData={storeData}
        handleUpdatePage={handleUpdatePage}
        handleSort={handleSort}
        totalData={totalData}
        dataPerPage={dataPerPage}
      />
    </>
  );
};

export default StoreDataView;
