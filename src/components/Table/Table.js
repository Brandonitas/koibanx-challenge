import React from 'react';
import useFilters from '../CustomHooks/useFilters';

const Table = () => {
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>ID</th>
          <th>Comercio</th>
          <th>CUIT</th>
          <th>Concepto 1</th>
          <th>Concepto 2</th>
          <th>Concepto 3</th>
          <th>Concepto 4</th>
          <th>Concepto 5</th>
          <th>Concepto 6</th>
          <th>Balance actual</th>
          <th>Activo</th>
          <th>Última venta</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
