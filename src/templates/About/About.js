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
  margin-top: 30px;
`;

const StyledTCon = styled.section`
  @media (orientation: landscape) {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const StyledTitle = styled.h2`
  color: black;
  font-size: ${({ theme }) => theme.fontSize.xl}
  width: 90%;
  margin-left: 20px;
  margin-top: 100px;
  @media (orientation: landscape){
    font-size: 6rem
  }
  @media (orientation: landscape) and ${({ theme }) => theme.device.mobileM}{
    width: 80%;
    font-size: 6rem
  }
  @media (orientation: landscape) and ${({ theme }) => theme.device.tablet}{
    font-size: 8rem
  }
  @media (orientation: landscape) and ${({ theme }) => theme.device.laptop}{
    font-size: 6rem
    margin-left: 100px;
  }
`;

const StyledSocCon = styled.section`
  margin-top: ${({ theme }) => theme.marginBox}
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  color: black;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
class About extends React.Component {
  socials = React.createRef();

  handleScroll = () => {
    const { socials } = this;

    const scrollV = window.scrollY;
    const offsetTop = socials.current.offsetTop;
    console.log(offsetTop);
    if (scrollV > offsetTop) {
      socials.current.style.transform = `translateY(${scrollV - offsetTop}px)`;
    }
  };

  componentDidMount() {
    const { handleScroll } = this;
    window.addEventListener('scroll', handleScroll);
  }

  componentWillUnmount() {
    const { handleScroll } = this;
    window.removeEventListener('scroll', handleScroll);
  }

  render() {
    const { changeLoad } = this.props;
    const { socials } = this;
    return (
      <>
        <Nav color="black" changeLoad={changeLoad} />
        <StyledAbout>
          <StyledTCon>
            <StyledTitle>Biologia, chemia, zdjęcia i rysunki</StyledTitle>
          </StyledTCon>

          <StyledSocCon ref={socials}>
            <StyledLink href="https://www.facebook.com/">Facebook</StyledLink>
            <StyledLink href="https://www.facebook.com/">Instagram</StyledLink>
            <StyledLink href="https://www.facebook.com/">Behance</StyledLink>
          </StyledSocCon>
          <StyledContent>
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
  }
}

export default About;
