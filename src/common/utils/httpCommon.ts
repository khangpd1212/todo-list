import Axios from "axios";
const token = JSON.parse(localStorage.getItem("user")!).token;
const axiosBaseURL = Axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: { Authorization: "Bearer " + token },
});
export default axiosBaseURL;
