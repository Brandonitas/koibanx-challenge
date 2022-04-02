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

    if (input) {
      auxFilters.search = input;
    }
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

  const handleSortComercio = () => {
    const auxSortBy = {
      ...sortBy,
    };

    switch (auxSortBy.comercio) {
      case '':
        auxSortBy.comercio = 1;
        break;
      case 1:
        auxSortBy.comercio = -1;
        break;
      case -1:
        auxSortBy.comercio = '';
        break;

      default:
        auxSortBy.comercio = '';
        break;
    }

    setSortBy(auxSortBy);
  };

  const handleSortCuit = () => {
    const auxSortBy = {
      ...sortBy,
    };

    switch (auxSortBy.cuit) {
      case '':
        auxSortBy.cuit = 1;
        break;
      case 1:
        auxSortBy.cuit = -1;
        break;
      case -1:
        auxSortBy.cuit = '';
        break;

      default:
        auxSortBy.cuit = '';
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
      handleSortComercio,
      handleSortCuit,
    },
  ];
};

export default useFilters;
