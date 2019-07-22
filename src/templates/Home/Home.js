import React from 'react';
import styled from 'styled-components';

import Nav from '../../components/Nav';
import Articles from './Articles';
import Loading from '../../components/Loading';

const StyledHome = styled.main`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.bgColor}
  position: absolute;
  top: 0;
`;

const Home = ({ loaded, changeLoad }) => {
  return (
    <>
      {loaded ? '' : <Loading />}
      <Nav loaded={loaded} changeLoad={changeLoad} home color="white" />
      <StyledHome>
        <Articles loaded={loaded} />
      </StyledHome>
    </>
  );
};

export default Home;
