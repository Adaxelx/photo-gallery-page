import React, { useEffect } from 'react';
import styled from 'styled-components';

import Nav from '../../components/Nav';
import Articles from './Articles';
import Loading from '../../components/Loading';
import { TweenMax } from 'gsap/all';
import { Transition } from 'react-transition-group';

const startState = { autoAlpha: 0, y: -50 };

const StyledHome = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bgColor}
  position: absolute;
  top: 0;
`;

const Home = ({ loaded, changeLoad, show }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Transition
      unmountOnExit
      in={show}
      timeout={1000}
      onEnter={node => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.5, {
          autoAlpha: show ? 1 : 0,
          y: show ? 0 : 50,
          onComplete: done,
        });
      }}
    >
      <StyledHome>
        {loaded ? '' : <Loading />}
        <Nav loaded={loaded} changeLoad={changeLoad} home color="white" />

        <Articles loaded={loaded} />
      </StyledHome>
    </Transition>
  );
};

export default Home;
