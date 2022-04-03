import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Table from '../components/Table/Table';
import {
  columns,
  companyData,
  handleChangePage,
  handleGenerateColumsNames,
  handleSortColumn,
  RenderRow,
  SortIndicator,
} from './TableTestUtils';

describe('Table test', () => {
  test('Should render our Table component', () => {
    const component = render(
      <Table
        companyData={companyData}
        handleGenerateColumsNames={handleGenerateColumsNames}
        RenderRow={RenderRow}
        handleChangePage={handleChangePage}
        handleSortColumn={handleSortColumn}
        SortIndicator={SortIndicator}
        columnNames={columns}
        totalData={0}
        dataPerPage={0}
      />
    );

    // Make sure header columns are correct
    columns.forEach((column) => {
      component.getByText(column);
    });

    const td = component.container.querySelectorAll('td');

    // Make sure print CUIT correctly
    expect(td[2]).toHaveTextContent(877);
  });

  test('Should click and sort our Table component ', () => {
    const mockHandlers = jest.fn();

    const component = render(
      <Table
        companyData={companyData}
        handleGenerateColumsNames={handleGenerateColumsNames}
        RenderRow={RenderRow}
        handleChangePage={handleChangePage}
        handleSortColumn={mockHandlers}
        SortIndicator={SortIndicator}
        columnNames={columns}
        totalData={0}
        dataPerPage={0}
      />
    );

    const CUITSort = component.getByText('CUIT');
    //console.log(prettyDOM(CUITSort));
    fireEvent.click(CUITSort);
    expect(mockHandlers).toHaveBeenCalledTimes(1);
  });
});
