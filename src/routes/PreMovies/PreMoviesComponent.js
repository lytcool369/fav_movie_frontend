import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Loader from "../../components/Loader";
import Section from "../../components/Section";
import Message from "../../components/Message";
import PreMoviesPosterContainer from "./PreMoviesPosterContainer";

const Container = styled.div`
  padding: 20px;
`;

const PreMoviesComponent = ({ movieList, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>Preview Movies | Naver Movies</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {movieList && movieList.length > 0 && (
            <Section title="상영 예정작">
              {movieList.map((movie) => (
                <PreMoviesPosterContainer key={movie.id} movie={movie} />
              ))}
            </Section>
          )}
          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}
    </>
  );
};
export default PreMoviesComponent;
