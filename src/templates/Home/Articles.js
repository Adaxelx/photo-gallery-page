import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TimelineMax } from 'gsap/TweenMax';

import Article from '../../components/Article';

import img from '../../images/WWa/fontanna.jpg';

const StyledContainer = styled.section`
  position: relative;
  top: 130px;
  height: 50vh;
  width: 100%;
  opacity: 0;
`;

const Articles = ({ loaded }) => {
  const con = React.createRef();

  useEffect(() => {
    const timer = loaded ? setTimeout(animate, 100) : setTimeout(() => animate(), 3000);
    return () => clearTimeout(timer);
  });

  const data = [
    {
      title: 'Warszawa - Wisła',
      subtitle: 'Krótki wyjazd przed studiami',
      img: img,
      date: '18.07.2019',
      src: '/articles/WWa',
    },
  ];

  const animate = () => {
    const cn = con.current;
    const tl = new TimelineMax();

    tl.addLabel('hide')
      .to(cn, 0.1, { y: '50px' })
      .addLabel('show')
      .to(cn, 1, { y: '0px', opacity: 1 });
  };

  const articles = data.map(art => (
    <Article src={art.src} title={art.title} subtitle={art.subtitle} date={art.date} img={art.img} key={art.title} />
  ));

  return <StyledContainer ref={con}>{articles}</StyledContainer>;
};

export default Articles;
