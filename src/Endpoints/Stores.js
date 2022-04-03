import {
  buildFiltersFormData,
  buildSortFormData,
} from '../utils/BuildFormData';
import { API } from '../Variables/Variables';
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

  finalQuery = `${queryFilters}${querySortBy}`;

  console.log('FINAL QUERY', `${API}?${finalQuery}`);

  // When API is available uncomment this lines
  //   try {
  //     return await apiClient({
  //       url: `?${finalQuery}`,
  //       method: 'get',
  //     });
  //   } catch (error) {
  //     throw new Error(error);
  //   }
};
