/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import InfiniteScroll from 'react-infinite-scroll-component';

const Table = ({
  companyData,
  hasMoreData,
  handleGenerateColumsNames,
  RenderRow,
  fetchMoreData,
  handleSortColumn,
  SortIndicator,
  columnNames,
}) => {
  useEffect(() => {
    // Make sure we have data to ganerate columns
    if (companyData && companyData.length > 0) {
      handleGenerateColumsNames();
    }
  }, [companyData]);

  return (
    <InfiniteScroll
      dataLength={companyData.length}
      next={fetchMoreData}
      hasMore={hasMoreData}
      loader={<EmptyState />}
      scrollThreshold="90%"
    >
      <table className="table-container table-fixed">
        <thead>
          <tr>
            {columnNames.map((column) => {
              return (
                <th
                  onClick={handleSortColumn}
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
