import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://mern-chat-3y6ju2ebu-shubhendu-singhs-projects.vercel.app"; // Update this with your Vercel backend URL

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Ensure cookies are sent (for sessions)
});
