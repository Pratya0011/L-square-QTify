import axios from "axios";
import { baseURL } from "./_url";

const axiosApi = axios.create({
  baseURL,
});

axiosApi.interceptors.request.use(async function (configurations) {
  if (!configurations.headers[`noLoader`]) {
    document.body.classList.add("loading-indicator");
  }

  return configurations;
});

axiosApi.interceptors.response.use(
  function (response) {
    // remove loader
    document.body.classList.remove("loading-indicator");
    return response;
  },
  function (error) {
    document.body.classList.remove("loading-indicator");
    if (!error.response || error.response.status === 401) {
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export const getApi = async (url, customHeaders) => {
  try {
    const result = await axiosApi.get(`${url}`, customHeaders);
    return {
      status: result.status,
      body: result.data,
    };
  } catch (err) {
    const result = err.response;
    return { status: result.status, body: result.data };
  }
};
