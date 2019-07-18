import React from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';
import Articles from './Articles';

const StyledHome = styled.main`
  height: 100vh;
  width: 100%;
  background-color: black;
  position: absolute;
  top: 0;
`;

const Home = () => {
  return (
    <StyledHome>
      <Articles />
    </StyledHome>
  );
};

export default Home;
