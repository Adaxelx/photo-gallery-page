import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TimelineMax } from 'gsap/TweenMax';

const StyledNav = styled(Link)`
  position: fixed;
  top: 50px;
  right: 20px;
  color: white;
  z-index: 1;
  opacity: 0;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Nav = () => {
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
    <>
      <StyledNav to="/about" ref={logo}>
        O mnie
      </StyledNav>
      {setTimeout(() => animate(), 3000)}
    </>
  );
};

export default Nav;
