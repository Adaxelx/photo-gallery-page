import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const StyledGallery = styled.section`
    background-color: ${({ theme }) => theme.bgArt}
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledTitle = styled.h2``;

const StyledCon = styled.section``;

const StyledConImg = styled.div``;

const StyledImage = styled.img`
  width: 90%;
`;

const StyledDescription = styled.h4``;

const Gallery = ({ changeLoad, title, images, nextArt }) => {
  const imagesArr = images.map(img => (
    <StyledConImg>
      <StyledImage src={img.src}></StyledImage>
      <StyledDescription>{img.description}</StyledDescription>
    </StyledConImg>
  ));

  return (
    <>
      <Nav changeLoad={changeLoad} color="black" />
      <StyledGallery>
        <StyledCon>{imagesArr}</StyledCon>
      </StyledGallery>
    </>
  );
};

export default Gallery;
