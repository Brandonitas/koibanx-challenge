import { buildFormData } from '../utils/BuildFormData';
import apiClient from './BaseClient';

export const GET_COMMERCIAL_DATA = async (data) => {
  const body = buildFormData(data);
  console.log(body);
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
