/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Pagination } from 'antd';

const Table = ({
  storeData,
  RenderRow,
  handleChangePage,
  handleSortColumn,
  SortIndicator,
  columnNames,
  totalData,
  dataPerPage,
}) => {
  return (
    <>
      <div className="table-main-container">
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
            {storeData.map((row) => {
              return (
                <tr key={nanoid(5)}>
                  <RenderRow row={row} />
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-4 flex justify-center">
          {totalData && totalData > 0 && (
            <Pagination
              total={totalData}
              showSizeChanger={false}
              pageSize={dataPerPage}
              onChange={handleChangePage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
