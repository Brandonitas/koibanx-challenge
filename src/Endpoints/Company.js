import {
  buildFiltersFormData,
  buildSortFormData,
} from '../utils/BuildFormData';
import apiClient from './BaseClient';

export const GET_COMMERCIAL_DATA = async (filters, sortBy) => {
  let queryFilters = '';
  let querySortBy = '';
  let finalQuery = '';
  if (filters) {
    queryFilters = buildFiltersFormData(filters);
  }
  if (sortBy) {
    querySortBy = buildSortFormData(sortBy);
  }

  finalQuery = queryFilters + querySortBy;

  console.log('FINAL QUERY', finalQuery);
  //   try {
  //     return await apiClient({
  //       url: 'commercials?q=',
  //       method: 'get',
  //       data,
  //     });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
};
