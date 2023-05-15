import Axios from "axios";
const axiosBaseURL = Axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
export default axiosBaseURL;
