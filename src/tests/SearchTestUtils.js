import { Select } from 'antd';
const { Option } = Select;

export const filters = {
  page: 1,
  status: '',
  search: '',
};

export const handleSearchInput = () => {};
export const handleChangeFilter = () => {};

export const filtersLists = {
  status: [
    {
      text: 'Activo',
      id: 'active',
    },
    {
      text: 'No activo',
      id: 'no-active',
    },
  ],
};

export const handleApplyFilter = (value, filterKey) => {
  const index = filtersLists[filterKey].findIndex((x) => {
    return x.id === value;
  });
  const id = index === -1 ? '' : filtersLists[filterKey][index].id;
  handleChangeFilter(id);
};
export const handleChangeDelay = () => {};
export const getOptionsList = (filterKey) => {
  const options = [];
  filtersLists[filterKey].forEach((element) => {
    options.push(
      <Option key={element.id} value={element.id}>
        {element.text}
      </Option>
    );
  });
  return options;
};
