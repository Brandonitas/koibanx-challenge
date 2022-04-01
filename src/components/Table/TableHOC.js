import React from 'react';
import Table from './Table';
import './Table.scss';

const TableHOC = ({
  filters,
  sortBy,
  companyData,
  handleUpdatePage,
  hasMoreData,
  handleSortComercio,
  handleSortCuit,
}) => {
  return (
    <Table
      filters={filters}
      sortBy={sortBy}
      companyData={companyData}
      handleUpdatePage={handleUpdatePage}
      hasMoreData={hasMoreData}
      handleSortComercio={handleSortComercio}
      handleSortCuit={handleSortCuit}
    />
  );
};

export default TableHOC;
