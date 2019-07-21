import React from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';

import Nav from './Nav';

const StyledGallery = styled.section`
    background-color: ${({ theme }) => theme.bgArt}
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledConTit = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  color: black;
  z-index: 1;
  margin-top: 100px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledDate = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  align-self: flex-end;
`;

const StyledCon = styled.section`
  opacity: 0;
  width: 95%;
  margin-top: 50px;
`;

const StyledConImg = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.marginBox};
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledDescription = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: ${({ theme }) => theme.marginContent};
`;

const Gallery = ({ changeLoad, title, images, nextArt, date }) => {
  const con = React.createRef();

  const animate = () => {
    const cn = con.current;
    const tl = new TimelineMax();

    tl.addLabel('hide')
      .to(cn, 0.1, { y: '50px' })
      .addLabel('show')
      .to(cn, 1, { y: '0px', opacity: 1 });
  };

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
        <StyledConTit>
          <StyledTitle>{title}</StyledTitle>
          <StyledDate>{date}</StyledDate>
        </StyledConTit>
        <StyledCon ref={con}>{imagesArr}</StyledCon>
      </StyledGallery>
      {setTimeout(() => animate(), 100)}
    </>
  );
};

export default Gallery;
