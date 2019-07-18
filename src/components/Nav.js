import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TimelineMax } from 'gsap/TweenMax';

const StyledNav = styled.nav`
  position: fixed;
  top: 50px;
  right: 20px;
  opacity: 0;
  z-index: 2;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Home = () => {
  const logo = React.createRef();

  const animate = () => {
    const tl = new TimelineMax();
    const lg = logo.current;

    tl.addLabel('logoAnim')
      .to(lg, 0.1, { y: '-50px', rotation: '5deg' })
      .addLabel('showLogo')
      .to(lg, 1, { y: '0px', opacity: 1, rotation: '0deg' });
  };

  return (
    <StyledNav ref={logo}>
      <Logo to="/about">O mnie</Logo>
      {setTimeout(() => animate(), 3000)}
    </StyledNav>
  );
};

export default Home;
