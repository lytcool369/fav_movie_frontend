import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BsBookmarkFill } from "react-icons/bs";

const Container = styled.div`
  font-size: 12px;
`;

const LikeDiv = styled.div`
  display: flex;
  top: 25px;
  left: 15px;
  justify-content: flex-end;
  font-size: 30px;
  position: relative;
  z-index: 12;
`;

const Image = styled.div`
  background-image: url(${(props) => `${props.bgUrl}`});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.div`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
`;

const ActorDiv = styled.div`
  display: flex;
  flex-direction: column;
  top: 5px;
  left: 5px;
  position: absolute;
  opacity: 0;
`;

const Actor = styled.span`
  text-align: left;
  margin: 5px;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${ActorDiv} {
      opacity: 1;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  :hover {
    color: rgb(24, 109, 245);
  }
`;

const GenreDiv = styled.div`
  display: flex;
`;

const Genre = styled.span`
  display: flex;
  font-size: 10px;
  color: rgb(110, 233, 253);
  :hover {
    color: rgb(24, 109, 245);
  }
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({
  id,
  imageUrl,
  title,
  genreList,
  actors,
  rank,
  year,
  isNowMovie,
  bookmarkCheck,
  _handleBookMark,
}) => (
  <Container>
    <LikeDiv>
      <BsBookmarkFill
        color={bookmarkCheck ? "red" : "rgb(229, 225, 255)"}
        onClick={() => _handleBookMark(id)}
        cursor="grab"
      />
    </LikeDiv>
    <Link to={`/show/${id}`}>
      <ImageContainer>
        <Image
          bgUrl={imageUrl ? imageUrl : require("../assets/noPosterSmall.png")}
        ></Image>

        <ActorDiv>
          {actors.map((actor, index) => {
            if (index < 6) {
              return <Actor key={index}>{actor}</Actor>;
            }
          })}
        </ActorDiv>
        {isNowMovie && (
          <Rating>
            <span role="img" aria-label="rating">
              ⭐️
            </span>
            {rank} / 10
          </Rating>
        )}
      </ImageContainer>
      <Title>
        {title.length > 15 ? `${title.substring(0, 15)}...` : title}
      </Title>
    </Link>
    <GenreDiv>
      {genreList.map((genre, index) => {
        if (index == genreList.length - 1) {
          return (
            <Genre key={index}>
              <a href="http://www.naver.com">{genre}</a>
            </Genre>
          );
        } else {
          return (
            <Genre key={index}>
              <a href="http://www.naver.com">{genre},&nbsp;</a>
            </Genre>
          );
        }
      })}
    </GenreDiv>
    <Year>{year}</Year>
  </Container>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
