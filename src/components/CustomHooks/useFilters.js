import React, { useState } from 'react';

const useFilters = () => {
  const [filters, setFilters] = useState({
    status: '',
    searchValue: '',
  });

  const handleSearchInput = (input) => {
    const auxFilters = {
      ...filters,
    };

    if (input) {
      auxFilters.searchValue = input;
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

  return [
    filters,
    {
      handleSearchInput,
      handleChangeStatus,
    },
  ];
};

export default useFilters;
