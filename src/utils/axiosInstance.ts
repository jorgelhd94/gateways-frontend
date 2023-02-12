import axios from "axios";

const baseURL = import.meta.env.BASE_URL;
export const axiosApi = axios.create({ baseURL });
