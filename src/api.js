import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const moviesApi = {
  movieList: () => api.get("/movie/list"),
  favorite: () => api.get("/movie/user_favorite"),
};
