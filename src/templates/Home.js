import React from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';
import Articles from './Articles';

const StyledHome = styled.main`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor}
  position: absolute;
  top: 0;
`;

const Home = ({ loaded }) => {
  return (
    <StyledHome>
      <Articles loaded={loaded} />
    </StyledHome>
  );
};

export default Home;
