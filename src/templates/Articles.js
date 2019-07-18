import React from 'react';
import styled from 'styled-components';
import Article from '../components/Article';

const StyledContainer = styled.section`
  position: relative;
  top: 180px;
  height: 50vh;
  width: 100%;
`;

const Articles = () => {
  return (
    <StyledContainer>
      <Article />
    </StyledContainer>
  );
};

export default Articles;
