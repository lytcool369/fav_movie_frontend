import axios from "axios";

const api = axios.create({
  baseURL: "http://18.119.159.53:5000",
});

export const scrapping = {
  scrapNowMovie: () => api.get("/movie/now_list"),
  scrapPreMovie: () => api.get("/movie/pre_list"),
};

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
