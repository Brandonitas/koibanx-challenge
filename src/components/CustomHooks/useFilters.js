import React, { useState } from 'react';

const useFilters = () => {
  const [filters, setFilters] = useState({
    page: 1,
    status: '',
    search: '',
  });

  const [sortBy, setSortBy] = useState({
    comercio: '',
    cuit: '',
  });

  const handleSearchInput = (input) => {
    const auxFilters = {
      ...filters,
    };

    auxFilters.search = input;

    setFilters(auxFilters);
  };

  const handleChangeFilter = (status) => {
    const auxFilters = {
      ...filters,
    };

    auxFilters.status = status;
    setFilters(auxFilters);
  };

  const handleUpdatePage = (page) => {
    const auxFilters = {
      ...filters,
    };

    auxFilters.page = page;
    setFilters(auxFilters);
  };

  const handleSort = (id) => {
    const auxSortBy = {
      ...sortBy,
    };

    switch (auxSortBy[id]) {
      case '':
        auxSortBy[id] = 1;
        break;
      case 1:
        auxSortBy[id] = -1;
        break;
      case -1:
        auxSortBy[id] = '';
        break;

      default:
        auxSortBy[id] = '';
        break;
    }
    setSortBy(auxSortBy);
  };

  return [
    filters,
    sortBy,
    {
      handleSearchInput,
      handleChangeFilter,
      handleUpdatePage,
      handleSort,
    },
  ];
};

export default useFilters;
