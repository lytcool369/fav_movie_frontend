import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import naverMovieMain from "../../assets/naverMovieMain.png";
import naverMovieLogo from "../../assets/naverMovieLogo.png";

const Image = styled.div`
  background-image: url(${(props) => `${props.bgUrl}`});
  height: 900px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
`;

const HomePresenter = () => {
  return (
    <div>
      <Fade top>
        <Image bgUrl={naverMovieMain} />
      </Fade>
    </div>
  );
};

export default HomePresenter;
