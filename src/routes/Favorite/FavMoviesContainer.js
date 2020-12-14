import React, { useEffect, useState } from "react";
import { favMoviesApi } from "../../api";
import FavMoviesComponent from "./FavMoviesComponent";

const FavMoviesContainer = () => {
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
          data: { fav_movie_lst: movieList },
        } = await favMoviesApi.favList();

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
    <FavMoviesComponent movieList={movieList} error={error} loading={loading} />
  );
};

export default FavMoviesContainer;
