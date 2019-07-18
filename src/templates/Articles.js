import React from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';

import Article from '../components/Article';

const StyledContainer = styled.section`
  position: relative;
  top: 180px;
  height: 50vh;
  width: 100%;
  opacity: 0;
`;

const Articles = () => {
  const con = React.createRef();

  const animate = () => {
    const cn = con.current;
    const tl = new TimelineMax();

    tl.addLabel('hide')
      .to(cn, 0.1, { y: '50px' })
      .addLabel('show')
      .to(cn, 1, { y: '0px', opacity: 1 });
  };

  return (
    <StyledContainer ref={con}>
      <Article />
      {setTimeout(() => animate(), 3000)}
    </StyledContainer>
  );
};

export default Articles;
