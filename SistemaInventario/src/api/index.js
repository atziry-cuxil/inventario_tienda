import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5175/api/",
    withCredentials: true
})

export { apiClient }


