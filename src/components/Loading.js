import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';

const StyledLoading = styled.section`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

const StyledCon = styled.section`
  position: absolute;
  top: 30%;
  width: 100%;
  padding-left: 20px;
`;

const StyledTitles = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xxl}
    color: transparent;
    -webkit-text-stroke: 1px white;
`;

const StyledWord = styled.span`
  display: inline-block;
  opacity: 0;
`;

const Loading = () => {
  useEffect(() => {
    const timer = setTimeout(animate, 100);
    return () => clearTimeout(timer);
  });

  const con = React.createRef();
  const tit1 = React.createRef();
  const word1 = React.createRef();
  const word2 = React.createRef();
  const tit2 = React.createRef();
  const word3 = React.createRef();
  const word4 = React.createRef();

  const animate = () => {
    const tl = new TimelineMax();
    const t1 = tit1.current;
    const t2 = tit2.current;
    const w1 = word1.current;
    const w2 = word2.current;
    const w3 = word3.current;
    const w4 = word4.current;
    const cn = con.current;

    tl.addLabel('hideWord')
      .to(w1, 0.1, { x: '-300px' })
      .to(w3, 0.1, { x: '-300px' })
      .to(w4, 0.1, { x: '300px' })
      .to(w2, 0.1, { x: '300px' }, 'hideWord')
      .addLabel('showWord')
      .to(w1, 0.5, { x: '0px', opacity: 1 })
      .to(w2, 0.5, { x: '0px', opacity: 1 }, 'showWord')
      .addLabel('showWord')
      .to(w1, 0.2, { x: '0px', opacity: 1 })
      .to(w2, 0.2, { x: '0px', opacity: 1 }, 'showWord')
      .addLabel('showWord2')
      .to(w3, 0.5, { x: '0px', opacity: 1 }, 'showWord2')
      .to(w4, 0.5, { x: '0px', opacity: 1 }, 'showWord2')
      .addLabel('moveTop', '+=0.5')
      .to(t1, 0.5, { y: '-50px', rotation: '5deg', opacity: 0 }, 'moveTop')
      .to(t2, 0.5, { y: '-50px', rotation: '5deg', opacity: 0 }, '+=0.05', 'moveTop')
      .addLabel('hideAll')
      .to(cn, 0.1, { scale: '0' });
  };

  return (
    <StyledLoading ref={con}>
      <StyledCon>
        <StyledTitles ref={tit1}>
          <StyledWord ref={word1}>Angelika</StyledWord> <StyledWord ref={word2}>Pklklkl</StyledWord>
        </StyledTitles>
        <StyledTitles ref={tit2}>
          <StyledWord ref={word3}>Pasja do</StyledWord> <StyledWord ref={word4}>Zdjęć</StyledWord>
        </StyledTitles>
      </StyledCon>
    </StyledLoading>
  );
};

export default Loading;
