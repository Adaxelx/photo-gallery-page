import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import Con from '../../components/Contener';
import { TweenMax } from 'gsap/all';
import { Transition } from 'react-transition-group';

const startState = { autoAlpha: 0, y: -50 };

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
  @media (orientation: landscape) and ${({ theme }) => theme.device.mobileM},
    (orientation: portrait) and ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: flex-start;
  }
`;

const StyledTCon = styled.section`
  @media (orientation: landscape), (orientation: portrait) and ${({ theme }) => theme.device.tablet} {
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
  @media (orientation: landscape) and ${({ theme }) => theme.device.mobileM},{
    width: 80%;
    font-size: 6rem
  }
  @media (orientation: landscape) and ${({ theme }) => theme.device.tablet},
  (orientation: portrait) and ${({ theme }) => theme.device.tablet}{
    width: 80%;
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
  @media (orientation: landscape) and ${({ theme }) => theme.device.mobileM},
  (orientation: portrait) and ${({ theme }) => theme.device.tablet}{
    width: 50%;
    
  }
`;

const StyledConCtn = styled.section`
  width: 100%;
`;

const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  color: black;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledCheck = styled.div`
  width: 100%;
  @media (orientation: landscape) and ${({ theme }) => theme.device.mobileM},
    (orientation: portrait) and ${({ theme }) => theme.device.tablet} {
    width: 50%;
  }
`;
class About extends React.Component {
  socials = React.createRef();
  contener = React.createRef();

  state = { active: false };

  handleScroll = () => {
    const { socials, contener } = this;
    const { active } = this.state;
    const width = window.innerWidth >= 640 ? 100 : 0;
    const scrollV = window.scrollY;
    const offsetTopS = socials.current.offsetTop;
    const offsetTopC = contener.current.offsetTop;
    if (!active && offsetTopC - window.innerHeight < scrollV) {
      this.setState({
        active: true,
      });
    }
    if (scrollV + width > offsetTopS) {
      socials.current.style.transform = `translateY(${scrollV - offsetTopS + width}px)`;
    }
  };

  componentDidMount() {
    const { handleScroll } = this;
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }

  componentWillUnmount() {
    const { handleScroll } = this;
    window.removeEventListener('scroll', handleScroll);
  }

  render() {
    const { changeLoad, show } = this.props;
    const { socials, contener } = this;
    const { active } = this.state;
    return (
      <Transition
        unmountOnExit
        in={show}
        timeout={1000}
        onEnter={node => TweenMax.set(node, startState)}
        addEndListener={(node, done) => {
          TweenMax.to(node, 0.5, {
            autoAlpha: show ? 1 : 0,
            y: show ? 0 : 50,
            onComplete: done,
          });
        }}
      >
        <StyledAbout>
          <Nav color="black" changeLoad={changeLoad} />
          <StyledTCon>
            <StyledTitle>Biologia, chemia, zdjęcia i rysunki</StyledTitle>
          </StyledTCon>
          <StyledContent>
            <StyledSocCon ref={socials}>
              <StyledLink href="https://www.facebook.com/">Facebook</StyledLink>
              <StyledLink href="https://www.facebook.com/">Instagram</StyledLink>
              <StyledLink href="https://www.facebook.com/">Behance</StyledLink>
            </StyledSocCon>
            <StyledCheck ref={contener}>
              {active ? (
                <StyledConCtn>
                  <Con
                    marginTop="30px"
                    value="Te krótkie słowa dobrze opisują to co będzie mozna o mnie tu przeczytać"
                  />
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
                  <Con marginTop="30px" delay={1} value="Mozna się ze mną skontaktować poprzez maila: lkjhg00@xd.pl" />
                </StyledConCtn>
              ) : (
                ''
              )}
            </StyledCheck>
          </StyledContent>
        </StyledAbout>
      </Transition>
    );
  }
}

export default About;
