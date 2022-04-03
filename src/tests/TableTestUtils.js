import { nanoid } from 'nanoid';

export const storeData = [
  {
    ID: 1,
    Comercio: 'Mynte',
    CUIT: '877',
    'Concepto 1': 'Services',
    'Concepto 2': 'Training',
    'Concepto 3': 'Training',
    'Concepto 4': 'Engineering',
    'Concepto 5': 'Marketing',
    'Concepto 6': 'Training',
    'Balance actual': 485236,
    Activo: 0,
    'Última venta': '09/05/2021',
  },
];

export const handleGenerateColumsNames = () => {};
export const columns = Object.keys(storeData[0]);

export const RenderRow = ({ row }) => {
  return columns.map((key) => {
    return <td key={nanoid(5)}>{row[key]}</td>;
  });
};

export const handleChangePage = (page) => {};
export const handleSortColumn = () => {};
export const SortIndicator = () => {
  return <div></div>;
};
