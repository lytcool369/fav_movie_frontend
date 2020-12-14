import React, { useEffect, useState } from "react";
import FavMoviesPosterPresenter from "./FavMoviesPosterPresenter";
import { favMoviesApi } from "../../api";

const FavMoviesPosterContainer = ({ movie }) => {
  const [movieData, setMovieData] = useState(movie);
  const [bookmarkCheck, setBookmarkCheck] = useState(movie["bookmark"]);

  useEffect(() => {
    console.log("Re 렌더링");
  }, [bookmarkCheck]);

  const _handleBookMark = async (id) => {
    try {
      await favMoviesApi.favorite(id);

      setBookmarkCheck(false);
    } catch (error) {
      alert("북마크 중에 에러가 났습니다.");
    }
  };

  return (
    <FavMoviesPosterPresenter
      movie={movieData}
      bookmarkCheck={bookmarkCheck}
      _handleBookMark={(id) => _handleBookMark(id)}
    />
  );
};

export default FavMoviesPosterContainer;
