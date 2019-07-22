import React from 'react';
import styled from 'styled-components';

const StyledCon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contener = ({ delay }) => {
  const con = React.createRef();

  const animate = () => {
    const cn = con.current;
    const tl = new TimelineMax();

    tl.addLabel('hide', `+=${delay}s`)
      .to(cn, 0.1, { y: '50px' })
      .addLabel('show')
      .to(cn, 1, { y: '0px', opacity: 1 });
  };

  return <StyledCon ref={con} />;
};

export default Contener;
