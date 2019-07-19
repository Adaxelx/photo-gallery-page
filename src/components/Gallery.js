import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const StyledGallery = styled.section`
    background-color: ${({ theme }) => theme.bgArt}
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
`;

const Gallery = ({ changeLoad }) => {
  return (
    <>
      <Nav changeLoad={changeLoad} color="black" />
      <StyledGallery></StyledGallery>
    </>
  );
};

export default Gallery;
