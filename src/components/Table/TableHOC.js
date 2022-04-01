import React from 'react';
import Table from './Table';
import './Table.scss';

const TableHOC = ({ companyData }) => {
  return <Table companyData={companyData} />;
};

export default TableHOC;
