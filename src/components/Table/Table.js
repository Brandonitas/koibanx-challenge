import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import useFilters from '../CustomHooks/useFilters';

const Table = ({ companyData }) => {
  const [columnNames, setColumnNames] = useState([]);

  const handleGetKeys = () => {};

  useEffect(() => {
    if (companyData) {
      const columns = Object.keys(companyData[0]);
      setColumnNames(columns);
    }
  }, [companyData]);

  const RenderRow = ({ row, indexRow }) => {
    return columnNames.map((key, index) => {
      return <td key={nanoid(5)}>{row[key]}</td>;
    });
  };

  return (
    <table className="table-container table-fixed">
      <thead>
        <tr>
          {columnNames.map((column) => {
            return <th key={nanoid(5)}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {companyData.map((row, index) => {
          return (
            <tr key={nanoid(5)}>
              <RenderRow row={row} index={index} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
