import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Loader from "../../components/Loader";
import Section from "../../components/Section";
import Message from "../../components/Message";
import FavMoviesPosterContainer from "./FavMoviesPosterContainer";

const Container = styled.div`
  padding: 20px;
`;

const FavMoviesComponent = ({ movieList, error, loading }) => {
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
            <Section title="">
              {movieList.map((movie) => (
                <FavMoviesPosterContainer key={movie.id} movie={movie} />
              ))}
            </Section>
          )}
          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}
    </>
  );
};
export default FavMoviesComponent;
