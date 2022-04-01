import React from 'react';
import Table from './Table';
import './Table.scss';

const TableHOC = ({
  filters,
  companyData,
  handleUpdatePage,
  hasMoreData,
  handleSortComercio,
  handleSortCuit,
}) => {
  return (
    <Table
      filters={filters}
      companyData={companyData}
      handleUpdatePage={handleUpdatePage}
      hasMoreData={hasMoreData}
      handleSortComercio={handleSortComercio}
      handleSortCuit={handleSortCuit}
    />
  );
};

export default TableHOC;
