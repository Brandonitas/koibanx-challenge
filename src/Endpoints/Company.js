import {
  buildFiltersFormData,
  buildSortFormData,
} from '../utils/BuildFormData';
import apiClient from './BaseClient';

export const GET_COMMERCIAL_DATA = async (filters, querySortBy) => {
  if (filters) {
    const body = buildFiltersFormData(filters);
    console.log(body);
  }
  if (querySortBy) {
    const bodySort = buildSortFormData(querySortBy);
    console.log(bodySort);
  }
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
