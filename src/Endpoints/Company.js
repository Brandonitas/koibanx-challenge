import apiClient from './BaseClient';

export const GET_COMMERCIAL_DATA = async (data) => {
  try {
    return await apiClient({
      url: '',
      method: 'get',
      data: data,
    });
  } catch (error) {
    throw new Error(error);
  }
};
