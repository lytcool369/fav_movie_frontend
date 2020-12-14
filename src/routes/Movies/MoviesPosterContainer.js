import React, { useEffect, useState } from "react";
import MoviesPosterPresenter from "./MoviesPosterPresenter";
import { favMoviesApi } from "../../api";

const MoviesPosterContainer = ({ movie }) => {
  const [movieData, setMovieData] = useState(movie);
  const [bookmarkCheck, setBookmarkCheck] = useState(movie["bookmark"]);

  useEffect(() => {
    console.log("Re 렌더링");
  }, [bookmarkCheck]);

  const _handleBookMark = async (id) => {
    try {
      await favMoviesApi.favorite(id);

      if (bookmarkCheck) {
        setBookmarkCheck(false);
      } else {
        setBookmarkCheck(true);
      }
    } catch (error) {
      alert("북마크 중에 에러가 났습니다.");
    }
  };

  return (
    <MoviesPosterPresenter
      movie={movieData}
      bookmarkCheck={bookmarkCheck}
      _handleBookMark={(id) => _handleBookMark(id)}
    />
  );
};

export default MoviesPosterContainer;
