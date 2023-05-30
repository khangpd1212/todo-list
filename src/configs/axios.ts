import { notification } from "antd";
import Axios from "axios";
import { checkToken, token } from "../common/utils/userLocalStorage";

const axiosBaseURL = Axios.create({
  baseURL: "http://localhost:3000/api/",
});

axiosBaseURL.interceptors.request.use(
  (config) => {
    if (checkToken()) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    console.error("Request Error Interceptor:", error);
    return Promise.reject(error);
  }
);

axiosBaseURL.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data && data.message) {
      notification.success({
        message: "Success",
        description: data.message,
      });
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data && error.response.data.errors) {
      notification.error({
        message: "Error",
        description: error.response.data.errors.User,
      });
    } else {
      notification.error({
        message: "Error",
        description: "An error occurred.",
      });
    }
    return Promise.reject(error);
  }
);
export default axiosBaseURL;
