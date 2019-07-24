import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';
import PropTypes from 'prop-types';

const StyledCon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  opacity: 0;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0px')};
  margin-left: 20px;
  margin-right: 20px;
  text-align: justify;
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
    console.log(delay);
    tl.addLabel('hide')
      .to(cn, 0.1, { y: '50px', delay: `${delay}` })
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

Contener.propTypes = {
  delay: PropTypes.number,
};

Contener.defaultProps = {
  delay: 0,
};

export default Contener;
