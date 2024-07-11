import axios from "axios";
import cookie from "utils/cookie";

const axiosClient = axios.create({
  baseURL: "https://phidata-ai.heydevs.io/ai-api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
  },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = cookie.get("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
