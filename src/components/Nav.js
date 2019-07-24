import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TimelineMax } from 'gsap/TweenMax';

const StyledNav = styled.nav`
  position: fixed;
  top: 50px;
  width: 100%;
  opacity: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: ${({ color }) => color};
  text-decoration: none;
  ${({ margin }) => margin}
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Nav = ({ loaded, home, color, changeLoad }) => {
  const logo = React.createRef();

  useEffect(() => {
    const timer = setTimeout(animate, home ? (loaded ? 100 : 3000) : 100);
    return () => clearTimeout(timer);
  });

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
      <StyledNav home={home} ref={logo}>
        <StyledLink onClick={changeLoad} color={color} margin="margin-left: 20px;" to="/">
          Asdfghjk Pkjhgfd
        </StyledLink>
        <StyledLink onClick={changeLoad} color={color} margin="margin-right: 20px;" to="/about">
          O mnie
        </StyledLink>
      </StyledNav>
    </>
  );
};

export default Nav;
