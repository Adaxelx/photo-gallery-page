import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Loading from './components/Loading';
import Home from './templates/Home';
import Gallery from './components/Gallery';

import img from './images/WWa/fontanna.jpg';

class App extends React.Component {
  data = [
    {
      title: 'Warszawa - Wisła',
      images: [{ src: img, description: 'Park fontann' }],
      path: '/articles/WWa',
      nextArt: {
        title: 'Bielsko Podlaski zachód',
        subtitle: 'Spokojny dzień w domu',
        img: '',
        date: '19.07.2019r.',
      },
    },
  ];

  state = {
    loaded: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loaded: true }), 3000);
  }

  render() {
    const { loaded } = this.state;
    const { data } = this;
    const routes = data.map(art => (
      <Route
        key={art.path}
        path={art.path}
        exact
        render={() => <Gallery title={art.title} images={art.images} nextArt={art.nextArt} />}
      />
    ));
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Nav loaded={loaded} />
          <Loading />
          <Switch>
            <Route path="/" exact render={() => <Home loaded={loaded} />} />
            {routes}
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
