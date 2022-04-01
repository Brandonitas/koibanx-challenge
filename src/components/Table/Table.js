import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import InfiniteScroll from 'react-infinite-scroll-component';
import DownArrow from '../../assets/down-arrow.png';
import UpArrow from '../../assets/up-arrow.png';

const Table = ({
  filters,
  sortBy,
  companyData,
  handleUpdatePage,
  hasMoreData,
  handleSortComercio,
  handleSortCuit,
}) => {
  const [columnNames, setColumnNames] = useState([]);

  const handleGetKeys = () => {};

  useEffect(() => {
    if (companyData) {
      const columns = Object.keys(companyData[0]);
      setColumnNames(columns);
    }
  }, [companyData]);

  const RenderRow = ({ row }) => {
    return columnNames.map((key) => {
      return <td key={nanoid(5)}>{row[key]}</td>;
    });
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      console.log('FETCH MORE DATA');
      handleUpdatePage(filters.page + 1);
    }, 2000);
  };

  const handleSorteColumn = (e) => {
    switch (e.target.innerText) {
      case 'Comercio':
        handleSortComercio();
        break;
      case 'CUIT':
        handleSortCuit();
        break;
      default:
        break;
    }
  };

  const SortIndicator = ({ column }) => {
    const sortedColumns = ['Comercio', 'CUIT'];
    const sortedColumnsWithIDs = {
      Comercio: 'comercio',
      CUIT: 'cuit',
    };
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
    <InfiniteScroll
      dataLength={companyData.length}
      next={fetchMoreData}
      hasMore
      loader={<EmptyState />}
      scrollThreshold="90%"
    >
      <table className="table-container table-fixed">
        <thead>
          <tr>
            {columnNames.map((column) => {
              return (
                <th
                  onClick={handleSorteColumn}
                  key={nanoid(5)}
                  name={column}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {column}
                    <SortIndicator column={column} />
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {companyData.map((row) => {
            return (
              <tr key={nanoid(5)}>
                <RenderRow row={row} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </InfiniteScroll>
  );
};

export default Table;

export const EmptyState = () => {
  return (
    <>
      <div className="empty-state-container">
        <div className="emtpy-state"> </div>
        <div className="emtpy-state"> </div>
        <div className="emtpy-state"> </div>
      </div>
    </>
  );
};
