import React, { useEffect, useState } from "react";
import { moviesApi } from "../../api";
import usePromise from "../../lib/usePromise";
import MoviesPresenter from "./MoviesPresenter";

const MoviesContainer = () => {
  const [movieList, setMovieList] = useState([]);
  const [clickBookMark, setClickBookMark] = useState(false);
  const [loading, response, error] = usePromise(moviesApi.movieList, [
    clickBookMark,
  ]);

  if (!response) {
    return null;
  }

  const _handleBookMark = async (id) => {
    try {
      await moviesApi.favorite(id);
    } catch (error) {
      alert("북마크 중에 에러가 났습니다.");
    }
  };

  const { result } = response.data;
  console.log(result);

  return (
    <MoviesPresenter
      movieList={movieList}
      error={error}
      loading={loading}
      _handleBookMark={(id) => _handleBookMark(id)}
    />
  );
};

export default MoviesContainer;
