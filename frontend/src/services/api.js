import axios from "axios";

const api = axios.create({
  baseURL: "https://f7581389.ngrok.io",
});

export default api;
