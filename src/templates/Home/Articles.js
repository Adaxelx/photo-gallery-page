import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';

import Article from '../../components/Article';

import img from '../../images/WWa/fontanna.jpg';

const StyledContainer = styled.section`
  position: relative;
  margin-top: 130px;
  width: 100%;
  opacity: 0;
`;

const Articles = ({ loaded, data }) => {
  const con = React.createRef();

  useEffect(() => {
    const timer = loaded ? setTimeout(animate, 100) : setTimeout(() => animate(), 3000);
    return () => clearTimeout(timer);
  });

  const animate = () => {
    const cn = con.current;
    const tl = new TimelineMax();

    tl.addLabel('hide')
      .to(cn, 0.1, { y: '50px' })
      .addLabel('show')
      .to(cn, 1, { y: '0px', opacity: 1 });
  };

  const articles = data.map(art => (
    <Article
      src={art.path}
      title={art.title}
      subtitle={art.subtitle}
      date={art.date}
      img={art.mainImg}
      key={art.title}
    />
  ));

  return <StyledContainer ref={con}>{articles}</StyledContainer>;
};

export default Articles;
