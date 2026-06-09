import axios from "axios";

const API = axios.create({
  baseURL: "https://teamtaskmanager-production-bee2.up.railway.app",
});

export default API;