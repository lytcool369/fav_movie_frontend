import React from "react";
import styled from "styled-components";

import Poster from "../../components/Poster";

const Container = styled.div`
  padding: 0;
  margin: 0;
`;

const MoviesPosterPresenter = ({ movie, bookmarkCheck, _handleBookMark }) => {
  return (
    <>
      <Container>
        {movie && (
          <Poster
            key={movie.id}
            id={movie.id}
            title={movie.title}
            genreList={movie.genreList}
            actors={movie.actors}
            imageUrl={movie.poster}
            rank={movie.rank}
            isNowMovie={true}
            year={movie.release_date && movie.release_date}
            bookmarkCheck={bookmarkCheck}
            _handleBookMark={(id) => _handleBookMark(id)}
          />
        )}
      </Container>
    </>
  );
};

export default MoviesPosterPresenter;
