import axios from 'axios';
import { API } from '../Variables/Variables';

const baseApiClient = axios.create({
  baseURL: API,
});

// apiClient acting like response interceptor
const apiClient = ({ ...options }) => {
  const onSuccess = (response) => response;

  const onError = async (error) => {
    const originalRequest = error.config;
    // Here we can handle errors
  };

  return baseApiClient(options).then(onSuccess).catch(onError);
};

export default apiClient;
