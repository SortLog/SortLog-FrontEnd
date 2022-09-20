import axios from "axios";

const backendHttpInstance = () => {
  const axiosInstance = axios.create();
  axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  // set token here, locoalStorage or rudux store
  const token = localStorage.getItem("token");
  
  axiosInstance.defaults.headers.common.Authorization = token || "";

  axiosInstance.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      error && console.log(error.response);
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export const http = (endpoint, config) => {
  const axiosInstance = backendHttpInstance();
  return axiosInstance(endpoint, { ...config });
};

export const nextapi = (endpoint, config) => {
  const axiosInstance = axios.create();
  return axiosInstance(endpoint, { ...config });
};
