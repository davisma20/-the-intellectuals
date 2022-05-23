import axios from "axios";

const axiosRecRes = axios.create({
    baseURL: "https://reqres.in/api",
});

export default axiosRecRes;