import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledArticle = styled.article`
  position: relative;
  color: white;
  ${({ next }) => (next ? '-webkit-text-stroke: 1px black; color: transparent;' : '')}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImgC = styled.div`
  position: relative;
  width: 100%;
  ${({ next, theme }) => (next ? '' : `margin-bottom: ${theme.marginContent};`)}
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(155deg, rgba(2, 0, 36, 1) 0%, rgba(136, 135, 152, 1) 63%, rgba(255, 255, 255, 1) 100%);
    opacity: 0.3;
  }
  @media (orientation: landscape) {
    width: 60%;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledCon = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  ${({ next }) => (next ? 'position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 100%' : '')}
`;

const StyledDate = styled.h3`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Article = ({ title, subtitle, img, date, src, next }) => {
  return (
    <Link to={src}>
      <StyledArticle>
        <StyledImgC next={next}>
          <StyledImg src={img} />
        </StyledImgC>
        <StyledCon next={next}>
          {next ? 'Kolejny artykuł' : <StyledDate>{date}</StyledDate>}
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledCon>
      </StyledArticle>
    </Link>
  );
};

export default Article;
