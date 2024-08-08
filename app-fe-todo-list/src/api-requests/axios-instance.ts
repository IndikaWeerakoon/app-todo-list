import axios from 'axios';

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  });
  return instance;
}

 export const axiosInstance = createAxiosInstance();