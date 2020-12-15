import axios from "axios";

const api = axios.create({
  baseURL: "https://18.222.254.158:5000",
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
