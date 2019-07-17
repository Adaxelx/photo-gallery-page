import React from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';

const StyledHome = styled.main`
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const Logo = styled.p`
  position: fixed;
  top: 50px;
  left: 20px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Home = () => {
  return (
    <StyledHome>
      <Logo>Asdfghjk lkjhgfd</Logo>
    </StyledHome>
  );
};

export default Home;
