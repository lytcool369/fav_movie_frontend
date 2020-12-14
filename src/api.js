import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const moviesApi = {
  movieList: () => api.get("/movie/movie_list"),
};

export const preMoviesApi = {
  premovieList: () => api.get("/movie/premovie_list"),
};

export const favMoviesApi = {
  favorite: (id) => api.get(`/movie/bookmark/${id}`),
  favList: () => api.get("/movie/favmovie_list"),
};
