import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledArticle = styled.article`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.marginContent};
`;

const StyledCon = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDate = styled.h3`
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Article = ({ title, subtitle, img, date, src }) => {
  return (
    <Link to={src}>
      <StyledArticle>
        <StyledImg src={img} />
        <StyledCon>
          <StyledDate>{date}</StyledDate>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledCon>
      </StyledArticle>
    </Link>
  );
};

export default Article;
