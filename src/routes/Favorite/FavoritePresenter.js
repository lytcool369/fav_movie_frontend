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

const FavoritePresenter = (favorite, error, loading) => {
  return (
    <>
      <Helmet>
        <title>Faverite | BitFlix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {favorite && favorite.length > 0 && (
            <Section title="현재 상영작">
              {favorite.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  isMovie={true}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {/* {error && <Message color={"#e74c3c"} text={error} />} */}
        </Container>
      )}
    </>
  );
};

export default FavoritePresenter;
