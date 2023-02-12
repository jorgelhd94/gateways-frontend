import axios from "axios";

const baseURL = "http://localhost:3000/api/v1.0";
export const axiosApi = axios.create({ baseURL });
