import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-44-218-178-139.compute-1.amazonaws.com:8080/api",
});

export default API;
