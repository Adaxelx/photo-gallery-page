import React from 'react';
import styled from 'styled-components';

import Nav from '../../components/Nav';
import Con from '../../components/Contener';

const StyledAbout = styled.article`
  position: absolute;
  height: 100vh;
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.bgArt};
`;

const StyledTitle = styled.h2``;

const About = ({ changeLoad }) => {
  return (
    <>
      <Nav color="black" changeLoad={changeLoad} />
      <StyledAbout>
        <Con marginTop="180px" value="XD" />
      </StyledAbout>
    </>
  );
};

export default About;
