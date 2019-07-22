import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';

const StyledCon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10vh;
  color: black;
  opacity: 0;
  margin-top: ${({ marginTop }) => marginTop};
`;

const Contener = ({ delay, value, marginTop }) => {
  const con = React.createRef();

  useEffect(() => {
    const timer = setTimeout(animate, 100);
    return () => clearTimeout(timer);
  });

  const animate = () => {
    const cn = con.current;
    const tl = new TimelineMax();

    tl.addLabel('hide', `+=${delay}s`)
      .to(cn, 0.1, { y: '50px' })
      .addLabel('show')
      .to(cn, 1, { y: '0px', opacity: 1 });
  };

  return (
    <>
      <StyledCon marginTop={marginTop} ref={con}>
        {value}
      </StyledCon>
    </>
  );
};

export default Contener;
