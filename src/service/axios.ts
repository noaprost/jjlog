import axios from "axios";

const API = axios.create({
  baseURL: "https://jaefe.store/api",
});

export default API;
