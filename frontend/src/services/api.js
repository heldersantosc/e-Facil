import axios from "axios";

const api = axios.create({
  baseURL: "https://b0e4b349.ngrok.io",
});

export default api;
