import axios from "axios";

const instance = axios.create({
  baseURL: "/api", // tất cả API bắt đầu từ /api
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
