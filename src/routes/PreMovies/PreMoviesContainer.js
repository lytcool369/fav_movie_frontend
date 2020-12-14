import React, { useEffect, useState } from "react";
import { preMoviesApi } from "../../api";
import PreMoviesComponent from "./PreMoviesComponent";

const PreMoviesContainer = () => {
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
          data: { premovie_lst: movieList },
        } = await preMoviesApi.premovieList();

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
    <PreMoviesComponent movieList={movieList} error={error} loading={loading} />
  );
};

export default PreMoviesContainer;
