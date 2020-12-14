import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Loader from "../../components/Loader";
import Section from "../../components/Section";
import Message from "../../components/Message";
import MoviesPosterContainer from "./MoviesPosterContainer";

const Container = styled.div`
  padding: 20px;
`;

const MoviesPresenter = ({ movieList, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>Release Movies | Naver Movies</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {movieList && movieList.length > 0 && (
            <Section title="현재 상영작">
              {movieList.map((movie) => (
                <MoviesPosterContainer key={movie.id} movie={movie} />
              ))}
            </Section>
          )}
          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}
    </>
  );
};

export default MoviesPresenter;
