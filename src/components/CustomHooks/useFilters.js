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
    console.log('AUX', auxFilters);
    setFilters(auxFilters);
  };

  const handleChangeStatus = (status) => {
    const auxFilters = {
      ...filters,
    };

    // If already selected clean status
    if (auxFilters.status === status) {
      auxFilters.status = '';
    } else if (status) {
      auxFilters.status = status;
    }

    console.log('AUX', auxFilters);

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
      handleChangeStatus,
      handleUpdatePage,
      handleSortComercio,
      handleSortCuit,
    },
  ];
};

export default useFilters;
