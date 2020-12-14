import React, { useEffect, useState } from "react";
import PreMoviesPosterPresenter from "./PreMoviesPosterPresenter";
import { favMoviesApi } from "../../api";

const PreMoviesPosterContainer = ({ movie }) => {
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
    <PreMoviesPosterPresenter
      movie={movieData}
      bookmarkCheck={bookmarkCheck}
      _handleBookMark={(id) => _handleBookMark(id)}
    />
  );
};

export default PreMoviesPosterContainer;
