import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import Con from '../../components/Contener';

const StyledAbout = styled.article`
  position: absolute;
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.bgArt};
  padding-bottom: 20px;
`;

const StyledContent = styled.section`
  width: 100%;
  margin-top: 100px;
`;

const StyledTitle = styled.h2`
  color: black;
  font-size: ${({ theme }) => theme.fontSize.xl}
  width: 90%;
  margin-left: 20px;
`;

const StyledSocCon = styled.section`
  margin-top: ${({ theme }) => theme.marginBox}
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  color: black;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
const About = ({ changeLoad }) => {
  return (
    <>
      <Nav color="black" changeLoad={changeLoad} />
      <StyledAbout>
        <StyledContent>
          <StyledTitle>Biologia, chemia, zdjęcia i rysunki</StyledTitle>
          <StyledSocCon>
            <StyledLink href="https://www.facebook.com/">Facebook</StyledLink>
            <StyledLink href="https://www.facebook.com/">Instagram</StyledLink>
            <StyledLink href="https://www.facebook.com/">Behance</StyledLink>
          </StyledSocCon>
          <Con marginTop="30px" value="Te krótkie słowa dobrze opisują to co będzie mozna o mnie tu przeczytać" />
          <Con
            marginTop="30px"
            delay={0.2}
            value="Jestem maturzyską po biol-chemie z zamiłowaniem do zdjęć. Fotografuję głównie swoje miasto rodzinnę i okolicę jednak zdarzają mi się bardziej 'egzotyczne' wyjazdy, które równiez dokumentuje"
          />
          <Con
            marginTop="30px"
            delay={0.4}
            value="Aktualnie moim głównym zajęciem jest nauka i w najbliszym czasie początek studiów, jednak zawsze znajduje czas na zrobienie kilku zdjęć tu i tam, nawet jeśli odwiedzałam te miejsce wiele razy."
          />
          <Con
            marginTop="30px"
            delay={0.6}
            value="Z samym robieniem zdjęć nigdy nie wiązałam przyszłości, ale jest to zainteresowanie, które sprawia mi olbrzymią przyjemność. Przez to czuję, ze mam nowe spojrzenie na wiele miejsc, które są dla mnie codziennością"
          />
          <Con
            marginTop="30px"
            delay={0.8}
            value="Same zdjęcia robię od kilku lat jednak w wolnym czasie lubię tez potrenować naswoich ulubionych zajęciach oraz pojeździć na rolkach. Często tez czytam i ostatnio sprawdzam swoje siły w rysowaniu."
          />
        </StyledContent>
      </StyledAbout>
    </>
  );
};

export default About;
