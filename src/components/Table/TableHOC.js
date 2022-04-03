import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Table from './Table';
import './Table.scss';
import DownArrow from '../../assets/down-arrow.png';
import UpArrow from '../../assets/up-arrow.png';

const TableHOC = ({
  filters,
  sortBy,
  companyData,
  handleUpdatePage,
  handleSort,
  totalData,
  dataPerPage,
}) => {
  const [columnNames, setColumnNames] = useState([]);
  const [sortedColumnsWithIDs, setSortedColumnsWithIDs] = useState({
    Comercio: 'comercio',
    CUIT: 'cuit',
  });

  // Dynamically generate column names
  const handleGenerateColumsNames = () => {
    const columns = Object.keys(companyData[0]);
    setColumnNames(columns);
  };

  // Print each row with data
  const RenderRow = ({ row }) => {
    return columnNames.map((key) => {
      if (key === 'Activo') {
        return (
          <td key={nanoid(5)}>
            <div>{row[key] === 1 ? 'Activo' : 'No activo'}</div>
          </td>
        );
      }
      return <td key={nanoid(5)}>{row[key]}</td>;
    });
  };

  const handleChangePage = (page) => {
    handleUpdatePage(page);
  };

  // onClick Sort
  const handleSortColumn = (e) => {
    handleSort(sortedColumnsWithIDs[e.target.innerText]);
  };

  // Arrow indicator when sort
  const SortIndicator = ({ column }) => {
    const sortedColumns = ['Comercio', 'CUIT'];
    const isSorted = sortedColumns.includes(column);

    if (isSorted) {
      const sorteValue = sortBy[sortedColumnsWithIDs[column]];
      if (sorteValue === 1 || sorteValue === -1) {
        return (
          <img
            src={sorteValue === 1 ? UpArrow : DownArrow}
            alt="down-arrow"
            style={{ height: '12px' }}
          />
        );
      }
    }

    return null;
  };

  return (
    <Table
      companyData={companyData}
      handleGenerateColumsNames={handleGenerateColumsNames}
      RenderRow={RenderRow}
      handleChangePage={handleChangePage}
      handleSortColumn={handleSortColumn}
      SortIndicator={SortIndicator}
      columnNames={columnNames}
      totalData={totalData}
      dataPerPage={dataPerPage}
    />
  );
};

export default TableHOC;
