import React, { useEffect, useState } from "react";
import { moviesApi } from "../../api";
import MoviesComponent from "./MoviesComponent";

const MoviesContainer = () => {
  const [state, setState] = useState({
    movieList: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const process = async () => {
      setState({ movieList: null, error: null, loading: true });

      try {
        const {
          data: { nowmovie_lst: movieList },
        } = await moviesApi.movieList();

        setState({
          movieList: movieList,
          error: null,
          loading: false,
        });
      } catch (error) {
        setState({
          movieList: null,
          error: "영화 상영작을 찾을 수 없습니다.",
          loading: false,
        });
      }
    };
    process();
  }, []);

  const { movieList, error, loading } = state;

  return (
    <MoviesComponent movieList={movieList} error={error} loading={loading} />
  );
};

export default MoviesContainer;
