import React from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';

const StyledHome = styled.main`
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const Logo = styled.p`
  position: fixed;
  top: 50px;
  left: 20px;
  color: white;
  opacity: 0;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Home = () => {
  const logo = React.createRef();

  const animate = () => {
    const tl = new TimelineMax();
    const lg = logo.current;

    tl.addLabel('logoAnim')
      .to(lg, 0.1, { y: '-50px' })
      .addLabel('showLogo')
      .to(lg, 1, { y: '0px', opacity: 1 });
  };

  return (
    <StyledHome>
      <Logo ref={logo}>Asdfghjk Pkjhgfd</Logo>
      {setTimeout(() => animate(), 3000)}
    </StyledHome>
  );
};

export default Home;
