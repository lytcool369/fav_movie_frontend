import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Poster from "../../components/Poster";
import Message from "../../components/Message";

const Container = styled.div`
  padding: 20px;
`;

const MoviesPresenter = ({ movieList, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>Release Movies | BitFlix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {movieList && movieList.length > 0 && (
            <Section title="현재 상영작">
              {movieList.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  genreList={movie.genreList}
                  actors={movie.actors}
                  imageUrl={movie.poster}
                  rank={movie.rank}
                  isRelease={true}
                  year={movie.release_date && movie.release_date}
                />
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
